'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TreeListTitle = exports.TreeList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TreeList = require('./TreeList.css');

var _TreeList2 = _interopRequireDefault(_TreeList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
  <TreeList defaultValue='' treesValue=[] onClick={}/>
  treesValue=[{
        grid_id:1,
        grid_name:"第一级",
        isShow:true,
        children:[{
            grid_id:2,
            grid_name:"第二级",
            isShow:true,
            children:[{
                grid_id:23,
                grid_name:"第三级",
                isShow:true,
            }]
        }]
    },{
        grid_id:3,
        grid_name:"第一级2",
        isShow:true,
        children:[{
            grid_id:4,
            grid_name:"第二级2",
            isShow:true,
        }]
    }]
 **/
var TreeList = exports.TreeList = function (_Component) {
    _inherits(TreeList, _Component);

    function TreeList() {
        _classCallCheck(this, TreeList);

        return _possibleConstructorReturn(this, (TreeList.__proto__ || Object.getPrototypeOf(TreeList)).apply(this, arguments));
    }

    _createClass(TreeList, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: _TreeList2.default["tree__list--box"] },
                _react2.default.createElement(TreeListTitle, { titleContext: this.props.titleContext }),
                _react2.default.createElement(
                    'div',
                    { className: _TreeList2.default["tree__list"] },
                    _react2.default.createElement(TreeListContent, { titleContext: true,
                        onClick: this.props.onClick,
                        defaultValue: this.props.defaultValue,
                        treesValue: this.props.treesValue })
                )
            );
        }
    }]);

    return TreeList;
}(_react.Component);

/**
 * treesValue 整合后的网格树数组
 * selectTree 被选中的网格
   <TreeListContent defaultValue='5' treesValue=[]/>
 * 
 */


var TreeListContent = function (_Component2) {
    _inherits(TreeListContent, _Component2);

    function TreeListContent(props) {
        _classCallCheck(this, TreeListContent);

        var _this2 = _possibleConstructorReturn(this, (TreeListContent.__proto__ || Object.getPrototypeOf(TreeListContent)).call(this, props));

        _this2.state = {
            treesValue: props.treesValue || [],
            defaultValue: props.defaultValue || '',
            selectTree: ''
        };
        return _this2;
    }

    _createClass(TreeListContent, [{
        key: 'render',
        value: function render() {
            var _state$treesValue = this.state.treesValue,
                treesValue = _state$treesValue === undefined ? [] : _state$treesValue;


            treesValue.length && (treesValue[0].isShow = true);

            return _react2.default.createElement(
                'div',
                null,
                this.getTreeContent(this.state.treesValue)
            );
        }
        /**
         * 生成树结构
         * @date   2016-11-30T14:40:14+0800
         * @author liheng
         */

    }, {
        key: 'getTreeContent',
        value: function getTreeContent(trees) {
            var self = this;
            var treeContext = trees.map(function (tree, key) {
                var iconContent = '',
                    linkClassName = '';

                if (tree.children) {
                    iconContent = _react2.default.createElement('span', { onClick: function onClick(e) {
                            return self.clickHandle(tree);
                        }, className: !tree.isShow ? _TreeList2.default["icon__close"] : _TreeList2.default["icon__open"] });
                }

                linkClassName = tree.grid_id == self.state.selectTree ? _TreeList2.default["tree__link--select"] : _TreeList2.default["tree__link"];

                return _react2.default.createElement(
                    'ul',
                    { key: key, className: _TreeList2.default["tree__ul"] },
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            'p',
                            { className: _TreeList2.default["tree__p"] },
                            _react2.default.createElement('span', { className: _TreeList2.default["tree__span"] }),
                            iconContent,
                            _react2.default.createElement(
                                'a',
                                { href: 'javascript:;',
                                    onClick: function onClick(e) {
                                        return self.clickHandle(tree);
                                    },
                                    className: linkClassName },
                                tree.grid_name
                            )
                        ),
                        tree.isShow ? _react2.default.createElement(
                            'div',
                            null,
                            tree.children && self.getTreeContent(tree.children)
                        ) : ''
                    )
                );
            });

            return treeContext;
        }

        /**
         * 点击选中子网格
         * @date   2016-11-30T14:38:57+0800
         * @author liheng
         */

    }, {
        key: 'clickHandle',
        value: function clickHandle(tree) {
            if (!tree.grid_id) {
                return;
            }

            var trees = this.selectTreeData(tree.grid_id, this.state.treesValue.slice(0));

            this.setState({
                treesValue: trees,
                selectTree: tree.grid_id
            }, function () {
                var onClick = this.props.onClick;

                onClick && onClick(tree);
            });
        }

        /**
         * 过滤出目标网格
         * @date   2016-11-30T14:37:52+0800
         * @author liheng
         */

    }, {
        key: 'selectTreeData',
        value: function selectTreeData(grid_id, trees) {
            var self = this;
            trees.map(function (t, key) {
                if (t.children && t.children.length) {
                    if (t.grid_id == grid_id) {
                        t.isShow = !t.isShow;
                    } else if (t.grid_id != grid_id) {
                        self.selectTreeData(grid_id, t.children);
                    }
                }
            });

            return trees;
        }

        /**
         * 设置默认的子网格
         * @date   2016-11-30T11:34:36+0800
         * @author liheng
         */

    }, {
        key: 'setDefaultTree',
        value: function setDefaultTree(grid_id, parentTree) {
            var self = this;

            parentTree.map(function (t, key) {
                if (t.grid_id == grid_id) {
                    self.setDefaultTree(t.pid, self.state.treesValue);
                    t.isShow = !t.isShow;
                }
                if (t.children && t.children.length && t.grid_id != grid_id) {
                    self.setDefaultTree(grid_id, t.children);
                }
            });

            return parentTree;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var field = this.setDefaultTree(this.state.defaultValue, this.state.treesValue);
            this.setState({
                treesValue: field,
                selectTree: this.state.defaultValue
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var self = this;

            if (nextProps.defaultValue != this.props.defaultValue) {
                var field = this.setDefaultTree(nextProps.defaultValue, this.state.treesValue);

                this.setState({
                    treesValue: field,
                    selectTree: nextProps.defaultValue
                });
            }

            if (nextProps.treesValue != this.props.treesValue) {
                this.setState({
                    treesValue: nextProps.treesValue
                });
            }

            if (nextProps.treesValue != this.props.treesValue && nextProps.defaultValue) {
                this.setState({
                    treesValue: nextProps.treesValue
                }, function () {
                    var field = self.setDefaultTree(nextProps.defaultValue, self.state.treesValue);
                    self.setState({
                        treesValue: field,
                        selectTree: nextProps.defaultValue
                    });
                });
            }
        }
    }]);

    return TreeListContent;
}(_react.Component);

exports.default = TreeListContent;

var TreeListTitle = exports.TreeListTitle = function (_Component3) {
    _inherits(TreeListTitle, _Component3);

    function TreeListTitle() {
        _classCallCheck(this, TreeListTitle);

        return _possibleConstructorReturn(this, (TreeListTitle.__proto__ || Object.getPrototypeOf(TreeListTitle)).apply(this, arguments));
    }

    _createClass(TreeListTitle, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'p',
                { className: _TreeList2.default["tree__title"] },
                this.props.titleContext
            );
        }
    }]);

    return TreeListTitle;
}(_react.Component);