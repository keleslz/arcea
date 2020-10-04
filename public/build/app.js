(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.css":
/*!****************************!*\
  !*** ./assets/css/app.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/app.css */ "./assets/css/app.css");
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_app_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_navigation_init_Nav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/navigation/init/Nav.js */ "./assets/js/lib/navigation/init/Nav.js");
/* harmony import */ var _lib_navigation_init_MenuColourboard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/navigation/init/MenuColourboard.js */ "./assets/js/lib/navigation/init/MenuColourboard.js");
/* harmony import */ var _lib_navigation_init_MenuListType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/navigation/init/MenuListType.js */ "./assets/js/lib/navigation/init/MenuListType.js");
/* harmony import */ var _lib_navigation_init_MenuListSize_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/navigation/init/MenuListSize.js */ "./assets/js/lib/navigation/init/MenuListSize.js");
/* harmony import */ var _lib_navigation_colourboard_Colourboard_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/navigation/colourboard/Colourboard.js */ "./assets/js/lib/navigation/colourboard/Colourboard.js");
/* harmony import */ var _lib_navigation_colourboard_Style_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/navigation/colourboard/Style.js */ "./assets/js/lib/navigation/colourboard/Style.js");
/* harmony import */ var _lib_grid_Update_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/grid/Update.js */ "./assets/js/lib/grid/Update.js");
/* harmony import */ var _lib_grid_Interact_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/grid/Interact.js */ "./assets/js/lib/grid/Interact.js");
/* harmony import */ var _lib_element_Element_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/element/Element.js */ "./assets/js/lib/element/Element.js");
/* harmony import */ var _lib_element_box_Box_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/element/box/Box.js */ "./assets/js/lib/element/box/Box.js");
/* harmony import */ var _lib_option_Action_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/option/Action.js */ "./assets/js/lib/option/Action.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)
 // Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';











 //Initialization

new _lib_navigation_init_Nav_js__WEBPACK_IMPORTED_MODULE_1__["Nav"]();
new _lib_navigation_init_MenuColourboard_js__WEBPACK_IMPORTED_MODULE_2__["MenuColourboard"]();
new _lib_navigation_init_MenuListType_js__WEBPACK_IMPORTED_MODULE_3__["MenuListType"]();
new _lib_navigation_init_MenuListSize_js__WEBPACK_IMPORTED_MODULE_4__["MenuListSize"](); //NAVIGATION

new _lib_navigation_colourboard_Colourboard_js__WEBPACK_IMPORTED_MODULE_5__["Colourboard"](); //GRID

new _lib_grid_Update_js__WEBPACK_IMPORTED_MODULE_7__["Update"]();
new _lib_grid_Interact_js__WEBPACK_IMPORTED_MODULE_8__["Interact"](); //ELEMENT

new _lib_element_Element_js__WEBPACK_IMPORTED_MODULE_9__["Element"]();
new _lib_element_box_Box_js__WEBPACK_IMPORTED_MODULE_10__["Box"]();
new _lib_navigation_colourboard_Style_js__WEBPACK_IMPORTED_MODULE_6__["Style"](); //Option

new _lib_option_Action_js__WEBPACK_IMPORTED_MODULE_11__["Action"]();

/***/ }),

/***/ "./assets/js/lib/element/Element.js":
/*!******************************************!*\
  !*** ./assets/js/lib/element/Element.js ***!
  \******************************************/
/*! exports provided: Element */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Element", function() { return Element; });
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__);








function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @class create html element
 */
var Element = /*#__PURE__*/function () {
  function Element() {
    _classCallCheck(this, Element);

    this.bigContainer = document.querySelector('.container');
    this.main = document.querySelector('.container main');
    this.container = document.querySelector('#main-container');
    this.listType = document.querySelector('#select-type');
    this.create();
    this.focus();
  }
  /**
   * Init an element ont the grid
   * @param {HTMLElement} element 
   */


  _createClass(Element, [{
    key: "center",
    value: function center(element) {
      element.style.position = 'absolute';
    }
    /**
     * Create an HTML element when one element in the menu list was selected
     */

  }, {
    key: "create",
    value: function create() {
      var _this = this;

      this.listType.children.forEach(function (child) {
        child.addEventListener('click', function (e) {
          var target = e.target;

          if (target.value !== '') {
            var element = '';

            if (target.value.includes('box')) {
              element = document.createElement('div');
              element.classList.add('element', 'box', target.value, 'dropzone');

              _this.setBoxStyle(element);
            } else {
              element = document.createElement('textarea');
              element.classList.add('element', target.value);
              element.value = 'Nouveau texte';
            }

            _this.container.appendChild(element);

            _this.center(element);
          }
        });
      });
    }
    /**
     * Set width propertie for a box element thank classList
     * @param {HTMLElement} element a box element
     */

  }, {
    key: "setBoxStyle",
    value: function setBoxStyle(element) {
      var width = element.classList[2].replace('box-', '');
      element.style.width = width + '%';
      element.style.height = '100px';
      element.style.left = 0;
    }
    /**
     * Get an html element and returs his location
     * @param {HTMLElement} element 
     * @returns {DOMRect} getclientRects[0]
     */

  }, {
    key: "getPosition",
    value: function getPosition(element) {
      return element.getClientRects()[0];
    }
    /**
     * Add focus to all html element in the grid
     */

  }, {
    key: "focus",
    value: function focus() {
      window.addEventListener('click', function () {
        var elements = document.querySelectorAll('.element');

        if (elements.length > 0) {
          elements.forEach(function (element) {
            element.addEventListener('focus', function (e) {
              if (e.target.classList.contains('element')) {
                e.target.style.border = '1px solid #246c9c';
              }
            });
            element.addEventListener('blur', function (e) {
              if (e.target.classList.contains('element')) {
                e.target.style.border = '';
              }
            });
          });
        }
      });
    }
  }]);

  return Element;
}();

/***/ }),

/***/ "./assets/js/lib/element/box/Box.js":
/*!******************************************!*\
  !*** ./assets/js/lib/element/box/Box.js ***!
  \******************************************/
/*! exports provided: Box */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Create an Responsive container which receive children 
 */
var Box = function Box() {
  _classCallCheck(this, Box);
};

/***/ }),

/***/ "./assets/js/lib/grid/Grid.js":
/*!************************************!*\
  !*** ./assets/js/lib/grid/Grid.js ***!
  \************************************/
/*! exports provided: Grid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @class create a grid system
 */
var Grid = /*#__PURE__*/function () {
  function Grid() {
    _classCallCheck(this, Grid);

    this.container = document.querySelector('.container');
    this.createMain();
    this.main = document.querySelector('.container main');
    this.lineSpace = 10;
    this.mainSize = this.size(this.main);
    this.elementContainer();
    this.create(this.mainSize);
  }
  /**
   * Create vertical line
   * 
   * @param {HTMLElement} axisContainer 
   * @param {HTMLElement} element 
   * @param {Nmber} i number++
   */


  _createClass(Grid, [{
    key: "vertical",
    value: function vertical(axisContainer, element, i) {
      axisContainer.appendChild(element);
      element.style.left = i * this.lineSpace + 'px';
    }
    /**
     * Create horizontal line
     * 
     * @param {HTMLELement} axisContainer 
     * @param {HTMLElement} element 
     * @param {Number} i 
     */

  }, {
    key: "horizontal",
    value: function horizontal(axisContainer, element, i) {
      axisContainer.appendChild(element);
      element.style.top = i * this.lineSpace + 'px';
    }
    /**
     * create main html element (container)
     */

  }, {
    key: "createMain",
    value: function createMain() {
      var main = document.createElement('main');
      this.container.appendChild(main);
    }
    /**
     * Main container size
     * @param {HTMLElement} element an HTML element
     * @return {object} sizes
     */

  }, {
    key: "size",
    value: function size(element) {
      return {
        width: element.clientWidth,
        height: element.clientHeight
      };
    }
    /**
     * Create grid with several line
     * @param {number} size 
     */

  }, {
    key: "create",
    value: function create(size) {
      var lineSpace = this.lineSpace;
      var linePerRowX = Math.floor(size.width / lineSpace);
      var linePerRowY = Math.floor(size.height / lineSpace);
      var gridContainer = this.createElementWithId('div', 'grid-container');
      var verticalContainer = this.createElementWithId('div', 'line-vertical-container');
      var horizontalContainer = this.createElementWithId('div', 'line-horizontal-container');
      this.main.appendChild(gridContainer);
      gridContainer.appendChild(verticalContainer);
      gridContainer.appendChild(horizontalContainer);

      for (var i = 0; i < linePerRowX; i++) {
        var line = document.createElement('div');
        line.classList.add('grid-vertical-line');
        this.vertical(verticalContainer, line, i);
      }

      for (var _i = 0; _i < linePerRowY; _i++) {
        var _line = document.createElement('div');

        _line.classList.add('grid-horizontal-line');

        this.horizontal(horizontalContainer, _line, _i);
      }
    }
    /**
     * Create an element and set an id.
     * @param {String} type An Html element type
     * @param {String} id An id for elmeent created
     */

  }, {
    key: "createElementWithId",
    value: function createElementWithId(type, id) {
      var element = document.createElement(type);
      element.id = id;
      return element;
    }
    /**
     * Create a container that's receive the futur HTML element created
     */

  }, {
    key: "elementContainer",
    value: function elementContainer() {
      var div = document.createElement('div');
      div.id = 'main-container';
      this.main.appendChild(div);
    }
    /**
     * Get an element position
     * @param {HTMLElement} element 
     */

  }, {
    key: "getPosition",
    value: function getPosition(element) {
      return element.getClientRects()[0];
    }
  }]);

  return Grid;
}();

/***/ }),

/***/ "./assets/js/lib/grid/Interact.js":
/*!****************************************!*\
  !*** ./assets/js/lib/grid/Interact.js ***!
  \****************************************/
/*! exports provided: Interact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interact", function() { return Interact; });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var interactjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! interactjs */ "./node_modules/interactjs/dist/interact.min.js");
/* harmony import */ var interactjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(interactjs__WEBPACK_IMPORTED_MODULE_3__);




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * @class allows to move an item on the grid
 */

var Interact = /*#__PURE__*/function () {
  function Interact() {
    _classCallCheck(this, Interact);

    this.interact = interactjs__WEBPACK_IMPORTED_MODULE_3___default.a;
    this.main = document.querySelector('#main-container');
    this.draggable();
    this.resizable();
    this.dragAndDrop();
  }
  /**
   * Move an '.draggable' element
   */


  _createClass(Interact, [{
    key: "draggable",
    value: function draggable() {
      var position = {
        x: 0,
        y: 0
      };
      var translate = '';
      interactjs__WEBPACK_IMPORTED_MODULE_3___default()('.draggable').draggable({
        listeners: {
          start: function start(e) {
            if (!e.target.classList.contains('dropzone')) {
              e.target.id = 'yes-drop';
            }

            if (e.target.style.transform === '') {
              position.x = 0;
              position.y = 0;
            } else {
              translate = e.target.style.transform = "translate(".concat(position.x, "px, ").concat(position.y, "px)");
            }
          },
          move: function move(e) {
            position.x += e.dx;
            position.y += e.dy; // let regex = /[[a-z]\(\)\,]/ // /[[translate]\(\)\,]/;

            e.target.style.transform = "translate(".concat(position.x, "px, ").concat(position.y, "px)");
          },
          end: function end(e) {
            if (e.target.id === 'yes-drop') {
              e.target.id = 'no-drop';
            }

            e.target.classList.remove('draggable');

            if (!e.target.style.transform == '') {
              e.target.style.transform = "translate(".concat(position.x, "px, ").concat(position.y, "px)");
            }
          }
        }
      });
    }
    /**
     * Resize a '.resizable' element
     */

  }, {
    key: "resizable",
    value: function resizable() {
      interactjs__WEBPACK_IMPORTED_MODULE_3___default()('.resize').resizable({
        // resize from all edges and corners
        edges: {
          left: false,
          right: true,
          bottom: true,
          top: false
        },
        listeners: {
          move: function move(event) {
            //HEIGHT SIZE MOVE
            var target = event.target;
            var x = parseFloat(target.offsetWidth);
            var y = parseFloat(target.offsetHeight); // update the element's style

            target.style.width = event.rect.width + 'px';
            target.style.height = event.rect.height + 'px'; // translate when resizing from top or left edges

            x += event.dx;
            y += event.dy;
            target.style.width = x + 'px)';
            target.style.height = y + 'px)';
          }
        },
        modifiers: [// minimum size
        interactjs__WEBPACK_IMPORTED_MODULE_3___default.a.modifiers.restrictSize({
          min: {
            width: 20,
            height: 20
          }
        })]
      });
    }
  }, {
    key: "dragAndDrop",
    value: function dragAndDrop() {
      /* The dragging code for '.draggable' from the demo above
      * applies to this demo as well so it doesn't have to be repeated. */
      // enable draggables to be dropped into this
      interactjs__WEBPACK_IMPORTED_MODULE_3___default()('.dropzone').dropzone({
        // only accept elements matching this CSS selector
        accept: '#yes-drop',
        // Require a 75% element overlap for a drop to be possible
        overlap: 0.75,
        // listen for drop related events:
        ondropactivate: function ondropactivate(event) {
          // add active dropzone feedback
          event.target.classList.add('drop-active');
          console.log(event.target);
        },
        ondragenter: function ondragenter(event) {
          var draggableElement = event.relatedTarget;
          var dropzoneElement = event.target; // feedback the possibility of a drop

          dropzoneElement.classList.add('drop-target');
          draggableElement.classList.add('can-drop');
          draggableElement.textContent = 'Dragged in';
          console.log(event.target);
        },
        ondragleave: function ondragleave(event) {
          // remove the drop feedback style
          event.target.classList.remove('drop-target');
          event.relatedTarget.classList.remove('can-drop');
          event.relatedTarget.textContent = 'Dragged out';
          console.log(event.target);
        },
        ondrop: function ondrop(event) {
          event.relatedTarget.textContent = 'Dropped';
          console.log(event.target);
        },
        ondropdeactivate: function ondropdeactivate(event) {
          // remove active dropzone feedback
          event.target.classList.remove('drop-active');
          event.target.classList.remove('drop-target');
          console.log(event.target);
        }
      });
      interactjs__WEBPACK_IMPORTED_MODULE_3___default()('.drag-drop').draggable({
        inertia: true,
        modifiers: [interactjs__WEBPACK_IMPORTED_MODULE_3___default.a.modifiers.restrictRect({
          restriction: 'parent',
          endOnly: true
        })],
        autoScroll: true // dragMoveListener from the dragging demo above
        // listeners: { move: dragMoveListener }

      });
    }
  }]);

  return Interact;
}();

