/**
 * Navigation/Menu/COLOURBOARD initialization
 */
export class MenuColourboard
{
    constructor()
    {   
        this.nav = document.querySelector('#nav-sidebar');
        this.create();
    }

    /**
     * Create colour board
     */
    create()
    {
        let menu = document.createElement('div');
        let colorLabel = document.createElement('label');
        let colorPalette = document.createElement('input');
        let colorHexa = document.createElement('input');
        let valid = document.createElement('button');
        let cancel = document.createElement('button');

        this.nav.appendChild(menu);
        menu.appendChild(colorLabel);
        menu.appendChild(colorPalette);
        menu.appendChild(colorHexa);
        menu.appendChild(valid);
        menu.appendChild(cancel);

        menu.id = 'color-menu';

        colorLabel.id = 'color-label';
        colorLabel.setAttribute('for','color-hexa');
        colorLabel.innerHTML= 'Couleur';

        colorPalette.id = 'color-palette';
        colorPalette.setAttribute('type','color');
        colorPalette.value = '#000000';
        colorPalette.setAttribute('name','color-palette');
        colorPalette.classList.add('hidden');

        colorHexa.id = 'color-hexa';
        colorHexa.setAttribute('name','color-hexa');
        colorHexa.placeholder = 'Color Hexa';
        colorHexa.classList.add('hidden');

        valid.innerHTML  ='Valider';
        valid.classList.add('hidden');
        
        cancel.innerHTML = 'Annuler';
        cancel.classList.add('hidden');
    }
}