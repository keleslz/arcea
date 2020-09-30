export class ColorBoard
{
    constructor()
    {
        this.colorBoard = document.querySelector('#color-menu');
        this.prevent()
        this.action();

    }

    prevent()
    {
        window.addEventListener('click', (e)=> {

            if(this.colorBoard)
            {
                e.preventDefault();
            }
        })
    }

    /**
     * open colorboard
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