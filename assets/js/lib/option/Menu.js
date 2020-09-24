/**
 * @class right click option in the grid 
 */
export class Menu {

    constructor()
    {   
        this.main = document.querySelector('#main-container');
        this.nav = document.querySelector('nav')
        this.elements = document.querySelectorAll('#main container .element')
        this.unauthorizeRightClick();
        this.menu = this.create();
        this.mousePosition();
        this.optionOnElement();
    }

    unauthorizeRightClick()
    {
        window.addEventListener('contextmenu',(e) => e.preventDefault());
    }

    /**
     * create option menu
     */
    create()
    {
        let liFr = this.optionList().fr;
        let liEn = this.optionList().en;
        let ul = document.createElement('ul');
        let i = 0;

        ul.id = 'option-menu';
        ul.classList.add('hidden');
        this.main.appendChild(ul);

        liFr.forEach( li => {

            let item = document.createElement('li');

            ul.appendChild(item);
            item.innerHTML = liFr[i];
            item.id = 'option-menu-' + liEn[i];
            i++;
        });

        return ul;
    }

    /**
     * Html element to open
     * @param {HTMLElement} menu 
     */
    openOrClose(menu)
    {   
        if(menu.classList.contains('hidden'))
        {   
            menu.classList.remove('hidden');
        }else{
            menu.classList.add('hidden');
        }
    }

    /**
     * option list of element option
     */
    optionList ()
    {
        return {
            fr : ['deplacer', 'supprimer', 'modifier la taille'], 
            en  : ['move','remove','resize']
        }
    }

    /**
     * open or close option element when user click with multi event
     */
    optionOnElement()
    {
        let itemList = document.querySelectorAll('#select-type option');

        itemList.forEach( item => {

            item.addEventListener('click', (e)=> {

                let list = document.querySelectorAll('#main-container .element');
                
                list.forEach( elt => {
                    
                    elt.addEventListener('contextmenu',(e)=> {
                        
                        if(e.target.classList.contains('element'))
                        {
                            this.openOrClose(this.menu);
                            e.target.classList.add('target')
                        }
                    });
                });
            })
        });

        window.addEventListener('contextmenu', (e)=>{

            // && this.menu.classList.contains('element')
            if(!e.target.classList.contains('element') )
            {
                this.menu.classList.add('hidden');

           /*      
                
                let target = document.querySelector('.target');
                console.log(target);
                
                if(target)
                {
                    console.log(e)
                    e.classList.remove('target')
                } */
            }
        });

        window.addEventListener('click', (e)=>{

            if(!e.target.classList.contains('element') )
            {
                this.menu.classList.add('hidden')
            }
        });
    }

    /**
     * Listen current mouse position return them 
     * @returns {object} number position
     */
    mousePosition()
    {   
        let pos = this.getPosition(this.menu);

        window.addEventListener('contextmenu', (e)=>{
            
            let x  = e.clientX - this.nav.clientWidth ;
            let y  = e.clientY - this.nav.clientTop;
            let menu = document.querySelector('#option-menu'); 
            
            menu.style.top = y + 'px';
            menu.style.left = x + 'px';
        })
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