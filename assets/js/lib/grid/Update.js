import { Grid } from "./Grid";

/**
 * Update Grid when window's resizing
 */
export class Update extends Grid {
    
    constructor()
    {   
        super();
        this.resize();
    }

     /**
     * Listen window resizing and create or remove if needed
     */
    resize()
    {   
        window.addEventListener('resize',()=>{
           
            let yLine = document.querySelectorAll('.grid-vertical-line');
            let xLine = document.querySelectorAll('.grid-horizontal-line');
            let mainSize = {
                width : this.main.clientWidth,
                height : this.main.clientHeight,
            }
            
            let yContainer = document.querySelector('#line-vertical-container');
            let xContainer = document.querySelector('#line-horizontal-container');

            let numberOfCurrentElementY = yLine.length;
            let numberOfCurrentElementX = xLine.length;

            let numberOfExpectedElementY  = Math.floor(mainSize.width / this.lineSpace);
            let numberOfExpectedElementX  = Math.floor(mainSize.height / this.lineSpace);

            this.updateLine(numberOfCurrentElementY, numberOfExpectedElementY , yContainer , 'grid-vertical-line');
            this.updateLine(numberOfCurrentElementX, numberOfExpectedElementX , xContainer , 'grid-horizontal-line', 'x');
           
        })
    }

    /**
     * Update number of lines in the grid
     * @param {Number} numberOfCurrentElement Number of curernt element
     * @param {Number} numberOfExpectedElement Number of expected element
     * @param {HTMLElement} axisContainer That contains the lines of an axis
     * @param {String} classLine Class of line element
     * @param {String} axis A character 'x'
     */
    updateLine(numberOfCurrentElement, numberOfExpectedElement,  axisContainer, classLine, axis)
    {
        if(numberOfCurrentElement < numberOfExpectedElement)
        {
            for (let i = numberOfCurrentElement ; i <= numberOfExpectedElement; i++) {

                const line = document.createElement('div');
                line.classList.add(classLine);
                axis === 'x' ? this.horizontal( axisContainer,line, i) : this.vertical( axisContainer, line , i);
            }
        }else if(numberOfCurrentElement > numberOfExpectedElement) {

            for (let i = numberOfExpectedElement ; i <= numberOfCurrentElement; i++) {

                let line = document.querySelectorAll('.' + classLine);
                let index = numberOfExpectedElement;
                line[index-1].remove();
            }
        }

    }
}