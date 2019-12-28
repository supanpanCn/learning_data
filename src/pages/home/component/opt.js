import React,{Component} from 'react'
import {Icon} from 'antd'
import styles from './style/opt.scss'
class Opt extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className={styles.opt}>
                <Icon type="user-delete" className={styles.icon} /> <br/>
                <span className={styles.span}>我是{this.props.name}</span>
            </div>
        )
    }

}
export default Opt