/***/ }),

/***/ "./assets/js/lib/grid/Update.js":
/*!**************************************!*\
  !*** ./assets/js/lib/grid/Update.js ***!
  \**************************************/
/*! exports provided: Update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Update", function() { return Update; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Grid */ "./assets/js/lib/grid/Grid.js");















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/**
 * Update Grid when window's resizing
 */

var Update = /*#__PURE__*/function (_Grid) {
  _inherits(Update, _Grid);

  var _super = _createSuper(Update);

  function Update() {
    var _this;

    _classCallCheck(this, Update);

    _this = _super.call(this);

    _this.resize();

    return _this;
  }
  /**
  * Listen window resizing and create or remove if needed
  */


  _createClass(Update, [{
    key: "resize",
    value: function resize() {
      var _this2 = this;

      window.addEventListener('resize', function () {
        var yLine = document.querySelectorAll('.grid-vertical-line');
        var xLine = document.querySelectorAll('.grid-horizontal-line');
        var mainSize = {
          width: _this2.main.clientWidth,
          height: _this2.main.clientHeight
        };
        var yContainer = document.querySelector('#line-vertical-container');
        var xContainer = document.querySelector('#line-horizontal-container');
        var numberOfCurrentElementY = yLine.length;
        var numberOfCurrentElementX = xLine.length;
        var numberOfExpectedElementY = Math.floor(mainSize.width / _this2.lineSpace);
        var numberOfExpectedElementX = Math.floor(mainSize.height / _this2.lineSpace);

        _this2.updateLine(numberOfCurrentElementY, numberOfExpectedElementY, yContainer, 'grid-vertical-line');

        _this2.updateLine(numberOfCurrentElementX, numberOfExpectedElementX, xContainer, 'grid-horizontal-line', 'x');
      });
    }
    /**
     * Update number of lines in the grid
     * @param {Number} numberOfCurrentElement Number of curernt element
     * @param {Number} numberOfExpectedElement Number of expected element
     * @param {HTMLElement} axisContainer That contains the lines of an axis
     * @param {String} classLine Class of line element
     * @param {String} axis A character 'x'
     */

  }, {
    key: "updateLine",
    value: function updateLine(numberOfCurrentElement, numberOfExpectedElement, axisContainer, classLine, axis) {
      if (numberOfCurrentElement < numberOfExpectedElement) {
        for (var i = numberOfCurrentElement; i <= numberOfExpectedElement; i++) {
          var line = document.createElement('div');
          line.classList.add(classLine);
          axis === 'x' ? this.horizontal(axisContainer, line, i) : this.vertical(axisContainer, line, i);
        }
      } else if (numberOfCurrentElement > numberOfExpectedElement) {
        for (var _i = numberOfExpectedElement; _i <= numberOfCurrentElement; _i++) {
          var _line = document.querySelectorAll('.' + classLine);

          var index = numberOfExpectedElement;

          _line[index - 1].remove();
        }
      }
    }
  }]);

  return Update;
}(_Grid__WEBPACK_IMPORTED_MODULE_14__["Grid"]);

/***/ }),

/***/ "./assets/js/lib/navigation/colourboard/Colourboard.js":
/*!*************************************************************!*\
  !*** ./assets/js/lib/navigation/colourboard/Colourboard.js ***!
  \*************************************************************/
/*! exports provided: Colourboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Colourboard", function() { return Colourboard; });
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_1__);



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Colourboard = /*#__PURE__*/function () {
  function Colourboard() {
    _classCallCheck(this, Colourboard);

    this.colorBoard = document.querySelector('#color-menu');
    this.heightMax = 150;
    this.heightMin = 20;
    this.valid = document.querySelector('#valid');
    this.cancel = document.querySelector('#cancel');
    this.action();
  }
  /**
   * Open or close colorboard
   */


  _createClass(Colourboard, [{
    key: "action",
    value: function action() {
      var _this = this;

      window.addEventListener('click', function () {
        var element = document.querySelector('.edit');
        _this.colorBoard.style.transition = '.2s ease-in .1s';
        var heightMax = _this.heightMax;
        var heightMin = _this.heightMin;

        if (element) {
          _this.open(heightMax);
        } else {
          _this.close(heightMin);
        }
      });
    }
    /**
     * Open action
     * @param {Number} heightMax height max for colorboard
     */

  }, {
    key: "open",
    value: function open(heightMax) {
      var _this2 = this;

      this.colorBoard.style.height = heightMax + 'px';
      setTimeout(function () {
        for (var i = 0; i < _this2.colorBoard.children.length; i++) {
          var item = _this2.colorBoard.children[i];

          if (item.classList.contains('hidden')) {
            if (!item.classList.contains('#color-label')) {
              item.classList.remove('hidden');
            }
          }
        }
      }, 300);
    }
    /**
     * Close action  
     * @param {Number} heightMin height min for colorboard
     */

  }, {
    key: "close",
    value: function close(heightMin) {
      if (this.colorBoard.offsetHeight > heightMin) {
        for (var i = 1; i < this.colorBoard.children.length; i++) {
          var item = this.colorBoard.children[i];

          if (!item.classList.contains('hidden')) {
            item.classList.add('hidden');
          }
        }

        this.colorBoard.style.height = heightMin + 'px';
      }
    }
  }]);

  return Colourboard;
}();

/***/ }),

/***/ "./assets/js/lib/navigation/colourboard/Style.js":
/*!*******************************************************!*\
  !*** ./assets/js/lib/navigation/colourboard/Style.js ***!
  \*******************************************************/
/*! exports provided: Style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Style", function() { return Style; });
/* harmony import */ var _font_Font__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../font/Font */ "./assets/js/lib/navigation/font/Font.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


/**
 * Stylize HTML Element thanks to the NAVBAR EDITOR
 */

var Style = function Style() {
  _classCallCheck(this, Style);

  new _font_Font__WEBPACK_IMPORTED_MODULE_0__["Font"]();
};

/***/ }),

/***/ "./assets/js/lib/navigation/font/Font.js":
/*!***********************************************!*\
  !*** ./assets/js/lib/navigation/font/Font.js ***!
  \***********************************************/
/*! exports provided: Font */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Font", function() { return Font; });
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__);




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Font = /*#__PURE__*/function () {
  function Font() {
    _classCallCheck(this, Font);

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


  _createClass(Font, [{
    key: "color",
    value: function color() {
      var _this = this;

      window.addEventListener('click', function () {
        var edit = document.querySelector('.edit');

        if (edit) {
          _this.colorEvent(edit);
        } else {
          _this.paletteColor.value = '#000000';
          _this.paletteInput.placeholder = '#000000';
        }
      });
    }
    /**
     * Set a size for an html element
     */

  }, {
    key: "size",
    value: function size() {
      this.editSize.children.forEach(function (size) {
        size.addEventListener('click', function (e) {
          var edit = document.querySelector('.edit');

          if (edit) {
            edit.style.fontSize = e.target.value + 'px';
          }
        });
      });
    }
    /**
     * Add events at all inputs colourboard
     * @param {HTMLElement} edit an element with '.edit'
     */

  }, {
    key: "colorEvent",
    value: function colorEvent(edit) {
      var _this2 = this;

      this.paletteColor.addEventListener('input', function (e) {
        var target = e.target;

        if (target.value !== '#000000') {
          var color = _this2.paletteInput.value = target.value;
          edit.style.color = color;
        }
      });
      this.paletteInput.addEventListener('input', function (e) {
        var target = e.target;

        if (target.value.length > 0) {
          var color = _this2.paletteColor.value = target.value;
          edit.style.color = color;
        }
      });
    }
    /**
     * Add events at all inputs colourboard
     * @param {HTMLElement} edit an element with '.edit'
     */

  }, {
    key: "fontEvent",
    value: function fontEvent(edit) {
      var _this3 = this;

      this.paletteColor.addEventListener('input', function (e) {
        var target = e.target;

        if (target.value !== '#000000') {
          var color = _this3.paletteInput.value = target.value;
          edit.style.color = color;
        }
      });
      this.paletteInput.addEventListener('input', function (e) {
        var target = e.target;

        if (target.value.length > 0) {
          var color = _this3.paletteColor.value = target.value;
          edit.style.color = color;
        }
      });
    }
  }, {
    key: "valid",
    value: function valid() {}
  }, {
    key: "cancel",
    value: function cancel() {
      this.cancelButton.addEventListener('click', function (e) {
        var edits = document.querySelectorAll('.edit');

        if (edits.length > 0) {
          edits.forEach(function (edit) {
            edit.classList.remove('.edit');
          });
        }
      });
    }
  }]);

  return Font;
}();

/***/ }),

/***/ "./assets/js/lib/navigation/init/MenuColourboard.js":
/*!**********************************************************!*\
  !*** ./assets/js/lib/navigation/init/MenuColourboard.js ***!
  \**********************************************************/
/*! exports provided: MenuColourboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuColourboard", function() { return MenuColourboard; });
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Navigation/Menu/COLOURBOARD initialization
 */
var MenuColourboard = /*#__PURE__*/function () {
  function MenuColourboard() {
    _classCallCheck(this, MenuColourboard);

    this.nav = document.querySelector('#nav-sidebar');
    this.create();
  }
  /**
   * Create colour board
   */


  _createClass(MenuColourboard, [{
    key: "create",
    value: function create() {
      var menu = document.createElement('div');
      var colorLabel = document.createElement('label');
      var colorPalette = document.createElement('input');
      var colorHexa = document.createElement('input');
      var valid = document.createElement('button');
      var cancel = document.createElement('button');
      this.nav.appendChild(menu);
      menu.appendChild(colorLabel);
      menu.appendChild(colorPalette);
      menu.appendChild(colorHexa);
      menu.appendChild(valid);
      menu.appendChild(cancel);
      menu.id = 'color-menu';
      colorLabel.id = 'color-label';
      colorLabel.setAttribute('for', 'color-hexa');
      colorLabel.innerHTML = 'Couleur';
      colorPalette.id = 'color-palette';
      colorPalette.setAttribute('type', 'color');
      colorPalette.value = '#000000';
      colorPalette.setAttribute('name', 'color-palette');
      colorPalette.classList.add('hidden');
      colorHexa.id = 'color-hexa';
      colorHexa.setAttribute('name', 'color-hexa');
      colorHexa.placeholder = 'Color Hexa';
      colorHexa.classList.add('hidden');
      valid.innerHTML = 'Valider';
      valid.id = 'valid';
      valid.classList.add('hidden');
      cancel.innerHTML = 'Annuler';
      cancel.id = 'cancel';
      cancel.classList.add('hidden');
    }
  }]);

  return MenuColourboard;
}();

/***/ }),

/***/ "./assets/js/lib/navigation/init/MenuListSize.js":
/*!*******************************************************!*\
  !*** ./assets/js/lib/navigation/init/MenuListSize.js ***!
  \*******************************************************/
/*! exports provided: MenuListSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuListSize", function() { return MenuListSize; });
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.splice */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__);



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Navigation/Menu/SELECT_LIST balise Type initialization
 */
var MenuListSize = /*#__PURE__*/function () {
  function MenuListSize() {
    _classCallCheck(this, MenuListSize);

    this.colorMenu = document.querySelector('#color-menu');
    this.nav = document.querySelector('#nav-sidebar');
    this.valid = document.querySelector('#valid');
    this.container();
    var sizes = this.size();
    this.apply(sizes);
  }

  _createClass(MenuListSize, [{
    key: "container",
    value: function container() {
      var valid = this.valid;
      var select = document.createElement('select');
      select.id = 'size';
      this.colorMenu.insertBefore(select, valid);
      select.id = 'edit-size';
      select.classList.add('hidden');
    }
    /**
     * Create sizes and store it in an array
     */

  }, {
    key: "size",
    value: function size() {
      var sizes = ['Taille'];

      for (var i = 0; i < 40; i++) {
        sizes.push(i * 2);
      }

      return sizes.splice(3, sizes.length);
    }
    /**
     * Create HTML option size
     * @param {Number} size
     */

  }, {
    key: "createOption",
    value: function createOption(size) {
      var option = document.createElement('option');
      document.querySelector('#edit-size').appendChild(option);
      option.value = size;
      option.innerHTML = size;
    }
    /**
     * Create each option and insert a size
     * @param {Array} sizes array with sizes
     */

  }, {
    key: "apply",
    value: function apply(sizes) {
      for (var i = 0; i < sizes.length; i++) {
        var size = sizes[i];

        if (i === 0) {
          this.createOption('Taille');
        } else {
          this.createOption(size);
        }
      }
    }
  }]);

  return MenuListSize;
}();

/***/ }),

/***/ "./assets/js/lib/navigation/init/MenuListType.js":
/*!*******************************************************!*\
  !*** ./assets/js/lib/navigation/init/MenuListType.js ***!
  \*******************************************************/
/*! exports provided: MenuListType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuListType", function() { return MenuListType; });
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__);




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Navigation/Menu/SELECT_LIST balise Type initialization
 */
