/**
 * @class create html element
 */
export class Element {
    
    constructor()
    {   
        this.bigContainer = document.querySelector('.container')
        this.main = document.querySelector('.container main')
        this.container = document.querySelector('#main-container')
        this.listType  = document.querySelector('#select-type');
        this.create();
        this.focus();
    }

    /**
     * Init an element ont the grid
     * @param {HTMLElement} element 
     */
    center(element) 
    {   
        element.style.position = 'absolute';
    }

    /**
     * Create an HTML element when one element in the menu list was selected
     */
    create()
    {   
        this.listType.children.forEach( child => {

            child.addEventListener('click', (e) => {
                
                let target = e.target;

                if(target.value !== '' )
                {   
                    let element = '';

                    if( target.value.includes('box'))
                    {   
                        element = document.createElement('div');
                        element.classList.add('element' ,'box', target.value, 'dropzone');
                        this.setBoxStyle(element);
                        
                    }else{
                        
                        element = document.createElement('textarea');
                        element.classList.add('element' , target.value);
                        element.value = 'Nouveau texte';
                    }

                    this.container.appendChild(element);
                    this.center(element);   
                }
            })   
        });
    }

    /**
     * Set width propertie for a box element thank classList
     * @param {HTMLElement} element a box element
     */
    setBoxStyle(element)
    {   
        let width = element.classList[2].replace('box-', '');

        element.style.width = width + '%';
        element.style.height = '100px';
        element.style.left = 0; 
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

    /**
     * Add focus to all html element in the grid
     */
    focus()
    {
        window.addEventListener('click', ()=>{
            
            let elements = document.querySelectorAll('.element');

            if(elements.length > 0)
            {
                elements.forEach( element => {

                    element.addEventListener('focus', (e)=>{
                        
                        if(e.target.classList.contains('element'))
                        {
                            e.target.style.border ='1px solid #246c9c';
                        }   
                    });

                    element.addEventListener('blur', (e)=>{
                        
                        if(e.target.classList.contains('element'))
                        {
                            e.target.style.border = '';
                        }   
                    });  
                });
            }
        })
    }
}
