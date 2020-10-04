/**
 * @class Menu is options action , position and event 
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
        this.activeElement();
    }

    /**
     * unhauthorize basic behavior right click 
     * @returns {void}
     */
    unauthorizeRightClick()
    {
        window.addEventListener('contextmenu',(e) => e.preventDefault());
    }

    /**
     * create option menu
     * @returns {HTMLElement} ul
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
     * @returns {void}
     */
    openOrClose(menu)
    {   
        if(menu.classList.contains('hidden'))
        {   
            menu.classList.remove('hidden');
        }
    }

    /**
     * option list of element option
     * @returns {void}
     */
    optionList ()
    {
        return {
            fr : ['deplacer', 'supprimer', 'modifier la taille','editer'], 
            en  : ['move','remove','resize','edition'],
            className : {
                drag : 'draggable',
                resize : 'resize',
                edit : 'edit'
            }
        }
    }

    /**
     * open or close option element list when user click on 
     * @returns {void}
     */
    optionOnElement()
    {
        let optionList = document.querySelectorAll('#select-type option');

        optionList.forEach( option => {

            option.addEventListener('click', (e)=> {

                let list = document.querySelectorAll('#main-container .element');
                
                list.forEach( elt => {

                    elt.addEventListener('contextmenu',(e)=> {
                        
                        if(e.target.classList.contains('element'))
                        {
                            this.disableAll();
                            this.openOrClose(this.menu);
                        }
                    });
                });
            })
        });

        this.close();
    }

    /**
     * Close menu 
     */
    close()
    {   

        window.addEventListener('contextmenu', (e)=>{

            if(!e.target.classList.contains('element') && !this.menu.classList.contains('hidden'))
            {
                this.disableAll();
                this.menu.classList.add('hidden');
            }
        });

        window.addEventListener('click',(e)=>{
            
            if(e.target.classList.contains('element') && !this.menu.classList.contains('hidden'))
            {
                this.disableAll();
                this.menu.classList.add('hidden');
            }
        });

        window.addEventListener('click', (e)=>{

            if(!e.target.classList.contains('element') )
            {
                this.disableAll();
                this.menu.classList.add('hidden');
            }
        });
    }

    /**
     * Disable all elements which contains '.target' for to keep once 
     * '.target' at time
     */
    disableAll()
    {
        let targets = document.querySelectorAll('.target');

        if(targets.length > 0)
        {
            targets.forEach( t => {

                t.classList.remove('target')
            });
        }
    }

    /**
     * Listen current mouse position return them 
     * @returns {object} number position
     * @returns {void}
     */
    mousePosition()
    {   
        let pos = this.getPosition(this.menu);

        window.addEventListener('contextmenu', (e)=>{
            
            let x  = e.clientX - this.nav.clientWidth ;
            let y  = e.clientY - this.nav.clientTop;
            let menu = document.querySelector('#option-menu'); 
            
            menu.style.top = (y - 10) +  'px';
            menu.style.left = (x - 21) +  'px';
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

    /**
     * '.target' element active or not when right click
     * @returns {void}
     */
    activeElement()
    {
        window.addEventListener('contextmenu', (e)=>{

            let target = e.target;
            let targetClass = document.querySelector('.target');
            
            if( target.classList.contains('element') && !this.menu.classList.contains('hidden') )
            {   
                target.classList.add('target');

            }
            else if( !target.classList.contains('element') )
            {
                if(targetClass)
                {
                    targetClass.classList.remove('target');
                }
            }else {
                target.classList.remove('target');
            }
        });

        window.addEventListener('click', (e)=>{

            let target = e.target;
            let targetClass = document.querySelector('.target');
            
            if( target.classList.contains('element') )
            {   
                target.classList.add('target');

            }else if( !target.classList.contains('element') )
            {
                if(targetClass)
                {
                    targetClass.classList.remove('target');
                }
            }else {
                target.classList.remove('target');
            }
        });
    }
}