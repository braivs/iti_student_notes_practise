import React from 'react'
//import from regular style
import './TodolistStyle.css'
//import from encapsulated style
import styles from './TodolistStyle.module.css'

type PropsType = {
    title: string
}

export function Todolist(props: PropsType) {
    return <div>
        {/*applying from regular style*/}
        <div className={'MyStyle'}>{props.title}</div>
        {/*applying from encapsulated style*/}
        <div className={styles.MyStyle}>{props.title}</div>
        {/*applying TWO style throw template strings (Ё button) */}
        <div className={`${styles.MyStyle1} ${styles.MyStyle2}`}>{props.title}</div>
    </div>
}