(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("@cassette/core"), require("@cassette/components"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types", "@cassette/core", "@cassette/components"], factory);
	else if(typeof exports === 'object')
		exports["cassettePlayer"] = factory(require("react"), require("prop-types"), require("@cassette/core"), require("@cassette/components"));
	else
		root["cassettePlayer"] = factory(root["React"], root["PropTypes"], root["cassetteCore"], root["cassetteComponents"]);
})((typeof self !== "undefined" ? self : this), function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

function RepeatIcon (props) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M33 24c0-3.53-2.04-6.58-5-8.05v4.42l4.91 4.91c.06-.42.09-.85.09-1.28zm5 0c0 1.88-.41 3.65-1.08 5.28l3.03 3.03C41.25 29.82 42 27 42 24c0-8.56-5.99-15.72-14-17.54v4.13c5.78 1.72 10 7.07 10 13.41zM8.55 6L6 8.55 15.45 18H6v12h8l10 10V26.55l8.51 8.51c-1.34 1.03-2.85 1.86-4.51 2.36v4.13c2.75-.63 5.26-1.89 7.37-3.62L39.45 42 42 39.45l-18-18L8.55 6zM24 8l-4.18 4.18L24 16.36V8z","key":0}),React.createElement("path",{"d":"M0 0h48v48H0z","fill":"none","key":1})]);
}

RepeatIcon.defaultProps = {"width":"48","height":"48","viewBox":"0 0 48 48"};

module.exports = RepeatIcon;

RepeatIcon.default = RepeatIcon;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

function RepeatIcon (props) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M14 18v12h8l10 10V8L22 18h-8z","key":0}),React.createElement("path",{"d":"M0 0h48v48H0z","fill":"none","key":1})]);
}

RepeatIcon.defaultProps = {"width":"48","height":"48","viewBox":"0 0 48 48"};

module.exports = RepeatIcon;

RepeatIcon.default = RepeatIcon;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

function RepeatIcon (props) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M37 24c0-3.53-2.04-6.58-5-8.05v16.11c2.96-1.48 5-4.53 5-8.06zm-27-6v12h8l10 10V8L18 18h-8z","key":0}),React.createElement("path",{"d":"M0 0h48v48H0z","fill":"none","key":1})]);
}

RepeatIcon.defaultProps = {"width":"48","height":"48","viewBox":"0 0 48 48"};

module.exports = RepeatIcon;

RepeatIcon.default = RepeatIcon;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

function RepeatIcon (props) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M6 18v12h8l10 10V8L14 18H6zm27 6c0-3.53-2.04-6.58-5-8.05v16.11c2.96-1.48 5-4.53 5-8.06zM28 6.46v4.13c5.78 1.72 10 7.07 10 13.41s-4.22 11.69-10 13.41v4.13c8.01-1.82 14-8.97 14-17.54S36.01 8.28 28 6.46z","key":0}),React.createElement("path",{"d":"M0 0h48v48H0z","fill":"none","key":1})]);
}

RepeatIcon.defaultProps = {"width":"48","height":"48","viewBox":"0 0 48 48"};

module.exports = RepeatIcon;

RepeatIcon.default = RepeatIcon;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

function RepeatIcon (props) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M0 0h48v48H0z","fill":"none","key":0}),React.createElement("path",{"d":"M14 14h20v6l8-8-8-8v6H10v12h4v-8zm20 20H14v-6l-8 8 8 8v-6h24V26h-4v8z","key":1})]);
}

RepeatIcon.defaultProps = {"width":"48","height":"48","viewBox":"0 0 48 48"};

module.exports = RepeatIcon;

RepeatIcon.default = RepeatIcon;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

function RepeatOneIcon (props) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M0 0h48v48H0z","fill":"none","key":0}),React.createElement("path",{"d":"M14 14h20v6l8-8-8-8v6H10v12h4v-8zm20 20H14v-6l-8 8 8 8v-6h24V26h-4v8zm-8-4V18h-2l-4 2v2h3v8h3z","key":1})]);
}

RepeatOneIcon.defaultProps = {"width":"48","height":"48","viewBox":"0 0 48 48"};

module.exports = RepeatOneIcon;

RepeatOneIcon.default = RepeatOneIcon;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

function ShuffleIcon (props) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M0 0h48v48H0z","fill":"none","key":0}),React.createElement("path",{"d":"M21.17 18.34L10.83 8 8 10.83l10.34 10.34 2.83-2.83zM29 8l4.09 4.09L8 37.17 10.83 40l25.09-25.09L40 19V8H29zm.66 18.83l-2.83 2.83 6.26 6.26L29 40h11V29l-4.09 4.09-6.25-6.26z","key":1})]);
}

ShuffleIcon.defaultProps = {"width":"48","height":"48","viewBox":"0 0 48 48"};

module.exports = ShuffleIcon;

ShuffleIcon.default = ShuffleIcon;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

function FullscreenIcon (props) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M0 0h48v48H0z","fill":"none","key":0}),React.createElement("path",{"d":"M14 28h-4v10h10v-4h-6v-6zm-4-8h4v-6h6v-4H10v10zm24 14h-6v4h10V28h-4v6zm-6-24v4h6v6h4V10H28z","key":1})]);
}

FullscreenIcon.defaultProps = {"width":"48","height":"48","viewBox":"0 0 48 48"};

module.exports = FullscreenIcon;

FullscreenIcon.default = FullscreenIcon;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

function FullscreenExitIcon (props) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M0 0h48v48H0z","fill":"none","key":0}),React.createElement("path",{"d":"M10 32h6v6h4V28H10v4zm6-16h-6v4h10V10h-4v6zm12 22h4v-6h6v-4H28v10zm4-22v-6h-4v10h10v-4h-6z","key":1})]);
}

