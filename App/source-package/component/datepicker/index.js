"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _datepicker = require("@stararc-component/datepicker");

var _datepicker2 = _interopRequireDefault(_datepicker);

var _index = require("./index.css");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 针对保险产品的时间控件
 */
var InsuranceDatePicker = function (_Component) {
    _inherits(InsuranceDatePicker, _Component);

    function InsuranceDatePicker(props) {
        _classCallCheck(this, InsuranceDatePicker);

        var _this = _possibleConstructorReturn(this, (InsuranceDatePicker.__proto__ || Object.getPrototypeOf(InsuranceDatePicker)).call(this, props));

        _this.state = {
            showDatePicker: false,
            date: props.defaultValue || ""
        };
        return _this;
    }

    _createClass(InsuranceDatePicker, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: _index2.default["datepicker"] },
                _react2.default.createElement("input", { type: "text",
                    style: this.props.inputCss,
                    value: this.state.date,
                    disabled: this.props.disabled,
                    placeholder: this.props.placeholder,
                    onFocus: this.focusHandle.bind(this) }),
                this.state.showDatePicker ? _react2.default.createElement(_datepicker2.default, {
                    style: { position: 'absolute', background: "white" },
                    customConfig: this.getConfig(),
                    defaultValue: this.state.date,
                    onConfirm: this.setValue.bind(this),
                    onCancel: this.closeDatePicker.bind(this) }) : ''
            );
        }
    }, {
        key: "focusHandle",
        value: function focusHandle() {
            this.setState({ showDatePicker: true });
        }
    }, {
        key: "getConfig",
        value: function getConfig() {
            return {
                minYear: 2000,
                maxYear: 2030,
                weekLabel: '星期',
                type: 'date'
            };
        }
    }, {
        key: "closeDatePicker",
        value: function closeDatePicker() {
            this.setState({ showDatePicker: false });
        }
    }, {
        key: "setValue",
        value: function setValue(date) {
            this.setState({ date: date });
            this.closeDatePicker();
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.defaultValue != this.props.defaultValue) {
                this.setState({
                    date: nextProps.defaultValue
                });
            }
        }
    }, {
        key: "getValue",
        value: function getValue() {
            return this.state.date;
        }
    }]);

    return InsuranceDatePicker;
}(_react.Component);

exports.default = InsuranceDatePicker;