var MenuListType = /*#__PURE__*/function () {
  function MenuListType() {
    _classCallCheck(this, MenuListType);

    this.nav = document.querySelector('#nav-sidebar');
    this.container();
    this.apply();
  }
  /**
   * Option container in '.edit-list'
   */


  _createClass(MenuListType, [{
    key: "container",
    value: function container() {
      var ul = document.createElement('ul');
      var liType = document.createElement('li');
      var select = document.createElement('select');
      ul.id = 'edit-list';
      liType.id = 'edit-type';
      select.setAttribute('name', 'type');
      select.id = 'select-type';
      select.placeholder = 'Element HTML';
      this.nav.appendChild(ul);
      ul.appendChild(liType);
      liType.appendChild(select);
    }
    /**
     * Apply struct
     */

  }, {
    key: "apply",
    value: function apply() {
      var options = this.list();
      this.insert(options.titles, 'Titre');
      this.insert(options.blocks, 'Block');
      this.insert(options.others, 'Inline');
      this.insert(options.containers, 'Box');
    }
    /**
     * Create an option element with empty value
     * @param {Array} options an array contains html element
     */

  }, {
    key: "insert",
    value: function insert(options, headTranslate) {
      var _this = this;

      options.forEach(function (option) {
        _this.createOption(option, headTranslate);
      });
    }
    /**
     * Create HTML option element. if an index equal 'empty string' so add '.head' class
     * @param {String} name type name
     */

  }, {
    key: "createOption",
    value: function createOption(name, headTranslate) {
      var option = document.createElement('option');
      document.querySelector('#select-type').appendChild(option);
      option.value = name;

      if (name === '') {
        option.classList.add('head');
        option.id = headTranslate;
        option.innerHTML = headTranslate;
      } else {
        option.id = option.value;
        option.innerHTML = name;
      }
    }
    /**
     * Report all elements type available. The first index of all each array
     * are header-list place. if a key was added , add an this.insert() in this.loop()
     */

  }, {
    key: "list",
    value: function list() {
      return {
        titles: ['', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
        blocks: ['', 'footer', 'header', 'nav', 'img', 'address', 'article', 'blockquote', 'details', 'dialog', 'dd', 'div', 'fieldset', 'dt', 'ul', 'ol', 'li', 'main', 'p', 'pre', 'section', 'table'],
        others: ['', 'span', 'em', 'strong', 'a', 'q', 'small', 'textarea', 'label', 'input', 'select'],
        containers: ['', 'box-100', 'box-75', 'box-50']
        /* Add key */

      };
    }
  }]);

  return MenuListType;
}();

/***/ }),

/***/ "./assets/js/lib/navigation/init/Nav.js":
/*!**********************************************!*\
  !*** ./assets/js/lib/navigation/init/Nav.js ***!
  \**********************************************/
/*! exports provided: Nav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Nav = /*#__PURE__*/function () {
  function Nav() {
    _classCallCheck(this, Nav);

    this.create();
  }

  _createClass(Nav, [{
    key: "create",
    value: function create() {
      var menu = document.createElement('h2');
      var nav = document.createElement('nav');
      var container = document.querySelector('.container');
      menu.innerHTML = 'Menu';
      nav.id = 'nav-sidebar';
      nav.classList.add('menu');
      nav.appendChild(menu);
      container.appendChild(nav);
    }
  }]);

  return Nav;
}();

/***/ }),

/***/ "./assets/js/lib/option/Action.js":
/*!****************************************!*\
  !*** ./assets/js/lib/option/Action.js ***!
  \****************************************/
/*! exports provided: Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Menu */ "./assets/js/lib/option/Menu.js");




















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/**
 * @class contains all element event when right click 
 */

var Action = /*#__PURE__*/function (_Menu) {
  _inherits(Action, _Menu);

  var _super = _createSuper(Action);

  function Action() {
    var _this;

    _classCallCheck(this, Action);

    _this = _super.call(this);
    _this.options = _this.optionList().className;
    _this.menu = document.querySelector('#option-menu');

    var optionListName = _this.name();

    _this.type(optionListName);

    return _this;
  }
  /**
   * Define a class according to the chosen option
   * @param {Array} optionListName An array with option menu list
   */


  _createClass(Action, [{
    key: "type",
    value: function type(optionListName) {
      var _this2 = this;

      var option = optionListName;

      for (var i = 0; i < optionListName.length; i++) {
        this.menu.children.forEach(function (child) {
          child.addEventListener('click', function (e) {
            var target = e.target;
            var classTargetElement = document.querySelector('.target');

            _this2.possible(target, classTargetElement);
          });
        });
      }
    }
    /**
     * Possible action list 
     * @param {HTMLElement} target e.target
     * @param {HTMLElement} classTargetElement 
     */

  }, {
    key: "possible",
    value: function possible(target, classTargetElement) {
      // MOVE className
      if (target.innerHTML === 'deplacer') {
        if (classTargetElement) {
          this.stopEvent(classTargetElement, this.options.drag);
          classTargetElement.classList.add(this.options.drag);
        }
      } // REMOVE className          


      if (target.innerHTML === 'supprimer') {
        if (classTargetElement) {
          classTargetElement.remove();
        }
      } //RESIZE className


      if (target.innerHTML === 'modifier la taille') {
        if (classTargetElement) {
          this.stopEvent(classTargetElement, this.options.resize);
          classTargetElement.classList.add(this.options.resize);
        }
      } // EDIT className


      if (target.innerHTML === 'editer') {
        if (classTargetElement) {
          this.stopEvent(classTargetElement, this.options.edit);
          classTargetElement.classList.add(this.options.edit);
        }
      }
    }
    /**
     * Stop current action
     * @param {HTMLElement} classTargetElement
     * @param {String} className
     */

  }, {
    key: "stopEvent",
    value: function stopEvent(classTargetElement, className) {
      var _this3 = this;

      classTargetElement.addEventListener('mouseup', function (e) {
        e.target.classList.remove(className);

        _this3.removeAll(e.target);
      });
    }
    /**
     * Set an array list of menu option item
     * @param {Array} optionListName An array with option menu list
     * @returns {Array}
     */

  }, {
    key: "name",
    value: function name() {
      var ids = [];

      for (var i = 0; i < this.menu.childElementCount; i++) {
        var child = this.menu.children[i];
        var word = child.id.replace('option-menu-', '');
        ids.push(word);
      }

      return ids;
    }
    /**
     * Remove all HTML class in on target
     * @param {HTMLElement} target
     */

  }, {
    key: "removeAll",
    value: function removeAll(target) {
      for (var key in this.options) {
        if (this.options.hasOwnProperty(key)) {
          var option = this.options[key];

          if (target.classList.contains(option)) {
            target.classList.remove(option);
          }
        }
      }
    }
  }]);

  return Action;
}(_Menu__WEBPACK_IMPORTED_MODULE_19__["Menu"]);

/***/ }),

/***/ "./assets/js/lib/option/Menu.js":
/*!**************************************!*\
  !*** ./assets/js/lib/option/Menu.js ***!
  \**************************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__);




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @class Menu is options action , position and event 
 */