FullscreenExitIcon.defaultProps = {"width":"48","height":"48","viewBox":"0 0 48 48"};

module.exports = FullscreenExitIcon;

FullscreenExitIcon.default = FullscreenExitIcon;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"root":"React","commonjs":"react","commonjs2":"react","amd":"react"}
var external_root_React_commonjs_react_commonjs2_react_amd_react_ = __webpack_require__(0);
var external_root_React_commonjs_react_commonjs2_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs_react_commonjs2_react_amd_react_);

// EXTERNAL MODULE: external {"root":"cassetteCore","commonjs":"@cassette/core","commonjs2":"@cassette/core","amd":"@cassette/core"}
var core_ = __webpack_require__(2);

// EXTERNAL MODULE: external {"root":"PropTypes","commonjs":"prop-types","commonjs2":"prop-types","amd":"prop-types"}
var external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_ = __webpack_require__(1);
var external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_);

// EXTERNAL MODULE: external {"root":"cassetteComponents","commonjs":"@cassette/components","commonjs2":"@cassette/components","amd":"@cassette/components"}
var components_ = __webpack_require__(3);

// CONCATENATED MODULE: ./src/utils/classNames.js
// minimal replacement for https://github.com/JedWatson/classnames
// inspired by https://github.com/FormidableLabs/react-live/blob/5ca26733f5a866d4af2b4782024113cbbe76f54a/src/utils/cn.js
function classNames() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.map(reduceHash).filter(Boolean).join(' ');
}

function reduceHash(obj) {
  if (!obj || typeof obj !== 'object') {
    return obj;
  }

  return Object.keys(obj).filter(key => obj[key]).join(' ');
}

/* harmony default export */ var utils_classNames = (classNames);
// CONCATENATED MODULE: ./src/controls/common/ButtonWrapper.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const ButtonWrapper = Object(external_root_React_commonjs_react_commonjs2_react_amd_react_["forwardRef"])((_ref, ref) => {
  let className = _ref.className,
      children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["className", "children"]);

  return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", _extends({
    ref: ref,
    className: utils_classNames('cassette__media_button_wrapper', className)
  }, rest), children);
});
ButtonWrapper.propTypes = {
  className: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.string,
  children: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.node.isRequired
};
/* harmony default export */ var common_ButtonWrapper = (ButtonWrapper);
// CONCATENATED MODULE: ./src/controls/PlayPauseButton.js





/**
 * A button which, when clicked, toggles whether the media is paused
 */

class PlayPauseButton_PlayPauseButton extends external_root_React_commonjs_react_commonjs2_react_amd_react_["PureComponent"] {
  render() {
    const _this$props = this.props,
          paused = _this$props.paused,
          awaitingPlayResume = _this$props.awaitingPlayResume,
          activeTrackIndex = _this$props.activeTrackIndex,
          onTogglePause = _this$props.onTogglePause,
          onSelectTrackIndex = _this$props.onSelectTrackIndex,
          _this$props$trackInde = _this$props.trackIndex,
          trackIndex = _this$props$trackInde === void 0 ? activeTrackIndex : _this$props$trackInde;
    const isCurrent = activeTrackIndex === trackIndex;
    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(common_ButtonWrapper, null, external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("button", {
      type: "button",
      className: utils_classNames('cassette__play_pause_button cassette__media_button', {
        playing: isCurrent && (!paused || awaitingPlayResume)
      }),
      onClick: isCurrent ? onTogglePause : () => onSelectTrackIndex(trackIndex)
    }, external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      className: "foreground"
    }, external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      className: "left"
    }), external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      className: "right"
    }))));
  }

}
PlayPauseButton_PlayPauseButton.propTypes = {
  paused: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.bool.isRequired,
  awaitingPlayResume: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.bool.isRequired,
  activeTrackIndex: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  onTogglePause: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func.isRequired,
  onSelectTrackIndex: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func.isRequired,
  trackIndex: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number
};
/* harmony default export */ var controls_PlayPauseButton = (Object(core_["playerContextFilter"])(PlayPauseButton_PlayPauseButton, ['paused', 'awaitingPlayResume', 'activeTrackIndex', 'onTogglePause', 'onSelectTrackIndex']));
// CONCATENATED MODULE: ./src/controls/common/SkipButton.js




class SkipButton_SkipButton extends external_root_React_commonjs_react_commonjs2_react_amd_react_["PureComponent"] {
  render() {
    const _this$props = this.props,
          back = _this$props.back,
          onClick = _this$props.onClick;
    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(common_ButtonWrapper, null, external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("button", {
      type: "button",
      className: utils_classNames('cassette__skip_button cassette__media_button', {
        back
      }),
      onClick: onClick
    }, external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      className: "skip_button_inner foreground"
    }, external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      className: "right_facing_triangle"
    }), external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      className: "right_facing_triangle"
    }), external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      className: "vertical_bar"
    }))));
  }

}
SkipButton_SkipButton.propTypes = {
  back: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.bool,
  onClick: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func.isRequired
};
/* harmony default export */ var common_SkipButton = (SkipButton_SkipButton);
// CONCATENATED MODULE: ./src/controls/BackSkipButton.js




/**
 * A button which, when clicked, either skips to the previous track in the playlist or to the beginning of the current playing track, depending upon the current elapsed time
 */

class BackSkipButton_BackSkipButton extends external_root_React_commonjs_react_commonjs2_react_amd_react_["PureComponent"] {
  render() {
    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(common_SkipButton, {
      back: true,
      onClick: this.props.onBackSkip
    });
  }

}
BackSkipButton_BackSkipButton.propTypes = {
  onBackSkip: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func.isRequired
};
/* harmony default export */ var controls_BackSkipButton = (Object(core_["playerContextFilter"])(BackSkipButton_BackSkipButton, ['onBackSkip']));
// CONCATENATED MODULE: ./src/controls/ForwardSkipButton.js




