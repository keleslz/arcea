/**
 * @class
 */
export class Grid 
{
    constructor()
    {
        this.main = document.querySelector('.container main')
        this.lineSize = 10; 
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
     * Create grid with several line
     * @param {number} size 
     */
    create(size)
    {
        const LINESIZE = this.lineSize;
        const LINEPERROWX = Math.floor(size.width/LINESIZE);
        const LINEPERROWY = Math.floor(size.height/LINESIZE);
        
        const GRIDCONTAINER = document.createElement('div');
        const VERTICALCONTAINER = document.createElement('div');
        const HORIZONTALCONTAINER = document.createElement('div');
        
        GRIDCONTAINER.id = 'grid-container';
        VERTICALCONTAINER.id = 'line-vertical-container';
        HORIZONTALCONTAINER.id = 'line-horizontal-container';
        
        this.main.appendChild(GRIDCONTAINER);

        GRIDCONTAINER.appendChild(VERTICALCONTAINER);
        GRIDCONTAINER.appendChild(HORIZONTALCONTAINER);

        for (let i = 0; i <  LINEPERROWX  ; i++) {

            const LINE = document.createElement('div');
            LINE.classList.add('grid-vertical-line');
            this.vertical(VERTICALCONTAINER, LINE , i);
        }

        for (let i = 0; i <  LINEPERROWY  ; i++) {

            const LINE = document.createElement('div');
            LINE.classList.add('grid-horizontal-line');
            this.horizontal(HORIZONTALCONTAINER, LINE , i);
        }
    }

    /**
     * Create vertical line
     * @param {HTMLElement} gridContainer 
     * @param {HTMLElement} element 
     * @param {Nmber} i 
     */
    vertical (gridContainer, element, i)
    {   
        gridContainer.appendChild(element);
        
        element.style.left = this.squareSize + 'px';
        element.style.marginLeft = (i * this.lineSize) + 'px';
    }

    /**
     * Create horizontal line
     * @param {HTMLELement} gridContainer 
     * @param {HTMLElement} element 
     * @param {Number} i 
     */
    horizontal (gridContainer, element,i)
    {
        gridContainer.appendChild(element);
        
        element.style.top = (i * this.lineSize) + 'px';
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

    getPosition(element)
    {
        return (element.getClientRects()[0])
    }

}