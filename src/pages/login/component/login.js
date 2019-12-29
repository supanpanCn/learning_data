import React, { Component } from 'react'
import Parent_hoc from './../index'
import styles from './../style/login.scss'
import { Input, Icon, Checkbox, Button } from 'antd';
class Login extends Component {
    render() {
        return (
            <div className={styles.login}>
                <span className={styles.tit}>密码登录</span>
                <div className={styles.main}>
                    <div className={styles.input}>
                        <Input className={styles.input} prefix={<Icon className={styles.icon} type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} defaultValue="账号" />
                    </div>
                    <div >
                        <Input className={styles.input} prefix={<Icon type="bulb" theme="filled" />} defaultValue="密码" />
                    </div>
                    <div className={styles.checkbox}>
                        <Checkbox className={styles.check}>下次自动登录</Checkbox>
                        <span className={styles.forgetPass}>忘记密码</span>
                    </div>
                    <Button type="primary" block disabled>登录</Button>
                </div>
                <div className={styles.back}>返回</div>
            </div>
        )
    }
}
export default Parent_hoc()(Login)
