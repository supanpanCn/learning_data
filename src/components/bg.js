import React, { Component } from 'react'
import styles from './style/bg.scss'
import { Layout, Icon } from 'antd';
const { Header, Content } = Layout;
function Hoc_parent(params=null) {
    return function Hoc(Com) {
        return class extends Component {
            constructor(props) {
                super(props)
            }
            render() {
                return (
                    <Layout className={styles.hoc_parent}>
                        <Header className={styles.hoc_header}>
                            <Icon type="twitter" className={styles.logo} />
                            河南省学情大数据平台
                            {this.create_tit()}
                        </Header>
                        <Content className={styles.main}>
                       
                            <Com {...this.props}></Com>
                        </Content>
                    </Layout>
                )
            }
            create_tit(){
                if(params){
                    return(
                        <>
                            <span className={styles.tit}>首页</span>
                            <span className={`${styles.tit} ${styles.active}`}>学情分析</span>
                        </>
                    )
                }
            }
            
        }
    }
}
export default Hoc_parent