'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  .popper {\n    z-index: 99;\n    overflow-y: scroll;\n    max-height: ', ';\n    display: ', ';\n    border-width: ', ';\n    border-style: ', ';\n    border-color: ', ';\n    box-shadow: ', ';\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n  }\n\n  .popper .popper__arrow {\n    width: 0;\n    height: 0;\n    border-style: solid;\n    position: absolute;\n    margin: 5px;\n  }\n\n  .popper[data-placement^="top"].has-arrow {\n    margin-bottom: 5px;\n  }\n\n  .popper[data-placement^="top"] .popper__arrow {\n    border-width: 5px 5px 0 5px;\n    border-color: #FFF transparent transparent transparent;\n    box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 1px;\n    bottom: -5px;\n    // left: calc(50% - 5px);\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  .popper[data-placement^="bottom"].has-arrow {\n    margin-top: 5px;\n  }\n\n  .popper[data-placement^="bottom"] .popper__arrow {\n    border-width: 0 5px 5px 5px;\n    border-color: transparent transparent #FFF transparent;\n    box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 1px;\n    top: -5px;\n    // left: calc(50% - 5px);\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  .popper[data-placement^="right"].has-arrow {\n    margin-left: 5px;\n  }\n\n  .popper[data-placement^="right"] .popper__arrow {\n    border-width: 5px 5px 5px 0;\n    border-color: transparent #FFF transparent transparent;\n    box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 1px;\n    left: -5px;\n    top: calc(50% - 5px);\n    margin-left: 0;\n    margin-right: 0;\n  }\n\n  .popper[data-placement^="left"].has-arrow {\n    margin-right: 5px;\n  }\n\n  .popper[data-placement^="left"] .popper__arrow {\n    border-width: 5px 0 5px 5px;\n    border-color: transparent transparent transparent #FFF;\n    box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 1px;\n    right: -5px;\n    top: calc(50% - 5px);\n    margin-left: 0;\n    margin-right: 0;\n  }\n\n  // .popper[data-x-out-of-boundaries] {\n  //   display: none;\n  // }\n'], ['\n  .popper {\n    z-index: 99;\n    overflow-y: scroll;\n    max-height: ', ';\n    display: ', ';\n    border-width: ', ';\n    border-style: ', ';\n    border-color: ', ';\n    box-shadow: ', ';\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n  }\n\n  .popper .popper__arrow {\n    width: 0;\n    height: 0;\n    border-style: solid;\n    position: absolute;\n    margin: 5px;\n  }\n\n  .popper[data-placement^="top"].has-arrow {\n    margin-bottom: 5px;\n  }\n\n  .popper[data-placement^="top"] .popper__arrow {\n    border-width: 5px 5px 0 5px;\n    border-color: #FFF transparent transparent transparent;\n    box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 1px;\n    bottom: -5px;\n    // left: calc(50% - 5px);\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  .popper[data-placement^="bottom"].has-arrow {\n    margin-top: 5px;\n  }\n\n  .popper[data-placement^="bottom"] .popper__arrow {\n    border-width: 0 5px 5px 5px;\n    border-color: transparent transparent #FFF transparent;\n    box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 1px;\n    top: -5px;\n    // left: calc(50% - 5px);\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  .popper[data-placement^="right"].has-arrow {\n    margin-left: 5px;\n  }\n\n  .popper[data-placement^="right"] .popper__arrow {\n    border-width: 5px 5px 5px 0;\n    border-color: transparent #FFF transparent transparent;\n    box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 1px;\n    left: -5px;\n    top: calc(50% - 5px);\n    margin-left: 0;\n    margin-right: 0;\n  }\n\n  .popper[data-placement^="left"].has-arrow {\n    margin-right: 5px;\n  }\n\n  .popper[data-placement^="left"] .popper__arrow {\n    border-width: 5px 0 5px 5px;\n    border-color: transparent transparent transparent #FFF;\n    box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 1px;\n    right: -5px;\n    top: calc(50% - 5px);\n    margin-left: 0;\n    margin-right: 0;\n  }\n\n  // .popper[data-x-out-of-boundaries] {\n  //   display: none;\n  // }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _elementResizeDetector = require('element-resize-detector');

var _elementResizeDetector2 = _interopRequireDefault(_elementResizeDetector);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactPopper = require('react-popper');

var _browser = require('../../utils/browser');

var _Portal = require('../Portal');

var _Portal2 = _interopRequireDefault(_Portal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
// import Show from 'react-show'


var PopoverWrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return props.maxHeight;
}, function (props) {
  return props.isOpen ? 'block' : 'none';
}, function (props) {
  return props.theme['popover.border.width'];
}, function (props) {
  return props.theme['popover.border.style'];
}, function (props) {
  return props.theme['popover.border.color'];
}, function (props) {
  return props.theme['popover.shadow'];
}, _styledSystem.color, _styledSystem.borders, _styledSystem.borderColor, _styledSystem.borderRadius, _styledSystem.boxShadow, _styledSystem.space, _styledSystem.width);

