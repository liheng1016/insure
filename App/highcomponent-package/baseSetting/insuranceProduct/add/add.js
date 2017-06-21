"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _index = require("../component/index.css");

var _index2 = _interopRequireDefault(_index);

var _input = require("@stararc-component/input");

var _input2 = _interopRequireDefault(_input);

var _button = require("@stararc-component/button");

var _button2 = _interopRequireDefault(_button);

var _select = require("@stararc-component/select");

var _select2 = _interopRequireDefault(_select);

var _gridlayout = require("@stararc-component/gridlayout");

var _gridlayout2 = _interopRequireDefault(_gridlayout);

var _datePicker = require("@stararc-insurance/date-picker");

var _datePicker2 = _interopRequireDefault(_datePicker);

var _action = require("../../model/basesetting/action.js");

var _action2 = _interopRequireDefault(_action);

var _uploadFile = require("@stararc-insurance/upload-file");

var _layout = require("@stararc-insurance/layout");

var _component = require("../component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ManagementEditWarp = function (_Component) {
	_inherits(ManagementEditWarp, _Component);

	function ManagementEditWarp() {
		_classCallCheck(this, ManagementEditWarp);

		return _possibleConstructorReturn(this, (ManagementEditWarp.__proto__ || Object.getPrototypeOf(ManagementEditWarp)).apply(this, arguments));
	}

	_createClass(ManagementEditWarp, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				"div",
				{ className: _index2.default["acceptin-wrap"] },
				_react2.default.createElement(
					_layout.LayoutHeader,
					{ styleCss: { height: 50 } },
					_react2.default.createElement(_component.ManagementEditButton, null)
				),
				_react2.default.createElement(
					_layout.LayoutContent,
					{ styleCss: { top: 50 } },
					_react2.default.createElement(_component.EssentialInformation, _extends({
						ref: "essential"
					}, this.props)),
					_react2.default.createElement(_component.DeductibleExcess, _extends({
						ref: "deductible"
					}, this.props)),
					_react2.default.createElement(_component.ClauseContent, _extends({
						ref: "upload"
					}, this.props)),
					_react2.default.createElement(_component.AuthorizedArea, _extends({
						ref: "authorizedarea"
					}, this.props))
				),
				_react2.default.createElement(
					_layout.LayoutFooter,
					null,
					_react2.default.createElement(_component.ActionComponent, _extends({}, this.props, {
						onClick: function onClick(e) {
							return _this2.submitHandle();
						} }))
				)
			);
		}
	}, {
		key: "submitHandle",
		value: function submitHandle() {
			var product_add = this.props.product_add;

			var refs = this.refs,
			    paramsFeild = {};
			// let essential = this.refs.essential.getValue();
			// let deductible = this.refs.deductible.getValue();
			// console.log({...essential,...deductible})
			for (var r in refs) {
				paramsFeild = Object.assign(paramsFeild, paramsFeild, _extends({}, refs[r].getValue()));
			}
			if (!paramsFeild.isVerify || !paramsFeild.isVerifyExcess || !paramsFeild.isValue || !paramsFeild.isValueArea) {
				return;
			}
			product_add(paramsFeild);
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			var _props = this.props,
			    get_insur_company = _props.get_insur_company,
			    get_authorized_area = _props.get_authorized_area;

			get_insur_company();
			get_authorized_area();
		}
	}]);

	return ManagementEditWarp;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
	return {
		condition: state.basesettingReducer.productCondition,
		add: state.basesettingReducer.productAdd,
		insurCompany: state.basesettingReducer.insurCompany,
		lists: state.basesettingReducer.list,
		uploadClausecontent: state.basesettingReducer.uploadClausecontent
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		product_add: function product_add(obj) {
			dispatch(_action2.default.product_add(obj));
		},
		get_insur_company: function get_insur_company(obj) {
			dispatch(_action2.default.get_insur_company(obj));
		},
		get_authorized_area: function get_authorized_area() {
			var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			dispatch(_action2.default.get_authorized_area(params));
		},
		upload_clausecontent: function upload_clausecontent() {
			var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			dispatch(_action2.default.upload_clausecontent(params));
		}
	};
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ManagementEditWarp);