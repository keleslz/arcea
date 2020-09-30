import { Menu } from "./Menu";

/**
 * @class contains all element event when right click 
 */
export class Action extends Menu
{
    constructor()
    {   
        super();
        this.options = this.optionList().className;
        this.menu = document.querySelector('#option-menu');
        let optionListName = this.name();
        this.type(optionListName);
    }

    /**
     * Define a class according to the chosen option
     * @param {Array} optionListName An array with option menu list
     */
    type(optionListName)
    {   
        let option = optionListName;

        for (let i = 0; i < optionListName.length ; i++) {
            
            this.menu.children.forEach( child => {

                child.addEventListener('click',(e)=>{

                    let target = e.target;
                    let classTargetElement = document.querySelector('.target');

                    this.possible(target, classTargetElement);
                })
            });
        }
        
    }

    /**
     * Possible action list 
     * @param {HTMLElement} target e.target
     * @param {HTMLElement} classTargetElement 
     */
    possible(target, classTargetElement)
    {   
        // MOVE className
        if(target.innerHTML === 'deplacer' )
        {   
            if(classTargetElement)
            {
                this.stopEvent(classTargetElement, this.options.drag);
                classTargetElement.classList.add(this.options.drag);
            }
        }
        
        // REMOVE className          
        if(target.innerHTML === 'supprimer')
        {
            if(classTargetElement)
            {
                classTargetElement.remove();
            }
        }

        //RESIZE className
        if(target.innerHTML === 'modifier la taille')
        {
            if(classTargetElement)
            {
                this.stopEvent(classTargetElement, this.options.resize);
                classTargetElement.classList.add(this.options.resize);
            }
        }

        // EDIT className
        if(target.innerHTML === 'editer' )
        {   
            if(classTargetElement)
            {
                this.stopEvent(classTargetElement, this.options.edit);
                classTargetElement.classList.add(this.options.edit);
            }
        }
}
    
    /**
     * Stop current action
     * @param {HTMLElement} classTargetElement
     * @param {String} className
     */
    stopEvent(classTargetElement, className)
    {   
        classTargetElement.addEventListener('mouseup',(e)=>{
           
            e.target.classList.remove(className);
            this.removeAll(e.target);
        })
    }

    /**
     * Set an array list of menu option item
     * @param {Array} optionListName An array with option menu list
     * @returns {Array}
     */
    name()
    {
        let ids = [];

        for (let i = 0; i < this.menu.childElementCount ; i++) 
        {   
            let child = this.menu.children[i];
            let word = child.id.replace('option-menu-','');
            ids.push(word);
        }
        return ids
    }

    /**
     * Remove all HTML class in on target
     * @param {HTMLElement} target
     */
    removeAll(target)
    {
        for (const key in this.options ) {

            if (this.options.hasOwnProperty(key)) {
                
                const option = this.options[key];

                if(target.classList.contains(option))
                {
                    target.classList.remove(option);
                }
            }
        }
    }
}