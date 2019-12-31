import React, { Component } from 'react'
import styles from './../style/report.scss'
import { Icon, Tag, List } from 'antd'
import { connect } from 'react-redux'
import { listeners } from './../store'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Survery from './survery'
import Feature from './feature'
import Score from './score'
import Exam from './exam'

class Report extends Component {
    constructor(props) {
        super(props)
        const {active_route} = props.history.location.state
        this.state = {
            list_data: [
                '数据概览',
                '特色数据分析',
                '成绩分析',
                '考试分析'
            ],
            active_route:active_route?active_route:0
        }
    }
    render() {
        let paper_obj = this.props.paper_obj
        return (
            <div className={styles.report}>
                <p className={styles.info_p}>
                    <Icon type="left" />
                    <Tag color="purple">{paper_obj.get('tag')}</Tag>
                    <span>{paper_obj.get('title')}</span>
                    {
                        this.createSpan(paper_obj)
                    }
                </p>
                <List
                    bordered
                    dataSource={this.state.list_data}
                    className={styles.ul}
                    renderItem={(item, index) => (
                        <List.Item 
                            onClick={this.tap_li.bind(this, index)}
                            className={this.state.active_route==index?styles.li_act:''}
                        >
                            {item}
                        </List.Item>
                    )}
                />
                <main className={styles.main}>
                    <Router>
                        <Switch>
                            <Route exact path='/learn_index/report/survey'>
                                <Survery {...this.props}></Survery>
                            </Route>
                            <Route exact path='/learn_index/report/score'>
                                <Score {...this.props}></Score>
                            </Route>
                            <Route exact path='/learn_index/report/feature'>
                                <Feature {...this.props}></Feature>
                            </Route>
                            <Route exact path='/learn_index/report/exam'>
                                <Exam {...this.props}></Exam>
                            </Route>
                        </Switch>
                    </Router>
                </main>
            </div>
        )
    }
    componentWillMount() {
        // 发送saga指令并传递参数
        let paper_id = this.props.history.location.state.paper_id
        this.props.get_paper_list(paper_id)
    }
    tap_li = (index) => {
        
        let paper_id = this.props.history.location.state.paper_id
        let path = ''
        switch (index) {
            case 0:
                path = '/learn_index/report/survey'
                break
            case 1:
                path = '/learn_index/report/feature'
                break
            case 2:
                path = '/learn_index/report/score'
                break
            case 3:
                path = '/learn_index/report/exam'
                break
        }
        
        this.props.history.push({
            pathname: path,
            state: {
                paper_id: paper_id,
                active_route:index
            }
        })

    }
    createSpan = (paper_obj) => {
        let arr = paper_obj.get('info_tit')
        // 由于第一次获取的Map为{}，因此需要增加一层判断
        if (arr) {
            return arr.map((v, i) => {
                return (
                    <span key={i} className={styles.span_fl}>{v}:{paper_obj.get('info').get(i)}</span>
                )
            })

        }
    }
}
const mapStateToProps = (state) => {
    return {
        paper_obj: state.getIn(['report', 'paper_obj'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        get_paper_list(paper_id) {
            dispatch(listeners.get_user_select(paper_id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Report)