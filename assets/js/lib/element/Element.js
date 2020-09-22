export class Element {
    
    constructor()
    {   
        this.bigContainer = document.querySelector('.container')
        this.main = document.querySelector('.container main')
        this.container = document.querySelector('#main-container')
        this.listType  = document.querySelector('#select-type');
        this.create();
    }

    /**
     * Init an element ont the grid
     * @param {HTMLElement} element 
     */
    center(element) 
    {   
        let posContainer = this.getPosition(this.container);
        let leftContainer = posContainer.left;
        let heightContainer = posContainer.height;

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
                    let element = document.createElement('input');
                    element.classList.add('element' , e.target.value);
                    this.container.appendChild(element);
                    element.value = 'Nouveau texte';
                    this.center(element);   
                }
            })   
        });
    }
    
    /**
     * Get an html element and returs his location
     * @param {HTMLElement} element 
     * @returns {DOMRect} getclientRects[0]
     */
    getPosition(element)
    {
        return (element.getClientRects()[0])
    }
}
