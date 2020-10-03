/**
 * @class create a grid system
 */
export class Grid
{
    constructor()
    {
        this.container = document.querySelector('.container');
        this.createMain();
        this.main = document.querySelector('.container main')
        this.lineSpace = 10; 
        this.mainSize = this.size(this.main);
        this.elementContainer();
        this.create(this.mainSize);
    }

    /**
     * Create vertical line
     * 
     * @param {HTMLElement} axisContainer 
     * @param {HTMLElement} element 
     * @param {Nmber} i number++
     */
    vertical (axisContainer, element, i)
    {   
        axisContainer.appendChild(element);
        element.style.left = (i * this.lineSpace) + 'px';
    }

    /**
     * Create horizontal line
     * 
     * @param {HTMLELement} axisContainer 
     * @param {HTMLElement} element 
     * @param {Number} i 
     */
    horizontal (axisContainer, element,i)
    {
        axisContainer.appendChild(element);
        element.style.top = (i * this.lineSpace) + 'px';
    }

    /**
     * create main html element (container)
     */
    createMain()
    {
        let main = document.createElement('main');
        this.container.appendChild(main)
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
        const lineSpace = this.lineSpace;
        const linePerRowX = Math.floor(size.width/lineSpace);
        const linePerRowY = Math.floor(size.height/lineSpace);
        
        const gridContainer = this.createElementWithId('div', 'grid-container');
        const verticalContainer =  this.createElementWithId('div', 'line-vertical-container');
        const horizontalContainer = this.createElementWithId('div', 'line-horizontal-container');
        
        this.main.appendChild(gridContainer);
        gridContainer.appendChild(verticalContainer);
        gridContainer.appendChild(horizontalContainer);

        for (let i = 0; i <  linePerRowX  ; i++) {

            const line = document.createElement('div');
            line.classList.add('grid-vertical-line');
            this.vertical(verticalContainer, line , i);
        }

        for (let i = 0; i <  linePerRowY  ; i++) {

            const line = document.createElement('div');
            line.classList.add('grid-horizontal-line');
            this.horizontal(horizontalContainer, line , i);
        }
    }

    /**
     * Create an element and set an id.
     * @param {String} type An Html element type
     * @param {String} id An id for elmeent created
     */
    createElementWithId(type, id)
    {
        let element = document.createElement(type);
        element.id  = id;

        return element;
    }

    /**
     * Create a container that's receive the futur HTML element created
     */
    elementContainer()
    {
        let div = document.createElement('div');
        div.id = 'main-container';
        this.main.appendChild(div);
    }

    /**
     * Get an element position
     * @param {HTMLElement} element 
     */
    getPosition(element)
    {
        return (element.getClientRects()[0])
    }
}