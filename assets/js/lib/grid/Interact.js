import interact from 'interactjs'

/**
 * @class allows to move an item on the grid
 */
export class Interact {

    constructor(){
        this.interact = interact;
        this.main = document.querySelector('#main-container');
        this.draggable();
        this.resizable();
        this.dragAndDrop();
    }
    
    /**
     * Move an '.draggable' element
     */
    draggable(){

        let position = {x : 0 , y : 0 };
        let translate  = '';

        interact('.draggable').draggable({
            listeners: {
                start (e) {

                    if(!e.target.classList.contains('dropzone'))
                    {
                        e.target.id = 'yes-drop';
                    }

                    if( e.target.style.transform  === '')
                    {
                        position.x = 0 ;
                        position.y = 0 ;

                    }else{
                        translate = e.target.style.transform = `translate(${position.x}px, ${position.y}px)`
                    }
                },
                move (e) {

                    position.x += e.dx;
                    position.y += e.dy;

                    // let regex = /[[a-z]\(\)\,]/ // /[[translate]\(\)\,]/;

                    e.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
                },
                end(e)
                {   
                    if(e.target.id === 'yes-drop')
                    {
                        e.target.id = 'no-drop';
                    }
                    
                    e.target.classList.remove('draggable')
                    if(!e.target.style.transform == '')
                    {
                        e.target.style.transform = `translate(${position.x}px, ${position.y}px)`
                    }
                }
            }
        })
    }

    /**
     * Resize a '.resizable' element
     */
    resizable()
    {
        interact('.resize').resizable({

            // resize from all edges and corners
            edges: { left: false, right: true, bottom: true, top: false },

            listeners: {
                move (event) {

                    //HEIGHT SIZE MOVE
                    var target = event.target;
                    
                    var x = parseFloat(target.offsetWidth);
                    var y = parseFloat(target.offsetHeight);

                    // update the element's style
                    target.style.width = event.rect.width + 'px';
                    target.style.height = event.rect.height +'px';

                    // translate when resizing from top or left edges
                    x += event.dx;
                    y += event.dy;
                    
                    target.style.width = x + 'px)';
                    target.style.height = y + 'px)';
                }
            },
            modifiers: [
                // minimum size
                interact.modifiers.restrictSize({
                    min: { width: 20, height: 20 }
                })
            ],
        })
    }

    dragAndDrop()
    {
        /* The dragging code for '.draggable' from the demo above
        * applies to this demo as well so it doesn't have to be repeated. */

        // enable draggables to be dropped into this
        interact('.dropzone').dropzone({
            // only accept elements matching this CSS selector
            accept: '#yes-drop',
            // Require a 75% element overlap for a drop to be possible
            overlap: 0.75,
        
            // listen for drop related events:
        
            ondropactivate: function (event) {
                // add active dropzone feedback
                event.target.classList.add('drop-active')
                console.log(event.target)
            },
            ondragenter: function (event) {
                var draggableElement = event.relatedTarget
                var dropzoneElement = event.target
            
                // feedback the possibility of a drop
                dropzoneElement.classList.add('drop-target')
                draggableElement.classList.add('can-drop')
                draggableElement.textContent = 'Dragged in'
                console.log(event.target)
            },
            ondragleave: function (event) {
                // remove the drop feedback style
                event.target.classList.remove('drop-target')
                event.relatedTarget.classList.remove('can-drop')
                event.relatedTarget.textContent = 'Dragged out'
                console.log(event.target)
            },
            ondrop: function (event) {
                event.relatedTarget.textContent = 'Dropped'
                console.log(event.target)
            },
            ondropdeactivate: function (event) {
                // remove active dropzone feedback
                event.target.classList.remove('drop-active')
                event.target.classList.remove('drop-target')
                console.log(event.target)
            }
        })
        
        interact('.drag-drop').draggable({
            inertia: true,
            modifiers: [
                interact.modifiers.restrictRect({
                restriction: 'parent',
                endOnly: true
                })
            ],
            autoScroll: true,
            // dragMoveListener from the dragging demo above
            // listeners: { move: dragMoveListener }
        })
    }
}

