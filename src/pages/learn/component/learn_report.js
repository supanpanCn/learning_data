import React,{Component} from 'react'
import styles from './../style/report.scss'
import {Icon,Tag} from 'antd'
import {connect} from 'react-redux'
import {listeners} from './../store'
// import {toJS} from 'immutable'
class Report extends Component{
    render(){
        let paper_obj = this.props.paper_obj
        return(
            <div className={styles.report}>
                <p className={styles.info_p}>
                    <Icon type="left" />
                    <Tag color="purple">{paper_obj.get('tag')}</Tag>
                    <span>{paper_obj.get('title')}</span>
                    {
                        this.createSpan(paper_obj)
                    }
                </p>
            </div>
        )
    }
    componentWillMount(){
        let paper_id = this.props.history.location.state.paper_id
        this.props.get_paper_list(paper_id)
    }
    createSpan=(paper_obj)=>{
        let arr = paper_obj.get('info_tit')
        if(arr){
            return arr.map((v,i)=>{
                return(
                    <span key={i} className={styles.span_fl}>{v}:{paper_obj.get('info').get(i)}</span>
                )
            })
             
        } 
    }
}
const mapStateToProps=(state)=>{
    return{
        paper_obj:state.getIn(['report','paper_obj'])
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        get_paper_list(paper_id){
            dispatch(listeners.get_user_select(paper_id))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Report)