/**
 * A button which, when clicked, skips to the next track in the playlist
 */

class ForwardSkipButton_ForwardSkipButton extends external_root_React_commonjs_react_commonjs2_react_amd_react_["PureComponent"] {
  render() {
    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(common_SkipButton, {
      onClick: this.props.onForwardSkip
    });
  }

}
ForwardSkipButton_ForwardSkipButton.propTypes = {
  onForwardSkip: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func.isRequired
};
/* harmony default export */ var controls_ForwardSkipButton = (Object(core_["playerContextFilter"])(ForwardSkipButton_ForwardSkipButton, ['onForwardSkip']));
// EXTERNAL MODULE: /home/ben/Documents/Code/cassette/node_modules/svg-react-loader/lib/loader.js?name=RepeatIcon!./node_modules/material-design-icons/av/svg/design/ic_volume_off_48px.svg?
var ic_volume_off_48px = __webpack_require__(4);
var ic_volume_off_48px_default = /*#__PURE__*/__webpack_require__.n(ic_volume_off_48px);

// EXTERNAL MODULE: /home/ben/Documents/Code/cassette/node_modules/svg-react-loader/lib/loader.js?name=RepeatIcon!./node_modules/material-design-icons/av/svg/design/ic_volume_mute_48px.svg?
var ic_volume_mute_48px = __webpack_require__(5);
var ic_volume_mute_48px_default = /*#__PURE__*/__webpack_require__.n(ic_volume_mute_48px);

// EXTERNAL MODULE: /home/ben/Documents/Code/cassette/node_modules/svg-react-loader/lib/loader.js?name=RepeatIcon!./node_modules/material-design-icons/av/svg/design/ic_volume_down_48px.svg?
var ic_volume_down_48px = __webpack_require__(6);
var ic_volume_down_48px_default = /*#__PURE__*/__webpack_require__.n(ic_volume_down_48px);

// EXTERNAL MODULE: /home/ben/Documents/Code/cassette/node_modules/svg-react-loader/lib/loader.js?name=RepeatIcon!./node_modules/material-design-icons/av/svg/design/ic_volume_up_48px.svg?
var ic_volume_up_48px = __webpack_require__(7);
var ic_volume_up_48px_default = /*#__PURE__*/__webpack_require__.n(ic_volume_up_48px);

// CONCATENATED MODULE: ./src/utils/getVolumeIconComponent.js





function getVolumeIconComponent(volume, muted) {
  if (muted) {
    return ic_volume_off_48px_default.a;
  }

  if (volume === 0) {
    return ic_volume_mute_48px_default.a;
  }

  if (volume <= 1 / 2) {
    return ic_volume_down_48px_default.a;
  }

  return ic_volume_up_48px_default.a;
}

/* harmony default export */ var utils_getVolumeIconComponent = (getVolumeIconComponent);
// CONCATENATED MODULE: ./src/utils/getVolumeBarDirectionFromPosition.js
function getVolumeBarDirectionFromPosition(volumeBarPosition) {
  switch (volumeBarPosition) {
    case 'rightabove':
    case 'rightbelow':
      return 'right';

    case 'hiddenup':
    case 'upabove':
    default:
      return 'up';
  }
}

/* harmony default export */ var utils_getVolumeBarDirectionFromPosition = (getVolumeBarDirectionFromPosition);
// CONCATENATED MODULE: ./src/utils/reactStopPropagation.js
function stopPropagation(e) {
  e.stopPropagation();
  e.nativeEvent.stopImmediatePropagation();
}

/* harmony default export */ var reactStopPropagation = (stopPropagation);
// CONCATENATED MODULE: ./src/controls/VolumeControl.js









const volumeControlStyle = {
  touchAction: 'none'
};
const volumeBarContainerHiddenStyle = {
  opacity: 0
};
/**
 * A [`MuteButton`](#mutebutton) which, when hovered (with a mouse) or initially tapped (on touch screens), displays a bar for adjusting media volume
 */

class VolumeControl_VolumeControl extends external_root_React_commonjs_react_commonjs2_react_amd_react_["PureComponent"] {
  static getDerivedStateFromProps(props, state) {
    const hover = state.hover,
          volumeBarFocused = state.volumeBarFocused,
          volumeBarPosition = state.volumeBarPosition;

    if (volumeBarPosition && !hover && !volumeBarFocused && !props.setVolumeInProgress) {
      return {
        volumeBarPosition: null
      };
    }

    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      volumeBarFocused: false,
      // null | 'hiddenup' | 'hiddenright' | 'upabove' | 'rightabove' | 'rightbelow'
      volumeBarPosition: null
    };
    this.volumeControlRef = null;
    this.muteToggleRef = null;
    this.volumeBarContainerRef = null; // bind methods fired on React events

    this.setVolumeControlRef = this.setVolumeControlRef.bind(this);
    this.setMuteToggleRef = this.setMuteToggleRef.bind(this);
    this.setVolumeBarContainerRef = this.setVolumeBarContainerRef.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleVolumeBarFocus = this.handleVolumeBarFocus.bind(this);
    this.handleVolumeBarBlur = this.handleVolumeBarBlur.bind(this); // bind listeners to add on mount and remove on unmount

