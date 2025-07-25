import React from 'react'
import style from './Sidebar.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(style)

function Sidebar() {
    return <aside className={cx('wrapper')}>
        <h1>Sidebar</h1>
    </aside>
}

export default Sidebar
