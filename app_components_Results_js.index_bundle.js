/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkgithub_battle"] = self["webpackChunkgithub_battle"] || []).push([["app_components_Results_js"],{

/***/ "./app/components/Card.js":
/*!********************************!*\
  !*** ./app/components/Card.js ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Card\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/theme */ \"./app/contexts/theme.js\");\n\n\n\nfunction Card(_ref) {\n  var header = _ref.header,\n      subheader = _ref.subheader,\n      avatar = _ref.avatar,\n      href = _ref.href,\n      name = _ref.name,\n      children = _ref.children;\n  var theme = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_theme__WEBPACK_IMPORTED_MODULE_2__.default);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"card bg-\".concat(theme)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h4\", {\n    className: \"header-lg center-text\"\n  }, header), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    className: \"avatar\",\n    src: avatar,\n    alt: \"Avatar for \".concat(name)\n  }), subheader && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h4\", {\n    className: \"center-text\"\n  }, subheader), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h2\", {\n    className: \"center-text\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    className: \"link\",\n    href: href\n  }, name)), children);\n}\nCard.propTypes = {\n  header: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),\n  subheader: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),\n  avatar: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),\n  href: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),\n  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)\n};\n\n//# sourceURL=webpack://github-battle/./app/components/Card.js?");

/***/ }),

/***/ "./app/components/Results.js":
/*!***********************************!*\
  !*** ./app/components/Results.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Results\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/api */ \"./app/utils/api.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ \"./app/components/Card.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Loading */ \"./app/components/Loading.js\");\n/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Tooltip */ \"./app/components/Tooltip.js\");\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! query-string */ \"./node_modules/query-string/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\nfunction ProfileList(_ref) {\n  var profile = _ref.profile;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ul\", {\n    className: \"card-list\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaUser, {\n    color: \"rgb(239, 115, 115)\",\n    size: 22\n  }), profile.name), profile.location && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_5__.default, {\n    text: \"User's location\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaCompass, {\n    color: \"rgb(144, 115, 255)\",\n    size: 22\n  }), profile.location)), profile.company && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_5__.default, {\n    text: \"User's company\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaBriefcase, {\n    color: \"#795548\",\n    size: 22\n  }), profile.company)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaUsers, {\n    color: \"rgb(129, 195, 245)\",\n    size: 22\n  }), profile.followers.toLocaleString(), \" followers\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaUserFriends, {\n    color: \"rgb(64, 183, 95)\",\n    size: 22\n  }), profile.following.toLocaleString(), \" following\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaCode, {\n    color: \"rgb(20, 18, 30)\",\n    size: 22\n  }), profile.public_repos.toLocaleString(), \" repos\"));\n}\n\nProfileList.propTypes = {\n  profile: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object.isRequired)\n};\n\nfunction battleReducer(state, action) {\n  if (action.type === \"success\") {\n    return _objectSpread(_objectSpread({}, state), {}, {\n      winner: action.winner,\n      loser: action.loser,\n      loading: false\n    });\n  } else if (action.type === \"error\") {\n    return _objectSpread(_objectSpread({}, state), {}, {\n      loading: false,\n      error: action.message\n    });\n  } else {\n    throw new Error(\"Action type not supported\");\n  }\n}\n\nfunction Results(_ref2) {\n  var location = _ref2.location;\n\n  var _queryString$parse = query_string__WEBPACK_IMPORTED_MODULE_6__.parse(location.search),\n      playerOne = _queryString$parse.playerOne,\n      playerTwo = _queryString$parse.playerTwo;\n\n  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(battleReducer, {\n    winner: null,\n    loser: null,\n    error: null,\n    loading: true\n  }),\n      _useReducer2 = _slicedToArray(_useReducer, 2),\n      state = _useReducer2[0],\n      dispatch = _useReducer2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    (0,_utils_api__WEBPACK_IMPORTED_MODULE_1__.battle)([playerOne, playerTwo]).then(function (players) {\n      return dispatch({\n        type: \"success\",\n        winner: players[0],\n        loser: players[1]\n      });\n    })[\"catch\"](function (_ref3) {\n      var message = _ref3.message;\n      return dispatch({\n        type: \"error\",\n        message: message\n      });\n    });\n  }, [playerOne, playerTwo]);\n  var winner = state.winner,\n      loser = state.loser,\n      error = state.error,\n      loading = state.loading;\n\n  if (loading) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Loading__WEBPACK_IMPORTED_MODULE_4__.default, {\n      text: \"Battling\"\n    });\n  }\n\n  if (error) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n      className: \"center-text error\"\n    }, error);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"grid space-around container-sm\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Card__WEBPACK_IMPORTED_MODULE_2__.default, {\n    header: winner.score === loser.score ? \"Tie\" : \"Winner\",\n    subheader: \"Score: \".concat(winner.score.toLocaleString()),\n    avatar: winner.profile.avatar_url,\n    href: winner.profile.html_url,\n    name: winner.profile.login\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ProfileList, {\n    profile: winner.profile\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Card__WEBPACK_IMPORTED_MODULE_2__.default, {\n    header: winner.score === loser.score ? \"Tie\" : \"Loser\",\n    subheader: \"Score: \".concat(loser.score.toLocaleString()),\n    avatar: loser.profile.avatar_url,\n    href: loser.profile.html_url,\n    name: loser.profile.login\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ProfileList, {\n    profile: loser.profile\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, {\n    className: \"btn dark-btn btn-space\",\n    to: \"/battle\"\n  }, \"Reset\"));\n}\n\n//# sourceURL=webpack://github-battle/./app/components/Results.js?");

