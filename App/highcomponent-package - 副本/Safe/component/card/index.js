'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _card = require('./card');

var _card2 = require('./card.css');

var _card3 = _interopRequireDefault(_card2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by able on 17-4-10.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var StatisticCard = function (_Component) {
    _inherits(StatisticCard, _Component);

    function StatisticCard() {
        _classCallCheck(this, StatisticCard);

        return _possibleConstructorReturn(this, (StatisticCard.__proto__ || Object.getPrototypeOf(StatisticCard)).apply(this, arguments));
    }

    _createClass(StatisticCard, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: _card3.default["card-box"] },
                _react2.default.createElement(_card.FKCard, this.props),
                _react2.default.createElement(_card.YHCard, this.props),
                _react2.default.createElement(_card.BXCard, this.props)
            );
        }
    }]);

    return StatisticCard;
}(_react.Component);

exports.default = StatisticCard;