import React, { Component } from 'react'
import styles from './../style/home.scss'
import { Menu, Dropdown, Icon, Button, Input, Tag ,Pagination } from 'antd';
const { Search } = Input;
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menu_list: [
                {
                    name: '学年',
                    dedfault_val: '请选择学年',
                    list: ['2017-2018', '2018-2019', '2019-2020']
                },
                {
                    name: '年纪',
                    dedfault_val: '请选择年级',
                    list: ['七年级', '八年级', '九年级']
                },
                {
                    name: '学科',
                    dedfault_val: '请选择学科',
                    list: ['数学', '物理', '化学']
                }
            ],
            paper_list: [
                {
                    tag: '单元测',
                    title: '2018-2019学年数学第三章第四单元测试',
                    info: ['七年级', '数学', '2018-2-7'],
                    info_tit:['年级','学科','考试时间'],
                    paper_id:1
                },
                {
                    tag: '期中测试',
                    title: '2018-2019学年数学期中考试',
                    info: ['七年级', '数学', '2018-6-27'],
                    info_tit:['年级','学科','考试时间'],
                    paper_id:2
                },
                {
                    tag: '期末考',
                    title: '2018-2019学年数学期末考试',
                    info: ['七年级', '数学', '2018-12-27'],
                    info_tit:['年级','学科','考试时间'],
                    paper_id:3
                },
                {
                    tag: '期末考',
                    title: '2018-2019学年数学期末考试',
                    info: ['七年级', '数学', '2018-12-27'],
                    info_tit:['年级','学科','考试时间'],
                    paper_id:4
                }
            ]
        }
    }
    render() {
        return (
            <div className={styles.home}>
                <div className={styles.top}>
                    <div className={styles.search}>
                        {this.state.menu_list.map((v, i) => {
                            return (
                                <div className={styles.dropdown_box} key={i}>
                                    {v.name}
                                    <Dropdown
                                        overlay={this.reacte_menu(v)}
                                        trigger={['click']}
                                        className={styles.dropdown}

                                    >
                                        <a style={{ color: '#ccc' }} href="#">
                                            {v.dedfault_val} <Icon type="down" />
                                        </a>
                                    </Dropdown>
                                </div>
                            )
                        })}
                        <Button type="primary" size='small'>查询</Button>
                        <Search
                            placeholder="input search text"
                            onSearch={value => console.log(value)}
                            enterButton
                            className={styles.search_input}
                        />
                    </div>
                    <div className={styles.add_condition}>
                        <div className={styles.left}>
                            <span className={styles.span}>
                                出版社:<Tag className={styles.tag} color="green">全部</Tag>
                                <Tag color="green">人大版</Tag>
                                <Tag color="green">北师大版</Tag>
                            </span>
                            <span className={styles.span}>
                                上下册:<Tag className={styles.tag} color="green">全部</Tag>
                                <Tag color="green">上册</Tag>
                                <Tag color="green">下册</Tag>
                            </span>
                        </div>
                        <span className={styles.right}><Icon type="up" />收起</span>
                    </div>
                </div>
                <div className={styles.dowm}>
                    <ul>
                        {this.state.paper_list.map((v, i) => {
                            return (
                                <li key={i}>
                                    <Tag color="purple">{v.tag}</Tag>
                                    <span style={{ color: '#333', fontWeight: 'bold' }}>{v.title}</span>
                                    <p className={styles.info}>
                                        {v.info.map((item, j) => {
                                            return (
                                                <span className={styles.info_span} key={j}>{v.info_tit[j]} : {item}</span>
                                            )
                                        })}
                                    </p>
                                    <Button className={styles.button} onClick={this.look_report.bind(this,v.paper_id)}>查看报告</Button>
                                </li>
                            )
                        })}
                    </ul>

                </div>
                <Pagination className={styles.pagination}  defaultCurrent={1} total={35} />
            </div>
        )
    }
    look_report = (id)=>{
        console.log(this.props)
        this.props.history.push({
            pathname:'/learn_index/report',
            state:{
                paper_id:id
            }
        })
    }
    reacte_menu = (v) => {
        return (
            <Menu>
                {
                    v.list.map((v, i) => {
                        return (
                            <Menu.Item key={i}>
                                {v}
                            </Menu.Item>
                        )
                    })
                }
            </Menu>
        )
    }
}
export default Home