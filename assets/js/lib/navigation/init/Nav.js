export class Nav
{
    constructor()
    {
        this.create()
    }

    create()
    {
        let menu = document.createElement('h2')
        let nav = document.createElement('nav');
        let container = document.querySelector('.container');

        menu.innerHTML = 'Menu';
        nav.id = 'nav-sidebar';
        nav.classList.add('menu');
        nav.appendChild(menu);
        container.insertBefore( nav,document.querySelector('main') );
    }
}
/* {<nav id="nav-sidebar"class="menu">
    <h2>Menu</h2>
</nav> */