export class Grid 
{
    constructor()
    {
        this.init();
        this.main = document.querySelector('.container main')
        this.squareSize = 10; 
        this.mainSize = this.size(this.main);
        this.elementContainer()
        this.create(this.mainSize);
    }

    /**
     * Main container size
     * @param {HTMLElement} element an HTML element
     * @return {object} sizes
     */
    size(element)
    {
        return {
            width : element.clientWidth,
            height : element.clientHeight,
        }
    }

    /**
     * Create grid
     * @param {number} size 
     */
    create(size)
    {
        const SQUARESIZE = this.squareSize;
        const SQUAREPERROWX = Math.floor(size.width/SQUARESIZE);
        const SQUAREPERROWY = Math.floor(size.height/SQUARESIZE);
        const AIRMAIN = SQUAREPERROWX * SQUAREPERROWY;

        for (let i = 0; i <  AIRMAIN ; i++) {

            let square = document.createElement('div');
            this.main.appendChild(square);

            square.style.display = 'inline-block';
            square.style.width = SQUARESIZE + 'px';
            square.style.height = SQUARESIZE + 'px';
            square.style.border = '1px solid #ccc';
        }
    }

    /**
     * Create a container that's receive the futur HTML element created
     */
    elementContainer()
    {
        let div = document.createElement('div');
        div.id = 'main-container';
        this.main.appendChild(div);

        div.style.position = 'absolute';
        div.style.top = this.main.getClientRects()[0].top + 'px';
        div.style.left = this.main.getClientRects()[0].left + 'px';
        div.style.width = this.main.getClientRects()[0].width + 'px';
        div.style.height = this.main.getClientRects()[0].height + 'px';
    }

    init()
    {
        window.addEventListener('contextmenu', (e)=>{
            e.preventDefault();
        })
    }
}