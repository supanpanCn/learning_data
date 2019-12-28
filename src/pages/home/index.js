import React,{Component} from 'react'

import { Layout } from 'antd';
// import styles from './style/index.scss'
import styles from './style/index.scss'
import {Icon,Input} from 'antd'
import Opt from './component/opt'
const { Header, Content } = Layout;

class Home extends Component {
    render(){
        return (
            <Layout className={styles.ant_layout}>
                <Header className={styles.ant_layout_header}>
                    <Icon type="twitter" className={styles.logo}/>
                    河南省学情大数据平台
                </Header>
                <Content className={styles.ant_layout_content}>
                    <span className={styles.tit}>请选择你的角色</span>
                    <div className={styles.user_type}>
                        {this.create_opt()}
                    </div>
                </Content>
            </Layout>
        )
    }
    create_opt = ()=>{
        let arr = ['学校管理者','任课老师','学生','家长']
        return arr.map((v,i)=>{
            return (
                <Opt name={v} key={i}></Opt>
            )
        })
    }
    
    
}

export default Home