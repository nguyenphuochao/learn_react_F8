import React from 'react'
import classNames from 'classnames/bind'
import style from './Header.module.scss'
import images from '~/assets/images'

const cx = classNames.bind(style)

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" spellCheck={false} />
                    <button className={cx('clear')}>
                        <i className="fas fa-times"></i>
                    </button>
                    <button className={cx('search-btn')}>
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