    this.handleMuteToggleTouchStart = this.handleMuteToggleTouchStart.bind(this);
  }

  componentDidMount() {
    /* this should be a normal React listener but there seems to be a bug
     * in React preventing that from working as expected:
     * https://github.com/facebook/react/issues/9809
     */
    this.muteToggleRef.addEventListener('touchstart', this.handleMuteToggleTouchStart);
    /* since touchstart bubbling from inside this component is canceled
     * we need to manually trigger mouseleave for touch devices
     */

    document.addEventListener('touchstart', this.handleMouseLeave);
  }

  componentDidUpdate() {
    /* if we've applied a hidden class to our volume bar, it's because
     * we need to measure the element dimensions in order to figure out
     * where and in which direction to position it. if there isn't enough
     * vertical space above the control button, then we'll position the
     * bar hidden and left-to-right to measure it again on the next
     * componentDidUpdate. then if there's room we'll place it either
     * above or below (there's no good way to vertically position the
     * volume bar below the control button, so we skip that option).
     * granted - it's certainly not ideal to need to check dom dimensions
     * before placing an element, but a user could have applied unanticipated
     * styles we won't know about unless we check.
     */
    const volumeBarPosition = this.state.volumeBarPosition;

    if (volumeBarPosition === 'hiddenup' || volumeBarPosition === 'hiddenright') {
      const volumeControlRect = this.volumeControlRef.getBoundingClientRect();
      const top = volumeControlRect.top;
      const volumeBarContainerHeight = this.volumeBarContainerRef.offsetHeight;
      let newPosition;

      if (volumeBarPosition === 'hiddenup') {
        newPosition = volumeBarContainerHeight <= top ? 'upabove' : 'hiddenright';
      } else {
        if (volumeBarContainerHeight <= top) {
          newPosition = 'rightabove';
        } else {
          const viewportHeight = document.documentElement.clientHeight;
          const bottom = viewportHeight - volumeControlRect.bottom;
          newPosition = volumeBarContainerHeight <= bottom ? 'rightbelow' : null;
        }
      }

      this.setState({
        volumeBarPosition: newPosition
      });
    }
  }

  componentWillUnmount() {
    this.muteToggleRef.removeEventListener('touchstart', this.handleMuteToggleTouchStart);
    document.removeEventListener('touchstart', this.handleMouseLeave);
  }

  setVolumeControlRef(ref) {
    this.volumeControlRef = ref;
  }

  setMuteToggleRef(ref) {
    this.muteToggleRef = ref;
  }

  setVolumeBarContainerRef(ref) {
    this.volumeBarContainerRef = ref;
  }

  handleMouseEnter() {
    this.setState(state => ({
      hover: true,
      volumeBarPosition: state.volumeBarPosition || 'hiddenup'
    }));
  }

  handleMouseLeave() {
    this.setState(state => ({
      hover: false,
      volumeBarPosition: state.volumeBarFocused || this.props.setVolumeInProgress ? state.volumeBarPosition : null
    }));
  }

  handleVolumeBarFocus() {
    this.setState(state => ({
      volumeBarFocused: true,
      volumeBarPosition: state.volumeBarPosition || 'hiddenup'
    }));
  }

  handleVolumeBarBlur() {
    this.setState(state => ({
      volumeBarFocused: false,
      volumeBarPosition: state.hover || this.props.setVolumeInProgress ? state.volumeBarPosition : null
    }));
  }

  handleMuteToggleTouchStart(e) {
    if (!this.state.hover && !this.state.volumeBarFocused) {
      e.preventDefault();
      this.handleMouseEnter();
    }
  }

  renderHandle() {
    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      className: utils_classNames('handle', {
        highlight: this.props.setVolumeInProgress
      })
    }, external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", null));
  }

  render() {
    const _this$props = this.props,
          volume = _this$props.volume,
          muted = _this$props.muted,
          onSetVolume = _this$props.onSetVolume,
          onSetVolumeComplete = _this$props.onSetVolumeComplete,
          onToggleMuted = _this$props.onToggleMuted;
    const _this$state = this.state,
          hover = _this$state.hover,
          volumeBarFocused = _this$state.volumeBarFocused,
          volumeBarPosition = _this$state.volumeBarPosition;
    const VolumeIcon = utils_getVolumeIconComponent(volume, muted);
    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(common_ButtonWrapper, {
      ref: this.setVolumeControlRef,
      className: "cassette__volume_control",
      style: volumeControlStyle,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      onTouchStart: reactStopPropagation
    }, external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("button", {
      ref: this.setMuteToggleRef,
      type: "button",
      className: utils_classNames('cassette__material_toggle cassette__media_button cassette__mute_btn', {
        highlight: hover || volumeBarFocused,
        on: !muted
      }),
      onClick: onToggleMuted
    }, external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      className: "foreground inner"
    }, external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(VolumeIcon, {
      width: "100%",
      height: "100%"
    }))), external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      style: volumeBarPosition ? undefined : volumeBarContainerHiddenStyle,
      ref: this.setVolumeBarContainerRef,
      className: utils_classNames('cassette__volume_control__volume_bar_container', volumeBarPosition),
      onFocus: this.handleVolumeBarFocus,
      onBlur: this.handleVolumeBarBlur
    }, external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(components_["ProgressBar"], {
      className: utils_classNames('cassette__volume_control__volume_bar', volumeBarPosition),
      progressClassName: "volume",
      progress: muted ? 0 : volume,
      progressDirection: utils_getVolumeBarDirectionFromPosition(volumeBarPosition),
      handle: this.renderHandle(),
      onAdjustProgress: onSetVolume,
      onAdjustComplete: onSetVolumeComplete
    })));
  }

}
VolumeControl_VolumeControl.propTypes = {
  volume: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  muted: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.bool.isRequired,
  setVolumeInProgress: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.bool.isRequired,
  onSetVolume: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func.isRequired,
  onSetVolumeComplete: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func.isRequired,
  onToggleMuted: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func.isRequired
};
/* harmony default export */ var controls_VolumeControl = (Object(core_["playerContextFilter"])(VolumeControl_VolumeControl, ['volume', 'muted', 'setVolumeInProgress', 'onSetVolume', 'onSetVolumeComplete', 'onToggleMuted']));
// CONCATENATED MODULE: ./src/controls/MuteButton.js






/**
 * A button which, when clicked, toggles whether the media's audio is muted
 */

