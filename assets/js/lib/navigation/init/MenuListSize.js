/**
 * Navigation/Menu/SELECT_LIST balise Type initialization
 */
export class MenuListSize
{
    constructor()
    {   
        this.colorMenu = document.querySelector('#color-menu');
        this.nav = document.querySelector('#nav-sidebar');
        this.valid = document.querySelector('#valid');
        this.container();
        let sizes = this.size();
        this.apply(sizes);
    }

    container()
    {   
        let valid = this.valid;
        let select = document.createElement('select');

        select.id='size';
        this.colorMenu.insertBefore(select, valid);

        select.id = 'edit-size'; 
        select.classList.add('hidden');
    }

    /**
     * Create sizes and store it in an array
     */
    size()
    {
        let sizes = [];
        
        for (let i = 0; i <  40 ; i++) {

            sizes.push(i*2);
        }

        return sizes.splice(3, sizes.length);
    }   

    /**
     * Create HTML option size
     * @param {Number} size
     */
    createOption(size)
    {
        let option = document.createElement('option');
        document.querySelector('#edit-size').appendChild(option);
        option.value = size;
        option.innerHTML = size;
    }

    /**
     * Create each option and insert a size
     * @param {Array} sizes array with sizes
     */
    apply(sizes)
    {
        sizes.forEach( size => {

            this.createOption(size);
        });
    }

}