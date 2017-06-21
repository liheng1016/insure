import React,{Component} from 'react';

import style from './TreeList.css';

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
export class TreeList extends Component{
    render() {
        return (
            <div className={style["tree__list--box"]}>
                <TreeListTitle titleContext={this.props.titleContext}/>
                <div className={style["tree__list"]}>
                    <TreeListContent titleContext
                        onClick={this.props.onClick}
                        defaultValue={this.props.defaultValue} 
                        treesValue={this.props.treesValue}/>
                </div>
            </div>
        );
    }
}



/**
 * treesValue 整合后的网格树数组
 * selectTree 被选中的网格
   <TreeListContent defaultValue='5' treesValue=[]/>
 * 
 */
export  default class TreeListContent extends Component{
    constructor(props){
        super(props);
        this.state={
            treesValue:props.treesValue||[],
            defaultValue:props.defaultValue||'',
            selectTree:''
        }
    }
    render(){
        let {treesValue=[]} = this.state;
        
        treesValue.length && (treesValue[0].isShow = true);

        return(
            <div>
                {this.getTreeContent(this.state.treesValue)}
            </div>
        )
    }
    /**
     * 生成树结构
     * @date   2016-11-30T14:40:14+0800
     * @author liheng
     */
    getTreeContent(trees){
        let self = this;
        let treeContext =  trees.map((tree,key)=>{
            let iconContent='',linkClassName='';

            if(tree.children){
                iconContent = <span  onClick={(e)=>self.clickHandle(tree)}  className={!tree.isShow ? style["icon__close"] : style["icon__open"]}></span>;
            }

            linkClassName = tree.grid_id == self.state.selectTree ? style["tree__link--select"] : style["tree__link"];

            return(
                <ul key={key} className={style["tree__ul"]}>
                    <li>
                        <p className={style["tree__p"]}>
                            <span className={style["tree__span"]}></span>
                            {iconContent}
                            <a href="javascript:;"  
                                onClick={(e)=>self.clickHandle(tree)} 
                                className={linkClassName}>
                                {tree.grid_name}
                            </a>
                        </p>
                        {
                            tree.isShow ? <div>{tree.children && self.getTreeContent(tree.children)}</div>:''
                        }
                    </li>
                </ul>
            )
        })

        return treeContext;
    }
   
   /**
    * 点击选中子网格
    * @date   2016-11-30T14:38:57+0800
    * @author liheng
    */
    clickHandle(tree){
        if(!tree.grid_id){
            return;
        }

        let trees = this.selectTreeData(tree.grid_id,this.state.treesValue.slice(0));

        this.setState({
            treesValue:trees,
            selectTree:tree.grid_id
        },function(){
            let {onClick} = this.props;
            onClick&&onClick(tree);
        });
    }

    /**
     * 过滤出目标网格
     * @date   2016-11-30T14:37:52+0800
     * @author liheng
     */
    selectTreeData(grid_id,trees){
        let self = this;
        trees.map((t,key)=>{
            if(t.children&&t.children.length){
                if(t.grid_id == grid_id){
                    t.isShow = !t.isShow;
                }else if(t.grid_id != grid_id){
                    self.selectTreeData(grid_id,t.children);
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
    setDefaultTree(grid_id,parentTree){
        let self = this;
        
        parentTree.map((t,key)=>{
            if(t.grid_id == grid_id){
                self.setDefaultTree(t.pid,self.state.treesValue);
                t.isShow = !t.isShow;
            }
            if(t.children && t.children.length && t.grid_id != grid_id){
                self.setDefaultTree(grid_id,t.children);
            }
        });

        return parentTree;
    }
    componentDidMount(){
        let field = this.setDefaultTree(this.state.defaultValue,this.state.treesValue);
        this.setState({
            treesValue:field,
            selectTree:this.state.defaultValue
        })
    }
    componentWillReceiveProps(nextProps){
        let self = this;

        if(nextProps.defaultValue != this.props.defaultValue){
            let field = this.setDefaultTree(nextProps.defaultValue,this.state.treesValue);

            this.setState({
                treesValue:field,
                selectTree:nextProps.defaultValue
            })
        }

        if(nextProps.treesValue != this.props.treesValue){
            this.setState({
                treesValue:nextProps.treesValue,
            })
        }

        if((nextProps.treesValue != this.props.treesValue) && nextProps.defaultValue){
            this.setState({
                treesValue:nextProps.treesValue
            },function(){
                let field = self.setDefaultTree(nextProps.defaultValue,self.state.treesValue);
                self.setState({
                    treesValue:field,
                    selectTree:nextProps.defaultValue
                })
                
            })
        }
    }

}

export class TreeListTitle extends Component{
    render(){
        return(
            <p className={style["tree__title"]}>{this.props.titleContext}</p>
        )
    }
}