/***/ }),

/***/ "./app/components/Tooltip.js":
/*!***********************************!*\
  !*** ./app/components/Tooltip.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Tooltip\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useHover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useHover */ \"./app/hooks/useHover.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar styles = {\n  container: {\n    position: \"relative\",\n    display: \"flex\"\n  },\n  tooltip: {\n    boxSizing: \"border-box\",\n    position: \"absolute\",\n    width: \"160px\",\n    bottom: \"100%\",\n    left: \"50%\",\n    marginLeft: \"-80px\",\n    borderRadius: \"3px\",\n    backgroundColor: \"hsla(0, 0%, 20%, 0.9)\",\n    padding: \"7px\",\n    marginBottom: \"5px\",\n    color: \"#fff\",\n    textAlign: \"center\",\n    fontSize: \"14px\"\n  }\n};\nfunction Tooltip(_ref) {\n  var text = _ref.text,\n      children = _ref.children;\n\n  var _useHover = (0,_hooks_useHover__WEBPACK_IMPORTED_MODULE_2__.default)(),\n      _useHover2 = _slicedToArray(_useHover, 2),\n      hovering = _useHover2[0],\n      attrs = _useHover2[1];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", _extends({\n    style: styles.container\n  }, attrs), hovering === true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    style: styles.tooltip\n  }, text), children);\n}\nTooltip.propTypes = {\n  text: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)\n};\n\n//# sourceURL=webpack://github-battle/./app/components/Tooltip.js?");

/***/ }),

/***/ "./app/hooks/useHover.js":
/*!*******************************!*\
  !*** ./app/hooks/useHover.js ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ useHover\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\nfunction useHover() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      hovering = _useState2[0],\n      setHovering = _useState2[1];\n\n  var onMouseOver = function onMouseOver() {\n    return setHovering(true);\n  };\n\n  var onMouseOut = function onMouseOut() {\n    return setHovering(false);\n  };\n\n  return [hovering, {\n    onMouseOver: onMouseOver,\n    onMouseOut: onMouseOut\n  }];\n}\n\n//# sourceURL=webpack://github-battle/./app/hooks/useHover.js?");

/***/ }),

/***/ "./app/utils/api.js":
/*!**************************!*\
  !*** ./app/utils/api.js ***!
  \**************************/
/*! namespace exports */
/*! export battle [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fetchPopularRepos [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"battle\": () => /* binding */ battle,\n/* harmony export */   \"fetchPopularRepos\": () => /* binding */ fetchPopularRepos\n/* harmony export */ });\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar id = \"YOUR_CLIENT_ID\";\nvar sec = \"YOUR_SECRET_ID\";\nvar params = \"?client_id=\".concat(id, \"&client_secret=\").concat(sec);\n\nfunction getErrorMsg(message, username) {\n  if (message === \"Not Found\") {\n    return \"\".concat(username, \" doesn't exist\");\n  }\n\n  return message;\n}\n\nfunction getProfile(username) {\n  return fetch(\"https://api.github.com/users/\".concat(username).concat(params)).then(function (res) {\n    return res.json();\n  }).then(function (profile) {\n    if (profile.message) {\n      throw new Error(getErrorMsg(profile.message, username));\n    }\n\n    return profile;\n  });\n}\n\nfunction getStarCount(repos) {\n  return repos.reduce(function (count, _ref) {\n    var stargazers_count = _ref.stargazers_count;\n    return count + stargazers_count;\n  }, 0);\n}\n\nfunction calculateScore(followers, repos) {\n  return followers * 3 + getStarCount(repos);\n}\n\nfunction getUserData(player) {\n  return Promise.all([getProfile(player), getRepos(player)]).then(function (_ref2) {\n    var _ref3 = _slicedToArray(_ref2, 2),\n        profile = _ref3[0],\n        repos = _ref3[1];\n\n    return {\n      profile: profile,\n      score: calculateScore(profile.followers, repos)\n    };\n  });\n}\n\nfunction getRepos(username) {\n  return fetch(\"https://api.github.com/users/\".concat(username, \"/repos\").concat(params, \"&per_page=100\")).then(function (res) {\n    return res.json();\n  }).then(function (repos) {\n    if (repos.message) {\n      throw new Error(getErrorMsg(repos.message, username));\n    }\n\n    return repos;\n  });\n}\n\nfunction sortPlayers(players) {\n  return players.sort(function (_ref4, _ref5) {\n    var scoreOne = _ref4.score;\n    var scoreTwo = _ref5.score;\n    return scoreTwo - scoreOne;\n  });\n}\n\nfunction battle(players) {\n  return Promise.all([getUserData(players[0]), getUserData(players[1])]).then(function (results) {\n    return sortPlayers(results);\n  });\n}\nfunction fetchPopularRepos(language) {\n  var endpoint = window.encodeURI(\"https://api.github.com/search/repositories?q=stars:>1+language=\".concat(language, \"&sort=stars&order=desc&type=Repositories\"));\n  return fetch(endpoint).then(function (res) {\n    return res.json();\n  }).then(function (data) {\n    if (!data.items) {\n      throw new Error(data.message);\n    }\n\n    return data.items;\n  });\n}\n\n//# sourceURL=webpack://github-battle/./app/utils/api.js?");

/***/ })

}]);