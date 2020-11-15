/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkgithub_battle"] = self["webpackChunkgithub_battle"] || []).push([["app_components_Card_js-app_components_Tooltip_js-app_utils_api_js"],{

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Card\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/theme */ \"./app/contexts/theme.js\");\n\n\n\nfunction Card(_ref) {\n  var header = _ref.header,\n      subheader = _ref.subheader,\n      avatar = _ref.avatar,\n      href = _ref.href,\n      name = _ref.name,\n      children = _ref.children;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_contexts_theme__WEBPACK_IMPORTED_MODULE_2__.ThemeConsumer, null, function (_ref2) {\n    var theme = _ref2.theme;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"card bg-\".concat(theme)\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h4\", {\n      className: \"header-lg center-text\"\n    }, header), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n      className: \"avatar\",\n      src: avatar,\n      alt: \"Avatar for \".concat(name)\n    }), subheader && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h4\", {\n      className: \"center-text\"\n    }, subheader), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h2\", {\n      className: \"center-text\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n      className: \"link\",\n      href: href\n    }, name)), children);\n  });\n}\nCard.propTypes = {\n  header: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),\n  subheader: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),\n  avatar: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),\n  href: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),\n  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)\n};\n\n//# sourceURL=webpack://github-battle/./app/components/Card.js?");

/***/ }),

/***/ "./app/components/Hover.js":
/*!*********************************!*\
  !*** ./app/components/Hover.js ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Hover\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar Hover = /*#__PURE__*/function (_React$Component) {\n  _inherits(Hover, _React$Component);\n\n  var _super = _createSuper(Hover);\n\n  function Hover() {\n    var _this;\n\n    _classCallCheck(this, Hover);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      hovering: false\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"onMouseOver\", function () {\n      _this.setState({\n        hovering: true\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"onMouseOut\", function () {\n      _this.setState({\n        hovering: false\n      });\n    });\n\n    return _this;\n  }\n\n  _createClass(Hover, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        onMouseOver: this.onMouseOver,\n        onMouseOut: this.onMouseOut\n      }, this.props.children(this.state.hovering));\n    }\n  }]);\n\n  return Hover;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n\n\n//# sourceURL=webpack://github-battle/./app/components/Hover.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Tooltip\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Hover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Hover */ \"./app/components/Hover.js\");\n\n\n\nvar styles = {\n  container: {\n    position: \"relative\",\n    display: \"flex\"\n  },\n  tooltip: {\n    boxSizing: \"border-box\",\n    position: \"absolute\",\n    width: \"160px\",\n    bottom: \"100%\",\n    left: \"50%\",\n    marginLeft: \"-80px\",\n    borderRadius: \"3px\",\n    backgroundColor: \"hsla(0, 0%, 20%, 0.9)\",\n    padding: \"7px\",\n    marginBottom: \"5px\",\n    color: \"#fff\",\n    textAlign: \"center\",\n    fontSize: \"14px\"\n  }\n};\nfunction Tooltip(_ref) {\n  var text = _ref.text,\n      children = _ref.children;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Hover__WEBPACK_IMPORTED_MODULE_2__.default, null, function (hovering) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      style: styles.container\n    }, hovering === true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      style: styles.tooltip\n    }, text), children);\n  });\n}\nTooltip.propTypes = {\n  text: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)\n};\n\n//# sourceURL=webpack://github-battle/./app/components/Tooltip.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"battle\": () => /* binding */ battle,\n/* harmony export */   \"fetchPopularRepos\": () => /* binding */ fetchPopularRepos\n/* harmony export */ });\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar id = 'YOUR_CLIENT_ID';\nvar sec = 'YOUR_SECRET_ID';\nvar params = \"?client_id=\".concat(id, \"&client_secret=\").concat(sec);\n\nfunction getErrorMsg(message, username) {\n  if (message === 'Not Found') {\n    return \"\".concat(username, \" doesn't exist\");\n  }\n\n  return message;\n}\n\nfunction getProfile(username) {\n  return fetch(\"https://api.github.com/users/\".concat(username).concat(params)).then(function (res) {\n    return res.json();\n  }).then(function (profile) {\n    if (profile.message) {\n      throw new Error(getErrorMsg(profile.message, username));\n    }\n\n    return profile;\n  });\n}\n\nfunction getStarCount(repos) {\n  return repos.reduce(function (count, _ref) {\n    var stargazers_count = _ref.stargazers_count;\n    return count + stargazers_count;\n  }, 0);\n}\n\nfunction calculateScore(followers, repos) {\n  return followers * 3 + getStarCount(repos);\n}\n\nfunction getUserData(player) {\n  return Promise.all([getProfile(player), getRepos(player)]).then(function (_ref2) {\n    var _ref3 = _slicedToArray(_ref2, 2),\n        profile = _ref3[0],\n        repos = _ref3[1];\n\n    return {\n      profile: profile,\n      score: calculateScore(profile.followers, repos)\n    };\n  });\n}\n\nfunction getRepos(username) {\n  return fetch(\"https://api.github.com/users/\".concat(username, \"/repos\").concat(params, \"&per_page=100\")).then(function (res) {\n    return res.json();\n  }).then(function (repos) {\n    if (repos.message) {\n      throw new Error(getErrorMsg(repos.message, username));\n    }\n\n    return repos;\n  });\n}\n\nfunction sortPlayers(players) {\n  return players.sort(function (_ref4, _ref5) {\n    var scoreOne = _ref4.score;\n    var scoreTwo = _ref5.score;\n    return scoreTwo - scoreOne;\n  });\n}\n\nfunction battle(players) {\n  return Promise.all([getUserData(players[0]), getUserData(players[1])]).then(function (results) {\n    return sortPlayers(results);\n  });\n}\nfunction fetchPopularRepos(language) {\n  var endpoint = window.encodeURI(\"https://api.github.com/search/repositories?q=stars:>1+language=\".concat(language, \"&sort=stars&order=desc&type=Repositories\"));\n  return fetch(endpoint).then(function (res) {\n    return res.json();\n  }).then(function (data) {\n    if (!data.items) {\n      throw new Error(data.message);\n    }\n\n    return data.items;\n  });\n}\n\n//# sourceURL=webpack://github-battle/./app/utils/api.js?");

/***/ })

}]);