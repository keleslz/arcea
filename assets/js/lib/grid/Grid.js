export class Grid 
{
    constructor()
    {
        this.squareSize = 10; 
        this.mainSize = this.size();
        this.create(this.mainSize);
    }

    /**
     * Main container size
     */
    size()
    {
        const MAIN = document.querySelector('.container main');
        
        return {
            width : MAIN.clientWidth,
            height : MAIN.clientHeight,
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
        
        const MAIN = document.querySelector('.container main')

        for (let i = 0; i <  AIRMAIN ; i++) {

            let square = document.createElement('div');
            MAIN.appendChild(square);

            square.style.display = 'inline-block';
            square.style.width = SQUARESIZE + 'px';
            square.style.height = SQUARESIZE + 'px';
            square.style.border = '1px solid #ccc';
        }
    }

}