class MuteButton_MuteButton extends external_root_React_commonjs_react_commonjs2_react_amd_react_["PureComponent"] {
  render() {
    const _this$props = this.props,
          volume = _this$props.volume,
          muted = _this$props.muted,
          onToggleMuted = _this$props.onToggleMuted;
    const VolumeIcon = utils_getVolumeIconComponent(volume, muted);
    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(common_ButtonWrapper, null, external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("button", {
      type: "button",
      className: utils_classNames('cassette__material_toggle cassette__media_button cassette__mute_btn', {
        on: !muted
      }),
      onClick: onToggleMuted
    }, external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      className: "foreground inner"
    }, external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(VolumeIcon, {
      width: "100%",
      height: "100%"
    }))));
  }

}
MuteButton_MuteButton.propTypes = {
  volume: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  muted: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.bool.isRequired,
  onToggleMuted: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func.isRequired
};
/* harmony default export */ var controls_MuteButton = (Object(core_["playerContextFilter"])(MuteButton_MuteButton, ['volume', 'muted', 'onToggleMuted']));
// EXTERNAL MODULE: /home/ben/Documents/Code/cassette/node_modules/svg-react-loader/lib/loader.js?name=RepeatIcon!./node_modules/material-design-icons/av/svg/design/ic_repeat_48px.svg?
var ic_repeat_48px = __webpack_require__(8);
var ic_repeat_48px_default = /*#__PURE__*/__webpack_require__.n(ic_repeat_48px);

// EXTERNAL MODULE: /home/ben/Documents/Code/cassette/node_modules/svg-react-loader/lib/loader.js?name=RepeatOneIcon!./node_modules/material-design-icons/av/svg/design/ic_repeat_one_48px.svg?
var ic_repeat_one_48px = __webpack_require__(9);
var ic_repeat_one_48px_default = /*#__PURE__*/__webpack_require__.n(ic_repeat_one_48px);

// CONCATENATED MODULE: ./src/controls/RepeatButton.js








function getNextRepeatStrategy(repeatStrategy) {
  let nextIndex = core_["repeatStrategyOptions"].indexOf(repeatStrategy) + 1;

  if (nextIndex >= core_["repeatStrategyOptions"].length) {
    nextIndex = 0;
  }

  return core_["repeatStrategyOptions"][nextIndex];
}
/**
 * A button which, when clicked, cycles to the next `repeatStrategy` (`none`, `playlist` or `track`)
 */


class RepeatButton_RepeatButton extends external_root_React_commonjs_react_commonjs2_react_amd_react_["PureComponent"] {
  constructor(props) {
    super(props); // bind methods fired on React events

    this.handleNextRepeatStrategy = this.handleNextRepeatStrategy.bind(this);
  }

  handleNextRepeatStrategy() {
    this.props.onSetRepeatStrategy(getNextRepeatStrategy(this.props.repeatStrategy));
  }

  render() {
    const repeatStrategy = this.props.repeatStrategy;
    const Icon = repeatStrategy === 'track' ? ic_repeat_one_48px_default.a : ic_repeat_48px_default.a;
    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(common_ButtonWrapper, null, external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("button", {
      type: "button",
      className: utils_classNames('cassette__material_toggle cassette__media_button cassette__repeat_btn', {
        on: repeatStrategy !== 'none'
      }),
      onClick: this.handleNextRepeatStrategy
    }, external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      className: "inner foreground"
    }, external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(Icon, {
      width: "100%",
      height: "100%"
    }))));
  }

}
RepeatButton_RepeatButton.propTypes = {
  repeatStrategy: core_["PlayerPropTypes"].repeatStrategy.isRequired,
  onSetRepeatStrategy: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func.isRequired
};
/* harmony default export */ var controls_RepeatButton = (Object(core_["playerContextFilter"])(RepeatButton_RepeatButton, ['repeatStrategy', 'onSetRepeatStrategy']));
// EXTERNAL MODULE: /home/ben/Documents/Code/cassette/node_modules/svg-react-loader/lib/loader.js?name=ShuffleIcon!./node_modules/material-design-icons/av/svg/design/ic_shuffle_48px.svg?
var ic_shuffle_48px = __webpack_require__(10);
var ic_shuffle_48px_default = /*#__PURE__*/__webpack_require__.n(ic_shuffle_48px);

// CONCATENATED MODULE: ./src/controls/ShuffleButton.js






/**
 * A button which, when clicked, toggles whether the playlist is being played in specified order or in shuffle order
 */

class ShuffleButton_ShuffleButton extends external_root_React_commonjs_react_commonjs2_react_amd_react_["PureComponent"] {
  render() {
    const _this$props = this.props,
          shuffle = _this$props.shuffle,
          onToggleShuffle = _this$props.onToggleShuffle;
    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(common_ButtonWrapper, null, external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("button", {
      type: "button",
      className: utils_classNames('cassette__material_toggle cassette__media_button cassette__shuffle_btn', {
        on: shuffle
      }),
      onClick: onToggleShuffle
    }, external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      className: "inner foreground"
    }, external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(ic_shuffle_48px_default.a, {
      width: "100%",
      height: "100%"
    }))));
  }

}
ShuffleButton_ShuffleButton.propTypes = {
  shuffle: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.bool.isRequired,
  onToggleShuffle: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func.isRequired
};
/* harmony default export */ var controls_ShuffleButton = (Object(core_["playerContextFilter"])(ShuffleButton_ShuffleButton, ['shuffle', 'onToggleShuffle']));
// CONCATENATED MODULE: ./src/controls/common/MediaStatusBar.js



