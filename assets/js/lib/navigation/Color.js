export class ColorBoard
{
    constructor()
    {
        this.colorBoard = document.querySelector('#color-menu');
        this.action();

    }

    /**
     * Open or close colorboard
     */
    action()
    {   
        window.addEventListener('click', () => {

            let elements = document.querySelector('.edit');

            this.colorBoard.style.transition = '.2s ease-in .1s';
            const heightMax  = 100;
            const heightMin  = 20;

            if(elements)
            {   
                this.open(heightMax);
            }else{
    
                this.close(heightMin);
            }
        })
    }

    /**
     * Open action
     * @param {Number} heightMax height max for colorboard
     */
    open(heightMax)
    {
        this.colorBoard.style.height = heightMax + 'px';

        console.log(this.colorBoard.offsetHeight);

        setTimeout(() => {
            
            for (let i = 0; i < this.colorBoard.children.length; i++) 
            {
                const item = this.colorBoard.children[i];

                if(item.classList.contains('hidden'))
                {
                    if (!item.classList.contains('#color-label')) {
                        
                        item.classList.remove('hidden');
                    }
                }
            }
        }, 300);
    }

    /**
     * Close action  
     * @param {Number} heightMin height min for colorboard
     */
    close(heightMin)
    {
        if(this.colorBoard.offsetHeight > heightMin)
        {
            for (let i = 1; i < this.colorBoard.children.length; i++) 
            {
                const item = this.colorBoard.children[i];

                if( !item.classList.contains('hidden') )
                {
                    item.classList.add('hidden');
                }
            }

            this.colorBoard.style.height = heightMin + 'px';
        }
    }
}