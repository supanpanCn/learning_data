import React,{Component} from 'react'
import { Layout,Icon } from 'antd';
// css作用域
import styles from './style/index.scss'
import Opt from './component/opt'
const { Header, Content } = Layout;
class Home extends Component {
    constructor(props){
        super(props)
    }
   
    render(){
        return (
            <Layout className={styles.ant_layout}>
                <Header className={styles.ant_layout_header}>
                    <Icon type="twitter" className={styles.logo}/>
                    河南省学情大数据平台
                </Header>
                <Content className={styles.ant_layout_content}>
                    <span className={styles.tit}>请选择你的角色<Icon type="caret-down" /></span>
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
                // 不可以直接在组件上定义onClick，这是无效的
                <Opt name={v} key={i} type={i} begin_login={this.begin_login}></Opt>
            )
        })
    }
    // 因为没有办法在组件上直接使用onClick，因此将该函数放到了组件内部
    // 又因为组件opt不是通过react-router加载的，因此获取不到history
    // 故：使用回调的方式
    begin_login=(type)=>{
        this.props.history.push({
            pathname:'/login',
            // query传参刷新后不会被保留
            state:{
                user_type:type
            }
        })
    }
}

export default Home