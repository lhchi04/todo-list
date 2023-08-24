/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n  font-family: 'Josefin Sans';\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #bfdbde;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n}\n\n.header {\n  height: 70px;\n  background-color: #78a8bc;\n}\n\n.task-container {\n  color: #001a5f;\n  width: clamp(500px, 80%, 1000px);\n  align-self: center;\n\n}\n.task-preview {\n  display: flex;\n  flex-direction: column;\n}\n.preview-container {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  padding: 10px;\n  cursor: pointer;\n  border-bottom: #78a8bc 2px solid;\n}\n.preview {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  color: #001a5f;\n}\n.checkbtn {\n  border-radius: 50%;\n  height: 25px;\n  width: 25px;\n  cursor: pointer;\n  border: #78a8bcab 2px solid;\n  background-color: rgba(255, 255, 255, 0.76);\n}\n.checkbtn:hover, .checkbtn:focus {\n  border: #78a8bc 2px solid;\n  background-color: white;\n  -webkit-transition: all 300ms ease;\n\t-moz-transition: all 300ms ease;\n\t-ms-transition: all 300ms ease;\n\t-o-transition: all 300ms ease;\n\ttransition: all 300ms ease;\n}\n.checkbtn:active {\n  background-color: #78a8bc;\n}\n\n\n.view-all-container {\n  position: fixed;\n  flex-direction: column;\n  display: none;\n  box-sizing: border-box;\n  border-radius: 20px;\n  background-color: #bfdbde;\n  width: clamp(500px, 80%, 1000px);\n  height: 350px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: #001a5f;\n  transition: opacity 0.3s ease-out;\n}\n.view-container {\n  height: 320px;\n  display: flex;\n}\n.main-view-container {\n  min-width: 80%;\n  padding: 20px;\n}\n.side-view-container {\n  flex-grow: 1;\n  border-top-right-radius: 20px;\n  background-color: #90bed1;\n  padding: 20px;\n}\n.viewbtn {\n  padding: 16px;\n  box-sizing: border-box;\n  border-top: 2px solid #90bed1;\n  display: flex;  \n  gap: 20px;\n}\n\n.addbtn {\n  background-color: transparent;\n  padding: 10px;\n  border: none;\n  outline: none;\n  color: #78a8bc;\n  display: flex;\n  cursor: pointer;\n  font-size: 16px;\n  transition: opacity 0.3s ease-out;\n}\n.addbtn:hover {\n  color: #001a5f;\n}\n\n/* Styles for form */\n.form-container {\n  /* display: block; */\n  display: none;\n  /* top: -400px; */\n  transition: opacity 0.3s ease-out;\n  box-sizing: border-box;\n  border: #78a8bc 2px solid;\n  border-radius: 20px;\n  /* position: fixed; */\n  /* width: 600px; */\n  /* left: 50%; */\n  /* transform: translate(-50%, -50%); */\n}\n.add-container {\n  display: flex;\n  flex-direction: column;\n}\n.new-form-container {\n  display: block;\n}\nform {\n  display: flex;\n  flex-direction: column;\n  /* max-width: 600px; */\n  border-radius: 20px;\n  padding: 20px;\n  background-color: #bfdbde;\n  color: #001a5f;\n}\n.form-info {\n  display: flex;\n  flex-wrap: wrap;\n}\n.due-date-container, .priority-container {\n  display: flex;\n  flex: 1;\n  flex-wrap: wrap;\n}\nform input[type=text], form input[type=number], form input[type=date], form select {\n  box-sizing: border-box;\n  width: 100%;\n  padding: 10px;\n  /* margin: 5px 0 22px 0; */\n  border: none;\n  /* border-radius: 15px; */\n  background: transparent;\n  color: #001a5f;\n  font-size: 16px;\n}\n.title {\n  font-size: 20px;\n  font-weight: bold;\n}\nform input[type=text]:focus, form input[type=number]:focus {\n  outline: none;\n}\n.formbtn {\n  display: flex;  \n  margin-left: auto;\n  gap: 20px;\n}\n.close, .submit, .cancelbtn, .savebtn {\n  padding: 10px 50px;\n  border-radius: 20px;\n  cursor: pointer;\n  border: 2px solid #78a8bc;\n  -webkit-transition: all 300ms ease;\n\t-moz-transition: all 300ms ease;\n\t-ms-transition: all 300ms ease;\n\t-o-transition: all 300ms ease;\n\ttransition: all 300ms ease;\n}\n.submit, .savebtn {\n  background-color: #78a8bc;\n  color: white;\n}\n.submit:disabled, .savebtn:disabled {\n  background-color: #93bcce9f;\n  color: rgba(255, 255, 255, 0.76);\n}\n\n.shadow {\n  position: fixed;\n  display: none;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n  transition: opacity 0.3s ease-out;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n// import _ from 'date-fns';\n// import add from 'date-fns/add';\n\n\n\nconst todoList = [];\nconst content = document.getElementById('content');\n\nclass Todo {\n  constructor(title, description, dueDate, priority, notes) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.notes = notes;\n  }\n\n  titleInfo() {\n    return this.title;\n  }\n\n  descriptionInfo() {\n    return this.description;\n  }\n\n  dueDateInfo() {\n    return this.dueDate;\n  }\n\n  priorityInfo() {\n    return this.priority;\n  }\n\n  noteInfo() {\n    return this.notes;\n  }\n}\n\nfunction addToList() {\n  const i = todoList.length - 1;\n  console.log(todoList);\n  const task = new Todo(todoList[i].title, todoList[i].description, todoList[i].dueDate, todoList[i].priority, todoList[i].notes);\n  return task;\n}\n\nfunction printPreview(task, position) {\n  if (position === 0) return task.titleInfo();\n  if (position === 1) return task.descriptionInfo();\n  if (position === 2) return task.dueDateInfo();\n  if (position === 3) return task.priorityInfo();\n  return task.noteInfo();\n}\n\nconst addTask = (form, taskPreview, title, description, dueDate, priority, notes) => {\n  form.preventDefault();\n  const newTask = {\n    title: title.value,\n    description: description.value,\n    dueDate: dueDate.value,\n    priority: priority.options[priority.selectedIndex].text,\n    notes: notes.value,\n  };\n  todoList.push(newTask);\n  const index = todoList.indexOf(newTask);\n  const myNewTask = addToList();\n  // Add task preview\n  const previewContainer = document.createElement('div');\n  previewContainer.classList.add('preview-container');\n  // Add check button\n  const checkBtn = document.createElement('button');\n  checkBtn.classList.add('checkbtn');\n  previewContainer.appendChild(checkBtn);\n  checkBtn.addEventListener('click', () => {\n    checkBtn.parentElement.style.opacity = 0;\n    checkBtn.parentElement.remove();\n    todoList.splice(index, 1);\n  });\n\n  // Add task preview container\n  const preview = document.createElement('div');\n  preview.classList.add('preview');\n  previewContainer.appendChild(preview);\n  const titlePreview = document.createElement('h2');\n  const descriptionPreview = document.createElement('h3');\n  const dueDatePreview = document.createElement('h4');\n  const priorityPreview = document.createElement('h4');\n  const notePreview = document.createElement('h4');\n  preview.append(titlePreview, descriptionPreview, dueDatePreview, priorityPreview);\n\n  // Add task view\n  const viewAllContainer = document.createElement('div');\n  viewAllContainer.classList.add('view-all-container');\n  const viewContainer = document.createElement('div');\n  viewContainer.classList.add('view-container');\n  // Add shadow for expand view option\n  const shadow = document.createElement('div');\n  shadow.classList.add('shadow');\n  content.appendChild(shadow);\n  content.appendChild(viewAllContainer);\n  const mainViewContainer = document.createElement('div');\n  mainViewContainer.classList.add('main-view-container');\n  const sideViewContainer = document.createElement('div');\n  sideViewContainer.classList.add('side-view-container');\n  const buttonContainer = document.createElement('div');\n  buttonContainer.classList.add('viewbtn');\n  const cancelBtn = document.createElement('button');\n  cancelBtn.textContent = 'Cancel';\n  cancelBtn.classList.add('cancelbtn');\n  const saveBtn = document.createElement('button');\n  saveBtn.textContent = 'Save';\n  saveBtn.classList.add('savebtn');\n  buttonContainer.append(cancelBtn, saveBtn);\n  viewContainer.append(mainViewContainer, sideViewContainer);\n  viewAllContainer.append(viewContainer, buttonContainer);\n  const titleView = document.createElement('h2');\n  const descriptionView = document.createElement('h3');\n  const dueDateView = document.createElement('h4');\n  const priorityView = document.createElement('h4');\n  const noteView = document.createElement('h4');\n\n  titleView.textContent = titlePreview.textContent = printPreview(myNewTask, 0);\n  descriptionView.textContent = descriptionPreview.textContent = printPreview(myNewTask, 1);\n  dueDateView.textContent = dueDatePreview.textContent = printPreview(myNewTask, 2);\n  priorityView.textContent = priorityPreview.textContent = printPreview(myNewTask, 3);\n  noteView.textContent = notePreview.textContent = printPreview(myNewTask, 4);\n  taskPreview.appendChild(previewContainer);\n\n  mainViewContainer.append(titleView, descriptionView, noteView);\n  sideViewContainer.append(dueDateView, priorityView);\n\n  saveBtn.disabled = true; // the default state is 'disabled'\n  function buttonState() {\n    if (titleView.textContent === \"\") {\n      saveBtn.disabled = true;\n    } else {\n      saveBtn.disabled = false;\n    }\n  }\n  viewAllContainer.addEventListener(\"keyup\", buttonState);\n\n  cancelBtn.addEventListener('click', () => {\n    viewAllContainer.style.display = 'none';\n    const shadowMain = content.querySelector('.shadow');\n    shadowMain.style.display = 'none';\n  });\n  saveBtn.addEventListener('click', () => {\n    viewAllContainer.contentEditable = 'false';\n    todoList[index].title = titleView.textContent = titlePreview.textContent = titleView.innerHTML;\n    todoList[index].description = descriptionView.textContent = descriptionPreview.textContent = descriptionView.innerHTML;\n    todoList[index].dueDate = dueDateView.textContent = dueDatePreview.textContent = dueDateView.innerHTML;\n    todoList[index].priority = priorityView.textContent = priorityPreview.textContent = priorityView.innerHTML;\n    todoList[index].notes = noteView.textContent = notePreview.textContent = noteView.innerHTML;\n    viewAllContainer.style.opacity = 0;\n    const shadowMain = content.querySelector('.shadow');\n    shadowMain.style.opacity = 0;\n  });\n  return { viewAllContainer, previewContainer, viewContainer };\n};\n\nfunction closeForm() {\n  document.querySelector('.new-form-container').style.opacity = 0;\n  document.querySelector('.addbtn').style.opacity = 1;\n}\n\nfunction resetForm(title, description, dueDate, priority, notes, formSubmitBtn) {\n  title.value = '';\n  title.focus();\n  description.value = '';\n  dueDate.value = '';\n  priority.value = '0';\n  notes.value = '';\n  formSubmitBtn.disabled = true;\n}\n\nconst view = (createdTask) => {\n  const shadowMain = content.querySelector('.shadow');\n  shadowMain.style.display = 'block';\n  createdTask.viewAllContainer.style.opacity = 1;\n  createdTask.viewAllContainer.style.display = 'flex';\n  createdTask.viewAllContainer.contentEditable = 'true';\n  // document.addEventListener('click', (event) => {\n  //   const withinBoundaries = event.composedPath().includes(createdTask.viewContainer);\n  //   if (withinBoundaries) {\n  //     createdTask.viewContainer.style.display = 'flex';\n  //   } else {\n  //     createdTask.viewContainer.style.display = 'none';\n  //   }\n  // });\n};\n\nconst createMainContainer = () => {\n  // Add task container\n  const taskContainer = document.createElement('div');\n  taskContainer.classList.add('task-container');\n  const taskPreview = document.createElement('div');\n  taskPreview.classList.add('task-preview');\n  taskContainer.appendChild(taskPreview);\n  content.appendChild(taskContainer);\n  // Add container to add task\n  const addContainer = document.createElement('div');\n  addContainer.classList.add('add-container');\n  const addTaskBtn = document.createElement('button');\n  addTaskBtn.classList.add('addbtn');\n  addTaskBtn.textContent = 'Add task';\n  addContainer.appendChild(addTaskBtn);\n  taskContainer.appendChild(addContainer);\n  // Add form\n  const formContainer = document.querySelector('.form-container');\n  const formClone = formContainer.cloneNode(true);\n  formClone.classList.add('new-form-container');\n  addContainer.appendChild(formClone);\n  formClone.style.opacity = 0;\n  const title = formClone.querySelector('.title');\n  const description = formClone.querySelector('.description');\n  const dueDate = formClone.querySelector('.due-date');\n  const priority = formClone.querySelector('.priority');\n  const notes = formClone.querySelector('.notes');\n  const formSubmitBtn = formClone.querySelector('.submit');\n  // Open form button\n  addTaskBtn.addEventListener('click', () => {\n    addTaskBtn.style.opacity = 0;\n    formClone.style.opacity = 1;\n    title.focus();\n  });\n  // Close form button\n  const closeFormBtn = formClone.querySelector('.close');\n  closeFormBtn.addEventListener('click', closeForm);\n  // Submit form button\n  formSubmitBtn.disabled = true; // the default state is 'disabled'\n  function buttonState() {\n    if (title.value === \"\") {\n      formSubmitBtn.disabled = true;\n    } else {\n      formSubmitBtn.disabled = false;\n    }\n  }\n  title.addEventListener(\"keyup\", buttonState);\n\n  const submitForm = (e) => {\n    const createdTask = addTask(e, taskPreview, title, description, dueDate, priority, notes);\n    resetForm(title, description, dueDate, priority, notes, formSubmitBtn);\n    createdTask.previewContainer.addEventListener('click', () => {\n      view(createdTask);\n    });\n  };\n\n  formClone.addEventListener('submit', (e) => {\n    submitForm(e);\n  });\n  return { addContainer, addTaskBtn, taskPreview };\n};\n\nfunction mainView() {\n  // Add header\n  const header = document.createElement('div');\n  header.classList.add('header');\n  content.appendChild(header);\n  const mainContainer = createMainContainer();\n  return content;\n}\n\ndocument.body.appendChild(mainView());\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;