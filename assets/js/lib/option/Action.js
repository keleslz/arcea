import { Menu } from "./Menu";

export class Action extends Menu
{
    constructor()
    {   
        super();
        this.menu = document.querySelector('#option-menu');
        this.set();
    }

    set()
    {   
        this.menu.children.forEach( child => {
            
            child.addEventListener('click',(e)=>{
                // console.log(e)
            })
        });
    }

    rule(element, e)
    {
        switch (element.id) {
            case 'option-menu-move':
                this.move(element, e)
                break;
            case 'option-menu-remove':
                this.remove('remove')
                break;
            case 'option-menu-resize':
                this.resize('resize')
                break;
            default:
                break;
        }
    }
    
    move(element, e)
    {

    }

    // resize(element)
    // {  
    //     if(element.classList.contains())
    //     {

    //     }
    // }

    // remove(element)
    // {
    //     if(element.classList.contains())
    //     {

    //     }
    // }

}