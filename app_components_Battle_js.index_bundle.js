/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkgithub_battle"] = self["webpackChunkgithub_battle"] || []).push([["app_components_Battle_js"],{

/***/ "./app/components/Battle.js":
/*!**********************************!*\
  !*** ./app/components/Battle.js ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Battle\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Results__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Results */ \"./app/components/Results.js\");\n/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Loading */ \"./app/components/Loading.js\");\n/* harmony import */ var _contexts_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/theme */ \"./app/contexts/theme.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\nfunction Instructions() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_contexts_theme__WEBPACK_IMPORTED_MODULE_4__.ThemeConsumer, null, function (_ref) {\n    var theme = _ref.theme;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"instructions-container\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", {\n      className: \"center-text header-lg\"\n    }, \"Instructions\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ol\", {\n      className: \"container-sm grid center-text battle-instructions\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", {\n      className: \"header-sm\"\n    }, \"Enter two Github users\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaUserFriends, {\n      className: \"bg-\".concat(theme),\n      color: \"rgb(255, 191, 116)\",\n      size: 140\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", {\n      className: \"header-sm\"\n    }, \"Battle\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaFighterJet, {\n      className: \"bg-\".concat(theme),\n      color: \"#727272\",\n      size: 140\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", {\n      className: \"header-sm\"\n    }, \"See the winners\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaTrophy, {\n      className: \"bg-\".concat(theme),\n      color: \"rgb(255, 215, 0)\",\n      size: 140\n    }))));\n  });\n}\n\nvar PlayerInput = /*#__PURE__*/function (_React$Component) {\n  _inherits(PlayerInput, _React$Component);\n\n  var _super = _createSuper(PlayerInput);\n\n  function PlayerInput() {\n    var _this;\n\n    _classCallCheck(this, PlayerInput);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      username: ''\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleSubmit\", function (event) {\n      event.preventDefault();\n\n      _this.props.onSubmit(_this.state.username);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleChange\", function (event) {\n      _this.setState({\n        username: event.target.value\n      });\n    });\n\n    return _this;\n  }\n\n  _createClass(PlayerInput, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_contexts_theme__WEBPACK_IMPORTED_MODULE_4__.ThemeConsumer, null, function (_ref2) {\n        var theme = _ref2.theme;\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"form\", {\n          className: \"column player\",\n          onSubmit: _this2.handleSubmit\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n          htmlFor: \"username\",\n          className: \"player-label\"\n        }, _this2.props.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n          className: \"row player-inputs\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n          type: \"text\",\n          id: \"username\",\n          className: \"input-\".concat(theme),\n          placeholder: \"github username\",\n          autoComplete: \"off\",\n          value: _this2.state.username,\n          onChange: _this2.handleChange\n        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n          className: \"btn \".concat(theme === 'dark' ? 'light-btn' : 'dark-btn'),\n          type: \"submit\",\n          disabled: !_this2.state.username\n        }, \"Submit\")));\n      });\n    }\n  }]);\n\n  return PlayerInput;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\nPlayerInput.propTypes = {\n  onSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),\n  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)\n};\n\nfunction PlayerPreview(_ref3) {\n  var username = _ref3.username,\n      onReset = _ref3.onReset,\n      label = _ref3.label;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_contexts_theme__WEBPACK_IMPORTED_MODULE_4__.ThemeConsumer, null, function (_ref4) {\n    var theme = _ref4.theme;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"column player\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", {\n      className: \"player-label\"\n    }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"row bg-\".concat(theme)\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"player-info\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n      className: \"avatar-small\",\n      src: \"https://github.com/\".concat(username, \".png?size=200\"),\n      alt: \"Avatar for \".concat(username)\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n      href: \"https://github.com/\".concat(username),\n      className: \"link\"\n    }, username)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n      className: \"btn-clear flex-center\",\n      onClick: onReset\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaTimesCircle, {\n      color: \"rgb(194, 57, 42)\",\n      size: 26\n    }))));\n  });\n}\n\nPlayerPreview.propTypes = {\n  username: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),\n  onReset: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),\n  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)\n};\n\nvar Battle = /*#__PURE__*/function (_React$Component2) {\n  _inherits(Battle, _React$Component2);\n\n  var _super2 = _createSuper(Battle);\n\n  function Battle() {\n    var _this3;\n\n    _classCallCheck(this, Battle);\n\n    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n      args[_key2] = arguments[_key2];\n    }\n\n    _this3 = _super2.call.apply(_super2, [this].concat(args));\n\n    _defineProperty(_assertThisInitialized(_this3), \"state\", {\n      playerOne: null,\n      playerTwo: null\n    });\n\n    _defineProperty(_assertThisInitialized(_this3), \"handleSubmit\", function (id, player) {\n      _this3.setState(_defineProperty({}, id, player));\n    });\n\n    _defineProperty(_assertThisInitialized(_this3), \"handleReset\", function (id) {\n      _this3.setState(_defineProperty({}, id, null));\n    });\n\n    return _this3;\n  }\n\n  _createClass(Battle, [{\n    key: \"render\",\n    value: function render() {\n      var _this4 = this;\n\n      var _this$state = this.state,\n          playerOne = _this$state.playerOne,\n          playerTwo = _this$state.playerTwo;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Instructions, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"players-container\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", {\n        className: \"center-text header-lg\"\n      }, \"Players\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"row space-around\"\n      }, playerOne === null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(PlayerInput, {\n        label: \"Player One\",\n        onSubmit: function onSubmit(player) {\n          return _this4.handleSubmit(\"playerOne\", player);\n        }\n      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(PlayerPreview, {\n        username: playerOne,\n        onReset: function onReset() {\n          return _this4.handleReset('playerOne');\n        },\n        label: \"Player One\"\n      }), playerTwo === null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(PlayerInput, {\n        label: \"Player Two\",\n        onSubmit: function onSubmit(player) {\n          return _this4.handleSubmit(\"playerTwo\", player);\n        }\n      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(PlayerPreview, {\n        username: playerTwo,\n        onReset: function onReset() {\n          return _this4.handleReset('playerTwo');\n        },\n        label: \"Player Two\"\n      })), playerOne && playerTwo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {\n        className: \"btn dark-btn btn-space\",\n        to: {\n          pathname: '/battle/results',\n          search: \"?playerOne=\".concat(playerOne, \"&playerTwo=\").concat(playerTwo)\n        }\n      }, \"Battle\")));\n    }\n  }]);\n\n  return Battle;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n\n\n//# sourceURL=webpack://github-battle/./app/components/Battle.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Results\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/api */ \"./app/utils/api.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ \"./app/components/Card.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Loading */ \"./app/components/Loading.js\");\n/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Tooltip */ \"./app/components/Tooltip.js\");\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! query-string */ \"./node_modules/query-string/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\nfunction ProfileList(_ref) {\n  var profile = _ref.profile;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ul\", {\n    className: \"card-list\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaUser, {\n    color: \"rgb(239, 115, 115)\",\n    size: 22\n  }), profile.name), profile.location && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_5__.default, {\n    text: \"User's location\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaCompass, {\n    color: \"rgb(144, 115, 255)\",\n    size: 22\n  }), profile.location)), profile.company && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_5__.default, {\n    text: \"User's company\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaBriefcase, {\n    color: \"#795548\",\n    size: 22\n  }), profile.company)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaUsers, {\n    color: \"rgb(129, 195, 245)\",\n    size: 22\n  }), profile.followers.toLocaleString(), \" followers\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaUserFriends, {\n    color: \"rgb(64, 183, 95)\",\n    size: 22\n  }), profile.following.toLocaleString(), \" following\"));\n}\n\nProfileList.propTypes = {\n  profile: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object.isRequired)\n};\n\nvar Results = /*#__PURE__*/function (_React$Component) {\n  _inherits(Results, _React$Component);\n\n  var _super = _createSuper(Results);\n\n  function Results() {\n    var _this;\n\n    _classCallCheck(this, Results);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      winner: null,\n      loser: null,\n      error: null,\n      loading: true\n    });\n\n    return _this;\n  }\n\n  _createClass(Results, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var _queryString$parse = query_string__WEBPACK_IMPORTED_MODULE_6__.parse(this.props.location.search),\n          playerOne = _queryString$parse.playerOne,\n          playerTwo = _queryString$parse.playerTwo;\n\n      (0,_utils_api__WEBPACK_IMPORTED_MODULE_1__.battle)([playerOne, playerTwo]).then(function (players) {\n        _this2.setState({\n          winner: players[0],\n          loser: players[1],\n          error: null,\n          loading: false\n        });\n      })[\"catch\"](function (_ref2) {\n        var message = _ref2.message;\n\n        _this2.setState({\n          error: message,\n          loading: false\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$state = this.state,\n          winner = _this$state.winner,\n          loser = _this$state.loser,\n          error = _this$state.error,\n          loading = _this$state.loading;\n      var onReset = this.props.onReset;\n\n      if (loading) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Loading__WEBPACK_IMPORTED_MODULE_4__.default, {\n          text: \"Battling\"\n        });\n      }\n\n      if (error) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n          className: \"center-text error\"\n        }, error);\n      }\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"grid space-around container-sm\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Card__WEBPACK_IMPORTED_MODULE_2__.default, {\n        header: winner.score === loser.score ? \"Tie\" : \"Winner\",\n        subheader: \"Score: \".concat(winner.score.toLocaleString()),\n        avatar: winner.profile.avatar_url,\n        href: winner.profile.html_url,\n        name: winner.profile.login\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ProfileList, {\n        profile: winner.profile\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Card__WEBPACK_IMPORTED_MODULE_2__.default, {\n        header: winner.score === loser.score ? \"Tie\" : \"Loser\",\n        subheader: \"Score: \".concat(loser.score.toLocaleString()),\n        avatar: loser.profile.avatar_url,\n        href: loser.profile.html_url,\n        name: loser.profile.login\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ProfileList, {\n        profile: loser.profile\n      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, {\n        className: \"btn dark-btn btn-space\",\n        to: \"/battle\"\n      }, \"Reset\"));\n    }\n  }]);\n\n  return Results;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n\n\n//# sourceURL=webpack://github-battle/./app/components/Results.js?");

/***/ })

}]);