var animations = {
  scale: {
    default: { opacity: 0 },
    hide: {
      opacity: 0,
      transform: 'scale(.8) translateY(-30%)',
      pointerEvents: 'none'
    },
    show: { opacity: 1, transform: 'none', pointerEvents: 'auto' }
  },
  fade: {
    default: { opacity: 0 },
    hide: { opacity: 0 },
    show: { opacity: 1 }
  },
  slide: {
    default: { opacity: 0 },
    hide: { opacity: 0, transform: 'translateY(-2em)' },
    show: { opacity: 1, transform: 'translateY(0)' }
  }
};

var CustomTarget = function CustomTarget(_ref) {
  var innerRef = _ref.innerRef,
      props = _objectWithoutProperties(_ref, ['innerRef']);

  return _react2.default.createElement('div', _extends({ ref: innerRef, style: { cursor: 'pointer' } }, props));
};

var CustomPopper = function CustomPopper(_ref2) {
  var innerRef = _ref2.innerRef,
      props = _objectWithoutProperties(_ref2, ['innerRef']);

  return _react2.default.createElement('div', _extends({ ref: innerRef }, props, { style: _extends({}, props.style) })) // left: 1 if needed
  ;
};

var Popper = function (_PureComponent) {
  _inherits(Popper, _PureComponent);

  function Popper(props) {
    _classCallCheck(this, Popper);

    var _this = _possibleConstructorReturn(this, _PureComponent.call(this, props));

    _this._setOutsideTap = function () {
      document.addEventListener('click', _this._handleOutsideTap, true);
    };

    _this._setResizeDetector = function () {
      _this.detector = (0, _elementResizeDetector2.default)();

      if (_this.target) {
        _this.detector.listenTo(_this.target, _this._handleResize);
      }
    };

    _this._handleResize = function (el) {
      _this.mostRecentWidth = _this.state.width;
      _this.setState({
        width: el.offsetWidth
      });
    };

    _this._handleOutsideTap = function (e) {
      var clickedPopper = e && _this.popper && _this.popper.contains(e.target);
      var clickedTarget = e && _this.target && _this.target.contains(e.target);

      if (!e || !clickedPopper && !clickedTarget) {
        _this.setState({ isOpen: false }, _this.props.onClose);
      }
    };

    _this.close = function () {
      _this.setState({ isOpen: false }, _this.props.onClose);
    };

    _this._handleTargetClick = function () {
      if (_this.state.isOpen) {
        _this.setState({ isOpen: false }, _this.props.onClose);
      } else {
        _this.setState({ isOpen: true }, _this.props.onOpen);
      }
    };

    _this._handleResize = (0, _browser.debounce)(_this._handleResize, 50, false);

    _this.state = {
      isOpen: false,
      width: null
    };
    return _this;
  }

  Popper.prototype.componentDidUpdate = function componentDidUpdate(lastProps, lastState) {
    var _this2 = this;

    if (!lastState.isOpen && this.state.isOpen) {
      setTimeout(function () {
        return _this2._setOutsideTap();
      });
      setTimeout(function () {
        return _this2._setResizeDetector();
      });
    }
  };

  Popper.prototype.componentWillUnmount = function componentWillUnmount() {
    document.removeEventListener('click', this._handleOutsideTap, true);
    if (this.detector) {
      this.detector.uninstall();
    }
  };

  Popper.prototype._getPopperWidth = function _getPopperWidth() {
    if (this.target && this.props.fullWidth) {
      if (!this.state.width) {
        return this.target.getBoundingClientRect().width - 2;
      } else {
        return this.state.width - 2;
      }
    }

    if (this.props.width) {
      return this.props.width;
    }
  };

  Popper.prototype.renderPositioner = function renderPositioner() {
    var _this3 = this;

    var _props = this.props,
        position = _props.position,
        easing = _props.easing,
        duration = _props.duration,
        animation = _props.animation,
        children = _props.children,
        modifiers = _props.modifiers,
        arrow = _props.arrow,
        contentStyle = _props.contentStyle;


    var popperClasses = (0, _classnames2.default)({
      popper: true,
      'has-arrow': arrow
    });

    var popperStyle = _extends({}, contentStyle, {
      width: this._getPopperWidth(),
      zIndex: 99,
      display: this.state.isOpen ? 'block' : 'none'
    });

    var popperModifiers = _extends({
      preventOverflow: {
        enabled: true,
        escapeWithReference: true,
        boundariesElement: 'scrollParent'
      }
    }, modifiers);

    return _react2.default.createElement(
      _reactPopper.Popper,
      {
        key: 'popper',
        placement: position,
        modifiers: popperModifiers,
        className: popperClasses,
        offset: '-100px',
        component: CustomPopper,
        innerRef: function innerRef(c) {
          _this3.popper = (0, _reactDom.findDOMNode)(c);
        }
      },
      _react2.default.createElement(
        'div',
        { style: popperStyle },
        typeof children === 'function' ? children(this.close, this.state.isOpen) : children,
        arrow && _react2.default.createElement(_reactPopper.Arrow, { className: 'popper__arrow' })
      )
    );
  };

  Popper.prototype.render = function render() {
    var _this4 = this;

    var _props2 = this.props,
        trigger = _props2.trigger,
        portal = _props2.portal,
        rest = _objectWithoutProperties(_props2, ['trigger', 'portal']);

    return _react2.default.createElement(
      PopoverWrapper,
      _extends({}, rest, { isOpen: this.state.isOpen }),
      _react2.default.createElement(
        _reactPopper.Manager,
        null,
        _react2.default.createElement(
          _reactPopper.Target,
          {
            innerRef: function innerRef(c) {
              return _this4.target = (0, _reactDom.findDOMNode)(c);
            },
            component: CustomTarget,
            onClick: this._handleTargetClick
          },
          trigger
        ),
        portal ? _react2.default.createElement(
          _Portal2.default,
          null,
          this.renderPositioner()
        ) : this.renderPositioner()
      )
    );
  };

  return Popper;
}(_react.PureComponent);

