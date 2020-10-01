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
import { MenuSelectList } from './lib/navigation/init/MenuSelectList.js';
import { MenuColourboard } from './lib/navigation/init/MenuColourboard.js';

import { Colourboard } from './lib/navigation/colourboard/Colourboard.js';
import { Style } from './lib/navigation/colourboard/Style.js';

import { Grid } from './lib/grid/Grid.js';
import { Interact } from './lib/grid/Interact.js';

import { Element } from './lib/element/Element.js';

import { Action } from './lib/option/Action.js';


//Initialization
new Nav();
new MenuColourboard();
new MenuSelectList();

//NAVIGATION
new Colourboard();

//GRID
new Grid();
new Interact();

//ELEMENT
new Element();
new Style();

//Option
new Action();