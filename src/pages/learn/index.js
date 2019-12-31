import React, { Component } from 'react'
import Parent_hoc from '@components/bg'
import styles from './style/index.scss'
import { Breadcrumb, Icon, Tag, List } from 'antd';
import Home from './component/home'
import Report from './component/learn_report'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class Learn_index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pageName: '2018-2019年数学第三章第四单元测试',
            tit_l: [
                {
                    name: '年级 : ',
                    value: '七年级'
                },
                {
                    name: '学科 : ',
                    value: '数学'
                },
                {
                    name: '考试时间 : ',
                    value: '2019-5-21'
                }
            ],
            list_data: ['数据概览', '特色数据分析', '成绩分析', '考试分析']
        }
    }
    render() {
        console.log('update')
        return (
            
            <div className={styles.learn_index} key={this.props.location.key}>
                <Breadcrumb separator='>' className={styles.breadcrumb}>
                    <Breadcrumb.Item>学情分析</Breadcrumb.Item>
                    <Breadcrumb.Item>
                        {/* <a href="">个人报告</a> */}
                    </Breadcrumb.Item>
                </Breadcrumb>
                <Router>
                    <Switch>
                        {/* 由于不是直接通过路由导航的，因此需要将props向下传递 */}
                        <Route exact path='/learn_index/home'>
                            <Home {...this.props}></Home>
                        </Route>
                        <Route  path='/learn_index/report'>
                            <Report {...this.props}></Report>
                        </Route>
                    </Switch>
                </Router>

            </div>
        )
    }
}
export default Parent_hoc(1)(Learn_index)