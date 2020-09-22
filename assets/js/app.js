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


import { Grid } from './lib/grid/Grid.js';
import { Element } from './lib/element/Element.js';
import { Move } from './lib/grid/Move';

new Grid();
new Element();
new Move();