var Menu = /*#__PURE__*/function () {
  function Menu() {
    _classCallCheck(this, Menu);

    this.main = document.querySelector('#main-container');
    this.nav = document.querySelector('nav');
    this.elements = document.querySelectorAll('#main container .element');
    this.unauthorizeRightClick();
    this.menu = this.create();
    this.mousePosition();
    this.optionOnElement();
    this.activeElement();
  }
  /**
   * unhauthorize basic behavior right click 
   * @returns {void}
   */


  _createClass(Menu, [{
    key: "unauthorizeRightClick",
    value: function unauthorizeRightClick() {
      window.addEventListener('contextmenu', function (e) {
        return e.preventDefault();
      });
    }
    /**
     * create option menu
     * @returns {HTMLElement} ul
     */

  }, {
    key: "create",
    value: function create() {
      var liFr = this.optionList().fr;
      var liEn = this.optionList().en;
      var ul = document.createElement('ul');
      var i = 0;
      ul.id = 'option-menu';
      ul.classList.add('hidden');
      this.main.appendChild(ul);
      liFr.forEach(function (li) {
        var item = document.createElement('li');
        ul.appendChild(item);
        item.innerHTML = liFr[i];
        item.id = 'option-menu-' + liEn[i];
        i++;
      });
      return ul;
    }
    /**
     * Html element to open
     * @param {HTMLElement} menu 
     * @returns {void}
     */

  }, {
    key: "openOrClose",
    value: function openOrClose(menu) {
      if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
      }
    }
    /**
     * option list of element option
     * @returns {void}
     */

  }, {
    key: "optionList",
    value: function optionList() {
      return {
        fr: ['deplacer', 'supprimer', 'modifier la taille', 'editer'],
        en: ['move', 'remove', 'resize', 'edition'],
        className: {
          drag: 'draggable',
          resize: 'resize',
          edit: 'edit'
        }
      };
    }
    /**
     * open or close option element list when user click on 
     * @returns {void}
     */

  }, {
    key: "optionOnElement",
    value: function optionOnElement() {
      var _this = this;

      var optionList = document.querySelectorAll('#select-type option');
      optionList.forEach(function (option) {
        option.addEventListener('click', function (e) {
          var list = document.querySelectorAll('#main-container .element');
          list.forEach(function (elt) {
            elt.addEventListener('contextmenu', function (e) {
              if (e.target.classList.contains('element')) {
                _this.disableAll();

                _this.openOrClose(_this.menu);
              }
            });
          });
        });
      });
      this.close();
    }
    /**
     * Close menu 
     */

  }, {
    key: "close",
    value: function close() {
      var _this2 = this;

      window.addEventListener('contextmenu', function (e) {
        if (!e.target.classList.contains('element') && !_this2.menu.classList.contains('hidden')) {
          _this2.disableAll();

          _this2.menu.classList.add('hidden');
        }
      });
      window.addEventListener('click', function (e) {
        if (e.target.classList.contains('element') && !_this2.menu.classList.contains('hidden')) {
          _this2.disableAll();

          _this2.menu.classList.add('hidden');
        }
      });
      window.addEventListener('click', function (e) {
        if (!e.target.classList.contains('element')) {
          _this2.disableAll();

          _this2.menu.classList.add('hidden');
        }
      });
    }
    /**
     * Disable all elements which contains '.target' for to keep once 
     * '.target' at time
     */

  }, {
    key: "disableAll",
    value: function disableAll() {
      var targets = document.querySelectorAll('.target');

      if (targets.length > 0) {
        targets.forEach(function (t) {
          t.classList.remove('target');
        });
      }
    }
    /**
     * Listen current mouse position return them 
     * @returns {object} number position
     * @returns {void}
     */

  }, {
    key: "mousePosition",
    value: function mousePosition() {
      var _this3 = this;

      var pos = this.getPosition(this.menu);
      window.addEventListener('contextmenu', function (e) {
        var x = e.clientX - _this3.nav.clientWidth;
        var y = e.clientY - _this3.nav.clientTop;
        var menu = document.querySelector('#option-menu');
        menu.style.top = y - 10 + 'px';
        menu.style.left = x - 21 + 'px';
      });
    }
    /**
     * Get an html element and returs his location
     * @param {HTMLElement} element 
     * @returns {DOMRect} getclientRects[0]
     */

  }, {
    key: "getPosition",
    value: function getPosition(element) {
      return element.getClientRects()[0];
    }
    /**
     * '.target' element active or not when right click
     * @returns {void}
     */

  }, {
    key: "activeElement",
    value: function activeElement() {
      var _this4 = this;

      window.addEventListener('contextmenu', function (e) {
        var target = e.target;
        var targetClass = document.querySelector('.target');

        if (target.classList.contains('element') && !_this4.menu.classList.contains('hidden')) {
          target.classList.add('target');
        } else if (!target.classList.contains('element')) {
          if (targetClass) {
            targetClass.classList.remove('target');
          }
        } else {
          target.classList.remove('target');
        }
      });
      window.addEventListener('click', function (e) {
        var target = e.target;
        var targetClass = document.querySelector('.target');

        if (target.classList.contains('element')) {
          target.classList.add('target');
        } else if (!target.classList.contains('element')) {
          if (targetClass) {
            targetClass.classList.remove('target');
          }
        } else {
          target.classList.remove('target');
        }
      });
    }
  }]);

  return Menu;
}();

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbGliL2VsZW1lbnQvRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbGliL2VsZW1lbnQvYm94L0JveC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbGliL2dyaWQvR3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbGliL2dyaWQvSW50ZXJhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2xpYi9ncmlkL1VwZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbGliL25hdmlnYXRpb24vY29sb3VyYm9hcmQvQ29sb3VyYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2xpYi9uYXZpZ2F0aW9uL2NvbG91cmJvYXJkL1N0eWxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9saWIvbmF2aWdhdGlvbi9mb250L0ZvbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2xpYi9uYXZpZ2F0aW9uL2luaXQvTWVudUNvbG91cmJvYXJkLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9saWIvbmF2aWdhdGlvbi9pbml0L01lbnVMaXN0U2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbGliL25hdmlnYXRpb24vaW5pdC9NZW51TGlzdFR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2xpYi9uYXZpZ2F0aW9uL2luaXQvTmF2LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9saWIvb3B0aW9uL0FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbGliL29wdGlvbi9NZW51LmpzIl0sIm5hbWVzIjpbIk5hdiIsIk1lbnVDb2xvdXJib2FyZCIsIk1lbnVMaXN0VHlwZSIsIk1lbnVMaXN0U2l6ZSIsIkNvbG91cmJvYXJkIiwiVXBkYXRlIiwiSW50ZXJhY3QiLCJFbGVtZW50IiwiQm94IiwiU3R5bGUiLCJBY3Rpb24iLCJiaWdDb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtYWluIiwiY29udGFpbmVyIiwibGlzdFR5cGUiLCJjcmVhdGUiLCJmb2N1cyIsImVsZW1lbnQiLCJzdHlsZSIsInBvc2l0aW9uIiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwiY2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaW5jbHVkZXMiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0Qm94U3R5bGUiLCJhcHBlbmRDaGlsZCIsImNlbnRlciIsIndpZHRoIiwicmVwbGFjZSIsImhlaWdodCIsImxlZnQiLCJnZXRDbGllbnRSZWN0cyIsIndpbmRvdyIsImVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImNvbnRhaW5zIiwiYm9yZGVyIiwiR3JpZCIsImNyZWF0ZU1haW4iLCJsaW5lU3BhY2UiLCJtYWluU2l6ZSIsInNpemUiLCJlbGVtZW50Q29udGFpbmVyIiwiYXhpc0NvbnRhaW5lciIsImkiLCJ0b3AiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImxpbmVQZXJSb3dYIiwiTWF0aCIsImZsb29yIiwibGluZVBlclJvd1kiLCJncmlkQ29udGFpbmVyIiwiY3JlYXRlRWxlbWVudFdpdGhJZCIsInZlcnRpY2FsQ29udGFpbmVyIiwiaG9yaXpvbnRhbENvbnRhaW5lciIsImxpbmUiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJ0eXBlIiwiaWQiLCJkaXYiLCJpbnRlcmFjdCIsImRyYWdnYWJsZSIsInJlc2l6YWJsZSIsImRyYWdBbmREcm9wIiwieCIsInkiLCJ0cmFuc2xhdGUiLCJsaXN0ZW5lcnMiLCJzdGFydCIsInRyYW5zZm9ybSIsIm1vdmUiLCJkeCIsImR5IiwiZW5kIiwicmVtb3ZlIiwiZWRnZXMiLCJyaWdodCIsImJvdHRvbSIsImV2ZW50IiwicGFyc2VGbG9hdCIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwicmVjdCIsIm1vZGlmaWVycyIsInJlc3RyaWN0U2l6ZSIsIm1pbiIsImRyb3B6b25lIiwiYWNjZXB0Iiwib3ZlcmxhcCIsIm9uZHJvcGFjdGl2YXRlIiwiY29uc29sZSIsImxvZyIsIm9uZHJhZ2VudGVyIiwiZHJhZ2dhYmxlRWxlbWVudCIsInJlbGF0ZWRUYXJnZXQiLCJkcm9wem9uZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsIm9uZHJhZ2xlYXZlIiwib25kcm9wIiwib25kcm9wZGVhY3RpdmF0ZSIsImluZXJ0aWEiLCJyZXN0cmljdFJlY3QiLCJyZXN0cmljdGlvbiIsImVuZE9ubHkiLCJhdXRvU2Nyb2xsIiwicmVzaXplIiwieUxpbmUiLCJ4TGluZSIsInlDb250YWluZXIiLCJ4Q29udGFpbmVyIiwibnVtYmVyT2ZDdXJyZW50RWxlbWVudFkiLCJudW1iZXJPZkN1cnJlbnRFbGVtZW50WCIsIm51bWJlck9mRXhwZWN0ZWRFbGVtZW50WSIsIm51bWJlck9mRXhwZWN0ZWRFbGVtZW50WCIsInVwZGF0ZUxpbmUiLCJudW1iZXJPZkN1cnJlbnRFbGVtZW50IiwibnVtYmVyT2ZFeHBlY3RlZEVsZW1lbnQiLCJjbGFzc0xpbmUiLCJheGlzIiwiaW5kZXgiLCJjb2xvckJvYXJkIiwiaGVpZ2h0TWF4IiwiaGVpZ2h0TWluIiwidmFsaWQiLCJjYW5jZWwiLCJhY3Rpb24iLCJ0cmFuc2l0aW9uIiwib3BlbiIsImNsb3NlIiwic2V0VGltZW91dCIsIml0ZW0iLCJGb250IiwicGFsZXR0ZUNvbG9yIiwicGFsZXR0ZUlucHV0IiwiZWRpdFNpemUiLCJ2YWxpZEJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImNvbG9yIiwiZWRpdCIsImNvbG9yRXZlbnQiLCJwbGFjZWhvbGRlciIsImZvbnRTaXplIiwiZWRpdHMiLCJuYXYiLCJtZW51IiwiY29sb3JMYWJlbCIsImNvbG9yUGFsZXR0ZSIsImNvbG9ySGV4YSIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImNvbG9yTWVudSIsInNpemVzIiwiYXBwbHkiLCJzZWxlY3QiLCJpbnNlcnRCZWZvcmUiLCJwdXNoIiwic3BsaWNlIiwib3B0aW9uIiwiY3JlYXRlT3B0aW9uIiwidWwiLCJsaVR5cGUiLCJvcHRpb25zIiwibGlzdCIsImluc2VydCIsInRpdGxlcyIsImJsb2NrcyIsIm90aGVycyIsImNvbnRhaW5lcnMiLCJoZWFkVHJhbnNsYXRlIiwibmFtZSIsIm9wdGlvbkxpc3QiLCJjbGFzc05hbWUiLCJvcHRpb25MaXN0TmFtZSIsImNsYXNzVGFyZ2V0RWxlbWVudCIsInBvc3NpYmxlIiwic3RvcEV2ZW50IiwiZHJhZyIsInJlbW92ZUFsbCIsImlkcyIsImNoaWxkRWxlbWVudENvdW50Iiwid29yZCIsImtleSIsImhhc093blByb3BlcnR5IiwiTWVudSIsInVuYXV0aG9yaXplUmlnaHRDbGljayIsIm1vdXNlUG9zaXRpb24iLCJvcHRpb25PbkVsZW1lbnQiLCJhY3RpdmVFbGVtZW50IiwicHJldmVudERlZmF1bHQiLCJsaUZyIiwiZnIiLCJsaUVuIiwiZW4iLCJsaSIsImVsdCIsImRpc2FibGVBbGwiLCJvcGVuT3JDbG9zZSIsInRhcmdldHMiLCJ0IiwicG9zIiwiZ2V0UG9zaXRpb24iLCJjbGllbnRYIiwiY2xpZW50WSIsImNsaWVudFRvcCIsInRhcmdldENsYXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7QUFPQTtDQUdBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7Q0FLQTs7QUFDQSxJQUFJQSwrREFBSjtBQUNBLElBQUlDLHVGQUFKO0FBQ0EsSUFBSUMsaUZBQUo7QUFDQSxJQUFJQyxpRkFBSixHLENBRUE7O0FBQ0EsSUFBSUMsc0ZBQUosRyxD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SixFQUNBO0FBQ0lsQixnQkFBTSxDQUFDSSxTQUFQLENBQWlCQyxHQUFqQixDQUFxQixRQUFyQjtBQUVILFNBSkQsTUFJTSxJQUFJLENBQUNMLE1BQU0sQ0FBQ0ksU0FBUCxDQUFpQmMsUUFBakIsQ0FBMEIsU0FBMUIsQ0FBTCxFQUNOO0FBQ0ksY0FBRzJLLFdBQUgsRUFDQTtBQUNJQSx1QkFBVyxDQUFDekwsU0FBWixDQUFzQnVELE1BQXRCLENBQTZCLFFBQTdCO0FBQ0g7QUFDSixTQU5LLE1BTUE7QUFDRjNELGdCQUFNLENBQUNJLFNBQVAsQ0FBaUJ1RCxNQUFqQixDQUF3QixRQUF4QjtBQUNIO0FBQ0osT0FsQkQ7QUFtQkg7QUEvT0w7O0FBQUE7QUFBQSxJIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuXHJcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxuaW1wb3J0ICcuLi9jc3MvYXBwLmNzcyc7XHJcblxyXG4vLyBOZWVkIGpRdWVyeT8gSW5zdGFsbCBpdCB3aXRoIFwieWFybiBhZGQganF1ZXJ5XCIsIHRoZW4gdW5jb21tZW50IHRvIGltcG9ydCBpdC5cclxuLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcblxyXG5pbXBvcnQgeyBOYXYgfSBmcm9tICcuL2xpYi9uYXZpZ2F0aW9uL2luaXQvTmF2LmpzJztcclxuaW1wb3J0IHsgTWVudUNvbG91cmJvYXJkIH0gZnJvbSAnLi9saWIvbmF2aWdhdGlvbi9pbml0L01lbnVDb2xvdXJib2FyZC5qcyc7XHJcbmltcG9ydCB7IE1lbnVMaXN0VHlwZSB9IGZyb20gJy4vbGliL25hdmlnYXRpb24vaW5pdC9NZW51TGlzdFR5cGUuanMnO1xyXG5pbXBvcnQgeyBNZW51TGlzdFNpemUgfSBmcm9tICcuL2xpYi9uYXZpZ2F0aW9uL2luaXQvTWVudUxpc3RTaXplLmpzJztcclxuXHJcbmltcG9ydCB7IENvbG91cmJvYXJkIH0gZnJvbSAnLi9saWIvbmF2aWdhdGlvbi9jb2xvdXJib2FyZC9Db2xvdXJib2FyZC5qcyc7XHJcbmltcG9ydCB7IFN0eWxlIH0gZnJvbSAnLi9saWIvbmF2aWdhdGlvbi9jb2xvdXJib2FyZC9TdHlsZS5qcyc7XHJcblxyXG5pbXBvcnQgeyBVcGRhdGUgfSBmcm9tICcuL2xpYi9ncmlkL1VwZGF0ZS5qcyc7XHJcbmltcG9ydCB7IEludGVyYWN0IH0gZnJvbSAnLi9saWIvZ3JpZC9JbnRlcmFjdC5qcyc7XHJcblxyXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSAnLi9saWIvZWxlbWVudC9FbGVtZW50LmpzJztcclxuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi9saWIvZWxlbWVudC9ib3gvQm94LmpzJztcclxuXHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJy4vbGliL29wdGlvbi9BY3Rpb24uanMnO1xyXG5cclxuXHJcbi8vSW5pdGlhbGl6YXRpb25cclxubmV3IE5hdigpO1xyXG5uZXcgTWVudUNvbG91cmJvYXJkKCk7XHJcbm5ldyBNZW51TGlzdFR5cGUoKTtcclxubmV3IE1lbnVMaXN0U2l6ZSgpO1xyXG5cclxuLy9OQVZJR0FUSU9OXHJcbm5ldyBDb2xvdXJib2FyZCgpO1xyXG5cclxuLy9HUklEXHJcbm5ldyBVcGRhdGUoKTtcclxubmV3IEludGVyYWN0KCk7XHJcblxyXG4vL0VMRU1FTlRcclxubmV3IEVsZW1lbnQoKTtcclxubmV3IEJveCgpO1xyXG5uZXcgU3R5bGUoKTtcclxuXHJcbi8vT3B0aW9uXHJcbm5ldyBBY3Rpb24oKTtcclxuXHJcbiIsIi8qKlxyXG4gKiBAY2xhc3MgY3JlYXRlIGh0bWwgZWxlbWVudFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEVsZW1lbnQge1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7ICAgXHJcbiAgICAgICAgdGhpcy5iaWdDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJylcclxuICAgICAgICB0aGlzLm1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyIG1haW4nKVxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGFpbmVyJylcclxuICAgICAgICB0aGlzLmxpc3RUeXBlICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3QtdHlwZScpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlKCk7XHJcbiAgICAgICAgdGhpcy5mb2N1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdCBhbiBlbGVtZW50IG9udCB0aGUgZ3JpZFxyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBcclxuICAgICAqL1xyXG4gICAgY2VudGVyKGVsZW1lbnQpIFxyXG4gICAgeyAgIFxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFuIEhUTUwgZWxlbWVudCB3aGVuIG9uZSBlbGVtZW50IGluIHRoZSBtZW51IGxpc3Qgd2FzIHNlbGVjdGVkXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZSgpXHJcbiAgICB7ICAgXHJcbiAgICAgICAgdGhpcy5saXN0VHlwZS5jaGlsZHJlbi5mb3JFYWNoKCBjaGlsZCA9PiB7XHJcblxyXG4gICAgICAgICAgICBjaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZih0YXJnZXQudmFsdWUgIT09ICcnIClcclxuICAgICAgICAgICAgICAgIHsgICBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudCA9ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiggdGFyZ2V0LnZhbHVlLmluY2x1ZGVzKCdib3gnKSlcclxuICAgICAgICAgICAgICAgICAgICB7ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdlbGVtZW50JyAsJ2JveCcsIHRhcmdldC52YWx1ZSwgJ2Ryb3B6b25lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Qm94U3R5bGUoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZWxlbWVudCcgLCB0YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnZhbHVlID0gJ05vdXZlYXUgdGV4dGUnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jZW50ZXIoZWxlbWVudCk7ICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgd2lkdGggcHJvcGVydGllIGZvciBhIGJveCBlbGVtZW50IHRoYW5rIGNsYXNzTGlzdFxyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBhIGJveCBlbGVtZW50XHJcbiAgICAgKi9cclxuICAgIHNldEJveFN0eWxlKGVsZW1lbnQpXHJcbiAgICB7ICAgXHJcbiAgICAgICAgbGV0IHdpZHRoID0gZWxlbWVudC5jbGFzc0xpc3RbMl0ucmVwbGFjZSgnYm94LScsICcnKTtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9IHdpZHRoICsgJyUnO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzEwMHB4JztcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSAwOyBcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBhbiBodG1sIGVsZW1lbnQgYW5kIHJldHVycyBoaXMgbG9jYXRpb25cclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgXHJcbiAgICAgKiBAcmV0dXJucyB7RE9NUmVjdH0gZ2V0Y2xpZW50UmVjdHNbMF1cclxuICAgICAqL1xyXG4gICAgZ2V0UG9zaXRpb24oZWxlbWVudClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKGVsZW1lbnQuZ2V0Q2xpZW50UmVjdHMoKVswXSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBmb2N1cyB0byBhbGwgaHRtbCBlbGVtZW50IGluIHRoZSBncmlkXHJcbiAgICAgKi9cclxuICAgIGZvY3VzKClcclxuICAgIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVsZW1lbnQnKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGVsZW1lbnRzLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2VsZW1lbnQnKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUuYm9yZGVyID0nMXB4IHNvbGlkICMyNDZjOWMnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIChlKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlbGVtZW50JykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmJvcmRlciA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7ICBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogQ3JlYXRlIGFuIFJlc3BvbnNpdmUgY29udGFpbmVyIHdoaWNoIHJlY2VpdmUgY2hpbGRyZW4gXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQm94IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7ICAgXHJcbiAgICB9XHJcbn0iLCIvKipcclxuICogQGNsYXNzIGNyZWF0ZSBhIGdyaWQgc3lzdGVtXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR3JpZFxyXG57XHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVNYWluKCk7XHJcbiAgICAgICAgdGhpcy5tYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lciBtYWluJylcclxuICAgICAgICB0aGlzLmxpbmVTcGFjZSA9IDEwOyBcclxuICAgICAgICB0aGlzLm1haW5TaXplID0gdGhpcy5zaXplKHRoaXMubWFpbik7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50Q29udGFpbmVyKCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGUodGhpcy5tYWluU2l6ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgdmVydGljYWwgbGluZVxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBheGlzQ29udGFpbmVyIFxyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBcclxuICAgICAqIEBwYXJhbSB7Tm1iZXJ9IGkgbnVtYmVyKytcclxuICAgICAqL1xyXG4gICAgdmVydGljYWwgKGF4aXNDb250YWluZXIsIGVsZW1lbnQsIGkpXHJcbiAgICB7ICAgXHJcbiAgICAgICAgYXhpc0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSAoaSAqIHRoaXMubGluZVNwYWNlKSArICdweCc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgaG9yaXpvbnRhbCBsaW5lXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB7SFRNTEVMZW1lbnR9IGF4aXNDb250YWluZXIgXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGkgXHJcbiAgICAgKi9cclxuICAgIGhvcml6b250YWwgKGF4aXNDb250YWluZXIsIGVsZW1lbnQsaSlcclxuICAgIHtcclxuICAgICAgICBheGlzQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gKGkgKiB0aGlzLmxpbmVTcGFjZSkgKyAncHgnO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY3JlYXRlIG1haW4gaHRtbCBlbGVtZW50IChjb250YWluZXIpXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZU1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYWluIGNvbnRhaW5lciBzaXplXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IGFuIEhUTUwgZWxlbWVudFxyXG4gICAgICogQHJldHVybiB7b2JqZWN0fSBzaXplc1xyXG4gICAgICovXHJcbiAgICBzaXplKGVsZW1lbnQpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgd2lkdGggOiBlbGVtZW50LmNsaWVudFdpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQgOiBlbGVtZW50LmNsaWVudEhlaWdodCxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgZ3JpZCB3aXRoIHNldmVyYWwgbGluZVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemUgXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZShzaXplKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGxpbmVTcGFjZSA9IHRoaXMubGluZVNwYWNlO1xyXG4gICAgICAgIGNvbnN0IGxpbmVQZXJSb3dYID0gTWF0aC5mbG9vcihzaXplLndpZHRoL2xpbmVTcGFjZSk7XHJcbiAgICAgICAgY29uc3QgbGluZVBlclJvd1kgPSBNYXRoLmZsb29yKHNpemUuaGVpZ2h0L2xpbmVTcGFjZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZ3JpZENvbnRhaW5lciA9IHRoaXMuY3JlYXRlRWxlbWVudFdpdGhJZCgnZGl2JywgJ2dyaWQtY29udGFpbmVyJyk7XHJcbiAgICAgICAgY29uc3QgdmVydGljYWxDb250YWluZXIgPSAgdGhpcy5jcmVhdGVFbGVtZW50V2l0aElkKCdkaXYnLCAnbGluZS12ZXJ0aWNhbC1jb250YWluZXInKTtcclxuICAgICAgICBjb25zdCBob3Jpem9udGFsQ29udGFpbmVyID0gdGhpcy5jcmVhdGVFbGVtZW50V2l0aElkKCdkaXYnLCAnbGluZS1ob3Jpem9udGFsLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubWFpbi5hcHBlbmRDaGlsZChncmlkQ29udGFpbmVyKTtcclxuICAgICAgICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKHZlcnRpY2FsQ29udGFpbmVyKTtcclxuICAgICAgICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvcml6b250YWxDb250YWluZXIpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8ICBsaW5lUGVyUm93WCAgOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgbGluZS5jbGFzc0xpc3QuYWRkKCdncmlkLXZlcnRpY2FsLWxpbmUnKTtcclxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNhbCh2ZXJ0aWNhbENvbnRhaW5lciwgbGluZSAsIGkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAgbGluZVBlclJvd1kgIDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGxpbmUuY2xhc3NMaXN0LmFkZCgnZ3JpZC1ob3Jpem9udGFsLWxpbmUnKTtcclxuICAgICAgICAgICAgdGhpcy5ob3Jpem9udGFsKGhvcml6b250YWxDb250YWluZXIsIGxpbmUgLCBpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYW4gZWxlbWVudCBhbmQgc2V0IGFuIGlkLlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgQW4gSHRtbCBlbGVtZW50IHR5cGVcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZCBBbiBpZCBmb3IgZWxtZWVudCBjcmVhdGVkXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZUVsZW1lbnRXaXRoSWQodHlwZSwgaWQpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xyXG4gICAgICAgIGVsZW1lbnQuaWQgID0gaWQ7XHJcblxyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgY29udGFpbmVyIHRoYXQncyByZWNlaXZlIHRoZSBmdXR1ciBIVE1MIGVsZW1lbnQgY3JlYXRlZFxyXG4gICAgICovXHJcbiAgICBlbGVtZW50Q29udGFpbmVyKClcclxuICAgIHtcclxuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2LmlkID0gJ21haW4tY29udGFpbmVyJztcclxuICAgICAgICB0aGlzLm1haW4uYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBhbiBlbGVtZW50IHBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFxyXG4gICAgICovXHJcbiAgICBnZXRQb3NpdGlvbihlbGVtZW50KVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoZWxlbWVudC5nZXRDbGllbnRSZWN0cygpWzBdKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IGludGVyYWN0IGZyb20gJ2ludGVyYWN0anMnXHJcblxyXG4vKipcclxuICogQGNsYXNzIGFsbG93cyB0byBtb3ZlIGFuIGl0ZW0gb24gdGhlIGdyaWRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBJbnRlcmFjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmludGVyYWN0ID0gaW50ZXJhY3Q7XHJcbiAgICAgICAgdGhpcy5tYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGFpbmVyJyk7XHJcbiAgICAgICAgdGhpcy5kcmFnZ2FibGUoKTtcclxuICAgICAgICB0aGlzLnJlc2l6YWJsZSgpO1xyXG4gICAgICAgIHRoaXMuZHJhZ0FuZERyb3AoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBNb3ZlIGFuICcuZHJhZ2dhYmxlJyBlbGVtZW50XHJcbiAgICAgKi9cclxuICAgIGRyYWdnYWJsZSgpe1xyXG5cclxuICAgICAgICBsZXQgcG9zaXRpb24gPSB7eCA6IDAgLCB5IDogMCB9O1xyXG4gICAgICAgIGxldCB0cmFuc2xhdGUgID0gJyc7XHJcblxyXG4gICAgICAgIGludGVyYWN0KCcuZHJhZ2dhYmxlJykuZHJhZ2dhYmxlKHtcclxuICAgICAgICAgICAgbGlzdGVuZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBzdGFydCAoZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZighZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkcm9wem9uZScpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuaWQgPSAneWVzLWRyb3AnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIGUudGFyZ2V0LnN0eWxlLnRyYW5zZm9ybSAgPT09ICcnKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24ueCA9IDAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi55ID0gMCA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUgPSBlLnRhcmdldC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7cG9zaXRpb24ueH1weCwgJHtwb3NpdGlvbi55fXB4KWBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbW92ZSAoZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi54ICs9IGUuZHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24ueSArPSBlLmR5O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgcmVnZXggPSAvW1thLXpdXFwoXFwpXFwsXS8gLy8gL1tbdHJhbnNsYXRlXVxcKFxcKVxcLF0vO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7cG9zaXRpb24ueH1weCwgJHtwb3NpdGlvbi55fXB4KWA7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZW5kKGUpXHJcbiAgICAgICAgICAgICAgICB7ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZS50YXJnZXQuaWQgPT09ICd5ZXMtZHJvcCcpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5pZCA9ICduby1kcm9wJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dhYmxlJylcclxuICAgICAgICAgICAgICAgICAgICBpZighZS50YXJnZXQuc3R5bGUudHJhbnNmb3JtID09ICcnKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3Bvc2l0aW9uLnh9cHgsICR7cG9zaXRpb24ueX1weClgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlc2l6ZSBhICcucmVzaXphYmxlJyBlbGVtZW50XHJcbiAgICAgKi9cclxuICAgIHJlc2l6YWJsZSgpXHJcbiAgICB7XHJcbiAgICAgICAgaW50ZXJhY3QoJy5yZXNpemUnKS5yZXNpemFibGUoe1xyXG5cclxuICAgICAgICAgICAgLy8gcmVzaXplIGZyb20gYWxsIGVkZ2VzIGFuZCBjb3JuZXJzXHJcbiAgICAgICAgICAgIGVkZ2VzOiB7IGxlZnQ6IGZhbHNlLCByaWdodDogdHJ1ZSwgYm90dG9tOiB0cnVlLCB0b3A6IGZhbHNlIH0sXHJcblxyXG4gICAgICAgICAgICBsaXN0ZW5lcnM6IHtcclxuICAgICAgICAgICAgICAgIG1vdmUgKGV2ZW50KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vSEVJR0hUIFNJWkUgTU9WRVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBwYXJzZUZsb2F0KHRhcmdldC5vZmZzZXRXaWR0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSBwYXJzZUZsb2F0KHRhcmdldC5vZmZzZXRIZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgdGhlIGVsZW1lbnQncyBzdHlsZVxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5zdHlsZS53aWR0aCA9IGV2ZW50LnJlY3Qud2lkdGggKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBldmVudC5yZWN0LmhlaWdodCArJ3B4JztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdHJhbnNsYXRlIHdoZW4gcmVzaXppbmcgZnJvbSB0b3Agb3IgbGVmdCBlZGdlc1xyXG4gICAgICAgICAgICAgICAgICAgIHggKz0gZXZlbnQuZHg7XHJcbiAgICAgICAgICAgICAgICAgICAgeSArPSBldmVudC5keTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc3R5bGUud2lkdGggPSB4ICsgJ3B4KSc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IHkgKyAncHgpJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbW9kaWZpZXJzOiBbXHJcbiAgICAgICAgICAgICAgICAvLyBtaW5pbXVtIHNpemVcclxuICAgICAgICAgICAgICAgIGludGVyYWN0Lm1vZGlmaWVycy5yZXN0cmljdFNpemUoe1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbjogeyB3aWR0aDogMjAsIGhlaWdodDogMjAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGRyYWdBbmREcm9wKClcclxuICAgIHtcclxuICAgICAgICAvKiBUaGUgZHJhZ2dpbmcgY29kZSBmb3IgJy5kcmFnZ2FibGUnIGZyb20gdGhlIGRlbW8gYWJvdmVcclxuICAgICAgICAqIGFwcGxpZXMgdG8gdGhpcyBkZW1vIGFzIHdlbGwgc28gaXQgZG9lc24ndCBoYXZlIHRvIGJlIHJlcGVhdGVkLiAqL1xyXG5cclxuICAgICAgICAvLyBlbmFibGUgZHJhZ2dhYmxlcyB0byBiZSBkcm9wcGVkIGludG8gdGhpc1xyXG4gICAgICAgIGludGVyYWN0KCcuZHJvcHpvbmUnKS5kcm9wem9uZSh7XHJcbiAgICAgICAgICAgIC8vIG9ubHkgYWNjZXB0IGVsZW1lbnRzIG1hdGNoaW5nIHRoaXMgQ1NTIHNlbGVjdG9yXHJcbiAgICAgICAgICAgIGFjY2VwdDogJyN5ZXMtZHJvcCcsXHJcbiAgICAgICAgICAgIC8vIFJlcXVpcmUgYSA3NSUgZWxlbWVudCBvdmVybGFwIGZvciBhIGRyb3AgdG8gYmUgcG9zc2libGVcclxuICAgICAgICAgICAgb3ZlcmxhcDogMC43NSxcclxuICAgICAgICBcclxuICAgICAgICAgICAgLy8gbGlzdGVuIGZvciBkcm9wIHJlbGF0ZWQgZXZlbnRzOlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBvbmRyb3BhY3RpdmF0ZTogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBhZGQgYWN0aXZlIGRyb3B6b25lIGZlZWRiYWNrXHJcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnZHJvcC1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbmRyYWdlbnRlcjogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZHJhZ2dhYmxlRWxlbWVudCA9IGV2ZW50LnJlbGF0ZWRUYXJnZXRcclxuICAgICAgICAgICAgICAgIHZhciBkcm9wem9uZUVsZW1lbnQgPSBldmVudC50YXJnZXRcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBmZWVkYmFjayB0aGUgcG9zc2liaWxpdHkgb2YgYSBkcm9wXHJcbiAgICAgICAgICAgICAgICBkcm9wem9uZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJvcC10YXJnZXQnKVxyXG4gICAgICAgICAgICAgICAgZHJhZ2dhYmxlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjYW4tZHJvcCcpXHJcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGVFbGVtZW50LnRleHRDb250ZW50ID0gJ0RyYWdnZWQgaW4nXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uZHJhZ2xlYXZlOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgZHJvcCBmZWVkYmFjayBzdHlsZVxyXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3AtdGFyZ2V0JylcclxuICAgICAgICAgICAgICAgIGV2ZW50LnJlbGF0ZWRUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnY2FuLWRyb3AnKVxyXG4gICAgICAgICAgICAgICAgZXZlbnQucmVsYXRlZFRhcmdldC50ZXh0Q29udGVudCA9ICdEcmFnZ2VkIG91dCdcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25kcm9wOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnJlbGF0ZWRUYXJnZXQudGV4dENvbnRlbnQgPSAnRHJvcHBlZCdcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25kcm9wZGVhY3RpdmF0ZTogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgYWN0aXZlIGRyb3B6b25lIGZlZWRiYWNrXHJcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZHJvcC1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3AtdGFyZ2V0JylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgaW50ZXJhY3QoJy5kcmFnLWRyb3AnKS5kcmFnZ2FibGUoe1xyXG4gICAgICAgICAgICBpbmVydGlhOiB0cnVlLFxyXG4gICAgICAgICAgICBtb2RpZmllcnM6IFtcclxuICAgICAgICAgICAgICAgIGludGVyYWN0Lm1vZGlmaWVycy5yZXN0cmljdFJlY3Qoe1xyXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Rpb246ICdwYXJlbnQnLFxyXG4gICAgICAgICAgICAgICAgZW5kT25seTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgYXV0b1Njcm9sbDogdHJ1ZSxcclxuICAgICAgICAgICAgLy8gZHJhZ01vdmVMaXN0ZW5lciBmcm9tIHRoZSBkcmFnZ2luZyBkZW1vIGFib3ZlXHJcbiAgICAgICAgICAgIC8vIGxpc3RlbmVyczogeyBtb3ZlOiBkcmFnTW92ZUxpc3RlbmVyIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBHcmlkIH0gZnJvbSBcIi4vR3JpZFwiO1xyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZSBHcmlkIHdoZW4gd2luZG93J3MgcmVzaXppbmdcclxuICovXHJcbmV4cG9ydCBjbGFzcyBVcGRhdGUgZXh0ZW5kcyBHcmlkIHtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAgeyAgIFxyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5yZXNpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICAgLyoqXHJcbiAgICAgKiBMaXN0ZW4gd2luZG93IHJlc2l6aW5nIGFuZCBjcmVhdGUgb3IgcmVtb3ZlIGlmIG5lZWRlZFxyXG4gICAgICovXHJcbiAgICByZXNpemUoKVxyXG4gICAgeyAgIFxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCgpPT57XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCB5TGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkLXZlcnRpY2FsLWxpbmUnKTtcclxuICAgICAgICAgICAgbGV0IHhMaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdyaWQtaG9yaXpvbnRhbC1saW5lJyk7XHJcbiAgICAgICAgICAgIGxldCBtYWluU2l6ZSA9IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoIDogdGhpcy5tYWluLmNsaWVudFdpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0IDogdGhpcy5tYWluLmNsaWVudEhlaWdodCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGluZS12ZXJ0aWNhbC1jb250YWluZXInKTtcclxuICAgICAgICAgICAgbGV0IHhDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGluZS1ob3Jpem9udGFsLWNvbnRhaW5lcicpO1xyXG5cclxuICAgICAgICAgICAgbGV0IG51bWJlck9mQ3VycmVudEVsZW1lbnRZID0geUxpbmUubGVuZ3RoO1xyXG4gICAgICAgICAgICBsZXQgbnVtYmVyT2ZDdXJyZW50RWxlbWVudFggPSB4TGluZS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICBsZXQgbnVtYmVyT2ZFeHBlY3RlZEVsZW1lbnRZICA9IE1hdGguZmxvb3IobWFpblNpemUud2lkdGggLyB0aGlzLmxpbmVTcGFjZSk7XHJcbiAgICAgICAgICAgIGxldCBudW1iZXJPZkV4cGVjdGVkRWxlbWVudFggID0gTWF0aC5mbG9vcihtYWluU2l6ZS5oZWlnaHQgLyB0aGlzLmxpbmVTcGFjZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUxpbmUobnVtYmVyT2ZDdXJyZW50RWxlbWVudFksIG51bWJlck9mRXhwZWN0ZWRFbGVtZW50WSAsIHlDb250YWluZXIgLCAnZ3JpZC12ZXJ0aWNhbC1saW5lJyk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGluZShudW1iZXJPZkN1cnJlbnRFbGVtZW50WCwgbnVtYmVyT2ZFeHBlY3RlZEVsZW1lbnRYICwgeENvbnRhaW5lciAsICdncmlkLWhvcml6b250YWwtbGluZScsICd4Jyk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSBudW1iZXIgb2YgbGluZXMgaW4gdGhlIGdyaWRcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBudW1iZXJPZkN1cnJlbnRFbGVtZW50IE51bWJlciBvZiBjdXJlcm50IGVsZW1lbnRcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBudW1iZXJPZkV4cGVjdGVkRWxlbWVudCBOdW1iZXIgb2YgZXhwZWN0ZWQgZWxlbWVudFxyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gYXhpc0NvbnRhaW5lciBUaGF0IGNvbnRhaW5zIHRoZSBsaW5lcyBvZiBhbiBheGlzXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NMaW5lIENsYXNzIG9mIGxpbmUgZWxlbWVudFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGF4aXMgQSBjaGFyYWN0ZXIgJ3gnXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZUxpbmUobnVtYmVyT2ZDdXJyZW50RWxlbWVudCwgbnVtYmVyT2ZFeHBlY3RlZEVsZW1lbnQsICBheGlzQ29udGFpbmVyLCBjbGFzc0xpbmUsIGF4aXMpXHJcbiAgICB7XHJcbiAgICAgICAgaWYobnVtYmVyT2ZDdXJyZW50RWxlbWVudCA8IG51bWJlck9mRXhwZWN0ZWRFbGVtZW50KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IG51bWJlck9mQ3VycmVudEVsZW1lbnQgOyBpIDw9IG51bWJlck9mRXhwZWN0ZWRFbGVtZW50OyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBsaW5lLmNsYXNzTGlzdC5hZGQoY2xhc3NMaW5lKTtcclxuICAgICAgICAgICAgICAgIGF4aXMgPT09ICd4JyA/IHRoaXMuaG9yaXpvbnRhbCggYXhpc0NvbnRhaW5lcixsaW5lLCBpKSA6IHRoaXMudmVydGljYWwoIGF4aXNDb250YWluZXIsIGxpbmUgLCBpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlIGlmKG51bWJlck9mQ3VycmVudEVsZW1lbnQgPiBudW1iZXJPZkV4cGVjdGVkRWxlbWVudCkge1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IG51bWJlck9mRXhwZWN0ZWRFbGVtZW50IDsgaSA8PSBudW1iZXJPZkN1cnJlbnRFbGVtZW50OyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgY2xhc3NMaW5lKTtcclxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IG51bWJlck9mRXhwZWN0ZWRFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgbGluZVtpbmRleC0xXS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgQ29sb3VyYm9hcmRcclxue1xyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAgeyAgIFxyXG4gICAgICAgIHRoaXMuY29sb3JCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb2xvci1tZW51Jyk7XHJcbiAgICAgICAgdGhpcy5oZWlnaHRNYXggPSAxNTA7XHJcbiAgICAgICAgdGhpcy5oZWlnaHRNaW4gPSAyMDtcclxuICAgICAgICB0aGlzLnZhbGlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ZhbGlkJyk7XHJcbiAgICAgICAgdGhpcy5jYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsJyk7XHJcbiAgICAgICAgdGhpcy5hY3Rpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9wZW4gb3IgY2xvc2UgY29sb3Jib2FyZFxyXG4gICAgICovXHJcbiAgICBhY3Rpb24oKVxyXG4gICAgeyAgIFxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JCb2FyZC5zdHlsZS50cmFuc2l0aW9uID0gJy4ycyBlYXNlLWluIC4xcyc7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodE1heCAgPSB0aGlzLmhlaWdodE1heDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0TWluICA9IHRoaXMuaGVpZ2h0TWluIDtcclxuXHJcbiAgICAgICAgICAgIGlmKGVsZW1lbnQpXHJcbiAgICAgICAgICAgIHsgICBcclxuICAgICAgICAgICAgICAgIHRoaXMub3BlbihoZWlnaHRNYXgpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZShoZWlnaHRNaW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9wZW4gYWN0aW9uXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaGVpZ2h0TWF4IGhlaWdodCBtYXggZm9yIGNvbG9yYm9hcmRcclxuICAgICAqL1xyXG4gICAgb3BlbihoZWlnaHRNYXgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jb2xvckJvYXJkLnN0eWxlLmhlaWdodCA9IGhlaWdodE1heCArICdweCc7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbG9yQm9hcmQuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5jb2xvckJvYXJkLmNoaWxkcmVuW2ldO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCcjY29sb3ItbGFiZWwnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAzMDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xvc2UgYWN0aW9uICBcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHRNaW4gaGVpZ2h0IG1pbiBmb3IgY29sb3Jib2FyZFxyXG4gICAgICovXHJcbiAgICBjbG9zZShoZWlnaHRNaW4pXHJcbiAgICB7XHJcbiAgICAgICAgaWYodGhpcy5jb2xvckJvYXJkLm9mZnNldEhlaWdodCA+IGhlaWdodE1pbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5jb2xvckJvYXJkLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuY29sb3JCb2FyZC5jaGlsZHJlbltpXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiggIWl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5jb2xvckJvYXJkLnN0eWxlLmhlaWdodCA9IGhlaWdodE1pbiArICdweCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IEZvbnQgfSBmcm9tIFwiLi4vZm9udC9Gb250XCI7XHJcblxyXG4vKipcclxuICogU3R5bGl6ZSBIVE1MIEVsZW1lbnQgdGhhbmtzIHRvIHRoZSBOQVZCQVIgRURJVE9SXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3R5bGUgXHJcbntcclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHsgICBcclxuICAgICAgICBuZXcgRm9udCgpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIEZvbnR7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucGFsZXR0ZUNvbG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbG9yLXBhbGV0dGUnKTtcclxuICAgICAgICB0aGlzLnBhbGV0dGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb2xvci1oZXhhJyk7XHJcbiAgICAgICAgdGhpcy5lZGl0U2l6ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXNpemUnKTtcclxuICAgICAgICB0aGlzLnZhbGlkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ZhbGlkJyk7XHJcbiAgICAgICAgdGhpcy5jYW5jZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsJyk7XHJcbiAgICAgICAgdGhpcy5jb2xvcigpO1xyXG4gICAgICAgIHRoaXMuc2l6ZSgpO1xyXG4gICAgICAgIHRoaXMudmFsaWQoKTtcclxuICAgICAgICB0aGlzLmNhbmNlbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY29sb3Igb2YgYW4gSFRNTCBlbGVtZW50IHZpYSBpbnB1dCBjb2xvciBvciBjb2xvcmJvYXJkXHJcbiAgICAgKi9cclxuICAgIGNvbG9yKClcclxuICAgIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdCcpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoZWRpdClcclxuICAgICAgICAgICAgeyAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvckV2ZW50KGVkaXQpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFsZXR0ZUNvbG9yLnZhbHVlID0gJyMwMDAwMDAnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWxldHRlSW5wdXQucGxhY2Vob2xkZXIgPSAnIzAwMDAwMCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgYSBzaXplIGZvciBhbiBodG1sIGVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgc2l6ZSgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5lZGl0U2l6ZS5jaGlsZHJlbi5mb3JFYWNoKCBzaXplID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNpemUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgZWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0Jyk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKGVkaXQpXHJcbiAgICAgICAgICAgICAgICB7ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdC5zdHlsZS5mb250U2l6ZSA9IGUudGFyZ2V0LnZhbHVlICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBldmVudHMgYXQgYWxsIGlucHV0cyBjb2xvdXJib2FyZFxyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWRpdCBhbiBlbGVtZW50IHdpdGggJy5lZGl0J1xyXG4gICAgICovXHJcbiAgICBjb2xvckV2ZW50KGVkaXQpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5wYWxldHRlQ29sb3IuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSk9PntcclxuXHJcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIGlmKHRhcmdldC52YWx1ZSAhPT0gJyMwMDAwMDAnKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29sb3IgPSB0aGlzLnBhbGV0dGVJbnB1dC52YWx1ZSA9IHRhcmdldC52YWx1ZSA7XHJcbiAgICAgICAgICAgICAgICBlZGl0LnN0eWxlLmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5wYWxldHRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLChlKT0+e1xyXG5cclxuICAgICAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgaWYodGFyZ2V0LnZhbHVlLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb2xvciA9IHRoaXMucGFsZXR0ZUNvbG9yLnZhbHVlID0gdGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgZWRpdC5zdHlsZS5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgZXZlbnRzIGF0IGFsbCBpbnB1dHMgY29sb3VyYm9hcmRcclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVkaXQgYW4gZWxlbWVudCB3aXRoICcuZWRpdCdcclxuICAgICAqL1xyXG4gICAgZm9udEV2ZW50KGVkaXQpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5wYWxldHRlQ29sb3IuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSk9PntcclxuXHJcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIGlmKHRhcmdldC52YWx1ZSAhPT0gJyMwMDAwMDAnKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29sb3IgPSB0aGlzLnBhbGV0dGVJbnB1dC52YWx1ZSA9IHRhcmdldC52YWx1ZSA7XHJcbiAgICAgICAgICAgICAgICBlZGl0LnN0eWxlLmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5wYWxldHRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLChlKT0+e1xyXG5cclxuICAgICAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgaWYodGFyZ2V0LnZhbHVlLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb2xvciA9IHRoaXMucGFsZXR0ZUNvbG9yLnZhbHVlID0gdGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgZWRpdC5zdHlsZS5jb2xvciA9IGNvbG9yO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkKClcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2FuY2VsKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGVkaXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQnKVxyXG5cclxuICAgICAgICAgICAgaWYoZWRpdHMubGVuZ3RoID4gMCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGVkaXRzLmZvckVhY2goIGVkaXQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVkaXQuY2xhc3NMaXN0LnJlbW92ZSgnLmVkaXQnKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIE5hdmlnYXRpb24vTWVudS9DT0xPVVJCT0FSRCBpbml0aWFsaXphdGlvblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE1lbnVDb2xvdXJib2FyZFxyXG57XHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7ICAgXHJcbiAgICAgICAgdGhpcy5uYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2LXNpZGViYXInKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGNvbG91ciBib2FyZFxyXG4gICAgICovXHJcbiAgICBjcmVhdGUoKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbGV0IGNvbG9yTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGxldCBjb2xvclBhbGV0dGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGxldCBjb2xvckhleGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGxldCB2YWxpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGxldCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcbiAgICAgICAgdGhpcy5uYXYuYXBwZW5kQ2hpbGQobWVudSk7XHJcbiAgICAgICAgbWVudS5hcHBlbmRDaGlsZChjb2xvckxhYmVsKTtcclxuICAgICAgICBtZW51LmFwcGVuZENoaWxkKGNvbG9yUGFsZXR0ZSk7XHJcbiAgICAgICAgbWVudS5hcHBlbmRDaGlsZChjb2xvckhleGEpO1xyXG4gICAgICAgIG1lbnUuYXBwZW5kQ2hpbGQodmFsaWQpO1xyXG4gICAgICAgIG1lbnUuYXBwZW5kQ2hpbGQoY2FuY2VsKTtcclxuXHJcbiAgICAgICAgbWVudS5pZCA9ICdjb2xvci1tZW51JztcclxuXHJcbiAgICAgICAgY29sb3JMYWJlbC5pZCA9ICdjb2xvci1sYWJlbCc7XHJcbiAgICAgICAgY29sb3JMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2NvbG9yLWhleGEnKTtcclxuICAgICAgICBjb2xvckxhYmVsLmlubmVySFRNTD0gJ0NvdWxldXInO1xyXG5cclxuICAgICAgICBjb2xvclBhbGV0dGUuaWQgPSAnY29sb3ItcGFsZXR0ZSc7XHJcbiAgICAgICAgY29sb3JQYWxldHRlLnNldEF0dHJpYnV0ZSgndHlwZScsJ2NvbG9yJyk7XHJcbiAgICAgICAgY29sb3JQYWxldHRlLnZhbHVlID0gJyMwMDAwMDAnO1xyXG4gICAgICAgIGNvbG9yUGFsZXR0ZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdjb2xvci1wYWxldHRlJyk7XHJcbiAgICAgICAgY29sb3JQYWxldHRlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG5cclxuICAgICAgICBjb2xvckhleGEuaWQgPSAnY29sb3ItaGV4YSc7XHJcbiAgICAgICAgY29sb3JIZXhhLnNldEF0dHJpYnV0ZSgnbmFtZScsJ2NvbG9yLWhleGEnKTtcclxuICAgICAgICBjb2xvckhleGEucGxhY2Vob2xkZXIgPSAnQ29sb3IgSGV4YSc7XHJcbiAgICAgICAgY29sb3JIZXhhLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG5cclxuICAgICAgICB2YWxpZC5pbm5lckhUTUwgID0nVmFsaWRlcic7XHJcbiAgICAgICAgdmFsaWQuaWQgID0ndmFsaWQnO1xyXG4gICAgICAgIHZhbGlkLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNhbmNlbC5pbm5lckhUTUwgPSAnQW5udWxlcic7XHJcbiAgICAgICAgY2FuY2VsLmlkICA9J2NhbmNlbCc7XHJcbiAgICAgICAgY2FuY2VsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIE5hdmlnYXRpb24vTWVudS9TRUxFQ1RfTElTVCBiYWxpc2UgVHlwZSBpbml0aWFsaXphdGlvblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE1lbnVMaXN0U2l6ZVxyXG57XHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7ICAgXHJcbiAgICAgICAgdGhpcy5jb2xvck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29sb3ItbWVudScpO1xyXG4gICAgICAgIHRoaXMubmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdi1zaWRlYmFyJyk7XHJcbiAgICAgICAgdGhpcy52YWxpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2YWxpZCcpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyKCk7XHJcbiAgICAgICAgbGV0IHNpemVzID0gdGhpcy5zaXplKCk7XHJcbiAgICAgICAgdGhpcy5hcHBseShzaXplcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29udGFpbmVyKClcclxuICAgIHsgICBcclxuICAgICAgICBsZXQgdmFsaWQgPSB0aGlzLnZhbGlkO1xyXG4gICAgICAgIGxldCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuXHJcbiAgICAgICAgc2VsZWN0LmlkPSdzaXplJztcclxuICAgICAgICB0aGlzLmNvbG9yTWVudS5pbnNlcnRCZWZvcmUoc2VsZWN0LCB2YWxpZCk7XHJcblxyXG4gICAgICAgIHNlbGVjdC5pZCA9ICdlZGl0LXNpemUnOyBcclxuICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgc2l6ZXMgYW5kIHN0b3JlIGl0IGluIGFuIGFycmF5XHJcbiAgICAgKi9cclxuICAgIHNpemUoKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBzaXplcyA9IFsnVGFpbGxlJ107XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAgNDAgOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIHNpemVzLnB1c2goaSoyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzaXplcy5zcGxpY2UoMywgc2l6ZXMubGVuZ3RoKTtcclxuICAgIH0gICBcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBIVE1MIG9wdGlvbiBzaXplXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2l6ZVxyXG4gICAgICovXHJcbiAgICBjcmVhdGVPcHRpb24oc2l6ZSlcclxuICAgIHtcclxuICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtc2l6ZScpLmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gc2l6ZTtcclxuICAgICAgICBvcHRpb24uaW5uZXJIVE1MID0gc2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBlYWNoIG9wdGlvbiBhbmQgaW5zZXJ0IGEgc2l6ZVxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gc2l6ZXMgYXJyYXkgd2l0aCBzaXplc1xyXG4gICAgICovXHJcbiAgICBhcHBseShzaXplcylcclxuICAgIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpemUgPSBzaXplc1tpXTtcclxuXHJcbiAgICAgICAgICAgIGlmKGkgPT09IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlT3B0aW9uKCdUYWlsbGUnKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVPcHRpb24oc2l6ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59IiwiLyoqXHJcbiAqIE5hdmlnYXRpb24vTWVudS9TRUxFQ1RfTElTVCBiYWxpc2UgVHlwZSBpbml0aWFsaXphdGlvblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE1lbnVMaXN0VHlwZVxyXG57XHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7ICAgXHJcbiAgICAgICAgdGhpcy5uYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2LXNpZGViYXInKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lcigpO1xyXG4gICAgICAgIHRoaXMuYXBwbHkoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9wdGlvbiBjb250YWluZXIgaW4gJy5lZGl0LWxpc3QnXHJcbiAgICAgKi9cclxuICAgIGNvbnRhaW5lcigpXHJcbiAgICB7ICAgXHJcbiAgICAgICAgbGV0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICBsZXQgbGlUeXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBsZXQgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcblxyXG4gICAgICAgIHVsLmlkID0gJ2VkaXQtbGlzdCc7XHJcbiAgICAgICAgbGlUeXBlLmlkID0gJ2VkaXQtdHlwZSc7IFxyXG5cclxuICAgICAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCduYW1lJywgJ3R5cGUnKTtcclxuICAgICAgICBzZWxlY3QuaWQgPSdzZWxlY3QtdHlwZSc7XHJcbiAgICAgICAgc2VsZWN0LnBsYWNlaG9sZGVyID0gJ0VsZW1lbnQgSFRNTCc7XHJcblxyXG4gICAgICAgIHRoaXMubmF2LmFwcGVuZENoaWxkKHVsKTtcclxuICAgICAgICB1bC5hcHBlbmRDaGlsZChsaVR5cGUpO1xyXG4gICAgICAgIGxpVHlwZS5hcHBlbmRDaGlsZChzZWxlY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXBwbHkgc3RydWN0XHJcbiAgICAgKi9cclxuICAgIGFwcGx5KClcclxuICAgIHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHRoaXMubGlzdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuaW5zZXJ0KG9wdGlvbnMudGl0bGVzLCAnVGl0cmUnKTtcclxuICAgICAgICB0aGlzLmluc2VydChvcHRpb25zLmJsb2NrcywgJ0Jsb2NrJyk7XHJcbiAgICAgICAgdGhpcy5pbnNlcnQob3B0aW9ucy5vdGhlcnMsICdJbmxpbmUnKTtcclxuICAgICAgICB0aGlzLmluc2VydChvcHRpb25zLmNvbnRhaW5lcnMsICdCb3gnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhbiBvcHRpb24gZWxlbWVudCB3aXRoIGVtcHR5IHZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBvcHRpb25zIGFuIGFycmF5IGNvbnRhaW5zIGh0bWwgZWxlbWVudFxyXG4gICAgICovXHJcbiAgICBpbnNlcnQob3B0aW9ucywgaGVhZFRyYW5zbGF0ZSlcclxuICAgIHsgICBcclxuICAgICAgICBvcHRpb25zLmZvckVhY2goIG9wdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU9wdGlvbihvcHRpb24sIGhlYWRUcmFuc2xhdGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIEhUTUwgb3B0aW9uIGVsZW1lbnQuIGlmIGFuIGluZGV4IGVxdWFsICdlbXB0eSBzdHJpbmcnIHNvIGFkZCAnLmhlYWQnIGNsYXNzXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSB0eXBlIG5hbWVcclxuICAgICAqL1xyXG4gICAgY3JlYXRlT3B0aW9uKG5hbWUsIGhlYWRUcmFuc2xhdGUpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3QtdHlwZScpLmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gbmFtZTtcclxuXHJcbiAgICAgICAgaWYobmFtZSA9PT0gJycpXHJcbiAgICAgICAgeyAgIFxyXG4gICAgICAgICAgICBvcHRpb24uY2xhc3NMaXN0LmFkZCgnaGVhZCcpO1xyXG4gICAgICAgICAgICBvcHRpb24uaWQgPSBoZWFkVHJhbnNsYXRlO1xyXG4gICAgICAgICAgICBvcHRpb24uaW5uZXJIVE1MID0gaGVhZFRyYW5zbGF0ZTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBvcHRpb24uaWQgPSBvcHRpb24udmFsdWU7XHJcbiAgICAgICAgICAgIG9wdGlvbi5pbm5lckhUTUwgPSBuYW1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlcG9ydCBhbGwgZWxlbWVudHMgdHlwZSBhdmFpbGFibGUuIFRoZSBmaXJzdCBpbmRleCBvZiBhbGwgZWFjaCBhcnJheVxyXG4gICAgICogYXJlIGhlYWRlci1saXN0IHBsYWNlLiBpZiBhIGtleSB3YXMgYWRkZWQgLCBhZGQgYW4gdGhpcy5pbnNlcnQoKSBpbiB0aGlzLmxvb3AoKVxyXG4gICAgICovXHJcbiAgICBsaXN0KClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0aXRsZXMgOiBbJycsJ2gxJywnaDInLCdoMycsJ2g0JywnaDUnLCdoNiddLFxyXG4gICAgICAgICAgICBibG9ja3MgOiBbJycsJ2Zvb3RlcicsJ2hlYWRlcicsJ25hdicsJ2ltZycsJ2FkZHJlc3MnLCdhcnRpY2xlJywnYmxvY2txdW90ZScsJ2RldGFpbHMnLCdkaWFsb2cnLCdkZCcsJ2RpdicsJ2ZpZWxkc2V0JywnZHQnLCd1bCcsJ29sJywnbGknLCdtYWluJywncCcsJ3ByZScsJ3NlY3Rpb24nLCd0YWJsZSddLFxyXG4gICAgICAgICAgICBvdGhlcnMgOiBbJycsJ3NwYW4nLCdlbScsJ3N0cm9uZycsJ2EnLCdxJywnc21hbGwnLCd0ZXh0YXJlYScsJ2xhYmVsJywnaW5wdXQnLCdzZWxlY3QnXSxcclxuICAgICAgICAgICAgY29udGFpbmVycyA6IFsnJywgJ2JveC0xMDAnLCAnYm94LTc1JywgJ2JveC01MCcgXVxyXG4gICAgICAgICAgICAvKiBBZGQga2V5ICovXHJcbiAgICAgICAgfSBcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBOYXZcclxue1xyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlKClcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgICAgIGxldCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xyXG5cclxuICAgICAgICBtZW51LmlubmVySFRNTCA9ICdNZW51JztcclxuICAgICAgICBuYXYuaWQgPSAnbmF2LXNpZGViYXInO1xyXG4gICAgICAgIG5hdi5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XHJcbiAgICAgICAgbmF2LmFwcGVuZENoaWxkKG1lbnUpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXYpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgTWVudSB9IGZyb20gXCIuL01lbnVcIjtcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgY29udGFpbnMgYWxsIGVsZW1lbnQgZXZlbnQgd2hlbiByaWdodCBjbGljayBcclxuICovXHJcbmV4cG9ydCBjbGFzcyBBY3Rpb24gZXh0ZW5kcyBNZW51XHJcbntcclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHsgICBcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMub3B0aW9uTGlzdCgpLmNsYXNzTmFtZTtcclxuICAgICAgICB0aGlzLm1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3B0aW9uLW1lbnUnKTtcclxuICAgICAgICBsZXQgb3B0aW9uTGlzdE5hbWUgPSB0aGlzLm5hbWUoKTtcclxuICAgICAgICB0aGlzLnR5cGUob3B0aW9uTGlzdE5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lIGEgY2xhc3MgYWNjb3JkaW5nIHRvIHRoZSBjaG9zZW4gb3B0aW9uXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBvcHRpb25MaXN0TmFtZSBBbiBhcnJheSB3aXRoIG9wdGlvbiBtZW51IGxpc3RcclxuICAgICAqL1xyXG4gICAgdHlwZShvcHRpb25MaXN0TmFtZSlcclxuICAgIHsgICBcclxuICAgICAgICBsZXQgb3B0aW9uID0gb3B0aW9uTGlzdE5hbWU7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uTGlzdE5hbWUubGVuZ3RoIDsgaSsrKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLm1lbnUuY2hpbGRyZW4uZm9yRWFjaCggY2hpbGQgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGNoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSk9PntcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjbGFzc1RhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFyZ2V0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NzaWJsZSh0YXJnZXQsIGNsYXNzVGFyZ2V0RWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQb3NzaWJsZSBhY3Rpb24gbGlzdCBcclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldCBlLnRhcmdldFxyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY2xhc3NUYXJnZXRFbGVtZW50IFxyXG4gICAgICovXHJcbiAgICBwb3NzaWJsZSh0YXJnZXQsIGNsYXNzVGFyZ2V0RWxlbWVudClcclxuICAgIHsgICBcclxuICAgICAgICAvLyBNT1ZFIGNsYXNzTmFtZVxyXG4gICAgICAgIGlmKHRhcmdldC5pbm5lckhUTUwgPT09ICdkZXBsYWNlcicgKVxyXG4gICAgICAgIHsgICBcclxuICAgICAgICAgICAgaWYoY2xhc3NUYXJnZXRFbGVtZW50KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BFdmVudChjbGFzc1RhcmdldEVsZW1lbnQsIHRoaXMub3B0aW9ucy5kcmFnKTtcclxuICAgICAgICAgICAgICAgIGNsYXNzVGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMub3B0aW9ucy5kcmFnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBSRU1PVkUgY2xhc3NOYW1lICAgICAgICAgIFxyXG4gICAgICAgIGlmKHRhcmdldC5pbm5lckhUTUwgPT09ICdzdXBwcmltZXInKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoY2xhc3NUYXJnZXRFbGVtZW50KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjbGFzc1RhcmdldEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vUkVTSVpFIGNsYXNzTmFtZVxyXG4gICAgICAgIGlmKHRhcmdldC5pbm5lckhUTUwgPT09ICdtb2RpZmllciBsYSB0YWlsbGUnKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoY2xhc3NUYXJnZXRFbGVtZW50KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BFdmVudChjbGFzc1RhcmdldEVsZW1lbnQsIHRoaXMub3B0aW9ucy5yZXNpemUpO1xyXG4gICAgICAgICAgICAgICAgY2xhc3NUYXJnZXRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5vcHRpb25zLnJlc2l6ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEVESVQgY2xhc3NOYW1lXHJcbiAgICAgICAgaWYodGFyZ2V0LmlubmVySFRNTCA9PT0gJ2VkaXRlcicgKVxyXG4gICAgICAgIHsgICBcclxuICAgICAgICAgICAgaWYoY2xhc3NUYXJnZXRFbGVtZW50KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BFdmVudChjbGFzc1RhcmdldEVsZW1lbnQsIHRoaXMub3B0aW9ucy5lZGl0KTtcclxuICAgICAgICAgICAgICAgIGNsYXNzVGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMub3B0aW9ucy5lZGl0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9wIGN1cnJlbnQgYWN0aW9uXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjbGFzc1RhcmdldEVsZW1lbnRcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWVcclxuICAgICAqL1xyXG4gICAgc3RvcEV2ZW50KGNsYXNzVGFyZ2V0RWxlbWVudCwgY2xhc3NOYW1lKVxyXG4gICAgeyAgIFxyXG4gICAgICAgIGNsYXNzVGFyZ2V0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywoZSk9PntcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUFsbChlLnRhcmdldCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBhbiBhcnJheSBsaXN0IG9mIG1lbnUgb3B0aW9uIGl0ZW1cclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG9wdGlvbkxpc3ROYW1lIEFuIGFycmF5IHdpdGggb3B0aW9uIG1lbnUgbGlzdFxyXG4gICAgICogQHJldHVybnMge0FycmF5fVxyXG4gICAgICovXHJcbiAgICBuYW1lKClcclxuICAgIHtcclxuICAgICAgICBsZXQgaWRzID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tZW51LmNoaWxkRWxlbWVudENvdW50IDsgaSsrKSBcclxuICAgICAgICB7ICAgXHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMubWVudS5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgbGV0IHdvcmQgPSBjaGlsZC5pZC5yZXBsYWNlKCdvcHRpb24tbWVudS0nLCcnKTtcclxuICAgICAgICAgICAgaWRzLnB1c2god29yZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpZHNcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZSBhbGwgSFRNTCBjbGFzcyBpbiBvbiB0YXJnZXRcclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldFxyXG4gICAgICovXHJcbiAgICByZW1vdmVBbGwodGFyZ2V0KVxyXG4gICAge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMub3B0aW9ucyApIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSB0aGlzLm9wdGlvbnNba2V5XTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZih0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKG9wdGlvbikpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUob3B0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiBAY2xhc3MgTWVudSBpcyBvcHRpb25zIGFjdGlvbiAsIHBvc2l0aW9uIGFuZCBldmVudCBcclxuICovXHJcbmV4cG9ydCBjbGFzcyBNZW51IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7ICAgXHJcbiAgICAgICAgdGhpcy5tYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGFpbmVyJyk7XHJcbiAgICAgICAgdGhpcy5uYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYnKVxyXG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbWFpbiBjb250YWluZXIgLmVsZW1lbnQnKVxyXG4gICAgICAgIHRoaXMudW5hdXRob3JpemVSaWdodENsaWNrKCk7XHJcbiAgICAgICAgdGhpcy5tZW51ID0gdGhpcy5jcmVhdGUoKTtcclxuICAgICAgICB0aGlzLm1vdXNlUG9zaXRpb24oKTtcclxuICAgICAgICB0aGlzLm9wdGlvbk9uRWxlbWVudCgpO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlRWxlbWVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdW5oYXV0aG9yaXplIGJhc2ljIGJlaGF2aW9yIHJpZ2h0IGNsaWNrIFxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIHVuYXV0aG9yaXplUmlnaHRDbGljaygpXHJcbiAgICB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNyZWF0ZSBvcHRpb24gbWVudVxyXG4gICAgICogQHJldHVybnMge0hUTUxFbGVtZW50fSB1bFxyXG4gICAgICovXHJcbiAgICBjcmVhdGUoKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBsaUZyID0gdGhpcy5vcHRpb25MaXN0KCkuZnI7XHJcbiAgICAgICAgbGV0IGxpRW4gPSB0aGlzLm9wdGlvbkxpc3QoKS5lbjtcclxuICAgICAgICBsZXQgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIGxldCBpID0gMDtcclxuXHJcbiAgICAgICAgdWwuaWQgPSAnb3B0aW9uLW1lbnUnO1xyXG4gICAgICAgIHVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgIHRoaXMubWFpbi5hcHBlbmRDaGlsZCh1bCk7XHJcblxyXG4gICAgICAgIGxpRnIuZm9yRWFjaCggbGkgPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG5cclxuICAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gbGlGcltpXTtcclxuICAgICAgICAgICAgaXRlbS5pZCA9ICdvcHRpb24tbWVudS0nICsgbGlFbltpXTtcclxuICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdWw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIdG1sIGVsZW1lbnQgdG8gb3BlblxyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbWVudSBcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBvcGVuT3JDbG9zZShtZW51KVxyXG4gICAgeyAgIFxyXG4gICAgICAgIGlmKG1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSlcclxuICAgICAgICB7ICAgXHJcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogb3B0aW9uIGxpc3Qgb2YgZWxlbWVudCBvcHRpb25cclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBvcHRpb25MaXN0ICgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZnIgOiBbJ2RlcGxhY2VyJywgJ3N1cHByaW1lcicsICdtb2RpZmllciBsYSB0YWlsbGUnLCdlZGl0ZXInXSwgXHJcbiAgICAgICAgICAgIGVuICA6IFsnbW92ZScsJ3JlbW92ZScsJ3Jlc2l6ZScsJ2VkaXRpb24nXSxcclxuICAgICAgICAgICAgY2xhc3NOYW1lIDoge1xyXG4gICAgICAgICAgICAgICAgZHJhZyA6ICdkcmFnZ2FibGUnLFxyXG4gICAgICAgICAgICAgICAgcmVzaXplIDogJ3Jlc2l6ZScsXHJcbiAgICAgICAgICAgICAgICBlZGl0IDogJ2VkaXQnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBvcGVuIG9yIGNsb3NlIG9wdGlvbiBlbGVtZW50IGxpc3Qgd2hlbiB1c2VyIGNsaWNrIG9uIFxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIG9wdGlvbk9uRWxlbWVudCgpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG9wdGlvbkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc2VsZWN0LXR5cGUgb3B0aW9uJyk7XHJcblxyXG4gICAgICAgIG9wdGlvbkxpc3QuZm9yRWFjaCggb3B0aW9uID0+IHtcclxuXHJcbiAgICAgICAgICAgIG9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNtYWluLWNvbnRhaW5lciAuZWxlbWVudCcpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsaXN0LmZvckVhY2goIGVsdCA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVsdC5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsKGUpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlbGVtZW50JykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZUFsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuT3JDbG9zZSh0aGlzLm1lbnUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xvc2UgbWVudSBcclxuICAgICAqL1xyXG4gICAgY2xvc2UoKVxyXG4gICAgeyAgIFxyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCAoZSk9PntcclxuXHJcbiAgICAgICAgICAgIGlmKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2VsZW1lbnQnKSAmJiAhdGhpcy5tZW51LmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZUFsbCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZW51LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2VsZW1lbnQnKSAmJiAhdGhpcy5tZW51LmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZUFsbCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZW51LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xyXG5cclxuICAgICAgICAgICAgaWYoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZWxlbWVudCcpIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlQWxsKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc2FibGUgYWxsIGVsZW1lbnRzIHdoaWNoIGNvbnRhaW5zICcudGFyZ2V0JyBmb3IgdG8ga2VlcCBvbmNlIFxyXG4gICAgICogJy50YXJnZXQnIGF0IHRpbWVcclxuICAgICAqL1xyXG4gICAgZGlzYWJsZUFsbCgpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHRhcmdldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFyZ2V0Jyk7XHJcblxyXG4gICAgICAgIGlmKHRhcmdldHMubGVuZ3RoID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRhcmdldHMuZm9yRWFjaCggdCA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgdC5jbGFzc0xpc3QucmVtb3ZlKCd0YXJnZXQnKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMaXN0ZW4gY3VycmVudCBtb3VzZSBwb3NpdGlvbiByZXR1cm4gdGhlbSBcclxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IG51bWJlciBwb3NpdGlvblxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIG1vdXNlUG9zaXRpb24oKVxyXG4gICAgeyAgIFxyXG4gICAgICAgIGxldCBwb3MgPSB0aGlzLmdldFBvc2l0aW9uKHRoaXMubWVudSk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIChlKT0+e1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHggID0gZS5jbGllbnRYIC0gdGhpcy5uYXYuY2xpZW50V2lkdGggO1xyXG4gICAgICAgICAgICBsZXQgeSAgPSBlLmNsaWVudFkgLSB0aGlzLm5hdi5jbGllbnRUb3A7XHJcbiAgICAgICAgICAgIGxldCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wdGlvbi1tZW51Jyk7IFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbWVudS5zdHlsZS50b3AgPSAoeSAtIDEwKSArICAncHgnO1xyXG4gICAgICAgICAgICBtZW51LnN0eWxlLmxlZnQgPSAoeCAtIDIxKSArICAncHgnO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYW4gaHRtbCBlbGVtZW50IGFuZCByZXR1cnMgaGlzIGxvY2F0aW9uXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFxyXG4gICAgICogQHJldHVybnMge0RPTVJlY3R9IGdldGNsaWVudFJlY3RzWzBdXHJcbiAgICAgKi9cclxuICAgIGdldFBvc2l0aW9uKGVsZW1lbnQpXHJcbiAgICB7ICAgXHJcbiAgICAgICAgcmV0dXJuIChlbGVtZW50LmdldENsaWVudFJlY3RzKClbMF0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAnLnRhcmdldCcgZWxlbWVudCBhY3RpdmUgb3Igbm90IHdoZW4gcmlnaHQgY2xpY2tcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBhY3RpdmVFbGVtZW50KClcclxuICAgIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCAoZSk9PntcclxuXHJcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgbGV0IHRhcmdldENsYXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhcmdldCcpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoIHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2VsZW1lbnQnKSAmJiAhdGhpcy5tZW51LmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykgKVxyXG4gICAgICAgICAgICB7ICAgXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgndGFyZ2V0Jyk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoICF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlbGVtZW50JykgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZih0YXJnZXRDbGFzcylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRDbGFzcy5jbGFzc0xpc3QucmVtb3ZlKCd0YXJnZXQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3RhcmdldCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xyXG5cclxuICAgICAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0Q2xhc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFyZ2V0Jyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiggdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZWxlbWVudCcpIClcclxuICAgICAgICAgICAgeyAgIFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3RhcmdldCcpO1xyXG5cclxuICAgICAgICAgICAgfWVsc2UgaWYoICF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlbGVtZW50JykgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZih0YXJnZXRDbGFzcylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRDbGFzcy5jbGFzc0xpc3QucmVtb3ZlKCd0YXJnZXQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3RhcmdldCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9