class MediaStatusBar_MediaStatusBar extends external_root_React_commonjs_react_commonjs2_react_amd_react_["PureComponent"] {
  render() {
    const _this$props = this.props,
          style = _this$props.style,
          displayText = _this$props.displayText,
          displayTime = _this$props.displayTime;
    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      className: "cassette__media_status_bar",
      style: style
    }, external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      className: "cassette__media_info_marquee"
    }, external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(components_["MaybeMarquee"], {
      content: displayText
    })), external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      className: "cassette__media_time_progress"
    }, displayTime));
  }

}
MediaStatusBar_MediaStatusBar.propTypes = {
  style: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.object,
  displayText: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.string.isRequired,
  displayTime: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.string.isRequired
};
/* harmony default export */ var common_MediaStatusBar = (MediaStatusBar_MediaStatusBar);
// CONCATENATED MODULE: ./src/utils/convertToTime.js
/* converts given number of seconds to standard time display format
 * http://goo.gl/kEvnKn
 */
function convertToTime(number) {
  const hours = Math.floor(number / (60 * 60));
  const mins = Math.floor(number / 60) - hours * 60;
  const secs = (number % 60).toFixed();
  let time = hours > 0 ? `${hours}:` : '';
  time += `${mins < 10 && hours > 0 ? '0' : ''}${mins}:`;
  time += `${secs < 10 ? '0' : ''}${secs}`;
  return time;
}

/* harmony default export */ var utils_convertToTime = (convertToTime);
// CONCATENATED MODULE: ./src/controls/MediaProgress.js






const mediaStatusBarStyle = {
  pointerEvents: 'none'
};
/**
 * An interactive media progress bar which can be adjusted by dragging, along with a text overlay of the current track metadata and the elapsed time
 */

class MediaProgress_MediaProgress extends external_root_React_commonjs_react_commonjs2_react_amd_react_["PureComponent"] {
  render() {
    const _this$props = this.props,
          playlist = _this$props.playlist,
          activeTrackIndex = _this$props.activeTrackIndex,
          currentTime = _this$props.currentTime,
          seekPreviewTime = _this$props.seekPreviewTime,
          seekInProgress = _this$props.seekInProgress,
          duration = _this$props.duration,
          getDisplayText = _this$props.getDisplayText,
          _this$props$durationO = _this$props.durationOverride,
          durationOverride = _this$props$durationO === void 0 ? duration : _this$props$durationO;
    const time = seekInProgress ? seekPreviewTime : currentTime;
    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      className: "cassette__media_progress_container"
    }, external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(components_["MediaProgressBar"], {
      className: "cassette__media_progress_bar",
      progressClassName: "progress",
      progressDirection: "right"
    }), external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(common_MediaStatusBar, {
      style: mediaStatusBarStyle,
      displayText: getDisplayText(playlist[activeTrackIndex]) || '',
      displayTime: `${utils_convertToTime(time)} / ${utils_convertToTime(durationOverride)}`
    }));
  }

}
MediaProgress_MediaProgress.propTypes = {
  playlist: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.arrayOf(core_["PlayerPropTypes"].track.isRequired).isRequired,
  activeTrackIndex: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  currentTime: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  seekPreviewTime: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  seekInProgress: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.bool.isRequired,
  duration: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  getDisplayText: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func.isRequired,
  durationOverride: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number
};
MediaProgress_MediaProgress.defaultProps = {
  getDisplayText: core_["getDisplayText"]
};
/* harmony default export */ var controls_MediaProgress = (Object(core_["playerContextFilter"])(MediaProgress_MediaProgress, ['playlist', 'activeTrackIndex', 'currentTime', 'seekPreviewTime', 'seekInProgress', 'duration']));
// CONCATENATED MODULE: ./src/controls/MediaProgressDisplay.js






/**
 * A non-interactive version of [`MediaProgress`](#mediaprogress) which always uses the `currentTime` of the playing media (which may differ from the `seekPreviewTime` if your app also displays an interactive seek bar)
 */

class MediaProgressDisplay_MediaProgressDisplay extends external_root_React_commonjs_react_commonjs2_react_amd_react_["PureComponent"] {
  render() {
    const _this$props = this.props,
          playlist = _this$props.playlist,
          activeTrackIndex = _this$props.activeTrackIndex,
          currentTime = _this$props.currentTime,
          duration = _this$props.duration,
          getDisplayText = _this$props.getDisplayText,
          _this$props$durationO = _this$props.durationOverride,
          durationOverride = _this$props$durationO === void 0 ? duration : _this$props$durationO;
    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      className: "cassette__media_progress_container"
    }, external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(components_["MediaProgressBarDisplay"], {
      className: "cassette__media_progress_bar",
      progressClassName: "progress",
      progressDirection: "right"
    }), external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(common_MediaStatusBar, {
      displayText: getDisplayText(playlist[activeTrackIndex]) || '',
      displayTime: `${utils_convertToTime(currentTime)} / ${utils_convertToTime(durationOverride)}`
    }));
  }

}
MediaProgressDisplay_MediaProgressDisplay.propTypes = {
  playlist: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.arrayOf(core_["PlayerPropTypes"].track.isRequired).isRequired,
  activeTrackIndex: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  currentTime: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  duration: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number.isRequired,
  getDisplayText: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func.isRequired,
  durationOverride: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.number
};
MediaProgressDisplay_MediaProgressDisplay.defaultProps = {
  getDisplayText: core_["getDisplayText"]
};
/* harmony default export */ var controls_MediaProgressDisplay = (Object(core_["playerContextFilter"])(MediaProgressDisplay_MediaProgressDisplay, ['playlist', 'activeTrackIndex', 'currentTime', 'duration']));
// EXTERNAL MODULE: /home/ben/Documents/Code/cassette/node_modules/svg-react-loader/lib/loader.js?name=FullscreenIcon!./node_modules/material-design-icons/navigation/svg/design/ic_fullscreen_48px.svg?
var ic_fullscreen_48px = __webpack_require__(11);
var ic_fullscreen_48px_default = /*#__PURE__*/__webpack_require__.n(ic_fullscreen_48px);

