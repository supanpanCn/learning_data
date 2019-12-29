import React, { Component } from 'react'
import styles from './../style/tip.scss'
function Tip(props) {
    return (
        <div className={props.tip ? styles.tip_box : ''}>
            {props.tip}
        </div>
    )

}
export default Tip