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

var _index3 = require("../component/index");

var _action = require("../../model/insurInfo/action");

var _action2 = _interopRequireDefault(_action);

var _action3 = require("../../model/media/action");

var _action4 = _interopRequireDefault(_action3);

var _layout = require("@stararc-insurance/layout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AcceptinEdit = function (_Component) {
	_inherits(AcceptinEdit, _Component);

	function AcceptinEdit(props) {
		_classCallCheck(this, AcceptinEdit);

		var _this = _possibleConstructorReturn(this, (AcceptinEdit.__proto__ || Object.getPrototypeOf(AcceptinEdit)).call(this, props));

		_this.state = {
			deductibleExcess: {},
			selectValue: {},
			selectCompany: {},
			securityInformation: {}
		};
		return _this;
	}

	_createClass(AcceptinEdit, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				"div",
				{ className: _index2.default["acceptin-wrap"] },
				_react2.default.createElement(
					_layout.LayoutHeader,
					{ styleCss: { height: 50 } },
					_react2.default.createElement(_index3.AcceptDetailButton, null)
				),
				_react2.default.createElement(
					_layout.LayoutContent,
					{ styleCss: { top: 50 } },
					_react2.default.createElement(
						"div",
						{ className: _index2.default["content-wrap"] },
						_react2.default.createElement(
							"div",
							{ className: _index2.default["applicant-wrap"] },
							_react2.default.createElement(
								"span",
								{ className: _index2.default["title"] },
								"\u6295\u4FDD\u4EBA\u4FE1\u606F"
							),
							_react2.default.createElement(_index3.EnterpriceInfo, { selectValue: this.state.selectValue })
						),
						_react2.default.createElement(
							"div",
							{ className: _index2.default["applicant-wrap"] },
							_react2.default.createElement(
								"span",
								{ className: _index2.default["title"] },
								"\u88AB\u4FDD\u4EBA\u4FE1\u606F"
							),
							_react2.default.createElement(_index3.InsuredContent, { info: this.state.selectCompany })
						),
						_react2.default.createElement(_index3.SecurityInformation, _extends({
							ref: "security"
						}, this.props, this.props.detail, {
							applyNumber: this.props.detail && this.props.detail.apply_number,
							insuranceChangeHandle: function insuranceChangeHandle(value) {
								return _this2.insuranceChangeHandle(value);
							},
							productChangeHandle: function productChangeHandle(value) {
								return _this2.productChangeHandle(value);
							} })),
						_react2.default.createElement(_index3.DeductibleExcess, _extends({
							ref: "deductible"
						}, this.props, {
							deductibleExcess: this.state.deductibleExcess })),
						_react2.default.createElement(_index3.Upload, _extends({
							ref: "upload"
						}, this.props, {
							uploadHandle: function uploadHandle(value, type) {
								return _this2.uploadHandle(value, type);
							} })),
						_react2.default.createElement(_index3.ArticleContent, _extends({}, this.props.detail, {
							articleContent: this.state.deductibleExcess }))
					)
				),
				_react2.default.createElement(
					_layout.LayoutFooter,
					null,
					_react2.default.createElement(_index3.ActionComponent, _extends({}, this.props, {
						submitHandle: function submitHandle(e) {
							return _this2.submitHandle();
						} }))
				)
			);
		}
		// 点击和被保人一致为是的时候

	}, {
		key: "sameInforHandle",
		value: function sameInforHandle() {
			var params = this.refs.accept.getValue();
			this.insuredChangeHandle({
				gridID: params.grid_id
			});
		}
		// 点击被保人信息的回调方法,获取生成的投保单号

	}, {
		key: "insuredChangeHandle",
		value: function insuredChangeHandle(selectCompany) {
			var get_apply_number = this.props.get_apply_number;

			if (selectCompany) {
				get_apply_number({
					grid_id: selectCompany.gridID
				});
			}
		}
		// 选择不同的承保公司获取到不同的投保产品

	}, {
		key: "insuranceChangeHandle",
		value: function insuranceChangeHandle(organ_id) {
			var get_insur_product = this.props.get_insur_product;

			get_insur_product({
				organ_id: organ_id
			});
		}
		// 选择投保产品的回调方法，为了设置免赔额条例

	}, {
		key: "productChangeHandle",
		value: function productChangeHandle(deductibleExcess) {
			this.setState({
				deductibleExcess: deductibleExcess
			});
		}
		// 选择附件上传

	}, {
		key: "uploadHandle",
		value: function uploadHandle(value, type) {
			var upload_insur = this.props.upload_insur;

			upload_insur(value, { fileType: type });
		}
		// 提交保存

	}, {
		key: "submitHandle",
		value: function submitHandle() {
			var refs = this.refs,
			    _props = this.props,
			    update_insur = _props.update_insur,
			    params = _props.params,
			    paramsFeileds = {};

			for (var r in refs) {
				Object.assign(paramsFeileds, paramsFeileds, _extends({}, refs[r].getValue()));
			}
			if (!paramsFeileds.isVerify) {
				return;
			}
			// 被保人和投保人信息一样
			if (paramsFeileds.isTheSame) {
				paramsFeileds["company_name"] = paramsFeileds.apply_company_name;
				paramsFeileds["company_id"] = paramsFeileds.apply_company_id;
			}
			paramsFeileds["id"] = params["id"];
			update_insur(paramsFeileds);
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			var _props2 = this.props,
			    get_company_list = _props2.get_company_list,
			    get_accept_company = _props2.get_accept_company,
			    get_detail = _props2.get_detail,
			    params = _props2.params,
			    detail = _props2.detail;


			get_company_list();
			get_accept_company();
			get_detail({
				id: params.id
			});
		}
	}, {
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(nextProps) {
			var self = this;
			if (nextProps.detail != this.props.detail) {
				this.setState({
					selectValue: nextProps.detail && self.getSelectValue(nextProps.detail.applyCompany),
					selectCompany: nextProps.detail && self.getSelectValue(nextProps.detail.company),
					deductibleExcess: {
						attachment: nextProps.detail && nextProps.detail.insuranceProduct && nextProps.detail.insuranceProduct["attachment"][0],
						practitioners: nextProps.detail && nextProps.detail.practitioners,
						third_party: nextProps.detail && nextProps.detail.third_party
					}
				});
			}
		}
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			var unmout_upload_insur = this.props.unmout_upload_insur;


			unmout_upload_insur();
		}
		// 整合投保人,被保人信息

	}, {
		key: "getSelectValue",
		value: function getSelectValue(detail) {
			return {
				organName: detail.organName,
				grid_name: detail.gridName,
				addon: _extends({}, detail)
			};
		}
	}]);

	return AcceptinEdit;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
	return {
		companyList: state.insurInfoReducer.companyList,
		companyCondition: state.insurInfoReducer.companyCondition,
		acceptCompany: state.insurInfoReducer.acceptCompany,
		applyNumber: state.insurInfoReducer.applyNumber,
		insurProductList: state.insurInfoReducer.insurProductList,
		insureAcctach: state.insurInfoReducer.insureAcctach,
		detail: state.insurInfoReducer.detail
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		// 获取企业列表
		get_company_list: function get_company_list(obj) {
			dispatch(_action2.default.company_list(obj));
		},
		// 获取承保企业数据
		get_accept_company: function get_accept_company(obj) {
			dispatch(_action2.default.get_accept_company(obj));
		},
		// 获取投保单号
		get_apply_number: function get_apply_number(obj) {
			dispatch(_action2.default.get_apply_number(obj));
		},
		// 获取保险产品
		get_insur_product: function get_insur_product(obj) {
			dispatch(_action2.default.get_insur_product(obj));
		},
		// 上传投保相关资料
		upload_insur: function upload_insur(obj, type) {
			dispatch(_action2.default.upload_insur(obj, type));
		},
		// 编辑保单
		update_insur: function update_insur(obj) {
			dispatch(_action2.default.update_insur(obj));
		},
		// 获取保单详情
		get_detail: function get_detail(obj) {
			dispatch(_action2.default.detail(obj));
		},
		// 卸载
		unmout_upload_insur: function unmout_upload_insur(obj) {
			dispatch(_action2.default.unmout_upload_insur(obj));
		}

	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AcceptinEdit);