// EXTERNAL MODULE: /home/ben/Documents/Code/cassette/node_modules/svg-react-loader/lib/loader.js?name=FullscreenExitIcon!./node_modules/material-design-icons/navigation/svg/design/ic_fullscreen_exit_48px.svg?
var ic_fullscreen_exit_48px = __webpack_require__(12);
var ic_fullscreen_exit_48px_default = /*#__PURE__*/__webpack_require__.n(ic_fullscreen_exit_48px);

// CONCATENATED MODULE: ./src/controls/FullscreenButton.js







/**
 * A button which, when clicked, tells the surrounding [`FullscreenContextProvider`](#fullscreencontextprovider) (if present) to toggle fullscreen mode
 */

class FullscreenButton_FullscreenButton extends external_root_React_commonjs_react_commonjs2_react_amd_react_["PureComponent"] {
  render() {
    const _this$props = this.props,
          fullscreen = _this$props.fullscreen,
          requestFullscreen = _this$props.requestFullscreen,
          requestExitFullscreen = _this$props.requestExitFullscreen;
    const IconComponent = fullscreen ? ic_fullscreen_exit_48px_default.a : ic_fullscreen_48px_default.a;
    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(common_ButtonWrapper, null, external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("button", {
      type: "button",
      className: utils_classNames('cassette__material_toggle cassette__media_button cassette__fullscreen_btn', {
        on: fullscreen
      }),
      onClick: fullscreen ? requestExitFullscreen : requestFullscreen
    }, external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      className: "inner foreground"
    }, external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(IconComponent, {
      width: "100%",
      height: "100%"
    }))));
  }

}
FullscreenButton_FullscreenButton.propTypes = {
  fullscreen: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.bool.isRequired,
  requestFullscreen: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func.isRequired,
  requestExitFullscreen: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func.isRequired
};
/* harmony default export */ var controls_FullscreenButton = (Object(core_["playerContextFilter"])(FullscreenButton_FullscreenButton, ['fullscreen', 'requestFullscreen', 'requestExitFullscreen']));
// CONCATENATED MODULE: ./src/controls/Spacer.js


/**
 * Provides a buffer between control components
 */

class Spacer_Spacer extends external_root_React_commonjs_react_commonjs2_react_amd_react_["PureComponent"] {
  render() {
    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(common_ButtonWrapper, null, external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      className: "cassette__spacer"
    }));
  }

}
/* harmony default export */ var controls_Spacer = (Spacer_Spacer);
// CONCATENATED MODULE: ./src/utils/getControlRenderProp.js












const controlComponents = {
  playpause: controls_PlayPauseButton,
  backskip: controls_BackSkipButton,
  forwardskip: controls_ForwardSkipButton,
  volume: controls_VolumeControl,
  mute: controls_MuteButton,
  repeat: controls_RepeatButton,
  shuffle: controls_ShuffleButton,
  progress: controls_MediaProgress,
  progressdisplay: controls_MediaProgressDisplay,
  fullscreen: controls_FullscreenButton,
  spacer: controls_Spacer
};

function getRenderPropForControlKey(controlKey) {
  const component = controlComponents[controlKey];

  if (!component) {
    return null;
  }

  switch (controlKey) {
    case 'progress':
    case 'progressdisplay':
      return (playerContext, fullscreenContext, _ref) => {
        let getDisplayText = _ref.getDisplayText;
        return Object(external_root_React_commonjs_react_commonjs2_react_amd_react_["createElement"])(component, {
          getDisplayText
        });
      };

    default:
      return () => Object(external_root_React_commonjs_react_commonjs2_react_amd_react_["createElement"])(component);
  }
}

const cache = {};

function getControlRenderProp(control) {
  if (typeof control === 'function') {
    return control;
  }

  if (typeof control === 'string') {
    if (cache[control]) {
      return cache[control];
    }

    const fn = getRenderPropForControlKey(control);
    cache[control] = fn;
    return fn;
  }

  return null;
}

/* harmony default export */ var utils_getControlRenderProp = (getControlRenderProp);
// EXTERNAL MODULE: ./src/styles/index.scss
var styles = __webpack_require__(13);

// CONCATENATED MODULE: ./src/MediaPlayerControls.js






let nextControlKey = 0;

function getNextControlKey() {
  return (nextControlKey++).toString();
}
/**
 * The UI component of [`MediaPlayer`](#mediaplayer), which requires an ancestor [`PlayerContextProvider`](#playercontextprovider) (and optional ancestor [`FullscreenContextProvider`](#fullscreencontextprovider)) in order to work (use this if you need to access the [`playerContext`](#playercontext) or [`fullscreenContext`](#fullscreencontext) from outside the media player UI)
 */


class MediaPlayerControls_MediaPlayerControls extends external_root_React_commonjs_react_commonjs2_react_amd_react_["Component"] {
  getKeyedChildren(elements) {
    // cache of keys to use in controls render
    // (to maintain state in case order changes)
    this.controlKeys = this.controlKeys || new Map(); // counts of rendered elements by type

    const elementsRendered = new Map();
    return elements.map(element => {
      if (!element) {
        return element;
      } // support React | Preact | Inferno


      const type = element.type || element.nodeName || element.tag || ''; // index within list of keys by type

      const keyIndex = elementsRendered.get(type) || 0;
      elementsRendered.set(type, keyIndex + 1);
      const keysForType = this.controlKeys.get(type) || [];
      let key;

      if (keysForType[keyIndex]) {
        key = keysForType[keyIndex];
      } else {
        key = getNextControlKey();
        this.controlKeys.set(type, keysForType.concat(key));
      }

      return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.cloneElement(element, {
        key
      });
    });
  }

