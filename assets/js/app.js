/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import '../css/app.css';

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';


import { Nav } from './lib/navigation/init/Nav.js';
import { MenuColourboard } from './lib/navigation/init/MenuColourboard.js';
import { MenuListType } from './lib/navigation/init/MenuListType.js';
import { MenuListSize } from './lib/navigation/init/MenuListSize.js';

import { Colourboard } from './lib/navigation/colourboard/Colourboard.js';
import { Style } from './lib/navigation/colourboard/Style.js';

import { Update } from './lib/grid/Update.js';
import { Interact } from './lib/grid/Interact.js';

import { Element } from './lib/element/Element.js';
import { Box } from './lib/element/box/Box.js';

import { Action } from './lib/option/Action.js';


//Initialization
new Nav();
new MenuColourboard();
new MenuListType();
new MenuListSize();

//NAVIGATION
new Colourboard();

//GRID
new Update();
new Interact();

//ELEMENT
new Element();
new Box();
new Style();

//Option
new Action();

