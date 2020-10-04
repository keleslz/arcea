(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~app"],{

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/a-possible-prototype.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/internals/advance-string-index.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/advance-string-index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-uses-to-length.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-uses-to-length.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/correct-is-regexp-logic.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-is-regexp-logic.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (e) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (f) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "./node_modules/core-js/internals/create-iterator-constructor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype;
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-well-known-symbol.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/define-well-known-symbol.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ "./node_modules/core-js/internals/well-known-symbol-wrapped.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "./node_modules/core-js/internals/engine-user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/core-js/internals/engine-v8-version.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(/*! ../modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var slice = [].slice;
var factories = {};

var construct = function (C, argsLength, args) {
  if (!(argsLength in factories)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.github.io/ecma262/#sec-function.prototype.bind
module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = slice.call(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = partArgs.concat(slice.call(arguments));
    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
  };
  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
  return boundFunction;
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/is-regexp.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-regexp.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/not-a-regexp.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/not-a-regexp.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/number-parse-float.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/number-parse-float.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var $parseFloat = global.parseFloat;
var FORCED = 1 / $parseFloat(whitespaces + '-0') !== -Infinity;

// `parseFloat` method
// https://tc39.github.io/ecma262/#sec-parsefloat-string
module.exports = FORCED ? function parseFloat(string) {
  var trimmedString = trim(String(string));
  var result = $parseFloat(trimmedString);
  return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names-external.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names-external.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var nativeGetOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "./node_modules/core-js/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "./node_modules/core-js/internals/object-to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/object-to-string.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = global;


/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec-abstract.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var regexpExec = __webpack_require__(/*! ./regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__(/*! ./regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");
var stickyHelpers = __webpack_require__(/*! ./regexp-sticky-helpers */ "./node_modules/core-js/internals/regexp-sticky-helpers.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-flags.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-sticky-helpers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-sticky-helpers.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(/*! ./fails */ "./node_modules/core-js/internals/fails.js");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/internals/string-multibyte.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/string-multibyte.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-string-tag-support.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol-wrapped.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol-wrapped.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.for-each.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.includes.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.includes.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $includes = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").includes;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: !USES_TO_LENGTH }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.splice.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.splice.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
var USES_TO_LENGTH = arrayMethodUsesToLength('splice', { ACCESSORS: true, 0: 0, 1: 2 });

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.date.to-string.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.date.to-string.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var nativeDateToString = DatePrototype[TO_STRING];
var getTime = DatePrototype.getTime;

// `Date.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-date.prototype.tostring
if (new Date(NaN) + '' != INVALID_DATE) {
  redefine(DatePrototype, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? nativeDateToString.call(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.create.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.create.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  create: create
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var objectDefinePropertyModile = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperty: objectDefinePropertyModile.f
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.get-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.get-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var nativeGetPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(it) {
    return nativeGetPrototypeOf(toObject(it));
  }
});



/***/ }),

/***/ "./node_modules/core-js/modules/es.object.set-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.set-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
$({ target: 'Object', stat: true }, {
  setPrototypeOf: setPrototypeOf
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var toString = __webpack_require__(/*! ../internals/object-to-string */ "./node_modules/core-js/internals/object-to-string.js");

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-float.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-float.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var parseFloatImplementation = __webpack_require__(/*! ../internals/number-parse-float */ "./node_modules/core-js/internals/number-parse-float.js");

// `parseFloat` method
// https://tc39.github.io/ecma262/#sec-parsefloat-string
$({ global: true, forced: parseFloat != parseFloatImplementation }, {
  parseFloat: parseFloatImplementation
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.construct.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.construct.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var bind = __webpack_require__(/*! ../internals/function-bind */ "./node_modules/core-js/internals/function-bind.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var nativeConstruct = getBuiltIn('Reflect', 'construct');

// `Reflect.construct` method
// https://tc39.github.io/ecma262/#sec-reflect.construct
// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  nativeConstruct(function () { /* empty */ });
});
var FORCED = NEW_TARGET_BUG || ARGS_BUG;

$({ target: 'Reflect', stat: true, forced: FORCED, sham: FORCED }, {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.exec.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.exec.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var exec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var flags = __webpack_require__(/*! ../internals/regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.includes.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "./node_modules/core-js/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "./node_modules/core-js/internals/correct-is-regexp-logic.js");

// `String.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").charAt;
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.replace.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.replace.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.description.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.description.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js");

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var nativeObjectCreate = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertyNamesExternal = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ "./node_modules/core-js/internals/object-get-own-property-names-external.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ "./node_modules/core-js/internals/well-known-symbol-wrapped.js");
var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ }),

/***/ "./node_modules/interactjs/dist/interact.min.js":
/*!******************************************************!*\
  !*** ./node_modules/interactjs/dist/interact.min.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* interact.js 1.9.22 | https://raw.github.com/taye/interact.js/master/LICENSE */
!function(t){if(true)module.exports=t();else {}}((function(){var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(t){return!(!t||!t.Window)&&t instanceof t.Window};var e={};Object.defineProperty(e,"__esModule",{value:!0}),e.init=o,e.getWindow=function(e){if((0,t.default)(e))return e;return(e.ownerDocument||e).defaultView||r.window},e.window=e.realWindow=void 0;var n=void 0;e.realWindow=n;var r=void 0;function o(t){e.realWindow=n=t;var o=t.document.createTextNode("");o.ownerDocument!==t.document&&"function"==typeof t.wrap&&t.wrap(o)===o&&(t=t.wrap(t)),e.window=r=t}e.window=r,"undefined"!=typeof window&&window&&o(window);var i={};function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=function(t){return!!t&&"object"===a(t)},l=function(t){return"function"==typeof t},u={window:function(n){return n===e.window||(0,t.default)(n)},docFrag:function(t){return s(t)&&11===t.nodeType},object:s,func:l,number:function(t){return"number"==typeof t},bool:function(t){return"boolean"==typeof t},string:function(t){return"string"==typeof t},element:function(t){if(!t||"object"!==a(t))return!1;var n=e.getWindow(t)||e.window;return/object|function/.test(a(n.Element))?t instanceof n.Element:1===t.nodeType&&"string"==typeof t.nodeName},plainObject:function(t){return s(t)&&!!t.constructor&&/function Object\b/.test(t.constructor.toString())},array:function(t){return s(t)&&void 0!==t.length&&l(t.splice)}};i.default=u;var c={};function f(t){var e=t.interaction;if("drag"===e.prepared.name){var n=e.prepared.axis;"x"===n?(e.coords.cur.page.y=e.coords.start.page.y,e.coords.cur.client.y=e.coords.start.client.y,e.coords.velocity.client.y=0,e.coords.velocity.page.y=0):"y"===n&&(e.coords.cur.page.x=e.coords.start.page.x,e.coords.cur.client.x=e.coords.start.client.x,e.coords.velocity.client.x=0,e.coords.velocity.page.x=0)}}function d(t){var e=t.iEvent,n=t.interaction;if("drag"===n.prepared.name){var r=n.prepared.axis;if("x"===r||"y"===r){var o="x"===r?"y":"x";e.page[o]=n.coords.start.page[o],e.client[o]=n.coords.start.client[o],e.delta[o]=0}}}Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var p={id:"actions/drag",install:function(t){var e=t.actions,n=t.Interactable,r=t.defaults;n.prototype.draggable=p.draggable,e.map.drag=p,e.methodDict.drag="draggable",r.actions.drag=p.defaults},listeners:{"interactions:before-action-move":f,"interactions:action-resume":f,"interactions:action-move":d,"auto-start:check":function(t){var e=t.interaction,n=t.interactable,r=t.buttons,o=n.options.drag;if(o&&o.enabled&&(!e.pointerIsDown||!/mouse|pointer/.test(e.pointerType)||0!=(r&n.options.drag.mouseButtons)))return t.action={name:"drag",axis:"start"===o.lockAxis?o.startAxis:o.lockAxis},!1}},draggable:function(t){return i.default.object(t)?(this.options.drag.enabled=!1!==t.enabled,this.setPerAction("drag",t),this.setOnEvents("drag",t),/^(xy|x|y|start)$/.test(t.lockAxis)&&(this.options.drag.lockAxis=t.lockAxis),/^(xy|x|y)$/.test(t.startAxis)&&(this.options.drag.startAxis=t.startAxis),this):i.default.bool(t)?(this.options.drag.enabled=t,this):this.options.drag},beforeMove:f,move:d,defaults:{startAxis:"xy",lockAxis:"xy"},getCursor:function(){return"move"}},v=p;c.default=v;var h={};Object.defineProperty(h,"__esModule",{value:!0}),h.default=void 0;var g={init:function(t){var e=t;g.document=e.document,g.DocumentFragment=e.DocumentFragment||y,g.SVGElement=e.SVGElement||y,g.SVGSVGElement=e.SVGSVGElement||y,g.SVGElementInstance=e.SVGElementInstance||y,g.Element=e.Element||y,g.HTMLElement=e.HTMLElement||g.Element,g.Event=e.Event,g.Touch=e.Touch||y,g.PointerEvent=e.PointerEvent||e.MSPointerEvent},document:null,DocumentFragment:null,SVGElement:null,SVGSVGElement:null,SVGElementInstance:null,Element:null,HTMLElement:null,Event:null,Touch:null,PointerEvent:null};function y(){}var m=g;h.default=m;var b={};Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var x={init:function(t){var n=h.default.Element,r=e.window.navigator;x.supportsTouch="ontouchstart"in t||i.default.func(t.DocumentTouch)&&h.default.document instanceof t.DocumentTouch,x.supportsPointerEvent=!1!==r.pointerEnabled&&!!h.default.PointerEvent,x.isIOS=/iP(hone|od|ad)/.test(r.platform),x.isIOS7=/iP(hone|od|ad)/.test(r.platform)&&/OS 7[^\d]/.test(r.appVersion),x.isIe9=/MSIE 9/.test(r.userAgent),x.isOperaMobile="Opera"===r.appName&&x.supportsTouch&&/Presto/.test(r.userAgent),x.prefixedMatchesSelector="matches"in n.prototype?"matches":"webkitMatchesSelector"in n.prototype?"webkitMatchesSelector":"mozMatchesSelector"in n.prototype?"mozMatchesSelector":"oMatchesSelector"in n.prototype?"oMatchesSelector":"msMatchesSelector",x.pEventTypes=x.supportsPointerEvent?h.default.PointerEvent===t.MSPointerEvent?{up:"MSPointerUp",down:"MSPointerDown",over:"mouseover",out:"mouseout",move:"MSPointerMove",cancel:"MSPointerCancel"}:{up:"pointerup",down:"pointerdown",over:"pointerover",out:"pointerout",move:"pointermove",cancel:"pointercancel"}:null,x.wheelEvent="onmousewheel"in h.default.document?"mousewheel":"wheel"},supportsTouch:null,supportsPointerEvent:null,isIOS7:null,isIOS:null,isIe9:null,isOperaMobile:null,prefixedMatchesSelector:null,pEventTypes:null,wheelEvent:null};var w=x;b.default=w;var _={};function S(t){var e=t.parentNode;if(i.default.docFrag(e)){for(;(e=e.host)&&i.default.docFrag(e););return e}return e}function P(t,n){return e.window!==e.realWindow&&(n=n.replace(/\/deep\//g," ")),t[b.default.prefixedMatchesSelector](n)}Object.defineProperty(_,"__esModule",{value:!0}),_.nodeContains=function(t,e){if(t.contains)return t.contains(e);for(;e;){if(e===t)return!0;e=e.parentNode}return!1},_.closest=function(t,e){for(;i.default.element(t);){if(P(t,e))return t;t=S(t)}return null},_.parentNode=S,_.matchesSelector=P,_.indexOfDeepestElement=function(t){for(var n,r=[],o=0;o<t.length;o++){var i=t[o],a=t[n];if(i&&o!==n)if(a){var s=O(i),l=O(a);if(s!==i.ownerDocument)if(l!==i.ownerDocument)if(s!==l){r=r.length?r:E(a);var u=void 0;if(a instanceof h.default.HTMLElement&&i instanceof h.default.SVGElement&&!(i instanceof h.default.SVGSVGElement)){if(i===l)continue;u=i.ownerSVGElement}else u=i;for(var c=E(u,a.ownerDocument),f=0;c[f]&&c[f]===r[f];)f++;for(var d=[c[f-1],c[f],r[f]],p=d[0].lastChild;p;){if(p===d[1]){n=o,r=c;break}if(p===d[2])break;p=p.previousSibling}}else v=i,g=a,y=void 0,m=void 0,y=parseInt(e.getWindow(v).getComputedStyle(v).zIndex,10)||0,m=parseInt(e.getWindow(g).getComputedStyle(g).zIndex,10)||0,y>=m&&(n=o);else n=o}else n=o}var v,g,y,m;return n},_.matchesUpTo=function(t,e,n){for(;i.default.element(t);){if(P(t,e))return!0;if((t=S(t))===n)return P(t,e)}return!1},_.getActualElement=function(t){return t.correspondingUseElement||t},_.getScrollXY=T,_.getElementClientRect=M,_.getElementRect=function(t){var n=M(t);if(!b.default.isIOS7&&n){var r=T(e.getWindow(t));n.left+=r.x,n.right+=r.x,n.top+=r.y,n.bottom+=r.y}return n},_.getPath=function(t){var e=[];for(;t;)e.push(t),t=S(t);return e},_.trySelector=function(t){if(!i.default.string(t))return!1;return h.default.document.querySelector(t),!0};var O=function(t){return t.parentNode||t.host};function E(t,e){for(var n,r=[],o=t;(n=O(o))&&o!==e&&n!==o.ownerDocument;)r.unshift(o),o=n;return r}function T(t){return{x:(t=t||e.window).scrollX||t.document.documentElement.scrollLeft,y:t.scrollY||t.document.documentElement.scrollTop}}function M(t){var e=t instanceof h.default.SVGElement?t.getBoundingClientRect():t.getClientRects()[0];return e&&{left:e.left,right:e.right,top:e.top,bottom:e.bottom,width:e.width||e.right-e.left,height:e.height||e.bottom-e.top}}var j={};Object.defineProperty(j,"__esModule",{value:!0}),j.default=function(t,e){for(var n in e)t[n]=e[n];return t};var k={};function I(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function D(t,e,n){return"parent"===t?(0,_.parentNode)(n):"self"===t?e.getRect(n):(0,_.closest)(n,t)}Object.defineProperty(k,"__esModule",{value:!0}),k.getStringOptionResult=D,k.resolveRectLike=function(t,e,n,r){var o=t;i.default.string(o)?o=D(o,e,n):i.default.func(o)&&(o=o.apply(void 0,function(t){if(Array.isArray(t))return I(t)}(a=r)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(a)||function(t,e){if(t){if("string"==typeof t)return I(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(t,e):void 0}}(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()));var a;i.default.element(o)&&(o=(0,_.getElementRect)(o));return o},k.rectToXY=function(t){return t&&{x:"x"in t?t.x:t.left,y:"y"in t?t.y:t.top}},k.xywhToTlbr=function(t){!t||"left"in t&&"top"in t||((t=(0,j.default)({},t)).left=t.x||0,t.top=t.y||0,t.right=t.right||t.left+t.width,t.bottom=t.bottom||t.top+t.height);return t},k.tlbrToXywh=function(t){!t||"x"in t&&"y"in t||((t=(0,j.default)({},t)).x=t.left||0,t.y=t.top||0,t.width=t.width||(t.right||0)-t.x,t.height=t.height||(t.bottom||0)-t.y);return t},k.addEdges=function(t,e,n){t.left&&(e.left+=n.x);t.right&&(e.right+=n.x);t.top&&(e.top+=n.y);t.bottom&&(e.bottom+=n.y);e.width=e.right-e.left,e.height=e.bottom-e.top};var A={};Object.defineProperty(A,"__esModule",{value:!0}),A.default=function(t,e,n){var r=t.options[n],o=r&&r.origin||t.options.origin,i=(0,k.resolveRectLike)(o,t,e,[t&&e]);return(0,k.rectToXY)(i)||{x:0,y:0}};var z={};function C(t){return t.trim().split(/ +/)}Object.defineProperty(z,"__esModule",{value:!0}),z.default=function t(e,n,r){r=r||{},i.default.string(e)&&-1!==e.search(" ")&&(e=C(e));if(i.default.array(e))return e.reduce((function(e,o){return(0,j.default)(e,t(o,n,r))}),r);i.default.object(e)&&(n=e,e="");if(i.default.func(n))r[e]=r[e]||[],r[e].push(n);else if(i.default.array(n))for(var o=0;o<n.length;o++){var a;a=n[o],t(e,a,r)}else if(i.default.object(n))for(var s in n){var l=C(s).map((function(t){return"".concat(e).concat(t)}));t(l,n[s],r)}return r};var R={};Object.defineProperty(R,"__esModule",{value:!0}),R.default=void 0;R.default=function(t,e){return Math.sqrt(t*t+e*e)};var F={};function X(t,e){for(var n in e){var r=X.prefixedPropREs,o=!1;for(var i in r)if(0===n.indexOf(i)&&r[i].test(n)){o=!0;break}o||"function"==typeof e[n]||(t[n]=e[n])}return t}Object.defineProperty(F,"__esModule",{value:!0}),F.default=void 0,X.prefixedPropREs={webkit:/(Movement[XY]|Radius[XY]|RotationAngle|Force)$/,moz:/(Pressure)$/};var Y=X;F.default=Y;var W={};function L(t){return t instanceof h.default.Event||t instanceof h.default.Touch}function B(t,e,n){return t=t||"page",(n=n||{}).x=e[t+"X"],n.y=e[t+"Y"],n}function U(t,e){return e=e||{x:0,y:0},b.default.isOperaMobile&&L(t)?(B("screen",t,e),e.x+=window.scrollX,e.y+=window.scrollY):B("page",t,e),e}function N(t,e){return e=e||{},b.default.isOperaMobile&&L(t)?B("screen",t,e):B("client",t,e),e}function V(t){var e=[];return i.default.array(t)?(e[0]=t[0],e[1]=t[1]):"touchend"===t.type?1===t.touches.length?(e[0]=t.touches[0],e[1]=t.changedTouches[0]):0===t.touches.length&&(e[0]=t.changedTouches[0],e[1]=t.changedTouches[1]):(e[0]=t.touches[0],e[1]=t.touches[1]),e}function q(t){for(var e={pageX:0,pageY:0,clientX:0,clientY:0,screenX:0,screenY:0},n=0;n<t.length;n++){var r=t[n];for(var o in e)e[o]+=r[o]}for(var i in e)e[i]/=t.length;return e}Object.defineProperty(W,"__esModule",{value:!0}),W.copyCoords=function(t,e){t.page=t.page||{},t.page.x=e.page.x,t.page.y=e.page.y,t.client=t.client||{},t.client.x=e.client.x,t.client.y=e.client.y,t.timeStamp=e.timeStamp},W.setCoordDeltas=function(t,e,n){t.page.x=n.page.x-e.page.x,t.page.y=n.page.y-e.page.y,t.client.x=n.client.x-e.client.x,t.client.y=n.client.y-e.client.y,t.timeStamp=n.timeStamp-e.timeStamp},W.setCoordVelocity=function(t,e){var n=Math.max(e.timeStamp/1e3,.001);t.page.x=e.page.x/n,t.page.y=e.page.y/n,t.client.x=e.client.x/n,t.client.y=e.client.y/n,t.timeStamp=n},W.setZeroCoords=function(t){t.page.x=0,t.page.y=0,t.client.x=0,t.client.y=0},W.isNativePointer=L,W.getXY=B,W.getPageXY=U,W.getClientXY=N,W.getPointerId=function(t){return i.default.number(t.pointerId)?t.pointerId:t.identifier},W.setCoords=function(t,e,n){var r=e.length>1?q(e):e[0];U(r,t.page),N(r,t.client),t.timeStamp=n},W.getTouchPair=V,W.pointerAverage=q,W.touchBBox=function(t){if(!t.length)return null;var e=V(t),n=Math.min(e[0].pageX,e[1].pageX),r=Math.min(e[0].pageY,e[1].pageY),o=Math.max(e[0].pageX,e[1].pageX),i=Math.max(e[0].pageY,e[1].pageY);return{x:n,y:r,left:n,top:r,right:o,bottom:i,width:o-n,height:i-r}},W.touchDistance=function(t,e){var n=e+"X",r=e+"Y",o=V(t),i=o[0][n]-o[1][n],a=o[0][r]-o[1][r];return(0,R.default)(i,a)},W.touchAngle=function(t,e){var n=e+"X",r=e+"Y",o=V(t),i=o[1][n]-o[0][n],a=o[1][r]-o[0][r];return 180*Math.atan2(a,i)/Math.PI},W.getPointerType=function(t){return i.default.string(t.pointerType)?t.pointerType:i.default.number(t.pointerType)?[void 0,void 0,"touch","pen","mouse"][t.pointerType]:/touch/.test(t.type)||t instanceof h.default.Touch?"touch":"mouse"},W.getEventTargets=function(t){var e=i.default.func(t.composedPath)?t.composedPath():t.path;return[_.getActualElement(e?e[0]:t.target),_.getActualElement(t.currentTarget)]},W.newCoords=function(){return{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0}},W.coordsToEvent=function(t){return{coords:t,get page(){return this.coords.page},get client(){return this.coords.client},get timeStamp(){return this.coords.timeStamp},get pageX(){return this.coords.page.x},get pageY(){return this.coords.page.y},get clientX(){return this.coords.client.x},get clientY(){return this.coords.client.y},get pointerId(){return this.coords.pointerId},get target(){return this.coords.target},get type(){return this.coords.type},get pointerType(){return this.coords.pointerType},get buttons(){return this.coords.buttons},preventDefault:function(){}}},Object.defineProperty(W,"pointerExtend",{enumerable:!0,get:function(){return F.default}});var $={};function G(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty($,"__esModule",{value:!0}),$.BaseEvent=void 0;var H=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.type=void 0,this.target=void 0,this.currentTarget=void 0,this.interactable=void 0,this._interaction=void 0,this.timeStamp=void 0,this.immediatePropagationStopped=!1,this.propagationStopped=!1,this._interaction=e}var e,n,r;return e=t,(n=[{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}])&&G(e.prototype,n),r&&G(e,r),t}();$.BaseEvent=H,Object.defineProperty(H.prototype,"interaction",{get:function(){return this._interaction._proxy},set:function(){}});var K={};Object.defineProperty(K,"__esModule",{value:!0}),K.find=K.findIndex=K.from=K.merge=K.remove=K.contains=void 0;K.contains=function(t,e){return-1!==t.indexOf(e)};K.remove=function(t,e){return t.splice(t.indexOf(e),1)};var Z=function(t,e){for(var n=0;n<e.length;n++){var r=e[n];t.push(r)}return t};K.merge=Z;K.from=function(t){return Z([],t)};var J=function(t,e){for(var n=0;n<t.length;n++)if(e(t[n],n,t))return n;return-1};K.findIndex=J;K.find=function(t,e){return t[J(t,e)]};var Q={};function tt(t){return(tt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function et(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function nt(t,e){return(nt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function rt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=it(t);if(e){var o=it(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return ot(this,n)}}function ot(t,e){return!e||"object"!==tt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function it(t){return(it=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}Object.defineProperty(Q,"__esModule",{value:!0}),Q.DropEvent=void 0;var at=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&nt(t,e)}(i,t);var e,n,r,o=rt(i);function i(t,e,n){var r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(r=o.call(this,e._interaction)).target=void 0,r.dropzone=void 0,r.dragEvent=void 0,r.relatedTarget=void 0,r.draggable=void 0,r.timeStamp=void 0,r.propagationStopped=!1,r.immediatePropagationStopped=!1;var a="dragleave"===n?t.prev:t.cur,s=a.element,l=a.dropzone;return r.type=n,r.target=s,r.currentTarget=s,r.dropzone=l,r.dragEvent=e,r.relatedTarget=e.target,r.draggable=e.interactable,r.timeStamp=e.timeStamp,r}return e=i,(n=[{key:"reject",value:function(){var t=this,e=this._interaction.dropState;if("dropactivate"===this.type||this.dropzone&&e.cur.dropzone===this.dropzone&&e.cur.element===this.target)if(e.prev.dropzone=this.dropzone,e.prev.element=this.target,e.rejected=!0,e.events.enter=null,this.stopImmediatePropagation(),"dropactivate"===this.type){var n=e.activeDrops,r=K.findIndex(n,(function(e){var n=e.dropzone,r=e.element;return n===t.dropzone&&r===t.target}));e.activeDrops.splice(r,1);var o=new i(e,this.dragEvent,"dropdeactivate");o.dropzone=this.dropzone,o.target=this.target,this.dropzone.fire(o)}else this.dropzone.fire(new i(e,this.dragEvent,"dragleave"))}},{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}])&&et(e.prototype,n),r&&et(e,r),i}($.BaseEvent);Q.DropEvent=at;var st={};function lt(t,e){for(var n=0;n<t.slice().length;n++){var r=t.slice()[n],o=r.dropzone,i=r.element;e.dropzone=o,e.target=i,o.fire(e),e.propagationStopped=e.immediatePropagationStopped=!1}}function ut(t,e){for(var n=function(t,e){for(var n=t.interactables,r=[],o=0;o<n.list.length;o++){var a=n.list[o];if(a.options.drop.enabled){var s=a.options.drop.accept;if(!(i.default.element(s)&&s!==e||i.default.string(s)&&!_.matchesSelector(e,s)||i.default.func(s)&&!s({dropzone:a,draggableElement:e})))for(var l=i.default.string(a.target)?a._context.querySelectorAll(a.target):i.default.array(a.target)?a.target:[a.target],u=0;u<l.length;u++){var c=l[u];c!==e&&r.push({dropzone:a,element:c})}}}return r}(t,e),r=0;r<n.length;r++){var o=n[r];o.rect=o.dropzone.getRect(o.element)}return n}function ct(t,e,n){for(var r=t.dropState,o=t.interactable,i=t.element,a=[],s=0;s<r.activeDrops.length;s++){var l=r.activeDrops[s],u=l.dropzone,c=l.element,f=l.rect;a.push(u.dropCheck(e,n,o,i,c,f)?c:null)}var d=_.indexOfDeepestElement(a);return r.activeDrops[d]||null}function ft(t,e,n){var r=t.dropState,o={enter:null,leave:null,activate:null,deactivate:null,move:null,drop:null};return"dragstart"===n.type&&(o.activate=new Q.DropEvent(r,n,"dropactivate"),o.activate.target=null,o.activate.dropzone=null),"dragend"===n.type&&(o.deactivate=new Q.DropEvent(r,n,"dropdeactivate"),o.deactivate.target=null,o.deactivate.dropzone=null),r.rejected||(r.cur.element!==r.prev.element&&(r.prev.dropzone&&(o.leave=new Q.DropEvent(r,n,"dragleave"),n.dragLeave=o.leave.target=r.prev.element,n.prevDropzone=o.leave.dropzone=r.prev.dropzone),r.cur.dropzone&&(o.enter=new Q.DropEvent(r,n,"dragenter"),n.dragEnter=r.cur.element,n.dropzone=r.cur.dropzone)),"dragend"===n.type&&r.cur.dropzone&&(o.drop=new Q.DropEvent(r,n,"drop"),n.dropzone=r.cur.dropzone,n.relatedTarget=r.cur.element),"dragmove"===n.type&&r.cur.dropzone&&(o.move=new Q.DropEvent(r,n,"dropmove"),o.move.dragmove=n,n.dropzone=r.cur.dropzone)),o}function dt(t,e){var n=t.dropState,r=n.activeDrops,o=n.cur,i=n.prev;e.leave&&i.dropzone.fire(e.leave),e.enter&&o.dropzone.fire(e.enter),e.move&&o.dropzone.fire(e.move),e.drop&&o.dropzone.fire(e.drop),e.deactivate&&lt(r,e.deactivate),n.prev.dropzone=o.dropzone,n.prev.element=o.element}function pt(t,e){var n=t.interaction,r=t.iEvent,o=t.event;if("dragmove"===r.type||"dragend"===r.type){var i=n.dropState;e.dynamicDrop&&(i.activeDrops=ut(e,n.element));var a=r,s=ct(n,a,o);i.rejected=i.rejected&&!!s&&s.dropzone===i.cur.dropzone&&s.element===i.cur.element,i.cur.dropzone=s&&s.dropzone,i.cur.element=s&&s.element,i.events=ft(n,0,a)}}Object.defineProperty(st,"__esModule",{value:!0}),st.default=void 0;var vt={id:"actions/drop",install:function(t){var e=t.actions,n=t.interactStatic,r=t.Interactable,o=t.defaults;t.usePlugin(c.default),r.prototype.dropzone=function(t){return function(t,e){if(i.default.object(e)){if(t.options.drop.enabled=!1!==e.enabled,e.listeners){var n=(0,z.default)(e.listeners),r=Object.keys(n).reduce((function(t,e){return t[/^(enter|leave)/.test(e)?"drag".concat(e):/^(activate|deactivate|move)/.test(e)?"drop".concat(e):e]=n[e],t}),{});t.off(t.options.drop.listeners),t.on(r),t.options.drop.listeners=r}return i.default.func(e.ondrop)&&t.on("drop",e.ondrop),i.default.func(e.ondropactivate)&&t.on("dropactivate",e.ondropactivate),i.default.func(e.ondropdeactivate)&&t.on("dropdeactivate",e.ondropdeactivate),i.default.func(e.ondragenter)&&t.on("dragenter",e.ondragenter),i.default.func(e.ondragleave)&&t.on("dragleave",e.ondragleave),i.default.func(e.ondropmove)&&t.on("dropmove",e.ondropmove),/^(pointer|center)$/.test(e.overlap)?t.options.drop.overlap=e.overlap:i.default.number(e.overlap)&&(t.options.drop.overlap=Math.max(Math.min(1,e.overlap),0)),"accept"in e&&(t.options.drop.accept=e.accept),"checker"in e&&(t.options.drop.checker=e.checker),t}if(i.default.bool(e))return t.options.drop.enabled=e,t;return t.options.drop}(this,t)},r.prototype.dropCheck=function(t,e,n,r,o,a){return function(t,e,n,r,o,a,s){var l=!1;if(!(s=s||t.getRect(a)))return!!t.options.drop.checker&&t.options.drop.checker(e,n,l,t,a,r,o);var u=t.options.drop.overlap;if("pointer"===u){var c=(0,A.default)(r,o,"drag"),f=W.getPageXY(e);f.x+=c.x,f.y+=c.y;var d=f.x>s.left&&f.x<s.right,p=f.y>s.top&&f.y<s.bottom;l=d&&p}var v=r.getRect(o);if(v&&"center"===u){var h=v.left+v.width/2,g=v.top+v.height/2;l=h>=s.left&&h<=s.right&&g>=s.top&&g<=s.bottom}if(v&&i.default.number(u)){var y=Math.max(0,Math.min(s.right,v.right)-Math.max(s.left,v.left))*Math.max(0,Math.min(s.bottom,v.bottom)-Math.max(s.top,v.top))/(v.width*v.height);l=y>=u}t.options.drop.checker&&(l=t.options.drop.checker(e,n,l,t,a,r,o));return l}(this,t,e,n,r,o,a)},n.dynamicDrop=function(e){return i.default.bool(e)?(t.dynamicDrop=e,n):t.dynamicDrop},(0,j.default)(e.phaselessTypes,{dragenter:!0,dragleave:!0,dropactivate:!0,dropdeactivate:!0,dropmove:!0,drop:!0}),e.methodDict.drop="dropzone",t.dynamicDrop=!1,o.actions.drop=vt.defaults},listeners:{"interactions:before-action-start":function(t){var e=t.interaction;"drag"===e.prepared.name&&(e.dropState={cur:{dropzone:null,element:null},prev:{dropzone:null,element:null},rejected:null,events:null,activeDrops:[]})},"interactions:after-action-start":function(t,e){var n=t.interaction,r=(t.event,t.iEvent);if("drag"===n.prepared.name){var o=n.dropState;o.activeDrops=null,o.events=null,o.activeDrops=ut(e,n.element),o.events=ft(n,0,r),o.events.activate&&(lt(o.activeDrops,o.events.activate),e.fire("actions/drop:start",{interaction:n,dragEvent:r}))}},"interactions:action-move":pt,"interactions:after-action-move":function(t,e){var n=t.interaction,r=t.iEvent;"drag"===n.prepared.name&&(dt(n,n.dropState.events),e.fire("actions/drop:move",{interaction:n,dragEvent:r}),n.dropState.events={})},"interactions:action-end":function(t,e){if("drag"===t.interaction.prepared.name){var n=t.interaction,r=t.iEvent;pt(t,e),dt(n,n.dropState.events),e.fire("actions/drop:end",{interaction:n,dragEvent:r})}},"interactions:stop":function(t){var e=t.interaction;if("drag"===e.prepared.name){var n=e.dropState;n&&(n.activeDrops=null,n.events=null,n.cur.dropzone=null,n.cur.element=null,n.prev.dropzone=null,n.prev.element=null,n.rejected=!1)}}},getActiveDrops:ut,getDrop:ct,getDropEvents:ft,fireDropEvents:dt,defaults:{enabled:!1,accept:null,overlap:"pointer"}},ht=vt;st.default=ht;var gt={};function yt(t){var e=t.interaction,n=t.iEvent,r=t.phase;if("gesture"===e.prepared.name){var o=e.pointers.map((function(t){return t.pointer})),a="start"===r,s="end"===r,l=e.interactable.options.deltaSource;if(n.touches=[o[0],o[1]],a)n.distance=W.touchDistance(o,l),n.box=W.touchBBox(o),n.scale=1,n.ds=0,n.angle=W.touchAngle(o,l),n.da=0,e.gesture.startDistance=n.distance,e.gesture.startAngle=n.angle;else if(s){var u=e.prevEvent;n.distance=u.distance,n.box=u.box,n.scale=u.scale,n.ds=0,n.angle=u.angle,n.da=0}else n.distance=W.touchDistance(o,l),n.box=W.touchBBox(o),n.scale=n.distance/e.gesture.startDistance,n.angle=W.touchAngle(o,l),n.ds=n.scale-e.gesture.scale,n.da=n.angle-e.gesture.angle;e.gesture.distance=n.distance,e.gesture.angle=n.angle,i.default.number(n.scale)&&n.scale!==1/0&&!isNaN(n.scale)&&(e.gesture.scale=n.scale)}}Object.defineProperty(gt,"__esModule",{value:!0}),gt.default=void 0;var mt={id:"actions/gesture",before:["actions/drag","actions/resize"],install:function(t){var e=t.actions,n=t.Interactable,r=t.defaults;n.prototype.gesturable=function(t){return i.default.object(t)?(this.options.gesture.enabled=!1!==t.enabled,this.setPerAction("gesture",t),this.setOnEvents("gesture",t),this):i.default.bool(t)?(this.options.gesture.enabled=t,this):this.options.gesture},e.map.gesture=mt,e.methodDict.gesture="gesturable",r.actions.gesture=mt.defaults},listeners:{"interactions:action-start":yt,"interactions:action-move":yt,"interactions:action-end":yt,"interactions:new":function(t){t.interaction.gesture={angle:0,distance:0,scale:1,startAngle:0,startDistance:0}},"auto-start:check":function(t){if(!(t.interaction.pointers.length<2)){var e=t.interactable.options.gesture;if(e&&e.enabled)return t.action={name:"gesture"},!1}}},defaults:{},getCursor:function(){return""}},bt=mt;gt.default=bt;var xt={};function wt(t,e,n,r,o,a,s){if(!e)return!1;if(!0===e){var l=i.default.number(a.width)?a.width:a.right-a.left,u=i.default.number(a.height)?a.height:a.bottom-a.top;if(s=Math.min(s,Math.abs(("left"===t||"right"===t?l:u)/2)),l<0&&("left"===t?t="right":"right"===t&&(t="left")),u<0&&("top"===t?t="bottom":"bottom"===t&&(t="top")),"left"===t)return n.x<(l>=0?a.left:a.right)+s;if("top"===t)return n.y<(u>=0?a.top:a.bottom)+s;if("right"===t)return n.x>(l>=0?a.right:a.left)-s;if("bottom"===t)return n.y>(u>=0?a.bottom:a.top)-s}return!!i.default.element(r)&&(i.default.element(e)?e===r:_.matchesUpTo(r,e,o))}function _t(t){var e=t.iEvent,n=t.interaction;if("resize"===n.prepared.name&&n.resizeAxes){var r=e;n.interactable.options.resize.square?("y"===n.resizeAxes?r.delta.x=r.delta.y:r.delta.y=r.delta.x,r.axes="xy"):(r.axes=n.resizeAxes,"x"===n.resizeAxes?r.delta.y=0:"y"===n.resizeAxes&&(r.delta.x=0))}}Object.defineProperty(xt,"__esModule",{value:!0}),xt.default=void 0;var St={id:"actions/resize",before:["actions/drag"],install:function(t){var e=t.actions,n=t.browser,r=t.Interactable,o=t.defaults;St.cursors=function(t){return t.isIe9?{x:"e-resize",y:"s-resize",xy:"se-resize",top:"n-resize",left:"w-resize",bottom:"s-resize",right:"e-resize",topleft:"se-resize",bottomright:"se-resize",topright:"ne-resize",bottomleft:"ne-resize"}:{x:"ew-resize",y:"ns-resize",xy:"nwse-resize",top:"ns-resize",left:"ew-resize",bottom:"ns-resize",right:"ew-resize",topleft:"nwse-resize",bottomright:"nwse-resize",topright:"nesw-resize",bottomleft:"nesw-resize"}}(n),St.defaultMargin=n.supportsTouch||n.supportsPointerEvent?20:10,r.prototype.resizable=function(e){return function(t,e,n){if(i.default.object(e))return t.options.resize.enabled=!1!==e.enabled,t.setPerAction("resize",e),t.setOnEvents("resize",e),i.default.string(e.axis)&&/^x$|^y$|^xy$/.test(e.axis)?t.options.resize.axis=e.axis:null===e.axis&&(t.options.resize.axis=n.defaults.actions.resize.axis),i.default.bool(e.preserveAspectRatio)?t.options.resize.preserveAspectRatio=e.preserveAspectRatio:i.default.bool(e.square)&&(t.options.resize.square=e.square),t;if(i.default.bool(e))return t.options.resize.enabled=e,t;return t.options.resize}(this,e,t)},e.map.resize=St,e.methodDict.resize="resizable",o.actions.resize=St.defaults},listeners:{"interactions:new":function(t){t.interaction.resizeAxes="xy"},"interactions:action-start":function(t){!function(t){var e=t.iEvent,n=t.interaction;if("resize"===n.prepared.name&&n.prepared.edges){var r=e,o=n.rect;n._rects={start:(0,j.default)({},o),corrected:(0,j.default)({},o),previous:(0,j.default)({},o),delta:{left:0,right:0,width:0,top:0,bottom:0,height:0}},r.edges=n.prepared.edges,r.rect=n._rects.corrected,r.deltaRect=n._rects.delta}}(t),_t(t)},"interactions:action-move":function(t){!function(t){var e=t.iEvent,n=t.interaction;if("resize"===n.prepared.name&&n.prepared.edges){var r=e,o=n.interactable.options.resize.invert,i="reposition"===o||"negate"===o,a=n.rect,s=n._rects,l=s.start,u=s.corrected,c=s.delta,f=s.previous;if((0,j.default)(f,u),i){if((0,j.default)(u,a),"reposition"===o){if(u.top>u.bottom){var d=u.top;u.top=u.bottom,u.bottom=d}if(u.left>u.right){var p=u.left;u.left=u.right,u.right=p}}}else u.top=Math.min(a.top,l.bottom),u.bottom=Math.max(a.bottom,l.top),u.left=Math.min(a.left,l.right),u.right=Math.max(a.right,l.left);for(var v in u.width=u.right-u.left,u.height=u.bottom-u.top,u)c[v]=u[v]-f[v];r.edges=n.prepared.edges,r.rect=u,r.deltaRect=c}}(t),_t(t)},"interactions:action-end":function(t){var e=t.iEvent,n=t.interaction;if("resize"===n.prepared.name&&n.prepared.edges){var r=e;r.edges=n.prepared.edges,r.rect=n._rects.corrected,r.deltaRect=n._rects.delta}},"auto-start:check":function(t){var e=t.interaction,n=t.interactable,r=t.element,o=t.rect,a=t.buttons;if(o){var s=(0,j.default)({},e.coords.cur.page),l=n.options.resize;if(l&&l.enabled&&(!e.pointerIsDown||!/mouse|pointer/.test(e.pointerType)||0!=(a&l.mouseButtons))){if(i.default.object(l.edges)){var u={left:!1,right:!1,top:!1,bottom:!1};for(var c in u)u[c]=wt(c,l.edges[c],s,e._latestPointer.eventTarget,r,o,l.margin||St.defaultMargin);u.left=u.left&&!u.right,u.top=u.top&&!u.bottom,(u.left||u.right||u.top||u.bottom)&&(t.action={name:"resize",edges:u})}else{var f="y"!==l.axis&&s.x>o.right-St.defaultMargin,d="x"!==l.axis&&s.y>o.bottom-St.defaultMargin;(f||d)&&(t.action={name:"resize",axes:(f?"x":"")+(d?"y":"")})}return!t.action&&void 0}}}},defaults:{square:!1,preserveAspectRatio:!1,axis:"xy",margin:NaN,edges:null,invert:"none"},cursors:null,getCursor:function(t){var e=t.edges,n=t.axis,r=t.name,o=St.cursors,i=null;if(n)i=o[r+n];else if(e){for(var a="",s=["top","bottom","left","right"],l=0;l<s.length;l++){var u=s[l];e[u]&&(a+=u)}i=o[a]}return i},defaultMargin:null},Pt=St;xt.default=Pt;var Ot={};Object.defineProperty(Ot,"__esModule",{value:!0}),Ot.default=void 0;var Et={id:"actions",install:function(t){t.usePlugin(gt.default),t.usePlugin(xt.default),t.usePlugin(c.default),t.usePlugin(st.default)}};Ot.default=Et;var Tt={};Object.defineProperty(Tt,"__esModule",{value:!0}),Tt.default=void 0;Tt.default={};var Mt={};Object.defineProperty(Mt,"__esModule",{value:!0}),Mt.default=void 0;var jt,kt,It=0;var Dt={request:function(t){return jt(t)},cancel:function(t){return kt(t)},init:function(t){if(jt=t.requestAnimationFrame,kt=t.cancelAnimationFrame,!jt)for(var e=["ms","moz","webkit","o"],n=0;n<e.length;n++){var r=e[n];jt=t["".concat(r,"RequestAnimationFrame")],kt=t["".concat(r,"CancelAnimationFrame")]||t["".concat(r,"CancelRequestAnimationFrame")]}jt=jt&&jt.bind(t),kt=kt&&kt.bind(t),jt||(jt=function(e){var n=Date.now(),r=Math.max(0,16-(n-It)),o=t.setTimeout((function(){e(n+r)}),r);return It=n+r,o},kt=function(t){return clearTimeout(t)})}};Mt.default=Dt;var At={};Object.defineProperty(At,"__esModule",{value:!0}),At.getContainer=Ct,At.getScroll=Rt,At.getScrollSize=function(t){i.default.window(t)&&(t=window.document.body);return{x:t.scrollWidth,y:t.scrollHeight}},At.getScrollSizeDelta=function(t,e){var n=t.interaction,r=t.element,o=n&&n.interactable.options[n.prepared.name].autoScroll;if(!o||!o.enabled)return e(),{x:0,y:0};var i=Ct(o.container,n.interactable,r),a=Rt(i);e();var s=Rt(i);return{x:s.x-a.x,y:s.y-a.y}},At.default=void 0;var zt={defaults:{enabled:!1,margin:60,container:null,speed:300},now:Date.now,interaction:null,i:0,x:0,y:0,isScrolling:!1,prevTime:0,margin:0,speed:0,start:function(t){zt.isScrolling=!0,Mt.default.cancel(zt.i),t.autoScroll=zt,zt.interaction=t,zt.prevTime=zt.now(),zt.i=Mt.default.request(zt.scroll)},stop:function(){zt.isScrolling=!1,zt.interaction&&(zt.interaction.autoScroll=null),Mt.default.cancel(zt.i)},scroll:function(){var t=zt.interaction,e=t.interactable,n=t.element,r=t.prepared.name,o=e.options[r].autoScroll,a=Ct(o.container,e,n),s=zt.now(),l=(s-zt.prevTime)/1e3,u=o.speed*l;if(u>=1){var c={x:zt.x*u,y:zt.y*u};if(c.x||c.y){var f=Rt(a);i.default.window(a)?a.scrollBy(c.x,c.y):a&&(a.scrollLeft+=c.x,a.scrollTop+=c.y);var d=Rt(a),p={x:d.x-f.x,y:d.y-f.y};(p.x||p.y)&&e.fire({type:"autoscroll",target:n,interactable:e,delta:p,interaction:t,container:a})}zt.prevTime=s}zt.isScrolling&&(Mt.default.cancel(zt.i),zt.i=Mt.default.request(zt.scroll))},check:function(t,e){var n=t.options;return n[e].autoScroll&&n[e].autoScroll.enabled},onInteractionMove:function(t){var e=t.interaction,n=t.pointer;if(e.interacting()&&zt.check(e.interactable,e.prepared.name))if(e.simulation)zt.x=zt.y=0;else{var r,o,a,s,l=e.interactable,u=e.element,c=e.prepared.name,f=l.options[c].autoScroll,d=Ct(f.container,l,u);if(i.default.window(d))s=n.clientX<zt.margin,r=n.clientY<zt.margin,o=n.clientX>d.innerWidth-zt.margin,a=n.clientY>d.innerHeight-zt.margin;else{var p=_.getElementClientRect(d);s=n.clientX<p.left+zt.margin,r=n.clientY<p.top+zt.margin,o=n.clientX>p.right-zt.margin,a=n.clientY>p.bottom-zt.margin}zt.x=o?1:s?-1:0,zt.y=a?1:r?-1:0,zt.isScrolling||(zt.margin=f.margin,zt.speed=f.speed,zt.start(e))}}};function Ct(t,n,r){return(i.default.string(t)?(0,k.getStringOptionResult)(t,n,r):t)||(0,e.getWindow)(r)}function Rt(t){return i.default.window(t)&&(t=window.document.body),{x:t.scrollLeft,y:t.scrollTop}}var Ft={id:"auto-scroll",install:function(t){var e=t.defaults,n=t.actions;t.autoScroll=zt,zt.now=function(){return t.now()},n.phaselessTypes.autoscroll=!0,e.perAction.autoScroll=zt.defaults},listeners:{"interactions:new":function(t){t.interaction.autoScroll=null},"interactions:destroy":function(t){t.interaction.autoScroll=null,zt.stop(),zt.interaction&&(zt.interaction=null)},"interactions:stop":zt.stop,"interactions:action-move":function(t){return zt.onInteractionMove(t)}}};At.default=Ft;var Xt={};Object.defineProperty(Xt,"__esModule",{value:!0}),Xt.warnOnce=function(t,n){var r=!1;return function(){return r||(e.window.console.warn(n),r=!0),t.apply(this,arguments)}},Xt.copyAction=function(t,e){return t.name=e.name,t.axis=e.axis,t.edges=e.edges,t};var Yt={};function Wt(t){return i.default.bool(t)?(this.options.styleCursor=t,this):null===t?(delete this.options.styleCursor,this):this.options.styleCursor}function Lt(t){return i.default.func(t)?(this.options.actionChecker=t,this):null===t?(delete this.options.actionChecker,this):this.options.actionChecker}Object.defineProperty(Yt,"__esModule",{value:!0}),Yt.default=void 0;var Bt={id:"auto-start/interactableMethods",install:function(t){var e=t.Interactable;e.prototype.getAction=function(e,n,r,o){var i=function(t,e,n,r,o){var i=t.getRect(r),a=e.buttons||{0:1,1:4,3:8,4:16}[e.button],s={action:null,interactable:t,interaction:n,element:r,rect:i,buttons:a};return o.fire("auto-start:check",s),s.action}(this,n,r,o,t);return this.options.actionChecker?this.options.actionChecker(e,n,i,this,o,r):i},e.prototype.ignoreFrom=(0,Xt.warnOnce)((function(t){return this._backCompatOption("ignoreFrom",t)}),"Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."),e.prototype.allowFrom=(0,Xt.warnOnce)((function(t){return this._backCompatOption("allowFrom",t)}),"Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."),e.prototype.actionChecker=Lt,e.prototype.styleCursor=Wt}};Yt.default=Bt;var Ut={};function Nt(t,e,n,r,o){return e.testIgnoreAllow(e.options[t.name],n,r)&&e.options[t.name].enabled&&Gt(e,n,t,o)?t:null}function Vt(t,e,n,r,o,i,a){for(var s=0,l=r.length;s<l;s++){var u=r[s],c=o[s],f=u.getAction(e,n,t,c);if(f){var d=Nt(f,u,c,i,a);if(d)return{action:d,interactable:u,element:c}}}return{action:null,interactable:null,element:null}}function qt(t,e,n,r,o){var a=[],s=[],l=r;function u(t){a.push(t),s.push(l)}for(;i.default.element(l);){a=[],s=[],o.interactables.forEachMatch(l,u);var c=Vt(t,e,n,a,s,r,o);if(c.action&&!c.interactable.options[c.action.name].manualStart)return c;l=_.parentNode(l)}return{action:null,interactable:null,element:null}}function $t(t,e,n){var r=e.action,o=e.interactable,i=e.element;r=r||{name:null},t.interactable=o,t.element=i,(0,Xt.copyAction)(t.prepared,r),t.rect=o&&r.name?o.getRect(i):null,Zt(t,n),n.fire("autoStart:prepared",{interaction:t})}function Gt(t,e,n,r){var o=t.options,i=o[n.name].max,a=o[n.name].maxPerElement,s=r.autoStart.maxInteractions,l=0,u=0,c=0;if(!(i&&a&&s))return!1;for(var f=0;f<r.interactions.list.length;f++){var d=r.interactions.list[f],p=d.prepared.name;if(d.interacting()){if(++l>=s)return!1;if(d.interactable===t){if((u+=p===n.name?1:0)>=i)return!1;if(d.element===e&&(c++,p===n.name&&c>=a))return!1}}}return s>0}function Ht(t,e){return i.default.number(t)?(e.autoStart.maxInteractions=t,this):e.autoStart.maxInteractions}function Kt(t,e,n){var r=n.autoStart.cursorElement;r&&r!==t&&(r.style.cursor=""),t.ownerDocument.documentElement.style.cursor=e,t.style.cursor=e,n.autoStart.cursorElement=e?t:null}function Zt(t,e){var n=t.interactable,r=t.element,o=t.prepared;if("mouse"===t.pointerType&&n&&n.options.styleCursor){var a="";if(o.name){var s=n.options[o.name].cursorChecker;a=i.default.func(s)?s(o,n,r,t._interacting):e.actions.map[o.name].getCursor(o)}Kt(t.element,a||"",e)}else e.autoStart.cursorElement&&Kt(e.autoStart.cursorElement,"",e)}Object.defineProperty(Ut,"__esModule",{value:!0}),Ut.default=void 0;var Jt={id:"auto-start/base",before:["actions"],install:function(t){var e=t.interactStatic,n=t.defaults;t.usePlugin(Yt.default),n.base.actionChecker=null,n.base.styleCursor=!0,(0,j.default)(n.perAction,{manualStart:!1,max:1/0,maxPerElement:1,allowFrom:null,ignoreFrom:null,mouseButtons:1}),e.maxInteractions=function(e){return Ht(e,t)},t.autoStart={maxInteractions:1/0,withinInteractionLimit:Gt,cursorElement:null}},listeners:{"interactions:down":function(t,e){var n=t.interaction,r=t.pointer,o=t.event,i=t.eventTarget;n.interacting()||$t(n,qt(n,r,o,i,e),e)},"interactions:move":function(t,e){!function(t,e){var n=t.interaction,r=t.pointer,o=t.event,i=t.eventTarget;"mouse"!==n.pointerType||n.pointerIsDown||n.interacting()||$t(n,qt(n,r,o,i,e),e)}(t,e),function(t,e){var n=t.interaction;if(n.pointerIsDown&&!n.interacting()&&n.pointerWasMoved&&n.prepared.name){e.fire("autoStart:before-start",t);var r=n.interactable,o=n.prepared.name;o&&r&&(r.options[o].manualStart||!Gt(r,n.element,n.prepared,e)?n.stop():(n.start(n.prepared,r,n.element),Zt(n,e)))}}(t,e)},"interactions:stop":function(t,e){var n=t.interaction,r=n.interactable;r&&r.options.styleCursor&&Kt(n.element,"",e)}},maxInteractions:Ht,withinInteractionLimit:Gt,validateAction:Nt};Ut.default=Jt;var Qt={};Object.defineProperty(Qt,"__esModule",{value:!0}),Qt.default=void 0;var te={id:"auto-start/dragAxis",listeners:{"autoStart:before-start":function(t,e){var n=t.interaction,r=t.eventTarget,o=t.dx,a=t.dy;if("drag"===n.prepared.name){var s=Math.abs(o),l=Math.abs(a),u=n.interactable.options.drag,c=u.startAxis,f=s>l?"x":s<l?"y":"xy";if(n.prepared.axis="start"===u.lockAxis?f[0]:u.lockAxis,"xy"!==f&&"xy"!==c&&c!==f){n.prepared.name=null;for(var d=r,p=function(t){if(t!==n.interactable){var o=n.interactable.options.drag;if(!o.manualStart&&t.testIgnoreAllow(o,d,r)){var i=t.getAction(n.downPointer,n.downEvent,n,d);if(i&&"drag"===i.name&&function(t,e){if(!e)return!1;var n=e.options.drag.startAxis;return"xy"===t||"xy"===n||n===t}(f,t)&&Ut.default.validateAction(i,t,d,r,e))return t}}};i.default.element(d);){var v=e.interactables.forEachMatch(d,p);if(v){n.prepared.name="drag",n.interactable=v,n.element=d;break}d=(0,_.parentNode)(d)}}}}}};Qt.default=te;var ee={};function ne(t){var e=t.prepared&&t.prepared.name;if(!e)return null;var n=t.interactable.options;return n[e].hold||n[e].delay}Object.defineProperty(ee,"__esModule",{value:!0}),ee.default=void 0;var re={id:"auto-start/hold",install:function(t){var e=t.defaults;t.usePlugin(Ut.default),e.perAction.hold=0,e.perAction.delay=0},listeners:{"interactions:new":function(t){t.interaction.autoStartHoldTimer=null},"autoStart:prepared":function(t){var e=t.interaction,n=ne(e);n>0&&(e.autoStartHoldTimer=setTimeout((function(){e.start(e.prepared,e.interactable,e.element)}),n))},"interactions:move":function(t){var e=t.interaction,n=t.duplicate;e.autoStartHoldTimer&&e.pointerWasMoved&&!n&&(clearTimeout(e.autoStartHoldTimer),e.autoStartHoldTimer=null)},"autoStart:before-start":function(t){var e=t.interaction;ne(e)>0&&(e.prepared.name=null)}},getHoldDuration:ne};ee.default=re;var oe={};Object.defineProperty(oe,"__esModule",{value:!0}),oe.default=void 0;var ie={id:"auto-start",install:function(t){t.usePlugin(Ut.default),t.usePlugin(ee.default),t.usePlugin(Qt.default)}};oe.default=ie;var ae={};Object.defineProperty(ae,"__esModule",{value:!0}),ae.default=void 0;ae.default={};var se={};function le(t){return/^(always|never|auto)$/.test(t)?(this.options.preventDefault=t,this):i.default.bool(t)?(this.options.preventDefault=t?"always":"never",this):this.options.preventDefault}function ue(t){var e=t.interaction,n=t.event;e.interactable&&e.interactable.checkAndPreventDefault(n)}function ce(t){var n=t.Interactable;n.prototype.preventDefault=le,n.prototype.checkAndPreventDefault=function(n){return function(t,n,r){var o=t.options.preventDefault;if("never"!==o)if("always"!==o){if(n.events.supportsPassive&&/^touch(start|move)$/.test(r.type)){var a=(0,e.getWindow)(r.target).document,s=n.getDocOptions(a);if(!s||!s.events||!1!==s.events.passive)return}/^(mouse|pointer|touch)*(down|start)/i.test(r.type)||i.default.element(r.target)&&(0,_.matchesSelector)(r.target,"input,select,textarea,[contenteditable=true],[contenteditable=true] *")||r.preventDefault()}else r.preventDefault()}(this,t,n)},t.interactions.docEvents.push({type:"dragstart",listener:function(e){for(var n=0;n<t.interactions.list.length;n++){var r=t.interactions.list[n];if(r.element&&(r.element===e.target||(0,_.nodeContains)(r.element,e.target)))return void r.interactable.checkAndPreventDefault(e)}}})}Object.defineProperty(se,"__esModule",{value:!0}),se.install=ce,se.default=void 0;var fe={id:"core/interactablePreventDefault",install:ce,listeners:["down","move","up","cancel"].reduce((function(t,e){return t["interactions:".concat(e)]=ue,t}),{})};se.default=fe;var de,pe={};function ve(t){return function(t){if(Array.isArray(t))return he(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return he(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return he(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function he(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}Object.defineProperty(pe,"__esModule",{value:!0}),pe.default=void 0,function(t){t.touchAction="touchAction",t.boxSizing="boxSizing",t.noListeners="noListeners"}(de||(de={}));var ge={touchAction:"https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action",boxSizing:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing"};var ye=[{name:de.touchAction,perform:function(t){return!function(t,e,n){var r=t;for(;i.default.element(r);){if(me(r,e,n))return!0;r=(0,_.parentNode)(r)}return!1}(t.element,"touchAction",/pan-|pinch|none/)},getInfo:function(t){return[t.element,ge.touchAction]},text:'Consider adding CSS "touch-action: none" to this element\n'},{name:de.boxSizing,perform:function(t){var e=t.element;return"resize"===t.prepared.name&&e instanceof h.default.HTMLElement&&!me(e,"boxSizing",/border-box/)},text:'Consider adding CSS "box-sizing: border-box" to this resizable element',getInfo:function(t){return[t.element,ge.boxSizing]}},{name:de.noListeners,perform:function(t){var e=t.prepared.name;return!(t.interactable.events.types["".concat(e,"move")]||[]).length},getInfo:function(t){return[t.prepared.name,t.interactable]},text:"There are no listeners set for this action"}];function me(t,n,r){var o=t.style[n]||e.window.getComputedStyle(t)[n];return r.test((o||"").toString())}var be="dev-tools",xe={id:be,install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.logger,r=t.Interactable,o=t.defaults;t.logger=n||console,o.base.devTools={ignore:{}},r.prototype.devTools=function(t){return t?((0,j.default)(this.options.devTools,t),this):this.options.devTools}},listeners:{"interactions:action-start":function(t,e){for(var n=t.interaction,r=0;r<ye.length;r++){var o,i=ye[r],a=n.interactable&&n.interactable.options;if(!(a&&a.devTools&&a.devTools.ignore[i.name])&&i.perform(n))(o=e.logger).warn.apply(o,["[interact.js] "+i.text].concat(ve(i.getInfo(n))))}}},checks:ye,CheckName:de,links:ge,prefix:"[interact.js] "};pe.default=xe;var we={};Object.defineProperty(we,"__esModule",{value:!0}),we.default=void 0;we.default={};var _e={};Object.defineProperty(_e,"__esModule",{value:!0}),_e.default=function t(e){var n={};for(var r in e){var o=e[r];i.default.plainObject(o)?n[r]=t(o):i.default.array(o)?n[r]=K.from(o):n[r]=o}return n};var Se={};function Pe(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return Oe(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Oe(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Oe(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function Ee(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(Se,"__esModule",{value:!0}),Se.getRectOffset=je,Se.default=void 0;var Te=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.states=[],this.startOffset={left:0,right:0,top:0,bottom:0},this.startDelta=null,this.result=null,this.endResult=null,this.edges=void 0,this.interaction=void 0,this.interaction=e,this.result=Me()}var e,n,r;return e=t,(n=[{key:"start",value:function(t,e){var n=t.phase,r=this.interaction,o=function(t){var e=t.interactable.options[t.prepared.name],n=e.modifiers;return n&&n.length?n:["snap","snapSize","snapEdges","restrict","restrictEdges","restrictSize"].map((function(t){var n=e[t];return n&&n.enabled&&{options:n,methods:n._methods}})).filter((function(t){return!!t}))}(r);this.prepareStates(o),this.edges=(0,j.default)({},r.edges),this.startOffset=je(r.rect,e),this.startDelta={x:0,y:0};var i={phase:n,pageCoords:e,preEnd:!1};return this.result=Me(),this.startAll(i),this.result=this.setAll(i)}},{key:"fillArg",value:function(t){var e=this.interaction;t.interaction=e,t.interactable=e.interactable,t.element=e.element,t.rect=t.rect||e.rect,t.edges=this.edges,t.startOffset=this.startOffset}},{key:"startAll",value:function(t){this.fillArg(t);for(var e=0;e<this.states.length;e++){var n=this.states[e];n.methods.start&&(t.state=n,n.methods.start(t))}}},{key:"setAll",value:function(t){this.fillArg(t);var e=t.phase,n=t.preEnd,r=t.skipModifiers,o=t.rect;t.coords=(0,j.default)({},t.pageCoords),t.rect=(0,j.default)({},o);for(var i=r?this.states.slice(r):this.states,a=Me(t.coords,t.rect),s=0;s<i.length;s++){var l=i[s],u=l.options,c=(0,j.default)({},t.coords),f=null;l.methods.set&&this.shouldDo(u,n,e)&&(t.state=l,f=l.methods.set(t),k.addEdges(this.interaction.edges,t.rect,{x:t.coords.x-c.x,y:t.coords.y-c.y})),a.eventProps.push(f)}a.delta.x=t.coords.x-t.pageCoords.x,a.delta.y=t.coords.y-t.pageCoords.y,a.rectDelta.left=t.rect.left-o.left,a.rectDelta.right=t.rect.right-o.right,a.rectDelta.top=t.rect.top-o.top,a.rectDelta.bottom=t.rect.bottom-o.bottom;var d=this.result.coords,p=this.result.rect;if(d&&p){var v=a.rect.left!==p.left||a.rect.right!==p.right||a.rect.top!==p.top||a.rect.bottom!==p.bottom;a.changed=v||d.x!==a.coords.x||d.y!==a.coords.y}return a}},{key:"applyToInteraction",value:function(t){var e=this.interaction,n=t.phase,r=e.coords.cur,o=e.coords.start,i=this.result,a=this.startDelta,s=i.delta;"start"===n&&(0,j.default)(this.startDelta,i.delta);for(var l=[[o,a],[r,s]],u=0;u<l.length;u++){var c=Pe(l[u],2),f=c[0],d=c[1];f.page.x+=d.x,f.page.y+=d.y,f.client.x+=d.x,f.client.y+=d.y}var p=this.result.rectDelta,v=t.rect||e.rect;v.left+=p.left,v.right+=p.right,v.top+=p.top,v.bottom+=p.bottom,v.width=v.right-v.left,v.height=v.bottom-v.top}},{key:"setAndApply",value:function(t){var e=this.interaction,n=t.phase,r=t.preEnd,o=t.skipModifiers,i=this.setAll({preEnd:r,phase:n,pageCoords:t.modifiedCoords||e.coords.cur.page});if(this.result=i,!i.changed&&(!o||o<this.states.length)&&e.interacting())return!1;if(t.modifiedCoords){var a=e.coords.cur.page,s={x:t.modifiedCoords.x-a.x,y:t.modifiedCoords.y-a.y};i.coords.x+=s.x,i.coords.y+=s.y,i.delta.x+=s.x,i.delta.y+=s.y}this.applyToInteraction(t)}},{key:"beforeEnd",value:function(t){var e=t.interaction,n=t.event,r=this.states;if(r&&r.length){for(var o=!1,i=0;i<r.length;i++){var a=r[i];t.state=a;var s=a.options,l=a.methods,u=l.beforeEnd&&l.beforeEnd(t);if(u)return this.endResult=u,!1;o=o||!o&&this.shouldDo(s,!0,t.phase,!0)}o&&e.move({event:n,preEnd:!0})}}},{key:"stop",value:function(t){var e=t.interaction;if(this.states&&this.states.length){var n=(0,j.default)({states:this.states,interactable:e.interactable,element:e.element,rect:null},t);this.fillArg(n);for(var r=0;r<this.states.length;r++){var o=this.states[r];n.state=o,o.methods.stop&&o.methods.stop(n)}this.states=null,this.endResult=null}}},{key:"prepareStates",value:function(t){this.states=[];for(var e=0;e<t.length;e++){var n=t[e],r=n.options,o=n.methods,i=n.name;this.states.push({options:r,methods:o,index:e,name:i})}return this.states}},{key:"restoreInteractionCoords",value:function(t){var e=t.interaction,n=e.coords,r=e.rect,o=e.modification;if(o.result){for(var i=o.startDelta,a=o.result,s=a.delta,l=a.rectDelta,u=[[n.start,i],[n.cur,s]],c=0;c<u.length;c++){var f=Pe(u[c],2),d=f[0],p=f[1];d.page.x-=p.x,d.page.y-=p.y,d.client.x-=p.x,d.client.y-=p.y}r.left-=l.left,r.right-=l.right,r.top-=l.top,r.bottom-=l.bottom}}},{key:"shouldDo",value:function(t,e,n,r){return!(!t||!1===t.enabled||r&&!t.endOnly||t.endOnly&&!e||"start"===n&&!t.setStart)}},{key:"copyFrom",value:function(t){this.startOffset=t.startOffset,this.startDelta=t.startDelta,this.edges=t.edges,this.states=t.states.map((function(t){return(0,_e.default)(t)})),this.result=Me((0,j.default)({},t.result.coords),(0,j.default)({},t.result.rect))}},{key:"destroy",value:function(){for(var t in this)this[t]=null}}])&&Ee(e.prototype,n),r&&Ee(e,r),t}();function Me(t,e){return{rect:e,coords:t,delta:{x:0,y:0},rectDelta:{left:0,right:0,top:0,bottom:0},eventProps:[],changed:!0}}function je(t,e){return t?{left:e.x-t.left,top:e.y-t.top,right:t.right-e.x,bottom:t.bottom-e.y}:{left:0,top:0,right:0,bottom:0}}Se.default=Te;var ke={};function Ie(t){var e=t.iEvent,n=t.interaction.modification.result;n&&(e.modifiers=n.eventProps)}Object.defineProperty(ke,"__esModule",{value:!0}),ke.makeModifier=function(t,e){var n=t.defaults,r={start:t.start,set:t.set,beforeEnd:t.beforeEnd,stop:t.stop},o=function(t){var o=t||{};for(var i in o.enabled=!1!==o.enabled,n)i in o||(o[i]=n[i]);var a={options:o,methods:r,name:e,enable:function(){return o.enabled=!0,a},disable:function(){return o.enabled=!1,a}};return a};e&&"string"==typeof e&&(o._defaults=n,o._methods=r);return o},ke.addEventModifiers=Ie,ke.default=void 0;var De={id:"modifiers/base",before:["actions"],install:function(t){t.defaults.perAction.modifiers=[]},listeners:{"interactions:new":function(t){var e=t.interaction;e.modification=new Se.default(e)},"interactions:before-action-start":function(t){var e=t.interaction.modification;e.start(t,t.interaction.coords.start.page),t.interaction.edges=e.edges,e.applyToInteraction(t)},"interactions:before-action-move":function(t){return t.interaction.modification.setAndApply(t)},"interactions:before-action-end":function(t){return t.interaction.modification.beforeEnd(t)},"interactions:action-start":Ie,"interactions:action-move":Ie,"interactions:action-end":Ie,"interactions:after-action-start":function(t){return t.interaction.modification.restoreInteractionCoords(t)},"interactions:after-action-move":function(t){return t.interaction.modification.restoreInteractionCoords(t)},"interactions:stop":function(t){return t.interaction.modification.stop(t)}}};ke.default=De;var Ae={};Object.defineProperty(Ae,"__esModule",{value:!0}),Ae.defaults=void 0;Ae.defaults={base:{preventDefault:"auto",deltaSource:"page"},perAction:{enabled:!1,origin:{x:0,y:0}},actions:{}};var ze={};function Ce(t){return(Ce="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Re(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Fe(t,e){return(Fe=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Xe(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Le(t);if(e){var o=Le(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Ye(this,n)}}function Ye(t,e){return!e||"object"!==Ce(e)&&"function"!=typeof e?We(t):e}function We(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Le(t){return(Le=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}Object.defineProperty(ze,"__esModule",{value:!0}),ze.InteractEvent=void 0;var Be=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Fe(t,e)}(i,t);var e,n,r,o=Xe(i);function i(t,e,n,r,a,s,l){var u;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(u=o.call(this,t)).target=void 0,u.currentTarget=void 0,u.relatedTarget=null,u.screenX=void 0,u.screenY=void 0,u.button=void 0,u.buttons=void 0,u.ctrlKey=void 0,u.shiftKey=void 0,u.altKey=void 0,u.metaKey=void 0,u.page=void 0,u.client=void 0,u.delta=void 0,u.rect=void 0,u.x0=void 0,u.y0=void 0,u.t0=void 0,u.dt=void 0,u.duration=void 0,u.clientX0=void 0,u.clientY0=void 0,u.velocity=void 0,u.speed=void 0,u.swipe=void 0,u.timeStamp=void 0,u.dragEnter=void 0,u.dragLeave=void 0,u.axes=void 0,u.preEnd=void 0,a=a||t.element;var c=t.interactable,f=(c&&c.options||Ae.defaults).deltaSource,d=(0,A.default)(c,a,n),p="start"===r,v="end"===r,h=p?We(u):t.prevEvent,g=p?t.coords.start:v?{page:h.page,client:h.client,timeStamp:t.coords.cur.timeStamp}:t.coords.cur;return u.page=(0,j.default)({},g.page),u.client=(0,j.default)({},g.client),u.rect=(0,j.default)({},t.rect),u.timeStamp=g.timeStamp,v||(u.page.x-=d.x,u.page.y-=d.y,u.client.x-=d.x,u.client.y-=d.y),u.ctrlKey=e.ctrlKey,u.altKey=e.altKey,u.shiftKey=e.shiftKey,u.metaKey=e.metaKey,u.button=e.button,u.buttons=e.buttons,u.target=a,u.currentTarget=a,u.preEnd=s,u.type=l||n+(r||""),u.interactable=c,u.t0=p?t.pointers[t.pointers.length-1].downTime:h.t0,u.x0=t.coords.start.page.x-d.x,u.y0=t.coords.start.page.y-d.y,u.clientX0=t.coords.start.client.x-d.x,u.clientY0=t.coords.start.client.y-d.y,u.delta=p||v?{x:0,y:0}:{x:u[f].x-h[f].x,y:u[f].y-h[f].y},u.dt=t.coords.delta.timeStamp,u.duration=u.timeStamp-u.t0,u.velocity=(0,j.default)({},t.coords.velocity[f]),u.speed=(0,R.default)(u.velocity.x,u.velocity.y),u.swipe=v||"inertiastart"===r?u.getSwipe():null,u}return e=i,(n=[{key:"getSwipe",value:function(){var t=this._interaction;if(t.prevEvent.speed<600||this.timeStamp-t.prevEvent.timeStamp>150)return null;var e=180*Math.atan2(t.prevEvent.velocityY,t.prevEvent.velocityX)/Math.PI;e<0&&(e+=360);var n=112.5<=e&&e<247.5,r=202.5<=e&&e<337.5;return{up:r,down:!r&&22.5<=e&&e<157.5,left:n,right:!n&&(292.5<=e||e<67.5),angle:e,speed:t.prevEvent.speed,velocity:{x:t.prevEvent.velocityX,y:t.prevEvent.velocityY}}}},{key:"preventDefault",value:function(){}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}}])&&Re(e.prototype,n),r&&Re(e,r),i}($.BaseEvent);ze.InteractEvent=Be,Object.defineProperties(Be.prototype,{pageX:{get:function(){return this.page.x},set:function(t){this.page.x=t}},pageY:{get:function(){return this.page.y},set:function(t){this.page.y=t}},clientX:{get:function(){return this.client.x},set:function(t){this.client.x=t}},clientY:{get:function(){return this.client.y},set:function(t){this.client.y=t}},dx:{get:function(){return this.delta.x},set:function(t){this.delta.x=t}},dy:{get:function(){return this.delta.y},set:function(t){this.delta.y=t}},velocityX:{get:function(){return this.velocity.x},set:function(t){this.velocity.x=t}},velocityY:{get:function(){return this.velocity.y},set:function(t){this.velocity.y=t}}});var Ue={};Object.defineProperty(Ue,"__esModule",{value:!0}),Ue.PointerInfo=void 0;Ue.PointerInfo=function t(e,n,r,o,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.id=void 0,this.pointer=void 0,this.event=void 0,this.downTime=void 0,this.downTarget=void 0,this.id=e,this.pointer=n,this.event=r,this.downTime=o,this.downTarget=i};var Ne,Ve,qe={};function $e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Ge(t,e,n){return e&&$e(t.prototype,e),n&&$e(t,n),t}Object.defineProperty(qe,"__esModule",{value:!0}),Object.defineProperty(qe,"PointerInfo",{enumerable:!0,get:function(){return Ue.PointerInfo}}),qe.default=qe.Interaction=qe._ProxyMethods=qe._ProxyValues=void 0,qe._ProxyValues=Ne,function(t){t.interactable="",t.element="",t.prepared="",t.pointerIsDown="",t.pointerWasMoved="",t._proxy=""}(Ne||(qe._ProxyValues=Ne={})),qe._ProxyMethods=Ve,function(t){t.start="",t.move="",t.end="",t.stop="",t.interacting=""}(Ve||(qe._ProxyMethods=Ve={}));var He=0,Ke=function(){function t(e){var n=this,r=e.pointerType,o=e.scopeFire;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.interactable=null,this.element=null,this.rect=void 0,this._rects=void 0,this.edges=void 0,this._scopeFire=void 0,this.prepared={name:null,axis:null,edges:null},this.pointerType=void 0,this.pointers=[],this.downEvent=null,this.downPointer={},this._latestPointer={pointer:null,event:null,eventTarget:null},this.prevEvent=null,this.pointerIsDown=!1,this.pointerWasMoved=!1,this._interacting=!1,this._ending=!1,this._stopped=!0,this._proxy=null,this.simulation=null,this.doMove=(0,Xt.warnOnce)((function(t){this.move(t)}),"The interaction.doMove() method has been renamed to interaction.move()"),this.coords={start:W.newCoords(),prev:W.newCoords(),cur:W.newCoords(),delta:W.newCoords(),velocity:W.newCoords()},this._id=He++,this._scopeFire=o,this.pointerType=r;var i=this;this._proxy={};var a=function(t){Object.defineProperty(n._proxy,t,{get:function(){return i[t]}})};for(var s in Ne)a(s);var l=function(t){Object.defineProperty(n._proxy,t,{value:function(){return i[t].apply(i,arguments)}})};for(var u in Ve)l(u);this._scopeFire("interactions:new",{interaction:this})}return Ge(t,[{key:"pointerMoveTolerance",get:function(){return 1}}]),Ge(t,[{key:"pointerDown",value:function(t,e,n){var r=this.updatePointer(t,e,n,!0),o=this.pointers[r];this._scopeFire("interactions:down",{pointer:t,event:e,eventTarget:n,pointerIndex:r,pointerInfo:o,type:"down",interaction:this})}},{key:"start",value:function(t,e,n){return!(this.interacting()||!this.pointerIsDown||this.pointers.length<("gesture"===t.name?2:1)||!e.options[t.name].enabled)&&((0,Xt.copyAction)(this.prepared,t),this.interactable=e,this.element=n,this.rect=e.getRect(n),this.edges=this.prepared.edges?(0,j.default)({},this.prepared.edges):{left:!0,right:!0,top:!0,bottom:!0},this._stopped=!1,this._interacting=this._doPhase({interaction:this,event:this.downEvent,phase:"start"})&&!this._stopped,this._interacting)}},{key:"pointerMove",value:function(t,e,n){this.simulation||this.modification&&this.modification.endResult||this.updatePointer(t,e,n,!1);var r,o,i=this.coords.cur.page.x===this.coords.prev.page.x&&this.coords.cur.page.y===this.coords.prev.page.y&&this.coords.cur.client.x===this.coords.prev.client.x&&this.coords.cur.client.y===this.coords.prev.client.y;this.pointerIsDown&&!this.pointerWasMoved&&(r=this.coords.cur.client.x-this.coords.start.client.x,o=this.coords.cur.client.y-this.coords.start.client.y,this.pointerWasMoved=(0,R.default)(r,o)>this.pointerMoveTolerance);var a=this.getPointerIndex(t),s={pointer:t,pointerIndex:a,pointerInfo:this.pointers[a],event:e,type:"move",eventTarget:n,dx:r,dy:o,duplicate:i,interaction:this};i||W.setCoordVelocity(this.coords.velocity,this.coords.delta),this._scopeFire("interactions:move",s),i||this.simulation||(this.interacting()&&(s.type=null,this.move(s)),this.pointerWasMoved&&W.copyCoords(this.coords.prev,this.coords.cur))}},{key:"move",value:function(t){t&&t.event||W.setZeroCoords(this.coords.delta),(t=(0,j.default)({pointer:this._latestPointer.pointer,event:this._latestPointer.event,eventTarget:this._latestPointer.eventTarget,interaction:this},t||{})).phase="move",this._doPhase(t)}},{key:"pointerUp",value:function(t,e,n,r){var o=this.getPointerIndex(t);-1===o&&(o=this.updatePointer(t,e,n,!1));var i=/cancel$/i.test(e.type)?"cancel":"up";this._scopeFire("interactions:".concat(i),{pointer:t,pointerIndex:o,pointerInfo:this.pointers[o],event:e,eventTarget:n,type:i,curEventTarget:r,interaction:this}),this.simulation||this.end(e),this.removePointer(t,e)}},{key:"documentBlur",value:function(t){this.end(t),this._scopeFire("interactions:blur",{event:t,type:"blur",interaction:this})}},{key:"end",value:function(t){var e;this._ending=!0,t=t||this._latestPointer.event,this.interacting()&&(e=this._doPhase({event:t,interaction:this,phase:"end"})),this._ending=!1,!0===e&&this.stop()}},{key:"currentAction",value:function(){return this._interacting?this.prepared.name:null}},{key:"interacting",value:function(){return this._interacting}},{key:"stop",value:function(){this._scopeFire("interactions:stop",{interaction:this}),this.interactable=this.element=null,this._interacting=!1,this._stopped=!0,this.prepared.name=this.prevEvent=null}},{key:"getPointerIndex",value:function(t){var e=W.getPointerId(t);return"mouse"===this.pointerType||"pen"===this.pointerType?this.pointers.length-1:K.findIndex(this.pointers,(function(t){return t.id===e}))}},{key:"getPointerInfo",value:function(t){return this.pointers[this.getPointerIndex(t)]}},{key:"updatePointer",value:function(t,e,n,r){var o=W.getPointerId(t),i=this.getPointerIndex(t),a=this.pointers[i];return r=!1!==r&&(r||/(down|start)$/i.test(e.type)),a?a.pointer=t:(a=new Ue.PointerInfo(o,t,e,null,null),i=this.pointers.length,this.pointers.push(a)),W.setCoords(this.coords.cur,this.pointers.map((function(t){return t.pointer})),this._now()),W.setCoordDeltas(this.coords.delta,this.coords.prev,this.coords.cur),r&&(this.pointerIsDown=!0,a.downTime=this.coords.cur.timeStamp,a.downTarget=n,W.pointerExtend(this.downPointer,t),this.interacting()||(W.copyCoords(this.coords.start,this.coords.cur),W.copyCoords(this.coords.prev,this.coords.cur),this.downEvent=e,this.pointerWasMoved=!1)),this._updateLatestPointer(t,e,n),this._scopeFire("interactions:update-pointer",{pointer:t,event:e,eventTarget:n,down:r,pointerInfo:a,pointerIndex:i,interaction:this}),i}},{key:"removePointer",value:function(t,e){var n=this.getPointerIndex(t);if(-1!==n){var r=this.pointers[n];this._scopeFire("interactions:remove-pointer",{pointer:t,event:e,eventTarget:null,pointerIndex:n,pointerInfo:r,interaction:this}),this.pointers.splice(n,1),this.pointerIsDown=!1}}},{key:"_updateLatestPointer",value:function(t,e,n){this._latestPointer.pointer=t,this._latestPointer.event=e,this._latestPointer.eventTarget=n}},{key:"destroy",value:function(){this._latestPointer.pointer=null,this._latestPointer.event=null,this._latestPointer.eventTarget=null}},{key:"_createPreparedEvent",value:function(t,e,n,r){return new ze.InteractEvent(this,t,this.prepared.name,e,this.element,n,r)}},{key:"_fireEvent",value:function(t){this.interactable.fire(t),(!this.prevEvent||t.timeStamp>=this.prevEvent.timeStamp)&&(this.prevEvent=t)}},{key:"_doPhase",value:function(t){var e=t.event,n=t.phase,r=t.preEnd,o=t.type,i=this.rect;if(i&&"move"===n&&(k.addEdges(this.edges,i,this.coords.delta[this.interactable.options.deltaSource]),i.width=i.right-i.left,i.height=i.bottom-i.top),!1===this._scopeFire("interactions:before-action-".concat(n),t))return!1;var a=t.iEvent=this._createPreparedEvent(e,n,r,o);return this._scopeFire("interactions:action-".concat(n),t),"start"===n&&(this.prevEvent=a),this._fireEvent(a),this._scopeFire("interactions:after-action-".concat(n),t),!0}},{key:"_now",value:function(){return Date.now()}}]),t}();qe.Interaction=Ke;var Ze=Ke;qe.default=Ze;var Je={};function Qe(t){t.pointerIsDown&&(rn(t.coords.cur,t.offset.total),t.offset.pending.x=0,t.offset.pending.y=0)}function tn(t){en(t.interaction)}function en(t){if(!function(t){return!(!t.offset.pending.x&&!t.offset.pending.y)}(t))return!1;var e=t.offset.pending;return rn(t.coords.cur,e),rn(t.coords.delta,e),k.addEdges(t.edges,t.rect,e),e.x=0,e.y=0,!0}function nn(t){var e=t.x,n=t.y;this.offset.pending.x+=e,this.offset.pending.y+=n,this.offset.total.x+=e,this.offset.total.y+=n}function rn(t,e){var n=t.page,r=t.client,o=e.x,i=e.y;n.x+=o,n.y+=i,r.x+=o,r.y+=i}Object.defineProperty(Je,"__esModule",{value:!0}),Je.addTotal=Qe,Je.applyPending=en,Je.default=void 0,qe._ProxyMethods.offsetBy="";var on={id:"offset",before:["modifiers","pointer-events","actions","inertia"],install:function(t){t.Interaction.prototype.offsetBy=nn},listeners:{"interactions:new":function(t){t.interaction.offset={total:{x:0,y:0},pending:{x:0,y:0}}},"interactions:update-pointer":function(t){return Qe(t.interaction)},"interactions:before-action-start":tn,"interactions:before-action-move":tn,"interactions:before-action-end":function(t){var e=t.interaction;if(en(e))return e.move({offset:!0}),e.end(),!1},"interactions:stop":function(t){var e=t.interaction;e.offset.total.x=0,e.offset.total.y=0,e.offset.pending.x=0,e.offset.pending.y=0}}};Je.default=on;var an={};function sn(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(an,"__esModule",{value:!0}),an.default=an.InertiaState=void 0;var ln=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.active=!1,this.isModified=!1,this.smoothEnd=!1,this.allowResume=!1,this.modification=null,this.modifierCount=0,this.modifierArg=null,this.startCoords=null,this.t0=0,this.v0=0,this.te=0,this.targetOffset=null,this.modifiedOffset=null,this.currentOffset=null,this.lambda_v0=0,this.one_ve_v0=0,this.timeout=null,this.interaction=void 0,this.interaction=e}var e,n,r;return e=t,(n=[{key:"start",value:function(t){var e=this.interaction,n=un(e);if(!n||!n.enabled)return!1;var r=e.coords.velocity.client,o=(0,R.default)(r.x,r.y),i=this.modification||(this.modification=new Se.default(e));if(i.copyFrom(e.modification),this.t0=e._now(),this.allowResume=n.allowResume,this.v0=o,this.currentOffset={x:0,y:0},this.startCoords=e.coords.cur.page,this.modifierArg={interaction:e,interactable:e.interactable,element:e.element,rect:e.rect,edges:e.edges,pageCoords:this.startCoords,preEnd:!0,phase:"inertiastart"},this.t0-e.coords.cur.timeStamp<50&&o>n.minSpeed&&o>n.endSpeed)this.startInertia();else{if(i.result=i.setAll(this.modifierArg),!i.result.changed)return!1;this.startSmoothEnd()}return e.modification.result.rect=null,e.offsetBy(this.targetOffset),e._doPhase({interaction:e,event:t,phase:"inertiastart"}),e.offsetBy({x:-this.targetOffset.x,y:-this.targetOffset.y}),e.modification.result.rect=null,this.active=!0,e.simulation=this,!0}},{key:"startInertia",value:function(){var t=this,e=this.interaction.coords.velocity.client,n=un(this.interaction),r=n.resistance,o=-Math.log(n.endSpeed/this.v0)/r;this.targetOffset={x:(e.x-o)/r,y:(e.y-o)/r},this.te=o,this.lambda_v0=r/this.v0,this.one_ve_v0=1-n.endSpeed/this.v0;var i=this.modification,a=this.modifierArg;a.pageCoords={x:this.startCoords.x+this.targetOffset.x,y:this.startCoords.y+this.targetOffset.y},i.result=i.setAll(a),i.result.changed&&(this.isModified=!0,this.modifiedOffset={x:this.targetOffset.x+i.result.delta.x,y:this.targetOffset.y+i.result.delta.y}),this.onNextFrame((function(){return t.inertiaTick()}))}},{key:"startSmoothEnd",value:function(){var t=this;this.smoothEnd=!0,this.isModified=!0,this.targetOffset={x:this.modification.result.delta.x,y:this.modification.result.delta.y},this.onNextFrame((function(){return t.smoothEndTick()}))}},{key:"onNextFrame",value:function(t){var e=this;this.timeout=Mt.default.request((function(){e.active&&t()}))}},{key:"inertiaTick",value:function(){var t,e,n,r,o,i,a,s=this,l=this.interaction,u=un(l).resistance,c=(l._now()-this.t0)/1e3;if(c<this.te){var f,d=1-(Math.exp(-u*c)-this.lambda_v0)/this.one_ve_v0;this.isModified?(t=0,e=0,n=this.targetOffset.x,r=this.targetOffset.y,o=this.modifiedOffset.x,i=this.modifiedOffset.y,f={x:cn(a=d,t,n,o),y:cn(a,e,r,i)}):f={x:this.targetOffset.x*d,y:this.targetOffset.y*d};var p={x:f.x-this.currentOffset.x,y:f.y-this.currentOffset.y};this.currentOffset.x+=p.x,this.currentOffset.y+=p.y,l.offsetBy(p),l.move(),this.onNextFrame((function(){return s.inertiaTick()}))}else l.offsetBy({x:this.modifiedOffset.x-this.currentOffset.x,y:this.modifiedOffset.y-this.currentOffset.y}),this.end()}},{key:"smoothEndTick",value:function(){var t=this,e=this.interaction,n=e._now()-this.t0,r=un(e).smoothEndDuration;if(n<r){var o={x:fn(n,0,this.targetOffset.x,r),y:fn(n,0,this.targetOffset.y,r)},i={x:o.x-this.currentOffset.x,y:o.y-this.currentOffset.y};this.currentOffset.x+=i.x,this.currentOffset.y+=i.y,e.offsetBy(i),e.move({skipModifiers:this.modifierCount}),this.onNextFrame((function(){return t.smoothEndTick()}))}else e.offsetBy({x:this.targetOffset.x-this.currentOffset.x,y:this.targetOffset.y-this.currentOffset.y}),this.end()}},{key:"resume",value:function(t){var e=t.pointer,n=t.event,r=t.eventTarget,o=this.interaction;o.offsetBy({x:-this.currentOffset.x,y:-this.currentOffset.y}),o.updatePointer(e,n,r,!0),o._doPhase({interaction:o,event:n,phase:"resume"}),(0,W.copyCoords)(o.coords.prev,o.coords.cur),this.stop()}},{key:"end",value:function(){this.interaction.move(),this.interaction.end(),this.stop()}},{key:"stop",value:function(){this.active=this.smoothEnd=!1,this.interaction.simulation=null,Mt.default.cancel(this.timeout)}}])&&sn(e.prototype,n),r&&sn(e,r),t}();function un(t){var e=t.interactable,n=t.prepared;return e&&e.options&&n.name&&e.options[n.name].inertia}function cn(t,e,n,r){var o=1-t;return o*o*e+2*o*t*n+t*t*r}function fn(t,e,n,r){return-n*(t/=r)*(t-2)+e}an.InertiaState=ln;var dn={id:"inertia",before:["modifiers","actions"],install:function(t){var e=t.defaults;t.usePlugin(Je.default),t.usePlugin(ke.default),t.actions.phases.inertiastart=!0,t.actions.phases.resume=!0,e.perAction.inertia={enabled:!1,resistance:10,minSpeed:100,endSpeed:10,allowResume:!0,smoothEndDuration:300}},listeners:{"interactions:new":function(t){var e=t.interaction;e.inertia=new ln(e)},"interactions:before-action-end":function(t){var e=t.interaction,n=t.event;return(!e._interacting||e.simulation||!e.inertia.start(n))&&null},"interactions:down":function(t){var e=t.interaction,n=t.eventTarget,r=e.inertia;if(r.active)for(var o=n;i.default.element(o);){if(o===e.element){r.resume(t);break}o=_.parentNode(o)}},"interactions:stop":function(t){var e=t.interaction.inertia;e.active&&e.stop()},"interactions:before-action-resume":function(t){var e=t.interaction.modification;e.stop(t),e.start(t,t.interaction.coords.cur.page),e.applyToInteraction(t)},"interactions:before-action-inertiastart":function(t){return t.interaction.modification.setAndApply(t)},"interactions:action-resume":ke.addEventModifiers,"interactions:action-inertiastart":ke.addEventModifiers,"interactions:after-action-inertiastart":function(t){return t.interaction.modification.restoreInteractionCoords(t)},"interactions:after-action-resume":function(t){return t.interaction.modification.restoreInteractionCoords(t)}}};an.default=dn;var pn={};function vn(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function hn(t,e){for(var n=0;n<e.length;n++){var r=e[n];if(t.immediatePropagationStopped)break;r(t)}}Object.defineProperty(pn,"__esModule",{value:!0}),pn.Eventable=void 0;var gn=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=void 0,this.types={},this.propagationStopped=!1,this.immediatePropagationStopped=!1,this.global=void 0,this.options=(0,j.default)({},e||{})}var e,n,r;return e=t,(n=[{key:"fire",value:function(t){var e,n=this.global;(e=this.types[t.type])&&hn(t,e),!t.propagationStopped&&n&&(e=n[t.type])&&hn(t,e)}},{key:"on",value:function(t,e){var n=(0,z.default)(t,e);for(t in n)this.types[t]=K.merge(this.types[t]||[],n[t])}},{key:"off",value:function(t,e){var n=(0,z.default)(t,e);for(t in n){var r=this.types[t];if(r&&r.length)for(var o=0;o<n[t].length;o++){var i=n[t][o],a=r.indexOf(i);-1!==a&&r.splice(a,1)}}}},{key:"getRect",value:function(t){return null}}])&&vn(e.prototype,n),r&&vn(e,r),t}();pn.Eventable=gn;var yn={};Object.defineProperty(yn,"__esModule",{value:!0}),yn.default=function(t,e){if(e.phaselessTypes[t])return!0;for(var n in e.map)if(0===t.indexOf(n)&&t.substr(n.length)in e.phases)return!0;return!1};var mn={};function bn(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function xn(t,e,n){return e&&bn(t.prototype,e),n&&bn(t,n),t}Object.defineProperty(mn,"__esModule",{value:!0}),mn.Interactable=void 0;var wn=function(){function t(n,r,o,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=void 0,this._actions=void 0,this.target=void 0,this.events=new pn.Eventable,this._context=void 0,this._win=void 0,this._doc=void 0,this._scopeEvents=void 0,this._rectChecker=void 0,this._actions=r.actions,this.target=n,this._context=r.context||o,this._win=(0,e.getWindow)((0,_.trySelector)(n)?this._context:n),this._doc=this._win.document,this._scopeEvents=i,this.set(r)}return xn(t,[{key:"_defaults",get:function(){return{base:{},perAction:{},actions:{}}}}]),xn(t,[{key:"setOnEvents",value:function(t,e){return i.default.func(e.onstart)&&this.on("".concat(t,"start"),e.onstart),i.default.func(e.onmove)&&this.on("".concat(t,"move"),e.onmove),i.default.func(e.onend)&&this.on("".concat(t,"end"),e.onend),i.default.func(e.oninertiastart)&&this.on("".concat(t,"inertiastart"),e.oninertiastart),this}},{key:"updatePerActionListeners",value:function(t,e,n){(i.default.array(e)||i.default.object(e))&&this.off(t,e),(i.default.array(n)||i.default.object(n))&&this.on(t,n)}},{key:"setPerAction",value:function(t,e){var n=this._defaults;for(var r in e){var o=r,a=this.options[t],s=e[o];"listeners"===o&&this.updatePerActionListeners(t,a.listeners,s),i.default.array(s)?a[o]=K.from(s):i.default.plainObject(s)?(a[o]=(0,j.default)(a[o]||{},(0,_e.default)(s)),i.default.object(n.perAction[o])&&"enabled"in n.perAction[o]&&(a[o].enabled=!1!==s.enabled)):i.default.bool(s)&&i.default.object(n.perAction[o])?a[o].enabled=s:a[o]=s}}},{key:"getRect",value:function(t){return t=t||(i.default.element(this.target)?this.target:null),i.default.string(this.target)&&(t=t||this._context.querySelector(this.target)),(0,_.getElementRect)(t)}},{key:"rectChecker",value:function(t){var e=this;return i.default.func(t)?(this._rectChecker=t,this.getRect=function(t){var n=(0,j.default)({},e._rectChecker(t));return"width"in n||(n.width=n.right-n.left,n.height=n.bottom-n.top),n},this):null===t?(delete this.getRect,delete this._rectChecker,this):this.getRect}},{key:"_backCompatOption",value:function(t,e){if((0,_.trySelector)(e)||i.default.object(e)){for(var n in this.options[t]=e,this._actions.map)this.options[n][t]=e;return this}return this.options[t]}},{key:"origin",value:function(t){return this._backCompatOption("origin",t)}},{key:"deltaSource",value:function(t){return"page"===t||"client"===t?(this.options.deltaSource=t,this):this.options.deltaSource}},{key:"context",value:function(){return this._context}},{key:"inContext",value:function(t){return this._context===t.ownerDocument||(0,_.nodeContains)(this._context,t)}},{key:"testIgnoreAllow",value:function(t,e,n){return!this.testIgnore(t.ignoreFrom,e,n)&&this.testAllow(t.allowFrom,e,n)}},{key:"testAllow",value:function(t,e,n){return!t||!!i.default.element(n)&&(i.default.string(t)?(0,_.matchesUpTo)(n,t,e):!!i.default.element(t)&&(0,_.nodeContains)(t,n))}},{key:"testIgnore",value:function(t,e,n){return!(!t||!i.default.element(n))&&(i.default.string(t)?(0,_.matchesUpTo)(n,t,e):!!i.default.element(t)&&(0,_.nodeContains)(t,n))}},{key:"fire",value:function(t){return this.events.fire(t),this}},{key:"_onOff",value:function(t,e,n,r){i.default.object(e)&&!i.default.array(e)&&(r=n,n=null);var o="on"===t?"add":"remove",a=(0,z.default)(e,n);for(var s in a){"wheel"===s&&(s=b.default.wheelEvent);for(var l=0;l<a[s].length;l++){var u=a[s][l];(0,yn.default)(s,this._actions)?this.events[t](s,u):i.default.string(this.target)?this._scopeEvents["".concat(o,"Delegate")](this.target,this._context,s,u,r):this._scopeEvents[o](this.target,s,u,r)}}return this}},{key:"on",value:function(t,e,n){return this._onOff("on",t,e,n)}},{key:"off",value:function(t,e,n){return this._onOff("off",t,e,n)}},{key:"set",value:function(t){var e=this._defaults;for(var n in i.default.object(t)||(t={}),this.options=(0,_e.default)(e.base),this._actions.methodDict){var r=n,o=this._actions.methodDict[r];this.options[r]={},this.setPerAction(r,(0,j.default)((0,j.default)({},e.perAction),e.actions[r])),this[o](t[r])}for(var a in t)i.default.func(this[a])&&this[a](t[a]);return this}},{key:"unset",value:function(){if(i.default.string(this.target))for(var t in this._scopeEvents.delegatedEvents)for(var e=this._scopeEvents.delegatedEvents[t],n=e.length-1;n>=0;n--){var r=e[n],o=r.selector,a=r.context,s=r.listeners;o===this.target&&a===this._context&&e.splice(n,1);for(var l=s.length-1;l>=0;l--)this._scopeEvents.removeDelegate(this.target,this._context,t,s[l][0],s[l][1])}else this._scopeEvents.remove(this.target,"all")}}]),t}();mn.Interactable=wn;var _n={};function Sn(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(_n,"__esModule",{value:!0}),_n.InteractableSet=void 0;var Pn=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.list=[],this.selectorMap={},this.scope=void 0,this.scope=e,e.addListeners({"interactable:unset":function(t){var e=t.interactable,r=e.target,o=e._context,a=i.default.string(r)?n.selectorMap[r]:r[n.scope.id],s=K.findIndex(a,(function(t){return t.context===o}));a[s]&&(a[s].context=null,a[s].interactable=null),a.splice(s,1)}})}var e,n,r;return e=t,(n=[{key:"new",value:function(t,e){e=(0,j.default)(e||{},{actions:this.scope.actions});var n=new this.scope.Interactable(t,e,this.scope.document,this.scope.events),r={context:n._context,interactable:n};return this.scope.addDocument(n._doc),this.list.push(n),i.default.string(t)?(this.selectorMap[t]||(this.selectorMap[t]=[]),this.selectorMap[t].push(r)):(n.target[this.scope.id]||Object.defineProperty(t,this.scope.id,{value:[],configurable:!0}),t[this.scope.id].push(r)),this.scope.fire("interactable:new",{target:t,options:e,interactable:n,win:this.scope._win}),n}},{key:"get",value:function(t,e){var n=e&&e.context||this.scope.document,r=i.default.string(t),o=r?this.selectorMap[t]:t[this.scope.id];if(!o)return null;var a=K.find(o,(function(e){return e.context===n&&(r||e.interactable.inContext(t))}));return a&&a.interactable}},{key:"forEachMatch",value:function(t,e){for(var n=0;n<this.list.length;n++){var r=this.list[n],o=void 0;if((i.default.string(r.target)?i.default.element(t)&&_.matchesSelector(t,r.target):t===r.target)&&r.inContext(t)&&(o=e(r)),void 0!==o)return o}}}])&&Sn(e.prototype,n),r&&Sn(e,r),t}();_n.InteractableSet=Pn;var On={};function En(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Tn(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return Mn(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Mn(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Mn(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}Object.defineProperty(On,"__esModule",{value:!0}),On.default=void 0;var jn=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.currentTarget=void 0,this.originalEvent=void 0,this.type=void 0,this.originalEvent=e,(0,F.default)(this,e)}var e,n,r;return e=t,(n=[{key:"preventOriginalDefault",value:function(){this.originalEvent.preventDefault()}},{key:"stopPropagation",value:function(){this.originalEvent.stopPropagation()}},{key:"stopImmediatePropagation",value:function(){this.originalEvent.stopImmediatePropagation()}}])&&En(e.prototype,n),r&&En(e,r),t}();function kn(t){if(!i.default.object(t))return{capture:!!t,passive:!1};var e=(0,j.default)({},t);return e.capture=!!t.capture,e.passive=!!t.passive,e}var In={id:"events",install:function(t){var e=[],n={},r=[],o={add:a,remove:s,addDelegate:function(t,e,o,i,s){var c=kn(s);if(!n[o]){n[o]=[];for(var f=0;f<r.length;f++){var d=r[f];a(d,o,l),a(d,o,u,!0)}}var p=n[o],v=K.find(p,(function(n){return n.selector===t&&n.context===e}));v||(v={selector:t,context:e,listeners:[]},p.push(v));v.listeners.push([i,c])},removeDelegate:function(t,e,r,o,i){var a,c=kn(i),f=n[r],d=!1;if(!f)return;for(a=f.length-1;a>=0;a--){var p=f[a];if(p.selector===t&&p.context===e){for(var v=p.listeners,h=v.length-1;h>=0;h--){var g=Tn(v[h],2),y=g[0],m=g[1],b=m.capture,x=m.passive;if(y===o&&b===c.capture&&x===c.passive){v.splice(h,1),v.length||(f.splice(a,1),s(e,r,l),s(e,r,u,!0)),d=!0;break}}if(d)break}}},delegateListener:l,delegateUseCapture:u,delegatedEvents:n,documents:r,targets:e,supportsOptions:!1,supportsPassive:!1};function a(t,n,r,i){var a=kn(i),s=K.find(e,(function(e){return e.eventTarget===t}));s||(s={eventTarget:t,events:{}},e.push(s)),s.events[n]||(s.events[n]=[]),t.addEventListener&&!K.contains(s.events[n],r)&&(t.addEventListener(n,r,o.supportsOptions?a:a.capture),s.events[n].push(r))}function s(t,n,r,i){var a=kn(i),l=K.findIndex(e,(function(e){return e.eventTarget===t})),u=e[l];if(u&&u.events)if("all"!==n){var c=!1,f=u.events[n];if(f){if("all"===r){for(var d=f.length-1;d>=0;d--)s(t,n,f[d],a);return}for(var p=0;p<f.length;p++)if(f[p]===r){t.removeEventListener(n,r,o.supportsOptions?a:a.capture),f.splice(p,1),0===f.length&&(delete u.events[n],c=!0);break}}c&&!Object.keys(u.events).length&&e.splice(l,1)}else for(n in u.events)u.events.hasOwnProperty(n)&&s(t,n,"all")}function l(t,e){for(var r=kn(e),o=new jn(t),a=n[t.type],s=Tn(W.getEventTargets(t),1)[0],l=s;i.default.element(l);){for(var u=0;u<a.length;u++){var c=a[u],f=c.selector,d=c.context;if(_.matchesSelector(l,f)&&_.nodeContains(d,s)&&_.nodeContains(d,l)){var p=c.listeners;o.currentTarget=l;for(var v=0;v<p.length;v++){var h=Tn(p[v],2),g=h[0],y=h[1],m=y.capture,b=y.passive;m===r.capture&&b===r.passive&&g(o)}}}l=_.parentNode(l)}}function u(t){return l(t,!0)}return t.document.createElement("div").addEventListener("test",null,{get capture(){return o.supportsOptions=!0},get passive(){return o.supportsPassive=!0}}),t.events=o,o}};On.default=In;var Dn={};Object.defineProperty(Dn,"__esModule",{value:!0}),Dn.createInteractStatic=function(t){var e=function e(n,r){var o=t.interactables.get(n,r);return o||((o=t.interactables.new(n,r)).events.global=e.globalEvents),o};return e.getPointerAverage=W.pointerAverage,e.getTouchBBox=W.touchBBox,e.getTouchDistance=W.touchDistance,e.getTouchAngle=W.touchAngle,e.getElementRect=_.getElementRect,e.getElementClientRect=_.getElementClientRect,e.matchesSelector=_.matchesSelector,e.closest=_.closest,e.globalEvents={},e.version=void 0,e.scope=t,e.use=function(t,e){return this.scope.usePlugin(t,e),this},e.isSet=function(t,e){return!!this.scope.interactables.get(t,e&&e.context)},e.on=function(t,e,n){if(i.default.string(t)&&-1!==t.search(" ")&&(t=t.trim().split(/ +/)),i.default.array(t)){for(var r=0;r<t.length;r++){var o=t[r];this.on(o,e,n)}return this}if(i.default.object(t)){for(var a in t)this.on(a,t[a],e);return this}return(0,yn.default)(t,this.scope.actions)?this.globalEvents[t]?this.globalEvents[t].push(e):this.globalEvents[t]=[e]:this.scope.events.add(this.scope.document,t,e,{options:n}),this},e.off=function(t,e,n){if(i.default.string(t)&&-1!==t.search(" ")&&(t=t.trim().split(/ +/)),i.default.array(t)){for(var r=0;r<t.length;r++){var o=t[r];this.off(o,e,n)}return this}if(i.default.object(t)){for(var a in t)this.off(a,t[a],e);return this}var s;(0,yn.default)(t,this.scope.actions)?t in this.globalEvents&&-1!==(s=this.globalEvents[t].indexOf(e))&&this.globalEvents[t].splice(s,1):this.scope.events.remove(this.scope.document,t,e,n);return this},e.debug=function(){return this.scope},e.supportsTouch=function(){return b.default.supportsTouch},e.supportsPointerEvent=function(){return b.default.supportsPointerEvent},e.stop=function(){for(var t=0;t<this.scope.interactions.list.length;t++){this.scope.interactions.list[t].stop()}return this},e.pointerMoveTolerance=function(t){return i.default.number(t)?(this.scope.interactions.pointerMoveTolerance=t,this):this.scope.interactions.pointerMoveTolerance},e.addDocument=function(t,e){this.scope.addDocument(t,e)},e.removeDocument=function(t){this.scope.removeDocument(t)},e};var An={};Object.defineProperty(An,"__esModule",{value:!0}),An.default=void 0;var zn={methodOrder:["simulationResume","mouseOrPen","hasPointer","idle"],search:function(t){for(var e=0;e<zn.methodOrder.length;e++){var n;n=zn.methodOrder[e];var r=zn[n](t);if(r)return r}return null},simulationResume:function(t){var e=t.pointerType,n=t.eventType,r=t.eventTarget,o=t.scope;if(!/down|start/i.test(n))return null;for(var i=0;i<o.interactions.list.length;i++){var a=o.interactions.list[i],s=r;if(a.simulation&&a.simulation.allowResume&&a.pointerType===e)for(;s;){if(s===a.element)return a;s=_.parentNode(s)}}return null},mouseOrPen:function(t){var e,n=t.pointerId,r=t.pointerType,o=t.eventType,i=t.scope;if("mouse"!==r&&"pen"!==r)return null;for(var a=0;a<i.interactions.list.length;a++){var s=i.interactions.list[a];if(s.pointerType===r){if(s.simulation&&!Cn(s,n))continue;if(s.interacting())return s;e||(e=s)}}if(e)return e;for(var l=0;l<i.interactions.list.length;l++){var u=i.interactions.list[l];if(!(u.pointerType!==r||/down/i.test(o)&&u.simulation))return u}return null},hasPointer:function(t){for(var e=t.pointerId,n=t.scope,r=0;r<n.interactions.list.length;r++){var o=n.interactions.list[r];if(Cn(o,e))return o}return null},idle:function(t){for(var e=t.pointerType,n=t.scope,r=0;r<n.interactions.list.length;r++){var o=n.interactions.list[r];if(1===o.pointers.length){var i=o.interactable;if(i&&(!i.options.gesture||!i.options.gesture.enabled))continue}else if(o.pointers.length>=2)continue;if(!o.interacting()&&e===o.pointerType)return o}return null}};function Cn(t,e){return t.pointers.some((function(t){return t.id===e}))}var Rn=zn;An.default=Rn;var Fn={};function Xn(t){return(Xn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Yn(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return Wn(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Wn(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Wn(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function Ln(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Bn(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Un(t,e){return(Un=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Nn(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=qn(t);if(e){var o=qn(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Vn(this,n)}}function Vn(t,e){return!e||"object"!==Xn(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function qn(t){return(qn=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}Object.defineProperty(Fn,"__esModule",{value:!0}),Fn.default=void 0;var $n=["pointerDown","pointerMove","pointerUp","updatePointer","removePointer","windowBlur"];function Gn(t,e){return function(n){var r=e.interactions.list,o=W.getPointerType(n),i=Yn(W.getEventTargets(n),2),a=i[0],s=i[1],l=[];if(/^touch/.test(n.type)){e.prevTouchTime=e.now();for(var u=0;u<n.changedTouches.length;u++){var c=n.changedTouches[u],f={pointer:c,pointerId:W.getPointerId(c),pointerType:o,eventType:n.type,eventTarget:a,curEventTarget:s,scope:e},d=Hn(f);l.push([f.pointer,f.eventTarget,f.curEventTarget,d])}}else{var p=!1;if(!b.default.supportsPointerEvent&&/mouse/.test(n.type)){for(var v=0;v<r.length&&!p;v++)p="mouse"!==r[v].pointerType&&r[v].pointerIsDown;p=p||e.now()-e.prevTouchTime<500||0===n.timeStamp}if(!p){var h={pointer:n,pointerId:W.getPointerId(n),pointerType:o,eventType:n.type,curEventTarget:s,eventTarget:a,scope:e},g=Hn(h);l.push([h.pointer,h.eventTarget,h.curEventTarget,g])}}for(var y=0;y<l.length;y++){var m=Yn(l[y],4),x=m[0],w=m[1],_=m[2];m[3][t](x,n,w,_)}}}function Hn(t){var e=t.pointerType,n=t.scope,r={interaction:An.default.search(t),searchDetails:t};return n.fire("interactions:find",r),r.interaction||n.interactions.new({pointerType:e})}function Kn(t,e){var n=t.doc,r=t.scope,o=t.options,i=r.interactions.docEvents,a=r.events,s=a[e];for(var l in r.browser.isIOS&&!o.events&&(o.events={passive:!1}),a.delegatedEvents)s(n,l,a.delegateListener),s(n,l,a.delegateUseCapture,!0);for(var u=o&&o.events,c=0;c<i.length;c++){var f=i[c];s(n,f.type,f.listener,u)}}var Zn={id:"core/interactions",install:function(t){for(var e={},n=0;n<$n.length;n++){var r=$n[n];e[r]=Gn(r,t)}var o,i=b.default.pEventTypes;function a(){for(var e=0;e<t.interactions.list.length;e++){var n=t.interactions.list[e];if(n.pointerIsDown&&"touch"===n.pointerType&&!n._interacting)for(var r=function(){var e=n.pointers[o];t.documents.some((function(t){var n=t.doc;return(0,_.nodeContains)(n,e.downTarget)}))||n.removePointer(e.pointer,e.event)},o=0;o<n.pointers.length;o++){r()}}}(o=h.default.PointerEvent?[{type:i.down,listener:a},{type:i.down,listener:e.pointerDown},{type:i.move,listener:e.pointerMove},{type:i.up,listener:e.pointerUp},{type:i.cancel,listener:e.pointerUp}]:[{type:"mousedown",listener:e.pointerDown},{type:"mousemove",listener:e.pointerMove},{type:"mouseup",listener:e.pointerUp},{type:"touchstart",listener:a},{type:"touchstart",listener:e.pointerDown},{type:"touchmove",listener:e.pointerMove},{type:"touchend",listener:e.pointerUp},{type:"touchcancel",listener:e.pointerUp}]).push({type:"blur",listener:function(e){for(var n=0;n<t.interactions.list.length;n++){t.interactions.list[n].documentBlur(e)}}}),t.prevTouchTime=0,t.Interaction=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Un(t,e)}(a,e);var n,r,o,i=Nn(a);function a(){return Ln(this,a),i.apply(this,arguments)}return n=a,(r=[{key:"_now",value:function(){return t.now()}},{key:"pointerMoveTolerance",get:function(){return t.interactions.pointerMoveTolerance},set:function(e){t.interactions.pointerMoveTolerance=e}}])&&Bn(n.prototype,r),o&&Bn(n,o),a}(qe.default),t.interactions={list:[],new:function(e){e.scopeFire=function(e,n){return t.fire(e,n)};var n=new t.Interaction(e);return t.interactions.list.push(n),n},listeners:e,docEvents:o,pointerMoveTolerance:1},t.usePlugin(se.default)},listeners:{"scope:add-document":function(t){return Kn(t,"add")},"scope:remove-document":function(t){return Kn(t,"remove")},"interactable:unset":function(t,e){for(var n=t.interactable,r=e.interactions.list.length-1;r>=0;r--){var o=e.interactions.list[r];o.interactable===n&&(o.stop(),e.fire("interactions:destroy",{interaction:o}),o.destroy(),e.interactions.list.length>2&&e.interactions.list.splice(r,1))}}},onDocSignal:Kn,doOnInteractions:Gn,methodNames:$n};Fn.default=Zn;var Jn={};function Qn(t){return(Qn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function tr(t,e,n){return(tr="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=or(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function er(t,e){return(er=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function nr(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=or(t);if(e){var o=or(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return rr(this,n)}}function rr(t,e){return!e||"object"!==Qn(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function or(t){return(or=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function ir(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ar(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function sr(t,e,n){return e&&ar(t.prototype,e),n&&ar(t,n),t}Object.defineProperty(Jn,"__esModule",{value:!0}),Jn.initScope=ur,Jn.Scope=void 0;var lr=function(){function t(){var e=this;ir(this,t),this.id="__interact_scope_".concat(Math.floor(100*Math.random())),this.isInitialized=!1,this.listenerMaps=[],this.browser=b.default,this.defaults=(0,_e.default)(Ae.defaults),this.Eventable=pn.Eventable,this.actions={map:{},phases:{start:!0,move:!0,end:!0},methodDict:{},phaselessTypes:{}},this.interactStatic=(0,Dn.createInteractStatic)(this),this.InteractEvent=ze.InteractEvent,this.Interactable=void 0,this.interactables=new _n.InteractableSet(this),this._win=void 0,this.document=void 0,this.window=void 0,this.documents=[],this._plugins={list:[],map:{}},this.onWindowUnload=function(t){return e.removeDocument(t.target)};var n=this;this.Interactable=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&er(t,e)}(r,t);var e=nr(r);function r(){return ir(this,r),e.apply(this,arguments)}return sr(r,[{key:"set",value:function(t){return tr(or(r.prototype),"set",this).call(this,t),n.fire("interactable:set",{options:t,interactable:this}),this}},{key:"unset",value:function(){tr(or(r.prototype),"unset",this).call(this),n.interactables.list.splice(n.interactables.list.indexOf(this),1),n.fire("interactable:unset",{interactable:this})}},{key:"_defaults",get:function(){return n.defaults}}]),r}(mn.Interactable)}return sr(t,[{key:"addListeners",value:function(t,e){this.listenerMaps.push({id:e,map:t})}},{key:"fire",value:function(t,e){for(var n=0;n<this.listenerMaps.length;n++){var r=this.listenerMaps[n].map[t];if(r&&!1===r(e,this,t))return!1}}},{key:"init",value:function(t){return this.isInitialized?this:ur(this,t)}},{key:"pluginIsInstalled",value:function(t){return this._plugins.map[t.id]||-1!==this._plugins.list.indexOf(t)}},{key:"usePlugin",value:function(t,e){if(!this.isInitialized)return this;if(this.pluginIsInstalled(t))return this;if(t.id&&(this._plugins.map[t.id]=t),this._plugins.list.push(t),t.install&&t.install(this,e),t.listeners&&t.before){for(var n=0,r=this.listenerMaps.length,o=t.before.reduce((function(t,e){return t[e]=!0,t[cr(e)]=!0,t}),{});n<r;n++){var i=this.listenerMaps[n].id;if(o[i]||o[cr(i)])break}this.listenerMaps.splice(n,0,{id:t.id,map:t.listeners})}else t.listeners&&this.listenerMaps.push({id:t.id,map:t.listeners});return this}},{key:"addDocument",value:function(t,n){if(-1!==this.getDocIndex(t))return!1;var r=e.getWindow(t);n=n?(0,j.default)({},n):{},this.documents.push({doc:t,options:n}),this.events.documents.push(t),t!==this.document&&this.events.add(r,"unload",this.onWindowUnload),this.fire("scope:add-document",{doc:t,window:r,scope:this,options:n})}},{key:"removeDocument",value:function(t){var n=this.getDocIndex(t),r=e.getWindow(t),o=this.documents[n].options;this.events.remove(r,"unload",this.onWindowUnload),this.documents.splice(n,1),this.events.documents.splice(n,1),this.fire("scope:remove-document",{doc:t,window:r,scope:this,options:o})}},{key:"getDocIndex",value:function(t){for(var e=0;e<this.documents.length;e++)if(this.documents[e].doc===t)return e;return-1}},{key:"getDocOptions",value:function(t){var e=this.getDocIndex(t);return-1===e?null:this.documents[e].options}},{key:"now",value:function(){return(this.window.Date||Date).now()}}]),t}();function ur(t,n){return t.isInitialized=!0,e.init(n),h.default.init(n),b.default.init(n),Mt.default.init(n),t.window=n,t.document=n.document,t.usePlugin(Fn.default),t.usePlugin(On.default),t}function cr(t){return t&&t.replace(/\/.*$/,"")}Jn.Scope=lr;var fr={};function dr(t){return(dr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(fr,"__esModule",{value:!0}),fr.init=fr.default=void 0;var pr=new Jn.Scope,vr=pr.interactStatic;fr.default=vr;var hr=function(t){return pr.init(t)};fr.init=hr,"object"===("undefined"==typeof window?"undefined":dr(window))&&window&&hr(window);var gr={};Object.defineProperty(gr,"__esModule",{value:!0}),gr.default=void 0;gr.default=function(){};var yr={};Object.defineProperty(yr,"__esModule",{value:!0}),yr.default=void 0;yr.default=function(){};var mr={};function br(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return xr(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return xr(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function xr(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}Object.defineProperty(mr,"__esModule",{value:!0}),mr.default=void 0;mr.default=function(t){var e=[["x","y"],["left","top"],["right","bottom"],["width","height"]].filter((function(e){var n=br(e,2),r=n[0],o=n[1];return r in t||o in t})),n=function(n,r){for(var o=t.range,i=t.limits,a=void 0===i?{left:-1/0,right:1/0,top:-1/0,bottom:1/0}:i,s=t.offset,l=void 0===s?{x:0,y:0}:s,u={range:o,grid:t,x:null,y:null},c=0;c<e.length;c++){var f=br(e[c],2),d=f[0],p=f[1],v=Math.round((n-l.x)/t[d]),h=Math.round((r-l.y)/t[p]);u[d]=Math.max(a.left,Math.min(a.right,v*t[d]+l.x)),u[p]=Math.max(a.top,Math.min(a.bottom,h*t[p]+l.y))}return u};return n.grid=t,n.coordFields=e,n};var wr={};Object.defineProperty(wr,"__esModule",{value:!0}),Object.defineProperty(wr,"edgeTarget",{enumerable:!0,get:function(){return gr.default}}),Object.defineProperty(wr,"elements",{enumerable:!0,get:function(){return yr.default}}),Object.defineProperty(wr,"grid",{enumerable:!0,get:function(){return mr.default}});var _r={};Object.defineProperty(_r,"__esModule",{value:!0}),_r.default=void 0;var Sr={id:"snappers",install:function(t){var e=t.interactStatic;e.snappers=(0,j.default)(e.snappers||{},wr),e.createSnapGrid=e.snappers.grid}};_r.default=Sr;var Pr={};function Or(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Er(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Or(Object(n),!0).forEach((function(e){Tr(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Or(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Tr(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(Pr,"__esModule",{value:!0}),Pr.aspectRatio=Pr.default=void 0;var Mr={start:function(t){var e=t.state,n=t.rect,r=t.edges,o=t.pageCoords,i=e.options.ratio,a=e.options,s=a.equalDelta,l=a.modifiers;"preserve"===i&&(i=n.width/n.height),e.startCoords=(0,j.default)({},o),e.startRect=(0,j.default)({},n),e.ratio=i,e.equalDelta=s;var u=e.linkedEdges={top:r.top||r.left&&!r.bottom,left:r.left||r.top&&!r.right,bottom:r.bottom||r.right&&!r.top,right:r.right||r.bottom&&!r.left};if(e.xIsPrimaryAxis=!(!r.left&&!r.right),e.equalDelta)e.edgeSign=(u.left?1:-1)*(u.top?1:-1);else{var c=e.xIsPrimaryAxis?u.top:u.left;e.edgeSign=c?-1:1}if((0,j.default)(t.edges,u),l&&l.length){var f=new Se.default(t.interaction);f.copyFrom(t.interaction.modification),f.prepareStates(l),e.subModification=f,f.startAll(Er({},t))}},set:function(t){var e=t.state,n=t.rect,r=t.coords,o=(0,j.default)({},r),i=e.equalDelta?jr:kr;if(i(e,e.xIsPrimaryAxis,r,n),!e.subModification)return null;var a=(0,j.default)({},n);(0,k.addEdges)(e.linkedEdges,a,{x:r.x-o.x,y:r.y-o.y});var s=e.subModification.setAll(Er(Er({},t),{},{rect:a,edges:e.linkedEdges,pageCoords:r,prevCoords:r,prevRect:a})),l=s.delta;s.changed&&(i(e,Math.abs(l.x)>Math.abs(l.y),s.coords,s.rect),(0,j.default)(r,s.coords));return s.eventProps},defaults:{ratio:"preserve",equalDelta:!1,modifiers:[],enabled:!1}};function jr(t,e,n){var r=t.startCoords,o=t.edgeSign;e?n.y=r.y+(n.x-r.x)*o:n.x=r.x+(n.y-r.y)*o}function kr(t,e,n,r){var o=t.startRect,i=t.startCoords,a=t.ratio,s=t.edgeSign;if(e){var l=r.width/a;n.y=i.y+(l-o.height)*s}else{var u=r.height*a;n.x=i.x+(u-o.width)*s}}Pr.aspectRatio=Mr;var Ir=(0,ke.makeModifier)(Mr,"aspectRatio");Pr.default=Ir;var Dr={};Object.defineProperty(Dr,"__esModule",{value:!0}),Dr.default=void 0;var Ar=function(){};Ar._defaults={};var zr=Ar;Dr.default=zr;var Cr={};Object.defineProperty(Cr,"__esModule",{value:!0}),Object.defineProperty(Cr,"default",{enumerable:!0,get:function(){return Dr.default}});var Rr={};function Fr(t,e,n){return i.default.func(t)?k.resolveRectLike(t,e.interactable,e.element,[n.x,n.y,e]):k.resolveRectLike(t,e.interactable,e.element)}Object.defineProperty(Rr,"__esModule",{value:!0}),Rr.getRestrictionRect=Fr,Rr.restrict=Rr.default=void 0;var Xr={start:function(t){var e=t.rect,n=t.startOffset,r=t.state,o=t.interaction,i=t.pageCoords,a=r.options,s=a.elementRect,l=(0,j.default)({left:0,top:0,right:0,bottom:0},a.offset||{});if(e&&s){var u=Fr(a.restriction,o,i);if(u){var c=u.right-u.left-e.width,f=u.bottom-u.top-e.height;c<0&&(l.left+=c,l.right+=c),f<0&&(l.top+=f,l.bottom+=f)}l.left+=n.left-e.width*s.left,l.top+=n.top-e.height*s.top,l.right+=n.right-e.width*(1-s.right),l.bottom+=n.bottom-e.height*(1-s.bottom)}r.offset=l},set:function(t){var e=t.coords,n=t.interaction,r=t.state,o=r.options,i=r.offset,a=Fr(o.restriction,n,e);if(a){var s=k.xywhToTlbr(a);e.x=Math.max(Math.min(s.right-i.right,e.x),s.left+i.left),e.y=Math.max(Math.min(s.bottom-i.bottom,e.y),s.top+i.top)}},defaults:{restriction:null,elementRect:null,offset:null,endOnly:!1,enabled:!1}};Rr.restrict=Xr;var Yr=(0,ke.makeModifier)(Xr,"restrict");Rr.default=Yr;var Wr={};Object.defineProperty(Wr,"__esModule",{value:!0}),Wr.restrictEdges=Wr.default=void 0;var Lr={top:1/0,left:1/0,bottom:-1/0,right:-1/0},Br={top:-1/0,left:-1/0,bottom:1/0,right:1/0};function Ur(t,e){for(var n=["top","left","bottom","right"],r=0;r<n.length;r++){var o=n[r];o in t||(t[o]=e[o])}return t}var Nr={noInner:Lr,noOuter:Br,start:function(t){var e,n=t.interaction,r=t.startOffset,o=t.state,i=o.options;if(i){var a=(0,Rr.getRestrictionRect)(i.offset,n,n.coords.start.page);e=k.rectToXY(a)}e=e||{x:0,y:0},o.offset={top:e.y+r.top,left:e.x+r.left,bottom:e.y-r.bottom,right:e.x-r.right}},set:function(t){var e=t.coords,n=t.edges,r=t.interaction,o=t.state,i=o.offset,a=o.options;if(n){var s=(0,j.default)({},e),l=(0,Rr.getRestrictionRect)(a.inner,r,s)||{},u=(0,Rr.getRestrictionRect)(a.outer,r,s)||{};Ur(l,Lr),Ur(u,Br),n.top?e.y=Math.min(Math.max(u.top+i.top,s.y),l.top+i.top):n.bottom&&(e.y=Math.max(Math.min(u.bottom+i.bottom,s.y),l.bottom+i.bottom)),n.left?e.x=Math.min(Math.max(u.left+i.left,s.x),l.left+i.left):n.right&&(e.x=Math.max(Math.min(u.right+i.right,s.x),l.right+i.right))}},defaults:{inner:null,outer:null,offset:null,endOnly:!1,enabled:!1}};Wr.restrictEdges=Nr;var Vr=(0,ke.makeModifier)(Nr,"restrictEdges");Wr.default=Vr;var qr={};Object.defineProperty(qr,"__esModule",{value:!0}),qr.restrictRect=qr.default=void 0;var $r=(0,j.default)({get elementRect(){return{top:0,left:0,bottom:1,right:1}},set elementRect(t){}},Rr.restrict.defaults),Gr={start:Rr.restrict.start,set:Rr.restrict.set,defaults:$r};qr.restrictRect=Gr;var Hr=(0,ke.makeModifier)(Gr,"restrictRect");qr.default=Hr;var Kr={};Object.defineProperty(Kr,"__esModule",{value:!0}),Kr.restrictSize=Kr.default=void 0;var Zr={width:-1/0,height:-1/0},Jr={width:1/0,height:1/0};var Qr={start:function(t){return Wr.restrictEdges.start(t)},set:function(t){var e=t.interaction,n=t.state,r=t.rect,o=t.edges,i=n.options;if(o){var a=k.tlbrToXywh((0,Rr.getRestrictionRect)(i.min,e,t.coords))||Zr,s=k.tlbrToXywh((0,Rr.getRestrictionRect)(i.max,e,t.coords))||Jr;n.options={endOnly:i.endOnly,inner:(0,j.default)({},Wr.restrictEdges.noInner),outer:(0,j.default)({},Wr.restrictEdges.noOuter)},o.top?(n.options.inner.top=r.bottom-a.height,n.options.outer.top=r.bottom-s.height):o.bottom&&(n.options.inner.bottom=r.top+a.height,n.options.outer.bottom=r.top+s.height),o.left?(n.options.inner.left=r.right-a.width,n.options.outer.left=r.right-s.width):o.right&&(n.options.inner.right=r.left+a.width,n.options.outer.right=r.left+s.width),Wr.restrictEdges.set(t),n.options=i}},defaults:{min:null,max:null,endOnly:!1,enabled:!1}};Kr.restrictSize=Qr;var to=(0,ke.makeModifier)(Qr,"restrictSize");Kr.default=to;var eo={};Object.defineProperty(eo,"__esModule",{value:!0}),Object.defineProperty(eo,"default",{enumerable:!0,get:function(){return Dr.default}});var no={};Object.defineProperty(no,"__esModule",{value:!0}),no.snap=no.default=void 0;var ro={start:function(t){var e,n=t.interaction,r=t.interactable,o=t.element,i=t.rect,a=t.state,s=t.startOffset,l=a.options,u=l.offsetWithOrigin?function(t){var e=t.interaction.element;return(0,k.rectToXY)((0,k.resolveRectLike)(t.state.options.origin,null,null,[e]))||(0,A.default)(t.interactable,e,t.interaction.prepared.name)}(t):{x:0,y:0};if("startCoords"===l.offset)e={x:n.coords.start.page.x,y:n.coords.start.page.y};else{var c=(0,k.resolveRectLike)(l.offset,r,o,[n]);(e=(0,k.rectToXY)(c)||{x:0,y:0}).x+=u.x,e.y+=u.y}var f=l.relativePoints;a.offsets=i&&f&&f.length?f.map((function(t,n){return{index:n,relativePoint:t,x:s.left-i.width*t.x+e.x,y:s.top-i.height*t.y+e.y}})):[(0,j.default)({index:0,relativePoint:null},e)]},set:function(t){var e=t.interaction,n=t.coords,r=t.state,o=r.options,a=r.offsets,s=(0,A.default)(e.interactable,e.element,e.prepared.name),l=(0,j.default)({},n),u=[];o.offsetWithOrigin||(l.x-=s.x,l.y-=s.y);for(var c=0;c<a.length;c++)for(var f=a[c],d=l.x-f.x,p=l.y-f.y,v=0,h=o.targets.length;v<h;v++){var g=o.targets[v],y=void 0;(y=i.default.func(g)?g(d,p,e._proxy,f,v):g)&&u.push({x:(i.default.number(y.x)?y.x:d)+f.x,y:(i.default.number(y.y)?y.y:p)+f.y,range:i.default.number(y.range)?y.range:o.range,source:g,index:v,offset:f})}for(var m={target:null,inRange:!1,distance:0,range:0,delta:{x:0,y:0}},b=0;b<u.length;b++){var x=u[b],w=x.range,_=x.x-l.x,S=x.y-l.y,P=(0,R.default)(_,S),O=P<=w;w===1/0&&m.inRange&&m.range!==1/0&&(O=!1),m.target&&!(O?m.inRange&&w!==1/0?P/w<m.distance/m.range:w===1/0&&m.range!==1/0||P<m.distance:!m.inRange&&P<m.distance)||(m.target=x,m.distance=P,m.range=w,m.inRange=O,m.delta.x=_,m.delta.y=S)}return m.inRange&&(n.x=m.target.x,n.y=m.target.y),r.closest=m,m},defaults:{range:1/0,targets:null,offset:null,offsetWithOrigin:!0,origin:null,relativePoints:null,endOnly:!1,enabled:!1}};no.snap=ro;var oo=(0,ke.makeModifier)(ro,"snap");no.default=oo;var io={};function ao(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return so(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return so(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function so(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}Object.defineProperty(io,"__esModule",{value:!0}),io.snapSize=io.default=void 0;var lo={start:function(t){var e=t.state,n=t.edges,r=e.options;if(!n)return null;t.state={options:{targets:null,relativePoints:[{x:n.left?0:1,y:n.top?0:1}],offset:r.offset||"self",origin:{x:0,y:0},range:r.range}},e.targetFields=e.targetFields||[["width","height"],["x","y"]],no.snap.start(t),e.offsets=t.state.offsets,t.state=e},set:function(t){var e=t.interaction,n=t.state,r=t.coords,o=n.options,a=n.offsets,s={x:r.x-a[0].x,y:r.y-a[0].y};n.options=(0,j.default)({},o),n.options.targets=[];for(var l=0;l<(o.targets||[]).length;l++){var u=(o.targets||[])[l],c=void 0;if(c=i.default.func(u)?u(s.x,s.y,e):u){for(var f=0;f<n.targetFields.length;f++){var d=ao(n.targetFields[f],2),p=d[0],v=d[1];if(p in c||v in c){c.x=c[p],c.y=c[v];break}}n.options.targets.push(c)}}var h=no.snap.set(t);return n.options=o,h},defaults:{range:1/0,targets:null,offset:null,endOnly:!1,enabled:!1}};io.snapSize=lo;var uo=(0,ke.makeModifier)(lo,"snapSize");io.default=uo;var co={};Object.defineProperty(co,"__esModule",{value:!0}),co.snapEdges=co.default=void 0;var fo={start:function(t){var e=t.edges;return e?(t.state.targetFields=t.state.targetFields||[[e.left?"left":"right",e.top?"top":"bottom"]],io.snapSize.start(t)):null},set:io.snapSize.set,defaults:(0,j.default)((0,_e.default)(io.snapSize.defaults),{targets:null,range:null,offset:{x:0,y:0}})};co.snapEdges=fo;var po=(0,ke.makeModifier)(fo,"snapEdges");co.default=po;var vo={};Object.defineProperty(vo,"__esModule",{value:!0}),Object.defineProperty(vo,"default",{enumerable:!0,get:function(){return Dr.default}});var ho={};Object.defineProperty(ho,"__esModule",{value:!0}),Object.defineProperty(ho,"default",{enumerable:!0,get:function(){return Dr.default}});var go={};Object.defineProperty(go,"__esModule",{value:!0}),go.default=void 0;var yo={aspectRatio:Pr.default,restrictEdges:Wr.default,restrict:Rr.default,restrictRect:qr.default,restrictSize:Kr.default,snapEdges:co.default,snap:no.default,snapSize:io.default,spring:vo.default,avoid:Cr.default,transform:ho.default,rubberband:eo.default};go.default=yo;var mo={};Object.defineProperty(mo,"__esModule",{value:!0}),mo.default=void 0;var bo={id:"modifiers",install:function(t){var e=t.interactStatic;for(var n in t.usePlugin(ke.default),t.usePlugin(_r.default),e.modifiers=go.default,go.default){var r=go.default[n],o=r._defaults,i=r._methods;o._methods=i,t.defaults.perAction[n]=o}}};mo.default=bo;var xo={};Object.defineProperty(xo,"__esModule",{value:!0}),xo.default=void 0;xo.default={};var wo={};function _o(t){return(_o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function So(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Po(t,e){return(Po=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Oo(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Mo(t);if(e){var o=Mo(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Eo(this,n)}}function Eo(t,e){return!e||"object"!==_o(e)&&"function"!=typeof e?To(t):e}function To(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Mo(t){return(Mo=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}Object.defineProperty(wo,"__esModule",{value:!0}),wo.PointerEvent=wo.default=void 0;var jo=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Po(t,e)}(i,t);var e,n,r,o=Oo(i);function i(t,e,n,r,a,s){var l;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(l=o.call(this,a)).type=void 0,l.originalEvent=void 0,l.pointerId=void 0,l.pointerType=void 0,l.double=void 0,l.pageX=void 0,l.pageY=void 0,l.clientX=void 0,l.clientY=void 0,l.dt=void 0,l.eventable=void 0,W.pointerExtend(To(l),n),n!==e&&W.pointerExtend(To(l),e),l.timeStamp=s,l.originalEvent=n,l.type=t,l.pointerId=W.getPointerId(e),l.pointerType=W.getPointerType(e),l.target=r,l.currentTarget=null,"tap"===t){var u=a.getPointerIndex(e);l.dt=l.timeStamp-a.pointers[u].downTime;var c=l.timeStamp-a.tapTime;l.double=!!(a.prevTap&&"doubletap"!==a.prevTap.type&&a.prevTap.target===l.target&&c<500)}else"doubletap"===t&&(l.dt=e.timeStamp-a.tapTime);return l}return e=i,(n=[{key:"_subtractOrigin",value:function(t){var e=t.x,n=t.y;return this.pageX-=e,this.pageY-=n,this.clientX-=e,this.clientY-=n,this}},{key:"_addOrigin",value:function(t){var e=t.x,n=t.y;return this.pageX+=e,this.pageY+=n,this.clientX+=e,this.clientY+=n,this}},{key:"preventDefault",value:function(){this.originalEvent.preventDefault()}}])&&So(e.prototype,n),r&&So(e,r),i}($.BaseEvent);wo.PointerEvent=wo.default=jo;var ko={};Object.defineProperty(ko,"__esModule",{value:!0}),ko.default=void 0;var Io={id:"pointer-events/base",before:["inertia","modifiers","auto-start","actions"],install:function(t){t.pointerEvents=Io,t.defaults.actions.pointerEvents=Io.defaults,(0,j.default)(t.actions.phaselessTypes,Io.types)},listeners:{"interactions:new":function(t){var e=t.interaction;e.prevTap=null,e.tapTime=0},"interactions:update-pointer":function(t){var e=t.down,n=t.pointerInfo;if(!e&&n.hold)return;n.hold={duration:1/0,timeout:null}},"interactions:move":function(t,e){var n=t.interaction,r=t.pointer,o=t.event,i=t.eventTarget;t.duplicate||n.pointerIsDown&&!n.pointerWasMoved||(n.pointerIsDown&&zo(t),Do({interaction:n,pointer:r,event:o,eventTarget:i,type:"move"},e))},"interactions:down":function(t,e){!function(t,e){for(var n=t.interaction,r=t.pointer,o=t.event,i=t.eventTarget,a=t.pointerIndex,s=n.pointers[a].hold,l=_.getPath(i),u={interaction:n,pointer:r,event:o,eventTarget:i,type:"hold",targets:[],path:l,node:null},c=0;c<l.length;c++){var f=l[c];u.node=f,e.fire("pointerEvents:collect-targets",u)}if(!u.targets.length)return;for(var d=1/0,p=0;p<u.targets.length;p++){var v=u.targets[p].eventable.options.holdDuration;v<d&&(d=v)}s.duration=d,s.timeout=setTimeout((function(){Do({interaction:n,eventTarget:i,pointer:r,event:o,type:"hold"},e)}),d)}(t,e),Do(t,e)},"interactions:up":function(t,e){zo(t),Do(t,e),function(t,e){var n=t.interaction,r=t.pointer,o=t.event,i=t.eventTarget;n.pointerWasMoved||Do({interaction:n,eventTarget:i,pointer:r,event:o,type:"tap"},e)}(t,e)},"interactions:cancel":function(t,e){zo(t),Do(t,e)}},PointerEvent:wo.PointerEvent,fire:Do,collectEventTargets:Ao,defaults:{holdDuration:600,ignoreFrom:null,allowFrom:null,origin:{x:0,y:0}},types:{down:!0,move:!0,up:!0,cancel:!0,tap:!0,doubletap:!0,hold:!0}};function Do(t,e){var n=t.interaction,r=t.pointer,o=t.event,i=t.eventTarget,a=t.type,s=t.targets,l=void 0===s?Ao(t,e):s,u=new wo.PointerEvent(a,r,o,i,n,e.now());e.fire("pointerEvents:new",{pointerEvent:u});for(var c={interaction:n,pointer:r,event:o,eventTarget:i,targets:l,type:a,pointerEvent:u},f=0;f<l.length;f++){var d=l[f];for(var p in d.props||{})u[p]=d.props[p];var v=(0,A.default)(d.eventable,d.node);if(u._subtractOrigin(v),u.eventable=d.eventable,u.currentTarget=d.node,d.eventable.fire(u),u._addOrigin(v),u.immediatePropagationStopped||u.propagationStopped&&f+1<l.length&&l[f+1].node!==u.currentTarget)break}if(e.fire("pointerEvents:fired",c),"tap"===a){var h=u.double?Do({interaction:n,pointer:r,event:o,eventTarget:i,type:"doubletap"},e):u;n.prevTap=h,n.tapTime=h.timeStamp}return u}function Ao(t,e){var n=t.interaction,r=t.pointer,o=t.event,i=t.eventTarget,a=t.type,s=n.getPointerIndex(r),l=n.pointers[s];if("tap"===a&&(n.pointerWasMoved||!l||l.downTarget!==i))return[];for(var u=_.getPath(i),c={interaction:n,pointer:r,event:o,eventTarget:i,type:a,path:u,targets:[],node:null},f=0;f<u.length;f++){var d=u[f];c.node=d,e.fire("pointerEvents:collect-targets",c)}return"hold"===a&&(c.targets=c.targets.filter((function(t){return t.eventable.options.holdDuration===n.pointers[s].hold.duration}))),c.targets}function zo(t){var e=t.interaction,n=t.pointerIndex,r=e.pointers[n].hold;r&&r.timeout&&(clearTimeout(r.timeout),r.timeout=null)}var Co=Io;ko.default=Co;var Ro={};function Fo(t){var e=t.interaction;e.holdIntervalHandle&&(clearInterval(e.holdIntervalHandle),e.holdIntervalHandle=null)}Object.defineProperty(Ro,"__esModule",{value:!0}),Ro.default=void 0;var Xo={id:"pointer-events/holdRepeat",install:function(t){t.usePlugin(ko.default);var e=t.pointerEvents;e.defaults.holdRepeatInterval=0,e.types.holdrepeat=t.actions.phaselessTypes.holdrepeat=!0},listeners:["move","up","cancel","endall"].reduce((function(t,e){return t["pointerEvents:".concat(e)]=Fo,t}),{"pointerEvents:new":function(t){var e=t.pointerEvent;"hold"===e.type&&(e.count=(e.count||0)+1)},"pointerEvents:fired":function(t,e){var n=t.interaction,r=t.pointerEvent,o=t.eventTarget,i=t.targets;if("hold"===r.type&&i.length){var a=i[0].eventable.options.holdRepeatInterval;a<=0||(n.holdIntervalHandle=setTimeout((function(){e.pointerEvents.fire({interaction:n,eventTarget:o,type:"hold",pointer:r,event:r},e)}),a))}}})};Ro.default=Xo;var Yo={};function Wo(t){return(0,j.default)(this.events.options,t),this}Object.defineProperty(Yo,"__esModule",{value:!0}),Yo.default=void 0;var Lo={id:"pointer-events/interactableTargets",install:function(t){var e=t.Interactable;e.prototype.pointerEvents=Wo;var n=e.prototype._backCompatOption;e.prototype._backCompatOption=function(t,e){var r=n.call(this,t,e);return r===this&&(this.events.options[t]=e),r}},listeners:{"pointerEvents:collect-targets":function(t,e){var n=t.targets,r=t.node,o=t.type,i=t.eventTarget;e.interactables.forEachMatch(r,(function(t){var e=t.events,a=e.options;e.types[o]&&e.types[o].length&&t.testIgnoreAllow(a,r,i)&&n.push({node:r,eventable:e,props:{interactable:t}})}))},"interactable:new":function(t){var e=t.interactable;e.events.getRect=function(t){return e.getRect(t)}},"interactable:set":function(t,e){var n=t.interactable,r=t.options;(0,j.default)(n.events.options,e.pointerEvents.defaults),(0,j.default)(n.events.options,r.pointerEvents||{})}}};Yo.default=Lo;var Bo={};Object.defineProperty(Bo,"__esModule",{value:!0}),Bo.default=void 0;var Uo={id:"pointer-events",install:function(t){t.usePlugin(ko),t.usePlugin(Ro.default),t.usePlugin(Yo.default)}};Bo.default=Uo;var No={};Object.defineProperty(No,"__esModule",{value:!0}),No.default=void 0;No.default={};var Vo={};function qo(t){var e=t.Interactable;t.actions.phases.reflow=!0,e.prototype.reflow=function(e){return function(t,e,n){for(var r=i.default.string(t.target)?K.from(t._context.querySelectorAll(t.target)):[t.target],o=n.window.Promise,a=o?[]:null,s=function(){var i=r[l],s=t.getRect(i);if(!s)return"break";var u=K.find(n.interactions.list,(function(n){return n.interacting()&&n.interactable===t&&n.element===i&&n.prepared.name===e.name})),c=void 0;if(u)u.move(),a&&(c=u._reflowPromise||new o((function(t){u._reflowResolve=t})));else{var f=(0,k.tlbrToXywh)(s),d={page:{x:f.x,y:f.y},client:{x:f.x,y:f.y},timeStamp:n.now()},p=W.coordsToEvent(d);c=function(t,e,n,r,o){var i=t.interactions.new({pointerType:"reflow"}),a={interaction:i,event:o,pointer:o,eventTarget:n,phase:"reflow"};i.interactable=e,i.element=n,i.prevEvent=o,i.updatePointer(o,o,n,!0),W.setZeroCoords(i.coords.delta),(0,Xt.copyAction)(i.prepared,r),i._doPhase(a);var s=t.window.Promise,l=s?new s((function(t){i._reflowResolve=t})):void 0;i._reflowPromise=l,i.start(r,e,n),i._interacting?(i.move(a),i.end(o)):(i.stop(),i._reflowResolve());return i.removePointer(o,o),l}(n,t,i,e,p)}a&&a.push(c)},l=0;l<r.length;l++){if("break"===s())break}return a&&o.all(a).then((function(){return t}))}(this,e,t)}}Object.defineProperty(Vo,"__esModule",{value:!0}),Vo.install=qo,Vo.default=void 0;var $o={id:"reflow",install:qo,listeners:{"interactions:stop":function(t,e){var n=t.interaction;"reflow"===n.pointerType&&(n._reflowResolve&&n._reflowResolve(),K.remove(e.interactions.list,n))}}};Vo.default=$o;var Go={};Object.defineProperty(Go,"__esModule",{value:!0}),Go.default=void 0;Go.default={};var Ho={};Object.defineProperty(Ho,"__esModule",{value:!0}),Ho.exchange=void 0;Ho.exchange={};var Ko={};Object.defineProperty(Ko,"__esModule",{value:!0}),Ko.default=void 0;Ko.default={};var Zo={exports:{}};function Jo(t){return(Jo="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(Zo.exports,"__esModule",{value:!0}),Zo.exports.default=void 0,fr.default.use(xo.default),fr.default.use(se.default),fr.default.use(Je.default),fr.default.use(ae.default),fr.default.use(Tt.default),fr.default.use(Bo.default),fr.default.use(an.default),fr.default.use(mo.default),fr.default.use(oe.default),fr.default.use(Ot.default),fr.default.use(At.default),fr.default.use(Vo.default),fr.default.use(we.default),fr.default.use(Ko.default),fr.default.use(No.default),fr.default.__utils={exchange:Ho.exchange,displace:Go,pointer:W},fr.default.use(pe.default);var Qo=fr.default;if(Zo.exports.default=Qo,"object"===Jo(Zo)&&Zo)try{Zo.exports=fr.default}catch(t){}fr.default.default=fr.default,Zo=Zo.exports;var ti={exports:{}};function ei(t){return(ei="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(ti.exports,"__esModule",{value:!0}),ti.exports.default=void 0;var ni=Zo.default;if(ti.exports.default=ni,"object"===ei(ti)&&ti)try{ti.exports=Zo.default}catch(t){}return Zo.default.default=Zo.default,ti=ti.exports}));
//# sourceMappingURL=interact.min.js.map


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYS1wb3NzaWJsZS1wcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYWR2YW5jZS1zdHJpbmctaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtdXNlcy10by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jbGFzc29mLXJhdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3JyZWN0LWlzLXJlZ2V4cC1sb2dpYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29ycmVjdC1wcm90b3R5cGUtZ2V0dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtaXRlcmF0b3ItY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVmaW5lLWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtd2VsbC1rbm93bi1zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9tLWl0ZXJhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hpZGRlbi1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWZvcmNlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1wdXJlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1yZWdleHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9ycy1jb3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25hdGl2ZS1zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25hdGl2ZS13ZWFrLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbm90LWEtcmVnZXhwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9udW1iZXItcGFyc2UtZmxvYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMtZXh0ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXNldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC10by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZ2V4cC1leGVjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWdleHAtZmxhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZ2V4cC1zdGlja3ktaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy1tdWx0aWJ5dGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy10cmltLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXN0cmluZy10YWctc3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wtd3JhcHBlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3doaXRlc3BhY2VzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuY29uY2F0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuc3BsaWNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuZGF0ZS50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5uYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnBhcnNlLWZsb2F0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucmVmbGVjdC5jb25zdHJ1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5yZWdleHAuZXhlYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnJlZ2V4cC50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcucmVwbGFjZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC5kZXNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW50ZXJhY3Rqcy9kaXN0L2ludGVyYWN0Lm1pbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDSkEsZUFBZSxtQkFBTyxDQUFDLDZFQUF3Qjs7QUFF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OEQsbUpBQW1KLDhDQUE4QyxtQkFBbUIsVUFBVSxvR0FBb0csOEJBQThCLFlBQVksYUFBYSxLQUFLLFdBQVcsS0FBSyx1QkFBdUIsb0NBQW9DLFNBQVMsR0FBRyxZQUFZLHVDQUF1QyxTQUFTLGtDQUFrQyxRQUFRLGtDQUFrQyxrQ0FBa0Msb0JBQW9CLG9HQUFvRyxjQUFjLFVBQVUsdUNBQXVDLFNBQVMsb0JBQW9CLGNBQWMsVUFBVSx1Q0FBdUMsU0FBUyxxQkFBcUIsZUFBZSxVQUFVLHVDQUF1QyxTQUFTLG9CQUFvQixjQUFjLFFBQVEsWUFBWSxlQUFlLGtGQUFrRixnQkFBZ0IsYUFBYSxvR0FBb0csS0FBSywrQ0FBK0MsU0FBUyxxY0FBcWMsMkNBQTJDLDRCQUE0QixrQkFBa0IsbURBQW1ELHNCQUFzQixVQUFVLDRDQUE0QyxRQUFRLFlBQVksZUFBZSxrRkFBa0YsZ0JBQWdCLGFBQWEsb0dBQW9HLEtBQUssK0NBQStDLFNBQVMsNEJBQTRCLGtCQUFrQixtREFBbUQsc0JBQXNCLFVBQVUsbURBQW1EO0FBQ3h2K0g7Ozs7Ozs7Ozs7OztBQ0ZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1QyIsImZpbGUiOiJ2ZW5kb3JzfmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IFR5cGVFcnJvcihTdHJpbmcoaXQpICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpICYmIGl0ICE9PSBudWxsKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3Qgc2V0IFwiICsgU3RyaW5nKGl0KSArICcgYXMgYSBwcm90b3R5cGUnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwidmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG52YXIgVU5TQ09QQUJMRVMgPSB3ZWxsS25vd25TeW1ib2woJ3Vuc2NvcGFibGVzJyk7XG52YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cbi8vIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcbmlmIChBcnJheVByb3RvdHlwZVtVTlNDT1BBQkxFU10gPT0gdW5kZWZpbmVkKSB7XG4gIGRlZmluZVByb3BlcnR5TW9kdWxlLmYoQXJyYXlQcm90b3R5cGUsIFVOU0NPUEFCTEVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiBjcmVhdGUobnVsbClcbiAgfSk7XG59XG5cbi8vIGFkZCBhIGtleSB0byBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICBBcnJheVByb3RvdHlwZVtVTlNDT1BBQkxFU11ba2V5XSA9IHRydWU7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNoYXJBdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctbXVsdGlieXRlJykuY2hhckF0O1xuXG4vLyBgQWR2YW5jZVN0cmluZ0luZGV4YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFkdmFuY2VzdHJpbmdpbmRleFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoUywgaW5kZXgsIHVuaWNvZGUpIHtcbiAgcmV0dXJuIGluZGV4ICsgKHVuaWNvZGUgPyBjaGFyQXQoUywgaW5kZXgpLmxlbmd0aCA6IDEpO1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoU3RyaW5nKGl0KSArICcgaXMgbm90IGFuIG9iamVjdCcpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZm9yRWFjaDtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcbnZhciBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtdXNlcy10by1sZW5ndGgnKTtcblxudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdmb3JFYWNoJyk7XG52YXIgVVNFU19UT19MRU5HVEggPSBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCgnZm9yRWFjaCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbm1vZHVsZS5leHBvcnRzID0gKCFTVFJJQ1RfTUVUSE9EIHx8ICFVU0VTX1RPX0xFTkdUSCkgPyBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gIHJldHVybiAkZm9yRWFjaCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG59IDogW10uZm9yRWFjaDtcbiIsInZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXgnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGluZGV4T2YsIGluY2x1ZGVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgaWYgKChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSAmJiBPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG4gIGluY2x1ZGVzOiBjcmVhdGVNZXRob2QodHJ1ZSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5kZXhPZmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4gIGluZGV4T2Y6IGNyZWF0ZU1ldGhvZChmYWxzZSlcbn07XG4iLCJ2YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQnKTtcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgYXJyYXlTcGVjaWVzQ3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG5cbnZhciBwdXNoID0gW10ucHVzaDtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGZvckVhY2gsIG1hcCwgZmlsdGVyLCBzb21lLCBldmVyeSwgZmluZCwgZmluZEluZGV4IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoVFlQRSkge1xuICB2YXIgSVNfTUFQID0gVFlQRSA9PSAxO1xuICB2YXIgSVNfRklMVEVSID0gVFlQRSA9PSAyO1xuICB2YXIgSVNfU09NRSA9IFRZUEUgPT0gMztcbiAgdmFyIElTX0VWRVJZID0gVFlQRSA9PSA0O1xuICB2YXIgSVNfRklORF9JTkRFWCA9IFRZUEUgPT0gNjtcbiAgdmFyIE5PX0hPTEVTID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVg7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGNhbGxiYWNrZm4sIHRoYXQsIHNwZWNpZmljQ3JlYXRlKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCgkdGhpcyk7XG4gICAgdmFyIHNlbGYgPSBJbmRleGVkT2JqZWN0KE8pO1xuICAgIHZhciBib3VuZEZ1bmN0aW9uID0gYmluZChjYWxsYmFja2ZuLCB0aGF0LCAzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoc2VsZi5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGNyZWF0ZSA9IHNwZWNpZmljQ3JlYXRlIHx8IGFycmF5U3BlY2llc0NyZWF0ZTtcbiAgICB2YXIgdGFyZ2V0ID0gSVNfTUFQID8gY3JlYXRlKCR0aGlzLCBsZW5ndGgpIDogSVNfRklMVEVSID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgdmFsdWUsIHJlc3VsdDtcbiAgICBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKE5PX0hPTEVTIHx8IGluZGV4IGluIHNlbGYpIHtcbiAgICAgIHZhbHVlID0gc2VsZltpbmRleF07XG4gICAgICByZXN1bHQgPSBib3VuZEZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgTyk7XG4gICAgICBpZiAoVFlQRSkge1xuICAgICAgICBpZiAoSVNfTUFQKSB0YXJnZXRbaW5kZXhdID0gcmVzdWx0OyAvLyBtYXBcbiAgICAgICAgZWxzZSBpZiAocmVzdWx0KSBzd2l0Y2ggKFRZUEUpIHtcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAgLy8gc29tZVxuICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbHVlOyAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgIGNhc2UgMjogcHVzaC5jYWxsKHRhcmdldCwgdmFsdWUpOyAvLyBmaWx0ZXJcbiAgICAgICAgfSBlbHNlIGlmIChJU19FVkVSWSkgcmV0dXJuIGZhbHNlOyAgLy8gZXZlcnlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHRhcmdldDtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxuICBmb3JFYWNoOiBjcmVhdGVNZXRob2QoMCksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUubWFwYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLm1hcFxuICBtYXA6IGNyZWF0ZU1ldGhvZCgxKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gIGZpbHRlcjogY3JlYXRlTWV0aG9kKDIpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLnNvbWVgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuc29tZVxuICBzb21lOiBjcmVhdGVNZXRob2QoMyksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZXZlcnlgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZXZlcnlcbiAgZXZlcnk6IGNyZWF0ZU1ldGhvZCg0KSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maW5kYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRcbiAgZmluZDogY3JlYXRlTWV0aG9kKDUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kSW5kZXhcbiAgZmluZEluZGV4OiBjcmVhdGVNZXRob2QoNilcbn07XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FKSB7XG4gIC8vIFdlIGNhbid0IHVzZSB0aGlzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xuICAvLyBkZW9wdGltaXphdGlvbiBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjc3XG4gIHJldHVybiBWOF9WRVJTSU9OID49IDUxIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFycmF5ID0gW107XG4gICAgdmFyIGNvbnN0cnVjdG9yID0gYXJyYXkuY29uc3RydWN0b3IgPSB7fTtcbiAgICBjb25zdHJ1Y3RvcltTUEVDSUVTXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7IGZvbzogMSB9O1xuICAgIH07XG4gICAgcmV0dXJuIGFycmF5W01FVEhPRF9OQU1FXShCb29sZWFuKS5mb28gIT09IDE7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSwgYXJndW1lbnQpIHtcbiAgdmFyIG1ldGhvZCA9IFtdW01FVEhPRF9OQU1FXTtcbiAgcmV0dXJuICEhbWV0aG9kICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1jYWxsLG5vLXRocm93LWxpdGVyYWxcbiAgICBtZXRob2QuY2FsbChudWxsLCBhcmd1bWVudCB8fCBmdW5jdGlvbiAoKSB7IHRocm93IDE7IH0sIDEpO1xuICB9KTtcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIGNhY2hlID0ge307XG5cbnZhciB0aHJvd2VyID0gZnVuY3Rpb24gKGl0KSB7IHRocm93IGl0OyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSwgb3B0aW9ucykge1xuICBpZiAoaGFzKGNhY2hlLCBNRVRIT0RfTkFNRSkpIHJldHVybiBjYWNoZVtNRVRIT0RfTkFNRV07XG4gIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9O1xuICB2YXIgbWV0aG9kID0gW11bTUVUSE9EX05BTUVdO1xuICB2YXIgQUNDRVNTT1JTID0gaGFzKG9wdGlvbnMsICdBQ0NFU1NPUlMnKSA/IG9wdGlvbnMuQUNDRVNTT1JTIDogZmFsc2U7XG4gIHZhciBhcmd1bWVudDAgPSBoYXMob3B0aW9ucywgMCkgPyBvcHRpb25zWzBdIDogdGhyb3dlcjtcbiAgdmFyIGFyZ3VtZW50MSA9IGhhcyhvcHRpb25zLCAxKSA/IG9wdGlvbnNbMV0gOiB1bmRlZmluZWQ7XG5cbiAgcmV0dXJuIGNhY2hlW01FVEhPRF9OQU1FXSA9ICEhbWV0aG9kICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKEFDQ0VTU09SUyAmJiAhREVTQ1JJUFRPUlMpIHJldHVybiB0cnVlO1xuICAgIHZhciBPID0geyBsZW5ndGg6IC0xIH07XG5cbiAgICBpZiAoQUNDRVNTT1JTKSBkZWZpbmVQcm9wZXJ0eShPLCAxLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogdGhyb3dlciB9KTtcbiAgICBlbHNlIE9bMV0gPSAxO1xuXG4gICAgbWV0aG9kLmNhbGwoTywgYXJndW1lbnQwLCBhcmd1bWVudDEpO1xuICB9KTtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG4vLyBgQXJyYXlTcGVjaWVzQ3JlYXRlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5c3BlY2llc2NyZWF0ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3JpZ2luYWxBcnJheSwgbGVuZ3RoKSB7XG4gIHZhciBDO1xuICBpZiAoaXNBcnJheShvcmlnaW5hbEFycmF5KSkge1xuICAgIEMgPSBvcmlnaW5hbEFycmF5LmNvbnN0cnVjdG9yO1xuICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgaWYgKHR5cGVvZiBDID09ICdmdW5jdGlvbicgJiYgKEMgPT09IEFycmF5IHx8IGlzQXJyYXkoQy5wcm90b3R5cGUpKSkgQyA9IHVuZGVmaW5lZDtcbiAgICBlbHNlIGlmIChpc09iamVjdChDKSkge1xuICAgICAgQyA9IENbU1BFQ0lFU107XG4gICAgICBpZiAoQyA9PT0gbnVsbCkgQyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gcmV0dXJuIG5ldyAoQyA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDKShsZW5ndGggPT09IDAgPyAwIDogbGVuZ3RoKTtcbn07XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG4iLCJ2YXIgVE9fU1RSSU5HX1RBR19TVVBQT1JUID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZy10YWctc3VwcG9ydCcpO1xudmFyIGNsYXNzb2ZSYXcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIENPUlJFQ1RfQVJHVU1FTlRTID0gY2xhc3NvZlJhdyhmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxufTtcblxuLy8gZ2V0dGluZyB0YWcgZnJvbSBFUzYrIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYFxubW9kdWxlLmV4cG9ydHMgPSBUT19TVFJJTkdfVEFHX1NVUFBPUlQgPyBjbGFzc29mUmF3IDogZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCB0YWcsIHJlc3VsdDtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKHRhZyA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVE9fU1RSSU5HX1RBRykpID09ICdzdHJpbmcnID8gdGFnXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBDT1JSRUNUX0FSR1VNRU5UUyA/IGNsYXNzb2ZSYXcoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAocmVzdWx0ID0gY2xhc3NvZlJhdyhPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IHJlc3VsdDtcbn07XG4iLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIG93bktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3duLWtleXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcbiAgdmFyIGtleXMgPSBvd25LZXlzKHNvdXJjZSk7XG4gIHZhciBkZWZpbmVQcm9wZXJ0eSA9IGRlZmluZVByb3BlcnR5TW9kdWxlLmY7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUuZjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgaWYgKCFoYXModGFyZ2V0LCBrZXkpKSBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gIH1cbn07XG4iLCJ2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBNQVRDSCA9IHdlbGxLbm93blN5bWJvbCgnbWF0Y2gnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUpIHtcbiAgdmFyIHJlZ2V4cCA9IC8uLztcbiAgdHJ5IHtcbiAgICAnLy4vJ1tNRVRIT0RfTkFNRV0ocmVnZXhwKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHRyeSB7XG4gICAgICByZWdleHBbTUFUQ0hdID0gZmFsc2U7XG4gICAgICByZXR1cm4gJy8uLydbTUVUSE9EX05BTUVdKHJlZ2V4cCk7XG4gICAgfSBjYXRjaCAoZikgeyAvKiBlbXB0eSAqLyB9XG4gIH0gcmV0dXJuIGZhbHNlO1xufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEYoKSB7IC8qIGVtcHR5ICovIH1cbiAgRi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBudWxsO1xuICByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKG5ldyBGKCkpICE9PSBGLnByb3RvdHlwZTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycy1jb3JlJykuSXRlcmF0b3JQcm90b3R5cGU7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJdGVyYXRvckNvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIHZhciBUT19TVFJJTkdfVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICBJdGVyYXRvckNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yQ29uc3RydWN0b3IsIFRPX1NUUklOR19UQUcsIGZhbHNlLCB0cnVlKTtcbiAgSXRlcmF0b3JzW1RPX1NUUklOR19UQUddID0gcmV0dXJuVGhpcztcbiAgcmV0dXJuIEl0ZXJhdG9yQ29uc3RydWN0b3I7XG59O1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgdmFyIHByb3BlcnR5S2V5ID0gdG9QcmltaXRpdmUoa2V5KTtcbiAgaWYgKHByb3BlcnR5S2V5IGluIG9iamVjdCkgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIHByb3BlcnR5S2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbcHJvcGVydHlLZXldID0gdmFsdWU7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgY3JlYXRlSXRlcmF0b3JDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtaXRlcmF0b3ItY29uc3RydWN0b3InKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZicpO1xudmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1zZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG52YXIgSXRlcmF0b3JzQ29yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMtY29yZScpO1xuXG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSBJdGVyYXRvcnNDb3JlLkl0ZXJhdG9yUHJvdG90eXBlO1xudmFyIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSBJdGVyYXRvcnNDb3JlLkJVR0dZX1NBRkFSSV9JVEVSQVRPUlM7XG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcbnZhciBFTlRSSUVTID0gJ2VudHJpZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEl0ZXJhYmxlLCBOQU1FLCBJdGVyYXRvckNvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICBjcmVhdGVJdGVyYXRvckNvbnN0cnVjdG9yKEl0ZXJhdG9yQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuXG4gIHZhciBnZXRJdGVyYXRpb25NZXRob2QgPSBmdW5jdGlvbiAoS0lORCkge1xuICAgIGlmIChLSU5EID09PSBERUZBVUxUICYmIGRlZmF1bHRJdGVyYXRvcikgcmV0dXJuIGRlZmF1bHRJdGVyYXRvcjtcbiAgICBpZiAoIUJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgJiYgS0lORCBpbiBJdGVyYWJsZVByb3RvdHlwZSkgcmV0dXJuIEl0ZXJhYmxlUHJvdG90eXBlW0tJTkRdO1xuICAgIHN3aXRjaCAoS0lORCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBJdGVyYXRvckNvbnN0cnVjdG9yKHRoaXMsIEtJTkQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzLCBLSU5EKTsgfTtcbiAgICAgIGNhc2UgRU5UUklFUzogcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzLCBLSU5EKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzKTsgfTtcbiAgfTtcblxuICB2YXIgVE9fU1RSSU5HX1RBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIElOQ09SUkVDVF9WQUxVRVNfTkFNRSA9IGZhbHNlO1xuICB2YXIgSXRlcmFibGVQcm90b3R5cGUgPSBJdGVyYWJsZS5wcm90b3R5cGU7XG4gIHZhciBuYXRpdmVJdGVyYXRvciA9IEl0ZXJhYmxlUHJvdG90eXBlW0lURVJBVE9SXVxuICAgIHx8IEl0ZXJhYmxlUHJvdG90eXBlWydAQGl0ZXJhdG9yJ11cbiAgICB8fCBERUZBVUxUICYmIEl0ZXJhYmxlUHJvdG90eXBlW0RFRkFVTFRdO1xuICB2YXIgZGVmYXVsdEl0ZXJhdG9yID0gIUJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgJiYgbmF0aXZlSXRlcmF0b3IgfHwgZ2V0SXRlcmF0aW9uTWV0aG9kKERFRkFVTFQpO1xuICB2YXIgYW55TmF0aXZlSXRlcmF0b3IgPSBOQU1FID09ICdBcnJheScgPyBJdGVyYWJsZVByb3RvdHlwZS5lbnRyaWVzIHx8IG5hdGl2ZUl0ZXJhdG9yIDogbmF0aXZlSXRlcmF0b3I7XG4gIHZhciBDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIG1ldGhvZHMsIEtFWTtcblxuICAvLyBmaXggbmF0aXZlXG4gIGlmIChhbnlOYXRpdmVJdGVyYXRvcikge1xuICAgIEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKGFueU5hdGl2ZUl0ZXJhdG9yLmNhbGwobmV3IEl0ZXJhYmxlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIGlmICghSVNfUFVSRSAmJiBnZXRQcm90b3R5cGVPZihDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUpICE9PSBJdGVyYXRvclByb3RvdHlwZSkge1xuICAgICAgICBpZiAoc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgICAgICBzZXRQcm90b3R5cGVPZihDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXSAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIFRPX1NUUklOR19UQUcsIHRydWUsIHRydWUpO1xuICAgICAgaWYgKElTX1BVUkUpIEl0ZXJhdG9yc1tUT19TVFJJTkdfVEFHXSA9IHJldHVyblRoaXM7XG4gICAgfVxuICB9XG5cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGQVVMVCA9PSBWQUxVRVMgJiYgbmF0aXZlSXRlcmF0b3IgJiYgbmF0aXZlSXRlcmF0b3IubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgSU5DT1JSRUNUX1ZBTFVFU19OQU1FID0gdHJ1ZTtcbiAgICBkZWZhdWx0SXRlcmF0b3IgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuYXRpdmVJdGVyYXRvci5jYWxsKHRoaXMpOyB9O1xuICB9XG5cbiAgLy8gZGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUlTX1BVUkUgfHwgRk9SQ0VEKSAmJiBJdGVyYWJsZVByb3RvdHlwZVtJVEVSQVRPUl0gIT09IGRlZmF1bHRJdGVyYXRvcikge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShJdGVyYWJsZVByb3RvdHlwZSwgSVRFUkFUT1IsIGRlZmF1bHRJdGVyYXRvcik7XG4gIH1cbiAgSXRlcmF0b3JzW05BTUVdID0gZGVmYXVsdEl0ZXJhdG9yO1xuXG4gIC8vIGV4cG9ydCBhZGRpdGlvbmFsIG1ldGhvZHNcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBnZXRJdGVyYXRpb25NZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/IGRlZmF1bHRJdGVyYXRvciA6IGdldEl0ZXJhdGlvbk1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6IGdldEl0ZXJhdGlvbk1ldGhvZChFTlRSSUVTKVxuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChLRVkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgfHwgSU5DT1JSRUNUX1ZBTFVFU19OQU1FIHx8ICEoS0VZIGluIEl0ZXJhYmxlUHJvdG90eXBlKSkge1xuICAgICAgICByZWRlZmluZShJdGVyYWJsZVByb3RvdHlwZSwgS0VZLCBtZXRob2RzW0tFWV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSAkKHsgdGFyZ2V0OiBOQU1FLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBCVUdHWV9TQUZBUklfSVRFUkFUT1JTIHx8IElOQ09SUkVDVF9WQUxVRVNfTkFNRSB9LCBtZXRob2RzKTtcbiAgfVxuXG4gIHJldHVybiBtZXRob2RzO1xufTtcbiIsInZhciBwYXRoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3BhdGgnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgd3JhcHBlZFdlbGxLbm93blN5bWJvbE1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbC13cmFwcGVkJyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE5BTUUpIHtcbiAgdmFyIFN5bWJvbCA9IHBhdGguU3ltYm9sIHx8IChwYXRoLlN5bWJvbCA9IHt9KTtcbiAgaWYgKCFoYXMoU3ltYm9sLCBOQU1FKSkgZGVmaW5lUHJvcGVydHkoU3ltYm9sLCBOQU1FLCB7XG4gICAgdmFsdWU6IHdyYXBwZWRXZWxsS25vd25TeW1ib2xNb2R1bGUuZihOQU1FKVxuICB9KTtcbn07XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAxLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KVsxXSAhPSA3O1xufSk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgZG9jdW1lbnQgPSBnbG9iYWwuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBFWElTVFMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBFWElTVFMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsIi8vIGl0ZXJhYmxlIERPTSBjb2xsZWN0aW9uc1xuLy8gZmxhZyAtIGBpdGVyYWJsZWAgaW50ZXJmYWNlIC0gJ2VudHJpZXMnLCAna2V5cycsICd2YWx1ZXMnLCAnZm9yRWFjaCcgbWV0aG9kc1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIENTU1J1bGVMaXN0OiAwLFxuICBDU1NTdHlsZURlY2xhcmF0aW9uOiAwLFxuICBDU1NWYWx1ZUxpc3Q6IDAsXG4gIENsaWVudFJlY3RMaXN0OiAwLFxuICBET01SZWN0TGlzdDogMCxcbiAgRE9NU3RyaW5nTGlzdDogMCxcbiAgRE9NVG9rZW5MaXN0OiAxLFxuICBEYXRhVHJhbnNmZXJJdGVtTGlzdDogMCxcbiAgRmlsZUxpc3Q6IDAsXG4gIEhUTUxBbGxDb2xsZWN0aW9uOiAwLFxuICBIVE1MQ29sbGVjdGlvbjogMCxcbiAgSFRNTEZvcm1FbGVtZW50OiAwLFxuICBIVE1MU2VsZWN0RWxlbWVudDogMCxcbiAgTWVkaWFMaXN0OiAwLFxuICBNaW1lVHlwZUFycmF5OiAwLFxuICBOYW1lZE5vZGVNYXA6IDAsXG4gIE5vZGVMaXN0OiAxLFxuICBQYWludFJlcXVlc3RMaXN0OiAwLFxuICBQbHVnaW46IDAsXG4gIFBsdWdpbkFycmF5OiAwLFxuICBTVkdMZW5ndGhMaXN0OiAwLFxuICBTVkdOdW1iZXJMaXN0OiAwLFxuICBTVkdQYXRoU2VnTGlzdDogMCxcbiAgU1ZHUG9pbnRMaXN0OiAwLFxuICBTVkdTdHJpbmdMaXN0OiAwLFxuICBTVkdUcmFuc2Zvcm1MaXN0OiAwLFxuICBTb3VyY2VCdWZmZXJMaXN0OiAwLFxuICBTdHlsZVNoZWV0TGlzdDogMCxcbiAgVGV4dFRyYWNrQ3VlTGlzdDogMCxcbiAgVGV4dFRyYWNrTGlzdDogMCxcbiAgVG91Y2hMaXN0OiAwXG59O1xuIiwidmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignbmF2aWdhdG9yJywgJ3VzZXJBZ2VudCcpIHx8ICcnO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcblxudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucztcbnZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4O1xudmFyIG1hdGNoLCB2ZXJzaW9uO1xuXG5pZiAodjgpIHtcbiAgbWF0Y2ggPSB2OC5zcGxpdCgnLicpO1xuICB2ZXJzaW9uID0gbWF0Y2hbMF0gKyBtYXRjaFsxXTtcbn0gZWxzZSBpZiAodXNlckFnZW50KSB7XG4gIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvKFxcZCspLyk7XG4gIGlmICghbWF0Y2ggfHwgbWF0Y2hbMV0gPj0gNzQpIHtcbiAgICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvQ2hyb21lXFwvKFxcZCspLyk7XG4gICAgaWYgKG1hdGNoKSB2ZXJzaW9uID0gbWF0Y2hbMV07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJzaW9uICYmICt2ZXJzaW9uO1xuIiwiLy8gSUU4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgJ2NvbnN0cnVjdG9yJyxcbiAgJ2hhc093blByb3BlcnR5JyxcbiAgJ2lzUHJvdG90eXBlT2YnLFxuICAncHJvcGVydHlJc0VudW1lcmFibGUnLFxuICAndG9Mb2NhbGVTdHJpbmcnLFxuICAndG9TdHJpbmcnLFxuICAndmFsdWVPZidcbl07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciBzZXRHbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWdsb2JhbCcpO1xudmFyIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzJyk7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG5cbi8qXG4gIG9wdGlvbnMudGFyZ2V0ICAgICAgLSBuYW1lIG9mIHRoZSB0YXJnZXQgb2JqZWN0XG4gIG9wdGlvbnMuZ2xvYmFsICAgICAgLSB0YXJnZXQgaXMgdGhlIGdsb2JhbCBvYmplY3RcbiAgb3B0aW9ucy5zdGF0ICAgICAgICAtIGV4cG9ydCBhcyBzdGF0aWMgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5wcm90byAgICAgICAtIGV4cG9ydCBhcyBwcm90b3R5cGUgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5yZWFsICAgICAgICAtIHJlYWwgcHJvdG90eXBlIG1ldGhvZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMuZm9yY2VkICAgICAgLSBleHBvcnQgZXZlbiBpZiB0aGUgbmF0aXZlIGZlYXR1cmUgaXMgYXZhaWxhYmxlXG4gIG9wdGlvbnMuYmluZCAgICAgICAgLSBiaW5kIG1ldGhvZHMgdG8gdGhlIHRhcmdldCwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLndyYXAgICAgICAgIC0gd3JhcCBjb25zdHJ1Y3RvcnMgdG8gcHJldmVudGluZyBnbG9iYWwgcG9sbHV0aW9uLCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMudW5zYWZlICAgICAgLSB1c2UgdGhlIHNpbXBsZSBhc3NpZ25tZW50IG9mIHByb3BlcnR5IGluc3RlYWQgb2YgZGVsZXRlICsgZGVmaW5lUHJvcGVydHlcbiAgb3B0aW9ucy5zaGFtICAgICAgICAtIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgb3B0aW9ucy5lbnVtZXJhYmxlICAtIGV4cG9ydCBhcyBlbnVtZXJhYmxlIHByb3BlcnR5XG4gIG9wdGlvbnMubm9UYXJnZXRHZXQgLSBwcmV2ZW50IGNhbGxpbmcgYSBnZXR0ZXIgb24gdGFyZ2V0XG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucywgc291cmNlKSB7XG4gIHZhciBUQVJHRVQgPSBvcHRpb25zLnRhcmdldDtcbiAgdmFyIEdMT0JBTCA9IG9wdGlvbnMuZ2xvYmFsO1xuICB2YXIgU1RBVElDID0gb3B0aW9ucy5zdGF0O1xuICB2YXIgRk9SQ0VELCB0YXJnZXQsIGtleSwgdGFyZ2V0UHJvcGVydHksIHNvdXJjZVByb3BlcnR5LCBkZXNjcmlwdG9yO1xuICBpZiAoR0xPQkFMKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsO1xuICB9IGVsc2UgaWYgKFNUQVRJQykge1xuICAgIHRhcmdldCA9IGdsb2JhbFtUQVJHRVRdIHx8IHNldEdsb2JhbChUQVJHRVQsIHt9KTtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQgPSAoZ2xvYmFsW1RBUkdFVF0gfHwge30pLnByb3RvdHlwZTtcbiAgfVxuICBpZiAodGFyZ2V0KSBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICBzb3VyY2VQcm9wZXJ0eSA9IHNvdXJjZVtrZXldO1xuICAgIGlmIChvcHRpb25zLm5vVGFyZ2V0R2V0KSB7XG4gICAgICBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcbiAgICAgIHRhcmdldFByb3BlcnR5ID0gZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIH0gZWxzZSB0YXJnZXRQcm9wZXJ0eSA9IHRhcmdldFtrZXldO1xuICAgIEZPUkNFRCA9IGlzRm9yY2VkKEdMT0JBTCA/IGtleSA6IFRBUkdFVCArIChTVEFUSUMgPyAnLicgOiAnIycpICsga2V5LCBvcHRpb25zLmZvcmNlZCk7XG4gICAgLy8gY29udGFpbmVkIGluIHRhcmdldFxuICAgIGlmICghRk9SQ0VEICYmIHRhcmdldFByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0eXBlb2Ygc291cmNlUHJvcGVydHkgPT09IHR5cGVvZiB0YXJnZXRQcm9wZXJ0eSkgY29udGludWU7XG4gICAgICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKHNvdXJjZVByb3BlcnR5LCB0YXJnZXRQcm9wZXJ0eSk7XG4gICAgfVxuICAgIC8vIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgICBpZiAob3B0aW9ucy5zaGFtIHx8ICh0YXJnZXRQcm9wZXJ0eSAmJiB0YXJnZXRQcm9wZXJ0eS5zaGFtKSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHNvdXJjZVByb3BlcnR5LCAnc2hhbScsIHRydWUpO1xuICAgIH1cbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgcmVkZWZpbmUodGFyZ2V0LCBrZXksIHNvdXJjZVByb3BlcnR5LCBvcHRpb25zKTtcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YCBzaW5jZSBpdCdzIG1vdmVkIHRvIGVudHJ5IHBvaW50c1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lcy5yZWdleHAuZXhlYycpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciByZWdleHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG52YXIgUkVQTEFDRV9TVVBQT1JUU19OQU1FRF9HUk9VUFMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyAjcmVwbGFjZSBuZWVkcyBidWlsdC1pbiBzdXBwb3J0IGZvciBuYW1lZCBncm91cHMuXG4gIC8vICNtYXRjaCB3b3JrcyBmaW5lIGJlY2F1c2UgaXQganVzdCByZXR1cm4gdGhlIGV4ZWMgcmVzdWx0cywgZXZlbiBpZiBpdCBoYXNcbiAgLy8gYSBcImdyb3BzXCIgcHJvcGVydHkuXG4gIHZhciByZSA9IC8uLztcbiAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgcmVzdWx0Lmdyb3VwcyA9IHsgYTogJzcnIH07XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgcmV0dXJuICcnLnJlcGxhY2UocmUsICckPGE+JykgIT09ICc3Jztcbn0pO1xuXG4vLyBJRSA8PSAxMSByZXBsYWNlcyAkMCB3aXRoIHRoZSB3aG9sZSBtYXRjaCwgYXMgaWYgaXQgd2FzICQmXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82MDI0NjY2L2dldHRpbmctaWUtdG8tcmVwbGFjZS1hLXJlZ2V4LXdpdGgtdGhlLWxpdGVyYWwtc3RyaW5nLTBcbnZhciBSRVBMQUNFX0tFRVBTXyQwID0gKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICdhJy5yZXBsYWNlKC8uLywgJyQwJykgPT09ICckMCc7XG59KSgpO1xuXG52YXIgUkVQTEFDRSA9IHdlbGxLbm93blN5bWJvbCgncmVwbGFjZScpO1xuLy8gU2FmYXJpIDw9IDEzLjAuMyg/KSBzdWJzdGl0dXRlcyBudGggY2FwdHVyZSB3aGVyZSBuPm0gd2l0aCBhbiBlbXB0eSBzdHJpbmdcbnZhciBSRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRSA9IChmdW5jdGlvbiAoKSB7XG4gIGlmICgvLi9bUkVQTEFDRV0pIHtcbiAgICByZXR1cm4gLy4vW1JFUExBQ0VdKCdhJywgJyQwJykgPT09ICcnO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn0pKCk7XG5cbi8vIENocm9tZSA1MSBoYXMgYSBidWdneSBcInNwbGl0XCIgaW1wbGVtZW50YXRpb24gd2hlbiBSZWdFeHAjZXhlYyAhPT0gbmF0aXZlRXhlY1xuLy8gV2VleCBKUyBoYXMgZnJvemVuIGJ1aWx0LWluIHByb3RvdHlwZXMsIHNvIHVzZSB0cnkgLyBjYXRjaCB3cmFwcGVyXG52YXIgU1BMSVRfV09SS1NfV0lUSF9PVkVSV1JJVFRFTl9FWEVDID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHJlID0gLyg/OikvO1xuICB2YXIgb3JpZ2luYWxFeGVjID0gcmUuZXhlYztcbiAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9yaWdpbmFsRXhlYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuICB2YXIgcmVzdWx0ID0gJ2FiJy5zcGxpdChyZSk7XG4gIHJldHVybiByZXN1bHQubGVuZ3RoICE9PSAyIHx8IHJlc3VsdFswXSAhPT0gJ2EnIHx8IHJlc3VsdFsxXSAhPT0gJ2InO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgbGVuZ3RoLCBleGVjLCBzaGFtKSB7XG4gIHZhciBTWU1CT0wgPSB3ZWxsS25vd25TeW1ib2woS0VZKTtcblxuICB2YXIgREVMRUdBVEVTX1RPX1NZTUJPTCA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gU3RyaW5nIG1ldGhvZHMgY2FsbCBzeW1ib2wtbmFtZWQgUmVnRXAgbWV0aG9kc1xuICAgIHZhciBPID0ge307XG4gICAgT1tTWU1CT0xdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfTtcbiAgICByZXR1cm4gJydbS0VZXShPKSAhPSA3O1xuICB9KTtcblxuICB2YXIgREVMRUdBVEVTX1RPX0VYRUMgPSBERUxFR0FURVNfVE9fU1lNQk9MICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gU3ltYm9sLW5hbWVkIFJlZ0V4cCBtZXRob2RzIGNhbGwgLmV4ZWNcbiAgICB2YXIgZXhlY0NhbGxlZCA9IGZhbHNlO1xuICAgIHZhciByZSA9IC9hLztcblxuICAgIGlmIChLRVkgPT09ICdzcGxpdCcpIHtcbiAgICAgIC8vIFdlIGNhbid0IHVzZSByZWFsIHJlZ2V4IGhlcmUgc2luY2UgaXQgY2F1c2VzIGRlb3B0aW1pemF0aW9uXG4gICAgICAvLyBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvbiBpbiBWOFxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzMwNlxuICAgICAgcmUgPSB7fTtcbiAgICAgIC8vIFJlZ0V4cFtAQHNwbGl0XSBkb2Vzbid0IGNhbGwgdGhlIHJlZ2V4J3MgZXhlYyBtZXRob2QsIGJ1dCBmaXJzdCBjcmVhdGVzXG4gICAgICAvLyBhIG5ldyBvbmUuIFdlIG5lZWQgdG8gcmV0dXJuIHRoZSBwYXRjaGVkIHJlZ2V4IHdoZW4gY3JlYXRpbmcgdGhlIG5ldyBvbmUuXG4gICAgICByZS5jb25zdHJ1Y3RvciA9IHt9O1xuICAgICAgcmUuY29uc3RydWN0b3JbU1BFQ0lFU10gPSBmdW5jdGlvbiAoKSB7IHJldHVybiByZTsgfTtcbiAgICAgIHJlLmZsYWdzID0gJyc7XG4gICAgICByZVtTWU1CT0xdID0gLy4vW1NZTUJPTF07XG4gICAgfVxuXG4gICAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHsgZXhlY0NhbGxlZCA9IHRydWU7IHJldHVybiBudWxsOyB9O1xuXG4gICAgcmVbU1lNQk9MXSgnJyk7XG4gICAgcmV0dXJuICFleGVjQ2FsbGVkO1xuICB9KTtcblxuICBpZiAoXG4gICAgIURFTEVHQVRFU19UT19TWU1CT0wgfHxcbiAgICAhREVMRUdBVEVTX1RPX0VYRUMgfHxcbiAgICAoS0VZID09PSAncmVwbGFjZScgJiYgIShcbiAgICAgIFJFUExBQ0VfU1VQUE9SVFNfTkFNRURfR1JPVVBTICYmXG4gICAgICBSRVBMQUNFX0tFRVBTXyQwICYmXG4gICAgICAhUkVHRVhQX1JFUExBQ0VfU1VCU1RJVFVURVNfVU5ERUZJTkVEX0NBUFRVUkVcbiAgICApKSB8fFxuICAgIChLRVkgPT09ICdzcGxpdCcgJiYgIVNQTElUX1dPUktTX1dJVEhfT1ZFUldSSVRURU5fRVhFQylcbiAgKSB7XG4gICAgdmFyIG5hdGl2ZVJlZ0V4cE1ldGhvZCA9IC8uL1tTWU1CT0xdO1xuICAgIHZhciBtZXRob2RzID0gZXhlYyhTWU1CT0wsICcnW0tFWV0sIGZ1bmN0aW9uIChuYXRpdmVNZXRob2QsIHJlZ2V4cCwgc3RyLCBhcmcyLCBmb3JjZVN0cmluZ01ldGhvZCkge1xuICAgICAgaWYgKHJlZ2V4cC5leGVjID09PSByZWdleHBFeGVjKSB7XG4gICAgICAgIGlmIChERUxFR0FURVNfVE9fU1lNQk9MICYmICFmb3JjZVN0cmluZ01ldGhvZCkge1xuICAgICAgICAgIC8vIFRoZSBuYXRpdmUgU3RyaW5nIG1ldGhvZCBhbHJlYWR5IGRlbGVnYXRlcyB0byBAQG1ldGhvZCAodGhpc1xuICAgICAgICAgIC8vIHBvbHlmaWxsZWQgZnVuY3Rpb24pLCBsZWFzaW5nIHRvIGluZmluaXRlIHJlY3Vyc2lvbi5cbiAgICAgICAgICAvLyBXZSBhdm9pZCBpdCBieSBkaXJlY3RseSBjYWxsaW5nIHRoZSBuYXRpdmUgQEBtZXRob2QgbWV0aG9kLlxuICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUsIHZhbHVlOiBuYXRpdmVSZWdFeHBNZXRob2QuY2FsbChyZWdleHAsIHN0ciwgYXJnMikgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogbmF0aXZlTWV0aG9kLmNhbGwoc3RyLCByZWdleHAsIGFyZzIpIH07XG4gICAgICB9XG4gICAgICByZXR1cm4geyBkb25lOiBmYWxzZSB9O1xuICAgIH0sIHtcbiAgICAgIFJFUExBQ0VfS0VFUFNfJDA6IFJFUExBQ0VfS0VFUFNfJDAsXG4gICAgICBSRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRTogUkVHRVhQX1JFUExBQ0VfU1VCU1RJVFVURVNfVU5ERUZJTkVEX0NBUFRVUkVcbiAgICB9KTtcbiAgICB2YXIgc3RyaW5nTWV0aG9kID0gbWV0aG9kc1swXTtcbiAgICB2YXIgcmVnZXhNZXRob2QgPSBtZXRob2RzWzFdO1xuXG4gICAgcmVkZWZpbmUoU3RyaW5nLnByb3RvdHlwZSwgS0VZLCBzdHJpbmdNZXRob2QpO1xuICAgIHJlZGVmaW5lKFJlZ0V4cC5wcm90b3R5cGUsIFNZTUJPTCwgbGVuZ3RoID09IDJcbiAgICAgIC8vIDIxLjIuNS44IFJlZ0V4cC5wcm90b3R5cGVbQEByZXBsYWNlXShzdHJpbmcsIHJlcGxhY2VWYWx1ZSlcbiAgICAgIC8vIDIxLjIuNS4xMSBSZWdFeHAucHJvdG90eXBlW0BAc3BsaXRdKHN0cmluZywgbGltaXQpXG4gICAgICA/IGZ1bmN0aW9uIChzdHJpbmcsIGFyZykgeyByZXR1cm4gcmVnZXhNZXRob2QuY2FsbChzdHJpbmcsIHRoaXMsIGFyZyk7IH1cbiAgICAgIC8vIDIxLjIuNS42IFJlZ0V4cC5wcm90b3R5cGVbQEBtYXRjaF0oc3RyaW5nKVxuICAgICAgLy8gMjEuMi41LjkgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF0oc3RyaW5nKVxuICAgICAgOiBmdW5jdGlvbiAoc3RyaW5nKSB7IHJldHVybiByZWdleE1ldGhvZC5jYWxsKHN0cmluZywgdGhpcyk7IH1cbiAgICApO1xuICB9XG5cbiAgaWYgKHNoYW0pIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShSZWdFeHAucHJvdG90eXBlW1NZTUJPTF0sICdzaGFtJywgdHJ1ZSk7XG59O1xuIiwidmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWZ1bmN0aW9uJyk7XG5cbi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCk7XG4gICAgfTtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24nKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyIHNsaWNlID0gW10uc2xpY2U7XG52YXIgZmFjdG9yaWVzID0ge307XG5cbnZhciBjb25zdHJ1Y3QgPSBmdW5jdGlvbiAoQywgYXJnc0xlbmd0aCwgYXJncykge1xuICBpZiAoIShhcmdzTGVuZ3RoIGluIGZhY3RvcmllcykpIHtcbiAgICBmb3IgKHZhciBsaXN0ID0gW10sIGkgPSAwOyBpIDwgYXJnc0xlbmd0aDsgaSsrKSBsaXN0W2ldID0gJ2FbJyArIGkgKyAnXSc7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgZmFjdG9yaWVzW2FyZ3NMZW5ndGhdID0gRnVuY3Rpb24oJ0MsYScsICdyZXR1cm4gbmV3IEMoJyArIGxpc3Quam9pbignLCcpICsgJyknKTtcbiAgfSByZXR1cm4gZmFjdG9yaWVzW2FyZ3NMZW5ndGhdKEMsIGFyZ3MpO1xufTtcblxuLy8gYEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kXG5tb2R1bGUuZXhwb3J0cyA9IEZ1bmN0aW9uLmJpbmQgfHwgZnVuY3Rpb24gYmluZCh0aGF0IC8qICwgLi4uYXJncyAqLykge1xuICB2YXIgZm4gPSBhRnVuY3Rpb24odGhpcyk7XG4gIHZhciBwYXJ0QXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgdmFyIGJvdW5kRnVuY3Rpb24gPSBmdW5jdGlvbiBib3VuZCgvKiBhcmdzLi4uICovKSB7XG4gICAgdmFyIGFyZ3MgPSBwYXJ0QXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIGJvdW5kRnVuY3Rpb24gPyBjb25zdHJ1Y3QoZm4sIGFyZ3MubGVuZ3RoLCBhcmdzKSA6IGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xuICB9O1xuICBpZiAoaXNPYmplY3QoZm4ucHJvdG90eXBlKSkgYm91bmRGdW5jdGlvbi5wcm90b3R5cGUgPSBmbi5wcm90b3R5cGU7XG4gIHJldHVybiBib3VuZEZ1bmN0aW9uO1xufTtcbiIsInZhciBwYXRoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3BhdGgnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbnZhciBhRnVuY3Rpb24gPSBmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YXJpYWJsZSA9PSAnZnVuY3Rpb24nID8gdmFyaWFibGUgOiB1bmRlZmluZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lc3BhY2UsIG1ldGhvZCkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBhRnVuY3Rpb24ocGF0aFtuYW1lc3BhY2VdKSB8fCBhRnVuY3Rpb24oZ2xvYmFsW25hbWVzcGFjZV0pXG4gICAgOiBwYXRoW25hbWVzcGFjZV0gJiYgcGF0aFtuYW1lc3BhY2VdW21ldGhvZF0gfHwgZ2xvYmFsW25hbWVzcGFjZV0gJiYgZ2xvYmFsW25hbWVzcGFjZV1bbWV0aG9kXTtcbn07XG4iLCJ2YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT0gTWF0aCAmJiBpdDtcbn07XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG5tb2R1bGUuZXhwb3J0cyA9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuICBjaGVjayh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdykgfHxcbiAgY2hlY2sodHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZikgfHxcbiAgY2hlY2sodHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsInZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ2RvY3VtZW50JywgJ2RvY3VtZW50RWxlbWVudCcpO1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG5cbi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIURFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuICB9KS5hICE9IDc7XG59KTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxudmFyIHNwbGl0ID0gJycuc3BsaXQ7XG5cbi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG5tb2R1bGUuZXhwb3J0cyA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gdGhyb3dzIGFuIGVycm9yIGluIHJoaW5vLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvcmhpbm8vaXNzdWVzLzM0NlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gIHJldHVybiAhT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCk7XG59KSA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY2xhc3NvZihpdCkgPT0gJ1N0cmluZycgPyBzcGxpdC5jYWxsKGl0LCAnJykgOiBPYmplY3QoaXQpO1xufSA6IE9iamVjdDtcbiIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxudmFyIGZ1bmN0aW9uVG9TdHJpbmcgPSBGdW5jdGlvbi50b1N0cmluZztcblxuLy8gdGhpcyBoZWxwZXIgYnJva2VuIGluIGAzLjQuMS0zLjQuNGAsIHNvIHdlIGNhbid0IHVzZSBgc2hhcmVkYCBoZWxwZXJcbmlmICh0eXBlb2Ygc3RvcmUuaW5zcGVjdFNvdXJjZSAhPSAnZnVuY3Rpb24nKSB7XG4gIHN0b3JlLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb25Ub1N0cmluZy5jYWxsKGl0KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdG9yZS5pbnNwZWN0U291cmNlO1xuIiwidmFyIE5BVElWRV9XRUFLX01BUCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uYXRpdmUtd2Vhay1tYXAnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIG9iamVjdEhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcbnZhciBzZXQsIGdldCwgaGFzO1xuXG52YXIgZW5mb3JjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaGFzKGl0KSA/IGdldChpdCkgOiBzZXQoaXQsIHt9KTtcbn07XG5cbnZhciBnZXR0ZXJGb3IgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIHN0YXRlO1xuICAgIGlmICghaXNPYmplY3QoaXQpIHx8IChzdGF0ZSA9IGdldChpdCkpLnR5cGUgIT09IFRZUEUpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQnKTtcbiAgICB9IHJldHVybiBzdGF0ZTtcbiAgfTtcbn07XG5cbmlmIChOQVRJVkVfV0VBS19NQVApIHtcbiAgdmFyIHN0b3JlID0gbmV3IFdlYWtNYXAoKTtcbiAgdmFyIHdtZ2V0ID0gc3RvcmUuZ2V0O1xuICB2YXIgd21oYXMgPSBzdG9yZS5oYXM7XG4gIHZhciB3bXNldCA9IHN0b3JlLnNldDtcbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIHdtc2V0LmNhbGwoc3RvcmUsIGl0LCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gd21nZXQuY2FsbChzdG9yZSwgaXQpIHx8IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gd21oYXMuY2FsbChzdG9yZSwgaXQpO1xuICB9O1xufSBlbHNlIHtcbiAgdmFyIFNUQVRFID0gc2hhcmVkS2V5KCdzdGF0ZScpO1xuICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoaXQsIFNUQVRFLCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gb2JqZWN0SGFzKGl0LCBTVEFURSkgPyBpdFtTVEFURV0gOiB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIG9iamVjdEhhcyhpdCwgU1RBVEUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXQsXG4gIGdldDogZ2V0LFxuICBoYXM6IGhhcyxcbiAgZW5mb3JjZTogZW5mb3JjZSxcbiAgZ2V0dGVyRm9yOiBnZXR0ZXJGb3Jcbn07XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG4vLyBgSXNBcnJheWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1pc2FycmF5XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNsYXNzb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG52YXIgcmVwbGFjZW1lbnQgPSAvI3xcXC5wcm90b3R5cGVcXC4vO1xuXG52YXIgaXNGb3JjZWQgPSBmdW5jdGlvbiAoZmVhdHVyZSwgZGV0ZWN0aW9uKSB7XG4gIHZhciB2YWx1ZSA9IGRhdGFbbm9ybWFsaXplKGZlYXR1cmUpXTtcbiAgcmV0dXJuIHZhbHVlID09IFBPTFlGSUxMID8gdHJ1ZVxuICAgIDogdmFsdWUgPT0gTkFUSVZFID8gZmFsc2VcbiAgICA6IHR5cGVvZiBkZXRlY3Rpb24gPT0gJ2Z1bmN0aW9uJyA/IGZhaWxzKGRldGVjdGlvbilcbiAgICA6ICEhZGV0ZWN0aW9uO1xufTtcblxudmFyIG5vcm1hbGl6ZSA9IGlzRm9yY2VkLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UocmVwbGFjZW1lbnQsICcuJykudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBkYXRhID0gaXNGb3JjZWQuZGF0YSA9IHt9O1xudmFyIE5BVElWRSA9IGlzRm9yY2VkLk5BVElWRSA9ICdOJztcbnZhciBQT0xZRklMTCA9IGlzRm9yY2VkLlBPTFlGSUxMID0gJ1AnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRm9yY2VkO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIE1BVENIID0gd2VsbEtub3duU3ltYm9sKCdtYXRjaCcpO1xuXG4vLyBgSXNSZWdFeHBgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtaXNyZWdleHBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBpc1JlZ0V4cDtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiAoKGlzUmVnRXhwID0gaXRbTUFUQ0hdKSAhPT0gdW5kZWZpbmVkID8gISFpc1JlZ0V4cCA6IGNsYXNzb2YoaXQpID09ICdSZWdFeHAnKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1lfU0FGQVJJX0lURVJBVE9SUyA9IGZhbHNlO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbi8vIGAlSXRlcmF0b3JQcm90b3R5cGUlYCBvYmplY3Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLSVpdGVyYXRvcnByb3RvdHlwZSUtb2JqZWN0XG52YXIgSXRlcmF0b3JQcm90b3R5cGUsIFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSwgYXJyYXlJdGVyYXRvcjtcblxuaWYgKFtdLmtleXMpIHtcbiAgYXJyYXlJdGVyYXRvciA9IFtdLmtleXMoKTtcbiAgLy8gU2FmYXJpIDggaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gIGlmICghKCduZXh0JyBpbiBhcnJheUl0ZXJhdG9yKSkgQlVHR1lfU0FGQVJJX0lURVJBVE9SUyA9IHRydWU7XG4gIGVsc2Uge1xuICAgIFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKGdldFByb3RvdHlwZU9mKGFycmF5SXRlcmF0b3IpKTtcbiAgICBpZiAoUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKSBJdGVyYXRvclByb3RvdHlwZSA9IFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxufVxuXG5pZiAoSXRlcmF0b3JQcm90b3R5cGUgPT0gdW5kZWZpbmVkKSBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxuaWYgKCFJU19QVVJFICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSkge1xuICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEl0ZXJhdG9yUHJvdG90eXBlOiBJdGVyYXRvclByb3RvdHlwZSxcbiAgQlVHR1lfU0FGQVJJX0lURVJBVE9SUzogQlVHR1lfU0FGQVJJX0lURVJBVE9SU1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gQ2hyb21lIDM4IFN5bWJvbCBoYXMgaW5jb3JyZWN0IHRvU3RyaW5nIGNvbnZlcnNpb25cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHJldHVybiAhU3RyaW5nKFN5bWJvbCgpKTtcbn0pO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpbnNwZWN0U291cmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlJyk7XG5cbnZhciBXZWFrTWFwID0gZ2xvYmFsLldlYWtNYXA7XG5cbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KGluc3BlY3RTb3VyY2UoV2Vha01hcCkpO1xuIiwidmFyIGlzUmVnRXhwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXJlZ2V4cCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXNSZWdFeHAoaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFwiVGhlIG1ldGhvZCBkb2Vzbid0IGFjY2VwdCByZWd1bGFyIGV4cHJlc3Npb25zXCIpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciAkcGFyc2VGbG9hdCA9IGdsb2JhbC5wYXJzZUZsb2F0O1xudmFyIEZPUkNFRCA9IDEgLyAkcGFyc2VGbG9hdCh3aGl0ZXNwYWNlcyArICctMCcpICE9PSAtSW5maW5pdHk7XG5cbi8vIGBwYXJzZUZsb2F0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXBhcnNlZmxvYXQtc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IEZPUkNFRCA/IGZ1bmN0aW9uIHBhcnNlRmxvYXQoc3RyaW5nKSB7XG4gIHZhciB0cmltbWVkU3RyaW5nID0gdHJpbShTdHJpbmcoc3RyaW5nKSk7XG4gIHZhciByZXN1bHQgPSAkcGFyc2VGbG9hdCh0cmltbWVkU3RyaW5nKTtcbiAgcmV0dXJuIHJlc3VsdCA9PT0gMCAmJiB0cmltbWVkU3RyaW5nLmNoYXJBdCgwKSA9PSAnLScgPyAtMCA6IHJlc3VsdDtcbn0gOiAkcGFyc2VGbG9hdDtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBkZWZpbmVQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydGllcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9odG1sJyk7XG52YXIgZG9jdW1lbnRDcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcblxudmFyIEdUID0gJz4nO1xudmFyIExUID0gJzwnO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIFNDUklQVCA9ICdzY3JpcHQnO1xudmFyIElFX1BST1RPID0gc2hhcmVkS2V5KCdJRV9QUk9UTycpO1xuXG52YXIgRW1wdHlDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcblxudmFyIHNjcmlwdFRhZyA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gIHJldHVybiBMVCArIFNDUklQVCArIEdUICsgY29udGVudCArIExUICsgJy8nICsgU0NSSVBUICsgR1Q7XG59O1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgQWN0aXZlWCBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVggPSBmdW5jdGlvbiAoYWN0aXZlWERvY3VtZW50KSB7XG4gIGFjdGl2ZVhEb2N1bWVudC53cml0ZShzY3JpcHRUYWcoJycpKTtcbiAgYWN0aXZlWERvY3VtZW50LmNsb3NlKCk7XG4gIHZhciB0ZW1wID0gYWN0aXZlWERvY3VtZW50LnBhcmVudFdpbmRvdy5PYmplY3Q7XG4gIGFjdGl2ZVhEb2N1bWVudCA9IG51bGw7IC8vIGF2b2lkIG1lbW9yeSBsZWFrXG4gIHJldHVybiB0ZW1wO1xufTtcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIE51bGxQcm90b09iamVjdFZpYUlGcmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IGRvY3VtZW50Q3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gIHZhciBKUyA9ICdqYXZhJyArIFNDUklQVCArICc6JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgaHRtbC5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNDc1XG4gIGlmcmFtZS5zcmMgPSBTdHJpbmcoSlMpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKHNjcmlwdFRhZygnZG9jdW1lbnQuRj1PYmplY3QnKSk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIHJldHVybiBpZnJhbWVEb2N1bWVudC5GO1xufTtcblxuLy8gQ2hlY2sgZm9yIGRvY3VtZW50LmRvbWFpbiBhbmQgYWN0aXZlIHggc3VwcG9ydFxuLy8gTm8gbmVlZCB0byB1c2UgYWN0aXZlIHggYXBwcm9hY2ggd2hlbiBkb2N1bWVudC5kb21haW4gaXMgbm90IHNldFxuLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczUtc2hpbS9pc3N1ZXMvMTUwXG4vLyB2YXJpYXRpb24gb2YgaHR0cHM6Ly9naXRodWIuY29tL2tpdGNhbWJyaWRnZS9lczUtc2hpbS9jb21taXQvNGY3MzhhYzA2NjM0NlxuLy8gYXZvaWQgSUUgR0MgYnVnXG52YXIgYWN0aXZlWERvY3VtZW50O1xudmFyIE51bGxQcm90b09iamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICAvKiBnbG9iYWwgQWN0aXZlWE9iamVjdCAqL1xuICAgIGFjdGl2ZVhEb2N1bWVudCA9IGRvY3VtZW50LmRvbWFpbiAmJiBuZXcgQWN0aXZlWE9iamVjdCgnaHRtbGZpbGUnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogaWdub3JlICovIH1cbiAgTnVsbFByb3RvT2JqZWN0ID0gYWN0aXZlWERvY3VtZW50ID8gTnVsbFByb3RvT2JqZWN0VmlhQWN0aXZlWChhY3RpdmVYRG9jdW1lbnQpIDogTnVsbFByb3RvT2JqZWN0VmlhSUZyYW1lKCk7XG4gIHZhciBsZW5ndGggPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkgZGVsZXRlIE51bGxQcm90b09iamVjdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2xlbmd0aF1dO1xuICByZXR1cm4gTnVsbFByb3RvT2JqZWN0KCk7XG59O1xuXG5oaWRkZW5LZXlzW0lFX1BST1RPXSA9IHRydWU7XG5cbi8vIGBPYmplY3QuY3JlYXRlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5jcmVhdGVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5Q29uc3RydWN0b3JbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eUNvbnN0cnVjdG9yKCk7XG4gICAgRW1wdHlDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBOdWxsUHJvdG9PYmplY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRlZmluZVByb3BlcnRpZXMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cycpO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnRpZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnRpZXNcbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBvYmplY3RLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsZW5ndGggPiBpbmRleCkgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXkgPSBrZXlzW2luZGV4KytdLCBQcm9wZXJ0aWVzW2tleV0pO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xuXG52YXIgbmF0aXZlRGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydHlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnR5XG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/IG5hdGl2ZURlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBuYXRpdmVEZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xuXG52YXIgbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvclxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JbmRleGVkT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoIXByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuIiwidmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIG5hdGl2ZUdldE93blByb3BlcnR5TmFtZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKS5mO1xuXG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uIChpdCkge1xuICB0cnkge1xuICAgIHJldHVybiBuYXRpdmVHZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nXG4gICAgPyBnZXRXaW5kb3dOYW1lcyhpdClcbiAgICA6IG5hdGl2ZUdldE93blByb3BlcnR5TmFtZXModG9JbmRleGVkT2JqZWN0KGl0KSk7XG59O1xuIiwidmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxudmFyIGhpZGRlbktleXMgPSBlbnVtQnVnS2V5cy5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eW5hbWVzXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIENPUlJFQ1RfUFJPVE9UWVBFX0dFVFRFUiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXInKTtcblxudmFyIElFX1BST1RPID0gc2hhcmVkS2V5KCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8vIGBPYmplY3QuZ2V0UHJvdG90eXBlT2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmdldHByb3RvdHlwZW9mXG5tb2R1bGUuZXhwb3J0cyA9IENPUlJFQ1RfUFJPVE9UWVBFX0dFVFRFUiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90b3R5cGUgOiBudWxsO1xufTtcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgaW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluZGV4T2Y7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSAhaGFzKGhpZGRlbktleXMsIGtleSkgJiYgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5pbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxuLy8gYE9iamVjdC5rZXlzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5rZXlzXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgbmF0aXZlUHJvcGVydHlJc0VudW1lcmFibGUgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBOYXNob3JuIH4gSkRLOCBidWdcbnZhciBOQVNIT1JOX0JVRyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvciAmJiAhbmF0aXZlUHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh7IDE6IDIgfSwgMSk7XG5cbi8vIGBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUucHJvcGVydHlpc2VudW1lcmFibGVcbmV4cG9ydHMuZiA9IE5BU0hPUk5fQlVHID8gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoVikge1xuICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLCBWKTtcbiAgcmV0dXJuICEhZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLmVudW1lcmFibGU7XG59IDogbmF0aXZlUHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgYVBvc3NpYmxlUHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtcG9zc2libGUtcHJvdG90eXBlJyk7XG5cbi8vIGBPYmplY3Quc2V0UHJvdG90eXBlT2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LnNldHByb3RvdHlwZW9mXG4vLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyBmdW5jdGlvbiAoKSB7XG4gIHZhciBDT1JSRUNUX1NFVFRFUiA9IGZhbHNlO1xuICB2YXIgdGVzdCA9IHt9O1xuICB2YXIgc2V0dGVyO1xuICB0cnkge1xuICAgIHNldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldDtcbiAgICBzZXR0ZXIuY2FsbCh0ZXN0LCBbXSk7XG4gICAgQ09SUkVDVF9TRVRURVIgPSB0ZXN0IGluc3RhbmNlb2YgQXJyYXk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKSB7XG4gICAgYW5PYmplY3QoTyk7XG4gICAgYVBvc3NpYmxlUHJvdG90eXBlKHByb3RvKTtcbiAgICBpZiAoQ09SUkVDVF9TRVRURVIpIHNldHRlci5jYWxsKE8sIHByb3RvKTtcbiAgICBlbHNlIE8uX19wcm90b19fID0gcHJvdG87XG4gICAgcmV0dXJuIE87XG4gIH07XG59KCkgOiB1bmRlZmluZWQpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIFRPX1NUUklOR19UQUdfU1VQUE9SVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YnKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBUT19TVFJJTkdfVEFHX1NVUFBPUlQgPyB7fS50b1N0cmluZyA6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ1tvYmplY3QgJyArIGNsYXNzb2YodGhpcykgKyAnXSc7XG59O1xuIiwidmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbi8vIGFsbCBvYmplY3Qga2V5cywgaW5jbHVkZXMgbm9uLWVudW1lcmFibGUgYW5kIHN5bWJvbHNcbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignUmVmbGVjdCcsICdvd25LZXlzJykgfHwgZnVuY3Rpb24gb3duS2V5cyhpdCkge1xuICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUuZihhbk9iamVjdChpdCkpO1xuICB2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmY7XG4gIHJldHVybiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBrZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpKSA6IGtleXM7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnbG9iYWw7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgc2V0R2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1nbG9iYWwnKTtcbnZhciBpbnNwZWN0U291cmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xuXG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0O1xudmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5lbmZvcmNlO1xudmFyIFRFTVBMQVRFID0gU3RyaW5nKFN0cmluZykuc3BsaXQoJ1N0cmluZycpO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICB2YXIgdW5zYWZlID0gb3B0aW9ucyA/ICEhb3B0aW9ucy51bnNhZmUgOiBmYWxzZTtcbiAgdmFyIHNpbXBsZSA9IG9wdGlvbnMgPyAhIW9wdGlvbnMuZW51bWVyYWJsZSA6IGZhbHNlO1xuICB2YXIgbm9UYXJnZXRHZXQgPSBvcHRpb25zID8gISFvcHRpb25zLm5vVGFyZ2V0R2V0IDogZmFsc2U7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmICh0eXBlb2Yga2V5ID09ICdzdHJpbmcnICYmICFoYXModmFsdWUsICduYW1lJykpIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSh2YWx1ZSwgJ25hbWUnLCBrZXkpO1xuICAgIGVuZm9yY2VJbnRlcm5hbFN0YXRlKHZhbHVlKS5zb3VyY2UgPSBURU1QTEFURS5qb2luKHR5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyBrZXkgOiAnJyk7XG4gIH1cbiAgaWYgKE8gPT09IGdsb2JhbCkge1xuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2Ugc2V0R2xvYmFsKGtleSwgdmFsdWUpO1xuICAgIHJldHVybjtcbiAgfSBlbHNlIGlmICghdW5zYWZlKSB7XG4gICAgZGVsZXRlIE9ba2V5XTtcbiAgfSBlbHNlIGlmICghbm9UYXJnZXRHZXQgJiYgT1trZXldKSB7XG4gICAgc2ltcGxlID0gdHJ1ZTtcbiAgfVxuICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgZWxzZSBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoTywga2V5LCB2YWx1ZSk7XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIGdldEludGVybmFsU3RhdGUodGhpcykuc291cmNlIHx8IGluc3BlY3RTb3VyY2UodGhpcyk7XG59KTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9jbGFzc29mLXJhdycpO1xudmFyIHJlZ2V4cEV4ZWMgPSByZXF1aXJlKCcuL3JlZ2V4cC1leGVjJyk7XG5cbi8vIGBSZWdFeHBFeGVjYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cGV4ZWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFIsIFMpIHtcbiAgdmFyIGV4ZWMgPSBSLmV4ZWM7XG4gIGlmICh0eXBlb2YgZXhlYyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciByZXN1bHQgPSBleGVjLmNhbGwoUiwgUyk7XG4gICAgaWYgKHR5cGVvZiByZXN1bHQgIT09ICdvYmplY3QnKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ1JlZ0V4cCBleGVjIG1ldGhvZCByZXR1cm5lZCBzb21ldGhpbmcgb3RoZXIgdGhhbiBhbiBPYmplY3Qgb3IgbnVsbCcpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaWYgKGNsYXNzb2YoUikgIT09ICdSZWdFeHAnKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdSZWdFeHAjZXhlYyBjYWxsZWQgb24gaW5jb21wYXRpYmxlIHJlY2VpdmVyJyk7XG4gIH1cblxuICByZXR1cm4gcmVnZXhwRXhlYy5jYWxsKFIsIFMpO1xufTtcblxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHJlZ2V4cEZsYWdzID0gcmVxdWlyZSgnLi9yZWdleHAtZmxhZ3MnKTtcbnZhciBzdGlja3lIZWxwZXJzID0gcmVxdWlyZSgnLi9yZWdleHAtc3RpY2t5LWhlbHBlcnMnKTtcblxudmFyIG5hdGl2ZUV4ZWMgPSBSZWdFeHAucHJvdG90eXBlLmV4ZWM7XG4vLyBUaGlzIGFsd2F5cyByZWZlcnMgdG8gdGhlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiwgYmVjYXVzZSB0aGVcbi8vIFN0cmluZyNyZXBsYWNlIHBvbHlmaWxsIHVzZXMgLi9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljLmpzLFxuLy8gd2hpY2ggbG9hZHMgdGhpcyBmaWxlIGJlZm9yZSBwYXRjaGluZyB0aGUgbWV0aG9kLlxudmFyIG5hdGl2ZVJlcGxhY2UgPSBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2U7XG5cbnZhciBwYXRjaGVkRXhlYyA9IG5hdGl2ZUV4ZWM7XG5cbnZhciBVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgcmUxID0gL2EvO1xuICB2YXIgcmUyID0gL2IqL2c7XG4gIG5hdGl2ZUV4ZWMuY2FsbChyZTEsICdhJyk7XG4gIG5hdGl2ZUV4ZWMuY2FsbChyZTIsICdhJyk7XG4gIHJldHVybiByZTEubGFzdEluZGV4ICE9PSAwIHx8IHJlMi5sYXN0SW5kZXggIT09IDA7XG59KSgpO1xuXG52YXIgVU5TVVBQT1JURURfWSA9IHN0aWNreUhlbHBlcnMuVU5TVVBQT1JURURfWSB8fCBzdGlja3lIZWxwZXJzLkJST0tFTl9DQVJFVDtcblxuLy8gbm9ucGFydGljaXBhdGluZyBjYXB0dXJpbmcgZ3JvdXAsIGNvcGllZCBmcm9tIGVzNS1zaGltJ3MgU3RyaW5nI3NwbGl0IHBhdGNoLlxudmFyIE5QQ0dfSU5DTFVERUQgPSAvKCk/Py8uZXhlYygnJylbMV0gIT09IHVuZGVmaW5lZDtcblxudmFyIFBBVENIID0gVVBEQVRFU19MQVNUX0lOREVYX1dST05HIHx8IE5QQ0dfSU5DTFVERUQgfHwgVU5TVVBQT1JURURfWTtcblxuaWYgKFBBVENIKSB7XG4gIHBhdGNoZWRFeGVjID0gZnVuY3Rpb24gZXhlYyhzdHIpIHtcbiAgICB2YXIgcmUgPSB0aGlzO1xuICAgIHZhciBsYXN0SW5kZXgsIHJlQ29weSwgbWF0Y2gsIGk7XG4gICAgdmFyIHN0aWNreSA9IFVOU1VQUE9SVEVEX1kgJiYgcmUuc3RpY2t5O1xuICAgIHZhciBmbGFncyA9IHJlZ2V4cEZsYWdzLmNhbGwocmUpO1xuICAgIHZhciBzb3VyY2UgPSByZS5zb3VyY2U7XG4gICAgdmFyIGNoYXJzQWRkZWQgPSAwO1xuICAgIHZhciBzdHJDb3B5ID0gc3RyO1xuXG4gICAgaWYgKHN0aWNreSkge1xuICAgICAgZmxhZ3MgPSBmbGFncy5yZXBsYWNlKCd5JywgJycpO1xuICAgICAgaWYgKGZsYWdzLmluZGV4T2YoJ2cnKSA9PT0gLTEpIHtcbiAgICAgICAgZmxhZ3MgKz0gJ2cnO1xuICAgICAgfVxuXG4gICAgICBzdHJDb3B5ID0gU3RyaW5nKHN0cikuc2xpY2UocmUubGFzdEluZGV4KTtcbiAgICAgIC8vIFN1cHBvcnQgYW5jaG9yZWQgc3RpY2t5IGJlaGF2aW9yLlxuICAgICAgaWYgKHJlLmxhc3RJbmRleCA+IDAgJiYgKCFyZS5tdWx0aWxpbmUgfHwgcmUubXVsdGlsaW5lICYmIHN0cltyZS5sYXN0SW5kZXggLSAxXSAhPT0gJ1xcbicpKSB7XG4gICAgICAgIHNvdXJjZSA9ICcoPzogJyArIHNvdXJjZSArICcpJztcbiAgICAgICAgc3RyQ29weSA9ICcgJyArIHN0ckNvcHk7XG4gICAgICAgIGNoYXJzQWRkZWQrKztcbiAgICAgIH1cbiAgICAgIC8vIF4oPyArIHJ4ICsgKSBpcyBuZWVkZWQsIGluIGNvbWJpbmF0aW9uIHdpdGggc29tZSBzdHIgc2xpY2luZywgdG9cbiAgICAgIC8vIHNpbXVsYXRlIHRoZSAneScgZmxhZy5cbiAgICAgIHJlQ29weSA9IG5ldyBSZWdFeHAoJ14oPzonICsgc291cmNlICsgJyknLCBmbGFncyk7XG4gICAgfVxuXG4gICAgaWYgKE5QQ0dfSU5DTFVERUQpIHtcbiAgICAgIHJlQ29weSA9IG5ldyBSZWdFeHAoJ14nICsgc291cmNlICsgJyQoPyFcXFxccyknLCBmbGFncyk7XG4gICAgfVxuICAgIGlmIChVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcpIGxhc3RJbmRleCA9IHJlLmxhc3RJbmRleDtcblxuICAgIG1hdGNoID0gbmF0aXZlRXhlYy5jYWxsKHN0aWNreSA/IHJlQ29weSA6IHJlLCBzdHJDb3B5KTtcblxuICAgIGlmIChzdGlja3kpIHtcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICBtYXRjaC5pbnB1dCA9IG1hdGNoLmlucHV0LnNsaWNlKGNoYXJzQWRkZWQpO1xuICAgICAgICBtYXRjaFswXSA9IG1hdGNoWzBdLnNsaWNlKGNoYXJzQWRkZWQpO1xuICAgICAgICBtYXRjaC5pbmRleCA9IHJlLmxhc3RJbmRleDtcbiAgICAgICAgcmUubGFzdEluZGV4ICs9IG1hdGNoWzBdLmxlbmd0aDtcbiAgICAgIH0gZWxzZSByZS5sYXN0SW5kZXggPSAwO1xuICAgIH0gZWxzZSBpZiAoVVBEQVRFU19MQVNUX0lOREVYX1dST05HICYmIG1hdGNoKSB7XG4gICAgICByZS5sYXN0SW5kZXggPSByZS5nbG9iYWwgPyBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCA6IGxhc3RJbmRleDtcbiAgICB9XG4gICAgaWYgKE5QQ0dfSU5DTFVERUQgJiYgbWF0Y2ggJiYgbWF0Y2gubGVuZ3RoID4gMSkge1xuICAgICAgLy8gRml4IGJyb3dzZXJzIHdob3NlIGBleGVjYCBtZXRob2RzIGRvbid0IGNvbnNpc3RlbnRseSByZXR1cm4gYHVuZGVmaW5lZGBcbiAgICAgIC8vIGZvciBOUENHLCBsaWtlIElFOC4gTk9URTogVGhpcyBkb2Vzbicgd29yayBmb3IgLyguPyk/L1xuICAgICAgbmF0aXZlUmVwbGFjZS5jYWxsKG1hdGNoWzBdLCByZUNvcHksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yIChpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGggLSAyOyBpKyspIHtcbiAgICAgICAgICBpZiAoYXJndW1lbnRzW2ldID09PSB1bmRlZmluZWQpIG1hdGNoW2ldID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2g7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGF0Y2hlZEV4ZWM7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbi8vIGBSZWdFeHAucHJvdG90eXBlLmZsYWdzYCBnZXR0ZXIgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWdldC1yZWdleHAucHJvdG90eXBlLmZsYWdzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRoYXQgPSBhbk9iamVjdCh0aGlzKTtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICBpZiAodGhhdC5nbG9iYWwpIHJlc3VsdCArPSAnZyc7XG4gIGlmICh0aGF0Lmlnbm9yZUNhc2UpIHJlc3VsdCArPSAnaSc7XG4gIGlmICh0aGF0Lm11bHRpbGluZSkgcmVzdWx0ICs9ICdtJztcbiAgaWYgKHRoYXQuZG90QWxsKSByZXN1bHQgKz0gJ3MnO1xuICBpZiAodGhhdC51bmljb2RlKSByZXN1bHQgKz0gJ3UnO1xuICBpZiAodGhhdC5zdGlja3kpIHJlc3VsdCArPSAneSc7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL2ZhaWxzJyk7XG5cbi8vIGJhYmVsLW1pbmlmeSB0cmFuc3BpbGVzIFJlZ0V4cCgnYScsICd5JykgLT4gL2EveSBhbmQgaXQgY2F1c2VzIFN5bnRheEVycm9yLFxuLy8gc28gd2UgdXNlIGFuIGludGVybWVkaWF0ZSBmdW5jdGlvbi5cbmZ1bmN0aW9uIFJFKHMsIGYpIHtcbiAgcmV0dXJuIFJlZ0V4cChzLCBmKTtcbn1cblxuZXhwb3J0cy5VTlNVUFBPUlRFRF9ZID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBiYWJlbC1taW5pZnkgdHJhbnNwaWxlcyBSZWdFeHAoJ2EnLCAneScpIC0+IC9hL3kgYW5kIGl0IGNhdXNlcyBTeW50YXhFcnJvclxuICB2YXIgcmUgPSBSRSgnYScsICd5Jyk7XG4gIHJlLmxhc3RJbmRleCA9IDI7XG4gIHJldHVybiByZS5leGVjKCdhYmNkJykgIT0gbnVsbDtcbn0pO1xuXG5leHBvcnRzLkJST0tFTl9DQVJFVCA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NzczNjg3XG4gIHZhciByZSA9IFJFKCdecicsICdneScpO1xuICByZS5sYXN0SW5kZXggPSAyO1xuICByZXR1cm4gcmUuZXhlYygnc3RyJykgIT0gbnVsbDtcbn0pO1xuIiwiLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVxdWlyZW9iamVjdGNvZXJjaWJsZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICB0cnkge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShnbG9iYWwsIGtleSwgdmFsdWUpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFtrZXldID0gdmFsdWU7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcbiIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgVEFHLCBTVEFUSUMpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBTVEFUSUMgPyBpdCA6IGl0LnByb3RvdHlwZSwgVE9fU1RSSU5HX1RBRykpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eShpdCwgVE9fU1RSSU5HX1RBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiBUQUcgfSk7XG4gIH1cbn07XG4iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcblxudmFyIGtleXMgPSBzaGFyZWQoJ2tleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBrZXlzW2tleV0gfHwgKGtleXNba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNldEdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtZ2xvYmFsJyk7XG5cbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IHNldEdsb2JhbChTSEFSRUQsIHt9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdG9yZTtcbiIsInZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246ICczLjYuNScsXG4gIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAyMCBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSdcbn0pO1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUueyBjb2RlUG9pbnRBdCwgYXQgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChDT05WRVJUX1RPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBwb3MpIHtcbiAgICB2YXIgUyA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCR0aGlzKSk7XG4gICAgdmFyIHBvc2l0aW9uID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIHNpemUgPSBTLmxlbmd0aDtcbiAgICB2YXIgZmlyc3QsIHNlY29uZDtcbiAgICBpZiAocG9zaXRpb24gPCAwIHx8IHBvc2l0aW9uID49IHNpemUpIHJldHVybiBDT05WRVJUX1RPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGZpcnN0ID0gUy5jaGFyQ29kZUF0KHBvc2l0aW9uKTtcbiAgICByZXR1cm4gZmlyc3QgPCAweEQ4MDAgfHwgZmlyc3QgPiAweERCRkYgfHwgcG9zaXRpb24gKyAxID09PSBzaXplXG4gICAgICB8fCAoc2Vjb25kID0gUy5jaGFyQ29kZUF0KHBvc2l0aW9uICsgMSkpIDwgMHhEQzAwIHx8IHNlY29uZCA+IDB4REZGRlxuICAgICAgICA/IENPTlZFUlRfVE9fU1RSSU5HID8gUy5jaGFyQXQocG9zaXRpb24pIDogZmlyc3RcbiAgICAgICAgOiBDT05WRVJUX1RPX1NUUklORyA/IFMuc2xpY2UocG9zaXRpb24sIHBvc2l0aW9uICsgMikgOiAoZmlyc3QgLSAweEQ4MDAgPDwgMTApICsgKHNlY29uZCAtIDB4REMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLmNvZGVQb2ludEF0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5jb2RlcG9pbnRhdFxuICBjb2RlQXQ6IGNyZWF0ZU1ldGhvZChmYWxzZSksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLmF0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21hdGhpYXNieW5lbnMvU3RyaW5nLnByb3RvdHlwZS5hdFxuICBjaGFyQXQ6IGNyZWF0ZU1ldGhvZCh0cnVlKVxufTtcbiIsInZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciB3aGl0ZXNwYWNlID0gJ1snICsgd2hpdGVzcGFjZXMgKyAnXSc7XG52YXIgbHRyaW0gPSBSZWdFeHAoJ14nICsgd2hpdGVzcGFjZSArIHdoaXRlc3BhY2UgKyAnKicpO1xudmFyIHJ0cmltID0gUmVnRXhwKHdoaXRlc3BhY2UgKyB3aGl0ZXNwYWNlICsgJyokJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbSwgdHJpbVN0YXJ0LCB0cmltRW5kLCB0cmltTGVmdCwgdHJpbVJpZ2h0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzKSB7XG4gICAgdmFyIHN0cmluZyA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCR0aGlzKSk7XG4gICAgaWYgKFRZUEUgJiAxKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShsdHJpbSwgJycpO1xuICAgIGlmIChUWVBFICYgMikgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UocnRyaW0sICcnKTtcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbUxlZnQsIHRyaW1TdGFydCB9YCBtZXRob2RzXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbXN0YXJ0XG4gIHN0YXJ0OiBjcmVhdGVNZXRob2QoMSksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbVJpZ2h0LCB0cmltRW5kIH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltZW5kXG4gIGVuZDogY3JlYXRlTWV0aG9kKDIpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS50cmltYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltXG4gIHRyaW06IGNyZWF0ZU1ldGhvZCgzKVxufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlcicpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIEhlbHBlciBmb3IgYSBwb3B1bGFyIHJlcGVhdGluZyBjYXNlIG9mIHRoZSBzcGVjOlxuLy8gTGV0IGludGVnZXIgYmUgPyBUb0ludGVnZXIoaW5kZXgpLlxuLy8gSWYgaW50ZWdlciA8IDAsIGxldCByZXN1bHQgYmUgbWF4KChsZW5ndGggKyBpbnRlZ2VyKSwgMCk7IGVsc2UgbGV0IHJlc3VsdCBiZSBtaW4oaW50ZWdlciwgbGVuZ3RoKS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgdmFyIGludGVnZXIgPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW50ZWdlciA8IDAgPyBtYXgoaW50ZWdlciArIGxlbmd0aCwgMCkgOiBtaW4oaW50ZWdlciwgbGVuZ3RoKTtcbn07XG4iLCIvLyB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSW5kZXhlZE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGl0KSk7XG59O1xuIiwidmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vLyBgVG9JbnRlZ2VyYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvaW50ZWdlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGlzTmFOKGFyZ3VtZW50ID0gK2FyZ3VtZW50KSA/IDAgOiAoYXJndW1lbnQgPiAwID8gZmxvb3IgOiBjZWlsKShhcmd1bWVudCk7XG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG5cbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gYFRvTGVuZ3RoYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvbGVuZ3RoXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gYXJndW1lbnQgPiAwID8gbWluKHRvSW50ZWdlcihhcmd1bWVudCksIDB4MUZGRkZGRkZGRkZGRkYpIDogMDsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsInZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG4vLyBgVG9PYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9vYmplY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudCkpO1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxuLy8gYFRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBQUkVGRVJSRURfU1RSSU5HKSB7XG4gIGlmICghaXNPYmplY3QoaW5wdXQpKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUFJFRkVSUkVEX1NUUklORyAmJiB0eXBlb2YgKGZuID0gaW5wdXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpbnB1dC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUFJFRkVSUkVEX1NUUklORyAmJiB0eXBlb2YgKGZuID0gaW5wdXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsInZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG52YXIgdGVzdCA9IHt9O1xuXG50ZXN0W1RPX1NUUklOR19UQUddID0gJ3onO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0cmluZyh0ZXN0KSA9PT0gJ1tvYmplY3Qgel0nO1xuIiwidmFyIGlkID0gMDtcbnZhciBwb3N0Zml4ID0gTWF0aC5yYW5kb20oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcgKyBTdHJpbmcoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSkgKyAnKV8nICsgKCsraWQgKyBwb3N0Zml4KS50b1N0cmluZygzNik7XG59O1xuIiwidmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXN5bWJvbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9TWU1CT0xcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICYmICFTeW1ib2wuc2hhbVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcbiIsInZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxuZXhwb3J0cy5mID0gd2VsbEtub3duU3ltYm9sO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25hdGl2ZS1zeW1ib2wnKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgV2VsbEtub3duU3ltYm9sc1N0b3JlID0gc2hhcmVkKCd3a3MnKTtcbnZhciBTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyIGNyZWF0ZVdlbGxLbm93blN5bWJvbCA9IFVTRV9TWU1CT0xfQVNfVUlEID8gU3ltYm9sIDogU3ltYm9sICYmIFN5bWJvbC53aXRob3V0U2V0dGVyIHx8IHVpZDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICBpZiAoIWhhcyhXZWxsS25vd25TeW1ib2xzU3RvcmUsIG5hbWUpKSB7XG4gICAgaWYgKE5BVElWRV9TWU1CT0wgJiYgaGFzKFN5bWJvbCwgbmFtZSkpIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IFN5bWJvbFtuYW1lXTtcbiAgICBlbHNlIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IGNyZWF0ZVdlbGxLbm93blN5bWJvbCgnU3ltYm9sLicgKyBuYW1lKTtcbiAgfSByZXR1cm4gV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdO1xufTtcbiIsIi8vIGEgc3RyaW5nIG9mIGFsbCB2YWxpZCB1bmljb2RlIHdoaXRlc3BhY2VzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxubW9kdWxlLmV4cG9ydHMgPSAnXFx1MDAwOVxcdTAwMEFcXHUwMDBCXFx1MDAwQ1xcdTAwMERcXHUwMDIwXFx1MDBBMFxcdTE2ODBcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjhcXHUyMDI5XFx1RkVGRic7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciBhcnJheVNwZWNpZXNDcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xuXG52YXIgSVNfQ09OQ0FUX1NQUkVBREFCTEUgPSB3ZWxsS25vd25TeW1ib2woJ2lzQ29uY2F0U3ByZWFkYWJsZScpO1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSAweDFGRkZGRkZGRkZGRkZGO1xudmFyIE1BWElNVU1fQUxMT1dFRF9JTkRFWF9FWENFRURFRCA9ICdNYXhpbXVtIGFsbG93ZWQgaW5kZXggZXhjZWVkZWQnO1xuXG4vLyBXZSBjYW4ndCB1c2UgdGhpcyBmZWF0dXJlIGRldGVjdGlvbiBpbiBWOCBzaW5jZSBpdCBjYXVzZXNcbi8vIGRlb3B0aW1pemF0aW9uIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjc5XG52YXIgSVNfQ09OQ0FUX1NQUkVBREFCTEVfU1VQUE9SVCA9IFY4X1ZFUlNJT04gPj0gNTEgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGFycmF5ID0gW107XG4gIGFycmF5W0lTX0NPTkNBVF9TUFJFQURBQkxFXSA9IGZhbHNlO1xuICByZXR1cm4gYXJyYXkuY29uY2F0KClbMF0gIT09IGFycmF5O1xufSk7XG5cbnZhciBTUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdjb25jYXQnKTtcblxudmFyIGlzQ29uY2F0U3ByZWFkYWJsZSA9IGZ1bmN0aW9uIChPKSB7XG4gIGlmICghaXNPYmplY3QoTykpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNwcmVhZGFibGUgPSBPW0lTX0NPTkNBVF9TUFJFQURBQkxFXTtcbiAgcmV0dXJuIHNwcmVhZGFibGUgIT09IHVuZGVmaW5lZCA/ICEhc3ByZWFkYWJsZSA6IGlzQXJyYXkoTyk7XG59O1xuXG52YXIgRk9SQ0VEID0gIUlTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgfHwgIVNQRUNJRVNfU1VQUE9SVDtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5jb25jYXRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmNvbmNhdFxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQGlzQ29uY2F0U3ByZWFkYWJsZSBhbmQgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICBjb25jYXQ6IGZ1bmN0aW9uIGNvbmNhdChhcmcpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gICAgdmFyIEEgPSBhcnJheVNwZWNpZXNDcmVhdGUoTywgMCk7XG4gICAgdmFyIG4gPSAwO1xuICAgIHZhciBpLCBrLCBsZW5ndGgsIGxlbiwgRTtcbiAgICBmb3IgKGkgPSAtMSwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBFID0gaSA9PT0gLTEgPyBPIDogYXJndW1lbnRzW2ldO1xuICAgICAgaWYgKGlzQ29uY2F0U3ByZWFkYWJsZShFKSkge1xuICAgICAgICBsZW4gPSB0b0xlbmd0aChFLmxlbmd0aCk7XG4gICAgICAgIGlmIChuICsgbGVuID4gTUFYX1NBRkVfSU5URUdFUikgdGhyb3cgVHlwZUVycm9yKE1BWElNVU1fQUxMT1dFRF9JTkRFWF9FWENFRURFRCk7XG4gICAgICAgIGZvciAoayA9IDA7IGsgPCBsZW47IGsrKywgbisrKSBpZiAoayBpbiBFKSBjcmVhdGVQcm9wZXJ0eShBLCBuLCBFW2tdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChuID49IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93IFR5cGVFcnJvcihNQVhJTVVNX0FMTE9XRURfSU5ERVhfRVhDRUVERUQpO1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShBLCBuKyssIEUpO1xuICAgICAgfVxuICAgIH1cbiAgICBBLmxlbmd0aCA9IG47XG4gICAgcmV0dXJuIEE7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mb3ItZWFjaCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFtdLmZvckVhY2ggIT0gZm9yRWFjaCB9LCB7XG4gIGZvckVhY2g6IGZvckVhY2hcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGluY2x1ZGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5jbHVkZXM7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtdXNlcy10by1sZW5ndGgnKTtcblxudmFyIFVTRVNfVE9fTEVOR1RIID0gYXJyYXlNZXRob2RVc2VzVG9MZW5ndGgoJ2luZGV4T2YnLCB7IEFDQ0VTU09SUzogdHJ1ZSwgMTogMCB9KTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFVU0VTX1RPX0xFTkdUSCB9LCB7XG4gIGluY2x1ZGVzOiBmdW5jdGlvbiBpbmNsdWRlcyhlbCAvKiAsIGZyb21JbmRleCA9IDAgKi8pIHtcbiAgICByZXR1cm4gJGluY2x1ZGVzKHRoaXMsIGVsLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuYWRkVG9VbnNjb3BhYmxlcygnaW5jbHVkZXMnKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG52YXIgZGVmaW5lSXRlcmF0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWl0ZXJhdG9yJyk7XG5cbnZhciBBUlJBWV9JVEVSQVRPUiA9ICdBcnJheSBJdGVyYXRvcic7XG52YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcihBUlJBWV9JVEVSQVRPUik7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZW50cmllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZW50cmllc1xuLy8gYEFycmF5LnByb3RvdHlwZS5rZXlzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5rZXlzXG4vLyBgQXJyYXkucHJvdG90eXBlLnZhbHVlc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUudmFsdWVzXG4vLyBgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQGl0ZXJhdG9yXG4vLyBgQ3JlYXRlQXJyYXlJdGVyYXRvcmAgaW50ZXJuYWwgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1jcmVhdGVhcnJheWl0ZXJhdG9yXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmluZUl0ZXJhdG9yKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgc2V0SW50ZXJuYWxTdGF0ZSh0aGlzLCB7XG4gICAgdHlwZTogQVJSQVlfSVRFUkFUT1IsXG4gICAgdGFyZ2V0OiB0b0luZGV4ZWRPYmplY3QoaXRlcmF0ZWQpLCAvLyB0YXJnZXRcbiAgICBpbmRleDogMCwgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgICBraW5kOiBraW5kICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGtpbmRcbiAgfSk7XG4vLyBgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtJWFycmF5aXRlcmF0b3Jwcm90b3R5cGUlLm5leHRcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKTtcbiAgdmFyIHRhcmdldCA9IHN0YXRlLnRhcmdldDtcbiAgdmFyIGtpbmQgPSBzdGF0ZS5raW5kO1xuICB2YXIgaW5kZXggPSBzdGF0ZS5pbmRleCsrO1xuICBpZiAoIXRhcmdldCB8fCBpbmRleCA+PSB0YXJnZXQubGVuZ3RoKSB7XG4gICAgc3RhdGUudGFyZ2V0ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiB7IHZhbHVlOiBpbmRleCwgZG9uZTogZmFsc2UgfTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiB7IHZhbHVlOiB0YXJnZXRbaW5kZXhdLCBkb25lOiBmYWxzZSB9O1xuICByZXR1cm4geyB2YWx1ZTogW2luZGV4LCB0YXJnZXRbaW5kZXhdXSwgZG9uZTogZmFsc2UgfTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1jcmVhdGV1bm1hcHBlZGFyZ3VtZW50c29iamVjdFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtY3JlYXRlbWFwcGVkYXJndW1lbnRzb2JqZWN0XG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXgnKTtcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlcicpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcbnZhciBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtdXNlcy10by1sZW5ndGgnKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdzcGxpY2UnKTtcbnZhciBVU0VTX1RPX0xFTkdUSCA9IGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoKCdzcGxpY2UnLCB7IEFDQ0VTU09SUzogdHJ1ZSwgMDogMCwgMTogMiB9KTtcblxudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSAweDFGRkZGRkZGRkZGRkZGO1xudmFyIE1BWElNVU1fQUxMT1dFRF9MRU5HVEhfRVhDRUVERUQgPSAnTWF4aW11bSBhbGxvd2VkIGxlbmd0aCBleGNlZWRlZCc7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuc3BsaWNlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5zcGxpY2Vcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB8fCAhVVNFU19UT19MRU5HVEggfSwge1xuICBzcGxpY2U6IGZ1bmN0aW9uIHNwbGljZShzdGFydCwgZGVsZXRlQ291bnQgLyogLCAuLi5pdGVtcyAqLykge1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gICAgdmFyIGxlbiA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgYWN0dWFsU3RhcnQgPSB0b0Fic29sdXRlSW5kZXgoc3RhcnQsIGxlbik7XG4gICAgdmFyIGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgdmFyIGluc2VydENvdW50LCBhY3R1YWxEZWxldGVDb3VudCwgQSwgaywgZnJvbSwgdG87XG4gICAgaWYgKGFyZ3VtZW50c0xlbmd0aCA9PT0gMCkge1xuICAgICAgaW5zZXJ0Q291bnQgPSBhY3R1YWxEZWxldGVDb3VudCA9IDA7XG4gICAgfSBlbHNlIGlmIChhcmd1bWVudHNMZW5ndGggPT09IDEpIHtcbiAgICAgIGluc2VydENvdW50ID0gMDtcbiAgICAgIGFjdHVhbERlbGV0ZUNvdW50ID0gbGVuIC0gYWN0dWFsU3RhcnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluc2VydENvdW50ID0gYXJndW1lbnRzTGVuZ3RoIC0gMjtcbiAgICAgIGFjdHVhbERlbGV0ZUNvdW50ID0gbWluKG1heCh0b0ludGVnZXIoZGVsZXRlQ291bnQpLCAwKSwgbGVuIC0gYWN0dWFsU3RhcnQpO1xuICAgIH1cbiAgICBpZiAobGVuICsgaW5zZXJ0Q291bnQgLSBhY3R1YWxEZWxldGVDb3VudCA+IE1BWF9TQUZFX0lOVEVHRVIpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcihNQVhJTVVNX0FMTE9XRURfTEVOR1RIX0VYQ0VFREVEKTtcbiAgICB9XG4gICAgQSA9IGFycmF5U3BlY2llc0NyZWF0ZShPLCBhY3R1YWxEZWxldGVDb3VudCk7XG4gICAgZm9yIChrID0gMDsgayA8IGFjdHVhbERlbGV0ZUNvdW50OyBrKyspIHtcbiAgICAgIGZyb20gPSBhY3R1YWxTdGFydCArIGs7XG4gICAgICBpZiAoZnJvbSBpbiBPKSBjcmVhdGVQcm9wZXJ0eShBLCBrLCBPW2Zyb21dKTtcbiAgICB9XG4gICAgQS5sZW5ndGggPSBhY3R1YWxEZWxldGVDb3VudDtcbiAgICBpZiAoaW5zZXJ0Q291bnQgPCBhY3R1YWxEZWxldGVDb3VudCkge1xuICAgICAgZm9yIChrID0gYWN0dWFsU3RhcnQ7IGsgPCBsZW4gLSBhY3R1YWxEZWxldGVDb3VudDsgaysrKSB7XG4gICAgICAgIGZyb20gPSBrICsgYWN0dWFsRGVsZXRlQ291bnQ7XG4gICAgICAgIHRvID0gayArIGluc2VydENvdW50O1xuICAgICAgICBpZiAoZnJvbSBpbiBPKSBPW3RvXSA9IE9bZnJvbV07XG4gICAgICAgIGVsc2UgZGVsZXRlIE9bdG9dO1xuICAgICAgfVxuICAgICAgZm9yIChrID0gbGVuOyBrID4gbGVuIC0gYWN0dWFsRGVsZXRlQ291bnQgKyBpbnNlcnRDb3VudDsgay0tKSBkZWxldGUgT1trIC0gMV07XG4gICAgfSBlbHNlIGlmIChpbnNlcnRDb3VudCA+IGFjdHVhbERlbGV0ZUNvdW50KSB7XG4gICAgICBmb3IgKGsgPSBsZW4gLSBhY3R1YWxEZWxldGVDb3VudDsgayA+IGFjdHVhbFN0YXJ0OyBrLS0pIHtcbiAgICAgICAgZnJvbSA9IGsgKyBhY3R1YWxEZWxldGVDb3VudCAtIDE7XG4gICAgICAgIHRvID0gayArIGluc2VydENvdW50IC0gMTtcbiAgICAgICAgaWYgKGZyb20gaW4gTykgT1t0b10gPSBPW2Zyb21dO1xuICAgICAgICBlbHNlIGRlbGV0ZSBPW3RvXTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChrID0gMDsgayA8IGluc2VydENvdW50OyBrKyspIHtcbiAgICAgIE9bayArIGFjdHVhbFN0YXJ0XSA9IGFyZ3VtZW50c1trICsgMl07XG4gICAgfVxuICAgIE8ubGVuZ3RoID0gbGVuIC0gYWN0dWFsRGVsZXRlQ291bnQgKyBpbnNlcnRDb3VudDtcbiAgICByZXR1cm4gQTtcbiAgfVxufSk7XG4iLCJ2YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcblxudmFyIERhdGVQcm90b3R5cGUgPSBEYXRlLnByb3RvdHlwZTtcbnZhciBJTlZBTElEX0RBVEUgPSAnSW52YWxpZCBEYXRlJztcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyIG5hdGl2ZURhdGVUb1N0cmluZyA9IERhdGVQcm90b3R5cGVbVE9fU1RSSU5HXTtcbnZhciBnZXRUaW1lID0gRGF0ZVByb3RvdHlwZS5nZXRUaW1lO1xuXG4vLyBgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmdgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZGF0ZS5wcm90b3R5cGUudG9zdHJpbmdcbmlmIChuZXcgRGF0ZShOYU4pICsgJycgIT0gSU5WQUxJRF9EQVRFKSB7XG4gIHJlZGVmaW5lKERhdGVQcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgdmFyIHZhbHVlID0gZ2V0VGltZS5jYWxsKHRoaXMpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICByZXR1cm4gdmFsdWUgPT09IHZhbHVlID8gbmF0aXZlRGF0ZVRvU3RyaW5nLmNhbGwodGhpcykgOiBJTlZBTElEX0RBVEU7XG4gIH0pO1xufVxuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBGdW5jdGlvblByb3RvdHlwZVRvU3RyaW5nID0gRnVuY3Rpb25Qcm90b3R5cGUudG9TdHJpbmc7XG52YXIgbmFtZVJFID0gL15cXHMqZnVuY3Rpb24gKFteIChdKikvO1xudmFyIE5BTUUgPSAnbmFtZSc7XG5cbi8vIEZ1bmN0aW9uIGluc3RhbmNlcyBgLm5hbWVgIHByb3BlcnR5XG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1mdW5jdGlvbi1pbnN0YW5jZXMtbmFtZVxuaWYgKERFU0NSSVBUT1JTICYmICEoTkFNRSBpbiBGdW5jdGlvblByb3RvdHlwZSkpIHtcbiAgZGVmaW5lUHJvcGVydHkoRnVuY3Rpb25Qcm90b3R5cGUsIE5BTUUsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gRnVuY3Rpb25Qcm90b3R5cGVUb1N0cmluZy5jYWxsKHRoaXMpLm1hdGNoKG5hbWVSRSlbMV07XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcblxuLy8gYE9iamVjdC5jcmVhdGVgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmNyZWF0ZVxuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIHNoYW06ICFERVNDUklQVE9SUyB9LCB7XG4gIGNyZWF0ZTogY3JlYXRlXG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgb2JqZWN0RGVmaW5lUHJvcGVydHlNb2RpbGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogIURFU0NSSVBUT1JTLCBzaGFtOiAhREVTQ1JJUFRPUlMgfSwge1xuICBkZWZpbmVQcm9wZXJ0eTogb2JqZWN0RGVmaW5lUHJvcGVydHlNb2RpbGUuZlxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIG5hdGl2ZUdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgQ09SUkVDVF9QUk9UT1RZUEVfR0VUVEVSID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcnJlY3QtcHJvdG90eXBlLWdldHRlcicpO1xuXG52YXIgRkFJTFNfT05fUFJJTUlUSVZFUyA9IGZhaWxzKGZ1bmN0aW9uICgpIHsgbmF0aXZlR2V0UHJvdG90eXBlT2YoMSk7IH0pO1xuXG4vLyBgT2JqZWN0LmdldFByb3RvdHlwZU9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRwcm90b3R5cGVvZlxuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogRkFJTFNfT05fUFJJTUlUSVZFUywgc2hhbTogIUNPUlJFQ1RfUFJPVE9UWVBFX0dFVFRFUiB9LCB7XG4gIGdldFByb3RvdHlwZU9mOiBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZihpdCkge1xuICAgIHJldHVybiBuYXRpdmVHZXRQcm90b3R5cGVPZih0b09iamVjdChpdCkpO1xuICB9XG59KTtcblxuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXNldC1wcm90b3R5cGUtb2YnKTtcblxuLy8gYE9iamVjdC5zZXRQcm90b3R5cGVPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3Quc2V0cHJvdG90eXBlb2ZcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlIH0sIHtcbiAgc2V0UHJvdG90eXBlT2Y6IHNldFByb3RvdHlwZU9mXG59KTtcbiIsInZhciBUT19TVFJJTkdfVEFHX1NVUFBPUlQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nLXRhZy1zdXBwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtdG8tc3RyaW5nJyk7XG5cbi8vIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmdcbmlmICghVE9fU1RSSU5HX1RBR19TVVBQT1JUKSB7XG4gIHJlZGVmaW5lKE9iamVjdC5wcm90b3R5cGUsICd0b1N0cmluZycsIHRvU3RyaW5nLCB7IHVuc2FmZTogdHJ1ZSB9KTtcbn1cbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHBhcnNlRmxvYXRJbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9udW1iZXItcGFyc2UtZmxvYXQnKTtcblxuLy8gYHBhcnNlRmxvYXRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcGFyc2VmbG9hdC1zdHJpbmdcbiQoeyBnbG9iYWw6IHRydWUsIGZvcmNlZDogcGFyc2VGbG9hdCAhPSBwYXJzZUZsb2F0SW1wbGVtZW50YXRpb24gfSwge1xuICBwYXJzZUZsb2F0OiBwYXJzZUZsb2F0SW1wbGVtZW50YXRpb25cbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1mdW5jdGlvbicpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyIG5hdGl2ZUNvbnN0cnVjdCA9IGdldEJ1aWx0SW4oJ1JlZmxlY3QnLCAnY29uc3RydWN0Jyk7XG5cbi8vIGBSZWZsZWN0LmNvbnN0cnVjdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWZsZWN0LmNvbnN0cnVjdFxuLy8gTVMgRWRnZSBzdXBwb3J0cyBvbmx5IDIgYXJndW1lbnRzIGFuZCBhcmd1bWVudHNMaXN0IGFyZ3VtZW50IGlzIG9wdGlvbmFsXG4vLyBGRiBOaWdodGx5IHNldHMgdGhpcmQgYXJndW1lbnQgYXMgYG5ldy50YXJnZXRgLCBidXQgZG9lcyBub3QgY3JlYXRlIGB0aGlzYCBmcm9tIGl0XG52YXIgTkVXX1RBUkdFVF9CVUcgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEYoKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuICEobmF0aXZlQ29uc3RydWN0KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgW10sIEYpIGluc3RhbmNlb2YgRik7XG59KTtcbnZhciBBUkdTX0JVRyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIG5hdGl2ZUNvbnN0cnVjdChmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0pO1xufSk7XG52YXIgRk9SQ0VEID0gTkVXX1RBUkdFVF9CVUcgfHwgQVJHU19CVUc7XG5cbiQoeyB0YXJnZXQ6ICdSZWZsZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQsIHNoYW06IEZPUkNFRCB9LCB7XG4gIGNvbnN0cnVjdDogZnVuY3Rpb24gY29uc3RydWN0KFRhcmdldCwgYXJncyAvKiAsIG5ld1RhcmdldCAqLykge1xuICAgIGFGdW5jdGlvbihUYXJnZXQpO1xuICAgIGFuT2JqZWN0KGFyZ3MpO1xuICAgIHZhciBuZXdUYXJnZXQgPSBhcmd1bWVudHMubGVuZ3RoIDwgMyA/IFRhcmdldCA6IGFGdW5jdGlvbihhcmd1bWVudHNbMl0pO1xuICAgIGlmIChBUkdTX0JVRyAmJiAhTkVXX1RBUkdFVF9CVUcpIHJldHVybiBuYXRpdmVDb25zdHJ1Y3QoVGFyZ2V0LCBhcmdzLCBuZXdUYXJnZXQpO1xuICAgIGlmIChUYXJnZXQgPT0gbmV3VGFyZ2V0KSB7XG4gICAgICAvLyB3L28gYWx0ZXJlZCBuZXdUYXJnZXQsIG9wdGltaXphdGlvbiBmb3IgMC00IGFyZ3VtZW50c1xuICAgICAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgVGFyZ2V0KCk7XG4gICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSk7XG4gICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgIGNhc2UgMzogcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgIGNhc2UgNDogcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gICAgICB9XG4gICAgICAvLyB3L28gYWx0ZXJlZCBuZXdUYXJnZXQsIGxvdCBvZiBhcmd1bWVudHMgY2FzZVxuICAgICAgdmFyICRhcmdzID0gW251bGxdO1xuICAgICAgJGFyZ3MucHVzaC5hcHBseSgkYXJncywgYXJncyk7XG4gICAgICByZXR1cm4gbmV3IChiaW5kLmFwcGx5KFRhcmdldCwgJGFyZ3MpKSgpO1xuICAgIH1cbiAgICAvLyB3aXRoIGFsdGVyZWQgbmV3VGFyZ2V0LCBub3Qgc3VwcG9ydCBidWlsdC1pbiBjb25zdHJ1Y3RvcnNcbiAgICB2YXIgcHJvdG8gPSBuZXdUYXJnZXQucHJvdG90eXBlO1xuICAgIHZhciBpbnN0YW5jZSA9IGNyZWF0ZShpc09iamVjdChwcm90bykgPyBwcm90byA6IE9iamVjdC5wcm90b3R5cGUpO1xuICAgIHZhciByZXN1bHQgPSBGdW5jdGlvbi5hcHBseS5jYWxsKFRhcmdldCwgaW5zdGFuY2UsIGFyZ3MpO1xuICAgIHJldHVybiBpc09iamVjdChyZXN1bHQpID8gcmVzdWx0IDogaW5zdGFuY2U7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYycpO1xuXG4kKHsgdGFyZ2V0OiAnUmVnRXhwJywgcHJvdG86IHRydWUsIGZvcmNlZDogLy4vLmV4ZWMgIT09IGV4ZWMgfSwge1xuICBleGVjOiBleGVjXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgZmxhZ3MgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWZsYWdzJyk7XG5cbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyIFJlZ0V4cFByb3RvdHlwZSA9IFJlZ0V4cC5wcm90b3R5cGU7XG52YXIgbmF0aXZlVG9TdHJpbmcgPSBSZWdFeHBQcm90b3R5cGVbVE9fU1RSSU5HXTtcblxudmFyIE5PVF9HRU5FUklDID0gZmFpbHMoZnVuY3Rpb24gKCkgeyByZXR1cm4gbmF0aXZlVG9TdHJpbmcuY2FsbCh7IHNvdXJjZTogJ2EnLCBmbGFnczogJ2InIH0pICE9ICcvYS9iJzsgfSk7XG4vLyBGRjQ0LSBSZWdFeHAjdG9TdHJpbmcgaGFzIGEgd3JvbmcgbmFtZVxudmFyIElOQ09SUkVDVF9OQU1FID0gbmF0aXZlVG9TdHJpbmcubmFtZSAhPSBUT19TVFJJTkc7XG5cbi8vIGBSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUudG9zdHJpbmdcbmlmIChOT1RfR0VORVJJQyB8fCBJTkNPUlJFQ1RfTkFNRSkge1xuICByZWRlZmluZShSZWdFeHAucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHZhciBSID0gYW5PYmplY3QodGhpcyk7XG4gICAgdmFyIHAgPSBTdHJpbmcoUi5zb3VyY2UpO1xuICAgIHZhciByZiA9IFIuZmxhZ3M7XG4gICAgdmFyIGYgPSBTdHJpbmcocmYgPT09IHVuZGVmaW5lZCAmJiBSIGluc3RhbmNlb2YgUmVnRXhwICYmICEoJ2ZsYWdzJyBpbiBSZWdFeHBQcm90b3R5cGUpID8gZmxhZ3MuY2FsbChSKSA6IHJmKTtcbiAgICByZXR1cm4gJy8nICsgcCArICcvJyArIGY7XG4gIH0sIHsgdW5zYWZlOiB0cnVlIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgbm90QVJlZ0V4cCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9ub3QtYS1yZWdleHAnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIGNvcnJlY3RJc1JlZ0V4cExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcnJlY3QtaXMtcmVnZXhwLWxvZ2ljJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXNcbiQoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhY29ycmVjdElzUmVnRXhwTG9naWMoJ2luY2x1ZGVzJykgfSwge1xuICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoc2VhcmNoU3RyaW5nIC8qICwgcG9zaXRpb24gPSAwICovKSB7XG4gICAgcmV0dXJuICEhflN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpKVxuICAgICAgLmluZGV4T2Yobm90QVJlZ0V4cChzZWFyY2hTdHJpbmcpLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNoYXJBdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctbXVsdGlieXRlJykuY2hhckF0O1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcbnZhciBkZWZpbmVJdGVyYXRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtaXRlcmF0b3InKTtcblxudmFyIFNUUklOR19JVEVSQVRPUiA9ICdTdHJpbmcgSXRlcmF0b3InO1xudmFyIHNldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLnNldDtcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXR0ZXJGb3IoU1RSSU5HX0lURVJBVE9SKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl1gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS1AQGl0ZXJhdG9yXG5kZWZpbmVJdGVyYXRvcihTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgc2V0SW50ZXJuYWxTdGF0ZSh0aGlzLCB7XG4gICAgdHlwZTogU1RSSU5HX0lURVJBVE9SLFxuICAgIHN0cmluZzogU3RyaW5nKGl0ZXJhdGVkKSxcbiAgICBpbmRleDogMFxuICB9KTtcbi8vIGAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtJXN0cmluZ2l0ZXJhdG9ycHJvdG90eXBlJS5uZXh0XG59LCBmdW5jdGlvbiBuZXh0KCkge1xuICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpO1xuICB2YXIgc3RyaW5nID0gc3RhdGUuc3RyaW5nO1xuICB2YXIgaW5kZXggPSBzdGF0ZS5pbmRleDtcbiAgdmFyIHBvaW50O1xuICBpZiAoaW5kZXggPj0gc3RyaW5nLmxlbmd0aCkgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICBwb2ludCA9IGNoYXJBdChzdHJpbmcsIGluZGV4KTtcbiAgc3RhdGUuaW5kZXggKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4geyB2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlIH07XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmaXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXInKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIGFkdmFuY2VTdHJpbmdJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZHZhbmNlLXN0cmluZy1pbmRleCcpO1xudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcblxudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbnZhciBTVUJTVElUVVRJT05fU1lNQk9MUyA9IC9cXCQoWyQmJ2BdfFxcZFxcZD98PFtePl0qPikvZztcbnZhciBTVUJTVElUVVRJT05fU1lNQk9MU19OT19OQU1FRCA9IC9cXCQoWyQmJ2BdfFxcZFxcZD8pL2c7XG5cbnZhciBtYXliZVRvU3RyaW5nID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gaXQgOiBTdHJpbmcoaXQpO1xufTtcblxuLy8gQEByZXBsYWNlIGxvZ2ljXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygncmVwbGFjZScsIDIsIGZ1bmN0aW9uIChSRVBMQUNFLCBuYXRpdmVSZXBsYWNlLCBtYXliZUNhbGxOYXRpdmUsIHJlYXNvbikge1xuICB2YXIgUkVHRVhQX1JFUExBQ0VfU1VCU1RJVFVURVNfVU5ERUZJTkVEX0NBUFRVUkUgPSByZWFzb24uUkVHRVhQX1JFUExBQ0VfU1VCU1RJVFVURVNfVU5ERUZJTkVEX0NBUFRVUkU7XG4gIHZhciBSRVBMQUNFX0tFRVBTXyQwID0gcmVhc29uLlJFUExBQ0VfS0VFUFNfJDA7XG4gIHZhciBVTlNBRkVfU1VCU1RJVFVURSA9IFJFR0VYUF9SRVBMQUNFX1NVQlNUSVRVVEVTX1VOREVGSU5FRF9DQVBUVVJFID8gJyQnIDogJyQwJztcblxuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2VgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUucmVwbGFjZVxuICAgIGZ1bmN0aW9uIHJlcGxhY2Uoc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSkge1xuICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgICAgdmFyIHJlcGxhY2VyID0gc2VhcmNoVmFsdWUgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VhcmNoVmFsdWVbUkVQTEFDRV07XG4gICAgICByZXR1cm4gcmVwbGFjZXIgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IHJlcGxhY2VyLmNhbGwoc2VhcmNoVmFsdWUsIE8sIHJlcGxhY2VWYWx1ZSlcbiAgICAgICAgOiBuYXRpdmVSZXBsYWNlLmNhbGwoU3RyaW5nKE8pLCBzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAcmVwbGFjZV1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEByZXBsYWNlXG4gICAgZnVuY3Rpb24gKHJlZ2V4cCwgcmVwbGFjZVZhbHVlKSB7XG4gICAgICBpZiAoXG4gICAgICAgICghUkVHRVhQX1JFUExBQ0VfU1VCU1RJVFVURVNfVU5ERUZJTkVEX0NBUFRVUkUgJiYgUkVQTEFDRV9LRUVQU18kMCkgfHxcbiAgICAgICAgKHR5cGVvZiByZXBsYWNlVmFsdWUgPT09ICdzdHJpbmcnICYmIHJlcGxhY2VWYWx1ZS5pbmRleE9mKFVOU0FGRV9TVUJTVElUVVRFKSA9PT0gLTEpXG4gICAgICApIHtcbiAgICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVSZXBsYWNlLCByZWdleHAsIHRoaXMsIHJlcGxhY2VWYWx1ZSk7XG4gICAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QocmVnZXhwKTtcbiAgICAgIHZhciBTID0gU3RyaW5nKHRoaXMpO1xuXG4gICAgICB2YXIgZnVuY3Rpb25hbFJlcGxhY2UgPSB0eXBlb2YgcmVwbGFjZVZhbHVlID09PSAnZnVuY3Rpb24nO1xuICAgICAgaWYgKCFmdW5jdGlvbmFsUmVwbGFjZSkgcmVwbGFjZVZhbHVlID0gU3RyaW5nKHJlcGxhY2VWYWx1ZSk7XG5cbiAgICAgIHZhciBnbG9iYWwgPSByeC5nbG9iYWw7XG4gICAgICBpZiAoZ2xvYmFsKSB7XG4gICAgICAgIHZhciBmdWxsVW5pY29kZSA9IHJ4LnVuaWNvZGU7XG4gICAgICAgIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICB9XG4gICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpO1xuICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsKSBicmVhaztcblxuICAgICAgICByZXN1bHRzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgaWYgKCFnbG9iYWwpIGJyZWFrO1xuXG4gICAgICAgIHZhciBtYXRjaFN0ciA9IFN0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICBpZiAobWF0Y2hTdHIgPT09ICcnKSByeC5sYXN0SW5kZXggPSBhZHZhbmNlU3RyaW5nSW5kZXgoUywgdG9MZW5ndGgocngubGFzdEluZGV4KSwgZnVsbFVuaWNvZGUpO1xuICAgICAgfVxuXG4gICAgICB2YXIgYWNjdW11bGF0ZWRSZXN1bHQgPSAnJztcbiAgICAgIHZhciBuZXh0U291cmNlUG9zaXRpb24gPSAwO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdHNbaV07XG5cbiAgICAgICAgdmFyIG1hdGNoZWQgPSBTdHJpbmcocmVzdWx0WzBdKTtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gbWF4KG1pbih0b0ludGVnZXIocmVzdWx0LmluZGV4KSwgUy5sZW5ndGgpLCAwKTtcbiAgICAgICAgdmFyIGNhcHR1cmVzID0gW107XG4gICAgICAgIC8vIE5PVEU6IFRoaXMgaXMgZXF1aXZhbGVudCB0b1xuICAgICAgICAvLyAgIGNhcHR1cmVzID0gcmVzdWx0LnNsaWNlKDEpLm1hcChtYXliZVRvU3RyaW5nKVxuICAgICAgICAvLyBidXQgZm9yIHNvbWUgcmVhc29uIGBuYXRpdmVTbGljZS5jYWxsKHJlc3VsdCwgMSwgcmVzdWx0Lmxlbmd0aClgIChjYWxsZWQgaW5cbiAgICAgICAgLy8gdGhlIHNsaWNlIHBvbHlmaWxsIHdoZW4gc2xpY2luZyBuYXRpdmUgYXJyYXlzKSBcImRvZXNuJ3Qgd29ya1wiIGluIHNhZmFyaSA5IGFuZFxuICAgICAgICAvLyBjYXVzZXMgYSBjcmFzaCAoaHR0cHM6Ly9wYXN0ZWJpbi5jb20vTjIxUXplUUEpIHdoZW4gdHJ5aW5nIHRvIGRlYnVnIGl0LlxuICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8IHJlc3VsdC5sZW5ndGg7IGorKykgY2FwdHVyZXMucHVzaChtYXliZVRvU3RyaW5nKHJlc3VsdFtqXSkpO1xuICAgICAgICB2YXIgbmFtZWRDYXB0dXJlcyA9IHJlc3VsdC5ncm91cHM7XG4gICAgICAgIGlmIChmdW5jdGlvbmFsUmVwbGFjZSkge1xuICAgICAgICAgIHZhciByZXBsYWNlckFyZ3MgPSBbbWF0Y2hlZF0uY29uY2F0KGNhcHR1cmVzLCBwb3NpdGlvbiwgUyk7XG4gICAgICAgICAgaWYgKG5hbWVkQ2FwdHVyZXMgIT09IHVuZGVmaW5lZCkgcmVwbGFjZXJBcmdzLnB1c2gobmFtZWRDYXB0dXJlcyk7XG4gICAgICAgICAgdmFyIHJlcGxhY2VtZW50ID0gU3RyaW5nKHJlcGxhY2VWYWx1ZS5hcHBseSh1bmRlZmluZWQsIHJlcGxhY2VyQXJncykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcGxhY2VtZW50ID0gZ2V0U3Vic3RpdHV0aW9uKG1hdGNoZWQsIFMsIHBvc2l0aW9uLCBjYXB0dXJlcywgbmFtZWRDYXB0dXJlcywgcmVwbGFjZVZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zaXRpb24gPj0gbmV4dFNvdXJjZVBvc2l0aW9uKSB7XG4gICAgICAgICAgYWNjdW11bGF0ZWRSZXN1bHQgKz0gUy5zbGljZShuZXh0U291cmNlUG9zaXRpb24sIHBvc2l0aW9uKSArIHJlcGxhY2VtZW50O1xuICAgICAgICAgIG5leHRTb3VyY2VQb3NpdGlvbiA9IHBvc2l0aW9uICsgbWF0Y2hlZC5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2N1bXVsYXRlZFJlc3VsdCArIFMuc2xpY2UobmV4dFNvdXJjZVBvc2l0aW9uKTtcbiAgICB9XG4gIF07XG5cbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZ2V0c3Vic3RpdHV0aW9uXG4gIGZ1bmN0aW9uIGdldFN1YnN0aXR1dGlvbihtYXRjaGVkLCBzdHIsIHBvc2l0aW9uLCBjYXB0dXJlcywgbmFtZWRDYXB0dXJlcywgcmVwbGFjZW1lbnQpIHtcbiAgICB2YXIgdGFpbFBvcyA9IHBvc2l0aW9uICsgbWF0Y2hlZC5sZW5ndGg7XG4gICAgdmFyIG0gPSBjYXB0dXJlcy5sZW5ndGg7XG4gICAgdmFyIHN5bWJvbHMgPSBTVUJTVElUVVRJT05fU1lNQk9MU19OT19OQU1FRDtcbiAgICBpZiAobmFtZWRDYXB0dXJlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBuYW1lZENhcHR1cmVzID0gdG9PYmplY3QobmFtZWRDYXB0dXJlcyk7XG4gICAgICBzeW1ib2xzID0gU1VCU1RJVFVUSU9OX1NZTUJPTFM7XG4gICAgfVxuICAgIHJldHVybiBuYXRpdmVSZXBsYWNlLmNhbGwocmVwbGFjZW1lbnQsIHN5bWJvbHMsIGZ1bmN0aW9uIChtYXRjaCwgY2gpIHtcbiAgICAgIHZhciBjYXB0dXJlO1xuICAgICAgc3dpdGNoIChjaC5jaGFyQXQoMCkpIHtcbiAgICAgICAgY2FzZSAnJCc6IHJldHVybiAnJCc7XG4gICAgICAgIGNhc2UgJyYnOiByZXR1cm4gbWF0Y2hlZDtcbiAgICAgICAgY2FzZSAnYCc6IHJldHVybiBzdHIuc2xpY2UoMCwgcG9zaXRpb24pO1xuICAgICAgICBjYXNlIFwiJ1wiOiByZXR1cm4gc3RyLnNsaWNlKHRhaWxQb3MpO1xuICAgICAgICBjYXNlICc8JzpcbiAgICAgICAgICBjYXB0dXJlID0gbmFtZWRDYXB0dXJlc1tjaC5zbGljZSgxLCAtMSldO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OiAvLyBcXGRcXGQ/XG4gICAgICAgICAgdmFyIG4gPSArY2g7XG4gICAgICAgICAgaWYgKG4gPT09IDApIHJldHVybiBtYXRjaDtcbiAgICAgICAgICBpZiAobiA+IG0pIHtcbiAgICAgICAgICAgIHZhciBmID0gZmxvb3IobiAvIDEwKTtcbiAgICAgICAgICAgIGlmIChmID09PSAwKSByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgICBpZiAoZiA8PSBtKSByZXR1cm4gY2FwdHVyZXNbZiAtIDFdID09PSB1bmRlZmluZWQgPyBjaC5jaGFyQXQoMSkgOiBjYXB0dXJlc1tmIC0gMV0gKyBjaC5jaGFyQXQoMSk7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhcHR1cmUgPSBjYXB0dXJlc1tuIC0gMV07XG4gICAgICB9XG4gICAgICByZXR1cm4gY2FwdHVyZSA9PT0gdW5kZWZpbmVkID8gJycgOiBjYXB0dXJlO1xuICAgIH0pO1xuICB9XG59KTtcbiIsIi8vIGBTeW1ib2wucHJvdG90eXBlLmRlc2NyaXB0aW9uYCBnZXR0ZXJcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN5bWJvbC5wcm90b3R5cGUuZGVzY3JpcHRpb25cbid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcbnZhciBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcycpO1xuXG52YXIgTmF0aXZlU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcblxuaWYgKERFU0NSSVBUT1JTICYmIHR5cGVvZiBOYXRpdmVTeW1ib2wgPT0gJ2Z1bmN0aW9uJyAmJiAoISgnZGVzY3JpcHRpb24nIGluIE5hdGl2ZVN5bWJvbC5wcm90b3R5cGUpIHx8XG4gIC8vIFNhZmFyaSAxMiBidWdcbiAgTmF0aXZlU3ltYm9sKCkuZGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZFxuKSkge1xuICB2YXIgRW1wdHlTdHJpbmdEZXNjcmlwdGlvblN0b3JlID0ge307XG4gIC8vIHdyYXAgU3ltYm9sIGNvbnN0cnVjdG9yIGZvciBjb3JyZWN0IHdvcmsgd2l0aCB1bmRlZmluZWQgZGVzY3JpcHRpb25cbiAgdmFyIFN5bWJvbFdyYXBwZXIgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgdmFyIGRlc2NyaXB0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA8IDEgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBTdHJpbmcoYXJndW1lbnRzWzBdKTtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcyBpbnN0YW5jZW9mIFN5bWJvbFdyYXBwZXJcbiAgICAgID8gbmV3IE5hdGl2ZVN5bWJvbChkZXNjcmlwdGlvbilcbiAgICAgIC8vIGluIEVkZ2UgMTMsIFN0cmluZyhTeW1ib2wodW5kZWZpbmVkKSkgPT09ICdTeW1ib2wodW5kZWZpbmVkKSdcbiAgICAgIDogZGVzY3JpcHRpb24gPT09IHVuZGVmaW5lZCA/IE5hdGl2ZVN5bWJvbCgpIDogTmF0aXZlU3ltYm9sKGRlc2NyaXB0aW9uKTtcbiAgICBpZiAoZGVzY3JpcHRpb24gPT09ICcnKSBFbXB0eVN0cmluZ0Rlc2NyaXB0aW9uU3RvcmVbcmVzdWx0XSA9IHRydWU7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhTeW1ib2xXcmFwcGVyLCBOYXRpdmVTeW1ib2wpO1xuICB2YXIgc3ltYm9sUHJvdG90eXBlID0gU3ltYm9sV3JhcHBlci5wcm90b3R5cGUgPSBOYXRpdmVTeW1ib2wucHJvdG90eXBlO1xuICBzeW1ib2xQcm90b3R5cGUuY29uc3RydWN0b3IgPSBTeW1ib2xXcmFwcGVyO1xuXG4gIHZhciBzeW1ib2xUb1N0cmluZyA9IHN5bWJvbFByb3RvdHlwZS50b1N0cmluZztcbiAgdmFyIG5hdGl2ZSA9IFN0cmluZyhOYXRpdmVTeW1ib2woJ3Rlc3QnKSkgPT0gJ1N5bWJvbCh0ZXN0KSc7XG4gIHZhciByZWdleHAgPSAvXlN5bWJvbFxcKCguKilcXClbXildKyQvO1xuICBkZWZpbmVQcm9wZXJ0eShzeW1ib2xQcm90b3R5cGUsICdkZXNjcmlwdGlvbicsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBkZXNjcmlwdGlvbigpIHtcbiAgICAgIHZhciBzeW1ib2wgPSBpc09iamVjdCh0aGlzKSA/IHRoaXMudmFsdWVPZigpIDogdGhpcztcbiAgICAgIHZhciBzdHJpbmcgPSBzeW1ib2xUb1N0cmluZy5jYWxsKHN5bWJvbCk7XG4gICAgICBpZiAoaGFzKEVtcHR5U3RyaW5nRGVzY3JpcHRpb25TdG9yZSwgc3ltYm9sKSkgcmV0dXJuICcnO1xuICAgICAgdmFyIGRlc2MgPSBuYXRpdmUgPyBzdHJpbmcuc2xpY2UoNywgLTEpIDogc3RyaW5nLnJlcGxhY2UocmVnZXhwLCAnJDEnKTtcbiAgICAgIHJldHVybiBkZXNjID09PSAnJyA/IHVuZGVmaW5lZCA6IGRlc2M7XG4gICAgfVxuICB9KTtcblxuICAkKHsgZ2xvYmFsOiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuICAgIFN5bWJvbDogU3ltYm9sV3JhcHBlclxuICB9KTtcbn1cbiIsInZhciBkZWZpbmVXZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLXdlbGwta25vd24tc3ltYm9sJyk7XG5cbi8vIGBTeW1ib2wuaXRlcmF0b3JgIHdlbGwta25vd24gc3ltYm9sXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zeW1ib2wuaXRlcmF0b3JcbmRlZmluZVdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uYXRpdmUtc3ltYm9sJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgbmF0aXZlT2JqZWN0Q3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcbnZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpO1xudmFyIGdldE93blByb3BlcnR5TmFtZXNFeHRlcm5hbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcy1leHRlcm5hbCcpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIHdyYXBwZWRXZWxsS25vd25TeW1ib2xNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wtd3JhcHBlZCcpO1xudmFyIGRlZmluZVdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcbnZhciAkZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5mb3JFYWNoO1xuXG52YXIgSElEREVOID0gc2hhcmVkS2V5KCdoaWRkZW4nKTtcbnZhciBTWU1CT0wgPSAnU3ltYm9sJztcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBUT19QUklNSVRJVkUgPSB3ZWxsS25vd25TeW1ib2woJ3RvUHJpbWl0aXZlJyk7XG52YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcihTWU1CT0wpO1xudmFyIE9iamVjdFByb3RvdHlwZSA9IE9iamVjdFtQUk9UT1RZUEVdO1xudmFyICRTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyICRzdHJpbmdpZnkgPSBnZXRCdWlsdEluKCdKU09OJywgJ3N0cmluZ2lmeScpO1xudmFyIG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xudmFyIG5hdGl2ZURlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHlNb2R1bGUuZjtcbnZhciBuYXRpdmVHZXRPd25Qcm9wZXJ0eU5hbWVzID0gZ2V0T3duUHJvcGVydHlOYW1lc0V4dGVybmFsLmY7XG52YXIgbmF0aXZlUHJvcGVydHlJc0VudW1lcmFibGUgPSBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mO1xudmFyIEFsbFN5bWJvbHMgPSBzaGFyZWQoJ3N5bWJvbHMnKTtcbnZhciBPYmplY3RQcm90b3R5cGVTeW1ib2xzID0gc2hhcmVkKCdvcC1zeW1ib2xzJyk7XG52YXIgU3RyaW5nVG9TeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3RyaW5nLXRvLXN5bWJvbC1yZWdpc3RyeScpO1xudmFyIFN5bWJvbFRvU3RyaW5nUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC10by1zdHJpbmctcmVnaXN0cnknKTtcbnZhciBXZWxsS25vd25TeW1ib2xzU3RvcmUgPSBzaGFyZWQoJ3drcycpO1xudmFyIFFPYmplY3QgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIFVTRV9TRVRURVIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjcmlwdG9yID0gREVTQ1JJUFRPUlMgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0Q3JlYXRlKG5hdGl2ZURlZmluZVByb3BlcnR5KHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5hdGl2ZURlZmluZVByb3BlcnR5KHRoaXMsICdhJywgeyB2YWx1ZTogNyB9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uIChPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIHZhciBPYmplY3RQcm90b3R5cGVEZXNjcmlwdG9yID0gbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE9iamVjdFByb3RvdHlwZSwgUCk7XG4gIGlmIChPYmplY3RQcm90b3R5cGVEZXNjcmlwdG9yKSBkZWxldGUgT2JqZWN0UHJvdG90eXBlW1BdO1xuICBuYXRpdmVEZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgaWYgKE9iamVjdFByb3RvdHlwZURlc2NyaXB0b3IgJiYgTyAhPT0gT2JqZWN0UHJvdG90eXBlKSB7XG4gICAgbmF0aXZlRGVmaW5lUHJvcGVydHkoT2JqZWN0UHJvdG90eXBlLCBQLCBPYmplY3RQcm90b3R5cGVEZXNjcmlwdG9yKTtcbiAgfVxufSA6IG5hdGl2ZURlZmluZVByb3BlcnR5O1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uICh0YWcsIGRlc2NyaXB0aW9uKSB7XG4gIHZhciBzeW1ib2wgPSBBbGxTeW1ib2xzW3RhZ10gPSBuYXRpdmVPYmplY3RDcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc2V0SW50ZXJuYWxTdGF0ZShzeW1ib2wsIHtcbiAgICB0eXBlOiBTWU1CT0wsXG4gICAgdGFnOiB0YWcsXG4gICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uXG4gIH0pO1xuICBpZiAoIURFU0NSSVBUT1JTKSBzeW1ib2wuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgcmV0dXJuIHN5bWJvbDtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9TWU1CT0xfQVNfVUlEID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoaXQpIGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGlmIChPID09PSBPYmplY3RQcm90b3R5cGUpICRkZWZpbmVQcm9wZXJ0eShPYmplY3RQcm90b3R5cGVTeW1ib2xzLCBQLCBBdHRyaWJ1dGVzKTtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChoYXMoQWxsU3ltYm9scywga2V5KSkge1xuICAgIGlmICghQXR0cmlidXRlcy5lbnVtZXJhYmxlKSB7XG4gICAgICBpZiAoIWhhcyhPLCBISURERU4pKSBuYXRpdmVEZWZpbmVQcm9wZXJ0eShPLCBISURERU4sIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCB7fSkpO1xuICAgICAgT1tISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFzKE8sIEhJRERFTikgJiYgT1tISURERU5dW2tleV0pIE9bSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBBdHRyaWJ1dGVzID0gbmF0aXZlT2JqZWN0Q3JlYXRlKEF0dHJpYnV0ZXMsIHsgZW51bWVyYWJsZTogY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDAsIGZhbHNlKSB9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjcmlwdG9yKE8sIGtleSwgQXR0cmlidXRlcyk7XG4gIH0gcmV0dXJuIG5hdGl2ZURlZmluZVByb3BlcnR5KE8sIGtleSwgQXR0cmlidXRlcyk7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBwcm9wZXJ0aWVzID0gdG9JbmRleGVkT2JqZWN0KFByb3BlcnRpZXMpO1xuICB2YXIga2V5cyA9IG9iamVjdEtleXMocHJvcGVydGllcykuY29uY2F0KCRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMocHJvcGVydGllcykpO1xuICAkZm9yRWFjaChrZXlzLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKCFERVNDUklQVE9SUyB8fCAkcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChwcm9wZXJ0aWVzLCBrZXkpKSAkZGVmaW5lUHJvcGVydHkoTywga2V5LCBwcm9wZXJ0aWVzW2tleV0pO1xuICB9KTtcbiAgcmV0dXJuIE87XG59O1xuXG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyBuYXRpdmVPYmplY3RDcmVhdGUoTykgOiAkZGVmaW5lUHJvcGVydGllcyhuYXRpdmVPYmplY3RDcmVhdGUoTyksIFByb3BlcnRpZXMpO1xufTtcblxudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIFAgPSB0b1ByaW1pdGl2ZShWLCB0cnVlKTtcbiAgdmFyIGVudW1lcmFibGUgPSBuYXRpdmVQcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHRoaXMsIFApO1xuICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG90eXBlICYmIGhhcyhBbGxTeW1ib2xzLCBQKSAmJiAhaGFzKE9iamVjdFByb3RvdHlwZVN5bWJvbHMsIFApKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBlbnVtZXJhYmxlIHx8ICFoYXModGhpcywgUCkgfHwgIWhhcyhBbGxTeW1ib2xzLCBQKSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1bUF0gPyBlbnVtZXJhYmxlIDogdHJ1ZTtcbn07XG5cbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgdmFyIGl0ID0gdG9JbmRleGVkT2JqZWN0KE8pO1xuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG90eXBlICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT2JqZWN0UHJvdG90eXBlU3ltYm9scywga2V5KSkgcmV0dXJuO1xuICB2YXIgZGVzY3JpcHRvciA9IG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KTtcbiAgaWYgKGRlc2NyaXB0b3IgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSkge1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIGRlc2NyaXB0b3I7XG59O1xuXG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgdmFyIG5hbWVzID0gbmF0aXZlR2V0T3duUHJvcGVydHlOYW1lcyh0b0luZGV4ZWRPYmplY3QoTykpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gICRmb3JFYWNoKG5hbWVzLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKCFoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKGhpZGRlbktleXMsIGtleSkpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTykge1xuICB2YXIgSVNfT0JKRUNUX1BST1RPVFlQRSA9IE8gPT09IE9iamVjdFByb3RvdHlwZTtcbiAgdmFyIG5hbWVzID0gbmF0aXZlR2V0T3duUHJvcGVydHlOYW1lcyhJU19PQkpFQ1RfUFJPVE9UWVBFID8gT2JqZWN0UHJvdG90eXBlU3ltYm9scyA6IHRvSW5kZXhlZE9iamVjdChPKSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgJGZvckVhY2gobmFtZXMsIGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgKCFJU19PQkpFQ1RfUFJPVE9UWVBFIHx8IGhhcyhPYmplY3RQcm90b3R5cGUsIGtleSkpKSB7XG4gICAgICByZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyBgU3ltYm9sYCBjb25zdHJ1Y3RvclxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3ltYm9sLWNvbnN0cnVjdG9yXG5pZiAoIU5BVElWRV9TWU1CT0wpIHtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpIHRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yJyk7XG4gICAgdmFyIGRlc2NyaXB0aW9uID0gIWFyZ3VtZW50cy5sZW5ndGggfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBTdHJpbmcoYXJndW1lbnRzWzBdKTtcbiAgICB2YXIgdGFnID0gdWlkKGRlc2NyaXB0aW9uKTtcbiAgICB2YXIgc2V0dGVyID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG90eXBlKSBzZXR0ZXIuY2FsbChPYmplY3RQcm90b3R5cGVTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZiAoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSkgdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2NyaXB0b3IodGhpcywgdGFnLCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmIChERVNDUklQVE9SUyAmJiBVU0VfU0VUVEVSKSBzZXRTeW1ib2xEZXNjcmlwdG9yKE9iamVjdFByb3RvdHlwZSwgdGFnLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiBzZXR0ZXIgfSk7XG4gICAgcmV0dXJuIHdyYXAodGFnLCBkZXNjcmlwdGlvbik7XG4gIH07XG5cbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS50YWc7XG4gIH0pO1xuXG4gIHJlZGVmaW5lKCRTeW1ib2wsICd3aXRob3V0U2V0dGVyJywgZnVuY3Rpb24gKGRlc2NyaXB0aW9uKSB7XG4gICAgcmV0dXJuIHdyYXAodWlkKGRlc2NyaXB0aW9uKSwgZGVzY3JpcHRpb24pO1xuICB9KTtcblxuICBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mID0gJGRlZmluZVByb3BlcnR5O1xuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUuZiA9IGdldE93blByb3BlcnR5TmFtZXNFeHRlcm5hbC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICB3cmFwcGVkV2VsbEtub3duU3ltYm9sTW9kdWxlLmYgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiB3cmFwKHdlbGxLbm93blN5bWJvbChuYW1lKSwgbmFtZSk7XG4gIH07XG5cbiAgaWYgKERFU0NSSVBUT1JTKSB7XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtU3ltYm9sLWRlc2NyaXB0aW9uXG4gICAgbmF0aXZlRGVmaW5lUHJvcGVydHkoJFN5bWJvbFtQUk9UT1RZUEVdLCAnZGVzY3JpcHRpb24nLCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGRlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS5kZXNjcmlwdGlvbjtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoIUlTX1BVUkUpIHtcbiAgICAgIHJlZGVmaW5lKE9iamVjdFByb3RvdHlwZSwgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB7IHVuc2FmZTogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cbn1cblxuJCh7IGdsb2JhbDogdHJ1ZSwgd3JhcDogdHJ1ZSwgZm9yY2VkOiAhTkFUSVZFX1NZTUJPTCwgc2hhbTogIU5BVElWRV9TWU1CT0wgfSwge1xuICBTeW1ib2w6ICRTeW1ib2xcbn0pO1xuXG4kZm9yRWFjaChvYmplY3RLZXlzKFdlbGxLbm93blN5bWJvbHNTdG9yZSksIGZ1bmN0aW9uIChuYW1lKSB7XG4gIGRlZmluZVdlbGxLbm93blN5bWJvbChuYW1lKTtcbn0pO1xuXG4kKHsgdGFyZ2V0OiBTWU1CT0wsIHN0YXQ6IHRydWUsIGZvcmNlZDogIU5BVElWRV9TWU1CT0wgfSwge1xuICAvLyBgU3ltYm9sLmZvcmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN5bWJvbC5mb3JcbiAgJ2Zvcic6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgc3RyaW5nID0gU3RyaW5nKGtleSk7XG4gICAgaWYgKGhhcyhTdHJpbmdUb1N5bWJvbFJlZ2lzdHJ5LCBzdHJpbmcpKSByZXR1cm4gU3RyaW5nVG9TeW1ib2xSZWdpc3RyeVtzdHJpbmddO1xuICAgIHZhciBzeW1ib2wgPSAkU3ltYm9sKHN0cmluZyk7XG4gICAgU3RyaW5nVG9TeW1ib2xSZWdpc3RyeVtzdHJpbmddID0gc3ltYm9sO1xuICAgIFN5bWJvbFRvU3RyaW5nUmVnaXN0cnlbc3ltYm9sXSA9IHN0cmluZztcbiAgICByZXR1cm4gc3ltYm9sO1xuICB9LFxuICAvLyBgU3ltYm9sLmtleUZvcmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN5bWJvbC5rZXlmb3JcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioc3ltKSB7XG4gICAgaWYgKCFpc1N5bWJvbChzeW0pKSB0aHJvdyBUeXBlRXJyb3Ioc3ltICsgJyBpcyBub3QgYSBzeW1ib2wnKTtcbiAgICBpZiAoaGFzKFN5bWJvbFRvU3RyaW5nUmVnaXN0cnksIHN5bSkpIHJldHVybiBTeW1ib2xUb1N0cmluZ1JlZ2lzdHJ5W3N5bV07XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24gKCkgeyBVU0VfU0VUVEVSID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbiAoKSB7IFVTRV9TRVRURVIgPSBmYWxzZTsgfVxufSk7XG5cbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6ICFOQVRJVkVfU1lNQk9MLCBzaGFtOiAhREVTQ1JJUFRPUlMgfSwge1xuICAvLyBgT2JqZWN0LmNyZWF0ZWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5jcmVhdGVcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnR5XG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIGBPYmplY3QuZGVmaW5lUHJvcGVydGllc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0aWVzXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JzXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvclxufSk7XG5cbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6ICFOQVRJVkVfU1lNQk9MIH0sIHtcbiAgLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5c3ltYm9sc1xuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyBDaHJvbWUgMzggYW5kIDM5IGBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzYCBmYWlscyBvbiBwcmltaXRpdmVzXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zNDQzXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBmYWlscyhmdW5jdGlvbiAoKSB7IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mKDEpOyB9KSB9LCB7XG4gIGdldE93blByb3BlcnR5U3ltYm9sczogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSB7XG4gICAgcmV0dXJuIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mKHRvT2JqZWN0KGl0KSk7XG4gIH1cbn0pO1xuXG4vLyBgSlNPTi5zdHJpbmdpZnlgIG1ldGhvZCBiZWhhdmlvciB3aXRoIHN5bWJvbHNcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWpzb24uc3RyaW5naWZ5XG5pZiAoJHN0cmluZ2lmeSkge1xuICB2YXIgRk9SQ0VEX0pTT05fU1RSSU5HSUZZID0gIU5BVElWRV9TWU1CT0wgfHwgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHZhciBzeW1ib2wgPSAkU3ltYm9sKCk7XG4gICAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgICByZXR1cm4gJHN0cmluZ2lmeShbc3ltYm9sXSkgIT0gJ1tudWxsXSdcbiAgICAgIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAgICAgfHwgJHN0cmluZ2lmeSh7IGE6IHN5bWJvbCB9KSAhPSAne30nXG4gICAgICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICAgICAgfHwgJHN0cmluZ2lmeShPYmplY3Qoc3ltYm9sKSkgIT0gJ3t9JztcbiAgfSk7XG5cbiAgJCh7IHRhcmdldDogJ0pTT04nLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IEZPUkNFRF9KU09OX1NUUklOR0lGWSB9LCB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQsIHJlcGxhY2VyLCBzcGFjZSkge1xuICAgICAgdmFyIGFyZ3MgPSBbaXRdO1xuICAgICAgdmFyIGluZGV4ID0gMTtcbiAgICAgIHZhciAkcmVwbGFjZXI7XG4gICAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGluZGV4KSBhcmdzLnB1c2goYXJndW1lbnRzW2luZGV4KytdKTtcbiAgICAgICRyZXBsYWNlciA9IHJlcGxhY2VyO1xuICAgICAgaWYgKCFpc09iamVjdChyZXBsYWNlcikgJiYgaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpIHJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgICAgaWYgKCFpc0FycmF5KHJlcGxhY2VyKSkgcmVwbGFjZXIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mICRyZXBsYWNlciA9PSAnZnVuY3Rpb24nKSB2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgICBpZiAoIWlzU3ltYm9sKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICAgICAgfTtcbiAgICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICAgIHJldHVybiAkc3RyaW5naWZ5LmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vIGBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN5bWJvbC5wcm90b3R5cGUtQEB0b3ByaW1pdGl2ZVxuaWYgKCEkU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSkge1xuICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbn1cbi8vIGBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddYCBwcm9wZXJ0eVxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3ltYm9sLnByb3RvdHlwZS1AQHRvc3RyaW5ndGFnXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCBTWU1CT0wpO1xuXG5oaWRkZW5LZXlzW0hJRERFTl0gPSB0cnVlO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBET01JdGVyYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9tLWl0ZXJhYmxlcycpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG5cbmZvciAodmFyIENPTExFQ1RJT05fTkFNRSBpbiBET01JdGVyYWJsZXMpIHtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbQ09MTEVDVElPTl9OQU1FXTtcbiAgdmFyIENvbGxlY3Rpb25Qcm90b3R5cGUgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICAvLyBzb21lIENocm9tZSB2ZXJzaW9ucyBoYXZlIG5vbi1jb25maWd1cmFibGUgbWV0aG9kcyBvbiBET01Ub2tlbkxpc3RcbiAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGUgJiYgQ29sbGVjdGlvblByb3RvdHlwZS5mb3JFYWNoICE9PSBmb3JFYWNoKSB0cnkge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCAnZm9yRWFjaCcsIGZvckVhY2gpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCA9IGZvckVhY2g7XG4gIH1cbn1cbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgRE9NSXRlcmFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvbS1pdGVyYWJsZXMnKTtcbnZhciBBcnJheUl0ZXJhdG9yTWV0aG9kcyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvZXMuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xudmFyIEFycmF5VmFsdWVzID0gQXJyYXlJdGVyYXRvck1ldGhvZHMudmFsdWVzO1xuXG5mb3IgKHZhciBDT0xMRUNUSU9OX05BTUUgaW4gRE9NSXRlcmFibGVzKSB7XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW0NPTExFQ1RJT05fTkFNRV07XG4gIHZhciBDb2xsZWN0aW9uUHJvdG90eXBlID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGUpIHtcbiAgICAvLyBzb21lIENocm9tZSB2ZXJzaW9ucyBoYXZlIG5vbi1jb25maWd1cmFibGUgbWV0aG9kcyBvbiBET01Ub2tlbkxpc3RcbiAgICBpZiAoQ29sbGVjdGlvblByb3RvdHlwZVtJVEVSQVRPUl0gIT09IEFycmF5VmFsdWVzKSB0cnkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KENvbGxlY3Rpb25Qcm90b3R5cGUsIElURVJBVE9SLCBBcnJheVZhbHVlcyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIENvbGxlY3Rpb25Qcm90b3R5cGVbSVRFUkFUT1JdID0gQXJyYXlWYWx1ZXM7XG4gICAgfVxuICAgIGlmICghQ29sbGVjdGlvblByb3RvdHlwZVtUT19TVFJJTkdfVEFHXSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KENvbGxlY3Rpb25Qcm90b3R5cGUsIFRPX1NUUklOR19UQUcsIENPTExFQ1RJT05fTkFNRSk7XG4gICAgfVxuICAgIGlmIChET01JdGVyYWJsZXNbQ09MTEVDVElPTl9OQU1FXSkgZm9yICh2YXIgTUVUSE9EX05BTUUgaW4gQXJyYXlJdGVyYXRvck1ldGhvZHMpIHtcbiAgICAgIC8vIHNvbWUgQ2hyb21lIHZlcnNpb25zIGhhdmUgbm9uLWNvbmZpZ3VyYWJsZSBtZXRob2RzIG9uIERPTVRva2VuTGlzdFxuICAgICAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGVbTUVUSE9EX05BTUVdICE9PSBBcnJheUl0ZXJhdG9yTWV0aG9kc1tNRVRIT0RfTkFNRV0pIHRyeSB7XG4gICAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCBNRVRIT0RfTkFNRSwgQXJyYXlJdGVyYXRvck1ldGhvZHNbTUVUSE9EX05BTUVdKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIENvbGxlY3Rpb25Qcm90b3R5cGVbTUVUSE9EX05BTUVdID0gQXJyYXlJdGVyYXRvck1ldGhvZHNbTUVUSE9EX05BTUVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xuXG52YXIgc2xpY2UgPSBbXS5zbGljZTtcbnZhciBNU0lFID0gL01TSUUgLlxcLi8udGVzdCh1c2VyQWdlbnQpOyAvLyA8LSBkaXJ0eSBpZTktIGNoZWNrXG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHNjaGVkdWxlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQgLyogLCAuLi5hcmd1bWVudHMgKi8pIHtcbiAgICB2YXIgYm91bmRBcmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gICAgdmFyIGFyZ3MgPSBib3VuZEFyZ3MgPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMikgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHNjaGVkdWxlcihib3VuZEFyZ3MgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgICh0eXBlb2YgaGFuZGxlciA9PSAnZnVuY3Rpb24nID8gaGFuZGxlciA6IEZ1bmN0aW9uKGhhbmRsZXIpKS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9IDogaGFuZGxlciwgdGltZW91dCk7XG4gIH07XG59O1xuXG4vLyBpZTktIHNldFRpbWVvdXQgJiBzZXRJbnRlcnZhbCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI3RpbWVyc1xuJCh7IGdsb2JhbDogdHJ1ZSwgYmluZDogdHJ1ZSwgZm9yY2VkOiBNU0lFIH0sIHtcbiAgLy8gYHNldFRpbWVvdXRgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXR0aW1lb3V0XG4gIHNldFRpbWVvdXQ6IHdyYXAoZ2xvYmFsLnNldFRpbWVvdXQpLFxuICAvLyBgc2V0SW50ZXJ2YWxgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXRpbnRlcnZhbFxuICBzZXRJbnRlcnZhbDogd3JhcChnbG9iYWwuc2V0SW50ZXJ2YWwpXG59KTtcbiIsIi8qIGludGVyYWN0LmpzIDEuOS4yMiB8IGh0dHBzOi8vcmF3LmdpdGh1Yi5jb20vdGF5ZS9pbnRlcmFjdC5qcy9tYXN0ZXIvTElDRU5TRSAqL1xuIWZ1bmN0aW9uKHQpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlKW1vZHVsZS5leHBvcnRzPXQoKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10sdCk7ZWxzZXsoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9nbG9iYWw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjp0aGlzKS5pbnRlcmFjdD10KCl9fSgoZnVuY3Rpb24oKXt2YXIgdD17fTtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LmRlZmF1bHQ9dm9pZCAwO3QuZGVmYXVsdD1mdW5jdGlvbih0KXtyZXR1cm4hKCF0fHwhdC5XaW5kb3cpJiZ0IGluc3RhbmNlb2YgdC5XaW5kb3d9O3ZhciBlPXt9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGUuaW5pdD1vLGUuZ2V0V2luZG93PWZ1bmN0aW9uKGUpe2lmKCgwLHQuZGVmYXVsdCkoZSkpcmV0dXJuIGU7cmV0dXJuKGUub3duZXJEb2N1bWVudHx8ZSkuZGVmYXVsdFZpZXd8fHIud2luZG93fSxlLndpbmRvdz1lLnJlYWxXaW5kb3c9dm9pZCAwO3ZhciBuPXZvaWQgMDtlLnJlYWxXaW5kb3c9bjt2YXIgcj12b2lkIDA7ZnVuY3Rpb24gbyh0KXtlLnJlYWxXaW5kb3c9bj10O3ZhciBvPXQuZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIik7by5vd25lckRvY3VtZW50IT09dC5kb2N1bWVudCYmXCJmdW5jdGlvblwiPT10eXBlb2YgdC53cmFwJiZ0LndyYXAobyk9PT1vJiYodD10LndyYXAodCkpLGUud2luZG93PXI9dH1lLndpbmRvdz1yLFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJndpbmRvdyYmbyh3aW5kb3cpO3ZhciBpPXt9O2Z1bmN0aW9uIGEodCl7cmV0dXJuKGE9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKHQpe3JldHVybiB0eXBlb2YgdH06ZnVuY3Rpb24odCl7cmV0dXJuIHQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmdC5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmdCE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgdH0pKHQpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eShpLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGkuZGVmYXVsdD12b2lkIDA7dmFyIHM9ZnVuY3Rpb24odCl7cmV0dXJuISF0JiZcIm9iamVjdFwiPT09YSh0KX0sbD1mdW5jdGlvbih0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0fSx1PXt3aW5kb3c6ZnVuY3Rpb24obil7cmV0dXJuIG49PT1lLndpbmRvd3x8KDAsdC5kZWZhdWx0KShuKX0sZG9jRnJhZzpmdW5jdGlvbih0KXtyZXR1cm4gcyh0KSYmMTE9PT10Lm5vZGVUeXBlfSxvYmplY3Q6cyxmdW5jOmwsbnVtYmVyOmZ1bmN0aW9uKHQpe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiB0fSxib29sOmZ1bmN0aW9uKHQpe3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgdH0sc3RyaW5nOmZ1bmN0aW9uKHQpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0fSxlbGVtZW50OmZ1bmN0aW9uKHQpe2lmKCF0fHxcIm9iamVjdFwiIT09YSh0KSlyZXR1cm4hMTt2YXIgbj1lLmdldFdpbmRvdyh0KXx8ZS53aW5kb3c7cmV0dXJuL29iamVjdHxmdW5jdGlvbi8udGVzdChhKG4uRWxlbWVudCkpP3QgaW5zdGFuY2VvZiBuLkVsZW1lbnQ6MT09PXQubm9kZVR5cGUmJlwic3RyaW5nXCI9PXR5cGVvZiB0Lm5vZGVOYW1lfSxwbGFpbk9iamVjdDpmdW5jdGlvbih0KXtyZXR1cm4gcyh0KSYmISF0LmNvbnN0cnVjdG9yJiYvZnVuY3Rpb24gT2JqZWN0XFxiLy50ZXN0KHQuY29uc3RydWN0b3IudG9TdHJpbmcoKSl9LGFycmF5OmZ1bmN0aW9uKHQpe3JldHVybiBzKHQpJiZ2b2lkIDAhPT10Lmxlbmd0aCYmbCh0LnNwbGljZSl9fTtpLmRlZmF1bHQ9dTt2YXIgYz17fTtmdW5jdGlvbiBmKHQpe3ZhciBlPXQuaW50ZXJhY3Rpb247aWYoXCJkcmFnXCI9PT1lLnByZXBhcmVkLm5hbWUpe3ZhciBuPWUucHJlcGFyZWQuYXhpcztcInhcIj09PW4/KGUuY29vcmRzLmN1ci5wYWdlLnk9ZS5jb29yZHMuc3RhcnQucGFnZS55LGUuY29vcmRzLmN1ci5jbGllbnQueT1lLmNvb3Jkcy5zdGFydC5jbGllbnQueSxlLmNvb3Jkcy52ZWxvY2l0eS5jbGllbnQueT0wLGUuY29vcmRzLnZlbG9jaXR5LnBhZ2UueT0wKTpcInlcIj09PW4mJihlLmNvb3Jkcy5jdXIucGFnZS54PWUuY29vcmRzLnN0YXJ0LnBhZ2UueCxlLmNvb3Jkcy5jdXIuY2xpZW50Lng9ZS5jb29yZHMuc3RhcnQuY2xpZW50LngsZS5jb29yZHMudmVsb2NpdHkuY2xpZW50Lng9MCxlLmNvb3Jkcy52ZWxvY2l0eS5wYWdlLng9MCl9fWZ1bmN0aW9uIGQodCl7dmFyIGU9dC5pRXZlbnQsbj10LmludGVyYWN0aW9uO2lmKFwiZHJhZ1wiPT09bi5wcmVwYXJlZC5uYW1lKXt2YXIgcj1uLnByZXBhcmVkLmF4aXM7aWYoXCJ4XCI9PT1yfHxcInlcIj09PXIpe3ZhciBvPVwieFwiPT09cj9cInlcIjpcInhcIjtlLnBhZ2Vbb109bi5jb29yZHMuc3RhcnQucGFnZVtvXSxlLmNsaWVudFtvXT1uLmNvb3Jkcy5zdGFydC5jbGllbnRbb10sZS5kZWx0YVtvXT0wfX19T2JqZWN0LmRlZmluZVByb3BlcnR5KGMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksYy5kZWZhdWx0PXZvaWQgMDt2YXIgcD17aWQ6XCJhY3Rpb25zL2RyYWdcIixpbnN0YWxsOmZ1bmN0aW9uKHQpe3ZhciBlPXQuYWN0aW9ucyxuPXQuSW50ZXJhY3RhYmxlLHI9dC5kZWZhdWx0cztuLnByb3RvdHlwZS5kcmFnZ2FibGU9cC5kcmFnZ2FibGUsZS5tYXAuZHJhZz1wLGUubWV0aG9kRGljdC5kcmFnPVwiZHJhZ2dhYmxlXCIsci5hY3Rpb25zLmRyYWc9cC5kZWZhdWx0c30sbGlzdGVuZXJzOntcImludGVyYWN0aW9uczpiZWZvcmUtYWN0aW9uLW1vdmVcIjpmLFwiaW50ZXJhY3Rpb25zOmFjdGlvbi1yZXN1bWVcIjpmLFwiaW50ZXJhY3Rpb25zOmFjdGlvbi1tb3ZlXCI6ZCxcImF1dG8tc3RhcnQ6Y2hlY2tcIjpmdW5jdGlvbih0KXt2YXIgZT10LmludGVyYWN0aW9uLG49dC5pbnRlcmFjdGFibGUscj10LmJ1dHRvbnMsbz1uLm9wdGlvbnMuZHJhZztpZihvJiZvLmVuYWJsZWQmJighZS5wb2ludGVySXNEb3dufHwhL21vdXNlfHBvaW50ZXIvLnRlc3QoZS5wb2ludGVyVHlwZSl8fDAhPShyJm4ub3B0aW9ucy5kcmFnLm1vdXNlQnV0dG9ucykpKXJldHVybiB0LmFjdGlvbj17bmFtZTpcImRyYWdcIixheGlzOlwic3RhcnRcIj09PW8ubG9ja0F4aXM/by5zdGFydEF4aXM6by5sb2NrQXhpc30sITF9fSxkcmFnZ2FibGU6ZnVuY3Rpb24odCl7cmV0dXJuIGkuZGVmYXVsdC5vYmplY3QodCk/KHRoaXMub3B0aW9ucy5kcmFnLmVuYWJsZWQ9ITEhPT10LmVuYWJsZWQsdGhpcy5zZXRQZXJBY3Rpb24oXCJkcmFnXCIsdCksdGhpcy5zZXRPbkV2ZW50cyhcImRyYWdcIix0KSwvXih4eXx4fHl8c3RhcnQpJC8udGVzdCh0LmxvY2tBeGlzKSYmKHRoaXMub3B0aW9ucy5kcmFnLmxvY2tBeGlzPXQubG9ja0F4aXMpLC9eKHh5fHh8eSkkLy50ZXN0KHQuc3RhcnRBeGlzKSYmKHRoaXMub3B0aW9ucy5kcmFnLnN0YXJ0QXhpcz10LnN0YXJ0QXhpcyksdGhpcyk6aS5kZWZhdWx0LmJvb2wodCk/KHRoaXMub3B0aW9ucy5kcmFnLmVuYWJsZWQ9dCx0aGlzKTp0aGlzLm9wdGlvbnMuZHJhZ30sYmVmb3JlTW92ZTpmLG1vdmU6ZCxkZWZhdWx0czp7c3RhcnRBeGlzOlwieHlcIixsb2NrQXhpczpcInh5XCJ9LGdldEN1cnNvcjpmdW5jdGlvbigpe3JldHVyblwibW92ZVwifX0sdj1wO2MuZGVmYXVsdD12O3ZhciBoPXt9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShoLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGguZGVmYXVsdD12b2lkIDA7dmFyIGc9e2luaXQ6ZnVuY3Rpb24odCl7dmFyIGU9dDtnLmRvY3VtZW50PWUuZG9jdW1lbnQsZy5Eb2N1bWVudEZyYWdtZW50PWUuRG9jdW1lbnRGcmFnbWVudHx8eSxnLlNWR0VsZW1lbnQ9ZS5TVkdFbGVtZW50fHx5LGcuU1ZHU1ZHRWxlbWVudD1lLlNWR1NWR0VsZW1lbnR8fHksZy5TVkdFbGVtZW50SW5zdGFuY2U9ZS5TVkdFbGVtZW50SW5zdGFuY2V8fHksZy5FbGVtZW50PWUuRWxlbWVudHx8eSxnLkhUTUxFbGVtZW50PWUuSFRNTEVsZW1lbnR8fGcuRWxlbWVudCxnLkV2ZW50PWUuRXZlbnQsZy5Ub3VjaD1lLlRvdWNofHx5LGcuUG9pbnRlckV2ZW50PWUuUG9pbnRlckV2ZW50fHxlLk1TUG9pbnRlckV2ZW50fSxkb2N1bWVudDpudWxsLERvY3VtZW50RnJhZ21lbnQ6bnVsbCxTVkdFbGVtZW50Om51bGwsU1ZHU1ZHRWxlbWVudDpudWxsLFNWR0VsZW1lbnRJbnN0YW5jZTpudWxsLEVsZW1lbnQ6bnVsbCxIVE1MRWxlbWVudDpudWxsLEV2ZW50Om51bGwsVG91Y2g6bnVsbCxQb2ludGVyRXZlbnQ6bnVsbH07ZnVuY3Rpb24geSgpe312YXIgbT1nO2guZGVmYXVsdD1tO3ZhciBiPXt9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShiLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGIuZGVmYXVsdD12b2lkIDA7dmFyIHg9e2luaXQ6ZnVuY3Rpb24odCl7dmFyIG49aC5kZWZhdWx0LkVsZW1lbnQscj1lLndpbmRvdy5uYXZpZ2F0b3I7eC5zdXBwb3J0c1RvdWNoPVwib250b3VjaHN0YXJ0XCJpbiB0fHxpLmRlZmF1bHQuZnVuYyh0LkRvY3VtZW50VG91Y2gpJiZoLmRlZmF1bHQuZG9jdW1lbnQgaW5zdGFuY2VvZiB0LkRvY3VtZW50VG91Y2gseC5zdXBwb3J0c1BvaW50ZXJFdmVudD0hMSE9PXIucG9pbnRlckVuYWJsZWQmJiEhaC5kZWZhdWx0LlBvaW50ZXJFdmVudCx4LmlzSU9TPS9pUChob25lfG9kfGFkKS8udGVzdChyLnBsYXRmb3JtKSx4LmlzSU9TNz0vaVAoaG9uZXxvZHxhZCkvLnRlc3Qoci5wbGF0Zm9ybSkmJi9PUyA3W15cXGRdLy50ZXN0KHIuYXBwVmVyc2lvbikseC5pc0llOT0vTVNJRSA5Ly50ZXN0KHIudXNlckFnZW50KSx4LmlzT3BlcmFNb2JpbGU9XCJPcGVyYVwiPT09ci5hcHBOYW1lJiZ4LnN1cHBvcnRzVG91Y2gmJi9QcmVzdG8vLnRlc3Qoci51c2VyQWdlbnQpLHgucHJlZml4ZWRNYXRjaGVzU2VsZWN0b3I9XCJtYXRjaGVzXCJpbiBuLnByb3RvdHlwZT9cIm1hdGNoZXNcIjpcIndlYmtpdE1hdGNoZXNTZWxlY3RvclwiaW4gbi5wcm90b3R5cGU/XCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3JcIjpcIm1vek1hdGNoZXNTZWxlY3RvclwiaW4gbi5wcm90b3R5cGU/XCJtb3pNYXRjaGVzU2VsZWN0b3JcIjpcIm9NYXRjaGVzU2VsZWN0b3JcImluIG4ucHJvdG90eXBlP1wib01hdGNoZXNTZWxlY3RvclwiOlwibXNNYXRjaGVzU2VsZWN0b3JcIix4LnBFdmVudFR5cGVzPXguc3VwcG9ydHNQb2ludGVyRXZlbnQ/aC5kZWZhdWx0LlBvaW50ZXJFdmVudD09PXQuTVNQb2ludGVyRXZlbnQ/e3VwOlwiTVNQb2ludGVyVXBcIixkb3duOlwiTVNQb2ludGVyRG93blwiLG92ZXI6XCJtb3VzZW92ZXJcIixvdXQ6XCJtb3VzZW91dFwiLG1vdmU6XCJNU1BvaW50ZXJNb3ZlXCIsY2FuY2VsOlwiTVNQb2ludGVyQ2FuY2VsXCJ9Ont1cDpcInBvaW50ZXJ1cFwiLGRvd246XCJwb2ludGVyZG93blwiLG92ZXI6XCJwb2ludGVyb3ZlclwiLG91dDpcInBvaW50ZXJvdXRcIixtb3ZlOlwicG9pbnRlcm1vdmVcIixjYW5jZWw6XCJwb2ludGVyY2FuY2VsXCJ9Om51bGwseC53aGVlbEV2ZW50PVwib25tb3VzZXdoZWVsXCJpbiBoLmRlZmF1bHQuZG9jdW1lbnQ/XCJtb3VzZXdoZWVsXCI6XCJ3aGVlbFwifSxzdXBwb3J0c1RvdWNoOm51bGwsc3VwcG9ydHNQb2ludGVyRXZlbnQ6bnVsbCxpc0lPUzc6bnVsbCxpc0lPUzpudWxsLGlzSWU5Om51bGwsaXNPcGVyYU1vYmlsZTpudWxsLHByZWZpeGVkTWF0Y2hlc1NlbGVjdG9yOm51bGwscEV2ZW50VHlwZXM6bnVsbCx3aGVlbEV2ZW50Om51bGx9O3ZhciB3PXg7Yi5kZWZhdWx0PXc7dmFyIF89e307ZnVuY3Rpb24gUyh0KXt2YXIgZT10LnBhcmVudE5vZGU7aWYoaS5kZWZhdWx0LmRvY0ZyYWcoZSkpe2Zvcig7KGU9ZS5ob3N0KSYmaS5kZWZhdWx0LmRvY0ZyYWcoZSk7KTtyZXR1cm4gZX1yZXR1cm4gZX1mdW5jdGlvbiBQKHQsbil7cmV0dXJuIGUud2luZG93IT09ZS5yZWFsV2luZG93JiYobj1uLnJlcGxhY2UoL1xcL2RlZXBcXC8vZyxcIiBcIikpLHRbYi5kZWZhdWx0LnByZWZpeGVkTWF0Y2hlc1NlbGVjdG9yXShuKX1PYmplY3QuZGVmaW5lUHJvcGVydHkoXyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxfLm5vZGVDb250YWlucz1mdW5jdGlvbih0LGUpe2lmKHQuY29udGFpbnMpcmV0dXJuIHQuY29udGFpbnMoZSk7Zm9yKDtlOyl7aWYoZT09PXQpcmV0dXJuITA7ZT1lLnBhcmVudE5vZGV9cmV0dXJuITF9LF8uY2xvc2VzdD1mdW5jdGlvbih0LGUpe2Zvcig7aS5kZWZhdWx0LmVsZW1lbnQodCk7KXtpZihQKHQsZSkpcmV0dXJuIHQ7dD1TKHQpfXJldHVybiBudWxsfSxfLnBhcmVudE5vZGU9UyxfLm1hdGNoZXNTZWxlY3Rvcj1QLF8uaW5kZXhPZkRlZXBlc3RFbGVtZW50PWZ1bmN0aW9uKHQpe2Zvcih2YXIgbixyPVtdLG89MDtvPHQubGVuZ3RoO28rKyl7dmFyIGk9dFtvXSxhPXRbbl07aWYoaSYmbyE9PW4paWYoYSl7dmFyIHM9TyhpKSxsPU8oYSk7aWYocyE9PWkub3duZXJEb2N1bWVudClpZihsIT09aS5vd25lckRvY3VtZW50KWlmKHMhPT1sKXtyPXIubGVuZ3RoP3I6RShhKTt2YXIgdT12b2lkIDA7aWYoYSBpbnN0YW5jZW9mIGguZGVmYXVsdC5IVE1MRWxlbWVudCYmaSBpbnN0YW5jZW9mIGguZGVmYXVsdC5TVkdFbGVtZW50JiYhKGkgaW5zdGFuY2VvZiBoLmRlZmF1bHQuU1ZHU1ZHRWxlbWVudCkpe2lmKGk9PT1sKWNvbnRpbnVlO3U9aS5vd25lclNWR0VsZW1lbnR9ZWxzZSB1PWk7Zm9yKHZhciBjPUUodSxhLm93bmVyRG9jdW1lbnQpLGY9MDtjW2ZdJiZjW2ZdPT09cltmXTspZisrO2Zvcih2YXIgZD1bY1tmLTFdLGNbZl0scltmXV0scD1kWzBdLmxhc3RDaGlsZDtwOyl7aWYocD09PWRbMV0pe249byxyPWM7YnJlYWt9aWYocD09PWRbMl0pYnJlYWs7cD1wLnByZXZpb3VzU2libGluZ319ZWxzZSB2PWksZz1hLHk9dm9pZCAwLG09dm9pZCAwLHk9cGFyc2VJbnQoZS5nZXRXaW5kb3codikuZ2V0Q29tcHV0ZWRTdHlsZSh2KS56SW5kZXgsMTApfHwwLG09cGFyc2VJbnQoZS5nZXRXaW5kb3coZykuZ2V0Q29tcHV0ZWRTdHlsZShnKS56SW5kZXgsMTApfHwwLHk+PW0mJihuPW8pO2Vsc2Ugbj1vfWVsc2Ugbj1vfXZhciB2LGcseSxtO3JldHVybiBufSxfLm1hdGNoZXNVcFRvPWZ1bmN0aW9uKHQsZSxuKXtmb3IoO2kuZGVmYXVsdC5lbGVtZW50KHQpOyl7aWYoUCh0LGUpKXJldHVybiEwO2lmKCh0PVModCkpPT09bilyZXR1cm4gUCh0LGUpfXJldHVybiExfSxfLmdldEFjdHVhbEVsZW1lbnQ9ZnVuY3Rpb24odCl7cmV0dXJuIHQuY29ycmVzcG9uZGluZ1VzZUVsZW1lbnR8fHR9LF8uZ2V0U2Nyb2xsWFk9VCxfLmdldEVsZW1lbnRDbGllbnRSZWN0PU0sXy5nZXRFbGVtZW50UmVjdD1mdW5jdGlvbih0KXt2YXIgbj1NKHQpO2lmKCFiLmRlZmF1bHQuaXNJT1M3JiZuKXt2YXIgcj1UKGUuZ2V0V2luZG93KHQpKTtuLmxlZnQrPXIueCxuLnJpZ2h0Kz1yLngsbi50b3ArPXIueSxuLmJvdHRvbSs9ci55fXJldHVybiBufSxfLmdldFBhdGg9ZnVuY3Rpb24odCl7dmFyIGU9W107Zm9yKDt0OyllLnB1c2godCksdD1TKHQpO3JldHVybiBlfSxfLnRyeVNlbGVjdG9yPWZ1bmN0aW9uKHQpe2lmKCFpLmRlZmF1bHQuc3RyaW5nKHQpKXJldHVybiExO3JldHVybiBoLmRlZmF1bHQuZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0KSwhMH07dmFyIE89ZnVuY3Rpb24odCl7cmV0dXJuIHQucGFyZW50Tm9kZXx8dC5ob3N0fTtmdW5jdGlvbiBFKHQsZSl7Zm9yKHZhciBuLHI9W10sbz10OyhuPU8obykpJiZvIT09ZSYmbiE9PW8ub3duZXJEb2N1bWVudDspci51bnNoaWZ0KG8pLG89bjtyZXR1cm4gcn1mdW5jdGlvbiBUKHQpe3JldHVybnt4Oih0PXR8fGUud2luZG93KS5zY3JvbGxYfHx0LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0LHk6dC5zY3JvbGxZfHx0LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3B9fWZ1bmN0aW9uIE0odCl7dmFyIGU9dCBpbnN0YW5jZW9mIGguZGVmYXVsdC5TVkdFbGVtZW50P3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk6dC5nZXRDbGllbnRSZWN0cygpWzBdO3JldHVybiBlJiZ7bGVmdDplLmxlZnQscmlnaHQ6ZS5yaWdodCx0b3A6ZS50b3AsYm90dG9tOmUuYm90dG9tLHdpZHRoOmUud2lkdGh8fGUucmlnaHQtZS5sZWZ0LGhlaWdodDplLmhlaWdodHx8ZS5ib3R0b20tZS50b3B9fXZhciBqPXt9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShqLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGouZGVmYXVsdD1mdW5jdGlvbih0LGUpe2Zvcih2YXIgbiBpbiBlKXRbbl09ZVtuXTtyZXR1cm4gdH07dmFyIGs9e307ZnVuY3Rpb24gSSh0LGUpeyhudWxsPT1lfHxlPnQubGVuZ3RoKSYmKGU9dC5sZW5ndGgpO2Zvcih2YXIgbj0wLHI9QXJyYXkoZSk7bjxlO24rKylyW25dPXRbbl07cmV0dXJuIHJ9ZnVuY3Rpb24gRCh0LGUsbil7cmV0dXJuXCJwYXJlbnRcIj09PXQ/KDAsXy5wYXJlbnROb2RlKShuKTpcInNlbGZcIj09PXQ/ZS5nZXRSZWN0KG4pOigwLF8uY2xvc2VzdCkobix0KX1PYmplY3QuZGVmaW5lUHJvcGVydHkoayxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxrLmdldFN0cmluZ09wdGlvblJlc3VsdD1ELGsucmVzb2x2ZVJlY3RMaWtlPWZ1bmN0aW9uKHQsZSxuLHIpe3ZhciBvPXQ7aS5kZWZhdWx0LnN0cmluZyhvKT9vPUQobyxlLG4pOmkuZGVmYXVsdC5mdW5jKG8pJiYobz1vLmFwcGx5KHZvaWQgMCxmdW5jdGlvbih0KXtpZihBcnJheS5pc0FycmF5KHQpKXJldHVybiBJKHQpfShhPXIpfHxmdW5jdGlvbih0KXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KHQpKXJldHVybiBBcnJheS5mcm9tKHQpfShhKXx8ZnVuY3Rpb24odCxlKXtpZih0KXtpZihcInN0cmluZ1wiPT10eXBlb2YgdClyZXR1cm4gSSh0LGUpO3ZhciBuPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KS5zbGljZSg4LC0xKTtyZXR1cm5cIk9iamVjdFwiPT09biYmdC5jb25zdHJ1Y3RvciYmKG49dC5jb25zdHJ1Y3Rvci5uYW1lKSxcIk1hcFwiPT09bnx8XCJTZXRcIj09PW4/QXJyYXkuZnJvbSh0KTpcIkFyZ3VtZW50c1wiPT09bnx8L14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3Qobik/SSh0LGUpOnZvaWQgMH19KGEpfHxmdW5jdGlvbigpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpfSgpKSk7dmFyIGE7aS5kZWZhdWx0LmVsZW1lbnQobykmJihvPSgwLF8uZ2V0RWxlbWVudFJlY3QpKG8pKTtyZXR1cm4gb30say5yZWN0VG9YWT1mdW5jdGlvbih0KXtyZXR1cm4gdCYme3g6XCJ4XCJpbiB0P3QueDp0LmxlZnQseTpcInlcImluIHQ/dC55OnQudG9wfX0say54eXdoVG9UbGJyPWZ1bmN0aW9uKHQpeyF0fHxcImxlZnRcImluIHQmJlwidG9wXCJpbiB0fHwoKHQ9KDAsai5kZWZhdWx0KSh7fSx0KSkubGVmdD10Lnh8fDAsdC50b3A9dC55fHwwLHQucmlnaHQ9dC5yaWdodHx8dC5sZWZ0K3Qud2lkdGgsdC5ib3R0b209dC5ib3R0b218fHQudG9wK3QuaGVpZ2h0KTtyZXR1cm4gdH0say50bGJyVG9YeXdoPWZ1bmN0aW9uKHQpeyF0fHxcInhcImluIHQmJlwieVwiaW4gdHx8KCh0PSgwLGouZGVmYXVsdCkoe30sdCkpLng9dC5sZWZ0fHwwLHQueT10LnRvcHx8MCx0LndpZHRoPXQud2lkdGh8fCh0LnJpZ2h0fHwwKS10LngsdC5oZWlnaHQ9dC5oZWlnaHR8fCh0LmJvdHRvbXx8MCktdC55KTtyZXR1cm4gdH0say5hZGRFZGdlcz1mdW5jdGlvbih0LGUsbil7dC5sZWZ0JiYoZS5sZWZ0Kz1uLngpO3QucmlnaHQmJihlLnJpZ2h0Kz1uLngpO3QudG9wJiYoZS50b3ArPW4ueSk7dC5ib3R0b20mJihlLmJvdHRvbSs9bi55KTtlLndpZHRoPWUucmlnaHQtZS5sZWZ0LGUuaGVpZ2h0PWUuYm90dG9tLWUudG9wfTt2YXIgQT17fTtPYmplY3QuZGVmaW5lUHJvcGVydHkoQSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxBLmRlZmF1bHQ9ZnVuY3Rpb24odCxlLG4pe3ZhciByPXQub3B0aW9uc1tuXSxvPXImJnIub3JpZ2lufHx0Lm9wdGlvbnMub3JpZ2luLGk9KDAsay5yZXNvbHZlUmVjdExpa2UpKG8sdCxlLFt0JiZlXSk7cmV0dXJuKDAsay5yZWN0VG9YWSkoaSl8fHt4OjAseTowfX07dmFyIHo9e307ZnVuY3Rpb24gQyh0KXtyZXR1cm4gdC50cmltKCkuc3BsaXQoLyArLyl9T2JqZWN0LmRlZmluZVByb3BlcnR5KHosXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksei5kZWZhdWx0PWZ1bmN0aW9uIHQoZSxuLHIpe3I9cnx8e30saS5kZWZhdWx0LnN0cmluZyhlKSYmLTEhPT1lLnNlYXJjaChcIiBcIikmJihlPUMoZSkpO2lmKGkuZGVmYXVsdC5hcnJheShlKSlyZXR1cm4gZS5yZWR1Y2UoKGZ1bmN0aW9uKGUsbyl7cmV0dXJuKDAsai5kZWZhdWx0KShlLHQobyxuLHIpKX0pLHIpO2kuZGVmYXVsdC5vYmplY3QoZSkmJihuPWUsZT1cIlwiKTtpZihpLmRlZmF1bHQuZnVuYyhuKSlyW2VdPXJbZV18fFtdLHJbZV0ucHVzaChuKTtlbHNlIGlmKGkuZGVmYXVsdC5hcnJheShuKSlmb3IodmFyIG89MDtvPG4ubGVuZ3RoO28rKyl7dmFyIGE7YT1uW29dLHQoZSxhLHIpfWVsc2UgaWYoaS5kZWZhdWx0Lm9iamVjdChuKSlmb3IodmFyIHMgaW4gbil7dmFyIGw9QyhzKS5tYXAoKGZ1bmN0aW9uKHQpe3JldHVyblwiXCIuY29uY2F0KGUpLmNvbmNhdCh0KX0pKTt0KGwsbltzXSxyKX1yZXR1cm4gcn07dmFyIFI9e307T2JqZWN0LmRlZmluZVByb3BlcnR5KFIsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksUi5kZWZhdWx0PXZvaWQgMDtSLmRlZmF1bHQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gTWF0aC5zcXJ0KHQqdCtlKmUpfTt2YXIgRj17fTtmdW5jdGlvbiBYKHQsZSl7Zm9yKHZhciBuIGluIGUpe3ZhciByPVgucHJlZml4ZWRQcm9wUkVzLG89ITE7Zm9yKHZhciBpIGluIHIpaWYoMD09PW4uaW5kZXhPZihpKSYmcltpXS50ZXN0KG4pKXtvPSEwO2JyZWFrfW98fFwiZnVuY3Rpb25cIj09dHlwZW9mIGVbbl18fCh0W25dPWVbbl0pfXJldHVybiB0fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShGLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLEYuZGVmYXVsdD12b2lkIDAsWC5wcmVmaXhlZFByb3BSRXM9e3dlYmtpdDovKE1vdmVtZW50W1hZXXxSYWRpdXNbWFldfFJvdGF0aW9uQW5nbGV8Rm9yY2UpJC8sbW96Oi8oUHJlc3N1cmUpJC99O3ZhciBZPVg7Ri5kZWZhdWx0PVk7dmFyIFc9e307ZnVuY3Rpb24gTCh0KXtyZXR1cm4gdCBpbnN0YW5jZW9mIGguZGVmYXVsdC5FdmVudHx8dCBpbnN0YW5jZW9mIGguZGVmYXVsdC5Ub3VjaH1mdW5jdGlvbiBCKHQsZSxuKXtyZXR1cm4gdD10fHxcInBhZ2VcIiwobj1ufHx7fSkueD1lW3QrXCJYXCJdLG4ueT1lW3QrXCJZXCJdLG59ZnVuY3Rpb24gVSh0LGUpe3JldHVybiBlPWV8fHt4OjAseTowfSxiLmRlZmF1bHQuaXNPcGVyYU1vYmlsZSYmTCh0KT8oQihcInNjcmVlblwiLHQsZSksZS54Kz13aW5kb3cuc2Nyb2xsWCxlLnkrPXdpbmRvdy5zY3JvbGxZKTpCKFwicGFnZVwiLHQsZSksZX1mdW5jdGlvbiBOKHQsZSl7cmV0dXJuIGU9ZXx8e30sYi5kZWZhdWx0LmlzT3BlcmFNb2JpbGUmJkwodCk/QihcInNjcmVlblwiLHQsZSk6QihcImNsaWVudFwiLHQsZSksZX1mdW5jdGlvbiBWKHQpe3ZhciBlPVtdO3JldHVybiBpLmRlZmF1bHQuYXJyYXkodCk/KGVbMF09dFswXSxlWzFdPXRbMV0pOlwidG91Y2hlbmRcIj09PXQudHlwZT8xPT09dC50b3VjaGVzLmxlbmd0aD8oZVswXT10LnRvdWNoZXNbMF0sZVsxXT10LmNoYW5nZWRUb3VjaGVzWzBdKTowPT09dC50b3VjaGVzLmxlbmd0aCYmKGVbMF09dC5jaGFuZ2VkVG91Y2hlc1swXSxlWzFdPXQuY2hhbmdlZFRvdWNoZXNbMV0pOihlWzBdPXQudG91Y2hlc1swXSxlWzFdPXQudG91Y2hlc1sxXSksZX1mdW5jdGlvbiBxKHQpe2Zvcih2YXIgZT17cGFnZVg6MCxwYWdlWTowLGNsaWVudFg6MCxjbGllbnRZOjAsc2NyZWVuWDowLHNjcmVlblk6MH0sbj0wO248dC5sZW5ndGg7bisrKXt2YXIgcj10W25dO2Zvcih2YXIgbyBpbiBlKWVbb10rPXJbb119Zm9yKHZhciBpIGluIGUpZVtpXS89dC5sZW5ndGg7cmV0dXJuIGV9T2JqZWN0LmRlZmluZVByb3BlcnR5KFcsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksVy5jb3B5Q29vcmRzPWZ1bmN0aW9uKHQsZSl7dC5wYWdlPXQucGFnZXx8e30sdC5wYWdlLng9ZS5wYWdlLngsdC5wYWdlLnk9ZS5wYWdlLnksdC5jbGllbnQ9dC5jbGllbnR8fHt9LHQuY2xpZW50Lng9ZS5jbGllbnQueCx0LmNsaWVudC55PWUuY2xpZW50LnksdC50aW1lU3RhbXA9ZS50aW1lU3RhbXB9LFcuc2V0Q29vcmREZWx0YXM9ZnVuY3Rpb24odCxlLG4pe3QucGFnZS54PW4ucGFnZS54LWUucGFnZS54LHQucGFnZS55PW4ucGFnZS55LWUucGFnZS55LHQuY2xpZW50Lng9bi5jbGllbnQueC1lLmNsaWVudC54LHQuY2xpZW50Lnk9bi5jbGllbnQueS1lLmNsaWVudC55LHQudGltZVN0YW1wPW4udGltZVN0YW1wLWUudGltZVN0YW1wfSxXLnNldENvb3JkVmVsb2NpdHk9ZnVuY3Rpb24odCxlKXt2YXIgbj1NYXRoLm1heChlLnRpbWVTdGFtcC8xZTMsLjAwMSk7dC5wYWdlLng9ZS5wYWdlLngvbix0LnBhZ2UueT1lLnBhZ2UueS9uLHQuY2xpZW50Lng9ZS5jbGllbnQueC9uLHQuY2xpZW50Lnk9ZS5jbGllbnQueS9uLHQudGltZVN0YW1wPW59LFcuc2V0WmVyb0Nvb3Jkcz1mdW5jdGlvbih0KXt0LnBhZ2UueD0wLHQucGFnZS55PTAsdC5jbGllbnQueD0wLHQuY2xpZW50Lnk9MH0sVy5pc05hdGl2ZVBvaW50ZXI9TCxXLmdldFhZPUIsVy5nZXRQYWdlWFk9VSxXLmdldENsaWVudFhZPU4sVy5nZXRQb2ludGVySWQ9ZnVuY3Rpb24odCl7cmV0dXJuIGkuZGVmYXVsdC5udW1iZXIodC5wb2ludGVySWQpP3QucG9pbnRlcklkOnQuaWRlbnRpZmllcn0sVy5zZXRDb29yZHM9ZnVuY3Rpb24odCxlLG4pe3ZhciByPWUubGVuZ3RoPjE/cShlKTplWzBdO1Uocix0LnBhZ2UpLE4ocix0LmNsaWVudCksdC50aW1lU3RhbXA9bn0sVy5nZXRUb3VjaFBhaXI9VixXLnBvaW50ZXJBdmVyYWdlPXEsVy50b3VjaEJCb3g9ZnVuY3Rpb24odCl7aWYoIXQubGVuZ3RoKXJldHVybiBudWxsO3ZhciBlPVYodCksbj1NYXRoLm1pbihlWzBdLnBhZ2VYLGVbMV0ucGFnZVgpLHI9TWF0aC5taW4oZVswXS5wYWdlWSxlWzFdLnBhZ2VZKSxvPU1hdGgubWF4KGVbMF0ucGFnZVgsZVsxXS5wYWdlWCksaT1NYXRoLm1heChlWzBdLnBhZ2VZLGVbMV0ucGFnZVkpO3JldHVybnt4Om4seTpyLGxlZnQ6bix0b3A6cixyaWdodDpvLGJvdHRvbTppLHdpZHRoOm8tbixoZWlnaHQ6aS1yfX0sVy50b3VjaERpc3RhbmNlPWZ1bmN0aW9uKHQsZSl7dmFyIG49ZStcIlhcIixyPWUrXCJZXCIsbz1WKHQpLGk9b1swXVtuXS1vWzFdW25dLGE9b1swXVtyXS1vWzFdW3JdO3JldHVybigwLFIuZGVmYXVsdCkoaSxhKX0sVy50b3VjaEFuZ2xlPWZ1bmN0aW9uKHQsZSl7dmFyIG49ZStcIlhcIixyPWUrXCJZXCIsbz1WKHQpLGk9b1sxXVtuXS1vWzBdW25dLGE9b1sxXVtyXS1vWzBdW3JdO3JldHVybiAxODAqTWF0aC5hdGFuMihhLGkpL01hdGguUEl9LFcuZ2V0UG9pbnRlclR5cGU9ZnVuY3Rpb24odCl7cmV0dXJuIGkuZGVmYXVsdC5zdHJpbmcodC5wb2ludGVyVHlwZSk/dC5wb2ludGVyVHlwZTppLmRlZmF1bHQubnVtYmVyKHQucG9pbnRlclR5cGUpP1t2b2lkIDAsdm9pZCAwLFwidG91Y2hcIixcInBlblwiLFwibW91c2VcIl1bdC5wb2ludGVyVHlwZV06L3RvdWNoLy50ZXN0KHQudHlwZSl8fHQgaW5zdGFuY2VvZiBoLmRlZmF1bHQuVG91Y2g/XCJ0b3VjaFwiOlwibW91c2VcIn0sVy5nZXRFdmVudFRhcmdldHM9ZnVuY3Rpb24odCl7dmFyIGU9aS5kZWZhdWx0LmZ1bmModC5jb21wb3NlZFBhdGgpP3QuY29tcG9zZWRQYXRoKCk6dC5wYXRoO3JldHVybltfLmdldEFjdHVhbEVsZW1lbnQoZT9lWzBdOnQudGFyZ2V0KSxfLmdldEFjdHVhbEVsZW1lbnQodC5jdXJyZW50VGFyZ2V0KV19LFcubmV3Q29vcmRzPWZ1bmN0aW9uKCl7cmV0dXJue3BhZ2U6e3g6MCx5OjB9LGNsaWVudDp7eDowLHk6MH0sdGltZVN0YW1wOjB9fSxXLmNvb3Jkc1RvRXZlbnQ9ZnVuY3Rpb24odCl7cmV0dXJue2Nvb3Jkczp0LGdldCBwYWdlKCl7cmV0dXJuIHRoaXMuY29vcmRzLnBhZ2V9LGdldCBjbGllbnQoKXtyZXR1cm4gdGhpcy5jb29yZHMuY2xpZW50fSxnZXQgdGltZVN0YW1wKCl7cmV0dXJuIHRoaXMuY29vcmRzLnRpbWVTdGFtcH0sZ2V0IHBhZ2VYKCl7cmV0dXJuIHRoaXMuY29vcmRzLnBhZ2UueH0sZ2V0IHBhZ2VZKCl7cmV0dXJuIHRoaXMuY29vcmRzLnBhZ2UueX0sZ2V0IGNsaWVudFgoKXtyZXR1cm4gdGhpcy5jb29yZHMuY2xpZW50Lnh9LGdldCBjbGllbnRZKCl7cmV0dXJuIHRoaXMuY29vcmRzLmNsaWVudC55fSxnZXQgcG9pbnRlcklkKCl7cmV0dXJuIHRoaXMuY29vcmRzLnBvaW50ZXJJZH0sZ2V0IHRhcmdldCgpe3JldHVybiB0aGlzLmNvb3Jkcy50YXJnZXR9LGdldCB0eXBlKCl7cmV0dXJuIHRoaXMuY29vcmRzLnR5cGV9LGdldCBwb2ludGVyVHlwZSgpe3JldHVybiB0aGlzLmNvb3Jkcy5wb2ludGVyVHlwZX0sZ2V0IGJ1dHRvbnMoKXtyZXR1cm4gdGhpcy5jb29yZHMuYnV0dG9uc30scHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXt9fX0sT2JqZWN0LmRlZmluZVByb3BlcnR5KFcsXCJwb2ludGVyRXh0ZW5kXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIEYuZGVmYXVsdH19KTt2YXIgJD17fTtmdW5jdGlvbiBHKHQsZSl7Zm9yKHZhciBuPTA7bjxlLmxlbmd0aDtuKyspe3ZhciByPWVbbl07ci5lbnVtZXJhYmxlPXIuZW51bWVyYWJsZXx8ITEsci5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gciYmKHIud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LHIua2V5LHIpfX1PYmplY3QuZGVmaW5lUHJvcGVydHkoJCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSwkLkJhc2VFdmVudD12b2lkIDA7dmFyIEg9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KGUpeyFmdW5jdGlvbih0LGUpe2lmKCEodCBpbnN0YW5jZW9mIGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9KHRoaXMsdCksdGhpcy50eXBlPXZvaWQgMCx0aGlzLnRhcmdldD12b2lkIDAsdGhpcy5jdXJyZW50VGFyZ2V0PXZvaWQgMCx0aGlzLmludGVyYWN0YWJsZT12b2lkIDAsdGhpcy5faW50ZXJhY3Rpb249dm9pZCAwLHRoaXMudGltZVN0YW1wPXZvaWQgMCx0aGlzLmltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZD0hMSx0aGlzLnByb3BhZ2F0aW9uU3RvcHBlZD0hMSx0aGlzLl9pbnRlcmFjdGlvbj1lfXZhciBlLG4scjtyZXR1cm4gZT10LChuPVt7a2V5OlwicHJldmVudERlZmF1bHRcIix2YWx1ZTpmdW5jdGlvbigpe319LHtrZXk6XCJzdG9wUHJvcGFnYXRpb25cIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMucHJvcGFnYXRpb25TdG9wcGVkPSEwfX0se2tleTpcInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvblwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5pbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ9dGhpcy5wcm9wYWdhdGlvblN0b3BwZWQ9ITB9fV0pJiZHKGUucHJvdG90eXBlLG4pLHImJkcoZSxyKSx0fSgpOyQuQmFzZUV2ZW50PUgsT2JqZWN0LmRlZmluZVByb3BlcnR5KEgucHJvdG90eXBlLFwiaW50ZXJhY3Rpb25cIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2ludGVyYWN0aW9uLl9wcm94eX0sc2V0OmZ1bmN0aW9uKCl7fX0pO3ZhciBLPXt9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShLLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLEsuZmluZD1LLmZpbmRJbmRleD1LLmZyb209Sy5tZXJnZT1LLnJlbW92ZT1LLmNvbnRhaW5zPXZvaWQgMDtLLmNvbnRhaW5zPWZ1bmN0aW9uKHQsZSl7cmV0dXJuLTEhPT10LmluZGV4T2YoZSl9O0sucmVtb3ZlPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQuc3BsaWNlKHQuaW5kZXhPZihlKSwxKX07dmFyIFo9ZnVuY3Rpb24odCxlKXtmb3IodmFyIG49MDtuPGUubGVuZ3RoO24rKyl7dmFyIHI9ZVtuXTt0LnB1c2gocil9cmV0dXJuIHR9O0subWVyZ2U9WjtLLmZyb209ZnVuY3Rpb24odCl7cmV0dXJuIFooW10sdCl9O3ZhciBKPWZ1bmN0aW9uKHQsZSl7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspaWYoZSh0W25dLG4sdCkpcmV0dXJuIG47cmV0dXJuLTF9O0suZmluZEluZGV4PUo7Sy5maW5kPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRbSih0LGUpXX07dmFyIFE9e307ZnVuY3Rpb24gdHQodCl7cmV0dXJuKHR0PVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbih0KXtyZXR1cm4gdHlwZW9mIHR9OmZ1bmN0aW9uKHQpe3JldHVybiB0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJnQuY29uc3RydWN0b3I9PT1TeW1ib2wmJnQhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIHR9KSh0KX1mdW5jdGlvbiBldCh0LGUpe2Zvcih2YXIgbj0wO248ZS5sZW5ndGg7bisrKXt2YXIgcj1lW25dO3IuZW51bWVyYWJsZT1yLmVudW1lcmFibGV8fCExLHIuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIHImJihyLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxyLmtleSxyKX19ZnVuY3Rpb24gbnQodCxlKXtyZXR1cm4obnQ9T2JqZWN0LnNldFByb3RvdHlwZU9mfHxmdW5jdGlvbih0LGUpe3JldHVybiB0Ll9fcHJvdG9fXz1lLHR9KSh0LGUpfWZ1bmN0aW9uIHJ0KHQpe3ZhciBlPWZ1bmN0aW9uKCl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFJlZmxlY3R8fCFSZWZsZWN0LmNvbnN0cnVjdClyZXR1cm4hMTtpZihSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKXJldHVybiExO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIFByb3h5KXJldHVybiEwO3RyeXtyZXR1cm4gRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLFtdLChmdW5jdGlvbigpe30pKSksITB9Y2F0Y2godCl7cmV0dXJuITF9fSgpO3JldHVybiBmdW5jdGlvbigpe3ZhciBuLHI9aXQodCk7aWYoZSl7dmFyIG89aXQodGhpcykuY29uc3RydWN0b3I7bj1SZWZsZWN0LmNvbnN0cnVjdChyLGFyZ3VtZW50cyxvKX1lbHNlIG49ci5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIG90KHRoaXMsbil9fWZ1bmN0aW9uIG90KHQsZSl7cmV0dXJuIWV8fFwib2JqZWN0XCIhPT10dChlKSYmXCJmdW5jdGlvblwiIT10eXBlb2YgZT9mdW5jdGlvbih0KXtpZih2b2lkIDA9PT10KXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4gdH0odCk6ZX1mdW5jdGlvbiBpdCh0KXtyZXR1cm4oaXQ9T2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5nZXRQcm90b3R5cGVPZjpmdW5jdGlvbih0KXtyZXR1cm4gdC5fX3Byb3RvX198fE9iamVjdC5nZXRQcm90b3R5cGVPZih0KX0pKHQpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eShRLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLFEuRHJvcEV2ZW50PXZvaWQgMDt2YXIgYXQ9ZnVuY3Rpb24odCl7IWZ1bmN0aW9uKHQsZSl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSYmbnVsbCE9PWUpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO3QucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoZSYmZS5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTp0LHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH19KSxlJiZudCh0LGUpfShpLHQpO3ZhciBlLG4scixvPXJ0KGkpO2Z1bmN0aW9uIGkodCxlLG4pe3ZhciByOyFmdW5jdGlvbih0LGUpe2lmKCEodCBpbnN0YW5jZW9mIGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9KHRoaXMsaSksKHI9by5jYWxsKHRoaXMsZS5faW50ZXJhY3Rpb24pKS50YXJnZXQ9dm9pZCAwLHIuZHJvcHpvbmU9dm9pZCAwLHIuZHJhZ0V2ZW50PXZvaWQgMCxyLnJlbGF0ZWRUYXJnZXQ9dm9pZCAwLHIuZHJhZ2dhYmxlPXZvaWQgMCxyLnRpbWVTdGFtcD12b2lkIDAsci5wcm9wYWdhdGlvblN0b3BwZWQ9ITEsci5pbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ9ITE7dmFyIGE9XCJkcmFnbGVhdmVcIj09PW4/dC5wcmV2OnQuY3VyLHM9YS5lbGVtZW50LGw9YS5kcm9wem9uZTtyZXR1cm4gci50eXBlPW4sci50YXJnZXQ9cyxyLmN1cnJlbnRUYXJnZXQ9cyxyLmRyb3B6b25lPWwsci5kcmFnRXZlbnQ9ZSxyLnJlbGF0ZWRUYXJnZXQ9ZS50YXJnZXQsci5kcmFnZ2FibGU9ZS5pbnRlcmFjdGFibGUsci50aW1lU3RhbXA9ZS50aW1lU3RhbXAscn1yZXR1cm4gZT1pLChuPVt7a2V5OlwicmVqZWN0XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9dGhpcy5faW50ZXJhY3Rpb24uZHJvcFN0YXRlO2lmKFwiZHJvcGFjdGl2YXRlXCI9PT10aGlzLnR5cGV8fHRoaXMuZHJvcHpvbmUmJmUuY3VyLmRyb3B6b25lPT09dGhpcy5kcm9wem9uZSYmZS5jdXIuZWxlbWVudD09PXRoaXMudGFyZ2V0KWlmKGUucHJldi5kcm9wem9uZT10aGlzLmRyb3B6b25lLGUucHJldi5lbGVtZW50PXRoaXMudGFyZ2V0LGUucmVqZWN0ZWQ9ITAsZS5ldmVudHMuZW50ZXI9bnVsbCx0aGlzLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpLFwiZHJvcGFjdGl2YXRlXCI9PT10aGlzLnR5cGUpe3ZhciBuPWUuYWN0aXZlRHJvcHMscj1LLmZpbmRJbmRleChuLChmdW5jdGlvbihlKXt2YXIgbj1lLmRyb3B6b25lLHI9ZS5lbGVtZW50O3JldHVybiBuPT09dC5kcm9wem9uZSYmcj09PXQudGFyZ2V0fSkpO2UuYWN0aXZlRHJvcHMuc3BsaWNlKHIsMSk7dmFyIG89bmV3IGkoZSx0aGlzLmRyYWdFdmVudCxcImRyb3BkZWFjdGl2YXRlXCIpO28uZHJvcHpvbmU9dGhpcy5kcm9wem9uZSxvLnRhcmdldD10aGlzLnRhcmdldCx0aGlzLmRyb3B6b25lLmZpcmUobyl9ZWxzZSB0aGlzLmRyb3B6b25lLmZpcmUobmV3IGkoZSx0aGlzLmRyYWdFdmVudCxcImRyYWdsZWF2ZVwiKSl9fSx7a2V5OlwicHJldmVudERlZmF1bHRcIix2YWx1ZTpmdW5jdGlvbigpe319LHtrZXk6XCJzdG9wUHJvcGFnYXRpb25cIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMucHJvcGFnYXRpb25TdG9wcGVkPSEwfX0se2tleTpcInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvblwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5pbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ9dGhpcy5wcm9wYWdhdGlvblN0b3BwZWQ9ITB9fV0pJiZldChlLnByb3RvdHlwZSxuKSxyJiZldChlLHIpLGl9KCQuQmFzZUV2ZW50KTtRLkRyb3BFdmVudD1hdDt2YXIgc3Q9e307ZnVuY3Rpb24gbHQodCxlKXtmb3IodmFyIG49MDtuPHQuc2xpY2UoKS5sZW5ndGg7bisrKXt2YXIgcj10LnNsaWNlKClbbl0sbz1yLmRyb3B6b25lLGk9ci5lbGVtZW50O2UuZHJvcHpvbmU9byxlLnRhcmdldD1pLG8uZmlyZShlKSxlLnByb3BhZ2F0aW9uU3RvcHBlZD1lLmltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZD0hMX19ZnVuY3Rpb24gdXQodCxlKXtmb3IodmFyIG49ZnVuY3Rpb24odCxlKXtmb3IodmFyIG49dC5pbnRlcmFjdGFibGVzLHI9W10sbz0wO288bi5saXN0Lmxlbmd0aDtvKyspe3ZhciBhPW4ubGlzdFtvXTtpZihhLm9wdGlvbnMuZHJvcC5lbmFibGVkKXt2YXIgcz1hLm9wdGlvbnMuZHJvcC5hY2NlcHQ7aWYoIShpLmRlZmF1bHQuZWxlbWVudChzKSYmcyE9PWV8fGkuZGVmYXVsdC5zdHJpbmcocykmJiFfLm1hdGNoZXNTZWxlY3RvcihlLHMpfHxpLmRlZmF1bHQuZnVuYyhzKSYmIXMoe2Ryb3B6b25lOmEsZHJhZ2dhYmxlRWxlbWVudDplfSkpKWZvcih2YXIgbD1pLmRlZmF1bHQuc3RyaW5nKGEudGFyZ2V0KT9hLl9jb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoYS50YXJnZXQpOmkuZGVmYXVsdC5hcnJheShhLnRhcmdldCk/YS50YXJnZXQ6W2EudGFyZ2V0XSx1PTA7dTxsLmxlbmd0aDt1Kyspe3ZhciBjPWxbdV07YyE9PWUmJnIucHVzaCh7ZHJvcHpvbmU6YSxlbGVtZW50OmN9KX19fXJldHVybiByfSh0LGUpLHI9MDtyPG4ubGVuZ3RoO3IrKyl7dmFyIG89bltyXTtvLnJlY3Q9by5kcm9wem9uZS5nZXRSZWN0KG8uZWxlbWVudCl9cmV0dXJuIG59ZnVuY3Rpb24gY3QodCxlLG4pe2Zvcih2YXIgcj10LmRyb3BTdGF0ZSxvPXQuaW50ZXJhY3RhYmxlLGk9dC5lbGVtZW50LGE9W10scz0wO3M8ci5hY3RpdmVEcm9wcy5sZW5ndGg7cysrKXt2YXIgbD1yLmFjdGl2ZURyb3BzW3NdLHU9bC5kcm9wem9uZSxjPWwuZWxlbWVudCxmPWwucmVjdDthLnB1c2godS5kcm9wQ2hlY2soZSxuLG8saSxjLGYpP2M6bnVsbCl9dmFyIGQ9Xy5pbmRleE9mRGVlcGVzdEVsZW1lbnQoYSk7cmV0dXJuIHIuYWN0aXZlRHJvcHNbZF18fG51bGx9ZnVuY3Rpb24gZnQodCxlLG4pe3ZhciByPXQuZHJvcFN0YXRlLG89e2VudGVyOm51bGwsbGVhdmU6bnVsbCxhY3RpdmF0ZTpudWxsLGRlYWN0aXZhdGU6bnVsbCxtb3ZlOm51bGwsZHJvcDpudWxsfTtyZXR1cm5cImRyYWdzdGFydFwiPT09bi50eXBlJiYoby5hY3RpdmF0ZT1uZXcgUS5Ecm9wRXZlbnQocixuLFwiZHJvcGFjdGl2YXRlXCIpLG8uYWN0aXZhdGUudGFyZ2V0PW51bGwsby5hY3RpdmF0ZS5kcm9wem9uZT1udWxsKSxcImRyYWdlbmRcIj09PW4udHlwZSYmKG8uZGVhY3RpdmF0ZT1uZXcgUS5Ecm9wRXZlbnQocixuLFwiZHJvcGRlYWN0aXZhdGVcIiksby5kZWFjdGl2YXRlLnRhcmdldD1udWxsLG8uZGVhY3RpdmF0ZS5kcm9wem9uZT1udWxsKSxyLnJlamVjdGVkfHwoci5jdXIuZWxlbWVudCE9PXIucHJldi5lbGVtZW50JiYoci5wcmV2LmRyb3B6b25lJiYoby5sZWF2ZT1uZXcgUS5Ecm9wRXZlbnQocixuLFwiZHJhZ2xlYXZlXCIpLG4uZHJhZ0xlYXZlPW8ubGVhdmUudGFyZ2V0PXIucHJldi5lbGVtZW50LG4ucHJldkRyb3B6b25lPW8ubGVhdmUuZHJvcHpvbmU9ci5wcmV2LmRyb3B6b25lKSxyLmN1ci5kcm9wem9uZSYmKG8uZW50ZXI9bmV3IFEuRHJvcEV2ZW50KHIsbixcImRyYWdlbnRlclwiKSxuLmRyYWdFbnRlcj1yLmN1ci5lbGVtZW50LG4uZHJvcHpvbmU9ci5jdXIuZHJvcHpvbmUpKSxcImRyYWdlbmRcIj09PW4udHlwZSYmci5jdXIuZHJvcHpvbmUmJihvLmRyb3A9bmV3IFEuRHJvcEV2ZW50KHIsbixcImRyb3BcIiksbi5kcm9wem9uZT1yLmN1ci5kcm9wem9uZSxuLnJlbGF0ZWRUYXJnZXQ9ci5jdXIuZWxlbWVudCksXCJkcmFnbW92ZVwiPT09bi50eXBlJiZyLmN1ci5kcm9wem9uZSYmKG8ubW92ZT1uZXcgUS5Ecm9wRXZlbnQocixuLFwiZHJvcG1vdmVcIiksby5tb3ZlLmRyYWdtb3ZlPW4sbi5kcm9wem9uZT1yLmN1ci5kcm9wem9uZSkpLG99ZnVuY3Rpb24gZHQodCxlKXt2YXIgbj10LmRyb3BTdGF0ZSxyPW4uYWN0aXZlRHJvcHMsbz1uLmN1cixpPW4ucHJldjtlLmxlYXZlJiZpLmRyb3B6b25lLmZpcmUoZS5sZWF2ZSksZS5lbnRlciYmby5kcm9wem9uZS5maXJlKGUuZW50ZXIpLGUubW92ZSYmby5kcm9wem9uZS5maXJlKGUubW92ZSksZS5kcm9wJiZvLmRyb3B6b25lLmZpcmUoZS5kcm9wKSxlLmRlYWN0aXZhdGUmJmx0KHIsZS5kZWFjdGl2YXRlKSxuLnByZXYuZHJvcHpvbmU9by5kcm9wem9uZSxuLnByZXYuZWxlbWVudD1vLmVsZW1lbnR9ZnVuY3Rpb24gcHQodCxlKXt2YXIgbj10LmludGVyYWN0aW9uLHI9dC5pRXZlbnQsbz10LmV2ZW50O2lmKFwiZHJhZ21vdmVcIj09PXIudHlwZXx8XCJkcmFnZW5kXCI9PT1yLnR5cGUpe3ZhciBpPW4uZHJvcFN0YXRlO2UuZHluYW1pY0Ryb3AmJihpLmFjdGl2ZURyb3BzPXV0KGUsbi5lbGVtZW50KSk7dmFyIGE9cixzPWN0KG4sYSxvKTtpLnJlamVjdGVkPWkucmVqZWN0ZWQmJiEhcyYmcy5kcm9wem9uZT09PWkuY3VyLmRyb3B6b25lJiZzLmVsZW1lbnQ9PT1pLmN1ci5lbGVtZW50LGkuY3VyLmRyb3B6b25lPXMmJnMuZHJvcHpvbmUsaS5jdXIuZWxlbWVudD1zJiZzLmVsZW1lbnQsaS5ldmVudHM9ZnQobiwwLGEpfX1PYmplY3QuZGVmaW5lUHJvcGVydHkoc3QsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksc3QuZGVmYXVsdD12b2lkIDA7dmFyIHZ0PXtpZDpcImFjdGlvbnMvZHJvcFwiLGluc3RhbGw6ZnVuY3Rpb24odCl7dmFyIGU9dC5hY3Rpb25zLG49dC5pbnRlcmFjdFN0YXRpYyxyPXQuSW50ZXJhY3RhYmxlLG89dC5kZWZhdWx0czt0LnVzZVBsdWdpbihjLmRlZmF1bHQpLHIucHJvdG90eXBlLmRyb3B6b25lPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbih0LGUpe2lmKGkuZGVmYXVsdC5vYmplY3QoZSkpe2lmKHQub3B0aW9ucy5kcm9wLmVuYWJsZWQ9ITEhPT1lLmVuYWJsZWQsZS5saXN0ZW5lcnMpe3ZhciBuPSgwLHouZGVmYXVsdCkoZS5saXN0ZW5lcnMpLHI9T2JqZWN0LmtleXMobikucmVkdWNlKChmdW5jdGlvbih0LGUpe3JldHVybiB0Wy9eKGVudGVyfGxlYXZlKS8udGVzdChlKT9cImRyYWdcIi5jb25jYXQoZSk6L14oYWN0aXZhdGV8ZGVhY3RpdmF0ZXxtb3ZlKS8udGVzdChlKT9cImRyb3BcIi5jb25jYXQoZSk6ZV09bltlXSx0fSkse30pO3Qub2ZmKHQub3B0aW9ucy5kcm9wLmxpc3RlbmVycyksdC5vbihyKSx0Lm9wdGlvbnMuZHJvcC5saXN0ZW5lcnM9cn1yZXR1cm4gaS5kZWZhdWx0LmZ1bmMoZS5vbmRyb3ApJiZ0Lm9uKFwiZHJvcFwiLGUub25kcm9wKSxpLmRlZmF1bHQuZnVuYyhlLm9uZHJvcGFjdGl2YXRlKSYmdC5vbihcImRyb3BhY3RpdmF0ZVwiLGUub25kcm9wYWN0aXZhdGUpLGkuZGVmYXVsdC5mdW5jKGUub25kcm9wZGVhY3RpdmF0ZSkmJnQub24oXCJkcm9wZGVhY3RpdmF0ZVwiLGUub25kcm9wZGVhY3RpdmF0ZSksaS5kZWZhdWx0LmZ1bmMoZS5vbmRyYWdlbnRlcikmJnQub24oXCJkcmFnZW50ZXJcIixlLm9uZHJhZ2VudGVyKSxpLmRlZmF1bHQuZnVuYyhlLm9uZHJhZ2xlYXZlKSYmdC5vbihcImRyYWdsZWF2ZVwiLGUub25kcmFnbGVhdmUpLGkuZGVmYXVsdC5mdW5jKGUub25kcm9wbW92ZSkmJnQub24oXCJkcm9wbW92ZVwiLGUub25kcm9wbW92ZSksL14ocG9pbnRlcnxjZW50ZXIpJC8udGVzdChlLm92ZXJsYXApP3Qub3B0aW9ucy5kcm9wLm92ZXJsYXA9ZS5vdmVybGFwOmkuZGVmYXVsdC5udW1iZXIoZS5vdmVybGFwKSYmKHQub3B0aW9ucy5kcm9wLm92ZXJsYXA9TWF0aC5tYXgoTWF0aC5taW4oMSxlLm92ZXJsYXApLDApKSxcImFjY2VwdFwiaW4gZSYmKHQub3B0aW9ucy5kcm9wLmFjY2VwdD1lLmFjY2VwdCksXCJjaGVja2VyXCJpbiBlJiYodC5vcHRpb25zLmRyb3AuY2hlY2tlcj1lLmNoZWNrZXIpLHR9aWYoaS5kZWZhdWx0LmJvb2woZSkpcmV0dXJuIHQub3B0aW9ucy5kcm9wLmVuYWJsZWQ9ZSx0O3JldHVybiB0Lm9wdGlvbnMuZHJvcH0odGhpcyx0KX0sci5wcm90b3R5cGUuZHJvcENoZWNrPWZ1bmN0aW9uKHQsZSxuLHIsbyxhKXtyZXR1cm4gZnVuY3Rpb24odCxlLG4scixvLGEscyl7dmFyIGw9ITE7aWYoIShzPXN8fHQuZ2V0UmVjdChhKSkpcmV0dXJuISF0Lm9wdGlvbnMuZHJvcC5jaGVja2VyJiZ0Lm9wdGlvbnMuZHJvcC5jaGVja2VyKGUsbixsLHQsYSxyLG8pO3ZhciB1PXQub3B0aW9ucy5kcm9wLm92ZXJsYXA7aWYoXCJwb2ludGVyXCI9PT11KXt2YXIgYz0oMCxBLmRlZmF1bHQpKHIsbyxcImRyYWdcIiksZj1XLmdldFBhZ2VYWShlKTtmLngrPWMueCxmLnkrPWMueTt2YXIgZD1mLng+cy5sZWZ0JiZmLng8cy5yaWdodCxwPWYueT5zLnRvcCYmZi55PHMuYm90dG9tO2w9ZCYmcH12YXIgdj1yLmdldFJlY3Qobyk7aWYodiYmXCJjZW50ZXJcIj09PXUpe3ZhciBoPXYubGVmdCt2LndpZHRoLzIsZz12LnRvcCt2LmhlaWdodC8yO2w9aD49cy5sZWZ0JiZoPD1zLnJpZ2h0JiZnPj1zLnRvcCYmZzw9cy5ib3R0b219aWYodiYmaS5kZWZhdWx0Lm51bWJlcih1KSl7dmFyIHk9TWF0aC5tYXgoMCxNYXRoLm1pbihzLnJpZ2h0LHYucmlnaHQpLU1hdGgubWF4KHMubGVmdCx2LmxlZnQpKSpNYXRoLm1heCgwLE1hdGgubWluKHMuYm90dG9tLHYuYm90dG9tKS1NYXRoLm1heChzLnRvcCx2LnRvcCkpLyh2LndpZHRoKnYuaGVpZ2h0KTtsPXk+PXV9dC5vcHRpb25zLmRyb3AuY2hlY2tlciYmKGw9dC5vcHRpb25zLmRyb3AuY2hlY2tlcihlLG4sbCx0LGEscixvKSk7cmV0dXJuIGx9KHRoaXMsdCxlLG4scixvLGEpfSxuLmR5bmFtaWNEcm9wPWZ1bmN0aW9uKGUpe3JldHVybiBpLmRlZmF1bHQuYm9vbChlKT8odC5keW5hbWljRHJvcD1lLG4pOnQuZHluYW1pY0Ryb3B9LCgwLGouZGVmYXVsdCkoZS5waGFzZWxlc3NUeXBlcyx7ZHJhZ2VudGVyOiEwLGRyYWdsZWF2ZTohMCxkcm9wYWN0aXZhdGU6ITAsZHJvcGRlYWN0aXZhdGU6ITAsZHJvcG1vdmU6ITAsZHJvcDohMH0pLGUubWV0aG9kRGljdC5kcm9wPVwiZHJvcHpvbmVcIix0LmR5bmFtaWNEcm9wPSExLG8uYWN0aW9ucy5kcm9wPXZ0LmRlZmF1bHRzfSxsaXN0ZW5lcnM6e1wiaW50ZXJhY3Rpb25zOmJlZm9yZS1hY3Rpb24tc3RhcnRcIjpmdW5jdGlvbih0KXt2YXIgZT10LmludGVyYWN0aW9uO1wiZHJhZ1wiPT09ZS5wcmVwYXJlZC5uYW1lJiYoZS5kcm9wU3RhdGU9e2N1cjp7ZHJvcHpvbmU6bnVsbCxlbGVtZW50Om51bGx9LHByZXY6e2Ryb3B6b25lOm51bGwsZWxlbWVudDpudWxsfSxyZWplY3RlZDpudWxsLGV2ZW50czpudWxsLGFjdGl2ZURyb3BzOltdfSl9LFwiaW50ZXJhY3Rpb25zOmFmdGVyLWFjdGlvbi1zdGFydFwiOmZ1bmN0aW9uKHQsZSl7dmFyIG49dC5pbnRlcmFjdGlvbixyPSh0LmV2ZW50LHQuaUV2ZW50KTtpZihcImRyYWdcIj09PW4ucHJlcGFyZWQubmFtZSl7dmFyIG89bi5kcm9wU3RhdGU7by5hY3RpdmVEcm9wcz1udWxsLG8uZXZlbnRzPW51bGwsby5hY3RpdmVEcm9wcz11dChlLG4uZWxlbWVudCksby5ldmVudHM9ZnQobiwwLHIpLG8uZXZlbnRzLmFjdGl2YXRlJiYobHQoby5hY3RpdmVEcm9wcyxvLmV2ZW50cy5hY3RpdmF0ZSksZS5maXJlKFwiYWN0aW9ucy9kcm9wOnN0YXJ0XCIse2ludGVyYWN0aW9uOm4sZHJhZ0V2ZW50OnJ9KSl9fSxcImludGVyYWN0aW9uczphY3Rpb24tbW92ZVwiOnB0LFwiaW50ZXJhY3Rpb25zOmFmdGVyLWFjdGlvbi1tb3ZlXCI6ZnVuY3Rpb24odCxlKXt2YXIgbj10LmludGVyYWN0aW9uLHI9dC5pRXZlbnQ7XCJkcmFnXCI9PT1uLnByZXBhcmVkLm5hbWUmJihkdChuLG4uZHJvcFN0YXRlLmV2ZW50cyksZS5maXJlKFwiYWN0aW9ucy9kcm9wOm1vdmVcIix7aW50ZXJhY3Rpb246bixkcmFnRXZlbnQ6cn0pLG4uZHJvcFN0YXRlLmV2ZW50cz17fSl9LFwiaW50ZXJhY3Rpb25zOmFjdGlvbi1lbmRcIjpmdW5jdGlvbih0LGUpe2lmKFwiZHJhZ1wiPT09dC5pbnRlcmFjdGlvbi5wcmVwYXJlZC5uYW1lKXt2YXIgbj10LmludGVyYWN0aW9uLHI9dC5pRXZlbnQ7cHQodCxlKSxkdChuLG4uZHJvcFN0YXRlLmV2ZW50cyksZS5maXJlKFwiYWN0aW9ucy9kcm9wOmVuZFwiLHtpbnRlcmFjdGlvbjpuLGRyYWdFdmVudDpyfSl9fSxcImludGVyYWN0aW9uczpzdG9wXCI6ZnVuY3Rpb24odCl7dmFyIGU9dC5pbnRlcmFjdGlvbjtpZihcImRyYWdcIj09PWUucHJlcGFyZWQubmFtZSl7dmFyIG49ZS5kcm9wU3RhdGU7biYmKG4uYWN0aXZlRHJvcHM9bnVsbCxuLmV2ZW50cz1udWxsLG4uY3VyLmRyb3B6b25lPW51bGwsbi5jdXIuZWxlbWVudD1udWxsLG4ucHJldi5kcm9wem9uZT1udWxsLG4ucHJldi5lbGVtZW50PW51bGwsbi5yZWplY3RlZD0hMSl9fX0sZ2V0QWN0aXZlRHJvcHM6dXQsZ2V0RHJvcDpjdCxnZXREcm9wRXZlbnRzOmZ0LGZpcmVEcm9wRXZlbnRzOmR0LGRlZmF1bHRzOntlbmFibGVkOiExLGFjY2VwdDpudWxsLG92ZXJsYXA6XCJwb2ludGVyXCJ9fSxodD12dDtzdC5kZWZhdWx0PWh0O3ZhciBndD17fTtmdW5jdGlvbiB5dCh0KXt2YXIgZT10LmludGVyYWN0aW9uLG49dC5pRXZlbnQscj10LnBoYXNlO2lmKFwiZ2VzdHVyZVwiPT09ZS5wcmVwYXJlZC5uYW1lKXt2YXIgbz1lLnBvaW50ZXJzLm1hcCgoZnVuY3Rpb24odCl7cmV0dXJuIHQucG9pbnRlcn0pKSxhPVwic3RhcnRcIj09PXIscz1cImVuZFwiPT09cixsPWUuaW50ZXJhY3RhYmxlLm9wdGlvbnMuZGVsdGFTb3VyY2U7aWYobi50b3VjaGVzPVtvWzBdLG9bMV1dLGEpbi5kaXN0YW5jZT1XLnRvdWNoRGlzdGFuY2UobyxsKSxuLmJveD1XLnRvdWNoQkJveChvKSxuLnNjYWxlPTEsbi5kcz0wLG4uYW5nbGU9Vy50b3VjaEFuZ2xlKG8sbCksbi5kYT0wLGUuZ2VzdHVyZS5zdGFydERpc3RhbmNlPW4uZGlzdGFuY2UsZS5nZXN0dXJlLnN0YXJ0QW5nbGU9bi5hbmdsZTtlbHNlIGlmKHMpe3ZhciB1PWUucHJldkV2ZW50O24uZGlzdGFuY2U9dS5kaXN0YW5jZSxuLmJveD11LmJveCxuLnNjYWxlPXUuc2NhbGUsbi5kcz0wLG4uYW5nbGU9dS5hbmdsZSxuLmRhPTB9ZWxzZSBuLmRpc3RhbmNlPVcudG91Y2hEaXN0YW5jZShvLGwpLG4uYm94PVcudG91Y2hCQm94KG8pLG4uc2NhbGU9bi5kaXN0YW5jZS9lLmdlc3R1cmUuc3RhcnREaXN0YW5jZSxuLmFuZ2xlPVcudG91Y2hBbmdsZShvLGwpLG4uZHM9bi5zY2FsZS1lLmdlc3R1cmUuc2NhbGUsbi5kYT1uLmFuZ2xlLWUuZ2VzdHVyZS5hbmdsZTtlLmdlc3R1cmUuZGlzdGFuY2U9bi5kaXN0YW5jZSxlLmdlc3R1cmUuYW5nbGU9bi5hbmdsZSxpLmRlZmF1bHQubnVtYmVyKG4uc2NhbGUpJiZuLnNjYWxlIT09MS8wJiYhaXNOYU4obi5zY2FsZSkmJihlLmdlc3R1cmUuc2NhbGU9bi5zY2FsZSl9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShndCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxndC5kZWZhdWx0PXZvaWQgMDt2YXIgbXQ9e2lkOlwiYWN0aW9ucy9nZXN0dXJlXCIsYmVmb3JlOltcImFjdGlvbnMvZHJhZ1wiLFwiYWN0aW9ucy9yZXNpemVcIl0saW5zdGFsbDpmdW5jdGlvbih0KXt2YXIgZT10LmFjdGlvbnMsbj10LkludGVyYWN0YWJsZSxyPXQuZGVmYXVsdHM7bi5wcm90b3R5cGUuZ2VzdHVyYWJsZT1mdW5jdGlvbih0KXtyZXR1cm4gaS5kZWZhdWx0Lm9iamVjdCh0KT8odGhpcy5vcHRpb25zLmdlc3R1cmUuZW5hYmxlZD0hMSE9PXQuZW5hYmxlZCx0aGlzLnNldFBlckFjdGlvbihcImdlc3R1cmVcIix0KSx0aGlzLnNldE9uRXZlbnRzKFwiZ2VzdHVyZVwiLHQpLHRoaXMpOmkuZGVmYXVsdC5ib29sKHQpPyh0aGlzLm9wdGlvbnMuZ2VzdHVyZS5lbmFibGVkPXQsdGhpcyk6dGhpcy5vcHRpb25zLmdlc3R1cmV9LGUubWFwLmdlc3R1cmU9bXQsZS5tZXRob2REaWN0Lmdlc3R1cmU9XCJnZXN0dXJhYmxlXCIsci5hY3Rpb25zLmdlc3R1cmU9bXQuZGVmYXVsdHN9LGxpc3RlbmVyczp7XCJpbnRlcmFjdGlvbnM6YWN0aW9uLXN0YXJ0XCI6eXQsXCJpbnRlcmFjdGlvbnM6YWN0aW9uLW1vdmVcIjp5dCxcImludGVyYWN0aW9uczphY3Rpb24tZW5kXCI6eXQsXCJpbnRlcmFjdGlvbnM6bmV3XCI6ZnVuY3Rpb24odCl7dC5pbnRlcmFjdGlvbi5nZXN0dXJlPXthbmdsZTowLGRpc3RhbmNlOjAsc2NhbGU6MSxzdGFydEFuZ2xlOjAsc3RhcnREaXN0YW5jZTowfX0sXCJhdXRvLXN0YXJ0OmNoZWNrXCI6ZnVuY3Rpb24odCl7aWYoISh0LmludGVyYWN0aW9uLnBvaW50ZXJzLmxlbmd0aDwyKSl7dmFyIGU9dC5pbnRlcmFjdGFibGUub3B0aW9ucy5nZXN0dXJlO2lmKGUmJmUuZW5hYmxlZClyZXR1cm4gdC5hY3Rpb249e25hbWU6XCJnZXN0dXJlXCJ9LCExfX19LGRlZmF1bHRzOnt9LGdldEN1cnNvcjpmdW5jdGlvbigpe3JldHVyblwiXCJ9fSxidD1tdDtndC5kZWZhdWx0PWJ0O3ZhciB4dD17fTtmdW5jdGlvbiB3dCh0LGUsbixyLG8sYSxzKXtpZighZSlyZXR1cm4hMTtpZighMD09PWUpe3ZhciBsPWkuZGVmYXVsdC5udW1iZXIoYS53aWR0aCk/YS53aWR0aDphLnJpZ2h0LWEubGVmdCx1PWkuZGVmYXVsdC5udW1iZXIoYS5oZWlnaHQpP2EuaGVpZ2h0OmEuYm90dG9tLWEudG9wO2lmKHM9TWF0aC5taW4ocyxNYXRoLmFicygoXCJsZWZ0XCI9PT10fHxcInJpZ2h0XCI9PT10P2w6dSkvMikpLGw8MCYmKFwibGVmdFwiPT09dD90PVwicmlnaHRcIjpcInJpZ2h0XCI9PT10JiYodD1cImxlZnRcIikpLHU8MCYmKFwidG9wXCI9PT10P3Q9XCJib3R0b21cIjpcImJvdHRvbVwiPT09dCYmKHQ9XCJ0b3BcIikpLFwibGVmdFwiPT09dClyZXR1cm4gbi54PChsPj0wP2EubGVmdDphLnJpZ2h0KStzO2lmKFwidG9wXCI9PT10KXJldHVybiBuLnk8KHU+PTA/YS50b3A6YS5ib3R0b20pK3M7aWYoXCJyaWdodFwiPT09dClyZXR1cm4gbi54PihsPj0wP2EucmlnaHQ6YS5sZWZ0KS1zO2lmKFwiYm90dG9tXCI9PT10KXJldHVybiBuLnk+KHU+PTA/YS5ib3R0b206YS50b3ApLXN9cmV0dXJuISFpLmRlZmF1bHQuZWxlbWVudChyKSYmKGkuZGVmYXVsdC5lbGVtZW50KGUpP2U9PT1yOl8ubWF0Y2hlc1VwVG8ocixlLG8pKX1mdW5jdGlvbiBfdCh0KXt2YXIgZT10LmlFdmVudCxuPXQuaW50ZXJhY3Rpb247aWYoXCJyZXNpemVcIj09PW4ucHJlcGFyZWQubmFtZSYmbi5yZXNpemVBeGVzKXt2YXIgcj1lO24uaW50ZXJhY3RhYmxlLm9wdGlvbnMucmVzaXplLnNxdWFyZT8oXCJ5XCI9PT1uLnJlc2l6ZUF4ZXM/ci5kZWx0YS54PXIuZGVsdGEueTpyLmRlbHRhLnk9ci5kZWx0YS54LHIuYXhlcz1cInh5XCIpOihyLmF4ZXM9bi5yZXNpemVBeGVzLFwieFwiPT09bi5yZXNpemVBeGVzP3IuZGVsdGEueT0wOlwieVwiPT09bi5yZXNpemVBeGVzJiYoci5kZWx0YS54PTApKX19T2JqZWN0LmRlZmluZVByb3BlcnR5KHh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHh0LmRlZmF1bHQ9dm9pZCAwO3ZhciBTdD17aWQ6XCJhY3Rpb25zL3Jlc2l6ZVwiLGJlZm9yZTpbXCJhY3Rpb25zL2RyYWdcIl0saW5zdGFsbDpmdW5jdGlvbih0KXt2YXIgZT10LmFjdGlvbnMsbj10LmJyb3dzZXIscj10LkludGVyYWN0YWJsZSxvPXQuZGVmYXVsdHM7U3QuY3Vyc29ycz1mdW5jdGlvbih0KXtyZXR1cm4gdC5pc0llOT97eDpcImUtcmVzaXplXCIseTpcInMtcmVzaXplXCIseHk6XCJzZS1yZXNpemVcIix0b3A6XCJuLXJlc2l6ZVwiLGxlZnQ6XCJ3LXJlc2l6ZVwiLGJvdHRvbTpcInMtcmVzaXplXCIscmlnaHQ6XCJlLXJlc2l6ZVwiLHRvcGxlZnQ6XCJzZS1yZXNpemVcIixib3R0b21yaWdodDpcInNlLXJlc2l6ZVwiLHRvcHJpZ2h0OlwibmUtcmVzaXplXCIsYm90dG9tbGVmdDpcIm5lLXJlc2l6ZVwifTp7eDpcImV3LXJlc2l6ZVwiLHk6XCJucy1yZXNpemVcIix4eTpcIm53c2UtcmVzaXplXCIsdG9wOlwibnMtcmVzaXplXCIsbGVmdDpcImV3LXJlc2l6ZVwiLGJvdHRvbTpcIm5zLXJlc2l6ZVwiLHJpZ2h0OlwiZXctcmVzaXplXCIsdG9wbGVmdDpcIm53c2UtcmVzaXplXCIsYm90dG9tcmlnaHQ6XCJud3NlLXJlc2l6ZVwiLHRvcHJpZ2h0OlwibmVzdy1yZXNpemVcIixib3R0b21sZWZ0OlwibmVzdy1yZXNpemVcIn19KG4pLFN0LmRlZmF1bHRNYXJnaW49bi5zdXBwb3J0c1RvdWNofHxuLnN1cHBvcnRzUG9pbnRlckV2ZW50PzIwOjEwLHIucHJvdG90eXBlLnJlc2l6YWJsZT1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24odCxlLG4pe2lmKGkuZGVmYXVsdC5vYmplY3QoZSkpcmV0dXJuIHQub3B0aW9ucy5yZXNpemUuZW5hYmxlZD0hMSE9PWUuZW5hYmxlZCx0LnNldFBlckFjdGlvbihcInJlc2l6ZVwiLGUpLHQuc2V0T25FdmVudHMoXCJyZXNpemVcIixlKSxpLmRlZmF1bHQuc3RyaW5nKGUuYXhpcykmJi9eeCR8XnkkfF54eSQvLnRlc3QoZS5heGlzKT90Lm9wdGlvbnMucmVzaXplLmF4aXM9ZS5heGlzOm51bGw9PT1lLmF4aXMmJih0Lm9wdGlvbnMucmVzaXplLmF4aXM9bi5kZWZhdWx0cy5hY3Rpb25zLnJlc2l6ZS5heGlzKSxpLmRlZmF1bHQuYm9vbChlLnByZXNlcnZlQXNwZWN0UmF0aW8pP3Qub3B0aW9ucy5yZXNpemUucHJlc2VydmVBc3BlY3RSYXRpbz1lLnByZXNlcnZlQXNwZWN0UmF0aW86aS5kZWZhdWx0LmJvb2woZS5zcXVhcmUpJiYodC5vcHRpb25zLnJlc2l6ZS5zcXVhcmU9ZS5zcXVhcmUpLHQ7aWYoaS5kZWZhdWx0LmJvb2woZSkpcmV0dXJuIHQub3B0aW9ucy5yZXNpemUuZW5hYmxlZD1lLHQ7cmV0dXJuIHQub3B0aW9ucy5yZXNpemV9KHRoaXMsZSx0KX0sZS5tYXAucmVzaXplPVN0LGUubWV0aG9kRGljdC5yZXNpemU9XCJyZXNpemFibGVcIixvLmFjdGlvbnMucmVzaXplPVN0LmRlZmF1bHRzfSxsaXN0ZW5lcnM6e1wiaW50ZXJhY3Rpb25zOm5ld1wiOmZ1bmN0aW9uKHQpe3QuaW50ZXJhY3Rpb24ucmVzaXplQXhlcz1cInh5XCJ9LFwiaW50ZXJhY3Rpb25zOmFjdGlvbi1zdGFydFwiOmZ1bmN0aW9uKHQpeyFmdW5jdGlvbih0KXt2YXIgZT10LmlFdmVudCxuPXQuaW50ZXJhY3Rpb247aWYoXCJyZXNpemVcIj09PW4ucHJlcGFyZWQubmFtZSYmbi5wcmVwYXJlZC5lZGdlcyl7dmFyIHI9ZSxvPW4ucmVjdDtuLl9yZWN0cz17c3RhcnQ6KDAsai5kZWZhdWx0KSh7fSxvKSxjb3JyZWN0ZWQ6KDAsai5kZWZhdWx0KSh7fSxvKSxwcmV2aW91czooMCxqLmRlZmF1bHQpKHt9LG8pLGRlbHRhOntsZWZ0OjAscmlnaHQ6MCx3aWR0aDowLHRvcDowLGJvdHRvbTowLGhlaWdodDowfX0sci5lZGdlcz1uLnByZXBhcmVkLmVkZ2VzLHIucmVjdD1uLl9yZWN0cy5jb3JyZWN0ZWQsci5kZWx0YVJlY3Q9bi5fcmVjdHMuZGVsdGF9fSh0KSxfdCh0KX0sXCJpbnRlcmFjdGlvbnM6YWN0aW9uLW1vdmVcIjpmdW5jdGlvbih0KXshZnVuY3Rpb24odCl7dmFyIGU9dC5pRXZlbnQsbj10LmludGVyYWN0aW9uO2lmKFwicmVzaXplXCI9PT1uLnByZXBhcmVkLm5hbWUmJm4ucHJlcGFyZWQuZWRnZXMpe3ZhciByPWUsbz1uLmludGVyYWN0YWJsZS5vcHRpb25zLnJlc2l6ZS5pbnZlcnQsaT1cInJlcG9zaXRpb25cIj09PW98fFwibmVnYXRlXCI9PT1vLGE9bi5yZWN0LHM9bi5fcmVjdHMsbD1zLnN0YXJ0LHU9cy5jb3JyZWN0ZWQsYz1zLmRlbHRhLGY9cy5wcmV2aW91cztpZigoMCxqLmRlZmF1bHQpKGYsdSksaSl7aWYoKDAsai5kZWZhdWx0KSh1LGEpLFwicmVwb3NpdGlvblwiPT09byl7aWYodS50b3A+dS5ib3R0b20pe3ZhciBkPXUudG9wO3UudG9wPXUuYm90dG9tLHUuYm90dG9tPWR9aWYodS5sZWZ0PnUucmlnaHQpe3ZhciBwPXUubGVmdDt1LmxlZnQ9dS5yaWdodCx1LnJpZ2h0PXB9fX1lbHNlIHUudG9wPU1hdGgubWluKGEudG9wLGwuYm90dG9tKSx1LmJvdHRvbT1NYXRoLm1heChhLmJvdHRvbSxsLnRvcCksdS5sZWZ0PU1hdGgubWluKGEubGVmdCxsLnJpZ2h0KSx1LnJpZ2h0PU1hdGgubWF4KGEucmlnaHQsbC5sZWZ0KTtmb3IodmFyIHYgaW4gdS53aWR0aD11LnJpZ2h0LXUubGVmdCx1LmhlaWdodD11LmJvdHRvbS11LnRvcCx1KWNbdl09dVt2XS1mW3ZdO3IuZWRnZXM9bi5wcmVwYXJlZC5lZGdlcyxyLnJlY3Q9dSxyLmRlbHRhUmVjdD1jfX0odCksX3QodCl9LFwiaW50ZXJhY3Rpb25zOmFjdGlvbi1lbmRcIjpmdW5jdGlvbih0KXt2YXIgZT10LmlFdmVudCxuPXQuaW50ZXJhY3Rpb247aWYoXCJyZXNpemVcIj09PW4ucHJlcGFyZWQubmFtZSYmbi5wcmVwYXJlZC5lZGdlcyl7dmFyIHI9ZTtyLmVkZ2VzPW4ucHJlcGFyZWQuZWRnZXMsci5yZWN0PW4uX3JlY3RzLmNvcnJlY3RlZCxyLmRlbHRhUmVjdD1uLl9yZWN0cy5kZWx0YX19LFwiYXV0by1zdGFydDpjaGVja1wiOmZ1bmN0aW9uKHQpe3ZhciBlPXQuaW50ZXJhY3Rpb24sbj10LmludGVyYWN0YWJsZSxyPXQuZWxlbWVudCxvPXQucmVjdCxhPXQuYnV0dG9ucztpZihvKXt2YXIgcz0oMCxqLmRlZmF1bHQpKHt9LGUuY29vcmRzLmN1ci5wYWdlKSxsPW4ub3B0aW9ucy5yZXNpemU7aWYobCYmbC5lbmFibGVkJiYoIWUucG9pbnRlcklzRG93bnx8IS9tb3VzZXxwb2ludGVyLy50ZXN0KGUucG9pbnRlclR5cGUpfHwwIT0oYSZsLm1vdXNlQnV0dG9ucykpKXtpZihpLmRlZmF1bHQub2JqZWN0KGwuZWRnZXMpKXt2YXIgdT17bGVmdDohMSxyaWdodDohMSx0b3A6ITEsYm90dG9tOiExfTtmb3IodmFyIGMgaW4gdSl1W2NdPXd0KGMsbC5lZGdlc1tjXSxzLGUuX2xhdGVzdFBvaW50ZXIuZXZlbnRUYXJnZXQscixvLGwubWFyZ2lufHxTdC5kZWZhdWx0TWFyZ2luKTt1LmxlZnQ9dS5sZWZ0JiYhdS5yaWdodCx1LnRvcD11LnRvcCYmIXUuYm90dG9tLCh1LmxlZnR8fHUucmlnaHR8fHUudG9wfHx1LmJvdHRvbSkmJih0LmFjdGlvbj17bmFtZTpcInJlc2l6ZVwiLGVkZ2VzOnV9KX1lbHNle3ZhciBmPVwieVwiIT09bC5heGlzJiZzLng+by5yaWdodC1TdC5kZWZhdWx0TWFyZ2luLGQ9XCJ4XCIhPT1sLmF4aXMmJnMueT5vLmJvdHRvbS1TdC5kZWZhdWx0TWFyZ2luOyhmfHxkKSYmKHQuYWN0aW9uPXtuYW1lOlwicmVzaXplXCIsYXhlczooZj9cInhcIjpcIlwiKSsoZD9cInlcIjpcIlwiKX0pfXJldHVybiF0LmFjdGlvbiYmdm9pZCAwfX19fSxkZWZhdWx0czp7c3F1YXJlOiExLHByZXNlcnZlQXNwZWN0UmF0aW86ITEsYXhpczpcInh5XCIsbWFyZ2luOk5hTixlZGdlczpudWxsLGludmVydDpcIm5vbmVcIn0sY3Vyc29yczpudWxsLGdldEN1cnNvcjpmdW5jdGlvbih0KXt2YXIgZT10LmVkZ2VzLG49dC5heGlzLHI9dC5uYW1lLG89U3QuY3Vyc29ycyxpPW51bGw7aWYobilpPW9bcituXTtlbHNlIGlmKGUpe2Zvcih2YXIgYT1cIlwiLHM9W1widG9wXCIsXCJib3R0b21cIixcImxlZnRcIixcInJpZ2h0XCJdLGw9MDtsPHMubGVuZ3RoO2wrKyl7dmFyIHU9c1tsXTtlW3VdJiYoYSs9dSl9aT1vW2FdfXJldHVybiBpfSxkZWZhdWx0TWFyZ2luOm51bGx9LFB0PVN0O3h0LmRlZmF1bHQ9UHQ7dmFyIE90PXt9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShPdCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxPdC5kZWZhdWx0PXZvaWQgMDt2YXIgRXQ9e2lkOlwiYWN0aW9uc1wiLGluc3RhbGw6ZnVuY3Rpb24odCl7dC51c2VQbHVnaW4oZ3QuZGVmYXVsdCksdC51c2VQbHVnaW4oeHQuZGVmYXVsdCksdC51c2VQbHVnaW4oYy5kZWZhdWx0KSx0LnVzZVBsdWdpbihzdC5kZWZhdWx0KX19O090LmRlZmF1bHQ9RXQ7dmFyIFR0PXt9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShUdCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxUdC5kZWZhdWx0PXZvaWQgMDtUdC5kZWZhdWx0PXt9O3ZhciBNdD17fTtPYmplY3QuZGVmaW5lUHJvcGVydHkoTXQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksTXQuZGVmYXVsdD12b2lkIDA7dmFyIGp0LGt0LEl0PTA7dmFyIER0PXtyZXF1ZXN0OmZ1bmN0aW9uKHQpe3JldHVybiBqdCh0KX0sY2FuY2VsOmZ1bmN0aW9uKHQpe3JldHVybiBrdCh0KX0saW5pdDpmdW5jdGlvbih0KXtpZihqdD10LnJlcXVlc3RBbmltYXRpb25GcmFtZSxrdD10LmNhbmNlbEFuaW1hdGlvbkZyYW1lLCFqdClmb3IodmFyIGU9W1wibXNcIixcIm1velwiLFwid2Via2l0XCIsXCJvXCJdLG49MDtuPGUubGVuZ3RoO24rKyl7dmFyIHI9ZVtuXTtqdD10W1wiXCIuY29uY2F0KHIsXCJSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIildLGt0PXRbXCJcIi5jb25jYXQocixcIkNhbmNlbEFuaW1hdGlvbkZyYW1lXCIpXXx8dFtcIlwiLmNvbmNhdChyLFwiQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lXCIpXX1qdD1qdCYmanQuYmluZCh0KSxrdD1rdCYma3QuYmluZCh0KSxqdHx8KGp0PWZ1bmN0aW9uKGUpe3ZhciBuPURhdGUubm93KCkscj1NYXRoLm1heCgwLDE2LShuLUl0KSksbz10LnNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7ZShuK3IpfSkscik7cmV0dXJuIEl0PW4rcixvfSxrdD1mdW5jdGlvbih0KXtyZXR1cm4gY2xlYXJUaW1lb3V0KHQpfSl9fTtNdC5kZWZhdWx0PUR0O3ZhciBBdD17fTtPYmplY3QuZGVmaW5lUHJvcGVydHkoQXQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksQXQuZ2V0Q29udGFpbmVyPUN0LEF0LmdldFNjcm9sbD1SdCxBdC5nZXRTY3JvbGxTaXplPWZ1bmN0aW9uKHQpe2kuZGVmYXVsdC53aW5kb3codCkmJih0PXdpbmRvdy5kb2N1bWVudC5ib2R5KTtyZXR1cm57eDp0LnNjcm9sbFdpZHRoLHk6dC5zY3JvbGxIZWlnaHR9fSxBdC5nZXRTY3JvbGxTaXplRGVsdGE9ZnVuY3Rpb24odCxlKXt2YXIgbj10LmludGVyYWN0aW9uLHI9dC5lbGVtZW50LG89biYmbi5pbnRlcmFjdGFibGUub3B0aW9uc1tuLnByZXBhcmVkLm5hbWVdLmF1dG9TY3JvbGw7aWYoIW98fCFvLmVuYWJsZWQpcmV0dXJuIGUoKSx7eDowLHk6MH07dmFyIGk9Q3Qoby5jb250YWluZXIsbi5pbnRlcmFjdGFibGUsciksYT1SdChpKTtlKCk7dmFyIHM9UnQoaSk7cmV0dXJue3g6cy54LWEueCx5OnMueS1hLnl9fSxBdC5kZWZhdWx0PXZvaWQgMDt2YXIgenQ9e2RlZmF1bHRzOntlbmFibGVkOiExLG1hcmdpbjo2MCxjb250YWluZXI6bnVsbCxzcGVlZDozMDB9LG5vdzpEYXRlLm5vdyxpbnRlcmFjdGlvbjpudWxsLGk6MCx4OjAseTowLGlzU2Nyb2xsaW5nOiExLHByZXZUaW1lOjAsbWFyZ2luOjAsc3BlZWQ6MCxzdGFydDpmdW5jdGlvbih0KXt6dC5pc1Njcm9sbGluZz0hMCxNdC5kZWZhdWx0LmNhbmNlbCh6dC5pKSx0LmF1dG9TY3JvbGw9enQsenQuaW50ZXJhY3Rpb249dCx6dC5wcmV2VGltZT16dC5ub3coKSx6dC5pPU10LmRlZmF1bHQucmVxdWVzdCh6dC5zY3JvbGwpfSxzdG9wOmZ1bmN0aW9uKCl7enQuaXNTY3JvbGxpbmc9ITEsenQuaW50ZXJhY3Rpb24mJih6dC5pbnRlcmFjdGlvbi5hdXRvU2Nyb2xsPW51bGwpLE10LmRlZmF1bHQuY2FuY2VsKHp0LmkpfSxzY3JvbGw6ZnVuY3Rpb24oKXt2YXIgdD16dC5pbnRlcmFjdGlvbixlPXQuaW50ZXJhY3RhYmxlLG49dC5lbGVtZW50LHI9dC5wcmVwYXJlZC5uYW1lLG89ZS5vcHRpb25zW3JdLmF1dG9TY3JvbGwsYT1DdChvLmNvbnRhaW5lcixlLG4pLHM9enQubm93KCksbD0ocy16dC5wcmV2VGltZSkvMWUzLHU9by5zcGVlZCpsO2lmKHU+PTEpe3ZhciBjPXt4Onp0LngqdSx5Onp0LnkqdX07aWYoYy54fHxjLnkpe3ZhciBmPVJ0KGEpO2kuZGVmYXVsdC53aW5kb3coYSk/YS5zY3JvbGxCeShjLngsYy55KTphJiYoYS5zY3JvbGxMZWZ0Kz1jLngsYS5zY3JvbGxUb3ArPWMueSk7dmFyIGQ9UnQoYSkscD17eDpkLngtZi54LHk6ZC55LWYueX07KHAueHx8cC55KSYmZS5maXJlKHt0eXBlOlwiYXV0b3Njcm9sbFwiLHRhcmdldDpuLGludGVyYWN0YWJsZTplLGRlbHRhOnAsaW50ZXJhY3Rpb246dCxjb250YWluZXI6YX0pfXp0LnByZXZUaW1lPXN9enQuaXNTY3JvbGxpbmcmJihNdC5kZWZhdWx0LmNhbmNlbCh6dC5pKSx6dC5pPU10LmRlZmF1bHQucmVxdWVzdCh6dC5zY3JvbGwpKX0sY2hlY2s6ZnVuY3Rpb24odCxlKXt2YXIgbj10Lm9wdGlvbnM7cmV0dXJuIG5bZV0uYXV0b1Njcm9sbCYmbltlXS5hdXRvU2Nyb2xsLmVuYWJsZWR9LG9uSW50ZXJhY3Rpb25Nb3ZlOmZ1bmN0aW9uKHQpe3ZhciBlPXQuaW50ZXJhY3Rpb24sbj10LnBvaW50ZXI7aWYoZS5pbnRlcmFjdGluZygpJiZ6dC5jaGVjayhlLmludGVyYWN0YWJsZSxlLnByZXBhcmVkLm5hbWUpKWlmKGUuc2ltdWxhdGlvbil6dC54PXp0Lnk9MDtlbHNle3ZhciByLG8sYSxzLGw9ZS5pbnRlcmFjdGFibGUsdT1lLmVsZW1lbnQsYz1lLnByZXBhcmVkLm5hbWUsZj1sLm9wdGlvbnNbY10uYXV0b1Njcm9sbCxkPUN0KGYuY29udGFpbmVyLGwsdSk7aWYoaS5kZWZhdWx0LndpbmRvdyhkKSlzPW4uY2xpZW50WDx6dC5tYXJnaW4scj1uLmNsaWVudFk8enQubWFyZ2luLG89bi5jbGllbnRYPmQuaW5uZXJXaWR0aC16dC5tYXJnaW4sYT1uLmNsaWVudFk+ZC5pbm5lckhlaWdodC16dC5tYXJnaW47ZWxzZXt2YXIgcD1fLmdldEVsZW1lbnRDbGllbnRSZWN0KGQpO3M9bi5jbGllbnRYPHAubGVmdCt6dC5tYXJnaW4scj1uLmNsaWVudFk8cC50b3ArenQubWFyZ2luLG89bi5jbGllbnRYPnAucmlnaHQtenQubWFyZ2luLGE9bi5jbGllbnRZPnAuYm90dG9tLXp0Lm1hcmdpbn16dC54PW8/MTpzPy0xOjAsenQueT1hPzE6cj8tMTowLHp0LmlzU2Nyb2xsaW5nfHwoenQubWFyZ2luPWYubWFyZ2luLHp0LnNwZWVkPWYuc3BlZWQsenQuc3RhcnQoZSkpfX19O2Z1bmN0aW9uIEN0KHQsbixyKXtyZXR1cm4oaS5kZWZhdWx0LnN0cmluZyh0KT8oMCxrLmdldFN0cmluZ09wdGlvblJlc3VsdCkodCxuLHIpOnQpfHwoMCxlLmdldFdpbmRvdykocil9ZnVuY3Rpb24gUnQodCl7cmV0dXJuIGkuZGVmYXVsdC53aW5kb3codCkmJih0PXdpbmRvdy5kb2N1bWVudC5ib2R5KSx7eDp0LnNjcm9sbExlZnQseTp0LnNjcm9sbFRvcH19dmFyIEZ0PXtpZDpcImF1dG8tc2Nyb2xsXCIsaW5zdGFsbDpmdW5jdGlvbih0KXt2YXIgZT10LmRlZmF1bHRzLG49dC5hY3Rpb25zO3QuYXV0b1Njcm9sbD16dCx6dC5ub3c9ZnVuY3Rpb24oKXtyZXR1cm4gdC5ub3coKX0sbi5waGFzZWxlc3NUeXBlcy5hdXRvc2Nyb2xsPSEwLGUucGVyQWN0aW9uLmF1dG9TY3JvbGw9enQuZGVmYXVsdHN9LGxpc3RlbmVyczp7XCJpbnRlcmFjdGlvbnM6bmV3XCI6ZnVuY3Rpb24odCl7dC5pbnRlcmFjdGlvbi5hdXRvU2Nyb2xsPW51bGx9LFwiaW50ZXJhY3Rpb25zOmRlc3Ryb3lcIjpmdW5jdGlvbih0KXt0LmludGVyYWN0aW9uLmF1dG9TY3JvbGw9bnVsbCx6dC5zdG9wKCksenQuaW50ZXJhY3Rpb24mJih6dC5pbnRlcmFjdGlvbj1udWxsKX0sXCJpbnRlcmFjdGlvbnM6c3RvcFwiOnp0LnN0b3AsXCJpbnRlcmFjdGlvbnM6YWN0aW9uLW1vdmVcIjpmdW5jdGlvbih0KXtyZXR1cm4genQub25JbnRlcmFjdGlvbk1vdmUodCl9fX07QXQuZGVmYXVsdD1GdDt2YXIgWHQ9e307T2JqZWN0LmRlZmluZVByb3BlcnR5KFh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLFh0Lndhcm5PbmNlPWZ1bmN0aW9uKHQsbil7dmFyIHI9ITE7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHJ8fChlLndpbmRvdy5jb25zb2xlLndhcm4obikscj0hMCksdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fSxYdC5jb3B5QWN0aW9uPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQubmFtZT1lLm5hbWUsdC5heGlzPWUuYXhpcyx0LmVkZ2VzPWUuZWRnZXMsdH07dmFyIFl0PXt9O2Z1bmN0aW9uIFd0KHQpe3JldHVybiBpLmRlZmF1bHQuYm9vbCh0KT8odGhpcy5vcHRpb25zLnN0eWxlQ3Vyc29yPXQsdGhpcyk6bnVsbD09PXQ/KGRlbGV0ZSB0aGlzLm9wdGlvbnMuc3R5bGVDdXJzb3IsdGhpcyk6dGhpcy5vcHRpb25zLnN0eWxlQ3Vyc29yfWZ1bmN0aW9uIEx0KHQpe3JldHVybiBpLmRlZmF1bHQuZnVuYyh0KT8odGhpcy5vcHRpb25zLmFjdGlvbkNoZWNrZXI9dCx0aGlzKTpudWxsPT09dD8oZGVsZXRlIHRoaXMub3B0aW9ucy5hY3Rpb25DaGVja2VyLHRoaXMpOnRoaXMub3B0aW9ucy5hY3Rpb25DaGVja2VyfU9iamVjdC5kZWZpbmVQcm9wZXJ0eShZdCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxZdC5kZWZhdWx0PXZvaWQgMDt2YXIgQnQ9e2lkOlwiYXV0by1zdGFydC9pbnRlcmFjdGFibGVNZXRob2RzXCIsaW5zdGFsbDpmdW5jdGlvbih0KXt2YXIgZT10LkludGVyYWN0YWJsZTtlLnByb3RvdHlwZS5nZXRBY3Rpb249ZnVuY3Rpb24oZSxuLHIsbyl7dmFyIGk9ZnVuY3Rpb24odCxlLG4scixvKXt2YXIgaT10LmdldFJlY3QociksYT1lLmJ1dHRvbnN8fHswOjEsMTo0LDM6OCw0OjE2fVtlLmJ1dHRvbl0scz17YWN0aW9uOm51bGwsaW50ZXJhY3RhYmxlOnQsaW50ZXJhY3Rpb246bixlbGVtZW50OnIscmVjdDppLGJ1dHRvbnM6YX07cmV0dXJuIG8uZmlyZShcImF1dG8tc3RhcnQ6Y2hlY2tcIixzKSxzLmFjdGlvbn0odGhpcyxuLHIsbyx0KTtyZXR1cm4gdGhpcy5vcHRpb25zLmFjdGlvbkNoZWNrZXI/dGhpcy5vcHRpb25zLmFjdGlvbkNoZWNrZXIoZSxuLGksdGhpcyxvLHIpOml9LGUucHJvdG90eXBlLmlnbm9yZUZyb209KDAsWHQud2Fybk9uY2UpKChmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fYmFja0NvbXBhdE9wdGlvbihcImlnbm9yZUZyb21cIix0KX0pLFwiSW50ZXJhY3RhYmxlLmlnbm9yZUZyb20oKSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgSW50ZXJhY3RibGUuZHJhZ2dhYmxlKHtpZ25vcmVGcm9tOiBuZXdWYWx1ZX0pLlwiKSxlLnByb3RvdHlwZS5hbGxvd0Zyb209KDAsWHQud2Fybk9uY2UpKChmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fYmFja0NvbXBhdE9wdGlvbihcImFsbG93RnJvbVwiLHQpfSksXCJJbnRlcmFjdGFibGUuYWxsb3dGcm9tKCkgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIEludGVyYWN0YmxlLmRyYWdnYWJsZSh7YWxsb3dGcm9tOiBuZXdWYWx1ZX0pLlwiKSxlLnByb3RvdHlwZS5hY3Rpb25DaGVja2VyPUx0LGUucHJvdG90eXBlLnN0eWxlQ3Vyc29yPVd0fX07WXQuZGVmYXVsdD1CdDt2YXIgVXQ9e307ZnVuY3Rpb24gTnQodCxlLG4scixvKXtyZXR1cm4gZS50ZXN0SWdub3JlQWxsb3coZS5vcHRpb25zW3QubmFtZV0sbixyKSYmZS5vcHRpb25zW3QubmFtZV0uZW5hYmxlZCYmR3QoZSxuLHQsbyk/dDpudWxsfWZ1bmN0aW9uIFZ0KHQsZSxuLHIsbyxpLGEpe2Zvcih2YXIgcz0wLGw9ci5sZW5ndGg7czxsO3MrKyl7dmFyIHU9cltzXSxjPW9bc10sZj11LmdldEFjdGlvbihlLG4sdCxjKTtpZihmKXt2YXIgZD1OdChmLHUsYyxpLGEpO2lmKGQpcmV0dXJue2FjdGlvbjpkLGludGVyYWN0YWJsZTp1LGVsZW1lbnQ6Y319fXJldHVybnthY3Rpb246bnVsbCxpbnRlcmFjdGFibGU6bnVsbCxlbGVtZW50Om51bGx9fWZ1bmN0aW9uIHF0KHQsZSxuLHIsbyl7dmFyIGE9W10scz1bXSxsPXI7ZnVuY3Rpb24gdSh0KXthLnB1c2godCkscy5wdXNoKGwpfWZvcig7aS5kZWZhdWx0LmVsZW1lbnQobCk7KXthPVtdLHM9W10sby5pbnRlcmFjdGFibGVzLmZvckVhY2hNYXRjaChsLHUpO3ZhciBjPVZ0KHQsZSxuLGEscyxyLG8pO2lmKGMuYWN0aW9uJiYhYy5pbnRlcmFjdGFibGUub3B0aW9uc1tjLmFjdGlvbi5uYW1lXS5tYW51YWxTdGFydClyZXR1cm4gYztsPV8ucGFyZW50Tm9kZShsKX1yZXR1cm57YWN0aW9uOm51bGwsaW50ZXJhY3RhYmxlOm51bGwsZWxlbWVudDpudWxsfX1mdW5jdGlvbiAkdCh0LGUsbil7dmFyIHI9ZS5hY3Rpb24sbz1lLmludGVyYWN0YWJsZSxpPWUuZWxlbWVudDtyPXJ8fHtuYW1lOm51bGx9LHQuaW50ZXJhY3RhYmxlPW8sdC5lbGVtZW50PWksKDAsWHQuY29weUFjdGlvbikodC5wcmVwYXJlZCxyKSx0LnJlY3Q9byYmci5uYW1lP28uZ2V0UmVjdChpKTpudWxsLFp0KHQsbiksbi5maXJlKFwiYXV0b1N0YXJ0OnByZXBhcmVkXCIse2ludGVyYWN0aW9uOnR9KX1mdW5jdGlvbiBHdCh0LGUsbixyKXt2YXIgbz10Lm9wdGlvbnMsaT1vW24ubmFtZV0ubWF4LGE9b1tuLm5hbWVdLm1heFBlckVsZW1lbnQscz1yLmF1dG9TdGFydC5tYXhJbnRlcmFjdGlvbnMsbD0wLHU9MCxjPTA7aWYoIShpJiZhJiZzKSlyZXR1cm4hMTtmb3IodmFyIGY9MDtmPHIuaW50ZXJhY3Rpb25zLmxpc3QubGVuZ3RoO2YrKyl7dmFyIGQ9ci5pbnRlcmFjdGlvbnMubGlzdFtmXSxwPWQucHJlcGFyZWQubmFtZTtpZihkLmludGVyYWN0aW5nKCkpe2lmKCsrbD49cylyZXR1cm4hMTtpZihkLmludGVyYWN0YWJsZT09PXQpe2lmKCh1Kz1wPT09bi5uYW1lPzE6MCk+PWkpcmV0dXJuITE7aWYoZC5lbGVtZW50PT09ZSYmKGMrKyxwPT09bi5uYW1lJiZjPj1hKSlyZXR1cm4hMX19fXJldHVybiBzPjB9ZnVuY3Rpb24gSHQodCxlKXtyZXR1cm4gaS5kZWZhdWx0Lm51bWJlcih0KT8oZS5hdXRvU3RhcnQubWF4SW50ZXJhY3Rpb25zPXQsdGhpcyk6ZS5hdXRvU3RhcnQubWF4SW50ZXJhY3Rpb25zfWZ1bmN0aW9uIEt0KHQsZSxuKXt2YXIgcj1uLmF1dG9TdGFydC5jdXJzb3JFbGVtZW50O3ImJnIhPT10JiYoci5zdHlsZS5jdXJzb3I9XCJcIiksdC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5jdXJzb3I9ZSx0LnN0eWxlLmN1cnNvcj1lLG4uYXV0b1N0YXJ0LmN1cnNvckVsZW1lbnQ9ZT90Om51bGx9ZnVuY3Rpb24gWnQodCxlKXt2YXIgbj10LmludGVyYWN0YWJsZSxyPXQuZWxlbWVudCxvPXQucHJlcGFyZWQ7aWYoXCJtb3VzZVwiPT09dC5wb2ludGVyVHlwZSYmbiYmbi5vcHRpb25zLnN0eWxlQ3Vyc29yKXt2YXIgYT1cIlwiO2lmKG8ubmFtZSl7dmFyIHM9bi5vcHRpb25zW28ubmFtZV0uY3Vyc29yQ2hlY2tlcjthPWkuZGVmYXVsdC5mdW5jKHMpP3MobyxuLHIsdC5faW50ZXJhY3RpbmcpOmUuYWN0aW9ucy5tYXBbby5uYW1lXS5nZXRDdXJzb3Iobyl9S3QodC5lbGVtZW50LGF8fFwiXCIsZSl9ZWxzZSBlLmF1dG9TdGFydC5jdXJzb3JFbGVtZW50JiZLdChlLmF1dG9TdGFydC5jdXJzb3JFbGVtZW50LFwiXCIsZSl9T2JqZWN0LmRlZmluZVByb3BlcnR5KFV0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLFV0LmRlZmF1bHQ9dm9pZCAwO3ZhciBKdD17aWQ6XCJhdXRvLXN0YXJ0L2Jhc2VcIixiZWZvcmU6W1wiYWN0aW9uc1wiXSxpbnN0YWxsOmZ1bmN0aW9uKHQpe3ZhciBlPXQuaW50ZXJhY3RTdGF0aWMsbj10LmRlZmF1bHRzO3QudXNlUGx1Z2luKFl0LmRlZmF1bHQpLG4uYmFzZS5hY3Rpb25DaGVja2VyPW51bGwsbi5iYXNlLnN0eWxlQ3Vyc29yPSEwLCgwLGouZGVmYXVsdCkobi5wZXJBY3Rpb24se21hbnVhbFN0YXJ0OiExLG1heDoxLzAsbWF4UGVyRWxlbWVudDoxLGFsbG93RnJvbTpudWxsLGlnbm9yZUZyb206bnVsbCxtb3VzZUJ1dHRvbnM6MX0pLGUubWF4SW50ZXJhY3Rpb25zPWZ1bmN0aW9uKGUpe3JldHVybiBIdChlLHQpfSx0LmF1dG9TdGFydD17bWF4SW50ZXJhY3Rpb25zOjEvMCx3aXRoaW5JbnRlcmFjdGlvbkxpbWl0Okd0LGN1cnNvckVsZW1lbnQ6bnVsbH19LGxpc3RlbmVyczp7XCJpbnRlcmFjdGlvbnM6ZG93blwiOmZ1bmN0aW9uKHQsZSl7dmFyIG49dC5pbnRlcmFjdGlvbixyPXQucG9pbnRlcixvPXQuZXZlbnQsaT10LmV2ZW50VGFyZ2V0O24uaW50ZXJhY3RpbmcoKXx8JHQobixxdChuLHIsbyxpLGUpLGUpfSxcImludGVyYWN0aW9uczptb3ZlXCI6ZnVuY3Rpb24odCxlKXshZnVuY3Rpb24odCxlKXt2YXIgbj10LmludGVyYWN0aW9uLHI9dC5wb2ludGVyLG89dC5ldmVudCxpPXQuZXZlbnRUYXJnZXQ7XCJtb3VzZVwiIT09bi5wb2ludGVyVHlwZXx8bi5wb2ludGVySXNEb3dufHxuLmludGVyYWN0aW5nKCl8fCR0KG4scXQobixyLG8saSxlKSxlKX0odCxlKSxmdW5jdGlvbih0LGUpe3ZhciBuPXQuaW50ZXJhY3Rpb247aWYobi5wb2ludGVySXNEb3duJiYhbi5pbnRlcmFjdGluZygpJiZuLnBvaW50ZXJXYXNNb3ZlZCYmbi5wcmVwYXJlZC5uYW1lKXtlLmZpcmUoXCJhdXRvU3RhcnQ6YmVmb3JlLXN0YXJ0XCIsdCk7dmFyIHI9bi5pbnRlcmFjdGFibGUsbz1uLnByZXBhcmVkLm5hbWU7byYmciYmKHIub3B0aW9uc1tvXS5tYW51YWxTdGFydHx8IUd0KHIsbi5lbGVtZW50LG4ucHJlcGFyZWQsZSk/bi5zdG9wKCk6KG4uc3RhcnQobi5wcmVwYXJlZCxyLG4uZWxlbWVudCksWnQobixlKSkpfX0odCxlKX0sXCJpbnRlcmFjdGlvbnM6c3RvcFwiOmZ1bmN0aW9uKHQsZSl7dmFyIG49dC5pbnRlcmFjdGlvbixyPW4uaW50ZXJhY3RhYmxlO3ImJnIub3B0aW9ucy5zdHlsZUN1cnNvciYmS3Qobi5lbGVtZW50LFwiXCIsZSl9fSxtYXhJbnRlcmFjdGlvbnM6SHQsd2l0aGluSW50ZXJhY3Rpb25MaW1pdDpHdCx2YWxpZGF0ZUFjdGlvbjpOdH07VXQuZGVmYXVsdD1KdDt2YXIgUXQ9e307T2JqZWN0LmRlZmluZVByb3BlcnR5KFF0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLFF0LmRlZmF1bHQ9dm9pZCAwO3ZhciB0ZT17aWQ6XCJhdXRvLXN0YXJ0L2RyYWdBeGlzXCIsbGlzdGVuZXJzOntcImF1dG9TdGFydDpiZWZvcmUtc3RhcnRcIjpmdW5jdGlvbih0LGUpe3ZhciBuPXQuaW50ZXJhY3Rpb24scj10LmV2ZW50VGFyZ2V0LG89dC5keCxhPXQuZHk7aWYoXCJkcmFnXCI9PT1uLnByZXBhcmVkLm5hbWUpe3ZhciBzPU1hdGguYWJzKG8pLGw9TWF0aC5hYnMoYSksdT1uLmludGVyYWN0YWJsZS5vcHRpb25zLmRyYWcsYz11LnN0YXJ0QXhpcyxmPXM+bD9cInhcIjpzPGw/XCJ5XCI6XCJ4eVwiO2lmKG4ucHJlcGFyZWQuYXhpcz1cInN0YXJ0XCI9PT11LmxvY2tBeGlzP2ZbMF06dS5sb2NrQXhpcyxcInh5XCIhPT1mJiZcInh5XCIhPT1jJiZjIT09Zil7bi5wcmVwYXJlZC5uYW1lPW51bGw7Zm9yKHZhciBkPXIscD1mdW5jdGlvbih0KXtpZih0IT09bi5pbnRlcmFjdGFibGUpe3ZhciBvPW4uaW50ZXJhY3RhYmxlLm9wdGlvbnMuZHJhZztpZighby5tYW51YWxTdGFydCYmdC50ZXN0SWdub3JlQWxsb3cobyxkLHIpKXt2YXIgaT10LmdldEFjdGlvbihuLmRvd25Qb2ludGVyLG4uZG93bkV2ZW50LG4sZCk7aWYoaSYmXCJkcmFnXCI9PT1pLm5hbWUmJmZ1bmN0aW9uKHQsZSl7aWYoIWUpcmV0dXJuITE7dmFyIG49ZS5vcHRpb25zLmRyYWcuc3RhcnRBeGlzO3JldHVyblwieHlcIj09PXR8fFwieHlcIj09PW58fG49PT10fShmLHQpJiZVdC5kZWZhdWx0LnZhbGlkYXRlQWN0aW9uKGksdCxkLHIsZSkpcmV0dXJuIHR9fX07aS5kZWZhdWx0LmVsZW1lbnQoZCk7KXt2YXIgdj1lLmludGVyYWN0YWJsZXMuZm9yRWFjaE1hdGNoKGQscCk7aWYodil7bi5wcmVwYXJlZC5uYW1lPVwiZHJhZ1wiLG4uaW50ZXJhY3RhYmxlPXYsbi5lbGVtZW50PWQ7YnJlYWt9ZD0oMCxfLnBhcmVudE5vZGUpKGQpfX19fX19O1F0LmRlZmF1bHQ9dGU7dmFyIGVlPXt9O2Z1bmN0aW9uIG5lKHQpe3ZhciBlPXQucHJlcGFyZWQmJnQucHJlcGFyZWQubmFtZTtpZighZSlyZXR1cm4gbnVsbDt2YXIgbj10LmludGVyYWN0YWJsZS5vcHRpb25zO3JldHVybiBuW2VdLmhvbGR8fG5bZV0uZGVsYXl9T2JqZWN0LmRlZmluZVByb3BlcnR5KGVlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGVlLmRlZmF1bHQ9dm9pZCAwO3ZhciByZT17aWQ6XCJhdXRvLXN0YXJ0L2hvbGRcIixpbnN0YWxsOmZ1bmN0aW9uKHQpe3ZhciBlPXQuZGVmYXVsdHM7dC51c2VQbHVnaW4oVXQuZGVmYXVsdCksZS5wZXJBY3Rpb24uaG9sZD0wLGUucGVyQWN0aW9uLmRlbGF5PTB9LGxpc3RlbmVyczp7XCJpbnRlcmFjdGlvbnM6bmV3XCI6ZnVuY3Rpb24odCl7dC5pbnRlcmFjdGlvbi5hdXRvU3RhcnRIb2xkVGltZXI9bnVsbH0sXCJhdXRvU3RhcnQ6cHJlcGFyZWRcIjpmdW5jdGlvbih0KXt2YXIgZT10LmludGVyYWN0aW9uLG49bmUoZSk7bj4wJiYoZS5hdXRvU3RhcnRIb2xkVGltZXI9c2V0VGltZW91dCgoZnVuY3Rpb24oKXtlLnN0YXJ0KGUucHJlcGFyZWQsZS5pbnRlcmFjdGFibGUsZS5lbGVtZW50KX0pLG4pKX0sXCJpbnRlcmFjdGlvbnM6bW92ZVwiOmZ1bmN0aW9uKHQpe3ZhciBlPXQuaW50ZXJhY3Rpb24sbj10LmR1cGxpY2F0ZTtlLmF1dG9TdGFydEhvbGRUaW1lciYmZS5wb2ludGVyV2FzTW92ZWQmJiFuJiYoY2xlYXJUaW1lb3V0KGUuYXV0b1N0YXJ0SG9sZFRpbWVyKSxlLmF1dG9TdGFydEhvbGRUaW1lcj1udWxsKX0sXCJhdXRvU3RhcnQ6YmVmb3JlLXN0YXJ0XCI6ZnVuY3Rpb24odCl7dmFyIGU9dC5pbnRlcmFjdGlvbjtuZShlKT4wJiYoZS5wcmVwYXJlZC5uYW1lPW51bGwpfX0sZ2V0SG9sZER1cmF0aW9uOm5lfTtlZS5kZWZhdWx0PXJlO3ZhciBvZT17fTtPYmplY3QuZGVmaW5lUHJvcGVydHkob2UsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksb2UuZGVmYXVsdD12b2lkIDA7dmFyIGllPXtpZDpcImF1dG8tc3RhcnRcIixpbnN0YWxsOmZ1bmN0aW9uKHQpe3QudXNlUGx1Z2luKFV0LmRlZmF1bHQpLHQudXNlUGx1Z2luKGVlLmRlZmF1bHQpLHQudXNlUGx1Z2luKFF0LmRlZmF1bHQpfX07b2UuZGVmYXVsdD1pZTt2YXIgYWU9e307T2JqZWN0LmRlZmluZVByb3BlcnR5KGFlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGFlLmRlZmF1bHQ9dm9pZCAwO2FlLmRlZmF1bHQ9e307dmFyIHNlPXt9O2Z1bmN0aW9uIGxlKHQpe3JldHVybi9eKGFsd2F5c3xuZXZlcnxhdXRvKSQvLnRlc3QodCk/KHRoaXMub3B0aW9ucy5wcmV2ZW50RGVmYXVsdD10LHRoaXMpOmkuZGVmYXVsdC5ib29sKHQpPyh0aGlzLm9wdGlvbnMucHJldmVudERlZmF1bHQ9dD9cImFsd2F5c1wiOlwibmV2ZXJcIix0aGlzKTp0aGlzLm9wdGlvbnMucHJldmVudERlZmF1bHR9ZnVuY3Rpb24gdWUodCl7dmFyIGU9dC5pbnRlcmFjdGlvbixuPXQuZXZlbnQ7ZS5pbnRlcmFjdGFibGUmJmUuaW50ZXJhY3RhYmxlLmNoZWNrQW5kUHJldmVudERlZmF1bHQobil9ZnVuY3Rpb24gY2UodCl7dmFyIG49dC5JbnRlcmFjdGFibGU7bi5wcm90b3R5cGUucHJldmVudERlZmF1bHQ9bGUsbi5wcm90b3R5cGUuY2hlY2tBbmRQcmV2ZW50RGVmYXVsdD1mdW5jdGlvbihuKXtyZXR1cm4gZnVuY3Rpb24odCxuLHIpe3ZhciBvPXQub3B0aW9ucy5wcmV2ZW50RGVmYXVsdDtpZihcIm5ldmVyXCIhPT1vKWlmKFwiYWx3YXlzXCIhPT1vKXtpZihuLmV2ZW50cy5zdXBwb3J0c1Bhc3NpdmUmJi9edG91Y2goc3RhcnR8bW92ZSkkLy50ZXN0KHIudHlwZSkpe3ZhciBhPSgwLGUuZ2V0V2luZG93KShyLnRhcmdldCkuZG9jdW1lbnQscz1uLmdldERvY09wdGlvbnMoYSk7aWYoIXN8fCFzLmV2ZW50c3x8ITEhPT1zLmV2ZW50cy5wYXNzaXZlKXJldHVybn0vXihtb3VzZXxwb2ludGVyfHRvdWNoKSooZG93bnxzdGFydCkvaS50ZXN0KHIudHlwZSl8fGkuZGVmYXVsdC5lbGVtZW50KHIudGFyZ2V0KSYmKDAsXy5tYXRjaGVzU2VsZWN0b3IpKHIudGFyZ2V0LFwiaW5wdXQsc2VsZWN0LHRleHRhcmVhLFtjb250ZW50ZWRpdGFibGU9dHJ1ZV0sW2NvbnRlbnRlZGl0YWJsZT10cnVlXSAqXCIpfHxyLnByZXZlbnREZWZhdWx0KCl9ZWxzZSByLnByZXZlbnREZWZhdWx0KCl9KHRoaXMsdCxuKX0sdC5pbnRlcmFjdGlvbnMuZG9jRXZlbnRzLnB1c2goe3R5cGU6XCJkcmFnc3RhcnRcIixsaXN0ZW5lcjpmdW5jdGlvbihlKXtmb3IodmFyIG49MDtuPHQuaW50ZXJhY3Rpb25zLmxpc3QubGVuZ3RoO24rKyl7dmFyIHI9dC5pbnRlcmFjdGlvbnMubGlzdFtuXTtpZihyLmVsZW1lbnQmJihyLmVsZW1lbnQ9PT1lLnRhcmdldHx8KDAsXy5ub2RlQ29udGFpbnMpKHIuZWxlbWVudCxlLnRhcmdldCkpKXJldHVybiB2b2lkIHIuaW50ZXJhY3RhYmxlLmNoZWNrQW5kUHJldmVudERlZmF1bHQoZSl9fX0pfU9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxzZS5pbnN0YWxsPWNlLHNlLmRlZmF1bHQ9dm9pZCAwO3ZhciBmZT17aWQ6XCJjb3JlL2ludGVyYWN0YWJsZVByZXZlbnREZWZhdWx0XCIsaW5zdGFsbDpjZSxsaXN0ZW5lcnM6W1wiZG93blwiLFwibW92ZVwiLFwidXBcIixcImNhbmNlbFwiXS5yZWR1Y2UoKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRbXCJpbnRlcmFjdGlvbnM6XCIuY29uY2F0KGUpXT11ZSx0fSkse30pfTtzZS5kZWZhdWx0PWZlO3ZhciBkZSxwZT17fTtmdW5jdGlvbiB2ZSh0KXtyZXR1cm4gZnVuY3Rpb24odCl7aWYoQXJyYXkuaXNBcnJheSh0KSlyZXR1cm4gaGUodCl9KHQpfHxmdW5jdGlvbih0KXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KHQpKXJldHVybiBBcnJheS5mcm9tKHQpfSh0KXx8ZnVuY3Rpb24odCxlKXtpZighdClyZXR1cm47aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpcmV0dXJuIGhlKHQsZSk7dmFyIG49T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpLnNsaWNlKDgsLTEpO1wiT2JqZWN0XCI9PT1uJiZ0LmNvbnN0cnVjdG9yJiYobj10LmNvbnN0cnVjdG9yLm5hbWUpO2lmKFwiTWFwXCI9PT1ufHxcIlNldFwiPT09bilyZXR1cm4gQXJyYXkuZnJvbSh0KTtpZihcIkFyZ3VtZW50c1wiPT09bnx8L14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpcmV0dXJuIGhlKHQsZSl9KHQpfHxmdW5jdGlvbigpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpfSgpfWZ1bmN0aW9uIGhlKHQsZSl7KG51bGw9PWV8fGU+dC5sZW5ndGgpJiYoZT10Lmxlbmd0aCk7Zm9yKHZhciBuPTAscj1BcnJheShlKTtuPGU7bisrKXJbbl09dFtuXTtyZXR1cm4gcn1PYmplY3QuZGVmaW5lUHJvcGVydHkocGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSkscGUuZGVmYXVsdD12b2lkIDAsZnVuY3Rpb24odCl7dC50b3VjaEFjdGlvbj1cInRvdWNoQWN0aW9uXCIsdC5ib3hTaXppbmc9XCJib3hTaXppbmdcIix0Lm5vTGlzdGVuZXJzPVwibm9MaXN0ZW5lcnNcIn0oZGV8fChkZT17fSkpO3ZhciBnZT17dG91Y2hBY3Rpb246XCJodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvdG91Y2gtYWN0aW9uXCIsYm94U2l6aW5nOlwiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JveC1zaXppbmdcIn07dmFyIHllPVt7bmFtZTpkZS50b3VjaEFjdGlvbixwZXJmb3JtOmZ1bmN0aW9uKHQpe3JldHVybiFmdW5jdGlvbih0LGUsbil7dmFyIHI9dDtmb3IoO2kuZGVmYXVsdC5lbGVtZW50KHIpOyl7aWYobWUocixlLG4pKXJldHVybiEwO3I9KDAsXy5wYXJlbnROb2RlKShyKX1yZXR1cm4hMX0odC5lbGVtZW50LFwidG91Y2hBY3Rpb25cIiwvcGFuLXxwaW5jaHxub25lLyl9LGdldEluZm86ZnVuY3Rpb24odCl7cmV0dXJuW3QuZWxlbWVudCxnZS50b3VjaEFjdGlvbl19LHRleHQ6J0NvbnNpZGVyIGFkZGluZyBDU1MgXCJ0b3VjaC1hY3Rpb246IG5vbmVcIiB0byB0aGlzIGVsZW1lbnRcXG4nfSx7bmFtZTpkZS5ib3hTaXppbmcscGVyZm9ybTpmdW5jdGlvbih0KXt2YXIgZT10LmVsZW1lbnQ7cmV0dXJuXCJyZXNpemVcIj09PXQucHJlcGFyZWQubmFtZSYmZSBpbnN0YW5jZW9mIGguZGVmYXVsdC5IVE1MRWxlbWVudCYmIW1lKGUsXCJib3hTaXppbmdcIiwvYm9yZGVyLWJveC8pfSx0ZXh0OidDb25zaWRlciBhZGRpbmcgQ1NTIFwiYm94LXNpemluZzogYm9yZGVyLWJveFwiIHRvIHRoaXMgcmVzaXphYmxlIGVsZW1lbnQnLGdldEluZm86ZnVuY3Rpb24odCl7cmV0dXJuW3QuZWxlbWVudCxnZS5ib3hTaXppbmddfX0se25hbWU6ZGUubm9MaXN0ZW5lcnMscGVyZm9ybTpmdW5jdGlvbih0KXt2YXIgZT10LnByZXBhcmVkLm5hbWU7cmV0dXJuISh0LmludGVyYWN0YWJsZS5ldmVudHMudHlwZXNbXCJcIi5jb25jYXQoZSxcIm1vdmVcIildfHxbXSkubGVuZ3RofSxnZXRJbmZvOmZ1bmN0aW9uKHQpe3JldHVyblt0LnByZXBhcmVkLm5hbWUsdC5pbnRlcmFjdGFibGVdfSx0ZXh0OlwiVGhlcmUgYXJlIG5vIGxpc3RlbmVycyBzZXQgZm9yIHRoaXMgYWN0aW9uXCJ9XTtmdW5jdGlvbiBtZSh0LG4scil7dmFyIG89dC5zdHlsZVtuXXx8ZS53aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0KVtuXTtyZXR1cm4gci50ZXN0KChvfHxcIlwiKS50b1N0cmluZygpKX12YXIgYmU9XCJkZXYtdG9vbHNcIix4ZT17aWQ6YmUsaW5zdGFsbDpmdW5jdGlvbih0KXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e30sbj1lLmxvZ2dlcixyPXQuSW50ZXJhY3RhYmxlLG89dC5kZWZhdWx0czt0LmxvZ2dlcj1ufHxjb25zb2xlLG8uYmFzZS5kZXZUb29scz17aWdub3JlOnt9fSxyLnByb3RvdHlwZS5kZXZUb29scz1mdW5jdGlvbih0KXtyZXR1cm4gdD8oKDAsai5kZWZhdWx0KSh0aGlzLm9wdGlvbnMuZGV2VG9vbHMsdCksdGhpcyk6dGhpcy5vcHRpb25zLmRldlRvb2xzfX0sbGlzdGVuZXJzOntcImludGVyYWN0aW9uczphY3Rpb24tc3RhcnRcIjpmdW5jdGlvbih0LGUpe2Zvcih2YXIgbj10LmludGVyYWN0aW9uLHI9MDtyPHllLmxlbmd0aDtyKyspe3ZhciBvLGk9eWVbcl0sYT1uLmludGVyYWN0YWJsZSYmbi5pbnRlcmFjdGFibGUub3B0aW9ucztpZighKGEmJmEuZGV2VG9vbHMmJmEuZGV2VG9vbHMuaWdub3JlW2kubmFtZV0pJiZpLnBlcmZvcm0obikpKG89ZS5sb2dnZXIpLndhcm4uYXBwbHkobyxbXCJbaW50ZXJhY3QuanNdIFwiK2kudGV4dF0uY29uY2F0KHZlKGkuZ2V0SW5mbyhuKSkpKX19fSxjaGVja3M6eWUsQ2hlY2tOYW1lOmRlLGxpbmtzOmdlLHByZWZpeDpcIltpbnRlcmFjdC5qc10gXCJ9O3BlLmRlZmF1bHQ9eGU7dmFyIHdlPXt9O09iamVjdC5kZWZpbmVQcm9wZXJ0eSh3ZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx3ZS5kZWZhdWx0PXZvaWQgMDt3ZS5kZWZhdWx0PXt9O3ZhciBfZT17fTtPYmplY3QuZGVmaW5lUHJvcGVydHkoX2UsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksX2UuZGVmYXVsdD1mdW5jdGlvbiB0KGUpe3ZhciBuPXt9O2Zvcih2YXIgciBpbiBlKXt2YXIgbz1lW3JdO2kuZGVmYXVsdC5wbGFpbk9iamVjdChvKT9uW3JdPXQobyk6aS5kZWZhdWx0LmFycmF5KG8pP25bcl09Sy5mcm9tKG8pOm5bcl09b31yZXR1cm4gbn07dmFyIFNlPXt9O2Z1bmN0aW9uIFBlKHQsZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe2lmKEFycmF5LmlzQXJyYXkodCkpcmV0dXJuIHR9KHQpfHxmdW5jdGlvbih0LGUpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBTeW1ib2x8fCEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdCh0KSkpcmV0dXJuO3ZhciBuPVtdLHI9ITAsbz0hMSxpPXZvaWQgMDt0cnl7Zm9yKHZhciBhLHM9dFtTeW1ib2wuaXRlcmF0b3JdKCk7IShyPShhPXMubmV4dCgpKS5kb25lKSYmKG4ucHVzaChhLnZhbHVlKSwhZXx8bi5sZW5ndGghPT1lKTtyPSEwKTt9Y2F0Y2godCl7bz0hMCxpPXR9ZmluYWxseXt0cnl7cnx8bnVsbD09cy5yZXR1cm58fHMucmV0dXJuKCl9ZmluYWxseXtpZihvKXRocm93IGl9fXJldHVybiBufSh0LGUpfHxmdW5jdGlvbih0LGUpe2lmKCF0KXJldHVybjtpZihcInN0cmluZ1wiPT10eXBlb2YgdClyZXR1cm4gT2UodCxlKTt2YXIgbj1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCkuc2xpY2UoOCwtMSk7XCJPYmplY3RcIj09PW4mJnQuY29uc3RydWN0b3ImJihuPXQuY29uc3RydWN0b3IubmFtZSk7aWYoXCJNYXBcIj09PW58fFwiU2V0XCI9PT1uKXJldHVybiBBcnJheS5mcm9tKHQpO2lmKFwiQXJndW1lbnRzXCI9PT1ufHwvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSlyZXR1cm4gT2UodCxlKX0odCxlKXx8ZnVuY3Rpb24oKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpfSgpfWZ1bmN0aW9uIE9lKHQsZSl7KG51bGw9PWV8fGU+dC5sZW5ndGgpJiYoZT10Lmxlbmd0aCk7Zm9yKHZhciBuPTAscj1BcnJheShlKTtuPGU7bisrKXJbbl09dFtuXTtyZXR1cm4gcn1mdW5jdGlvbiBFZSh0LGUpe2Zvcih2YXIgbj0wO248ZS5sZW5ndGg7bisrKXt2YXIgcj1lW25dO3IuZW51bWVyYWJsZT1yLmVudW1lcmFibGV8fCExLHIuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIHImJihyLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxyLmtleSxyKX19T2JqZWN0LmRlZmluZVByb3BlcnR5KFNlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLFNlLmdldFJlY3RPZmZzZXQ9amUsU2UuZGVmYXVsdD12b2lkIDA7dmFyIFRlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdChlKXshZnVuY3Rpb24odCxlKXtpZighKHQgaW5zdGFuY2VvZiBlKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfSh0aGlzLHQpLHRoaXMuc3RhdGVzPVtdLHRoaXMuc3RhcnRPZmZzZXQ9e2xlZnQ6MCxyaWdodDowLHRvcDowLGJvdHRvbTowfSx0aGlzLnN0YXJ0RGVsdGE9bnVsbCx0aGlzLnJlc3VsdD1udWxsLHRoaXMuZW5kUmVzdWx0PW51bGwsdGhpcy5lZGdlcz12b2lkIDAsdGhpcy5pbnRlcmFjdGlvbj12b2lkIDAsdGhpcy5pbnRlcmFjdGlvbj1lLHRoaXMucmVzdWx0PU1lKCl9dmFyIGUsbixyO3JldHVybiBlPXQsKG49W3trZXk6XCJzdGFydFwiLHZhbHVlOmZ1bmN0aW9uKHQsZSl7dmFyIG49dC5waGFzZSxyPXRoaXMuaW50ZXJhY3Rpb24sbz1mdW5jdGlvbih0KXt2YXIgZT10LmludGVyYWN0YWJsZS5vcHRpb25zW3QucHJlcGFyZWQubmFtZV0sbj1lLm1vZGlmaWVycztyZXR1cm4gbiYmbi5sZW5ndGg/bjpbXCJzbmFwXCIsXCJzbmFwU2l6ZVwiLFwic25hcEVkZ2VzXCIsXCJyZXN0cmljdFwiLFwicmVzdHJpY3RFZGdlc1wiLFwicmVzdHJpY3RTaXplXCJdLm1hcCgoZnVuY3Rpb24odCl7dmFyIG49ZVt0XTtyZXR1cm4gbiYmbi5lbmFibGVkJiZ7b3B0aW9uczpuLG1ldGhvZHM6bi5fbWV0aG9kc319KSkuZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4hIXR9KSl9KHIpO3RoaXMucHJlcGFyZVN0YXRlcyhvKSx0aGlzLmVkZ2VzPSgwLGouZGVmYXVsdCkoe30sci5lZGdlcyksdGhpcy5zdGFydE9mZnNldD1qZShyLnJlY3QsZSksdGhpcy5zdGFydERlbHRhPXt4OjAseTowfTt2YXIgaT17cGhhc2U6bixwYWdlQ29vcmRzOmUscHJlRW5kOiExfTtyZXR1cm4gdGhpcy5yZXN1bHQ9TWUoKSx0aGlzLnN0YXJ0QWxsKGkpLHRoaXMucmVzdWx0PXRoaXMuc2V0QWxsKGkpfX0se2tleTpcImZpbGxBcmdcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLmludGVyYWN0aW9uO3QuaW50ZXJhY3Rpb249ZSx0LmludGVyYWN0YWJsZT1lLmludGVyYWN0YWJsZSx0LmVsZW1lbnQ9ZS5lbGVtZW50LHQucmVjdD10LnJlY3R8fGUucmVjdCx0LmVkZ2VzPXRoaXMuZWRnZXMsdC5zdGFydE9mZnNldD10aGlzLnN0YXJ0T2Zmc2V0fX0se2tleTpcInN0YXJ0QWxsXCIsdmFsdWU6ZnVuY3Rpb24odCl7dGhpcy5maWxsQXJnKHQpO2Zvcih2YXIgZT0wO2U8dGhpcy5zdGF0ZXMubGVuZ3RoO2UrKyl7dmFyIG49dGhpcy5zdGF0ZXNbZV07bi5tZXRob2RzLnN0YXJ0JiYodC5zdGF0ZT1uLG4ubWV0aG9kcy5zdGFydCh0KSl9fX0se2tleTpcInNldEFsbFwiLHZhbHVlOmZ1bmN0aW9uKHQpe3RoaXMuZmlsbEFyZyh0KTt2YXIgZT10LnBoYXNlLG49dC5wcmVFbmQscj10LnNraXBNb2RpZmllcnMsbz10LnJlY3Q7dC5jb29yZHM9KDAsai5kZWZhdWx0KSh7fSx0LnBhZ2VDb29yZHMpLHQucmVjdD0oMCxqLmRlZmF1bHQpKHt9LG8pO2Zvcih2YXIgaT1yP3RoaXMuc3RhdGVzLnNsaWNlKHIpOnRoaXMuc3RhdGVzLGE9TWUodC5jb29yZHMsdC5yZWN0KSxzPTA7czxpLmxlbmd0aDtzKyspe3ZhciBsPWlbc10sdT1sLm9wdGlvbnMsYz0oMCxqLmRlZmF1bHQpKHt9LHQuY29vcmRzKSxmPW51bGw7bC5tZXRob2RzLnNldCYmdGhpcy5zaG91bGREbyh1LG4sZSkmJih0LnN0YXRlPWwsZj1sLm1ldGhvZHMuc2V0KHQpLGsuYWRkRWRnZXModGhpcy5pbnRlcmFjdGlvbi5lZGdlcyx0LnJlY3Qse3g6dC5jb29yZHMueC1jLngseTp0LmNvb3Jkcy55LWMueX0pKSxhLmV2ZW50UHJvcHMucHVzaChmKX1hLmRlbHRhLng9dC5jb29yZHMueC10LnBhZ2VDb29yZHMueCxhLmRlbHRhLnk9dC5jb29yZHMueS10LnBhZ2VDb29yZHMueSxhLnJlY3REZWx0YS5sZWZ0PXQucmVjdC5sZWZ0LW8ubGVmdCxhLnJlY3REZWx0YS5yaWdodD10LnJlY3QucmlnaHQtby5yaWdodCxhLnJlY3REZWx0YS50b3A9dC5yZWN0LnRvcC1vLnRvcCxhLnJlY3REZWx0YS5ib3R0b209dC5yZWN0LmJvdHRvbS1vLmJvdHRvbTt2YXIgZD10aGlzLnJlc3VsdC5jb29yZHMscD10aGlzLnJlc3VsdC5yZWN0O2lmKGQmJnApe3ZhciB2PWEucmVjdC5sZWZ0IT09cC5sZWZ0fHxhLnJlY3QucmlnaHQhPT1wLnJpZ2h0fHxhLnJlY3QudG9wIT09cC50b3B8fGEucmVjdC5ib3R0b20hPT1wLmJvdHRvbTthLmNoYW5nZWQ9dnx8ZC54IT09YS5jb29yZHMueHx8ZC55IT09YS5jb29yZHMueX1yZXR1cm4gYX19LHtrZXk6XCJhcHBseVRvSW50ZXJhY3Rpb25cIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLmludGVyYWN0aW9uLG49dC5waGFzZSxyPWUuY29vcmRzLmN1cixvPWUuY29vcmRzLnN0YXJ0LGk9dGhpcy5yZXN1bHQsYT10aGlzLnN0YXJ0RGVsdGEscz1pLmRlbHRhO1wic3RhcnRcIj09PW4mJigwLGouZGVmYXVsdCkodGhpcy5zdGFydERlbHRhLGkuZGVsdGEpO2Zvcih2YXIgbD1bW28sYV0sW3Isc11dLHU9MDt1PGwubGVuZ3RoO3UrKyl7dmFyIGM9UGUobFt1XSwyKSxmPWNbMF0sZD1jWzFdO2YucGFnZS54Kz1kLngsZi5wYWdlLnkrPWQueSxmLmNsaWVudC54Kz1kLngsZi5jbGllbnQueSs9ZC55fXZhciBwPXRoaXMucmVzdWx0LnJlY3REZWx0YSx2PXQucmVjdHx8ZS5yZWN0O3YubGVmdCs9cC5sZWZ0LHYucmlnaHQrPXAucmlnaHQsdi50b3ArPXAudG9wLHYuYm90dG9tKz1wLmJvdHRvbSx2LndpZHRoPXYucmlnaHQtdi5sZWZ0LHYuaGVpZ2h0PXYuYm90dG9tLXYudG9wfX0se2tleTpcInNldEFuZEFwcGx5XCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5pbnRlcmFjdGlvbixuPXQucGhhc2Uscj10LnByZUVuZCxvPXQuc2tpcE1vZGlmaWVycyxpPXRoaXMuc2V0QWxsKHtwcmVFbmQ6cixwaGFzZTpuLHBhZ2VDb29yZHM6dC5tb2RpZmllZENvb3Jkc3x8ZS5jb29yZHMuY3VyLnBhZ2V9KTtpZih0aGlzLnJlc3VsdD1pLCFpLmNoYW5nZWQmJighb3x8bzx0aGlzLnN0YXRlcy5sZW5ndGgpJiZlLmludGVyYWN0aW5nKCkpcmV0dXJuITE7aWYodC5tb2RpZmllZENvb3Jkcyl7dmFyIGE9ZS5jb29yZHMuY3VyLnBhZ2Uscz17eDp0Lm1vZGlmaWVkQ29vcmRzLngtYS54LHk6dC5tb2RpZmllZENvb3Jkcy55LWEueX07aS5jb29yZHMueCs9cy54LGkuY29vcmRzLnkrPXMueSxpLmRlbHRhLngrPXMueCxpLmRlbHRhLnkrPXMueX10aGlzLmFwcGx5VG9JbnRlcmFjdGlvbih0KX19LHtrZXk6XCJiZWZvcmVFbmRcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgZT10LmludGVyYWN0aW9uLG49dC5ldmVudCxyPXRoaXMuc3RhdGVzO2lmKHImJnIubGVuZ3RoKXtmb3IodmFyIG89ITEsaT0wO2k8ci5sZW5ndGg7aSsrKXt2YXIgYT1yW2ldO3Quc3RhdGU9YTt2YXIgcz1hLm9wdGlvbnMsbD1hLm1ldGhvZHMsdT1sLmJlZm9yZUVuZCYmbC5iZWZvcmVFbmQodCk7aWYodSlyZXR1cm4gdGhpcy5lbmRSZXN1bHQ9dSwhMTtvPW98fCFvJiZ0aGlzLnNob3VsZERvKHMsITAsdC5waGFzZSwhMCl9byYmZS5tb3ZlKHtldmVudDpuLHByZUVuZDohMH0pfX19LHtrZXk6XCJzdG9wXCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIGU9dC5pbnRlcmFjdGlvbjtpZih0aGlzLnN0YXRlcyYmdGhpcy5zdGF0ZXMubGVuZ3RoKXt2YXIgbj0oMCxqLmRlZmF1bHQpKHtzdGF0ZXM6dGhpcy5zdGF0ZXMsaW50ZXJhY3RhYmxlOmUuaW50ZXJhY3RhYmxlLGVsZW1lbnQ6ZS5lbGVtZW50LHJlY3Q6bnVsbH0sdCk7dGhpcy5maWxsQXJnKG4pO2Zvcih2YXIgcj0wO3I8dGhpcy5zdGF0ZXMubGVuZ3RoO3IrKyl7dmFyIG89dGhpcy5zdGF0ZXNbcl07bi5zdGF0ZT1vLG8ubWV0aG9kcy5zdG9wJiZvLm1ldGhvZHMuc3RvcChuKX10aGlzLnN0YXRlcz1udWxsLHRoaXMuZW5kUmVzdWx0PW51bGx9fX0se2tleTpcInByZXBhcmVTdGF0ZXNcIix2YWx1ZTpmdW5jdGlvbih0KXt0aGlzLnN0YXRlcz1bXTtmb3IodmFyIGU9MDtlPHQubGVuZ3RoO2UrKyl7dmFyIG49dFtlXSxyPW4ub3B0aW9ucyxvPW4ubWV0aG9kcyxpPW4ubmFtZTt0aGlzLnN0YXRlcy5wdXNoKHtvcHRpb25zOnIsbWV0aG9kczpvLGluZGV4OmUsbmFtZTppfSl9cmV0dXJuIHRoaXMuc3RhdGVzfX0se2tleTpcInJlc3RvcmVJbnRlcmFjdGlvbkNvb3Jkc1wiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBlPXQuaW50ZXJhY3Rpb24sbj1lLmNvb3JkcyxyPWUucmVjdCxvPWUubW9kaWZpY2F0aW9uO2lmKG8ucmVzdWx0KXtmb3IodmFyIGk9by5zdGFydERlbHRhLGE9by5yZXN1bHQscz1hLmRlbHRhLGw9YS5yZWN0RGVsdGEsdT1bW24uc3RhcnQsaV0sW24uY3VyLHNdXSxjPTA7Yzx1Lmxlbmd0aDtjKyspe3ZhciBmPVBlKHVbY10sMiksZD1mWzBdLHA9ZlsxXTtkLnBhZ2UueC09cC54LGQucGFnZS55LT1wLnksZC5jbGllbnQueC09cC54LGQuY2xpZW50LnktPXAueX1yLmxlZnQtPWwubGVmdCxyLnJpZ2h0LT1sLnJpZ2h0LHIudG9wLT1sLnRvcCxyLmJvdHRvbS09bC5ib3R0b219fX0se2tleTpcInNob3VsZERvXCIsdmFsdWU6ZnVuY3Rpb24odCxlLG4scil7cmV0dXJuISghdHx8ITE9PT10LmVuYWJsZWR8fHImJiF0LmVuZE9ubHl8fHQuZW5kT25seSYmIWV8fFwic3RhcnRcIj09PW4mJiF0LnNldFN0YXJ0KX19LHtrZXk6XCJjb3B5RnJvbVwiLHZhbHVlOmZ1bmN0aW9uKHQpe3RoaXMuc3RhcnRPZmZzZXQ9dC5zdGFydE9mZnNldCx0aGlzLnN0YXJ0RGVsdGE9dC5zdGFydERlbHRhLHRoaXMuZWRnZXM9dC5lZGdlcyx0aGlzLnN0YXRlcz10LnN0YXRlcy5tYXAoKGZ1bmN0aW9uKHQpe3JldHVybigwLF9lLmRlZmF1bHQpKHQpfSkpLHRoaXMucmVzdWx0PU1lKCgwLGouZGVmYXVsdCkoe30sdC5yZXN1bHQuY29vcmRzKSwoMCxqLmRlZmF1bHQpKHt9LHQucmVzdWx0LnJlY3QpKX19LHtrZXk6XCJkZXN0cm95XCIsdmFsdWU6ZnVuY3Rpb24oKXtmb3IodmFyIHQgaW4gdGhpcyl0aGlzW3RdPW51bGx9fV0pJiZFZShlLnByb3RvdHlwZSxuKSxyJiZFZShlLHIpLHR9KCk7ZnVuY3Rpb24gTWUodCxlKXtyZXR1cm57cmVjdDplLGNvb3Jkczp0LGRlbHRhOnt4OjAseTowfSxyZWN0RGVsdGE6e2xlZnQ6MCxyaWdodDowLHRvcDowLGJvdHRvbTowfSxldmVudFByb3BzOltdLGNoYW5nZWQ6ITB9fWZ1bmN0aW9uIGplKHQsZSl7cmV0dXJuIHQ/e2xlZnQ6ZS54LXQubGVmdCx0b3A6ZS55LXQudG9wLHJpZ2h0OnQucmlnaHQtZS54LGJvdHRvbTp0LmJvdHRvbS1lLnl9OntsZWZ0OjAsdG9wOjAscmlnaHQ6MCxib3R0b206MH19U2UuZGVmYXVsdD1UZTt2YXIga2U9e307ZnVuY3Rpb24gSWUodCl7dmFyIGU9dC5pRXZlbnQsbj10LmludGVyYWN0aW9uLm1vZGlmaWNhdGlvbi5yZXN1bHQ7biYmKGUubW9kaWZpZXJzPW4uZXZlbnRQcm9wcyl9T2JqZWN0LmRlZmluZVByb3BlcnR5KGtlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGtlLm1ha2VNb2RpZmllcj1mdW5jdGlvbih0LGUpe3ZhciBuPXQuZGVmYXVsdHMscj17c3RhcnQ6dC5zdGFydCxzZXQ6dC5zZXQsYmVmb3JlRW5kOnQuYmVmb3JlRW5kLHN0b3A6dC5zdG9wfSxvPWZ1bmN0aW9uKHQpe3ZhciBvPXR8fHt9O2Zvcih2YXIgaSBpbiBvLmVuYWJsZWQ9ITEhPT1vLmVuYWJsZWQsbilpIGluIG98fChvW2ldPW5baV0pO3ZhciBhPXtvcHRpb25zOm8sbWV0aG9kczpyLG5hbWU6ZSxlbmFibGU6ZnVuY3Rpb24oKXtyZXR1cm4gby5lbmFibGVkPSEwLGF9LGRpc2FibGU6ZnVuY3Rpb24oKXtyZXR1cm4gby5lbmFibGVkPSExLGF9fTtyZXR1cm4gYX07ZSYmXCJzdHJpbmdcIj09dHlwZW9mIGUmJihvLl9kZWZhdWx0cz1uLG8uX21ldGhvZHM9cik7cmV0dXJuIG99LGtlLmFkZEV2ZW50TW9kaWZpZXJzPUllLGtlLmRlZmF1bHQ9dm9pZCAwO3ZhciBEZT17aWQ6XCJtb2RpZmllcnMvYmFzZVwiLGJlZm9yZTpbXCJhY3Rpb25zXCJdLGluc3RhbGw6ZnVuY3Rpb24odCl7dC5kZWZhdWx0cy5wZXJBY3Rpb24ubW9kaWZpZXJzPVtdfSxsaXN0ZW5lcnM6e1wiaW50ZXJhY3Rpb25zOm5ld1wiOmZ1bmN0aW9uKHQpe3ZhciBlPXQuaW50ZXJhY3Rpb247ZS5tb2RpZmljYXRpb249bmV3IFNlLmRlZmF1bHQoZSl9LFwiaW50ZXJhY3Rpb25zOmJlZm9yZS1hY3Rpb24tc3RhcnRcIjpmdW5jdGlvbih0KXt2YXIgZT10LmludGVyYWN0aW9uLm1vZGlmaWNhdGlvbjtlLnN0YXJ0KHQsdC5pbnRlcmFjdGlvbi5jb29yZHMuc3RhcnQucGFnZSksdC5pbnRlcmFjdGlvbi5lZGdlcz1lLmVkZ2VzLGUuYXBwbHlUb0ludGVyYWN0aW9uKHQpfSxcImludGVyYWN0aW9uczpiZWZvcmUtYWN0aW9uLW1vdmVcIjpmdW5jdGlvbih0KXtyZXR1cm4gdC5pbnRlcmFjdGlvbi5tb2RpZmljYXRpb24uc2V0QW5kQXBwbHkodCl9LFwiaW50ZXJhY3Rpb25zOmJlZm9yZS1hY3Rpb24tZW5kXCI6ZnVuY3Rpb24odCl7cmV0dXJuIHQuaW50ZXJhY3Rpb24ubW9kaWZpY2F0aW9uLmJlZm9yZUVuZCh0KX0sXCJpbnRlcmFjdGlvbnM6YWN0aW9uLXN0YXJ0XCI6SWUsXCJpbnRlcmFjdGlvbnM6YWN0aW9uLW1vdmVcIjpJZSxcImludGVyYWN0aW9uczphY3Rpb24tZW5kXCI6SWUsXCJpbnRlcmFjdGlvbnM6YWZ0ZXItYWN0aW9uLXN0YXJ0XCI6ZnVuY3Rpb24odCl7cmV0dXJuIHQuaW50ZXJhY3Rpb24ubW9kaWZpY2F0aW9uLnJlc3RvcmVJbnRlcmFjdGlvbkNvb3Jkcyh0KX0sXCJpbnRlcmFjdGlvbnM6YWZ0ZXItYWN0aW9uLW1vdmVcIjpmdW5jdGlvbih0KXtyZXR1cm4gdC5pbnRlcmFjdGlvbi5tb2RpZmljYXRpb24ucmVzdG9yZUludGVyYWN0aW9uQ29vcmRzKHQpfSxcImludGVyYWN0aW9uczpzdG9wXCI6ZnVuY3Rpb24odCl7cmV0dXJuIHQuaW50ZXJhY3Rpb24ubW9kaWZpY2F0aW9uLnN0b3AodCl9fX07a2UuZGVmYXVsdD1EZTt2YXIgQWU9e307T2JqZWN0LmRlZmluZVByb3BlcnR5KEFlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLEFlLmRlZmF1bHRzPXZvaWQgMDtBZS5kZWZhdWx0cz17YmFzZTp7cHJldmVudERlZmF1bHQ6XCJhdXRvXCIsZGVsdGFTb3VyY2U6XCJwYWdlXCJ9LHBlckFjdGlvbjp7ZW5hYmxlZDohMSxvcmlnaW46e3g6MCx5OjB9fSxhY3Rpb25zOnt9fTt2YXIgemU9e307ZnVuY3Rpb24gQ2UodCl7cmV0dXJuKENlPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbih0KXtyZXR1cm4gdHlwZW9mIHR9OmZ1bmN0aW9uKHQpe3JldHVybiB0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJnQuY29uc3RydWN0b3I9PT1TeW1ib2wmJnQhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIHR9KSh0KX1mdW5jdGlvbiBSZSh0LGUpe2Zvcih2YXIgbj0wO248ZS5sZW5ndGg7bisrKXt2YXIgcj1lW25dO3IuZW51bWVyYWJsZT1yLmVudW1lcmFibGV8fCExLHIuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIHImJihyLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxyLmtleSxyKX19ZnVuY3Rpb24gRmUodCxlKXtyZXR1cm4oRmU9T2JqZWN0LnNldFByb3RvdHlwZU9mfHxmdW5jdGlvbih0LGUpe3JldHVybiB0Ll9fcHJvdG9fXz1lLHR9KSh0LGUpfWZ1bmN0aW9uIFhlKHQpe3ZhciBlPWZ1bmN0aW9uKCl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFJlZmxlY3R8fCFSZWZsZWN0LmNvbnN0cnVjdClyZXR1cm4hMTtpZihSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKXJldHVybiExO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIFByb3h5KXJldHVybiEwO3RyeXtyZXR1cm4gRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLFtdLChmdW5jdGlvbigpe30pKSksITB9Y2F0Y2godCl7cmV0dXJuITF9fSgpO3JldHVybiBmdW5jdGlvbigpe3ZhciBuLHI9TGUodCk7aWYoZSl7dmFyIG89TGUodGhpcykuY29uc3RydWN0b3I7bj1SZWZsZWN0LmNvbnN0cnVjdChyLGFyZ3VtZW50cyxvKX1lbHNlIG49ci5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIFllKHRoaXMsbil9fWZ1bmN0aW9uIFllKHQsZSl7cmV0dXJuIWV8fFwib2JqZWN0XCIhPT1DZShlKSYmXCJmdW5jdGlvblwiIT10eXBlb2YgZT9XZSh0KTplfWZ1bmN0aW9uIFdlKHQpe2lmKHZvaWQgMD09PXQpdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO3JldHVybiB0fWZ1bmN0aW9uIExlKHQpe3JldHVybihMZT1PYmplY3Quc2V0UHJvdG90eXBlT2Y/T2JqZWN0LmdldFByb3RvdHlwZU9mOmZ1bmN0aW9uKHQpe3JldHVybiB0Ll9fcHJvdG9fX3x8T2JqZWN0LmdldFByb3RvdHlwZU9mKHQpfSkodCl9T2JqZWN0LmRlZmluZVByb3BlcnR5KHplLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHplLkludGVyYWN0RXZlbnQ9dm9pZCAwO3ZhciBCZT1mdW5jdGlvbih0KXshZnVuY3Rpb24odCxlKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlJiZudWxsIT09ZSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7dC5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShlJiZlLnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOnQsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pLGUmJkZlKHQsZSl9KGksdCk7dmFyIGUsbixyLG89WGUoaSk7ZnVuY3Rpb24gaSh0LGUsbixyLGEscyxsKXt2YXIgdTshZnVuY3Rpb24odCxlKXtpZighKHQgaW5zdGFuY2VvZiBlKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfSh0aGlzLGkpLCh1PW8uY2FsbCh0aGlzLHQpKS50YXJnZXQ9dm9pZCAwLHUuY3VycmVudFRhcmdldD12b2lkIDAsdS5yZWxhdGVkVGFyZ2V0PW51bGwsdS5zY3JlZW5YPXZvaWQgMCx1LnNjcmVlblk9dm9pZCAwLHUuYnV0dG9uPXZvaWQgMCx1LmJ1dHRvbnM9dm9pZCAwLHUuY3RybEtleT12b2lkIDAsdS5zaGlmdEtleT12b2lkIDAsdS5hbHRLZXk9dm9pZCAwLHUubWV0YUtleT12b2lkIDAsdS5wYWdlPXZvaWQgMCx1LmNsaWVudD12b2lkIDAsdS5kZWx0YT12b2lkIDAsdS5yZWN0PXZvaWQgMCx1LngwPXZvaWQgMCx1LnkwPXZvaWQgMCx1LnQwPXZvaWQgMCx1LmR0PXZvaWQgMCx1LmR1cmF0aW9uPXZvaWQgMCx1LmNsaWVudFgwPXZvaWQgMCx1LmNsaWVudFkwPXZvaWQgMCx1LnZlbG9jaXR5PXZvaWQgMCx1LnNwZWVkPXZvaWQgMCx1LnN3aXBlPXZvaWQgMCx1LnRpbWVTdGFtcD12b2lkIDAsdS5kcmFnRW50ZXI9dm9pZCAwLHUuZHJhZ0xlYXZlPXZvaWQgMCx1LmF4ZXM9dm9pZCAwLHUucHJlRW5kPXZvaWQgMCxhPWF8fHQuZWxlbWVudDt2YXIgYz10LmludGVyYWN0YWJsZSxmPShjJiZjLm9wdGlvbnN8fEFlLmRlZmF1bHRzKS5kZWx0YVNvdXJjZSxkPSgwLEEuZGVmYXVsdCkoYyxhLG4pLHA9XCJzdGFydFwiPT09cix2PVwiZW5kXCI9PT1yLGg9cD9XZSh1KTp0LnByZXZFdmVudCxnPXA/dC5jb29yZHMuc3RhcnQ6dj97cGFnZTpoLnBhZ2UsY2xpZW50OmguY2xpZW50LHRpbWVTdGFtcDp0LmNvb3Jkcy5jdXIudGltZVN0YW1wfTp0LmNvb3Jkcy5jdXI7cmV0dXJuIHUucGFnZT0oMCxqLmRlZmF1bHQpKHt9LGcucGFnZSksdS5jbGllbnQ9KDAsai5kZWZhdWx0KSh7fSxnLmNsaWVudCksdS5yZWN0PSgwLGouZGVmYXVsdCkoe30sdC5yZWN0KSx1LnRpbWVTdGFtcD1nLnRpbWVTdGFtcCx2fHwodS5wYWdlLngtPWQueCx1LnBhZ2UueS09ZC55LHUuY2xpZW50LngtPWQueCx1LmNsaWVudC55LT1kLnkpLHUuY3RybEtleT1lLmN0cmxLZXksdS5hbHRLZXk9ZS5hbHRLZXksdS5zaGlmdEtleT1lLnNoaWZ0S2V5LHUubWV0YUtleT1lLm1ldGFLZXksdS5idXR0b249ZS5idXR0b24sdS5idXR0b25zPWUuYnV0dG9ucyx1LnRhcmdldD1hLHUuY3VycmVudFRhcmdldD1hLHUucHJlRW5kPXMsdS50eXBlPWx8fG4rKHJ8fFwiXCIpLHUuaW50ZXJhY3RhYmxlPWMsdS50MD1wP3QucG9pbnRlcnNbdC5wb2ludGVycy5sZW5ndGgtMV0uZG93blRpbWU6aC50MCx1LngwPXQuY29vcmRzLnN0YXJ0LnBhZ2UueC1kLngsdS55MD10LmNvb3Jkcy5zdGFydC5wYWdlLnktZC55LHUuY2xpZW50WDA9dC5jb29yZHMuc3RhcnQuY2xpZW50LngtZC54LHUuY2xpZW50WTA9dC5jb29yZHMuc3RhcnQuY2xpZW50LnktZC55LHUuZGVsdGE9cHx8dj97eDowLHk6MH06e3g6dVtmXS54LWhbZl0ueCx5OnVbZl0ueS1oW2ZdLnl9LHUuZHQ9dC5jb29yZHMuZGVsdGEudGltZVN0YW1wLHUuZHVyYXRpb249dS50aW1lU3RhbXAtdS50MCx1LnZlbG9jaXR5PSgwLGouZGVmYXVsdCkoe30sdC5jb29yZHMudmVsb2NpdHlbZl0pLHUuc3BlZWQ9KDAsUi5kZWZhdWx0KSh1LnZlbG9jaXR5LngsdS52ZWxvY2l0eS55KSx1LnN3aXBlPXZ8fFwiaW5lcnRpYXN0YXJ0XCI9PT1yP3UuZ2V0U3dpcGUoKTpudWxsLHV9cmV0dXJuIGU9aSwobj1be2tleTpcImdldFN3aXBlXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl9pbnRlcmFjdGlvbjtpZih0LnByZXZFdmVudC5zcGVlZDw2MDB8fHRoaXMudGltZVN0YW1wLXQucHJldkV2ZW50LnRpbWVTdGFtcD4xNTApcmV0dXJuIG51bGw7dmFyIGU9MTgwKk1hdGguYXRhbjIodC5wcmV2RXZlbnQudmVsb2NpdHlZLHQucHJldkV2ZW50LnZlbG9jaXR5WCkvTWF0aC5QSTtlPDAmJihlKz0zNjApO3ZhciBuPTExMi41PD1lJiZlPDI0Ny41LHI9MjAyLjU8PWUmJmU8MzM3LjU7cmV0dXJue3VwOnIsZG93bjohciYmMjIuNTw9ZSYmZTwxNTcuNSxsZWZ0Om4scmlnaHQ6IW4mJigyOTIuNTw9ZXx8ZTw2Ny41KSxhbmdsZTplLHNwZWVkOnQucHJldkV2ZW50LnNwZWVkLHZlbG9jaXR5Ont4OnQucHJldkV2ZW50LnZlbG9jaXR5WCx5OnQucHJldkV2ZW50LnZlbG9jaXR5WX19fX0se2tleTpcInByZXZlbnREZWZhdWx0XCIsdmFsdWU6ZnVuY3Rpb24oKXt9fSx7a2V5Olwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZD10aGlzLnByb3BhZ2F0aW9uU3RvcHBlZD0hMH19LHtrZXk6XCJzdG9wUHJvcGFnYXRpb25cIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMucHJvcGFnYXRpb25TdG9wcGVkPSEwfX1dKSYmUmUoZS5wcm90b3R5cGUsbiksciYmUmUoZSxyKSxpfSgkLkJhc2VFdmVudCk7emUuSW50ZXJhY3RFdmVudD1CZSxPYmplY3QuZGVmaW5lUHJvcGVydGllcyhCZS5wcm90b3R5cGUse3BhZ2VYOntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wYWdlLnh9LHNldDpmdW5jdGlvbih0KXt0aGlzLnBhZ2UueD10fX0scGFnZVk6e2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnBhZ2UueX0sc2V0OmZ1bmN0aW9uKHQpe3RoaXMucGFnZS55PXR9fSxjbGllbnRYOntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jbGllbnQueH0sc2V0OmZ1bmN0aW9uKHQpe3RoaXMuY2xpZW50Lng9dH19LGNsaWVudFk6e2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNsaWVudC55fSxzZXQ6ZnVuY3Rpb24odCl7dGhpcy5jbGllbnQueT10fX0sZHg6e2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmRlbHRhLnh9LHNldDpmdW5jdGlvbih0KXt0aGlzLmRlbHRhLng9dH19LGR5OntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kZWx0YS55fSxzZXQ6ZnVuY3Rpb24odCl7dGhpcy5kZWx0YS55PXR9fSx2ZWxvY2l0eVg6e2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnZlbG9jaXR5Lnh9LHNldDpmdW5jdGlvbih0KXt0aGlzLnZlbG9jaXR5Lng9dH19LHZlbG9jaXR5WTp7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmVsb2NpdHkueX0sc2V0OmZ1bmN0aW9uKHQpe3RoaXMudmVsb2NpdHkueT10fX19KTt2YXIgVWU9e307T2JqZWN0LmRlZmluZVByb3BlcnR5KFVlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLFVlLlBvaW50ZXJJbmZvPXZvaWQgMDtVZS5Qb2ludGVySW5mbz1mdW5jdGlvbiB0KGUsbixyLG8saSl7IWZ1bmN0aW9uKHQsZSl7aWYoISh0IGluc3RhbmNlb2YgZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX0odGhpcyx0KSx0aGlzLmlkPXZvaWQgMCx0aGlzLnBvaW50ZXI9dm9pZCAwLHRoaXMuZXZlbnQ9dm9pZCAwLHRoaXMuZG93blRpbWU9dm9pZCAwLHRoaXMuZG93blRhcmdldD12b2lkIDAsdGhpcy5pZD1lLHRoaXMucG9pbnRlcj1uLHRoaXMuZXZlbnQ9cix0aGlzLmRvd25UaW1lPW8sdGhpcy5kb3duVGFyZ2V0PWl9O3ZhciBOZSxWZSxxZT17fTtmdW5jdGlvbiAkZSh0LGUpe2Zvcih2YXIgbj0wO248ZS5sZW5ndGg7bisrKXt2YXIgcj1lW25dO3IuZW51bWVyYWJsZT1yLmVudW1lcmFibGV8fCExLHIuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIHImJihyLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxyLmtleSxyKX19ZnVuY3Rpb24gR2UodCxlLG4pe3JldHVybiBlJiYkZSh0LnByb3RvdHlwZSxlKSxuJiYkZSh0LG4pLHR9T2JqZWN0LmRlZmluZVByb3BlcnR5KHFlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShxZSxcIlBvaW50ZXJJbmZvXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIFVlLlBvaW50ZXJJbmZvfX0pLHFlLmRlZmF1bHQ9cWUuSW50ZXJhY3Rpb249cWUuX1Byb3h5TWV0aG9kcz1xZS5fUHJveHlWYWx1ZXM9dm9pZCAwLHFlLl9Qcm94eVZhbHVlcz1OZSxmdW5jdGlvbih0KXt0LmludGVyYWN0YWJsZT1cIlwiLHQuZWxlbWVudD1cIlwiLHQucHJlcGFyZWQ9XCJcIix0LnBvaW50ZXJJc0Rvd249XCJcIix0LnBvaW50ZXJXYXNNb3ZlZD1cIlwiLHQuX3Byb3h5PVwiXCJ9KE5lfHwocWUuX1Byb3h5VmFsdWVzPU5lPXt9KSkscWUuX1Byb3h5TWV0aG9kcz1WZSxmdW5jdGlvbih0KXt0LnN0YXJ0PVwiXCIsdC5tb3ZlPVwiXCIsdC5lbmQ9XCJcIix0LnN0b3A9XCJcIix0LmludGVyYWN0aW5nPVwiXCJ9KFZlfHwocWUuX1Byb3h5TWV0aG9kcz1WZT17fSkpO3ZhciBIZT0wLEtlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdChlKXt2YXIgbj10aGlzLHI9ZS5wb2ludGVyVHlwZSxvPWUuc2NvcGVGaXJlOyFmdW5jdGlvbih0LGUpe2lmKCEodCBpbnN0YW5jZW9mIGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9KHRoaXMsdCksdGhpcy5pbnRlcmFjdGFibGU9bnVsbCx0aGlzLmVsZW1lbnQ9bnVsbCx0aGlzLnJlY3Q9dm9pZCAwLHRoaXMuX3JlY3RzPXZvaWQgMCx0aGlzLmVkZ2VzPXZvaWQgMCx0aGlzLl9zY29wZUZpcmU9dm9pZCAwLHRoaXMucHJlcGFyZWQ9e25hbWU6bnVsbCxheGlzOm51bGwsZWRnZXM6bnVsbH0sdGhpcy5wb2ludGVyVHlwZT12b2lkIDAsdGhpcy5wb2ludGVycz1bXSx0aGlzLmRvd25FdmVudD1udWxsLHRoaXMuZG93blBvaW50ZXI9e30sdGhpcy5fbGF0ZXN0UG9pbnRlcj17cG9pbnRlcjpudWxsLGV2ZW50Om51bGwsZXZlbnRUYXJnZXQ6bnVsbH0sdGhpcy5wcmV2RXZlbnQ9bnVsbCx0aGlzLnBvaW50ZXJJc0Rvd249ITEsdGhpcy5wb2ludGVyV2FzTW92ZWQ9ITEsdGhpcy5faW50ZXJhY3Rpbmc9ITEsdGhpcy5fZW5kaW5nPSExLHRoaXMuX3N0b3BwZWQ9ITAsdGhpcy5fcHJveHk9bnVsbCx0aGlzLnNpbXVsYXRpb249bnVsbCx0aGlzLmRvTW92ZT0oMCxYdC53YXJuT25jZSkoKGZ1bmN0aW9uKHQpe3RoaXMubW92ZSh0KX0pLFwiVGhlIGludGVyYWN0aW9uLmRvTW92ZSgpIG1ldGhvZCBoYXMgYmVlbiByZW5hbWVkIHRvIGludGVyYWN0aW9uLm1vdmUoKVwiKSx0aGlzLmNvb3Jkcz17c3RhcnQ6Vy5uZXdDb29yZHMoKSxwcmV2OlcubmV3Q29vcmRzKCksY3VyOlcubmV3Q29vcmRzKCksZGVsdGE6Vy5uZXdDb29yZHMoKSx2ZWxvY2l0eTpXLm5ld0Nvb3JkcygpfSx0aGlzLl9pZD1IZSsrLHRoaXMuX3Njb3BlRmlyZT1vLHRoaXMucG9pbnRlclR5cGU9cjt2YXIgaT10aGlzO3RoaXMuX3Byb3h5PXt9O3ZhciBhPWZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShuLl9wcm94eSx0LHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gaVt0XX19KX07Zm9yKHZhciBzIGluIE5lKWEocyk7dmFyIGw9ZnVuY3Rpb24odCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KG4uX3Byb3h5LHQse3ZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIGlbdF0uYXBwbHkoaSxhcmd1bWVudHMpfX0pfTtmb3IodmFyIHUgaW4gVmUpbCh1KTt0aGlzLl9zY29wZUZpcmUoXCJpbnRlcmFjdGlvbnM6bmV3XCIse2ludGVyYWN0aW9uOnRoaXN9KX1yZXR1cm4gR2UodCxbe2tleTpcInBvaW50ZXJNb3ZlVG9sZXJhbmNlXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIDF9fV0pLEdlKHQsW3trZXk6XCJwb2ludGVyRG93blwiLHZhbHVlOmZ1bmN0aW9uKHQsZSxuKXt2YXIgcj10aGlzLnVwZGF0ZVBvaW50ZXIodCxlLG4sITApLG89dGhpcy5wb2ludGVyc1tyXTt0aGlzLl9zY29wZUZpcmUoXCJpbnRlcmFjdGlvbnM6ZG93blwiLHtwb2ludGVyOnQsZXZlbnQ6ZSxldmVudFRhcmdldDpuLHBvaW50ZXJJbmRleDpyLHBvaW50ZXJJbmZvOm8sdHlwZTpcImRvd25cIixpbnRlcmFjdGlvbjp0aGlzfSl9fSx7a2V5Olwic3RhcnRcIix2YWx1ZTpmdW5jdGlvbih0LGUsbil7cmV0dXJuISh0aGlzLmludGVyYWN0aW5nKCl8fCF0aGlzLnBvaW50ZXJJc0Rvd258fHRoaXMucG9pbnRlcnMubGVuZ3RoPChcImdlc3R1cmVcIj09PXQubmFtZT8yOjEpfHwhZS5vcHRpb25zW3QubmFtZV0uZW5hYmxlZCkmJigoMCxYdC5jb3B5QWN0aW9uKSh0aGlzLnByZXBhcmVkLHQpLHRoaXMuaW50ZXJhY3RhYmxlPWUsdGhpcy5lbGVtZW50PW4sdGhpcy5yZWN0PWUuZ2V0UmVjdChuKSx0aGlzLmVkZ2VzPXRoaXMucHJlcGFyZWQuZWRnZXM/KDAsai5kZWZhdWx0KSh7fSx0aGlzLnByZXBhcmVkLmVkZ2VzKTp7bGVmdDohMCxyaWdodDohMCx0b3A6ITAsYm90dG9tOiEwfSx0aGlzLl9zdG9wcGVkPSExLHRoaXMuX2ludGVyYWN0aW5nPXRoaXMuX2RvUGhhc2Uoe2ludGVyYWN0aW9uOnRoaXMsZXZlbnQ6dGhpcy5kb3duRXZlbnQscGhhc2U6XCJzdGFydFwifSkmJiF0aGlzLl9zdG9wcGVkLHRoaXMuX2ludGVyYWN0aW5nKX19LHtrZXk6XCJwb2ludGVyTW92ZVwiLHZhbHVlOmZ1bmN0aW9uKHQsZSxuKXt0aGlzLnNpbXVsYXRpb258fHRoaXMubW9kaWZpY2F0aW9uJiZ0aGlzLm1vZGlmaWNhdGlvbi5lbmRSZXN1bHR8fHRoaXMudXBkYXRlUG9pbnRlcih0LGUsbiwhMSk7dmFyIHIsbyxpPXRoaXMuY29vcmRzLmN1ci5wYWdlLng9PT10aGlzLmNvb3Jkcy5wcmV2LnBhZ2UueCYmdGhpcy5jb29yZHMuY3VyLnBhZ2UueT09PXRoaXMuY29vcmRzLnByZXYucGFnZS55JiZ0aGlzLmNvb3Jkcy5jdXIuY2xpZW50Lng9PT10aGlzLmNvb3Jkcy5wcmV2LmNsaWVudC54JiZ0aGlzLmNvb3Jkcy5jdXIuY2xpZW50Lnk9PT10aGlzLmNvb3Jkcy5wcmV2LmNsaWVudC55O3RoaXMucG9pbnRlcklzRG93biYmIXRoaXMucG9pbnRlcldhc01vdmVkJiYocj10aGlzLmNvb3Jkcy5jdXIuY2xpZW50LngtdGhpcy5jb29yZHMuc3RhcnQuY2xpZW50Lngsbz10aGlzLmNvb3Jkcy5jdXIuY2xpZW50LnktdGhpcy5jb29yZHMuc3RhcnQuY2xpZW50LnksdGhpcy5wb2ludGVyV2FzTW92ZWQ9KDAsUi5kZWZhdWx0KShyLG8pPnRoaXMucG9pbnRlck1vdmVUb2xlcmFuY2UpO3ZhciBhPXRoaXMuZ2V0UG9pbnRlckluZGV4KHQpLHM9e3BvaW50ZXI6dCxwb2ludGVySW5kZXg6YSxwb2ludGVySW5mbzp0aGlzLnBvaW50ZXJzW2FdLGV2ZW50OmUsdHlwZTpcIm1vdmVcIixldmVudFRhcmdldDpuLGR4OnIsZHk6byxkdXBsaWNhdGU6aSxpbnRlcmFjdGlvbjp0aGlzfTtpfHxXLnNldENvb3JkVmVsb2NpdHkodGhpcy5jb29yZHMudmVsb2NpdHksdGhpcy5jb29yZHMuZGVsdGEpLHRoaXMuX3Njb3BlRmlyZShcImludGVyYWN0aW9uczptb3ZlXCIscyksaXx8dGhpcy5zaW11bGF0aW9ufHwodGhpcy5pbnRlcmFjdGluZygpJiYocy50eXBlPW51bGwsdGhpcy5tb3ZlKHMpKSx0aGlzLnBvaW50ZXJXYXNNb3ZlZCYmVy5jb3B5Q29vcmRzKHRoaXMuY29vcmRzLnByZXYsdGhpcy5jb29yZHMuY3VyKSl9fSx7a2V5OlwibW92ZVwiLHZhbHVlOmZ1bmN0aW9uKHQpe3QmJnQuZXZlbnR8fFcuc2V0WmVyb0Nvb3Jkcyh0aGlzLmNvb3Jkcy5kZWx0YSksKHQ9KDAsai5kZWZhdWx0KSh7cG9pbnRlcjp0aGlzLl9sYXRlc3RQb2ludGVyLnBvaW50ZXIsZXZlbnQ6dGhpcy5fbGF0ZXN0UG9pbnRlci5ldmVudCxldmVudFRhcmdldDp0aGlzLl9sYXRlc3RQb2ludGVyLmV2ZW50VGFyZ2V0LGludGVyYWN0aW9uOnRoaXN9LHR8fHt9KSkucGhhc2U9XCJtb3ZlXCIsdGhpcy5fZG9QaGFzZSh0KX19LHtrZXk6XCJwb2ludGVyVXBcIix2YWx1ZTpmdW5jdGlvbih0LGUsbixyKXt2YXIgbz10aGlzLmdldFBvaW50ZXJJbmRleCh0KTstMT09PW8mJihvPXRoaXMudXBkYXRlUG9pbnRlcih0LGUsbiwhMSkpO3ZhciBpPS9jYW5jZWwkL2kudGVzdChlLnR5cGUpP1wiY2FuY2VsXCI6XCJ1cFwiO3RoaXMuX3Njb3BlRmlyZShcImludGVyYWN0aW9uczpcIi5jb25jYXQoaSkse3BvaW50ZXI6dCxwb2ludGVySW5kZXg6byxwb2ludGVySW5mbzp0aGlzLnBvaW50ZXJzW29dLGV2ZW50OmUsZXZlbnRUYXJnZXQ6bix0eXBlOmksY3VyRXZlbnRUYXJnZXQ6cixpbnRlcmFjdGlvbjp0aGlzfSksdGhpcy5zaW11bGF0aW9ufHx0aGlzLmVuZChlKSx0aGlzLnJlbW92ZVBvaW50ZXIodCxlKX19LHtrZXk6XCJkb2N1bWVudEJsdXJcIix2YWx1ZTpmdW5jdGlvbih0KXt0aGlzLmVuZCh0KSx0aGlzLl9zY29wZUZpcmUoXCJpbnRlcmFjdGlvbnM6Ymx1clwiLHtldmVudDp0LHR5cGU6XCJibHVyXCIsaW50ZXJhY3Rpb246dGhpc30pfX0se2tleTpcImVuZFwiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBlO3RoaXMuX2VuZGluZz0hMCx0PXR8fHRoaXMuX2xhdGVzdFBvaW50ZXIuZXZlbnQsdGhpcy5pbnRlcmFjdGluZygpJiYoZT10aGlzLl9kb1BoYXNlKHtldmVudDp0LGludGVyYWN0aW9uOnRoaXMscGhhc2U6XCJlbmRcIn0pKSx0aGlzLl9lbmRpbmc9ITEsITA9PT1lJiZ0aGlzLnN0b3AoKX19LHtrZXk6XCJjdXJyZW50QWN0aW9uXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5faW50ZXJhY3Rpbmc/dGhpcy5wcmVwYXJlZC5uYW1lOm51bGx9fSx7a2V5OlwiaW50ZXJhY3RpbmdcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9pbnRlcmFjdGluZ319LHtrZXk6XCJzdG9wXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLl9zY29wZUZpcmUoXCJpbnRlcmFjdGlvbnM6c3RvcFwiLHtpbnRlcmFjdGlvbjp0aGlzfSksdGhpcy5pbnRlcmFjdGFibGU9dGhpcy5lbGVtZW50PW51bGwsdGhpcy5faW50ZXJhY3Rpbmc9ITEsdGhpcy5fc3RvcHBlZD0hMCx0aGlzLnByZXBhcmVkLm5hbWU9dGhpcy5wcmV2RXZlbnQ9bnVsbH19LHtrZXk6XCJnZXRQb2ludGVySW5kZXhcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgZT1XLmdldFBvaW50ZXJJZCh0KTtyZXR1cm5cIm1vdXNlXCI9PT10aGlzLnBvaW50ZXJUeXBlfHxcInBlblwiPT09dGhpcy5wb2ludGVyVHlwZT90aGlzLnBvaW50ZXJzLmxlbmd0aC0xOksuZmluZEluZGV4KHRoaXMucG9pbnRlcnMsKGZ1bmN0aW9uKHQpe3JldHVybiB0LmlkPT09ZX0pKX19LHtrZXk6XCJnZXRQb2ludGVySW5mb1wiLHZhbHVlOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnBvaW50ZXJzW3RoaXMuZ2V0UG9pbnRlckluZGV4KHQpXX19LHtrZXk6XCJ1cGRhdGVQb2ludGVyXCIsdmFsdWU6ZnVuY3Rpb24odCxlLG4scil7dmFyIG89Vy5nZXRQb2ludGVySWQodCksaT10aGlzLmdldFBvaW50ZXJJbmRleCh0KSxhPXRoaXMucG9pbnRlcnNbaV07cmV0dXJuIHI9ITEhPT1yJiYocnx8Lyhkb3dufHN0YXJ0KSQvaS50ZXN0KGUudHlwZSkpLGE/YS5wb2ludGVyPXQ6KGE9bmV3IFVlLlBvaW50ZXJJbmZvKG8sdCxlLG51bGwsbnVsbCksaT10aGlzLnBvaW50ZXJzLmxlbmd0aCx0aGlzLnBvaW50ZXJzLnB1c2goYSkpLFcuc2V0Q29vcmRzKHRoaXMuY29vcmRzLmN1cix0aGlzLnBvaW50ZXJzLm1hcCgoZnVuY3Rpb24odCl7cmV0dXJuIHQucG9pbnRlcn0pKSx0aGlzLl9ub3coKSksVy5zZXRDb29yZERlbHRhcyh0aGlzLmNvb3Jkcy5kZWx0YSx0aGlzLmNvb3Jkcy5wcmV2LHRoaXMuY29vcmRzLmN1ciksciYmKHRoaXMucG9pbnRlcklzRG93bj0hMCxhLmRvd25UaW1lPXRoaXMuY29vcmRzLmN1ci50aW1lU3RhbXAsYS5kb3duVGFyZ2V0PW4sVy5wb2ludGVyRXh0ZW5kKHRoaXMuZG93blBvaW50ZXIsdCksdGhpcy5pbnRlcmFjdGluZygpfHwoVy5jb3B5Q29vcmRzKHRoaXMuY29vcmRzLnN0YXJ0LHRoaXMuY29vcmRzLmN1ciksVy5jb3B5Q29vcmRzKHRoaXMuY29vcmRzLnByZXYsdGhpcy5jb29yZHMuY3VyKSx0aGlzLmRvd25FdmVudD1lLHRoaXMucG9pbnRlcldhc01vdmVkPSExKSksdGhpcy5fdXBkYXRlTGF0ZXN0UG9pbnRlcih0LGUsbiksdGhpcy5fc2NvcGVGaXJlKFwiaW50ZXJhY3Rpb25zOnVwZGF0ZS1wb2ludGVyXCIse3BvaW50ZXI6dCxldmVudDplLGV2ZW50VGFyZ2V0Om4sZG93bjpyLHBvaW50ZXJJbmZvOmEscG9pbnRlckluZGV4OmksaW50ZXJhY3Rpb246dGhpc30pLGl9fSx7a2V5OlwicmVtb3ZlUG9pbnRlclwiLHZhbHVlOmZ1bmN0aW9uKHQsZSl7dmFyIG49dGhpcy5nZXRQb2ludGVySW5kZXgodCk7aWYoLTEhPT1uKXt2YXIgcj10aGlzLnBvaW50ZXJzW25dO3RoaXMuX3Njb3BlRmlyZShcImludGVyYWN0aW9uczpyZW1vdmUtcG9pbnRlclwiLHtwb2ludGVyOnQsZXZlbnQ6ZSxldmVudFRhcmdldDpudWxsLHBvaW50ZXJJbmRleDpuLHBvaW50ZXJJbmZvOnIsaW50ZXJhY3Rpb246dGhpc30pLHRoaXMucG9pbnRlcnMuc3BsaWNlKG4sMSksdGhpcy5wb2ludGVySXNEb3duPSExfX19LHtrZXk6XCJfdXBkYXRlTGF0ZXN0UG9pbnRlclwiLHZhbHVlOmZ1bmN0aW9uKHQsZSxuKXt0aGlzLl9sYXRlc3RQb2ludGVyLnBvaW50ZXI9dCx0aGlzLl9sYXRlc3RQb2ludGVyLmV2ZW50PWUsdGhpcy5fbGF0ZXN0UG9pbnRlci5ldmVudFRhcmdldD1ufX0se2tleTpcImRlc3Ryb3lcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuX2xhdGVzdFBvaW50ZXIucG9pbnRlcj1udWxsLHRoaXMuX2xhdGVzdFBvaW50ZXIuZXZlbnQ9bnVsbCx0aGlzLl9sYXRlc3RQb2ludGVyLmV2ZW50VGFyZ2V0PW51bGx9fSx7a2V5OlwiX2NyZWF0ZVByZXBhcmVkRXZlbnRcIix2YWx1ZTpmdW5jdGlvbih0LGUsbixyKXtyZXR1cm4gbmV3IHplLkludGVyYWN0RXZlbnQodGhpcyx0LHRoaXMucHJlcGFyZWQubmFtZSxlLHRoaXMuZWxlbWVudCxuLHIpfX0se2tleTpcIl9maXJlRXZlbnRcIix2YWx1ZTpmdW5jdGlvbih0KXt0aGlzLmludGVyYWN0YWJsZS5maXJlKHQpLCghdGhpcy5wcmV2RXZlbnR8fHQudGltZVN0YW1wPj10aGlzLnByZXZFdmVudC50aW1lU3RhbXApJiYodGhpcy5wcmV2RXZlbnQ9dCl9fSx7a2V5OlwiX2RvUGhhc2VcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgZT10LmV2ZW50LG49dC5waGFzZSxyPXQucHJlRW5kLG89dC50eXBlLGk9dGhpcy5yZWN0O2lmKGkmJlwibW92ZVwiPT09biYmKGsuYWRkRWRnZXModGhpcy5lZGdlcyxpLHRoaXMuY29vcmRzLmRlbHRhW3RoaXMuaW50ZXJhY3RhYmxlLm9wdGlvbnMuZGVsdGFTb3VyY2VdKSxpLndpZHRoPWkucmlnaHQtaS5sZWZ0LGkuaGVpZ2h0PWkuYm90dG9tLWkudG9wKSwhMT09PXRoaXMuX3Njb3BlRmlyZShcImludGVyYWN0aW9uczpiZWZvcmUtYWN0aW9uLVwiLmNvbmNhdChuKSx0KSlyZXR1cm4hMTt2YXIgYT10LmlFdmVudD10aGlzLl9jcmVhdGVQcmVwYXJlZEV2ZW50KGUsbixyLG8pO3JldHVybiB0aGlzLl9zY29wZUZpcmUoXCJpbnRlcmFjdGlvbnM6YWN0aW9uLVwiLmNvbmNhdChuKSx0KSxcInN0YXJ0XCI9PT1uJiYodGhpcy5wcmV2RXZlbnQ9YSksdGhpcy5fZmlyZUV2ZW50KGEpLHRoaXMuX3Njb3BlRmlyZShcImludGVyYWN0aW9uczphZnRlci1hY3Rpb24tXCIuY29uY2F0KG4pLHQpLCEwfX0se2tleTpcIl9ub3dcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiBEYXRlLm5vdygpfX1dKSx0fSgpO3FlLkludGVyYWN0aW9uPUtlO3ZhciBaZT1LZTtxZS5kZWZhdWx0PVplO3ZhciBKZT17fTtmdW5jdGlvbiBRZSh0KXt0LnBvaW50ZXJJc0Rvd24mJihybih0LmNvb3Jkcy5jdXIsdC5vZmZzZXQudG90YWwpLHQub2Zmc2V0LnBlbmRpbmcueD0wLHQub2Zmc2V0LnBlbmRpbmcueT0wKX1mdW5jdGlvbiB0bih0KXtlbih0LmludGVyYWN0aW9uKX1mdW5jdGlvbiBlbih0KXtpZighZnVuY3Rpb24odCl7cmV0dXJuISghdC5vZmZzZXQucGVuZGluZy54JiYhdC5vZmZzZXQucGVuZGluZy55KX0odCkpcmV0dXJuITE7dmFyIGU9dC5vZmZzZXQucGVuZGluZztyZXR1cm4gcm4odC5jb29yZHMuY3VyLGUpLHJuKHQuY29vcmRzLmRlbHRhLGUpLGsuYWRkRWRnZXModC5lZGdlcyx0LnJlY3QsZSksZS54PTAsZS55PTAsITB9ZnVuY3Rpb24gbm4odCl7dmFyIGU9dC54LG49dC55O3RoaXMub2Zmc2V0LnBlbmRpbmcueCs9ZSx0aGlzLm9mZnNldC5wZW5kaW5nLnkrPW4sdGhpcy5vZmZzZXQudG90YWwueCs9ZSx0aGlzLm9mZnNldC50b3RhbC55Kz1ufWZ1bmN0aW9uIHJuKHQsZSl7dmFyIG49dC5wYWdlLHI9dC5jbGllbnQsbz1lLngsaT1lLnk7bi54Kz1vLG4ueSs9aSxyLngrPW8sci55Kz1pfU9iamVjdC5kZWZpbmVQcm9wZXJ0eShKZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxKZS5hZGRUb3RhbD1RZSxKZS5hcHBseVBlbmRpbmc9ZW4sSmUuZGVmYXVsdD12b2lkIDAscWUuX1Byb3h5TWV0aG9kcy5vZmZzZXRCeT1cIlwiO3ZhciBvbj17aWQ6XCJvZmZzZXRcIixiZWZvcmU6W1wibW9kaWZpZXJzXCIsXCJwb2ludGVyLWV2ZW50c1wiLFwiYWN0aW9uc1wiLFwiaW5lcnRpYVwiXSxpbnN0YWxsOmZ1bmN0aW9uKHQpe3QuSW50ZXJhY3Rpb24ucHJvdG90eXBlLm9mZnNldEJ5PW5ufSxsaXN0ZW5lcnM6e1wiaW50ZXJhY3Rpb25zOm5ld1wiOmZ1bmN0aW9uKHQpe3QuaW50ZXJhY3Rpb24ub2Zmc2V0PXt0b3RhbDp7eDowLHk6MH0scGVuZGluZzp7eDowLHk6MH19fSxcImludGVyYWN0aW9uczp1cGRhdGUtcG9pbnRlclwiOmZ1bmN0aW9uKHQpe3JldHVybiBRZSh0LmludGVyYWN0aW9uKX0sXCJpbnRlcmFjdGlvbnM6YmVmb3JlLWFjdGlvbi1zdGFydFwiOnRuLFwiaW50ZXJhY3Rpb25zOmJlZm9yZS1hY3Rpb24tbW92ZVwiOnRuLFwiaW50ZXJhY3Rpb25zOmJlZm9yZS1hY3Rpb24tZW5kXCI6ZnVuY3Rpb24odCl7dmFyIGU9dC5pbnRlcmFjdGlvbjtpZihlbihlKSlyZXR1cm4gZS5tb3ZlKHtvZmZzZXQ6ITB9KSxlLmVuZCgpLCExfSxcImludGVyYWN0aW9uczpzdG9wXCI6ZnVuY3Rpb24odCl7dmFyIGU9dC5pbnRlcmFjdGlvbjtlLm9mZnNldC50b3RhbC54PTAsZS5vZmZzZXQudG90YWwueT0wLGUub2Zmc2V0LnBlbmRpbmcueD0wLGUub2Zmc2V0LnBlbmRpbmcueT0wfX19O0plLmRlZmF1bHQ9b247dmFyIGFuPXt9O2Z1bmN0aW9uIHNuKHQsZSl7Zm9yKHZhciBuPTA7bjxlLmxlbmd0aDtuKyspe3ZhciByPWVbbl07ci5lbnVtZXJhYmxlPXIuZW51bWVyYWJsZXx8ITEsci5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gciYmKHIud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LHIua2V5LHIpfX1PYmplY3QuZGVmaW5lUHJvcGVydHkoYW4sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksYW4uZGVmYXVsdD1hbi5JbmVydGlhU3RhdGU9dm9pZCAwO3ZhciBsbj1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoZSl7IWZ1bmN0aW9uKHQsZSl7aWYoISh0IGluc3RhbmNlb2YgZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX0odGhpcyx0KSx0aGlzLmFjdGl2ZT0hMSx0aGlzLmlzTW9kaWZpZWQ9ITEsdGhpcy5zbW9vdGhFbmQ9ITEsdGhpcy5hbGxvd1Jlc3VtZT0hMSx0aGlzLm1vZGlmaWNhdGlvbj1udWxsLHRoaXMubW9kaWZpZXJDb3VudD0wLHRoaXMubW9kaWZpZXJBcmc9bnVsbCx0aGlzLnN0YXJ0Q29vcmRzPW51bGwsdGhpcy50MD0wLHRoaXMudjA9MCx0aGlzLnRlPTAsdGhpcy50YXJnZXRPZmZzZXQ9bnVsbCx0aGlzLm1vZGlmaWVkT2Zmc2V0PW51bGwsdGhpcy5jdXJyZW50T2Zmc2V0PW51bGwsdGhpcy5sYW1iZGFfdjA9MCx0aGlzLm9uZV92ZV92MD0wLHRoaXMudGltZW91dD1udWxsLHRoaXMuaW50ZXJhY3Rpb249dm9pZCAwLHRoaXMuaW50ZXJhY3Rpb249ZX12YXIgZSxuLHI7cmV0dXJuIGU9dCwobj1be2tleTpcInN0YXJ0XCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5pbnRlcmFjdGlvbixuPXVuKGUpO2lmKCFufHwhbi5lbmFibGVkKXJldHVybiExO3ZhciByPWUuY29vcmRzLnZlbG9jaXR5LmNsaWVudCxvPSgwLFIuZGVmYXVsdCkoci54LHIueSksaT10aGlzLm1vZGlmaWNhdGlvbnx8KHRoaXMubW9kaWZpY2F0aW9uPW5ldyBTZS5kZWZhdWx0KGUpKTtpZihpLmNvcHlGcm9tKGUubW9kaWZpY2F0aW9uKSx0aGlzLnQwPWUuX25vdygpLHRoaXMuYWxsb3dSZXN1bWU9bi5hbGxvd1Jlc3VtZSx0aGlzLnYwPW8sdGhpcy5jdXJyZW50T2Zmc2V0PXt4OjAseTowfSx0aGlzLnN0YXJ0Q29vcmRzPWUuY29vcmRzLmN1ci5wYWdlLHRoaXMubW9kaWZpZXJBcmc9e2ludGVyYWN0aW9uOmUsaW50ZXJhY3RhYmxlOmUuaW50ZXJhY3RhYmxlLGVsZW1lbnQ6ZS5lbGVtZW50LHJlY3Q6ZS5yZWN0LGVkZ2VzOmUuZWRnZXMscGFnZUNvb3Jkczp0aGlzLnN0YXJ0Q29vcmRzLHByZUVuZDohMCxwaGFzZTpcImluZXJ0aWFzdGFydFwifSx0aGlzLnQwLWUuY29vcmRzLmN1ci50aW1lU3RhbXA8NTAmJm8+bi5taW5TcGVlZCYmbz5uLmVuZFNwZWVkKXRoaXMuc3RhcnRJbmVydGlhKCk7ZWxzZXtpZihpLnJlc3VsdD1pLnNldEFsbCh0aGlzLm1vZGlmaWVyQXJnKSwhaS5yZXN1bHQuY2hhbmdlZClyZXR1cm4hMTt0aGlzLnN0YXJ0U21vb3RoRW5kKCl9cmV0dXJuIGUubW9kaWZpY2F0aW9uLnJlc3VsdC5yZWN0PW51bGwsZS5vZmZzZXRCeSh0aGlzLnRhcmdldE9mZnNldCksZS5fZG9QaGFzZSh7aW50ZXJhY3Rpb246ZSxldmVudDp0LHBoYXNlOlwiaW5lcnRpYXN0YXJ0XCJ9KSxlLm9mZnNldEJ5KHt4Oi10aGlzLnRhcmdldE9mZnNldC54LHk6LXRoaXMudGFyZ2V0T2Zmc2V0Lnl9KSxlLm1vZGlmaWNhdGlvbi5yZXN1bHQucmVjdD1udWxsLHRoaXMuYWN0aXZlPSEwLGUuc2ltdWxhdGlvbj10aGlzLCEwfX0se2tleTpcInN0YXJ0SW5lcnRpYVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPXRoaXMuaW50ZXJhY3Rpb24uY29vcmRzLnZlbG9jaXR5LmNsaWVudCxuPXVuKHRoaXMuaW50ZXJhY3Rpb24pLHI9bi5yZXNpc3RhbmNlLG89LU1hdGgubG9nKG4uZW5kU3BlZWQvdGhpcy52MCkvcjt0aGlzLnRhcmdldE9mZnNldD17eDooZS54LW8pL3IseTooZS55LW8pL3J9LHRoaXMudGU9byx0aGlzLmxhbWJkYV92MD1yL3RoaXMudjAsdGhpcy5vbmVfdmVfdjA9MS1uLmVuZFNwZWVkL3RoaXMudjA7dmFyIGk9dGhpcy5tb2RpZmljYXRpb24sYT10aGlzLm1vZGlmaWVyQXJnO2EucGFnZUNvb3Jkcz17eDp0aGlzLnN0YXJ0Q29vcmRzLngrdGhpcy50YXJnZXRPZmZzZXQueCx5OnRoaXMuc3RhcnRDb29yZHMueSt0aGlzLnRhcmdldE9mZnNldC55fSxpLnJlc3VsdD1pLnNldEFsbChhKSxpLnJlc3VsdC5jaGFuZ2VkJiYodGhpcy5pc01vZGlmaWVkPSEwLHRoaXMubW9kaWZpZWRPZmZzZXQ9e3g6dGhpcy50YXJnZXRPZmZzZXQueCtpLnJlc3VsdC5kZWx0YS54LHk6dGhpcy50YXJnZXRPZmZzZXQueStpLnJlc3VsdC5kZWx0YS55fSksdGhpcy5vbk5leHRGcmFtZSgoZnVuY3Rpb24oKXtyZXR1cm4gdC5pbmVydGlhVGljaygpfSkpfX0se2tleTpcInN0YXJ0U21vb3RoRW5kXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3RoaXMuc21vb3RoRW5kPSEwLHRoaXMuaXNNb2RpZmllZD0hMCx0aGlzLnRhcmdldE9mZnNldD17eDp0aGlzLm1vZGlmaWNhdGlvbi5yZXN1bHQuZGVsdGEueCx5OnRoaXMubW9kaWZpY2F0aW9uLnJlc3VsdC5kZWx0YS55fSx0aGlzLm9uTmV4dEZyYW1lKChmdW5jdGlvbigpe3JldHVybiB0LnNtb290aEVuZFRpY2soKX0pKX19LHtrZXk6XCJvbk5leHRGcmFtZVwiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXM7dGhpcy50aW1lb3V0PU10LmRlZmF1bHQucmVxdWVzdCgoZnVuY3Rpb24oKXtlLmFjdGl2ZSYmdCgpfSkpfX0se2tleTpcImluZXJ0aWFUaWNrXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdCxlLG4scixvLGksYSxzPXRoaXMsbD10aGlzLmludGVyYWN0aW9uLHU9dW4obCkucmVzaXN0YW5jZSxjPShsLl9ub3coKS10aGlzLnQwKS8xZTM7aWYoYzx0aGlzLnRlKXt2YXIgZixkPTEtKE1hdGguZXhwKC11KmMpLXRoaXMubGFtYmRhX3YwKS90aGlzLm9uZV92ZV92MDt0aGlzLmlzTW9kaWZpZWQ/KHQ9MCxlPTAsbj10aGlzLnRhcmdldE9mZnNldC54LHI9dGhpcy50YXJnZXRPZmZzZXQueSxvPXRoaXMubW9kaWZpZWRPZmZzZXQueCxpPXRoaXMubW9kaWZpZWRPZmZzZXQueSxmPXt4OmNuKGE9ZCx0LG4sbykseTpjbihhLGUscixpKX0pOmY9e3g6dGhpcy50YXJnZXRPZmZzZXQueCpkLHk6dGhpcy50YXJnZXRPZmZzZXQueSpkfTt2YXIgcD17eDpmLngtdGhpcy5jdXJyZW50T2Zmc2V0LngseTpmLnktdGhpcy5jdXJyZW50T2Zmc2V0Lnl9O3RoaXMuY3VycmVudE9mZnNldC54Kz1wLngsdGhpcy5jdXJyZW50T2Zmc2V0LnkrPXAueSxsLm9mZnNldEJ5KHApLGwubW92ZSgpLHRoaXMub25OZXh0RnJhbWUoKGZ1bmN0aW9uKCl7cmV0dXJuIHMuaW5lcnRpYVRpY2soKX0pKX1lbHNlIGwub2Zmc2V0Qnkoe3g6dGhpcy5tb2RpZmllZE9mZnNldC54LXRoaXMuY3VycmVudE9mZnNldC54LHk6dGhpcy5tb2RpZmllZE9mZnNldC55LXRoaXMuY3VycmVudE9mZnNldC55fSksdGhpcy5lbmQoKX19LHtrZXk6XCJzbW9vdGhFbmRUaWNrXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9dGhpcy5pbnRlcmFjdGlvbixuPWUuX25vdygpLXRoaXMudDAscj11bihlKS5zbW9vdGhFbmREdXJhdGlvbjtpZihuPHIpe3ZhciBvPXt4OmZuKG4sMCx0aGlzLnRhcmdldE9mZnNldC54LHIpLHk6Zm4obiwwLHRoaXMudGFyZ2V0T2Zmc2V0Lnkscil9LGk9e3g6by54LXRoaXMuY3VycmVudE9mZnNldC54LHk6by55LXRoaXMuY3VycmVudE9mZnNldC55fTt0aGlzLmN1cnJlbnRPZmZzZXQueCs9aS54LHRoaXMuY3VycmVudE9mZnNldC55Kz1pLnksZS5vZmZzZXRCeShpKSxlLm1vdmUoe3NraXBNb2RpZmllcnM6dGhpcy5tb2RpZmllckNvdW50fSksdGhpcy5vbk5leHRGcmFtZSgoZnVuY3Rpb24oKXtyZXR1cm4gdC5zbW9vdGhFbmRUaWNrKCl9KSl9ZWxzZSBlLm9mZnNldEJ5KHt4OnRoaXMudGFyZ2V0T2Zmc2V0LngtdGhpcy5jdXJyZW50T2Zmc2V0LngseTp0aGlzLnRhcmdldE9mZnNldC55LXRoaXMuY3VycmVudE9mZnNldC55fSksdGhpcy5lbmQoKX19LHtrZXk6XCJyZXN1bWVcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgZT10LnBvaW50ZXIsbj10LmV2ZW50LHI9dC5ldmVudFRhcmdldCxvPXRoaXMuaW50ZXJhY3Rpb247by5vZmZzZXRCeSh7eDotdGhpcy5jdXJyZW50T2Zmc2V0LngseTotdGhpcy5jdXJyZW50T2Zmc2V0Lnl9KSxvLnVwZGF0ZVBvaW50ZXIoZSxuLHIsITApLG8uX2RvUGhhc2Uoe2ludGVyYWN0aW9uOm8sZXZlbnQ6bixwaGFzZTpcInJlc3VtZVwifSksKDAsVy5jb3B5Q29vcmRzKShvLmNvb3Jkcy5wcmV2LG8uY29vcmRzLmN1ciksdGhpcy5zdG9wKCl9fSx7a2V5OlwiZW5kXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmludGVyYWN0aW9uLm1vdmUoKSx0aGlzLmludGVyYWN0aW9uLmVuZCgpLHRoaXMuc3RvcCgpfX0se2tleTpcInN0b3BcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuYWN0aXZlPXRoaXMuc21vb3RoRW5kPSExLHRoaXMuaW50ZXJhY3Rpb24uc2ltdWxhdGlvbj1udWxsLE10LmRlZmF1bHQuY2FuY2VsKHRoaXMudGltZW91dCl9fV0pJiZzbihlLnByb3RvdHlwZSxuKSxyJiZzbihlLHIpLHR9KCk7ZnVuY3Rpb24gdW4odCl7dmFyIGU9dC5pbnRlcmFjdGFibGUsbj10LnByZXBhcmVkO3JldHVybiBlJiZlLm9wdGlvbnMmJm4ubmFtZSYmZS5vcHRpb25zW24ubmFtZV0uaW5lcnRpYX1mdW5jdGlvbiBjbih0LGUsbixyKXt2YXIgbz0xLXQ7cmV0dXJuIG8qbyplKzIqbyp0Km4rdCp0KnJ9ZnVuY3Rpb24gZm4odCxlLG4scil7cmV0dXJuLW4qKHQvPXIpKih0LTIpK2V9YW4uSW5lcnRpYVN0YXRlPWxuO3ZhciBkbj17aWQ6XCJpbmVydGlhXCIsYmVmb3JlOltcIm1vZGlmaWVyc1wiLFwiYWN0aW9uc1wiXSxpbnN0YWxsOmZ1bmN0aW9uKHQpe3ZhciBlPXQuZGVmYXVsdHM7dC51c2VQbHVnaW4oSmUuZGVmYXVsdCksdC51c2VQbHVnaW4oa2UuZGVmYXVsdCksdC5hY3Rpb25zLnBoYXNlcy5pbmVydGlhc3RhcnQ9ITAsdC5hY3Rpb25zLnBoYXNlcy5yZXN1bWU9ITAsZS5wZXJBY3Rpb24uaW5lcnRpYT17ZW5hYmxlZDohMSxyZXNpc3RhbmNlOjEwLG1pblNwZWVkOjEwMCxlbmRTcGVlZDoxMCxhbGxvd1Jlc3VtZTohMCxzbW9vdGhFbmREdXJhdGlvbjozMDB9fSxsaXN0ZW5lcnM6e1wiaW50ZXJhY3Rpb25zOm5ld1wiOmZ1bmN0aW9uKHQpe3ZhciBlPXQuaW50ZXJhY3Rpb247ZS5pbmVydGlhPW5ldyBsbihlKX0sXCJpbnRlcmFjdGlvbnM6YmVmb3JlLWFjdGlvbi1lbmRcIjpmdW5jdGlvbih0KXt2YXIgZT10LmludGVyYWN0aW9uLG49dC5ldmVudDtyZXR1cm4oIWUuX2ludGVyYWN0aW5nfHxlLnNpbXVsYXRpb258fCFlLmluZXJ0aWEuc3RhcnQobikpJiZudWxsfSxcImludGVyYWN0aW9uczpkb3duXCI6ZnVuY3Rpb24odCl7dmFyIGU9dC5pbnRlcmFjdGlvbixuPXQuZXZlbnRUYXJnZXQscj1lLmluZXJ0aWE7aWYoci5hY3RpdmUpZm9yKHZhciBvPW47aS5kZWZhdWx0LmVsZW1lbnQobyk7KXtpZihvPT09ZS5lbGVtZW50KXtyLnJlc3VtZSh0KTticmVha31vPV8ucGFyZW50Tm9kZShvKX19LFwiaW50ZXJhY3Rpb25zOnN0b3BcIjpmdW5jdGlvbih0KXt2YXIgZT10LmludGVyYWN0aW9uLmluZXJ0aWE7ZS5hY3RpdmUmJmUuc3RvcCgpfSxcImludGVyYWN0aW9uczpiZWZvcmUtYWN0aW9uLXJlc3VtZVwiOmZ1bmN0aW9uKHQpe3ZhciBlPXQuaW50ZXJhY3Rpb24ubW9kaWZpY2F0aW9uO2Uuc3RvcCh0KSxlLnN0YXJ0KHQsdC5pbnRlcmFjdGlvbi5jb29yZHMuY3VyLnBhZ2UpLGUuYXBwbHlUb0ludGVyYWN0aW9uKHQpfSxcImludGVyYWN0aW9uczpiZWZvcmUtYWN0aW9uLWluZXJ0aWFzdGFydFwiOmZ1bmN0aW9uKHQpe3JldHVybiB0LmludGVyYWN0aW9uLm1vZGlmaWNhdGlvbi5zZXRBbmRBcHBseSh0KX0sXCJpbnRlcmFjdGlvbnM6YWN0aW9uLXJlc3VtZVwiOmtlLmFkZEV2ZW50TW9kaWZpZXJzLFwiaW50ZXJhY3Rpb25zOmFjdGlvbi1pbmVydGlhc3RhcnRcIjprZS5hZGRFdmVudE1vZGlmaWVycyxcImludGVyYWN0aW9uczphZnRlci1hY3Rpb24taW5lcnRpYXN0YXJ0XCI6ZnVuY3Rpb24odCl7cmV0dXJuIHQuaW50ZXJhY3Rpb24ubW9kaWZpY2F0aW9uLnJlc3RvcmVJbnRlcmFjdGlvbkNvb3Jkcyh0KX0sXCJpbnRlcmFjdGlvbnM6YWZ0ZXItYWN0aW9uLXJlc3VtZVwiOmZ1bmN0aW9uKHQpe3JldHVybiB0LmludGVyYWN0aW9uLm1vZGlmaWNhdGlvbi5yZXN0b3JlSW50ZXJhY3Rpb25Db29yZHModCl9fX07YW4uZGVmYXVsdD1kbjt2YXIgcG49e307ZnVuY3Rpb24gdm4odCxlKXtmb3IodmFyIG49MDtuPGUubGVuZ3RoO24rKyl7dmFyIHI9ZVtuXTtyLmVudW1lcmFibGU9ci5lbnVtZXJhYmxlfHwhMSxyLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiByJiYoci53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsci5rZXkscil9fWZ1bmN0aW9uIGhuKHQsZSl7Zm9yKHZhciBuPTA7bjxlLmxlbmd0aDtuKyspe3ZhciByPWVbbl07aWYodC5pbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQpYnJlYWs7cih0KX19T2JqZWN0LmRlZmluZVByb3BlcnR5KHBuLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHBuLkV2ZW50YWJsZT12b2lkIDA7dmFyIGduPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdChlKXshZnVuY3Rpb24odCxlKXtpZighKHQgaW5zdGFuY2VvZiBlKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfSh0aGlzLHQpLHRoaXMub3B0aW9ucz12b2lkIDAsdGhpcy50eXBlcz17fSx0aGlzLnByb3BhZ2F0aW9uU3RvcHBlZD0hMSx0aGlzLmltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZD0hMSx0aGlzLmdsb2JhbD12b2lkIDAsdGhpcy5vcHRpb25zPSgwLGouZGVmYXVsdCkoe30sZXx8e30pfXZhciBlLG4scjtyZXR1cm4gZT10LChuPVt7a2V5OlwiZmlyZVwiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBlLG49dGhpcy5nbG9iYWw7KGU9dGhpcy50eXBlc1t0LnR5cGVdKSYmaG4odCxlKSwhdC5wcm9wYWdhdGlvblN0b3BwZWQmJm4mJihlPW5bdC50eXBlXSkmJmhuKHQsZSl9fSx7a2V5Olwib25cIix2YWx1ZTpmdW5jdGlvbih0LGUpe3ZhciBuPSgwLHouZGVmYXVsdCkodCxlKTtmb3IodCBpbiBuKXRoaXMudHlwZXNbdF09Sy5tZXJnZSh0aGlzLnR5cGVzW3RdfHxbXSxuW3RdKX19LHtrZXk6XCJvZmZcIix2YWx1ZTpmdW5jdGlvbih0LGUpe3ZhciBuPSgwLHouZGVmYXVsdCkodCxlKTtmb3IodCBpbiBuKXt2YXIgcj10aGlzLnR5cGVzW3RdO2lmKHImJnIubGVuZ3RoKWZvcih2YXIgbz0wO288blt0XS5sZW5ndGg7bysrKXt2YXIgaT1uW3RdW29dLGE9ci5pbmRleE9mKGkpOy0xIT09YSYmci5zcGxpY2UoYSwxKX19fX0se2tleTpcImdldFJlY3RcIix2YWx1ZTpmdW5jdGlvbih0KXtyZXR1cm4gbnVsbH19XSkmJnZuKGUucHJvdG90eXBlLG4pLHImJnZuKGUsciksdH0oKTtwbi5FdmVudGFibGU9Z247dmFyIHluPXt9O09iamVjdC5kZWZpbmVQcm9wZXJ0eSh5bixcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx5bi5kZWZhdWx0PWZ1bmN0aW9uKHQsZSl7aWYoZS5waGFzZWxlc3NUeXBlc1t0XSlyZXR1cm4hMDtmb3IodmFyIG4gaW4gZS5tYXApaWYoMD09PXQuaW5kZXhPZihuKSYmdC5zdWJzdHIobi5sZW5ndGgpaW4gZS5waGFzZXMpcmV0dXJuITA7cmV0dXJuITF9O3ZhciBtbj17fTtmdW5jdGlvbiBibih0LGUpe2Zvcih2YXIgbj0wO248ZS5sZW5ndGg7bisrKXt2YXIgcj1lW25dO3IuZW51bWVyYWJsZT1yLmVudW1lcmFibGV8fCExLHIuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIHImJihyLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxyLmtleSxyKX19ZnVuY3Rpb24geG4odCxlLG4pe3JldHVybiBlJiZibih0LnByb3RvdHlwZSxlKSxuJiZibih0LG4pLHR9T2JqZWN0LmRlZmluZVByb3BlcnR5KG1uLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG1uLkludGVyYWN0YWJsZT12b2lkIDA7dmFyIHduPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdChuLHIsbyxpKXshZnVuY3Rpb24odCxlKXtpZighKHQgaW5zdGFuY2VvZiBlKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfSh0aGlzLHQpLHRoaXMub3B0aW9ucz12b2lkIDAsdGhpcy5fYWN0aW9ucz12b2lkIDAsdGhpcy50YXJnZXQ9dm9pZCAwLHRoaXMuZXZlbnRzPW5ldyBwbi5FdmVudGFibGUsdGhpcy5fY29udGV4dD12b2lkIDAsdGhpcy5fd2luPXZvaWQgMCx0aGlzLl9kb2M9dm9pZCAwLHRoaXMuX3Njb3BlRXZlbnRzPXZvaWQgMCx0aGlzLl9yZWN0Q2hlY2tlcj12b2lkIDAsdGhpcy5fYWN0aW9ucz1yLmFjdGlvbnMsdGhpcy50YXJnZXQ9bix0aGlzLl9jb250ZXh0PXIuY29udGV4dHx8byx0aGlzLl93aW49KDAsZS5nZXRXaW5kb3cpKCgwLF8udHJ5U2VsZWN0b3IpKG4pP3RoaXMuX2NvbnRleHQ6biksdGhpcy5fZG9jPXRoaXMuX3dpbi5kb2N1bWVudCx0aGlzLl9zY29wZUV2ZW50cz1pLHRoaXMuc2V0KHIpfXJldHVybiB4bih0LFt7a2V5OlwiX2RlZmF1bHRzXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJue2Jhc2U6e30scGVyQWN0aW9uOnt9LGFjdGlvbnM6e319fX1dKSx4bih0LFt7a2V5Olwic2V0T25FdmVudHNcIix2YWx1ZTpmdW5jdGlvbih0LGUpe3JldHVybiBpLmRlZmF1bHQuZnVuYyhlLm9uc3RhcnQpJiZ0aGlzLm9uKFwiXCIuY29uY2F0KHQsXCJzdGFydFwiKSxlLm9uc3RhcnQpLGkuZGVmYXVsdC5mdW5jKGUub25tb3ZlKSYmdGhpcy5vbihcIlwiLmNvbmNhdCh0LFwibW92ZVwiKSxlLm9ubW92ZSksaS5kZWZhdWx0LmZ1bmMoZS5vbmVuZCkmJnRoaXMub24oXCJcIi5jb25jYXQodCxcImVuZFwiKSxlLm9uZW5kKSxpLmRlZmF1bHQuZnVuYyhlLm9uaW5lcnRpYXN0YXJ0KSYmdGhpcy5vbihcIlwiLmNvbmNhdCh0LFwiaW5lcnRpYXN0YXJ0XCIpLGUub25pbmVydGlhc3RhcnQpLHRoaXN9fSx7a2V5OlwidXBkYXRlUGVyQWN0aW9uTGlzdGVuZXJzXCIsdmFsdWU6ZnVuY3Rpb24odCxlLG4peyhpLmRlZmF1bHQuYXJyYXkoZSl8fGkuZGVmYXVsdC5vYmplY3QoZSkpJiZ0aGlzLm9mZih0LGUpLChpLmRlZmF1bHQuYXJyYXkobil8fGkuZGVmYXVsdC5vYmplY3QobikpJiZ0aGlzLm9uKHQsbil9fSx7a2V5Olwic2V0UGVyQWN0aW9uXCIsdmFsdWU6ZnVuY3Rpb24odCxlKXt2YXIgbj10aGlzLl9kZWZhdWx0cztmb3IodmFyIHIgaW4gZSl7dmFyIG89cixhPXRoaXMub3B0aW9uc1t0XSxzPWVbb107XCJsaXN0ZW5lcnNcIj09PW8mJnRoaXMudXBkYXRlUGVyQWN0aW9uTGlzdGVuZXJzKHQsYS5saXN0ZW5lcnMscyksaS5kZWZhdWx0LmFycmF5KHMpP2Fbb109Sy5mcm9tKHMpOmkuZGVmYXVsdC5wbGFpbk9iamVjdChzKT8oYVtvXT0oMCxqLmRlZmF1bHQpKGFbb118fHt9LCgwLF9lLmRlZmF1bHQpKHMpKSxpLmRlZmF1bHQub2JqZWN0KG4ucGVyQWN0aW9uW29dKSYmXCJlbmFibGVkXCJpbiBuLnBlckFjdGlvbltvXSYmKGFbb10uZW5hYmxlZD0hMSE9PXMuZW5hYmxlZCkpOmkuZGVmYXVsdC5ib29sKHMpJiZpLmRlZmF1bHQub2JqZWN0KG4ucGVyQWN0aW9uW29dKT9hW29dLmVuYWJsZWQ9czphW29dPXN9fX0se2tleTpcImdldFJlY3RcIix2YWx1ZTpmdW5jdGlvbih0KXtyZXR1cm4gdD10fHwoaS5kZWZhdWx0LmVsZW1lbnQodGhpcy50YXJnZXQpP3RoaXMudGFyZ2V0Om51bGwpLGkuZGVmYXVsdC5zdHJpbmcodGhpcy50YXJnZXQpJiYodD10fHx0aGlzLl9jb250ZXh0LnF1ZXJ5U2VsZWN0b3IodGhpcy50YXJnZXQpKSwoMCxfLmdldEVsZW1lbnRSZWN0KSh0KX19LHtrZXk6XCJyZWN0Q2hlY2tlclwiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXM7cmV0dXJuIGkuZGVmYXVsdC5mdW5jKHQpPyh0aGlzLl9yZWN0Q2hlY2tlcj10LHRoaXMuZ2V0UmVjdD1mdW5jdGlvbih0KXt2YXIgbj0oMCxqLmRlZmF1bHQpKHt9LGUuX3JlY3RDaGVja2VyKHQpKTtyZXR1cm5cIndpZHRoXCJpbiBufHwobi53aWR0aD1uLnJpZ2h0LW4ubGVmdCxuLmhlaWdodD1uLmJvdHRvbS1uLnRvcCksbn0sdGhpcyk6bnVsbD09PXQ/KGRlbGV0ZSB0aGlzLmdldFJlY3QsZGVsZXRlIHRoaXMuX3JlY3RDaGVja2VyLHRoaXMpOnRoaXMuZ2V0UmVjdH19LHtrZXk6XCJfYmFja0NvbXBhdE9wdGlvblwiLHZhbHVlOmZ1bmN0aW9uKHQsZSl7aWYoKDAsXy50cnlTZWxlY3RvcikoZSl8fGkuZGVmYXVsdC5vYmplY3QoZSkpe2Zvcih2YXIgbiBpbiB0aGlzLm9wdGlvbnNbdF09ZSx0aGlzLl9hY3Rpb25zLm1hcCl0aGlzLm9wdGlvbnNbbl1bdF09ZTtyZXR1cm4gdGhpc31yZXR1cm4gdGhpcy5vcHRpb25zW3RdfX0se2tleTpcIm9yaWdpblwiLHZhbHVlOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9iYWNrQ29tcGF0T3B0aW9uKFwib3JpZ2luXCIsdCl9fSx7a2V5OlwiZGVsdGFTb3VyY2VcIix2YWx1ZTpmdW5jdGlvbih0KXtyZXR1cm5cInBhZ2VcIj09PXR8fFwiY2xpZW50XCI9PT10Pyh0aGlzLm9wdGlvbnMuZGVsdGFTb3VyY2U9dCx0aGlzKTp0aGlzLm9wdGlvbnMuZGVsdGFTb3VyY2V9fSx7a2V5OlwiY29udGV4dFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2NvbnRleHR9fSx7a2V5OlwiaW5Db250ZXh0XCIsdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX2NvbnRleHQ9PT10Lm93bmVyRG9jdW1lbnR8fCgwLF8ubm9kZUNvbnRhaW5zKSh0aGlzLl9jb250ZXh0LHQpfX0se2tleTpcInRlc3RJZ25vcmVBbGxvd1wiLHZhbHVlOmZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4hdGhpcy50ZXN0SWdub3JlKHQuaWdub3JlRnJvbSxlLG4pJiZ0aGlzLnRlc3RBbGxvdyh0LmFsbG93RnJvbSxlLG4pfX0se2tleTpcInRlc3RBbGxvd1wiLHZhbHVlOmZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4hdHx8ISFpLmRlZmF1bHQuZWxlbWVudChuKSYmKGkuZGVmYXVsdC5zdHJpbmcodCk/KDAsXy5tYXRjaGVzVXBUbykobix0LGUpOiEhaS5kZWZhdWx0LmVsZW1lbnQodCkmJigwLF8ubm9kZUNvbnRhaW5zKSh0LG4pKX19LHtrZXk6XCJ0ZXN0SWdub3JlXCIsdmFsdWU6ZnVuY3Rpb24odCxlLG4pe3JldHVybiEoIXR8fCFpLmRlZmF1bHQuZWxlbWVudChuKSkmJihpLmRlZmF1bHQuc3RyaW5nKHQpPygwLF8ubWF0Y2hlc1VwVG8pKG4sdCxlKTohIWkuZGVmYXVsdC5lbGVtZW50KHQpJiYoMCxfLm5vZGVDb250YWlucykodCxuKSl9fSx7a2V5OlwiZmlyZVwiLHZhbHVlOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmV2ZW50cy5maXJlKHQpLHRoaXN9fSx7a2V5OlwiX29uT2ZmXCIsdmFsdWU6ZnVuY3Rpb24odCxlLG4scil7aS5kZWZhdWx0Lm9iamVjdChlKSYmIWkuZGVmYXVsdC5hcnJheShlKSYmKHI9bixuPW51bGwpO3ZhciBvPVwib25cIj09PXQ/XCJhZGRcIjpcInJlbW92ZVwiLGE9KDAsei5kZWZhdWx0KShlLG4pO2Zvcih2YXIgcyBpbiBhKXtcIndoZWVsXCI9PT1zJiYocz1iLmRlZmF1bHQud2hlZWxFdmVudCk7Zm9yKHZhciBsPTA7bDxhW3NdLmxlbmd0aDtsKyspe3ZhciB1PWFbc11bbF07KDAseW4uZGVmYXVsdCkocyx0aGlzLl9hY3Rpb25zKT90aGlzLmV2ZW50c1t0XShzLHUpOmkuZGVmYXVsdC5zdHJpbmcodGhpcy50YXJnZXQpP3RoaXMuX3Njb3BlRXZlbnRzW1wiXCIuY29uY2F0KG8sXCJEZWxlZ2F0ZVwiKV0odGhpcy50YXJnZXQsdGhpcy5fY29udGV4dCxzLHUscik6dGhpcy5fc2NvcGVFdmVudHNbb10odGhpcy50YXJnZXQscyx1LHIpfX1yZXR1cm4gdGhpc319LHtrZXk6XCJvblwiLHZhbHVlOmZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gdGhpcy5fb25PZmYoXCJvblwiLHQsZSxuKX19LHtrZXk6XCJvZmZcIix2YWx1ZTpmdW5jdGlvbih0LGUsbil7cmV0dXJuIHRoaXMuX29uT2ZmKFwib2ZmXCIsdCxlLG4pfX0se2tleTpcInNldFwiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX2RlZmF1bHRzO2Zvcih2YXIgbiBpbiBpLmRlZmF1bHQub2JqZWN0KHQpfHwodD17fSksdGhpcy5vcHRpb25zPSgwLF9lLmRlZmF1bHQpKGUuYmFzZSksdGhpcy5fYWN0aW9ucy5tZXRob2REaWN0KXt2YXIgcj1uLG89dGhpcy5fYWN0aW9ucy5tZXRob2REaWN0W3JdO3RoaXMub3B0aW9uc1tyXT17fSx0aGlzLnNldFBlckFjdGlvbihyLCgwLGouZGVmYXVsdCkoKDAsai5kZWZhdWx0KSh7fSxlLnBlckFjdGlvbiksZS5hY3Rpb25zW3JdKSksdGhpc1tvXSh0W3JdKX1mb3IodmFyIGEgaW4gdClpLmRlZmF1bHQuZnVuYyh0aGlzW2FdKSYmdGhpc1thXSh0W2FdKTtyZXR1cm4gdGhpc319LHtrZXk6XCJ1bnNldFwiLHZhbHVlOmZ1bmN0aW9uKCl7aWYoaS5kZWZhdWx0LnN0cmluZyh0aGlzLnRhcmdldCkpZm9yKHZhciB0IGluIHRoaXMuX3Njb3BlRXZlbnRzLmRlbGVnYXRlZEV2ZW50cylmb3IodmFyIGU9dGhpcy5fc2NvcGVFdmVudHMuZGVsZWdhdGVkRXZlbnRzW3RdLG49ZS5sZW5ndGgtMTtuPj0wO24tLSl7dmFyIHI9ZVtuXSxvPXIuc2VsZWN0b3IsYT1yLmNvbnRleHQscz1yLmxpc3RlbmVycztvPT09dGhpcy50YXJnZXQmJmE9PT10aGlzLl9jb250ZXh0JiZlLnNwbGljZShuLDEpO2Zvcih2YXIgbD1zLmxlbmd0aC0xO2w+PTA7bC0tKXRoaXMuX3Njb3BlRXZlbnRzLnJlbW92ZURlbGVnYXRlKHRoaXMudGFyZ2V0LHRoaXMuX2NvbnRleHQsdCxzW2xdWzBdLHNbbF1bMV0pfWVsc2UgdGhpcy5fc2NvcGVFdmVudHMucmVtb3ZlKHRoaXMudGFyZ2V0LFwiYWxsXCIpfX1dKSx0fSgpO21uLkludGVyYWN0YWJsZT13bjt2YXIgX249e307ZnVuY3Rpb24gU24odCxlKXtmb3IodmFyIG49MDtuPGUubGVuZ3RoO24rKyl7dmFyIHI9ZVtuXTtyLmVudW1lcmFibGU9ci5lbnVtZXJhYmxlfHwhMSxyLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiByJiYoci53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsci5rZXkscil9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShfbixcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxfbi5JbnRlcmFjdGFibGVTZXQ9dm9pZCAwO3ZhciBQbj1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoZSl7dmFyIG49dGhpczshZnVuY3Rpb24odCxlKXtpZighKHQgaW5zdGFuY2VvZiBlKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfSh0aGlzLHQpLHRoaXMubGlzdD1bXSx0aGlzLnNlbGVjdG9yTWFwPXt9LHRoaXMuc2NvcGU9dm9pZCAwLHRoaXMuc2NvcGU9ZSxlLmFkZExpc3RlbmVycyh7XCJpbnRlcmFjdGFibGU6dW5zZXRcIjpmdW5jdGlvbih0KXt2YXIgZT10LmludGVyYWN0YWJsZSxyPWUudGFyZ2V0LG89ZS5fY29udGV4dCxhPWkuZGVmYXVsdC5zdHJpbmcocik/bi5zZWxlY3Rvck1hcFtyXTpyW24uc2NvcGUuaWRdLHM9Sy5maW5kSW5kZXgoYSwoZnVuY3Rpb24odCl7cmV0dXJuIHQuY29udGV4dD09PW99KSk7YVtzXSYmKGFbc10uY29udGV4dD1udWxsLGFbc10uaW50ZXJhY3RhYmxlPW51bGwpLGEuc3BsaWNlKHMsMSl9fSl9dmFyIGUsbixyO3JldHVybiBlPXQsKG49W3trZXk6XCJuZXdcIix2YWx1ZTpmdW5jdGlvbih0LGUpe2U9KDAsai5kZWZhdWx0KShlfHx7fSx7YWN0aW9uczp0aGlzLnNjb3BlLmFjdGlvbnN9KTt2YXIgbj1uZXcgdGhpcy5zY29wZS5JbnRlcmFjdGFibGUodCxlLHRoaXMuc2NvcGUuZG9jdW1lbnQsdGhpcy5zY29wZS5ldmVudHMpLHI9e2NvbnRleHQ6bi5fY29udGV4dCxpbnRlcmFjdGFibGU6bn07cmV0dXJuIHRoaXMuc2NvcGUuYWRkRG9jdW1lbnQobi5fZG9jKSx0aGlzLmxpc3QucHVzaChuKSxpLmRlZmF1bHQuc3RyaW5nKHQpPyh0aGlzLnNlbGVjdG9yTWFwW3RdfHwodGhpcy5zZWxlY3Rvck1hcFt0XT1bXSksdGhpcy5zZWxlY3Rvck1hcFt0XS5wdXNoKHIpKToobi50YXJnZXRbdGhpcy5zY29wZS5pZF18fE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LHRoaXMuc2NvcGUuaWQse3ZhbHVlOltdLGNvbmZpZ3VyYWJsZTohMH0pLHRbdGhpcy5zY29wZS5pZF0ucHVzaChyKSksdGhpcy5zY29wZS5maXJlKFwiaW50ZXJhY3RhYmxlOm5ld1wiLHt0YXJnZXQ6dCxvcHRpb25zOmUsaW50ZXJhY3RhYmxlOm4sd2luOnRoaXMuc2NvcGUuX3dpbn0pLG59fSx7a2V5OlwiZ2V0XCIsdmFsdWU6ZnVuY3Rpb24odCxlKXt2YXIgbj1lJiZlLmNvbnRleHR8fHRoaXMuc2NvcGUuZG9jdW1lbnQscj1pLmRlZmF1bHQuc3RyaW5nKHQpLG89cj90aGlzLnNlbGVjdG9yTWFwW3RdOnRbdGhpcy5zY29wZS5pZF07aWYoIW8pcmV0dXJuIG51bGw7dmFyIGE9Sy5maW5kKG8sKGZ1bmN0aW9uKGUpe3JldHVybiBlLmNvbnRleHQ9PT1uJiYocnx8ZS5pbnRlcmFjdGFibGUuaW5Db250ZXh0KHQpKX0pKTtyZXR1cm4gYSYmYS5pbnRlcmFjdGFibGV9fSx7a2V5OlwiZm9yRWFjaE1hdGNoXCIsdmFsdWU6ZnVuY3Rpb24odCxlKXtmb3IodmFyIG49MDtuPHRoaXMubGlzdC5sZW5ndGg7bisrKXt2YXIgcj10aGlzLmxpc3Rbbl0sbz12b2lkIDA7aWYoKGkuZGVmYXVsdC5zdHJpbmcoci50YXJnZXQpP2kuZGVmYXVsdC5lbGVtZW50KHQpJiZfLm1hdGNoZXNTZWxlY3Rvcih0LHIudGFyZ2V0KTp0PT09ci50YXJnZXQpJiZyLmluQ29udGV4dCh0KSYmKG89ZShyKSksdm9pZCAwIT09bylyZXR1cm4gb319fV0pJiZTbihlLnByb3RvdHlwZSxuKSxyJiZTbihlLHIpLHR9KCk7X24uSW50ZXJhY3RhYmxlU2V0PVBuO3ZhciBPbj17fTtmdW5jdGlvbiBFbih0LGUpe2Zvcih2YXIgbj0wO248ZS5sZW5ndGg7bisrKXt2YXIgcj1lW25dO3IuZW51bWVyYWJsZT1yLmVudW1lcmFibGV8fCExLHIuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIHImJihyLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxyLmtleSxyKX19ZnVuY3Rpb24gVG4odCxlKXtyZXR1cm4gZnVuY3Rpb24odCl7aWYoQXJyYXkuaXNBcnJheSh0KSlyZXR1cm4gdH0odCl8fGZ1bmN0aW9uKHQsZSl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFN5bWJvbHx8IShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KHQpKSlyZXR1cm47dmFyIG49W10scj0hMCxvPSExLGk9dm9pZCAwO3RyeXtmb3IodmFyIGEscz10W1N5bWJvbC5pdGVyYXRvcl0oKTshKHI9KGE9cy5uZXh0KCkpLmRvbmUpJiYobi5wdXNoKGEudmFsdWUpLCFlfHxuLmxlbmd0aCE9PWUpO3I9ITApO31jYXRjaCh0KXtvPSEwLGk9dH1maW5hbGx5e3RyeXtyfHxudWxsPT1zLnJldHVybnx8cy5yZXR1cm4oKX1maW5hbGx5e2lmKG8pdGhyb3cgaX19cmV0dXJuIG59KHQsZSl8fGZ1bmN0aW9uKHQsZSl7aWYoIXQpcmV0dXJuO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXJldHVybiBNbih0LGUpO3ZhciBuPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KS5zbGljZSg4LC0xKTtcIk9iamVjdFwiPT09biYmdC5jb25zdHJ1Y3RvciYmKG49dC5jb25zdHJ1Y3Rvci5uYW1lKTtpZihcIk1hcFwiPT09bnx8XCJTZXRcIj09PW4pcmV0dXJuIEFycmF5LmZyb20odCk7aWYoXCJBcmd1bWVudHNcIj09PW58fC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKXJldHVybiBNbih0LGUpfSh0LGUpfHxmdW5jdGlvbigpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIil9KCl9ZnVuY3Rpb24gTW4odCxlKXsobnVsbD09ZXx8ZT50Lmxlbmd0aCkmJihlPXQubGVuZ3RoKTtmb3IodmFyIG49MCxyPUFycmF5KGUpO248ZTtuKyspcltuXT10W25dO3JldHVybiByfU9iamVjdC5kZWZpbmVQcm9wZXJ0eShPbixcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxPbi5kZWZhdWx0PXZvaWQgMDt2YXIgam49ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KGUpeyFmdW5jdGlvbih0LGUpe2lmKCEodCBpbnN0YW5jZW9mIGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9KHRoaXMsdCksdGhpcy5jdXJyZW50VGFyZ2V0PXZvaWQgMCx0aGlzLm9yaWdpbmFsRXZlbnQ9dm9pZCAwLHRoaXMudHlwZT12b2lkIDAsdGhpcy5vcmlnaW5hbEV2ZW50PWUsKDAsRi5kZWZhdWx0KSh0aGlzLGUpfXZhciBlLG4scjtyZXR1cm4gZT10LChuPVt7a2V5OlwicHJldmVudE9yaWdpbmFsRGVmYXVsdFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5vcmlnaW5hbEV2ZW50LnByZXZlbnREZWZhdWx0KCl9fSx7a2V5Olwic3RvcFByb3BhZ2F0aW9uXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLm9yaWdpbmFsRXZlbnQuc3RvcFByb3BhZ2F0aW9uKCl9fSx7a2V5Olwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLm9yaWdpbmFsRXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCl9fV0pJiZFbihlLnByb3RvdHlwZSxuKSxyJiZFbihlLHIpLHR9KCk7ZnVuY3Rpb24ga24odCl7aWYoIWkuZGVmYXVsdC5vYmplY3QodCkpcmV0dXJue2NhcHR1cmU6ISF0LHBhc3NpdmU6ITF9O3ZhciBlPSgwLGouZGVmYXVsdCkoe30sdCk7cmV0dXJuIGUuY2FwdHVyZT0hIXQuY2FwdHVyZSxlLnBhc3NpdmU9ISF0LnBhc3NpdmUsZX12YXIgSW49e2lkOlwiZXZlbnRzXCIsaW5zdGFsbDpmdW5jdGlvbih0KXt2YXIgZT1bXSxuPXt9LHI9W10sbz17YWRkOmEscmVtb3ZlOnMsYWRkRGVsZWdhdGU6ZnVuY3Rpb24odCxlLG8saSxzKXt2YXIgYz1rbihzKTtpZighbltvXSl7bltvXT1bXTtmb3IodmFyIGY9MDtmPHIubGVuZ3RoO2YrKyl7dmFyIGQ9cltmXTthKGQsbyxsKSxhKGQsbyx1LCEwKX19dmFyIHA9bltvXSx2PUsuZmluZChwLChmdW5jdGlvbihuKXtyZXR1cm4gbi5zZWxlY3Rvcj09PXQmJm4uY29udGV4dD09PWV9KSk7dnx8KHY9e3NlbGVjdG9yOnQsY29udGV4dDplLGxpc3RlbmVyczpbXX0scC5wdXNoKHYpKTt2Lmxpc3RlbmVycy5wdXNoKFtpLGNdKX0scmVtb3ZlRGVsZWdhdGU6ZnVuY3Rpb24odCxlLHIsbyxpKXt2YXIgYSxjPWtuKGkpLGY9bltyXSxkPSExO2lmKCFmKXJldHVybjtmb3IoYT1mLmxlbmd0aC0xO2E+PTA7YS0tKXt2YXIgcD1mW2FdO2lmKHAuc2VsZWN0b3I9PT10JiZwLmNvbnRleHQ9PT1lKXtmb3IodmFyIHY9cC5saXN0ZW5lcnMsaD12Lmxlbmd0aC0xO2g+PTA7aC0tKXt2YXIgZz1Ubih2W2hdLDIpLHk9Z1swXSxtPWdbMV0sYj1tLmNhcHR1cmUseD1tLnBhc3NpdmU7aWYoeT09PW8mJmI9PT1jLmNhcHR1cmUmJng9PT1jLnBhc3NpdmUpe3Yuc3BsaWNlKGgsMSksdi5sZW5ndGh8fChmLnNwbGljZShhLDEpLHMoZSxyLGwpLHMoZSxyLHUsITApKSxkPSEwO2JyZWFrfX1pZihkKWJyZWFrfX19LGRlbGVnYXRlTGlzdGVuZXI6bCxkZWxlZ2F0ZVVzZUNhcHR1cmU6dSxkZWxlZ2F0ZWRFdmVudHM6bixkb2N1bWVudHM6cix0YXJnZXRzOmUsc3VwcG9ydHNPcHRpb25zOiExLHN1cHBvcnRzUGFzc2l2ZTohMX07ZnVuY3Rpb24gYSh0LG4scixpKXt2YXIgYT1rbihpKSxzPUsuZmluZChlLChmdW5jdGlvbihlKXtyZXR1cm4gZS5ldmVudFRhcmdldD09PXR9KSk7c3x8KHM9e2V2ZW50VGFyZ2V0OnQsZXZlbnRzOnt9fSxlLnB1c2gocykpLHMuZXZlbnRzW25dfHwocy5ldmVudHNbbl09W10pLHQuYWRkRXZlbnRMaXN0ZW5lciYmIUsuY29udGFpbnMocy5ldmVudHNbbl0scikmJih0LmFkZEV2ZW50TGlzdGVuZXIobixyLG8uc3VwcG9ydHNPcHRpb25zP2E6YS5jYXB0dXJlKSxzLmV2ZW50c1tuXS5wdXNoKHIpKX1mdW5jdGlvbiBzKHQsbixyLGkpe3ZhciBhPWtuKGkpLGw9Sy5maW5kSW5kZXgoZSwoZnVuY3Rpb24oZSl7cmV0dXJuIGUuZXZlbnRUYXJnZXQ9PT10fSkpLHU9ZVtsXTtpZih1JiZ1LmV2ZW50cylpZihcImFsbFwiIT09bil7dmFyIGM9ITEsZj11LmV2ZW50c1tuXTtpZihmKXtpZihcImFsbFwiPT09cil7Zm9yKHZhciBkPWYubGVuZ3RoLTE7ZD49MDtkLS0pcyh0LG4sZltkXSxhKTtyZXR1cm59Zm9yKHZhciBwPTA7cDxmLmxlbmd0aDtwKyspaWYoZltwXT09PXIpe3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihuLHIsby5zdXBwb3J0c09wdGlvbnM/YTphLmNhcHR1cmUpLGYuc3BsaWNlKHAsMSksMD09PWYubGVuZ3RoJiYoZGVsZXRlIHUuZXZlbnRzW25dLGM9ITApO2JyZWFrfX1jJiYhT2JqZWN0LmtleXModS5ldmVudHMpLmxlbmd0aCYmZS5zcGxpY2UobCwxKX1lbHNlIGZvcihuIGluIHUuZXZlbnRzKXUuZXZlbnRzLmhhc093blByb3BlcnR5KG4pJiZzKHQsbixcImFsbFwiKX1mdW5jdGlvbiBsKHQsZSl7Zm9yKHZhciByPWtuKGUpLG89bmV3IGpuKHQpLGE9blt0LnR5cGVdLHM9VG4oVy5nZXRFdmVudFRhcmdldHModCksMSlbMF0sbD1zO2kuZGVmYXVsdC5lbGVtZW50KGwpOyl7Zm9yKHZhciB1PTA7dTxhLmxlbmd0aDt1Kyspe3ZhciBjPWFbdV0sZj1jLnNlbGVjdG9yLGQ9Yy5jb250ZXh0O2lmKF8ubWF0Y2hlc1NlbGVjdG9yKGwsZikmJl8ubm9kZUNvbnRhaW5zKGQscykmJl8ubm9kZUNvbnRhaW5zKGQsbCkpe3ZhciBwPWMubGlzdGVuZXJzO28uY3VycmVudFRhcmdldD1sO2Zvcih2YXIgdj0wO3Y8cC5sZW5ndGg7disrKXt2YXIgaD1UbihwW3ZdLDIpLGc9aFswXSx5PWhbMV0sbT15LmNhcHR1cmUsYj15LnBhc3NpdmU7bT09PXIuY2FwdHVyZSYmYj09PXIucGFzc2l2ZSYmZyhvKX19fWw9Xy5wYXJlbnROb2RlKGwpfX1mdW5jdGlvbiB1KHQpe3JldHVybiBsKHQsITApfXJldHVybiB0LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikuYWRkRXZlbnRMaXN0ZW5lcihcInRlc3RcIixudWxsLHtnZXQgY2FwdHVyZSgpe3JldHVybiBvLnN1cHBvcnRzT3B0aW9ucz0hMH0sZ2V0IHBhc3NpdmUoKXtyZXR1cm4gby5zdXBwb3J0c1Bhc3NpdmU9ITB9fSksdC5ldmVudHM9byxvfX07T24uZGVmYXVsdD1Jbjt2YXIgRG49e307T2JqZWN0LmRlZmluZVByb3BlcnR5KERuLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLERuLmNyZWF0ZUludGVyYWN0U3RhdGljPWZ1bmN0aW9uKHQpe3ZhciBlPWZ1bmN0aW9uIGUobixyKXt2YXIgbz10LmludGVyYWN0YWJsZXMuZ2V0KG4scik7cmV0dXJuIG98fCgobz10LmludGVyYWN0YWJsZXMubmV3KG4scikpLmV2ZW50cy5nbG9iYWw9ZS5nbG9iYWxFdmVudHMpLG99O3JldHVybiBlLmdldFBvaW50ZXJBdmVyYWdlPVcucG9pbnRlckF2ZXJhZ2UsZS5nZXRUb3VjaEJCb3g9Vy50b3VjaEJCb3gsZS5nZXRUb3VjaERpc3RhbmNlPVcudG91Y2hEaXN0YW5jZSxlLmdldFRvdWNoQW5nbGU9Vy50b3VjaEFuZ2xlLGUuZ2V0RWxlbWVudFJlY3Q9Xy5nZXRFbGVtZW50UmVjdCxlLmdldEVsZW1lbnRDbGllbnRSZWN0PV8uZ2V0RWxlbWVudENsaWVudFJlY3QsZS5tYXRjaGVzU2VsZWN0b3I9Xy5tYXRjaGVzU2VsZWN0b3IsZS5jbG9zZXN0PV8uY2xvc2VzdCxlLmdsb2JhbEV2ZW50cz17fSxlLnZlcnNpb249dm9pZCAwLGUuc2NvcGU9dCxlLnVzZT1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLnNjb3BlLnVzZVBsdWdpbih0LGUpLHRoaXN9LGUuaXNTZXQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4hIXRoaXMuc2NvcGUuaW50ZXJhY3RhYmxlcy5nZXQodCxlJiZlLmNvbnRleHQpfSxlLm9uPWZ1bmN0aW9uKHQsZSxuKXtpZihpLmRlZmF1bHQuc3RyaW5nKHQpJiYtMSE9PXQuc2VhcmNoKFwiIFwiKSYmKHQ9dC50cmltKCkuc3BsaXQoLyArLykpLGkuZGVmYXVsdC5hcnJheSh0KSl7Zm9yKHZhciByPTA7cjx0Lmxlbmd0aDtyKyspe3ZhciBvPXRbcl07dGhpcy5vbihvLGUsbil9cmV0dXJuIHRoaXN9aWYoaS5kZWZhdWx0Lm9iamVjdCh0KSl7Zm9yKHZhciBhIGluIHQpdGhpcy5vbihhLHRbYV0sZSk7cmV0dXJuIHRoaXN9cmV0dXJuKDAseW4uZGVmYXVsdCkodCx0aGlzLnNjb3BlLmFjdGlvbnMpP3RoaXMuZ2xvYmFsRXZlbnRzW3RdP3RoaXMuZ2xvYmFsRXZlbnRzW3RdLnB1c2goZSk6dGhpcy5nbG9iYWxFdmVudHNbdF09W2VdOnRoaXMuc2NvcGUuZXZlbnRzLmFkZCh0aGlzLnNjb3BlLmRvY3VtZW50LHQsZSx7b3B0aW9uczpufSksdGhpc30sZS5vZmY9ZnVuY3Rpb24odCxlLG4pe2lmKGkuZGVmYXVsdC5zdHJpbmcodCkmJi0xIT09dC5zZWFyY2goXCIgXCIpJiYodD10LnRyaW0oKS5zcGxpdCgvICsvKSksaS5kZWZhdWx0LmFycmF5KHQpKXtmb3IodmFyIHI9MDtyPHQubGVuZ3RoO3IrKyl7dmFyIG89dFtyXTt0aGlzLm9mZihvLGUsbil9cmV0dXJuIHRoaXN9aWYoaS5kZWZhdWx0Lm9iamVjdCh0KSl7Zm9yKHZhciBhIGluIHQpdGhpcy5vZmYoYSx0W2FdLGUpO3JldHVybiB0aGlzfXZhciBzOygwLHluLmRlZmF1bHQpKHQsdGhpcy5zY29wZS5hY3Rpb25zKT90IGluIHRoaXMuZ2xvYmFsRXZlbnRzJiYtMSE9PShzPXRoaXMuZ2xvYmFsRXZlbnRzW3RdLmluZGV4T2YoZSkpJiZ0aGlzLmdsb2JhbEV2ZW50c1t0XS5zcGxpY2UocywxKTp0aGlzLnNjb3BlLmV2ZW50cy5yZW1vdmUodGhpcy5zY29wZS5kb2N1bWVudCx0LGUsbik7cmV0dXJuIHRoaXN9LGUuZGVidWc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zY29wZX0sZS5zdXBwb3J0c1RvdWNoPWZ1bmN0aW9uKCl7cmV0dXJuIGIuZGVmYXVsdC5zdXBwb3J0c1RvdWNofSxlLnN1cHBvcnRzUG9pbnRlckV2ZW50PWZ1bmN0aW9uKCl7cmV0dXJuIGIuZGVmYXVsdC5zdXBwb3J0c1BvaW50ZXJFdmVudH0sZS5zdG9wPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PTA7dDx0aGlzLnNjb3BlLmludGVyYWN0aW9ucy5saXN0Lmxlbmd0aDt0Kyspe3RoaXMuc2NvcGUuaW50ZXJhY3Rpb25zLmxpc3RbdF0uc3RvcCgpfXJldHVybiB0aGlzfSxlLnBvaW50ZXJNb3ZlVG9sZXJhbmNlPWZ1bmN0aW9uKHQpe3JldHVybiBpLmRlZmF1bHQubnVtYmVyKHQpPyh0aGlzLnNjb3BlLmludGVyYWN0aW9ucy5wb2ludGVyTW92ZVRvbGVyYW5jZT10LHRoaXMpOnRoaXMuc2NvcGUuaW50ZXJhY3Rpb25zLnBvaW50ZXJNb3ZlVG9sZXJhbmNlfSxlLmFkZERvY3VtZW50PWZ1bmN0aW9uKHQsZSl7dGhpcy5zY29wZS5hZGREb2N1bWVudCh0LGUpfSxlLnJlbW92ZURvY3VtZW50PWZ1bmN0aW9uKHQpe3RoaXMuc2NvcGUucmVtb3ZlRG9jdW1lbnQodCl9LGV9O3ZhciBBbj17fTtPYmplY3QuZGVmaW5lUHJvcGVydHkoQW4sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksQW4uZGVmYXVsdD12b2lkIDA7dmFyIHpuPXttZXRob2RPcmRlcjpbXCJzaW11bGF0aW9uUmVzdW1lXCIsXCJtb3VzZU9yUGVuXCIsXCJoYXNQb2ludGVyXCIsXCJpZGxlXCJdLHNlYXJjaDpmdW5jdGlvbih0KXtmb3IodmFyIGU9MDtlPHpuLm1ldGhvZE9yZGVyLmxlbmd0aDtlKyspe3ZhciBuO249em4ubWV0aG9kT3JkZXJbZV07dmFyIHI9em5bbl0odCk7aWYocilyZXR1cm4gcn1yZXR1cm4gbnVsbH0sc2ltdWxhdGlvblJlc3VtZTpmdW5jdGlvbih0KXt2YXIgZT10LnBvaW50ZXJUeXBlLG49dC5ldmVudFR5cGUscj10LmV2ZW50VGFyZ2V0LG89dC5zY29wZTtpZighL2Rvd258c3RhcnQvaS50ZXN0KG4pKXJldHVybiBudWxsO2Zvcih2YXIgaT0wO2k8by5pbnRlcmFjdGlvbnMubGlzdC5sZW5ndGg7aSsrKXt2YXIgYT1vLmludGVyYWN0aW9ucy5saXN0W2ldLHM9cjtpZihhLnNpbXVsYXRpb24mJmEuc2ltdWxhdGlvbi5hbGxvd1Jlc3VtZSYmYS5wb2ludGVyVHlwZT09PWUpZm9yKDtzOyl7aWYocz09PWEuZWxlbWVudClyZXR1cm4gYTtzPV8ucGFyZW50Tm9kZShzKX19cmV0dXJuIG51bGx9LG1vdXNlT3JQZW46ZnVuY3Rpb24odCl7dmFyIGUsbj10LnBvaW50ZXJJZCxyPXQucG9pbnRlclR5cGUsbz10LmV2ZW50VHlwZSxpPXQuc2NvcGU7aWYoXCJtb3VzZVwiIT09ciYmXCJwZW5cIiE9PXIpcmV0dXJuIG51bGw7Zm9yKHZhciBhPTA7YTxpLmludGVyYWN0aW9ucy5saXN0Lmxlbmd0aDthKyspe3ZhciBzPWkuaW50ZXJhY3Rpb25zLmxpc3RbYV07aWYocy5wb2ludGVyVHlwZT09PXIpe2lmKHMuc2ltdWxhdGlvbiYmIUNuKHMsbikpY29udGludWU7aWYocy5pbnRlcmFjdGluZygpKXJldHVybiBzO2V8fChlPXMpfX1pZihlKXJldHVybiBlO2Zvcih2YXIgbD0wO2w8aS5pbnRlcmFjdGlvbnMubGlzdC5sZW5ndGg7bCsrKXt2YXIgdT1pLmludGVyYWN0aW9ucy5saXN0W2xdO2lmKCEodS5wb2ludGVyVHlwZSE9PXJ8fC9kb3duL2kudGVzdChvKSYmdS5zaW11bGF0aW9uKSlyZXR1cm4gdX1yZXR1cm4gbnVsbH0saGFzUG9pbnRlcjpmdW5jdGlvbih0KXtmb3IodmFyIGU9dC5wb2ludGVySWQsbj10LnNjb3BlLHI9MDtyPG4uaW50ZXJhY3Rpb25zLmxpc3QubGVuZ3RoO3IrKyl7dmFyIG89bi5pbnRlcmFjdGlvbnMubGlzdFtyXTtpZihDbihvLGUpKXJldHVybiBvfXJldHVybiBudWxsfSxpZGxlOmZ1bmN0aW9uKHQpe2Zvcih2YXIgZT10LnBvaW50ZXJUeXBlLG49dC5zY29wZSxyPTA7cjxuLmludGVyYWN0aW9ucy5saXN0Lmxlbmd0aDtyKyspe3ZhciBvPW4uaW50ZXJhY3Rpb25zLmxpc3Rbcl07aWYoMT09PW8ucG9pbnRlcnMubGVuZ3RoKXt2YXIgaT1vLmludGVyYWN0YWJsZTtpZihpJiYoIWkub3B0aW9ucy5nZXN0dXJlfHwhaS5vcHRpb25zLmdlc3R1cmUuZW5hYmxlZCkpY29udGludWV9ZWxzZSBpZihvLnBvaW50ZXJzLmxlbmd0aD49Miljb250aW51ZTtpZighby5pbnRlcmFjdGluZygpJiZlPT09by5wb2ludGVyVHlwZSlyZXR1cm4gb31yZXR1cm4gbnVsbH19O2Z1bmN0aW9uIENuKHQsZSl7cmV0dXJuIHQucG9pbnRlcnMuc29tZSgoZnVuY3Rpb24odCl7cmV0dXJuIHQuaWQ9PT1lfSkpfXZhciBSbj16bjtBbi5kZWZhdWx0PVJuO3ZhciBGbj17fTtmdW5jdGlvbiBYbih0KXtyZXR1cm4oWG49XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKHQpe3JldHVybiB0eXBlb2YgdH06ZnVuY3Rpb24odCl7cmV0dXJuIHQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmdC5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmdCE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgdH0pKHQpfWZ1bmN0aW9uIFluKHQsZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe2lmKEFycmF5LmlzQXJyYXkodCkpcmV0dXJuIHR9KHQpfHxmdW5jdGlvbih0LGUpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBTeW1ib2x8fCEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdCh0KSkpcmV0dXJuO3ZhciBuPVtdLHI9ITAsbz0hMSxpPXZvaWQgMDt0cnl7Zm9yKHZhciBhLHM9dFtTeW1ib2wuaXRlcmF0b3JdKCk7IShyPShhPXMubmV4dCgpKS5kb25lKSYmKG4ucHVzaChhLnZhbHVlKSwhZXx8bi5sZW5ndGghPT1lKTtyPSEwKTt9Y2F0Y2godCl7bz0hMCxpPXR9ZmluYWxseXt0cnl7cnx8bnVsbD09cy5yZXR1cm58fHMucmV0dXJuKCl9ZmluYWxseXtpZihvKXRocm93IGl9fXJldHVybiBufSh0LGUpfHxmdW5jdGlvbih0LGUpe2lmKCF0KXJldHVybjtpZihcInN0cmluZ1wiPT10eXBlb2YgdClyZXR1cm4gV24odCxlKTt2YXIgbj1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCkuc2xpY2UoOCwtMSk7XCJPYmplY3RcIj09PW4mJnQuY29uc3RydWN0b3ImJihuPXQuY29uc3RydWN0b3IubmFtZSk7aWYoXCJNYXBcIj09PW58fFwiU2V0XCI9PT1uKXJldHVybiBBcnJheS5mcm9tKHQpO2lmKFwiQXJndW1lbnRzXCI9PT1ufHwvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSlyZXR1cm4gV24odCxlKX0odCxlKXx8ZnVuY3Rpb24oKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpfSgpfWZ1bmN0aW9uIFduKHQsZSl7KG51bGw9PWV8fGU+dC5sZW5ndGgpJiYoZT10Lmxlbmd0aCk7Zm9yKHZhciBuPTAscj1BcnJheShlKTtuPGU7bisrKXJbbl09dFtuXTtyZXR1cm4gcn1mdW5jdGlvbiBMbih0LGUpe2lmKCEodCBpbnN0YW5jZW9mIGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9ZnVuY3Rpb24gQm4odCxlKXtmb3IodmFyIG49MDtuPGUubGVuZ3RoO24rKyl7dmFyIHI9ZVtuXTtyLmVudW1lcmFibGU9ci5lbnVtZXJhYmxlfHwhMSxyLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiByJiYoci53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsci5rZXkscil9fWZ1bmN0aW9uIFVuKHQsZSl7cmV0dXJuKFVuPU9iamVjdC5zZXRQcm90b3R5cGVPZnx8ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC5fX3Byb3RvX189ZSx0fSkodCxlKX1mdW5jdGlvbiBObih0KXt2YXIgZT1mdW5jdGlvbigpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBSZWZsZWN0fHwhUmVmbGVjdC5jb25zdHJ1Y3QpcmV0dXJuITE7aWYoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSlyZXR1cm4hMTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm94eSlyZXR1cm4hMDt0cnl7cmV0dXJuIERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSxbXSwoZnVuY3Rpb24oKXt9KSkpLCEwfWNhdGNoKHQpe3JldHVybiExfX0oKTtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgbixyPXFuKHQpO2lmKGUpe3ZhciBvPXFuKHRoaXMpLmNvbnN0cnVjdG9yO249UmVmbGVjdC5jb25zdHJ1Y3Qocixhcmd1bWVudHMsbyl9ZWxzZSBuPXIuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiBWbih0aGlzLG4pfX1mdW5jdGlvbiBWbih0LGUpe3JldHVybiFlfHxcIm9iamVjdFwiIT09WG4oZSkmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGU/ZnVuY3Rpb24odCl7aWYodm9pZCAwPT09dCl0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7cmV0dXJuIHR9KHQpOmV9ZnVuY3Rpb24gcW4odCl7cmV0dXJuKHFuPU9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3QuZ2V0UHJvdG90eXBlT2Y6ZnVuY3Rpb24odCl7cmV0dXJuIHQuX19wcm90b19ffHxPYmplY3QuZ2V0UHJvdG90eXBlT2YodCl9KSh0KX1PYmplY3QuZGVmaW5lUHJvcGVydHkoRm4sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksRm4uZGVmYXVsdD12b2lkIDA7dmFyICRuPVtcInBvaW50ZXJEb3duXCIsXCJwb2ludGVyTW92ZVwiLFwicG9pbnRlclVwXCIsXCJ1cGRhdGVQb2ludGVyXCIsXCJyZW1vdmVQb2ludGVyXCIsXCJ3aW5kb3dCbHVyXCJdO2Z1bmN0aW9uIEduKHQsZSl7cmV0dXJuIGZ1bmN0aW9uKG4pe3ZhciByPWUuaW50ZXJhY3Rpb25zLmxpc3Qsbz1XLmdldFBvaW50ZXJUeXBlKG4pLGk9WW4oVy5nZXRFdmVudFRhcmdldHMobiksMiksYT1pWzBdLHM9aVsxXSxsPVtdO2lmKC9edG91Y2gvLnRlc3Qobi50eXBlKSl7ZS5wcmV2VG91Y2hUaW1lPWUubm93KCk7Zm9yKHZhciB1PTA7dTxuLmNoYW5nZWRUb3VjaGVzLmxlbmd0aDt1Kyspe3ZhciBjPW4uY2hhbmdlZFRvdWNoZXNbdV0sZj17cG9pbnRlcjpjLHBvaW50ZXJJZDpXLmdldFBvaW50ZXJJZChjKSxwb2ludGVyVHlwZTpvLGV2ZW50VHlwZTpuLnR5cGUsZXZlbnRUYXJnZXQ6YSxjdXJFdmVudFRhcmdldDpzLHNjb3BlOmV9LGQ9SG4oZik7bC5wdXNoKFtmLnBvaW50ZXIsZi5ldmVudFRhcmdldCxmLmN1ckV2ZW50VGFyZ2V0LGRdKX19ZWxzZXt2YXIgcD0hMTtpZighYi5kZWZhdWx0LnN1cHBvcnRzUG9pbnRlckV2ZW50JiYvbW91c2UvLnRlc3Qobi50eXBlKSl7Zm9yKHZhciB2PTA7djxyLmxlbmd0aCYmIXA7disrKXA9XCJtb3VzZVwiIT09clt2XS5wb2ludGVyVHlwZSYmclt2XS5wb2ludGVySXNEb3duO3A9cHx8ZS5ub3coKS1lLnByZXZUb3VjaFRpbWU8NTAwfHwwPT09bi50aW1lU3RhbXB9aWYoIXApe3ZhciBoPXtwb2ludGVyOm4scG9pbnRlcklkOlcuZ2V0UG9pbnRlcklkKG4pLHBvaW50ZXJUeXBlOm8sZXZlbnRUeXBlOm4udHlwZSxjdXJFdmVudFRhcmdldDpzLGV2ZW50VGFyZ2V0OmEsc2NvcGU6ZX0sZz1IbihoKTtsLnB1c2goW2gucG9pbnRlcixoLmV2ZW50VGFyZ2V0LGguY3VyRXZlbnRUYXJnZXQsZ10pfX1mb3IodmFyIHk9MDt5PGwubGVuZ3RoO3krKyl7dmFyIG09WW4obFt5XSw0KSx4PW1bMF0sdz1tWzFdLF89bVsyXTttWzNdW3RdKHgsbix3LF8pfX19ZnVuY3Rpb24gSG4odCl7dmFyIGU9dC5wb2ludGVyVHlwZSxuPXQuc2NvcGUscj17aW50ZXJhY3Rpb246QW4uZGVmYXVsdC5zZWFyY2godCksc2VhcmNoRGV0YWlsczp0fTtyZXR1cm4gbi5maXJlKFwiaW50ZXJhY3Rpb25zOmZpbmRcIixyKSxyLmludGVyYWN0aW9ufHxuLmludGVyYWN0aW9ucy5uZXcoe3BvaW50ZXJUeXBlOmV9KX1mdW5jdGlvbiBLbih0LGUpe3ZhciBuPXQuZG9jLHI9dC5zY29wZSxvPXQub3B0aW9ucyxpPXIuaW50ZXJhY3Rpb25zLmRvY0V2ZW50cyxhPXIuZXZlbnRzLHM9YVtlXTtmb3IodmFyIGwgaW4gci5icm93c2VyLmlzSU9TJiYhby5ldmVudHMmJihvLmV2ZW50cz17cGFzc2l2ZTohMX0pLGEuZGVsZWdhdGVkRXZlbnRzKXMobixsLGEuZGVsZWdhdGVMaXN0ZW5lcikscyhuLGwsYS5kZWxlZ2F0ZVVzZUNhcHR1cmUsITApO2Zvcih2YXIgdT1vJiZvLmV2ZW50cyxjPTA7YzxpLmxlbmd0aDtjKyspe3ZhciBmPWlbY107cyhuLGYudHlwZSxmLmxpc3RlbmVyLHUpfX12YXIgWm49e2lkOlwiY29yZS9pbnRlcmFjdGlvbnNcIixpbnN0YWxsOmZ1bmN0aW9uKHQpe2Zvcih2YXIgZT17fSxuPTA7bjwkbi5sZW5ndGg7bisrKXt2YXIgcj0kbltuXTtlW3JdPUduKHIsdCl9dmFyIG8saT1iLmRlZmF1bHQucEV2ZW50VHlwZXM7ZnVuY3Rpb24gYSgpe2Zvcih2YXIgZT0wO2U8dC5pbnRlcmFjdGlvbnMubGlzdC5sZW5ndGg7ZSsrKXt2YXIgbj10LmludGVyYWN0aW9ucy5saXN0W2VdO2lmKG4ucG9pbnRlcklzRG93biYmXCJ0b3VjaFwiPT09bi5wb2ludGVyVHlwZSYmIW4uX2ludGVyYWN0aW5nKWZvcih2YXIgcj1mdW5jdGlvbigpe3ZhciBlPW4ucG9pbnRlcnNbb107dC5kb2N1bWVudHMuc29tZSgoZnVuY3Rpb24odCl7dmFyIG49dC5kb2M7cmV0dXJuKDAsXy5ub2RlQ29udGFpbnMpKG4sZS5kb3duVGFyZ2V0KX0pKXx8bi5yZW1vdmVQb2ludGVyKGUucG9pbnRlcixlLmV2ZW50KX0sbz0wO288bi5wb2ludGVycy5sZW5ndGg7bysrKXtyKCl9fX0obz1oLmRlZmF1bHQuUG9pbnRlckV2ZW50P1t7dHlwZTppLmRvd24sbGlzdGVuZXI6YX0se3R5cGU6aS5kb3duLGxpc3RlbmVyOmUucG9pbnRlckRvd259LHt0eXBlOmkubW92ZSxsaXN0ZW5lcjplLnBvaW50ZXJNb3ZlfSx7dHlwZTppLnVwLGxpc3RlbmVyOmUucG9pbnRlclVwfSx7dHlwZTppLmNhbmNlbCxsaXN0ZW5lcjplLnBvaW50ZXJVcH1dOlt7dHlwZTpcIm1vdXNlZG93blwiLGxpc3RlbmVyOmUucG9pbnRlckRvd259LHt0eXBlOlwibW91c2Vtb3ZlXCIsbGlzdGVuZXI6ZS5wb2ludGVyTW92ZX0se3R5cGU6XCJtb3VzZXVwXCIsbGlzdGVuZXI6ZS5wb2ludGVyVXB9LHt0eXBlOlwidG91Y2hzdGFydFwiLGxpc3RlbmVyOmF9LHt0eXBlOlwidG91Y2hzdGFydFwiLGxpc3RlbmVyOmUucG9pbnRlckRvd259LHt0eXBlOlwidG91Y2htb3ZlXCIsbGlzdGVuZXI6ZS5wb2ludGVyTW92ZX0se3R5cGU6XCJ0b3VjaGVuZFwiLGxpc3RlbmVyOmUucG9pbnRlclVwfSx7dHlwZTpcInRvdWNoY2FuY2VsXCIsbGlzdGVuZXI6ZS5wb2ludGVyVXB9XSkucHVzaCh7dHlwZTpcImJsdXJcIixsaXN0ZW5lcjpmdW5jdGlvbihlKXtmb3IodmFyIG49MDtuPHQuaW50ZXJhY3Rpb25zLmxpc3QubGVuZ3RoO24rKyl7dC5pbnRlcmFjdGlvbnMubGlzdFtuXS5kb2N1bWVudEJsdXIoZSl9fX0pLHQucHJldlRvdWNoVGltZT0wLHQuSW50ZXJhY3Rpb249ZnVuY3Rpb24oZSl7IWZ1bmN0aW9uKHQsZSl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSYmbnVsbCE9PWUpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO3QucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoZSYmZS5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTp0LHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH19KSxlJiZVbih0LGUpfShhLGUpO3ZhciBuLHIsbyxpPU5uKGEpO2Z1bmN0aW9uIGEoKXtyZXR1cm4gTG4odGhpcyxhKSxpLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1yZXR1cm4gbj1hLChyPVt7a2V5OlwiX25vd1wiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHQubm93KCl9fSx7a2V5OlwicG9pbnRlck1vdmVUb2xlcmFuY2VcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdC5pbnRlcmFjdGlvbnMucG9pbnRlck1vdmVUb2xlcmFuY2V9LHNldDpmdW5jdGlvbihlKXt0LmludGVyYWN0aW9ucy5wb2ludGVyTW92ZVRvbGVyYW5jZT1lfX1dKSYmQm4obi5wcm90b3R5cGUsciksbyYmQm4obixvKSxhfShxZS5kZWZhdWx0KSx0LmludGVyYWN0aW9ucz17bGlzdDpbXSxuZXc6ZnVuY3Rpb24oZSl7ZS5zY29wZUZpcmU9ZnVuY3Rpb24oZSxuKXtyZXR1cm4gdC5maXJlKGUsbil9O3ZhciBuPW5ldyB0LkludGVyYWN0aW9uKGUpO3JldHVybiB0LmludGVyYWN0aW9ucy5saXN0LnB1c2gobiksbn0sbGlzdGVuZXJzOmUsZG9jRXZlbnRzOm8scG9pbnRlck1vdmVUb2xlcmFuY2U6MX0sdC51c2VQbHVnaW4oc2UuZGVmYXVsdCl9LGxpc3RlbmVyczp7XCJzY29wZTphZGQtZG9jdW1lbnRcIjpmdW5jdGlvbih0KXtyZXR1cm4gS24odCxcImFkZFwiKX0sXCJzY29wZTpyZW1vdmUtZG9jdW1lbnRcIjpmdW5jdGlvbih0KXtyZXR1cm4gS24odCxcInJlbW92ZVwiKX0sXCJpbnRlcmFjdGFibGU6dW5zZXRcIjpmdW5jdGlvbih0LGUpe2Zvcih2YXIgbj10LmludGVyYWN0YWJsZSxyPWUuaW50ZXJhY3Rpb25zLmxpc3QubGVuZ3RoLTE7cj49MDtyLS0pe3ZhciBvPWUuaW50ZXJhY3Rpb25zLmxpc3Rbcl07by5pbnRlcmFjdGFibGU9PT1uJiYoby5zdG9wKCksZS5maXJlKFwiaW50ZXJhY3Rpb25zOmRlc3Ryb3lcIix7aW50ZXJhY3Rpb246b30pLG8uZGVzdHJveSgpLGUuaW50ZXJhY3Rpb25zLmxpc3QubGVuZ3RoPjImJmUuaW50ZXJhY3Rpb25zLmxpc3Quc3BsaWNlKHIsMSkpfX19LG9uRG9jU2lnbmFsOktuLGRvT25JbnRlcmFjdGlvbnM6R24sbWV0aG9kTmFtZXM6JG59O0ZuLmRlZmF1bHQ9Wm47dmFyIEpuPXt9O2Z1bmN0aW9uIFFuKHQpe3JldHVybihRbj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24odCl7cmV0dXJuIHR5cGVvZiB0fTpmdW5jdGlvbih0KXtyZXR1cm4gdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZ0LmNvbnN0cnVjdG9yPT09U3ltYm9sJiZ0IT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiB0fSkodCl9ZnVuY3Rpb24gdHIodCxlLG4pe3JldHVybih0cj1cInVuZGVmaW5lZFwiIT10eXBlb2YgUmVmbGVjdCYmUmVmbGVjdC5nZXQ/UmVmbGVjdC5nZXQ6ZnVuY3Rpb24odCxlLG4pe3ZhciByPWZ1bmN0aW9uKHQsZSl7Zm9yKDshT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSkmJm51bGwhPT0odD1vcih0KSk7KTtyZXR1cm4gdH0odCxlKTtpZihyKXt2YXIgbz1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHIsZSk7cmV0dXJuIG8uZ2V0P28uZ2V0LmNhbGwobik6by52YWx1ZX19KSh0LGUsbnx8dCl9ZnVuY3Rpb24gZXIodCxlKXtyZXR1cm4oZXI9T2JqZWN0LnNldFByb3RvdHlwZU9mfHxmdW5jdGlvbih0LGUpe3JldHVybiB0Ll9fcHJvdG9fXz1lLHR9KSh0LGUpfWZ1bmN0aW9uIG5yKHQpe3ZhciBlPWZ1bmN0aW9uKCl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFJlZmxlY3R8fCFSZWZsZWN0LmNvbnN0cnVjdClyZXR1cm4hMTtpZihSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKXJldHVybiExO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIFByb3h5KXJldHVybiEwO3RyeXtyZXR1cm4gRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLFtdLChmdW5jdGlvbigpe30pKSksITB9Y2F0Y2godCl7cmV0dXJuITF9fSgpO3JldHVybiBmdW5jdGlvbigpe3ZhciBuLHI9b3IodCk7aWYoZSl7dmFyIG89b3IodGhpcykuY29uc3RydWN0b3I7bj1SZWZsZWN0LmNvbnN0cnVjdChyLGFyZ3VtZW50cyxvKX1lbHNlIG49ci5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHJyKHRoaXMsbil9fWZ1bmN0aW9uIHJyKHQsZSl7cmV0dXJuIWV8fFwib2JqZWN0XCIhPT1RbihlKSYmXCJmdW5jdGlvblwiIT10eXBlb2YgZT9mdW5jdGlvbih0KXtpZih2b2lkIDA9PT10KXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4gdH0odCk6ZX1mdW5jdGlvbiBvcih0KXtyZXR1cm4ob3I9T2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5nZXRQcm90b3R5cGVPZjpmdW5jdGlvbih0KXtyZXR1cm4gdC5fX3Byb3RvX198fE9iamVjdC5nZXRQcm90b3R5cGVPZih0KX0pKHQpfWZ1bmN0aW9uIGlyKHQsZSl7aWYoISh0IGluc3RhbmNlb2YgZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1mdW5jdGlvbiBhcih0LGUpe2Zvcih2YXIgbj0wO248ZS5sZW5ndGg7bisrKXt2YXIgcj1lW25dO3IuZW51bWVyYWJsZT1yLmVudW1lcmFibGV8fCExLHIuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIHImJihyLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxyLmtleSxyKX19ZnVuY3Rpb24gc3IodCxlLG4pe3JldHVybiBlJiZhcih0LnByb3RvdHlwZSxlKSxuJiZhcih0LG4pLHR9T2JqZWN0LmRlZmluZVByb3BlcnR5KEpuLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLEpuLmluaXRTY29wZT11cixKbi5TY29wZT12b2lkIDA7dmFyIGxyPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe3ZhciBlPXRoaXM7aXIodGhpcyx0KSx0aGlzLmlkPVwiX19pbnRlcmFjdF9zY29wZV9cIi5jb25jYXQoTWF0aC5mbG9vcigxMDAqTWF0aC5yYW5kb20oKSkpLHRoaXMuaXNJbml0aWFsaXplZD0hMSx0aGlzLmxpc3RlbmVyTWFwcz1bXSx0aGlzLmJyb3dzZXI9Yi5kZWZhdWx0LHRoaXMuZGVmYXVsdHM9KDAsX2UuZGVmYXVsdCkoQWUuZGVmYXVsdHMpLHRoaXMuRXZlbnRhYmxlPXBuLkV2ZW50YWJsZSx0aGlzLmFjdGlvbnM9e21hcDp7fSxwaGFzZXM6e3N0YXJ0OiEwLG1vdmU6ITAsZW5kOiEwfSxtZXRob2REaWN0Ont9LHBoYXNlbGVzc1R5cGVzOnt9fSx0aGlzLmludGVyYWN0U3RhdGljPSgwLERuLmNyZWF0ZUludGVyYWN0U3RhdGljKSh0aGlzKSx0aGlzLkludGVyYWN0RXZlbnQ9emUuSW50ZXJhY3RFdmVudCx0aGlzLkludGVyYWN0YWJsZT12b2lkIDAsdGhpcy5pbnRlcmFjdGFibGVzPW5ldyBfbi5JbnRlcmFjdGFibGVTZXQodGhpcyksdGhpcy5fd2luPXZvaWQgMCx0aGlzLmRvY3VtZW50PXZvaWQgMCx0aGlzLndpbmRvdz12b2lkIDAsdGhpcy5kb2N1bWVudHM9W10sdGhpcy5fcGx1Z2lucz17bGlzdDpbXSxtYXA6e319LHRoaXMub25XaW5kb3dVbmxvYWQ9ZnVuY3Rpb24odCl7cmV0dXJuIGUucmVtb3ZlRG9jdW1lbnQodC50YXJnZXQpfTt2YXIgbj10aGlzO3RoaXMuSW50ZXJhY3RhYmxlPWZ1bmN0aW9uKHQpeyFmdW5jdGlvbih0LGUpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUmJm51bGwhPT1lKXRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTt0LnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGUmJmUucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6dCx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSksZSYmZXIodCxlKX0ocix0KTt2YXIgZT1ucihyKTtmdW5jdGlvbiByKCl7cmV0dXJuIGlyKHRoaXMsciksZS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9cmV0dXJuIHNyKHIsW3trZXk6XCJzZXRcIix2YWx1ZTpmdW5jdGlvbih0KXtyZXR1cm4gdHIob3Ioci5wcm90b3R5cGUpLFwic2V0XCIsdGhpcykuY2FsbCh0aGlzLHQpLG4uZmlyZShcImludGVyYWN0YWJsZTpzZXRcIix7b3B0aW9uczp0LGludGVyYWN0YWJsZTp0aGlzfSksdGhpc319LHtrZXk6XCJ1bnNldFwiLHZhbHVlOmZ1bmN0aW9uKCl7dHIob3Ioci5wcm90b3R5cGUpLFwidW5zZXRcIix0aGlzKS5jYWxsKHRoaXMpLG4uaW50ZXJhY3RhYmxlcy5saXN0LnNwbGljZShuLmludGVyYWN0YWJsZXMubGlzdC5pbmRleE9mKHRoaXMpLDEpLG4uZmlyZShcImludGVyYWN0YWJsZTp1bnNldFwiLHtpbnRlcmFjdGFibGU6dGhpc30pfX0se2tleTpcIl9kZWZhdWx0c1wiLGdldDpmdW5jdGlvbigpe3JldHVybiBuLmRlZmF1bHRzfX1dKSxyfShtbi5JbnRlcmFjdGFibGUpfXJldHVybiBzcih0LFt7a2V5OlwiYWRkTGlzdGVuZXJzXCIsdmFsdWU6ZnVuY3Rpb24odCxlKXt0aGlzLmxpc3RlbmVyTWFwcy5wdXNoKHtpZDplLG1hcDp0fSl9fSx7a2V5OlwiZmlyZVwiLHZhbHVlOmZ1bmN0aW9uKHQsZSl7Zm9yKHZhciBuPTA7bjx0aGlzLmxpc3RlbmVyTWFwcy5sZW5ndGg7bisrKXt2YXIgcj10aGlzLmxpc3RlbmVyTWFwc1tuXS5tYXBbdF07aWYociYmITE9PT1yKGUsdGhpcyx0KSlyZXR1cm4hMX19fSx7a2V5OlwiaW5pdFwiLHZhbHVlOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmlzSW5pdGlhbGl6ZWQ/dGhpczp1cih0aGlzLHQpfX0se2tleTpcInBsdWdpbklzSW5zdGFsbGVkXCIsdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX3BsdWdpbnMubWFwW3QuaWRdfHwtMSE9PXRoaXMuX3BsdWdpbnMubGlzdC5pbmRleE9mKHQpfX0se2tleTpcInVzZVBsdWdpblwiLHZhbHVlOmZ1bmN0aW9uKHQsZSl7aWYoIXRoaXMuaXNJbml0aWFsaXplZClyZXR1cm4gdGhpcztpZih0aGlzLnBsdWdpbklzSW5zdGFsbGVkKHQpKXJldHVybiB0aGlzO2lmKHQuaWQmJih0aGlzLl9wbHVnaW5zLm1hcFt0LmlkXT10KSx0aGlzLl9wbHVnaW5zLmxpc3QucHVzaCh0KSx0Lmluc3RhbGwmJnQuaW5zdGFsbCh0aGlzLGUpLHQubGlzdGVuZXJzJiZ0LmJlZm9yZSl7Zm9yKHZhciBuPTAscj10aGlzLmxpc3RlbmVyTWFwcy5sZW5ndGgsbz10LmJlZm9yZS5yZWR1Y2UoKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRbZV09ITAsdFtjcihlKV09ITAsdH0pLHt9KTtuPHI7bisrKXt2YXIgaT10aGlzLmxpc3RlbmVyTWFwc1tuXS5pZDtpZihvW2ldfHxvW2NyKGkpXSlicmVha310aGlzLmxpc3RlbmVyTWFwcy5zcGxpY2UobiwwLHtpZDp0LmlkLG1hcDp0Lmxpc3RlbmVyc30pfWVsc2UgdC5saXN0ZW5lcnMmJnRoaXMubGlzdGVuZXJNYXBzLnB1c2goe2lkOnQuaWQsbWFwOnQubGlzdGVuZXJzfSk7cmV0dXJuIHRoaXN9fSx7a2V5OlwiYWRkRG9jdW1lbnRcIix2YWx1ZTpmdW5jdGlvbih0LG4pe2lmKC0xIT09dGhpcy5nZXREb2NJbmRleCh0KSlyZXR1cm4hMTt2YXIgcj1lLmdldFdpbmRvdyh0KTtuPW4/KDAsai5kZWZhdWx0KSh7fSxuKTp7fSx0aGlzLmRvY3VtZW50cy5wdXNoKHtkb2M6dCxvcHRpb25zOm59KSx0aGlzLmV2ZW50cy5kb2N1bWVudHMucHVzaCh0KSx0IT09dGhpcy5kb2N1bWVudCYmdGhpcy5ldmVudHMuYWRkKHIsXCJ1bmxvYWRcIix0aGlzLm9uV2luZG93VW5sb2FkKSx0aGlzLmZpcmUoXCJzY29wZTphZGQtZG9jdW1lbnRcIix7ZG9jOnQsd2luZG93OnIsc2NvcGU6dGhpcyxvcHRpb25zOm59KX19LHtrZXk6XCJyZW1vdmVEb2N1bWVudFwiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBuPXRoaXMuZ2V0RG9jSW5kZXgodCkscj1lLmdldFdpbmRvdyh0KSxvPXRoaXMuZG9jdW1lbnRzW25dLm9wdGlvbnM7dGhpcy5ldmVudHMucmVtb3ZlKHIsXCJ1bmxvYWRcIix0aGlzLm9uV2luZG93VW5sb2FkKSx0aGlzLmRvY3VtZW50cy5zcGxpY2UobiwxKSx0aGlzLmV2ZW50cy5kb2N1bWVudHMuc3BsaWNlKG4sMSksdGhpcy5maXJlKFwic2NvcGU6cmVtb3ZlLWRvY3VtZW50XCIse2RvYzp0LHdpbmRvdzpyLHNjb3BlOnRoaXMsb3B0aW9uczpvfSl9fSx7a2V5OlwiZ2V0RG9jSW5kZXhcIix2YWx1ZTpmdW5jdGlvbih0KXtmb3IodmFyIGU9MDtlPHRoaXMuZG9jdW1lbnRzLmxlbmd0aDtlKyspaWYodGhpcy5kb2N1bWVudHNbZV0uZG9jPT09dClyZXR1cm4gZTtyZXR1cm4tMX19LHtrZXk6XCJnZXREb2NPcHRpb25zXCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5nZXREb2NJbmRleCh0KTtyZXR1cm4tMT09PWU/bnVsbDp0aGlzLmRvY3VtZW50c1tlXS5vcHRpb25zfX0se2tleTpcIm5vd1wiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuKHRoaXMud2luZG93LkRhdGV8fERhdGUpLm5vdygpfX1dKSx0fSgpO2Z1bmN0aW9uIHVyKHQsbil7cmV0dXJuIHQuaXNJbml0aWFsaXplZD0hMCxlLmluaXQobiksaC5kZWZhdWx0LmluaXQobiksYi5kZWZhdWx0LmluaXQobiksTXQuZGVmYXVsdC5pbml0KG4pLHQud2luZG93PW4sdC5kb2N1bWVudD1uLmRvY3VtZW50LHQudXNlUGx1Z2luKEZuLmRlZmF1bHQpLHQudXNlUGx1Z2luKE9uLmRlZmF1bHQpLHR9ZnVuY3Rpb24gY3IodCl7cmV0dXJuIHQmJnQucmVwbGFjZSgvXFwvLiokLyxcIlwiKX1Kbi5TY29wZT1scjt2YXIgZnI9e307ZnVuY3Rpb24gZHIodCl7cmV0dXJuKGRyPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbih0KXtyZXR1cm4gdHlwZW9mIHR9OmZ1bmN0aW9uKHQpe3JldHVybiB0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJnQuY29uc3RydWN0b3I9PT1TeW1ib2wmJnQhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIHR9KSh0KX1PYmplY3QuZGVmaW5lUHJvcGVydHkoZnIsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZnIuaW5pdD1mci5kZWZhdWx0PXZvaWQgMDt2YXIgcHI9bmV3IEpuLlNjb3BlLHZyPXByLmludGVyYWN0U3RhdGljO2ZyLmRlZmF1bHQ9dnI7dmFyIGhyPWZ1bmN0aW9uKHQpe3JldHVybiBwci5pbml0KHQpfTtmci5pbml0PWhyLFwib2JqZWN0XCI9PT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHdpbmRvdz9cInVuZGVmaW5lZFwiOmRyKHdpbmRvdykpJiZ3aW5kb3cmJmhyKHdpbmRvdyk7dmFyIGdyPXt9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShncixcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxnci5kZWZhdWx0PXZvaWQgMDtnci5kZWZhdWx0PWZ1bmN0aW9uKCl7fTt2YXIgeXI9e307T2JqZWN0LmRlZmluZVByb3BlcnR5KHlyLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHlyLmRlZmF1bHQ9dm9pZCAwO3lyLmRlZmF1bHQ9ZnVuY3Rpb24oKXt9O3ZhciBtcj17fTtmdW5jdGlvbiBicih0LGUpe3JldHVybiBmdW5jdGlvbih0KXtpZihBcnJheS5pc0FycmF5KHQpKXJldHVybiB0fSh0KXx8ZnVuY3Rpb24odCxlKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgU3ltYm9sfHwhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QodCkpKXJldHVybjt2YXIgbj1bXSxyPSEwLG89ITEsaT12b2lkIDA7dHJ5e2Zvcih2YXIgYSxzPXRbU3ltYm9sLml0ZXJhdG9yXSgpOyEocj0oYT1zLm5leHQoKSkuZG9uZSkmJihuLnB1c2goYS52YWx1ZSksIWV8fG4ubGVuZ3RoIT09ZSk7cj0hMCk7fWNhdGNoKHQpe289ITAsaT10fWZpbmFsbHl7dHJ5e3J8fG51bGw9PXMucmV0dXJufHxzLnJldHVybigpfWZpbmFsbHl7aWYobyl0aHJvdyBpfX1yZXR1cm4gbn0odCxlKXx8ZnVuY3Rpb24odCxlKXtpZighdClyZXR1cm47aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpcmV0dXJuIHhyKHQsZSk7dmFyIG49T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpLnNsaWNlKDgsLTEpO1wiT2JqZWN0XCI9PT1uJiZ0LmNvbnN0cnVjdG9yJiYobj10LmNvbnN0cnVjdG9yLm5hbWUpO2lmKFwiTWFwXCI9PT1ufHxcIlNldFwiPT09bilyZXR1cm4gQXJyYXkuZnJvbSh0KTtpZihcIkFyZ3VtZW50c1wiPT09bnx8L14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpcmV0dXJuIHhyKHQsZSl9KHQsZSl8fGZ1bmN0aW9uKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKX0oKX1mdW5jdGlvbiB4cih0LGUpeyhudWxsPT1lfHxlPnQubGVuZ3RoKSYmKGU9dC5sZW5ndGgpO2Zvcih2YXIgbj0wLHI9QXJyYXkoZSk7bjxlO24rKylyW25dPXRbbl07cmV0dXJuIHJ9T2JqZWN0LmRlZmluZVByb3BlcnR5KG1yLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG1yLmRlZmF1bHQ9dm9pZCAwO21yLmRlZmF1bHQ9ZnVuY3Rpb24odCl7dmFyIGU9W1tcInhcIixcInlcIl0sW1wibGVmdFwiLFwidG9wXCJdLFtcInJpZ2h0XCIsXCJib3R0b21cIl0sW1wid2lkdGhcIixcImhlaWdodFwiXV0uZmlsdGVyKChmdW5jdGlvbihlKXt2YXIgbj1icihlLDIpLHI9blswXSxvPW5bMV07cmV0dXJuIHIgaW4gdHx8byBpbiB0fSkpLG49ZnVuY3Rpb24obixyKXtmb3IodmFyIG89dC5yYW5nZSxpPXQubGltaXRzLGE9dm9pZCAwPT09aT97bGVmdDotMS8wLHJpZ2h0OjEvMCx0b3A6LTEvMCxib3R0b206MS8wfTppLHM9dC5vZmZzZXQsbD12b2lkIDA9PT1zP3t4OjAseTowfTpzLHU9e3JhbmdlOm8sZ3JpZDp0LHg6bnVsbCx5Om51bGx9LGM9MDtjPGUubGVuZ3RoO2MrKyl7dmFyIGY9YnIoZVtjXSwyKSxkPWZbMF0scD1mWzFdLHY9TWF0aC5yb3VuZCgobi1sLngpL3RbZF0pLGg9TWF0aC5yb3VuZCgoci1sLnkpL3RbcF0pO3VbZF09TWF0aC5tYXgoYS5sZWZ0LE1hdGgubWluKGEucmlnaHQsdip0W2RdK2wueCkpLHVbcF09TWF0aC5tYXgoYS50b3AsTWF0aC5taW4oYS5ib3R0b20saCp0W3BdK2wueSkpfXJldHVybiB1fTtyZXR1cm4gbi5ncmlkPXQsbi5jb29yZEZpZWxkcz1lLG59O3ZhciB3cj17fTtPYmplY3QuZGVmaW5lUHJvcGVydHkod3IsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHdyLFwiZWRnZVRhcmdldFwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBnci5kZWZhdWx0fX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3cixcImVsZW1lbnRzXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHlyLmRlZmF1bHR9fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHdyLFwiZ3JpZFwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBtci5kZWZhdWx0fX0pO3ZhciBfcj17fTtPYmplY3QuZGVmaW5lUHJvcGVydHkoX3IsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksX3IuZGVmYXVsdD12b2lkIDA7dmFyIFNyPXtpZDpcInNuYXBwZXJzXCIsaW5zdGFsbDpmdW5jdGlvbih0KXt2YXIgZT10LmludGVyYWN0U3RhdGljO2Uuc25hcHBlcnM9KDAsai5kZWZhdWx0KShlLnNuYXBwZXJzfHx7fSx3ciksZS5jcmVhdGVTbmFwR3JpZD1lLnNuYXBwZXJzLmdyaWR9fTtfci5kZWZhdWx0PVNyO3ZhciBQcj17fTtmdW5jdGlvbiBPcih0LGUpe3ZhciBuPU9iamVjdC5rZXlzKHQpO2lmKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModCk7ZSYmKHI9ci5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsZSkuZW51bWVyYWJsZX0pKSksbi5wdXNoLmFwcGx5KG4scil9cmV0dXJuIG59ZnVuY3Rpb24gRXIodCl7Zm9yKHZhciBlPTE7ZTxhcmd1bWVudHMubGVuZ3RoO2UrKyl7dmFyIG49bnVsbCE9YXJndW1lbnRzW2VdP2FyZ3VtZW50c1tlXTp7fTtlJTI/T3IoT2JqZWN0KG4pLCEwKS5mb3JFYWNoKChmdW5jdGlvbihlKXtUcih0LGUsbltlXSl9KSk6T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnM/T2JqZWN0LmRlZmluZVByb3BlcnRpZXModCxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhuKSk6T3IoT2JqZWN0KG4pKS5mb3JFYWNoKChmdW5jdGlvbihlKXtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobixlKSl9KSl9cmV0dXJuIHR9ZnVuY3Rpb24gVHIodCxlLG4pe3JldHVybiBlIGluIHQ/T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsZSx7dmFsdWU6bixlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOnRbZV09bix0fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShQcixcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxQci5hc3BlY3RSYXRpbz1Qci5kZWZhdWx0PXZvaWQgMDt2YXIgTXI9e3N0YXJ0OmZ1bmN0aW9uKHQpe3ZhciBlPXQuc3RhdGUsbj10LnJlY3Qscj10LmVkZ2VzLG89dC5wYWdlQ29vcmRzLGk9ZS5vcHRpb25zLnJhdGlvLGE9ZS5vcHRpb25zLHM9YS5lcXVhbERlbHRhLGw9YS5tb2RpZmllcnM7XCJwcmVzZXJ2ZVwiPT09aSYmKGk9bi53aWR0aC9uLmhlaWdodCksZS5zdGFydENvb3Jkcz0oMCxqLmRlZmF1bHQpKHt9LG8pLGUuc3RhcnRSZWN0PSgwLGouZGVmYXVsdCkoe30sbiksZS5yYXRpbz1pLGUuZXF1YWxEZWx0YT1zO3ZhciB1PWUubGlua2VkRWRnZXM9e3RvcDpyLnRvcHx8ci5sZWZ0JiYhci5ib3R0b20sbGVmdDpyLmxlZnR8fHIudG9wJiYhci5yaWdodCxib3R0b206ci5ib3R0b218fHIucmlnaHQmJiFyLnRvcCxyaWdodDpyLnJpZ2h0fHxyLmJvdHRvbSYmIXIubGVmdH07aWYoZS54SXNQcmltYXJ5QXhpcz0hKCFyLmxlZnQmJiFyLnJpZ2h0KSxlLmVxdWFsRGVsdGEpZS5lZGdlU2lnbj0odS5sZWZ0PzE6LTEpKih1LnRvcD8xOi0xKTtlbHNle3ZhciBjPWUueElzUHJpbWFyeUF4aXM/dS50b3A6dS5sZWZ0O2UuZWRnZVNpZ249Yz8tMToxfWlmKCgwLGouZGVmYXVsdCkodC5lZGdlcyx1KSxsJiZsLmxlbmd0aCl7dmFyIGY9bmV3IFNlLmRlZmF1bHQodC5pbnRlcmFjdGlvbik7Zi5jb3B5RnJvbSh0LmludGVyYWN0aW9uLm1vZGlmaWNhdGlvbiksZi5wcmVwYXJlU3RhdGVzKGwpLGUuc3ViTW9kaWZpY2F0aW9uPWYsZi5zdGFydEFsbChFcih7fSx0KSl9fSxzZXQ6ZnVuY3Rpb24odCl7dmFyIGU9dC5zdGF0ZSxuPXQucmVjdCxyPXQuY29vcmRzLG89KDAsai5kZWZhdWx0KSh7fSxyKSxpPWUuZXF1YWxEZWx0YT9qcjprcjtpZihpKGUsZS54SXNQcmltYXJ5QXhpcyxyLG4pLCFlLnN1Yk1vZGlmaWNhdGlvbilyZXR1cm4gbnVsbDt2YXIgYT0oMCxqLmRlZmF1bHQpKHt9LG4pOygwLGsuYWRkRWRnZXMpKGUubGlua2VkRWRnZXMsYSx7eDpyLngtby54LHk6ci55LW8ueX0pO3ZhciBzPWUuc3ViTW9kaWZpY2F0aW9uLnNldEFsbChFcihFcih7fSx0KSx7fSx7cmVjdDphLGVkZ2VzOmUubGlua2VkRWRnZXMscGFnZUNvb3JkczpyLHByZXZDb29yZHM6cixwcmV2UmVjdDphfSkpLGw9cy5kZWx0YTtzLmNoYW5nZWQmJihpKGUsTWF0aC5hYnMobC54KT5NYXRoLmFicyhsLnkpLHMuY29vcmRzLHMucmVjdCksKDAsai5kZWZhdWx0KShyLHMuY29vcmRzKSk7cmV0dXJuIHMuZXZlbnRQcm9wc30sZGVmYXVsdHM6e3JhdGlvOlwicHJlc2VydmVcIixlcXVhbERlbHRhOiExLG1vZGlmaWVyczpbXSxlbmFibGVkOiExfX07ZnVuY3Rpb24ganIodCxlLG4pe3ZhciByPXQuc3RhcnRDb29yZHMsbz10LmVkZ2VTaWduO2U/bi55PXIueSsobi54LXIueCkqbzpuLng9ci54KyhuLnktci55KSpvfWZ1bmN0aW9uIGtyKHQsZSxuLHIpe3ZhciBvPXQuc3RhcnRSZWN0LGk9dC5zdGFydENvb3JkcyxhPXQucmF0aW8scz10LmVkZ2VTaWduO2lmKGUpe3ZhciBsPXIud2lkdGgvYTtuLnk9aS55KyhsLW8uaGVpZ2h0KSpzfWVsc2V7dmFyIHU9ci5oZWlnaHQqYTtuLng9aS54Kyh1LW8ud2lkdGgpKnN9fVByLmFzcGVjdFJhdGlvPU1yO3ZhciBJcj0oMCxrZS5tYWtlTW9kaWZpZXIpKE1yLFwiYXNwZWN0UmF0aW9cIik7UHIuZGVmYXVsdD1Jcjt2YXIgRHI9e307T2JqZWN0LmRlZmluZVByb3BlcnR5KERyLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLERyLmRlZmF1bHQ9dm9pZCAwO3ZhciBBcj1mdW5jdGlvbigpe307QXIuX2RlZmF1bHRzPXt9O3ZhciB6cj1BcjtEci5kZWZhdWx0PXpyO3ZhciBDcj17fTtPYmplY3QuZGVmaW5lUHJvcGVydHkoQ3IsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KENyLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBEci5kZWZhdWx0fX0pO3ZhciBScj17fTtmdW5jdGlvbiBGcih0LGUsbil7cmV0dXJuIGkuZGVmYXVsdC5mdW5jKHQpP2sucmVzb2x2ZVJlY3RMaWtlKHQsZS5pbnRlcmFjdGFibGUsZS5lbGVtZW50LFtuLngsbi55LGVdKTprLnJlc29sdmVSZWN0TGlrZSh0LGUuaW50ZXJhY3RhYmxlLGUuZWxlbWVudCl9T2JqZWN0LmRlZmluZVByb3BlcnR5KFJyLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLFJyLmdldFJlc3RyaWN0aW9uUmVjdD1GcixSci5yZXN0cmljdD1Sci5kZWZhdWx0PXZvaWQgMDt2YXIgWHI9e3N0YXJ0OmZ1bmN0aW9uKHQpe3ZhciBlPXQucmVjdCxuPXQuc3RhcnRPZmZzZXQscj10LnN0YXRlLG89dC5pbnRlcmFjdGlvbixpPXQucGFnZUNvb3JkcyxhPXIub3B0aW9ucyxzPWEuZWxlbWVudFJlY3QsbD0oMCxqLmRlZmF1bHQpKHtsZWZ0OjAsdG9wOjAscmlnaHQ6MCxib3R0b206MH0sYS5vZmZzZXR8fHt9KTtpZihlJiZzKXt2YXIgdT1GcihhLnJlc3RyaWN0aW9uLG8saSk7aWYodSl7dmFyIGM9dS5yaWdodC11LmxlZnQtZS53aWR0aCxmPXUuYm90dG9tLXUudG9wLWUuaGVpZ2h0O2M8MCYmKGwubGVmdCs9YyxsLnJpZ2h0Kz1jKSxmPDAmJihsLnRvcCs9ZixsLmJvdHRvbSs9Zil9bC5sZWZ0Kz1uLmxlZnQtZS53aWR0aCpzLmxlZnQsbC50b3ArPW4udG9wLWUuaGVpZ2h0KnMudG9wLGwucmlnaHQrPW4ucmlnaHQtZS53aWR0aCooMS1zLnJpZ2h0KSxsLmJvdHRvbSs9bi5ib3R0b20tZS5oZWlnaHQqKDEtcy5ib3R0b20pfXIub2Zmc2V0PWx9LHNldDpmdW5jdGlvbih0KXt2YXIgZT10LmNvb3JkcyxuPXQuaW50ZXJhY3Rpb24scj10LnN0YXRlLG89ci5vcHRpb25zLGk9ci5vZmZzZXQsYT1GcihvLnJlc3RyaWN0aW9uLG4sZSk7aWYoYSl7dmFyIHM9ay54eXdoVG9UbGJyKGEpO2UueD1NYXRoLm1heChNYXRoLm1pbihzLnJpZ2h0LWkucmlnaHQsZS54KSxzLmxlZnQraS5sZWZ0KSxlLnk9TWF0aC5tYXgoTWF0aC5taW4ocy5ib3R0b20taS5ib3R0b20sZS55KSxzLnRvcCtpLnRvcCl9fSxkZWZhdWx0czp7cmVzdHJpY3Rpb246bnVsbCxlbGVtZW50UmVjdDpudWxsLG9mZnNldDpudWxsLGVuZE9ubHk6ITEsZW5hYmxlZDohMX19O1JyLnJlc3RyaWN0PVhyO3ZhciBZcj0oMCxrZS5tYWtlTW9kaWZpZXIpKFhyLFwicmVzdHJpY3RcIik7UnIuZGVmYXVsdD1Zcjt2YXIgV3I9e307T2JqZWN0LmRlZmluZVByb3BlcnR5KFdyLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLFdyLnJlc3RyaWN0RWRnZXM9V3IuZGVmYXVsdD12b2lkIDA7dmFyIExyPXt0b3A6MS8wLGxlZnQ6MS8wLGJvdHRvbTotMS8wLHJpZ2h0Oi0xLzB9LEJyPXt0b3A6LTEvMCxsZWZ0Oi0xLzAsYm90dG9tOjEvMCxyaWdodDoxLzB9O2Z1bmN0aW9uIFVyKHQsZSl7Zm9yKHZhciBuPVtcInRvcFwiLFwibGVmdFwiLFwiYm90dG9tXCIsXCJyaWdodFwiXSxyPTA7cjxuLmxlbmd0aDtyKyspe3ZhciBvPW5bcl07byBpbiB0fHwodFtvXT1lW29dKX1yZXR1cm4gdH12YXIgTnI9e25vSW5uZXI6THIsbm9PdXRlcjpCcixzdGFydDpmdW5jdGlvbih0KXt2YXIgZSxuPXQuaW50ZXJhY3Rpb24scj10LnN0YXJ0T2Zmc2V0LG89dC5zdGF0ZSxpPW8ub3B0aW9ucztpZihpKXt2YXIgYT0oMCxSci5nZXRSZXN0cmljdGlvblJlY3QpKGkub2Zmc2V0LG4sbi5jb29yZHMuc3RhcnQucGFnZSk7ZT1rLnJlY3RUb1hZKGEpfWU9ZXx8e3g6MCx5OjB9LG8ub2Zmc2V0PXt0b3A6ZS55K3IudG9wLGxlZnQ6ZS54K3IubGVmdCxib3R0b206ZS55LXIuYm90dG9tLHJpZ2h0OmUueC1yLnJpZ2h0fX0sc2V0OmZ1bmN0aW9uKHQpe3ZhciBlPXQuY29vcmRzLG49dC5lZGdlcyxyPXQuaW50ZXJhY3Rpb24sbz10LnN0YXRlLGk9by5vZmZzZXQsYT1vLm9wdGlvbnM7aWYobil7dmFyIHM9KDAsai5kZWZhdWx0KSh7fSxlKSxsPSgwLFJyLmdldFJlc3RyaWN0aW9uUmVjdCkoYS5pbm5lcixyLHMpfHx7fSx1PSgwLFJyLmdldFJlc3RyaWN0aW9uUmVjdCkoYS5vdXRlcixyLHMpfHx7fTtVcihsLExyKSxVcih1LEJyKSxuLnRvcD9lLnk9TWF0aC5taW4oTWF0aC5tYXgodS50b3AraS50b3Ascy55KSxsLnRvcCtpLnRvcCk6bi5ib3R0b20mJihlLnk9TWF0aC5tYXgoTWF0aC5taW4odS5ib3R0b20raS5ib3R0b20scy55KSxsLmJvdHRvbStpLmJvdHRvbSkpLG4ubGVmdD9lLng9TWF0aC5taW4oTWF0aC5tYXgodS5sZWZ0K2kubGVmdCxzLngpLGwubGVmdCtpLmxlZnQpOm4ucmlnaHQmJihlLng9TWF0aC5tYXgoTWF0aC5taW4odS5yaWdodCtpLnJpZ2h0LHMueCksbC5yaWdodCtpLnJpZ2h0KSl9fSxkZWZhdWx0czp7aW5uZXI6bnVsbCxvdXRlcjpudWxsLG9mZnNldDpudWxsLGVuZE9ubHk6ITEsZW5hYmxlZDohMX19O1dyLnJlc3RyaWN0RWRnZXM9TnI7dmFyIFZyPSgwLGtlLm1ha2VNb2RpZmllcikoTnIsXCJyZXN0cmljdEVkZ2VzXCIpO1dyLmRlZmF1bHQ9VnI7dmFyIHFyPXt9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShxcixcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxxci5yZXN0cmljdFJlY3Q9cXIuZGVmYXVsdD12b2lkIDA7dmFyICRyPSgwLGouZGVmYXVsdCkoe2dldCBlbGVtZW50UmVjdCgpe3JldHVybnt0b3A6MCxsZWZ0OjAsYm90dG9tOjEscmlnaHQ6MX19LHNldCBlbGVtZW50UmVjdCh0KXt9fSxSci5yZXN0cmljdC5kZWZhdWx0cyksR3I9e3N0YXJ0OlJyLnJlc3RyaWN0LnN0YXJ0LHNldDpSci5yZXN0cmljdC5zZXQsZGVmYXVsdHM6JHJ9O3FyLnJlc3RyaWN0UmVjdD1Hcjt2YXIgSHI9KDAsa2UubWFrZU1vZGlmaWVyKShHcixcInJlc3RyaWN0UmVjdFwiKTtxci5kZWZhdWx0PUhyO3ZhciBLcj17fTtPYmplY3QuZGVmaW5lUHJvcGVydHkoS3IsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksS3IucmVzdHJpY3RTaXplPUtyLmRlZmF1bHQ9dm9pZCAwO3ZhciBacj17d2lkdGg6LTEvMCxoZWlnaHQ6LTEvMH0sSnI9e3dpZHRoOjEvMCxoZWlnaHQ6MS8wfTt2YXIgUXI9e3N0YXJ0OmZ1bmN0aW9uKHQpe3JldHVybiBXci5yZXN0cmljdEVkZ2VzLnN0YXJ0KHQpfSxzZXQ6ZnVuY3Rpb24odCl7dmFyIGU9dC5pbnRlcmFjdGlvbixuPXQuc3RhdGUscj10LnJlY3Qsbz10LmVkZ2VzLGk9bi5vcHRpb25zO2lmKG8pe3ZhciBhPWsudGxiclRvWHl3aCgoMCxSci5nZXRSZXN0cmljdGlvblJlY3QpKGkubWluLGUsdC5jb29yZHMpKXx8WnIscz1rLnRsYnJUb1h5d2goKDAsUnIuZ2V0UmVzdHJpY3Rpb25SZWN0KShpLm1heCxlLHQuY29vcmRzKSl8fEpyO24ub3B0aW9ucz17ZW5kT25seTppLmVuZE9ubHksaW5uZXI6KDAsai5kZWZhdWx0KSh7fSxXci5yZXN0cmljdEVkZ2VzLm5vSW5uZXIpLG91dGVyOigwLGouZGVmYXVsdCkoe30sV3IucmVzdHJpY3RFZGdlcy5ub091dGVyKX0sby50b3A/KG4ub3B0aW9ucy5pbm5lci50b3A9ci5ib3R0b20tYS5oZWlnaHQsbi5vcHRpb25zLm91dGVyLnRvcD1yLmJvdHRvbS1zLmhlaWdodCk6by5ib3R0b20mJihuLm9wdGlvbnMuaW5uZXIuYm90dG9tPXIudG9wK2EuaGVpZ2h0LG4ub3B0aW9ucy5vdXRlci5ib3R0b209ci50b3Arcy5oZWlnaHQpLG8ubGVmdD8obi5vcHRpb25zLmlubmVyLmxlZnQ9ci5yaWdodC1hLndpZHRoLG4ub3B0aW9ucy5vdXRlci5sZWZ0PXIucmlnaHQtcy53aWR0aCk6by5yaWdodCYmKG4ub3B0aW9ucy5pbm5lci5yaWdodD1yLmxlZnQrYS53aWR0aCxuLm9wdGlvbnMub3V0ZXIucmlnaHQ9ci5sZWZ0K3Mud2lkdGgpLFdyLnJlc3RyaWN0RWRnZXMuc2V0KHQpLG4ub3B0aW9ucz1pfX0sZGVmYXVsdHM6e21pbjpudWxsLG1heDpudWxsLGVuZE9ubHk6ITEsZW5hYmxlZDohMX19O0tyLnJlc3RyaWN0U2l6ZT1Rcjt2YXIgdG89KDAsa2UubWFrZU1vZGlmaWVyKShRcixcInJlc3RyaWN0U2l6ZVwiKTtLci5kZWZhdWx0PXRvO3ZhciBlbz17fTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZW8sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGVvLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBEci5kZWZhdWx0fX0pO3ZhciBubz17fTtPYmplY3QuZGVmaW5lUHJvcGVydHkobm8sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksbm8uc25hcD1uby5kZWZhdWx0PXZvaWQgMDt2YXIgcm89e3N0YXJ0OmZ1bmN0aW9uKHQpe3ZhciBlLG49dC5pbnRlcmFjdGlvbixyPXQuaW50ZXJhY3RhYmxlLG89dC5lbGVtZW50LGk9dC5yZWN0LGE9dC5zdGF0ZSxzPXQuc3RhcnRPZmZzZXQsbD1hLm9wdGlvbnMsdT1sLm9mZnNldFdpdGhPcmlnaW4/ZnVuY3Rpb24odCl7dmFyIGU9dC5pbnRlcmFjdGlvbi5lbGVtZW50O3JldHVybigwLGsucmVjdFRvWFkpKCgwLGsucmVzb2x2ZVJlY3RMaWtlKSh0LnN0YXRlLm9wdGlvbnMub3JpZ2luLG51bGwsbnVsbCxbZV0pKXx8KDAsQS5kZWZhdWx0KSh0LmludGVyYWN0YWJsZSxlLHQuaW50ZXJhY3Rpb24ucHJlcGFyZWQubmFtZSl9KHQpOnt4OjAseTowfTtpZihcInN0YXJ0Q29vcmRzXCI9PT1sLm9mZnNldCllPXt4Om4uY29vcmRzLnN0YXJ0LnBhZ2UueCx5Om4uY29vcmRzLnN0YXJ0LnBhZ2UueX07ZWxzZXt2YXIgYz0oMCxrLnJlc29sdmVSZWN0TGlrZSkobC5vZmZzZXQscixvLFtuXSk7KGU9KDAsay5yZWN0VG9YWSkoYyl8fHt4OjAseTowfSkueCs9dS54LGUueSs9dS55fXZhciBmPWwucmVsYXRpdmVQb2ludHM7YS5vZmZzZXRzPWkmJmYmJmYubGVuZ3RoP2YubWFwKChmdW5jdGlvbih0LG4pe3JldHVybntpbmRleDpuLHJlbGF0aXZlUG9pbnQ6dCx4OnMubGVmdC1pLndpZHRoKnQueCtlLngseTpzLnRvcC1pLmhlaWdodCp0LnkrZS55fX0pKTpbKDAsai5kZWZhdWx0KSh7aW5kZXg6MCxyZWxhdGl2ZVBvaW50Om51bGx9LGUpXX0sc2V0OmZ1bmN0aW9uKHQpe3ZhciBlPXQuaW50ZXJhY3Rpb24sbj10LmNvb3JkcyxyPXQuc3RhdGUsbz1yLm9wdGlvbnMsYT1yLm9mZnNldHMscz0oMCxBLmRlZmF1bHQpKGUuaW50ZXJhY3RhYmxlLGUuZWxlbWVudCxlLnByZXBhcmVkLm5hbWUpLGw9KDAsai5kZWZhdWx0KSh7fSxuKSx1PVtdO28ub2Zmc2V0V2l0aE9yaWdpbnx8KGwueC09cy54LGwueS09cy55KTtmb3IodmFyIGM9MDtjPGEubGVuZ3RoO2MrKylmb3IodmFyIGY9YVtjXSxkPWwueC1mLngscD1sLnktZi55LHY9MCxoPW8udGFyZ2V0cy5sZW5ndGg7djxoO3YrKyl7dmFyIGc9by50YXJnZXRzW3ZdLHk9dm9pZCAwOyh5PWkuZGVmYXVsdC5mdW5jKGcpP2coZCxwLGUuX3Byb3h5LGYsdik6ZykmJnUucHVzaCh7eDooaS5kZWZhdWx0Lm51bWJlcih5LngpP3kueDpkKStmLngseTooaS5kZWZhdWx0Lm51bWJlcih5LnkpP3kueTpwKStmLnkscmFuZ2U6aS5kZWZhdWx0Lm51bWJlcih5LnJhbmdlKT95LnJhbmdlOm8ucmFuZ2Usc291cmNlOmcsaW5kZXg6dixvZmZzZXQ6Zn0pfWZvcih2YXIgbT17dGFyZ2V0Om51bGwsaW5SYW5nZTohMSxkaXN0YW5jZTowLHJhbmdlOjAsZGVsdGE6e3g6MCx5OjB9fSxiPTA7Yjx1Lmxlbmd0aDtiKyspe3ZhciB4PXVbYl0sdz14LnJhbmdlLF89eC54LWwueCxTPXgueS1sLnksUD0oMCxSLmRlZmF1bHQpKF8sUyksTz1QPD13O3c9PT0xLzAmJm0uaW5SYW5nZSYmbS5yYW5nZSE9PTEvMCYmKE89ITEpLG0udGFyZ2V0JiYhKE8/bS5pblJhbmdlJiZ3IT09MS8wP1AvdzxtLmRpc3RhbmNlL20ucmFuZ2U6dz09PTEvMCYmbS5yYW5nZSE9PTEvMHx8UDxtLmRpc3RhbmNlOiFtLmluUmFuZ2UmJlA8bS5kaXN0YW5jZSl8fChtLnRhcmdldD14LG0uZGlzdGFuY2U9UCxtLnJhbmdlPXcsbS5pblJhbmdlPU8sbS5kZWx0YS54PV8sbS5kZWx0YS55PVMpfXJldHVybiBtLmluUmFuZ2UmJihuLng9bS50YXJnZXQueCxuLnk9bS50YXJnZXQueSksci5jbG9zZXN0PW0sbX0sZGVmYXVsdHM6e3JhbmdlOjEvMCx0YXJnZXRzOm51bGwsb2Zmc2V0Om51bGwsb2Zmc2V0V2l0aE9yaWdpbjohMCxvcmlnaW46bnVsbCxyZWxhdGl2ZVBvaW50czpudWxsLGVuZE9ubHk6ITEsZW5hYmxlZDohMX19O25vLnNuYXA9cm87dmFyIG9vPSgwLGtlLm1ha2VNb2RpZmllcikocm8sXCJzbmFwXCIpO25vLmRlZmF1bHQ9b287dmFyIGlvPXt9O2Z1bmN0aW9uIGFvKHQsZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe2lmKEFycmF5LmlzQXJyYXkodCkpcmV0dXJuIHR9KHQpfHxmdW5jdGlvbih0LGUpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBTeW1ib2x8fCEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdCh0KSkpcmV0dXJuO3ZhciBuPVtdLHI9ITAsbz0hMSxpPXZvaWQgMDt0cnl7Zm9yKHZhciBhLHM9dFtTeW1ib2wuaXRlcmF0b3JdKCk7IShyPShhPXMubmV4dCgpKS5kb25lKSYmKG4ucHVzaChhLnZhbHVlKSwhZXx8bi5sZW5ndGghPT1lKTtyPSEwKTt9Y2F0Y2godCl7bz0hMCxpPXR9ZmluYWxseXt0cnl7cnx8bnVsbD09cy5yZXR1cm58fHMucmV0dXJuKCl9ZmluYWxseXtpZihvKXRocm93IGl9fXJldHVybiBufSh0LGUpfHxmdW5jdGlvbih0LGUpe2lmKCF0KXJldHVybjtpZihcInN0cmluZ1wiPT10eXBlb2YgdClyZXR1cm4gc28odCxlKTt2YXIgbj1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCkuc2xpY2UoOCwtMSk7XCJPYmplY3RcIj09PW4mJnQuY29uc3RydWN0b3ImJihuPXQuY29uc3RydWN0b3IubmFtZSk7aWYoXCJNYXBcIj09PW58fFwiU2V0XCI9PT1uKXJldHVybiBBcnJheS5mcm9tKHQpO2lmKFwiQXJndW1lbnRzXCI9PT1ufHwvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSlyZXR1cm4gc28odCxlKX0odCxlKXx8ZnVuY3Rpb24oKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpfSgpfWZ1bmN0aW9uIHNvKHQsZSl7KG51bGw9PWV8fGU+dC5sZW5ndGgpJiYoZT10Lmxlbmd0aCk7Zm9yKHZhciBuPTAscj1BcnJheShlKTtuPGU7bisrKXJbbl09dFtuXTtyZXR1cm4gcn1PYmplY3QuZGVmaW5lUHJvcGVydHkoaW8sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksaW8uc25hcFNpemU9aW8uZGVmYXVsdD12b2lkIDA7dmFyIGxvPXtzdGFydDpmdW5jdGlvbih0KXt2YXIgZT10LnN0YXRlLG49dC5lZGdlcyxyPWUub3B0aW9ucztpZighbilyZXR1cm4gbnVsbDt0LnN0YXRlPXtvcHRpb25zOnt0YXJnZXRzOm51bGwscmVsYXRpdmVQb2ludHM6W3t4Om4ubGVmdD8wOjEseTpuLnRvcD8wOjF9XSxvZmZzZXQ6ci5vZmZzZXR8fFwic2VsZlwiLG9yaWdpbjp7eDowLHk6MH0scmFuZ2U6ci5yYW5nZX19LGUudGFyZ2V0RmllbGRzPWUudGFyZ2V0RmllbGRzfHxbW1wid2lkdGhcIixcImhlaWdodFwiXSxbXCJ4XCIsXCJ5XCJdXSxuby5zbmFwLnN0YXJ0KHQpLGUub2Zmc2V0cz10LnN0YXRlLm9mZnNldHMsdC5zdGF0ZT1lfSxzZXQ6ZnVuY3Rpb24odCl7dmFyIGU9dC5pbnRlcmFjdGlvbixuPXQuc3RhdGUscj10LmNvb3JkcyxvPW4ub3B0aW9ucyxhPW4ub2Zmc2V0cyxzPXt4OnIueC1hWzBdLngseTpyLnktYVswXS55fTtuLm9wdGlvbnM9KDAsai5kZWZhdWx0KSh7fSxvKSxuLm9wdGlvbnMudGFyZ2V0cz1bXTtmb3IodmFyIGw9MDtsPChvLnRhcmdldHN8fFtdKS5sZW5ndGg7bCsrKXt2YXIgdT0oby50YXJnZXRzfHxbXSlbbF0sYz12b2lkIDA7aWYoYz1pLmRlZmF1bHQuZnVuYyh1KT91KHMueCxzLnksZSk6dSl7Zm9yKHZhciBmPTA7ZjxuLnRhcmdldEZpZWxkcy5sZW5ndGg7ZisrKXt2YXIgZD1hbyhuLnRhcmdldEZpZWxkc1tmXSwyKSxwPWRbMF0sdj1kWzFdO2lmKHAgaW4gY3x8diBpbiBjKXtjLng9Y1twXSxjLnk9Y1t2XTticmVha319bi5vcHRpb25zLnRhcmdldHMucHVzaChjKX19dmFyIGg9bm8uc25hcC5zZXQodCk7cmV0dXJuIG4ub3B0aW9ucz1vLGh9LGRlZmF1bHRzOntyYW5nZToxLzAsdGFyZ2V0czpudWxsLG9mZnNldDpudWxsLGVuZE9ubHk6ITEsZW5hYmxlZDohMX19O2lvLnNuYXBTaXplPWxvO3ZhciB1bz0oMCxrZS5tYWtlTW9kaWZpZXIpKGxvLFwic25hcFNpemVcIik7aW8uZGVmYXVsdD11bzt2YXIgY289e307T2JqZWN0LmRlZmluZVByb3BlcnR5KGNvLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGNvLnNuYXBFZGdlcz1jby5kZWZhdWx0PXZvaWQgMDt2YXIgZm89e3N0YXJ0OmZ1bmN0aW9uKHQpe3ZhciBlPXQuZWRnZXM7cmV0dXJuIGU/KHQuc3RhdGUudGFyZ2V0RmllbGRzPXQuc3RhdGUudGFyZ2V0RmllbGRzfHxbW2UubGVmdD9cImxlZnRcIjpcInJpZ2h0XCIsZS50b3A/XCJ0b3BcIjpcImJvdHRvbVwiXV0saW8uc25hcFNpemUuc3RhcnQodCkpOm51bGx9LHNldDppby5zbmFwU2l6ZS5zZXQsZGVmYXVsdHM6KDAsai5kZWZhdWx0KSgoMCxfZS5kZWZhdWx0KShpby5zbmFwU2l6ZS5kZWZhdWx0cykse3RhcmdldHM6bnVsbCxyYW5nZTpudWxsLG9mZnNldDp7eDowLHk6MH19KX07Y28uc25hcEVkZ2VzPWZvO3ZhciBwbz0oMCxrZS5tYWtlTW9kaWZpZXIpKGZvLFwic25hcEVkZ2VzXCIpO2NvLmRlZmF1bHQ9cG87dmFyIHZvPXt9O09iamVjdC5kZWZpbmVQcm9wZXJ0eSh2byxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodm8sXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIERyLmRlZmF1bHR9fSk7dmFyIGhvPXt9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShobyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoaG8sXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIERyLmRlZmF1bHR9fSk7dmFyIGdvPXt9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShnbyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxnby5kZWZhdWx0PXZvaWQgMDt2YXIgeW89e2FzcGVjdFJhdGlvOlByLmRlZmF1bHQscmVzdHJpY3RFZGdlczpXci5kZWZhdWx0LHJlc3RyaWN0OlJyLmRlZmF1bHQscmVzdHJpY3RSZWN0OnFyLmRlZmF1bHQscmVzdHJpY3RTaXplOktyLmRlZmF1bHQsc25hcEVkZ2VzOmNvLmRlZmF1bHQsc25hcDpuby5kZWZhdWx0LHNuYXBTaXplOmlvLmRlZmF1bHQsc3ByaW5nOnZvLmRlZmF1bHQsYXZvaWQ6Q3IuZGVmYXVsdCx0cmFuc2Zvcm06aG8uZGVmYXVsdCxydWJiZXJiYW5kOmVvLmRlZmF1bHR9O2dvLmRlZmF1bHQ9eW87dmFyIG1vPXt9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShtbyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxtby5kZWZhdWx0PXZvaWQgMDt2YXIgYm89e2lkOlwibW9kaWZpZXJzXCIsaW5zdGFsbDpmdW5jdGlvbih0KXt2YXIgZT10LmludGVyYWN0U3RhdGljO2Zvcih2YXIgbiBpbiB0LnVzZVBsdWdpbihrZS5kZWZhdWx0KSx0LnVzZVBsdWdpbihfci5kZWZhdWx0KSxlLm1vZGlmaWVycz1nby5kZWZhdWx0LGdvLmRlZmF1bHQpe3ZhciByPWdvLmRlZmF1bHRbbl0sbz1yLl9kZWZhdWx0cyxpPXIuX21ldGhvZHM7by5fbWV0aG9kcz1pLHQuZGVmYXVsdHMucGVyQWN0aW9uW25dPW99fX07bW8uZGVmYXVsdD1ibzt2YXIgeG89e307T2JqZWN0LmRlZmluZVByb3BlcnR5KHhvLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHhvLmRlZmF1bHQ9dm9pZCAwO3hvLmRlZmF1bHQ9e307dmFyIHdvPXt9O2Z1bmN0aW9uIF9vKHQpe3JldHVybihfbz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24odCl7cmV0dXJuIHR5cGVvZiB0fTpmdW5jdGlvbih0KXtyZXR1cm4gdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZ0LmNvbnN0cnVjdG9yPT09U3ltYm9sJiZ0IT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiB0fSkodCl9ZnVuY3Rpb24gU28odCxlKXtmb3IodmFyIG49MDtuPGUubGVuZ3RoO24rKyl7dmFyIHI9ZVtuXTtyLmVudW1lcmFibGU9ci5lbnVtZXJhYmxlfHwhMSxyLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiByJiYoci53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsci5rZXkscil9fWZ1bmN0aW9uIFBvKHQsZSl7cmV0dXJuKFBvPU9iamVjdC5zZXRQcm90b3R5cGVPZnx8ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC5fX3Byb3RvX189ZSx0fSkodCxlKX1mdW5jdGlvbiBPbyh0KXt2YXIgZT1mdW5jdGlvbigpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBSZWZsZWN0fHwhUmVmbGVjdC5jb25zdHJ1Y3QpcmV0dXJuITE7aWYoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSlyZXR1cm4hMTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm94eSlyZXR1cm4hMDt0cnl7cmV0dXJuIERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSxbXSwoZnVuY3Rpb24oKXt9KSkpLCEwfWNhdGNoKHQpe3JldHVybiExfX0oKTtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgbixyPU1vKHQpO2lmKGUpe3ZhciBvPU1vKHRoaXMpLmNvbnN0cnVjdG9yO249UmVmbGVjdC5jb25zdHJ1Y3Qocixhcmd1bWVudHMsbyl9ZWxzZSBuPXIuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiBFbyh0aGlzLG4pfX1mdW5jdGlvbiBFbyh0LGUpe3JldHVybiFlfHxcIm9iamVjdFwiIT09X28oZSkmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGU/VG8odCk6ZX1mdW5jdGlvbiBUbyh0KXtpZih2b2lkIDA9PT10KXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4gdH1mdW5jdGlvbiBNbyh0KXtyZXR1cm4oTW89T2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5nZXRQcm90b3R5cGVPZjpmdW5jdGlvbih0KXtyZXR1cm4gdC5fX3Byb3RvX198fE9iamVjdC5nZXRQcm90b3R5cGVPZih0KX0pKHQpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3byxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx3by5Qb2ludGVyRXZlbnQ9d28uZGVmYXVsdD12b2lkIDA7dmFyIGpvPWZ1bmN0aW9uKHQpeyFmdW5jdGlvbih0LGUpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUmJm51bGwhPT1lKXRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTt0LnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGUmJmUucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6dCx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSksZSYmUG8odCxlKX0oaSx0KTt2YXIgZSxuLHIsbz1PbyhpKTtmdW5jdGlvbiBpKHQsZSxuLHIsYSxzKXt2YXIgbDtpZihmdW5jdGlvbih0LGUpe2lmKCEodCBpbnN0YW5jZW9mIGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9KHRoaXMsaSksKGw9by5jYWxsKHRoaXMsYSkpLnR5cGU9dm9pZCAwLGwub3JpZ2luYWxFdmVudD12b2lkIDAsbC5wb2ludGVySWQ9dm9pZCAwLGwucG9pbnRlclR5cGU9dm9pZCAwLGwuZG91YmxlPXZvaWQgMCxsLnBhZ2VYPXZvaWQgMCxsLnBhZ2VZPXZvaWQgMCxsLmNsaWVudFg9dm9pZCAwLGwuY2xpZW50WT12b2lkIDAsbC5kdD12b2lkIDAsbC5ldmVudGFibGU9dm9pZCAwLFcucG9pbnRlckV4dGVuZChUbyhsKSxuKSxuIT09ZSYmVy5wb2ludGVyRXh0ZW5kKFRvKGwpLGUpLGwudGltZVN0YW1wPXMsbC5vcmlnaW5hbEV2ZW50PW4sbC50eXBlPXQsbC5wb2ludGVySWQ9Vy5nZXRQb2ludGVySWQoZSksbC5wb2ludGVyVHlwZT1XLmdldFBvaW50ZXJUeXBlKGUpLGwudGFyZ2V0PXIsbC5jdXJyZW50VGFyZ2V0PW51bGwsXCJ0YXBcIj09PXQpe3ZhciB1PWEuZ2V0UG9pbnRlckluZGV4KGUpO2wuZHQ9bC50aW1lU3RhbXAtYS5wb2ludGVyc1t1XS5kb3duVGltZTt2YXIgYz1sLnRpbWVTdGFtcC1hLnRhcFRpbWU7bC5kb3VibGU9ISEoYS5wcmV2VGFwJiZcImRvdWJsZXRhcFwiIT09YS5wcmV2VGFwLnR5cGUmJmEucHJldlRhcC50YXJnZXQ9PT1sLnRhcmdldCYmYzw1MDApfWVsc2VcImRvdWJsZXRhcFwiPT09dCYmKGwuZHQ9ZS50aW1lU3RhbXAtYS50YXBUaW1lKTtyZXR1cm4gbH1yZXR1cm4gZT1pLChuPVt7a2V5OlwiX3N1YnRyYWN0T3JpZ2luXCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIGU9dC54LG49dC55O3JldHVybiB0aGlzLnBhZ2VYLT1lLHRoaXMucGFnZVktPW4sdGhpcy5jbGllbnRYLT1lLHRoaXMuY2xpZW50WS09bix0aGlzfX0se2tleTpcIl9hZGRPcmlnaW5cIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgZT10Lngsbj10Lnk7cmV0dXJuIHRoaXMucGFnZVgrPWUsdGhpcy5wYWdlWSs9bix0aGlzLmNsaWVudFgrPWUsdGhpcy5jbGllbnRZKz1uLHRoaXN9fSx7a2V5OlwicHJldmVudERlZmF1bHRcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMub3JpZ2luYWxFdmVudC5wcmV2ZW50RGVmYXVsdCgpfX1dKSYmU28oZS5wcm90b3R5cGUsbiksciYmU28oZSxyKSxpfSgkLkJhc2VFdmVudCk7d28uUG9pbnRlckV2ZW50PXdvLmRlZmF1bHQ9am87dmFyIGtvPXt9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShrbyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxrby5kZWZhdWx0PXZvaWQgMDt2YXIgSW89e2lkOlwicG9pbnRlci1ldmVudHMvYmFzZVwiLGJlZm9yZTpbXCJpbmVydGlhXCIsXCJtb2RpZmllcnNcIixcImF1dG8tc3RhcnRcIixcImFjdGlvbnNcIl0saW5zdGFsbDpmdW5jdGlvbih0KXt0LnBvaW50ZXJFdmVudHM9SW8sdC5kZWZhdWx0cy5hY3Rpb25zLnBvaW50ZXJFdmVudHM9SW8uZGVmYXVsdHMsKDAsai5kZWZhdWx0KSh0LmFjdGlvbnMucGhhc2VsZXNzVHlwZXMsSW8udHlwZXMpfSxsaXN0ZW5lcnM6e1wiaW50ZXJhY3Rpb25zOm5ld1wiOmZ1bmN0aW9uKHQpe3ZhciBlPXQuaW50ZXJhY3Rpb247ZS5wcmV2VGFwPW51bGwsZS50YXBUaW1lPTB9LFwiaW50ZXJhY3Rpb25zOnVwZGF0ZS1wb2ludGVyXCI6ZnVuY3Rpb24odCl7dmFyIGU9dC5kb3duLG49dC5wb2ludGVySW5mbztpZighZSYmbi5ob2xkKXJldHVybjtuLmhvbGQ9e2R1cmF0aW9uOjEvMCx0aW1lb3V0Om51bGx9fSxcImludGVyYWN0aW9uczptb3ZlXCI6ZnVuY3Rpb24odCxlKXt2YXIgbj10LmludGVyYWN0aW9uLHI9dC5wb2ludGVyLG89dC5ldmVudCxpPXQuZXZlbnRUYXJnZXQ7dC5kdXBsaWNhdGV8fG4ucG9pbnRlcklzRG93biYmIW4ucG9pbnRlcldhc01vdmVkfHwobi5wb2ludGVySXNEb3duJiZ6byh0KSxEbyh7aW50ZXJhY3Rpb246bixwb2ludGVyOnIsZXZlbnQ6byxldmVudFRhcmdldDppLHR5cGU6XCJtb3ZlXCJ9LGUpKX0sXCJpbnRlcmFjdGlvbnM6ZG93blwiOmZ1bmN0aW9uKHQsZSl7IWZ1bmN0aW9uKHQsZSl7Zm9yKHZhciBuPXQuaW50ZXJhY3Rpb24scj10LnBvaW50ZXIsbz10LmV2ZW50LGk9dC5ldmVudFRhcmdldCxhPXQucG9pbnRlckluZGV4LHM9bi5wb2ludGVyc1thXS5ob2xkLGw9Xy5nZXRQYXRoKGkpLHU9e2ludGVyYWN0aW9uOm4scG9pbnRlcjpyLGV2ZW50Om8sZXZlbnRUYXJnZXQ6aSx0eXBlOlwiaG9sZFwiLHRhcmdldHM6W10scGF0aDpsLG5vZGU6bnVsbH0sYz0wO2M8bC5sZW5ndGg7YysrKXt2YXIgZj1sW2NdO3Uubm9kZT1mLGUuZmlyZShcInBvaW50ZXJFdmVudHM6Y29sbGVjdC10YXJnZXRzXCIsdSl9aWYoIXUudGFyZ2V0cy5sZW5ndGgpcmV0dXJuO2Zvcih2YXIgZD0xLzAscD0wO3A8dS50YXJnZXRzLmxlbmd0aDtwKyspe3ZhciB2PXUudGFyZ2V0c1twXS5ldmVudGFibGUub3B0aW9ucy5ob2xkRHVyYXRpb247djxkJiYoZD12KX1zLmR1cmF0aW9uPWQscy50aW1lb3V0PXNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7RG8oe2ludGVyYWN0aW9uOm4sZXZlbnRUYXJnZXQ6aSxwb2ludGVyOnIsZXZlbnQ6byx0eXBlOlwiaG9sZFwifSxlKX0pLGQpfSh0LGUpLERvKHQsZSl9LFwiaW50ZXJhY3Rpb25zOnVwXCI6ZnVuY3Rpb24odCxlKXt6byh0KSxEbyh0LGUpLGZ1bmN0aW9uKHQsZSl7dmFyIG49dC5pbnRlcmFjdGlvbixyPXQucG9pbnRlcixvPXQuZXZlbnQsaT10LmV2ZW50VGFyZ2V0O24ucG9pbnRlcldhc01vdmVkfHxEbyh7aW50ZXJhY3Rpb246bixldmVudFRhcmdldDppLHBvaW50ZXI6cixldmVudDpvLHR5cGU6XCJ0YXBcIn0sZSl9KHQsZSl9LFwiaW50ZXJhY3Rpb25zOmNhbmNlbFwiOmZ1bmN0aW9uKHQsZSl7em8odCksRG8odCxlKX19LFBvaW50ZXJFdmVudDp3by5Qb2ludGVyRXZlbnQsZmlyZTpEbyxjb2xsZWN0RXZlbnRUYXJnZXRzOkFvLGRlZmF1bHRzOntob2xkRHVyYXRpb246NjAwLGlnbm9yZUZyb206bnVsbCxhbGxvd0Zyb206bnVsbCxvcmlnaW46e3g6MCx5OjB9fSx0eXBlczp7ZG93bjohMCxtb3ZlOiEwLHVwOiEwLGNhbmNlbDohMCx0YXA6ITAsZG91YmxldGFwOiEwLGhvbGQ6ITB9fTtmdW5jdGlvbiBEbyh0LGUpe3ZhciBuPXQuaW50ZXJhY3Rpb24scj10LnBvaW50ZXIsbz10LmV2ZW50LGk9dC5ldmVudFRhcmdldCxhPXQudHlwZSxzPXQudGFyZ2V0cyxsPXZvaWQgMD09PXM/QW8odCxlKTpzLHU9bmV3IHdvLlBvaW50ZXJFdmVudChhLHIsbyxpLG4sZS5ub3coKSk7ZS5maXJlKFwicG9pbnRlckV2ZW50czpuZXdcIix7cG9pbnRlckV2ZW50OnV9KTtmb3IodmFyIGM9e2ludGVyYWN0aW9uOm4scG9pbnRlcjpyLGV2ZW50Om8sZXZlbnRUYXJnZXQ6aSx0YXJnZXRzOmwsdHlwZTphLHBvaW50ZXJFdmVudDp1fSxmPTA7ZjxsLmxlbmd0aDtmKyspe3ZhciBkPWxbZl07Zm9yKHZhciBwIGluIGQucHJvcHN8fHt9KXVbcF09ZC5wcm9wc1twXTt2YXIgdj0oMCxBLmRlZmF1bHQpKGQuZXZlbnRhYmxlLGQubm9kZSk7aWYodS5fc3VidHJhY3RPcmlnaW4odiksdS5ldmVudGFibGU9ZC5ldmVudGFibGUsdS5jdXJyZW50VGFyZ2V0PWQubm9kZSxkLmV2ZW50YWJsZS5maXJlKHUpLHUuX2FkZE9yaWdpbih2KSx1LmltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZHx8dS5wcm9wYWdhdGlvblN0b3BwZWQmJmYrMTxsLmxlbmd0aCYmbFtmKzFdLm5vZGUhPT11LmN1cnJlbnRUYXJnZXQpYnJlYWt9aWYoZS5maXJlKFwicG9pbnRlckV2ZW50czpmaXJlZFwiLGMpLFwidGFwXCI9PT1hKXt2YXIgaD11LmRvdWJsZT9Ebyh7aW50ZXJhY3Rpb246bixwb2ludGVyOnIsZXZlbnQ6byxldmVudFRhcmdldDppLHR5cGU6XCJkb3VibGV0YXBcIn0sZSk6dTtuLnByZXZUYXA9aCxuLnRhcFRpbWU9aC50aW1lU3RhbXB9cmV0dXJuIHV9ZnVuY3Rpb24gQW8odCxlKXt2YXIgbj10LmludGVyYWN0aW9uLHI9dC5wb2ludGVyLG89dC5ldmVudCxpPXQuZXZlbnRUYXJnZXQsYT10LnR5cGUscz1uLmdldFBvaW50ZXJJbmRleChyKSxsPW4ucG9pbnRlcnNbc107aWYoXCJ0YXBcIj09PWEmJihuLnBvaW50ZXJXYXNNb3ZlZHx8IWx8fGwuZG93blRhcmdldCE9PWkpKXJldHVybltdO2Zvcih2YXIgdT1fLmdldFBhdGgoaSksYz17aW50ZXJhY3Rpb246bixwb2ludGVyOnIsZXZlbnQ6byxldmVudFRhcmdldDppLHR5cGU6YSxwYXRoOnUsdGFyZ2V0czpbXSxub2RlOm51bGx9LGY9MDtmPHUubGVuZ3RoO2YrKyl7dmFyIGQ9dVtmXTtjLm5vZGU9ZCxlLmZpcmUoXCJwb2ludGVyRXZlbnRzOmNvbGxlY3QtdGFyZ2V0c1wiLGMpfXJldHVyblwiaG9sZFwiPT09YSYmKGMudGFyZ2V0cz1jLnRhcmdldHMuZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gdC5ldmVudGFibGUub3B0aW9ucy5ob2xkRHVyYXRpb249PT1uLnBvaW50ZXJzW3NdLmhvbGQuZHVyYXRpb259KSkpLGMudGFyZ2V0c31mdW5jdGlvbiB6byh0KXt2YXIgZT10LmludGVyYWN0aW9uLG49dC5wb2ludGVySW5kZXgscj1lLnBvaW50ZXJzW25dLmhvbGQ7ciYmci50aW1lb3V0JiYoY2xlYXJUaW1lb3V0KHIudGltZW91dCksci50aW1lb3V0PW51bGwpfXZhciBDbz1Jbztrby5kZWZhdWx0PUNvO3ZhciBSbz17fTtmdW5jdGlvbiBGbyh0KXt2YXIgZT10LmludGVyYWN0aW9uO2UuaG9sZEludGVydmFsSGFuZGxlJiYoY2xlYXJJbnRlcnZhbChlLmhvbGRJbnRlcnZhbEhhbmRsZSksZS5ob2xkSW50ZXJ2YWxIYW5kbGU9bnVsbCl9T2JqZWN0LmRlZmluZVByb3BlcnR5KFJvLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLFJvLmRlZmF1bHQ9dm9pZCAwO3ZhciBYbz17aWQ6XCJwb2ludGVyLWV2ZW50cy9ob2xkUmVwZWF0XCIsaW5zdGFsbDpmdW5jdGlvbih0KXt0LnVzZVBsdWdpbihrby5kZWZhdWx0KTt2YXIgZT10LnBvaW50ZXJFdmVudHM7ZS5kZWZhdWx0cy5ob2xkUmVwZWF0SW50ZXJ2YWw9MCxlLnR5cGVzLmhvbGRyZXBlYXQ9dC5hY3Rpb25zLnBoYXNlbGVzc1R5cGVzLmhvbGRyZXBlYXQ9ITB9LGxpc3RlbmVyczpbXCJtb3ZlXCIsXCJ1cFwiLFwiY2FuY2VsXCIsXCJlbmRhbGxcIl0ucmVkdWNlKChmdW5jdGlvbih0LGUpe3JldHVybiB0W1wicG9pbnRlckV2ZW50czpcIi5jb25jYXQoZSldPUZvLHR9KSx7XCJwb2ludGVyRXZlbnRzOm5ld1wiOmZ1bmN0aW9uKHQpe3ZhciBlPXQucG9pbnRlckV2ZW50O1wiaG9sZFwiPT09ZS50eXBlJiYoZS5jb3VudD0oZS5jb3VudHx8MCkrMSl9LFwicG9pbnRlckV2ZW50czpmaXJlZFwiOmZ1bmN0aW9uKHQsZSl7dmFyIG49dC5pbnRlcmFjdGlvbixyPXQucG9pbnRlckV2ZW50LG89dC5ldmVudFRhcmdldCxpPXQudGFyZ2V0cztpZihcImhvbGRcIj09PXIudHlwZSYmaS5sZW5ndGgpe3ZhciBhPWlbMF0uZXZlbnRhYmxlLm9wdGlvbnMuaG9sZFJlcGVhdEludGVydmFsO2E8PTB8fChuLmhvbGRJbnRlcnZhbEhhbmRsZT1zZXRUaW1lb3V0KChmdW5jdGlvbigpe2UucG9pbnRlckV2ZW50cy5maXJlKHtpbnRlcmFjdGlvbjpuLGV2ZW50VGFyZ2V0Om8sdHlwZTpcImhvbGRcIixwb2ludGVyOnIsZXZlbnQ6cn0sZSl9KSxhKSl9fX0pfTtSby5kZWZhdWx0PVhvO3ZhciBZbz17fTtmdW5jdGlvbiBXbyh0KXtyZXR1cm4oMCxqLmRlZmF1bHQpKHRoaXMuZXZlbnRzLm9wdGlvbnMsdCksdGhpc31PYmplY3QuZGVmaW5lUHJvcGVydHkoWW8sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksWW8uZGVmYXVsdD12b2lkIDA7dmFyIExvPXtpZDpcInBvaW50ZXItZXZlbnRzL2ludGVyYWN0YWJsZVRhcmdldHNcIixpbnN0YWxsOmZ1bmN0aW9uKHQpe3ZhciBlPXQuSW50ZXJhY3RhYmxlO2UucHJvdG90eXBlLnBvaW50ZXJFdmVudHM9V287dmFyIG49ZS5wcm90b3R5cGUuX2JhY2tDb21wYXRPcHRpb247ZS5wcm90b3R5cGUuX2JhY2tDb21wYXRPcHRpb249ZnVuY3Rpb24odCxlKXt2YXIgcj1uLmNhbGwodGhpcyx0LGUpO3JldHVybiByPT09dGhpcyYmKHRoaXMuZXZlbnRzLm9wdGlvbnNbdF09ZSkscn19LGxpc3RlbmVyczp7XCJwb2ludGVyRXZlbnRzOmNvbGxlY3QtdGFyZ2V0c1wiOmZ1bmN0aW9uKHQsZSl7dmFyIG49dC50YXJnZXRzLHI9dC5ub2RlLG89dC50eXBlLGk9dC5ldmVudFRhcmdldDtlLmludGVyYWN0YWJsZXMuZm9yRWFjaE1hdGNoKHIsKGZ1bmN0aW9uKHQpe3ZhciBlPXQuZXZlbnRzLGE9ZS5vcHRpb25zO2UudHlwZXNbb10mJmUudHlwZXNbb10ubGVuZ3RoJiZ0LnRlc3RJZ25vcmVBbGxvdyhhLHIsaSkmJm4ucHVzaCh7bm9kZTpyLGV2ZW50YWJsZTplLHByb3BzOntpbnRlcmFjdGFibGU6dH19KX0pKX0sXCJpbnRlcmFjdGFibGU6bmV3XCI6ZnVuY3Rpb24odCl7dmFyIGU9dC5pbnRlcmFjdGFibGU7ZS5ldmVudHMuZ2V0UmVjdD1mdW5jdGlvbih0KXtyZXR1cm4gZS5nZXRSZWN0KHQpfX0sXCJpbnRlcmFjdGFibGU6c2V0XCI6ZnVuY3Rpb24odCxlKXt2YXIgbj10LmludGVyYWN0YWJsZSxyPXQub3B0aW9uczsoMCxqLmRlZmF1bHQpKG4uZXZlbnRzLm9wdGlvbnMsZS5wb2ludGVyRXZlbnRzLmRlZmF1bHRzKSwoMCxqLmRlZmF1bHQpKG4uZXZlbnRzLm9wdGlvbnMsci5wb2ludGVyRXZlbnRzfHx7fSl9fX07WW8uZGVmYXVsdD1Mbzt2YXIgQm89e307T2JqZWN0LmRlZmluZVByb3BlcnR5KEJvLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLEJvLmRlZmF1bHQ9dm9pZCAwO3ZhciBVbz17aWQ6XCJwb2ludGVyLWV2ZW50c1wiLGluc3RhbGw6ZnVuY3Rpb24odCl7dC51c2VQbHVnaW4oa28pLHQudXNlUGx1Z2luKFJvLmRlZmF1bHQpLHQudXNlUGx1Z2luKFlvLmRlZmF1bHQpfX07Qm8uZGVmYXVsdD1Vbzt2YXIgTm89e307T2JqZWN0LmRlZmluZVByb3BlcnR5KE5vLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLE5vLmRlZmF1bHQ9dm9pZCAwO05vLmRlZmF1bHQ9e307dmFyIFZvPXt9O2Z1bmN0aW9uIHFvKHQpe3ZhciBlPXQuSW50ZXJhY3RhYmxlO3QuYWN0aW9ucy5waGFzZXMucmVmbG93PSEwLGUucHJvdG90eXBlLnJlZmxvdz1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24odCxlLG4pe2Zvcih2YXIgcj1pLmRlZmF1bHQuc3RyaW5nKHQudGFyZ2V0KT9LLmZyb20odC5fY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHQudGFyZ2V0KSk6W3QudGFyZ2V0XSxvPW4ud2luZG93LlByb21pc2UsYT1vP1tdOm51bGwscz1mdW5jdGlvbigpe3ZhciBpPXJbbF0scz10LmdldFJlY3QoaSk7aWYoIXMpcmV0dXJuXCJicmVha1wiO3ZhciB1PUsuZmluZChuLmludGVyYWN0aW9ucy5saXN0LChmdW5jdGlvbihuKXtyZXR1cm4gbi5pbnRlcmFjdGluZygpJiZuLmludGVyYWN0YWJsZT09PXQmJm4uZWxlbWVudD09PWkmJm4ucHJlcGFyZWQubmFtZT09PWUubmFtZX0pKSxjPXZvaWQgMDtpZih1KXUubW92ZSgpLGEmJihjPXUuX3JlZmxvd1Byb21pc2V8fG5ldyBvKChmdW5jdGlvbih0KXt1Ll9yZWZsb3dSZXNvbHZlPXR9KSkpO2Vsc2V7dmFyIGY9KDAsay50bGJyVG9YeXdoKShzKSxkPXtwYWdlOnt4OmYueCx5OmYueX0sY2xpZW50Ont4OmYueCx5OmYueX0sdGltZVN0YW1wOm4ubm93KCl9LHA9Vy5jb29yZHNUb0V2ZW50KGQpO2M9ZnVuY3Rpb24odCxlLG4scixvKXt2YXIgaT10LmludGVyYWN0aW9ucy5uZXcoe3BvaW50ZXJUeXBlOlwicmVmbG93XCJ9KSxhPXtpbnRlcmFjdGlvbjppLGV2ZW50Om8scG9pbnRlcjpvLGV2ZW50VGFyZ2V0Om4scGhhc2U6XCJyZWZsb3dcIn07aS5pbnRlcmFjdGFibGU9ZSxpLmVsZW1lbnQ9bixpLnByZXZFdmVudD1vLGkudXBkYXRlUG9pbnRlcihvLG8sbiwhMCksVy5zZXRaZXJvQ29vcmRzKGkuY29vcmRzLmRlbHRhKSwoMCxYdC5jb3B5QWN0aW9uKShpLnByZXBhcmVkLHIpLGkuX2RvUGhhc2UoYSk7dmFyIHM9dC53aW5kb3cuUHJvbWlzZSxsPXM/bmV3IHMoKGZ1bmN0aW9uKHQpe2kuX3JlZmxvd1Jlc29sdmU9dH0pKTp2b2lkIDA7aS5fcmVmbG93UHJvbWlzZT1sLGkuc3RhcnQocixlLG4pLGkuX2ludGVyYWN0aW5nPyhpLm1vdmUoYSksaS5lbmQobykpOihpLnN0b3AoKSxpLl9yZWZsb3dSZXNvbHZlKCkpO3JldHVybiBpLnJlbW92ZVBvaW50ZXIobyxvKSxsfShuLHQsaSxlLHApfWEmJmEucHVzaChjKX0sbD0wO2w8ci5sZW5ndGg7bCsrKXtpZihcImJyZWFrXCI9PT1zKCkpYnJlYWt9cmV0dXJuIGEmJm8uYWxsKGEpLnRoZW4oKGZ1bmN0aW9uKCl7cmV0dXJuIHR9KSl9KHRoaXMsZSx0KX19T2JqZWN0LmRlZmluZVByb3BlcnR5KFZvLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLFZvLmluc3RhbGw9cW8sVm8uZGVmYXVsdD12b2lkIDA7dmFyICRvPXtpZDpcInJlZmxvd1wiLGluc3RhbGw6cW8sbGlzdGVuZXJzOntcImludGVyYWN0aW9uczpzdG9wXCI6ZnVuY3Rpb24odCxlKXt2YXIgbj10LmludGVyYWN0aW9uO1wicmVmbG93XCI9PT1uLnBvaW50ZXJUeXBlJiYobi5fcmVmbG93UmVzb2x2ZSYmbi5fcmVmbG93UmVzb2x2ZSgpLEsucmVtb3ZlKGUuaW50ZXJhY3Rpb25zLmxpc3QsbikpfX19O1ZvLmRlZmF1bHQ9JG87dmFyIEdvPXt9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShHbyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxHby5kZWZhdWx0PXZvaWQgMDtHby5kZWZhdWx0PXt9O3ZhciBIbz17fTtPYmplY3QuZGVmaW5lUHJvcGVydHkoSG8sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksSG8uZXhjaGFuZ2U9dm9pZCAwO0hvLmV4Y2hhbmdlPXt9O3ZhciBLbz17fTtPYmplY3QuZGVmaW5lUHJvcGVydHkoS28sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksS28uZGVmYXVsdD12b2lkIDA7S28uZGVmYXVsdD17fTt2YXIgWm89e2V4cG9ydHM6e319O2Z1bmN0aW9uIEpvKHQpe3JldHVybihKbz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24odCl7cmV0dXJuIHR5cGVvZiB0fTpmdW5jdGlvbih0KXtyZXR1cm4gdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZ0LmNvbnN0cnVjdG9yPT09U3ltYm9sJiZ0IT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiB0fSkodCl9T2JqZWN0LmRlZmluZVByb3BlcnR5KFpvLmV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksWm8uZXhwb3J0cy5kZWZhdWx0PXZvaWQgMCxmci5kZWZhdWx0LnVzZSh4by5kZWZhdWx0KSxmci5kZWZhdWx0LnVzZShzZS5kZWZhdWx0KSxmci5kZWZhdWx0LnVzZShKZS5kZWZhdWx0KSxmci5kZWZhdWx0LnVzZShhZS5kZWZhdWx0KSxmci5kZWZhdWx0LnVzZShUdC5kZWZhdWx0KSxmci5kZWZhdWx0LnVzZShCby5kZWZhdWx0KSxmci5kZWZhdWx0LnVzZShhbi5kZWZhdWx0KSxmci5kZWZhdWx0LnVzZShtby5kZWZhdWx0KSxmci5kZWZhdWx0LnVzZShvZS5kZWZhdWx0KSxmci5kZWZhdWx0LnVzZShPdC5kZWZhdWx0KSxmci5kZWZhdWx0LnVzZShBdC5kZWZhdWx0KSxmci5kZWZhdWx0LnVzZShWby5kZWZhdWx0KSxmci5kZWZhdWx0LnVzZSh3ZS5kZWZhdWx0KSxmci5kZWZhdWx0LnVzZShLby5kZWZhdWx0KSxmci5kZWZhdWx0LnVzZShOby5kZWZhdWx0KSxmci5kZWZhdWx0Ll9fdXRpbHM9e2V4Y2hhbmdlOkhvLmV4Y2hhbmdlLGRpc3BsYWNlOkdvLHBvaW50ZXI6V30sZnIuZGVmYXVsdC51c2UocGUuZGVmYXVsdCk7dmFyIFFvPWZyLmRlZmF1bHQ7aWYoWm8uZXhwb3J0cy5kZWZhdWx0PVFvLFwib2JqZWN0XCI9PT1KbyhabykmJlpvKXRyeXtaby5leHBvcnRzPWZyLmRlZmF1bHR9Y2F0Y2godCl7fWZyLmRlZmF1bHQuZGVmYXVsdD1mci5kZWZhdWx0LFpvPVpvLmV4cG9ydHM7dmFyIHRpPXtleHBvcnRzOnt9fTtmdW5jdGlvbiBlaSh0KXtyZXR1cm4oZWk9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKHQpe3JldHVybiB0eXBlb2YgdH06ZnVuY3Rpb24odCl7cmV0dXJuIHQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmdC5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmdCE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgdH0pKHQpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aS5leHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHRpLmV4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIG5pPVpvLmRlZmF1bHQ7aWYodGkuZXhwb3J0cy5kZWZhdWx0PW5pLFwib2JqZWN0XCI9PT1laSh0aSkmJnRpKXRyeXt0aS5leHBvcnRzPVpvLmRlZmF1bHR9Y2F0Y2godCl7fXJldHVybiBaby5kZWZhdWx0LmRlZmF1bHQ9Wm8uZGVmYXVsdCx0aT10aS5leHBvcnRzfSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW50ZXJhY3QubWluLmpzLm1hcFxuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==