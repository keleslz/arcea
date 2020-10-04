export class Font{

    constructor()
    {
        this.paletteColor = document.querySelector('#color-palette');
        this.paletteInput = document.querySelector('#color-hexa');
        this.editSize = document.querySelector('#edit-size');
        this.validButton = document.querySelector('#valid');
        this.cancelButton = document.querySelector('#cancel');
        this.color();
        this.size();
        this.valid();
        this.cancel();
    }

    /**
     * color of an HTML element via input color or colorboard
     */
    color()
    {
        window.addEventListener('click', ()=>{
            
            let edit = document.querySelector('.edit');
            
            if(edit)
            {   
                this.colorEvent(edit);
            }else{
                this.paletteColor.value = '#000000';
                this.paletteInput.placeholder = '#000000'
            }
        })
    }

    /**
     * Set a size for an html element
     */
    size() {

        this.editSize.children.forEach( size => {
            
            size.addEventListener('click', (e)=>{
            
                let edit = document.querySelector('.edit');
                
                if(edit)
                {   
                    edit.style.fontSize = e.target.value + 'px';
                }
            })
        });
        
    }

    /**
     * Add events at all inputs colourboard
     * @param {HTMLElement} edit an element with '.edit'
     */
    colorEvent(edit)
    {
        this.paletteColor.addEventListener('input', (e)=>{

            let target = e.target;

            if(target.value !== '#000000')
            {
                let color = this.paletteInput.value = target.value ;
                edit.style.color = color;
            }
        });

        this.paletteInput.addEventListener('input',(e)=>{

            let target = e.target;

            if(target.value.length > 0)
            {
                let color = this.paletteColor.value = target.value;
                edit.style.color = color;
            }
        });
    }

    /**
     * Add events at all inputs colourboard
     * @param {HTMLElement} edit an element with '.edit'
     */
    fontEvent(edit)
    {
        this.paletteColor.addEventListener('input', (e)=>{

            let target = e.target;

            if(target.value !== '#000000')
            {
                let color = this.paletteInput.value = target.value ;
                edit.style.color = color;
            }
        });

        this.paletteInput.addEventListener('input',(e)=>{

            let target = e.target;

            if(target.value.length > 0)
            {
                let color = this.paletteColor.value = target.value;
                edit.style.color = color;

            }
        });
    }

    valid()
    {

    }

    cancel()
    {
        this.cancelButton.addEventListener('click', (e)=>{
            
            let edits = document.querySelectorAll('.edit')

            if(edits.length > 0 )
            {
                edits.forEach( edit => {
                    edit.classList.remove('.edit')
                });
            }
        })
    }
}