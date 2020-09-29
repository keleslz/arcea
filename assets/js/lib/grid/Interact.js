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
    }
    
    /**
     * Move an .draggable element
     */
    draggable(){

        let position = {x : 0 , y : 0 };
        let translate  = '';

        interact('.draggable').draggable({
            listeners: {
                start (e) {

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
                    if(!e.target.style.transform == '')
                    {
                        e.target.style.transform = `translate(${position.x}px, ${position.y}px)`
                    }
                }
            }
        })
    }

    /**
     * Resize an resizable element
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
                
                // console.log(event.deltaRect);
                target.style.width = x + 'px)';
                target.style.height = y + 'px)';
            }
        },
        modifiers: [
        //     // keep the edges inside the parent
        //     interact.modifiers.restrictEdges({
        //         outer: 'parent'
        //     }),

            // minimum size
            interact.modifiers.restrictSize({
                min: { width: 20, height: 20 }
            })
        ],

        // inertia: true
    })
        // .draggable({
        //     listeners: { move: window.dragMoveListener },
        //     inertia: true,
        //     modifiers: [
        //         interact.modifiers.restrictRect({
        //             restriction: 'parent',
        //             endOnly: true
        //         })
        //     ]
        // })
    }
}

