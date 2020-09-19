export class Element {
    
    constructor()
    {   
        this.main = document.querySelector('.container main')
        this.container = document.querySelector('#main-container')
        this.listType  = document.querySelector('#select-type');
        this.initAction();
        this.create();
        this.select();
        // this.remove();
    }

    round()
    {
        return Math.round(1)
    }

    /**
     * Init an element ont the grid
     * @param {HTMLElement} element 
     */
    center(element) 
    {   
        let htmlClass = 'element-' + element.tagName.toLowerCase();
        
        let posContainer = this.getPosition(this.container);
        let leftContainer = posContainer.left;
        let heightContainer = posContainer.height;

        element.classList.add('element', htmlClass) 
        element.style.position = 'absolute';
        element.style.top = heightContainer / 2 + 'px';
        element.style.left = leftContainer +  'px';
        element.textContent = 'Nouvel element';
    }


    /**
     * Create an HTML element when one element in the menu list was selected
     */
    create()
    {   
        this.listType.children.forEach( child => {

            child.addEventListener('click', (e) => {
                
                if(e.target.value !== '' )
                {
                    let element = document.createElement(e.target.value);
                    this.container.appendChild(element);
                    this.center(element);      
                }
            })   
        });
    }

    select()
    {
        window.addEventListener('click',(e)=>{
            let target = e.target;

            if(target.classList.contains('element'))
            {   
                if(!target.classList.contains('focus'))
                {                          
                    let position  = this.getPosition(target);
                    console.log(position.top)
                    console.log(position.left)
                    let textContent = target.innerHTML;

                    let save = document.querySelector('#save-text');
                    let input  = document.querySelector('#input-data');

                    save.innerHTML = textContent;
                    target.classList.add('hidden');
                    input.classList.replace('hidden', 'focus');
                    
                    input.style.position = 'absolute';
                    input.style.top = position.top + 'px';
                    input.style.left = Math.floor(position.left/2) + 'px';
                    input.style.width = Math.floor(position.width) + 'px';
                    input.style.height = position.height + 'px';
                    input.value = save.innerHTML;
                }else{

                }
            }
        })
    }

    initAction()
    {
        let save = document.createElement('div');
        save.id = 'save-text';
        save.classList.add('hidden')

        let input = document.createElement('input');
        input.id = 'input-data'
        input.classList.add('hidden')

        document.body.appendChild(save)
        this.container.appendChild(input)
    }

    getPosition(element)
    {
        return (element.getClientRects()[0])
    }

}
