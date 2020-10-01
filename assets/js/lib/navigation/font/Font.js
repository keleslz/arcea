export class Font{

    constructor()
    {
        this.paletteColor = document.querySelector('#color-palette');
        this.paletteInput = document.querySelector('#color-hexa');
        this.color();
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
                this.paletteColor.addEventListener('input', (e)=>{

                    let target = e.target;

                    if(target.value !== '#000000')
                    {
                        let color = this.paletteInput.value = target.value ;
                        edit.style.color = color;
                    }
                })

                this.paletteInput.addEventListener('input',(e)=>{

                    let target = e.target;

                    if(target.value.length > 0)
                    {
                        let color = this.paletteColor.value = target.value;
                        edit.style.color = color;

                    }
                })
            }else{
                this.paletteColor.value = '#000000';
                this.paletteInput.placeholder = '#000000'
            }
        })
    }

    size() {
    }
}