// <Show
//   show={this.state.isOpen}
//   easing={easing}
//   duration={duration}
//   style={animations[animation].default}
//   styleHide={animations[animation].hide}
//   styleShow={animations[animation].show}
//   transitionOnMount
// >
//   <div style={popperStyle}>
//     {typeof children === 'function'
//       ? children(this._handleOutsideTap, this.state.isOpen)
//       : children}
//     {arrow && <Arrow className="popper__arrow" />}
//   </div>
// </Show>

Popper.propTypes = process.env.NODE_ENV !== "production" ? {
  arrow: _propTypes2.default.bool,
  animation: _propTypes2.default.oneOf(['fade', 'scale', 'slide']),
  duration: _propTypes2.default.number,
  offset: _propTypes2.default.number,
  onOpen: _propTypes2.default.func,
  onClose: _propTypes2.default.func,
  fullWidth: _propTypes2.default.bool,
  portal: _propTypes2.default.bool,
  contentStyle: _propTypes2.default.object,
  trigger: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element]).isRequired,
  on: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['hover', 'click', 'focus']), _propTypes2.default.arrayOf(_propTypes2.default.oneOf(['hover', 'click', 'focus']))]),
  children: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element, _propTypes2.default.string]).isRequired,
  position: _propTypes2.default.oneOf(['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'right', 'right-start', 'right-end', 'left', 'left-start', 'left-end', 'auto', 'auto-start', 'auto-end'])
} : {};

Popper.defaultProps = {
  onOpen: function onOpen() {},
  onClose: function onClose() {},
  closeOnDocumentClick: true,
  defaultOpen: false,
  on: ['click'],
  portal: false,
  arrow: true,
  animation: 'slide',
  easing: 'easeOutQuint',
  duration: 250,
  position: 'bottom-start',
  fullWidth: false,
  contentStyle: {}
};

exports.default = Popper;
module.exports = exports['default'];