import React, { Component } from 'react'
import { Button, Icon, Modal } from 'antd'
import styles from './../style/survery.scss'
class Survery extends Component {
    constructor(props) {
        super(props)
        this.state={
            visible:false
        }

    }
    render() {
        const report = this.props.paper_obj.get('report')
        return (
            <div className={styles.survery}>
                <p className={styles.p}>
                    <span>郑州一中-七年级1班-李华的个人报告</span>
                    <Button className={styles.btn} onClick={this.export_report}>导出报告</Button>
                    <Button className={styles.btn}>打印报告</Button>
                </p>
                <main>
                    <div className={styles.top}>
                        <div className={styles.icon_box}>
                            <Icon className={styles.icon} type="highlight" />
                            成绩：{this.sreate_span(report, 'score')}
                        </div>
                        <div className={styles.icon_box}>
                            <Icon className={styles.icon} type="highlight" />
                            班级排名：{this.sreate_span(report, 'rank', 0)}
                        </div>
                        <div className={styles.icon_box}>
                            <Icon className={styles.icon} type="highlight" />
                            年级排名：{this.sreate_span(report, 'rank', 1)}
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.change}>
                            <Icon type="loading" />
                            <span className={styles.clas}>
                                班级排名变化
                            </span>
                            <span className={styles.mid}>
                                {this.create_range(report, 0)}
                            </span>
                            <span className={styles.bot_r}>与上月考试相比</span>
                        </div>
                        <div className={styles.change}>
                            <Icon type="loading" />
                            <span className={styles.clas}>
                                年级排名变化
                            </span>
                            <span className={styles.mid}>
                                {this.create_range(report, 1)}
                            </span>
                            <span className={styles.bot_r}>与上月考试相比</span>
                        </div>
                        <div className={styles.change}>
                            <Icon type="loading" />
                            <span className={styles.clas}>
                                薄弱知识点
                            </span>
                            <span className={styles.mid}>
                                5
                            </span>
                            <span className={`${styles.bot_r} ${styles.hight_light}`}>查看详情</span>
                        </div>
                    </div>
                </main>
                {this.create_model()}
            </div>
        )
    }
    create_model = () => {
        return (
            <Modal
                title="导出学情报告"
                visible={this.state.visible}
                okText="导出报告"
                cancelText="取消"
                onCancel={()=>{this.setState({
                    visible:false
                })}}
            >
                <p>暂未可生成的试卷报告</p>
            </Modal>
        )
    }
    sreate_span = (obj, key, ty) => {
        if (obj) {
            return ty == undefined ? obj.get(key) : obj.get(key).get(ty)
        }
    }
    create_range = (obj, index = 0) => {
        if (obj) {
            if (obj.get('varible').get(index) > 0) {
                return (<Icon className={styles.range_up} type="rise" />)
            } else {
                return (<Icon className={styles.range_down} type="fall" />)
            }
        }
    }
    export_report = () => {
        this.setState((preState)=>({
            visible:true
        }))
    }
}
export default Survery