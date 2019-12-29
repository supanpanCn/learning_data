import React, { Component } from 'react'
// 高阶组件
import Parent_hoc from './../index'
// css module
import styles from './../style/login.scss'
import { Input, Icon, Checkbox, Button } from 'antd';
// react-redux
import { connect } from 'react-redux'
// 引入saga指令
import {listeners} from './../store'
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: {
                account: '',
                pass: ''
            },
            is_disabled:true,
            checked:false
        }
    }
    render() {
        return (
            <div className={styles.login}>
                <span className={styles.tit}>密码登录</span>
                <div className={styles.main}>
                    <div className={styles.input}>
                        <Input
                            className={styles.input}
                            onChange={this.input_change.bind(this, 1)}
                            prefix={<Icon className={styles.icon} type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="账号"
                            value={this.state.input.account}
                            name='account'
                        />
                    </div>
                    <div>
                        <Input
                            className={styles.input}
                            prefix={<Icon type="bulb" theme="filled" />}
                            placeholder="密码"
                            onChange={this.input_change.bind(this, 2)}
                            value={this.state.input.pass}
                            name='pass'
                        />
                    </div>
                    <div className={styles.checkbox}>
                        <Checkbox 
                          className={styles.check}
                          checked = {this.state.checked}
                          onChange={this.props.checkbox_change.bind(this,this.props.is_selected)}
                          checked={this.props.is_selected}
                        >
                            下次自动登录
                        </Checkbox>
                        <span className={styles.forgetPass}>忘记密码</span>
                    </div>
                    <Button type="primary" block disabled={this.state.is_disabled}>登录</Button>
                </div>
                <div className={styles.back} onClick={this.back}>返回</div>
            </div>
            
        )
    }
    // checkbox_change = ()=>{
    //     // 该状态将被永久保存，需要保存到redux中
    //     this.setState((preState)=>{
    //         return{
    //             checked:!preState.checked
    //         }
    //     })
    // }
    back = () => {
        this.props.history.push({
            pathname:'/home'
        })
    }
    // 这里可以借助memoize-one实现一个和vue一样的计算属性功能
    can_login = (result)=>{
        let is_disabled = true
        for(let v in result){
            if(!result[v]){
                is_disabled = true
            }else{
                is_disabled = false
            }
        }
        return is_disabled
    }
    input_change = (ty, ev) => {
        // 异步访问事件属性,应该在是处理事件时调用event.persist()，这会从事件池中移除该合成函数并允许对该合成事件的引用被保留下来
        ev.persist()
        this.setState((preState) => {
            // 由于每一次都是给input重新进行了赋值，故原来输入密码框时账号的内容会清空
            let input = {
                [ev.target.name]: ev.target.value
            }
            let result =Object.assign(preState.input,input)
            
            return {
                input: result,
                is_disabled:this.can_login(result)
            }
        })
    }
}
const mapStateToProps = (state)=>{
    // 由于在store中使用了redux-persist-immutable，故可以直接使用immutable语法
    return{
        is_selected:state.getIn(['login','is_selected'])
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        checkbox_change(){
            // 向saga派发事件
            dispatch(listeners.get_user_select())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Parent_hoc()(Login)) 