  render() {
    const _this$props = this.props,
          getDisplayText = _this$props.getDisplayText,
          controls = _this$props.controls,
          showVideo = _this$props.showVideo,
          renderVideoDisplay = _this$props.renderVideoDisplay;
    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(core_["FullscreenContextConsumer"], null, fullscreenContext => external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(core_["donotuse_PlayerContext"].Consumer, null, playerContext => external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      className: "cassette"
    }, showVideo && renderVideoDisplay(playerContext, fullscreenContext), external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement("div", {
      className: "cassette__control_bar",
      title: getDisplayText(playerContext.playlist[playerContext.activeTrackIndex])
    }, this.getKeyedChildren(controls.map(control => {
      const renderControl = utils_getControlRenderProp(control);
      return renderControl && renderControl(playerContext, fullscreenContext, {
        getDisplayText
      });
    }))))));
  }

}
MediaPlayerControls_MediaPlayerControls.propTypes = {
  controls: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.arrayOf(core_["PlayerPropTypes"].control.isRequired).isRequired,
  getDisplayText: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func.isRequired,
  showVideo: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.bool.isRequired,
  renderVideoDisplay: external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default.a.func.isRequired
};
MediaPlayerControls_MediaPlayerControls.defaultProps = {
  controls: ['spacer', 'backskip', 'playpause', 'forwardskip', 'spacer', 'progress'],
  getDisplayText: core_["getDisplayText"],
  showVideo: false,

  // eslint-disable-next-line no-unused-vars
  renderVideoDisplay(playerContext, fullscreenContext) {
    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(components_["VideoDisplay"], {
      className: "cassette__video_display_container",
      onClick: playerContext.onTogglePause
    });
  }

};
/* harmony default export */ var src_MediaPlayerControls = (MediaPlayerControls_MediaPlayerControls);
// CONCATENATED MODULE: ./src/MediaPlayer.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function MediaPlayer_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




/**
 * A media player component which plays a provided playlist of media
 */

class MediaPlayer_MediaPlayer extends external_root_React_commonjs_react_commonjs2_react_amd_react_["Component"] {
  render() {
    const _this$props = this.props,
          getDisplayText = _this$props.getDisplayText,
          controls = _this$props.controls,
          showVideo = _this$props.showVideo,
          renderVideoDisplay = _this$props.renderVideoDisplay,
          fullscreenEnabled = _this$props.fullscreenEnabled,
          rest = MediaPlayer_objectWithoutPropertiesLoose(_this$props, ["getDisplayText", "controls", "showVideo", "renderVideoDisplay", "fullscreenEnabled"]);

    return external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(core_["FullscreenContextProvider"], {
      fullscreenEnabled: fullscreenEnabled
    }, external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(core_["PlayerContextProvider"], rest, external_root_React_commonjs_react_commonjs2_react_amd_react_default.a.createElement(src_MediaPlayerControls, {
      getDisplayText: getDisplayText,
      controls: controls,
      showVideo: showVideo,
      renderVideoDisplay: renderVideoDisplay
    })));
  }

}
MediaPlayer_MediaPlayer.propTypes = _objectSpread({}, core_["PlayerContextProvider"].propTypes, src_MediaPlayerControls.propTypes, core_["FullscreenContextProvider"].propTypes);
delete MediaPlayer_MediaPlayer.propTypes.children;
MediaPlayer_MediaPlayer.defaultProps = _objectSpread({}, core_["PlayerContextProvider"].defaultProps, src_MediaPlayerControls.defaultProps, core_["FullscreenContextProvider"].defaultProps);
delete MediaPlayer_MediaPlayer.defaultProps.children;
/* harmony default export */ var src_MediaPlayer = (MediaPlayer_MediaPlayer);
// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport MediaPlayer */__webpack_require__.d(__webpack_exports__, "MediaPlayer", function() { return src_MediaPlayer; });
/* concated harmony reexport MediaPlayerControls */__webpack_require__.d(__webpack_exports__, "MediaPlayerControls", function() { return src_MediaPlayerControls; });
/* concated harmony reexport PlayPauseButton */__webpack_require__.d(__webpack_exports__, "PlayPauseButton", function() { return controls_PlayPauseButton; });
/* concated harmony reexport BackSkipButton */__webpack_require__.d(__webpack_exports__, "BackSkipButton", function() { return controls_BackSkipButton; });
/* concated harmony reexport ForwardSkipButton */__webpack_require__.d(__webpack_exports__, "ForwardSkipButton", function() { return controls_ForwardSkipButton; });
/* concated harmony reexport VolumeControl */__webpack_require__.d(__webpack_exports__, "VolumeControl", function() { return controls_VolumeControl; });
/* concated harmony reexport MuteButton */__webpack_require__.d(__webpack_exports__, "MuteButton", function() { return controls_MuteButton; });
/* concated harmony reexport RepeatButton */__webpack_require__.d(__webpack_exports__, "RepeatButton", function() { return controls_RepeatButton; });
/* concated harmony reexport ShuffleButton */__webpack_require__.d(__webpack_exports__, "ShuffleButton", function() { return controls_ShuffleButton; });
/* concated harmony reexport FullscreenButton */__webpack_require__.d(__webpack_exports__, "FullscreenButton", function() { return controls_FullscreenButton; });
/* concated harmony reexport MediaProgress */__webpack_require__.d(__webpack_exports__, "MediaProgress", function() { return controls_MediaProgress; });
/* concated harmony reexport MediaProgressDisplay */__webpack_require__.d(__webpack_exports__, "MediaProgressDisplay", function() { return controls_MediaProgressDisplay; });
/* concated harmony reexport Spacer */__webpack_require__.d(__webpack_exports__, "Spacer", function() { return controls_Spacer; });



























/***/ })
/******/ ]);
});
//# sourceMappingURL=cassette-player.js.map