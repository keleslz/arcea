import { elementType } from "prop-types";

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
