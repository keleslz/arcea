import interact from 'interactjs'

export class Move {

    constructor(){
        this.interact = interact;
        this.main = document.querySelector('#main-container');
        
        this.draggable();
    }

    draggable(){
        
        let position = { x: 0, y: 0};
        
        interact('.draggable').draggable({
          listeners: {
            start (e) {
            },
            move (e) {

                position.x += e.dx;
                position.y += e.dy;
                e.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
            },
            end(e)
            {
                // e.target.classList.remove('draggable')
            }
          }
        })
    }

    move(){
        
        let elements = document.querySelector('#main-container')

        console.log(elements.children);
        elements.children.forEach(element => {

            element.addEventListener('click', ()=>{
                console.log('lo')
            });
        });
    }
}