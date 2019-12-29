import React, { Component } from 'react'
import styles from './style/index.scss'
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
                        </Header>
                        <Content className={styles.main}>
                            <Com {...this.props}></Com>
                        </Content>
                    </Layout>
                )
            }
        }
    }
}
export default Hoc_parent