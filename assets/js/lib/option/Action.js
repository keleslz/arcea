import { Menu } from "./Menu";

/**
 * @class contains all element event when right click 
 */
export class Action extends Menu
{
    constructor()
    {   
        super();
        this.menu = document.querySelector('#option-menu');
        let optionListName = this.name();
        this.type(optionListName);
    }

    /**
     * 
     * @param {Array} optionListName An array with option menu list
     */
    type(optionListName)
    {   
        for (let i = 0; i < optionListName ; i++) {
            
            let child = optionListName[i];
            
            this.menu.children.forEach( child => {
            
                child.addEventListener('click',(e)=>{
    
                    let target = e.target;
                    let classTargetElement = document.querySelector('.target');
    
                    if(target.innerHTML === 'deplacer')
                    {
                        if(classTargetElement)
                        {
                            classTargetElement.classList.add('draggable');
                        }
                    }
                    
                    if(target.innerHTML === 'modifier la taille')
                    {
                        if(classTargetElement)
                        {
                            classTargetElement.classList.add(child.innerHTML);
                        }
                    }
                })
            });
        }
        
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

        return word
    }

}