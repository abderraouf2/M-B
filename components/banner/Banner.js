import React from 'react';

import Header from '../header/Header';
import styles from './banner.module.css';
import cls from 'classnames'
export default function Banner() {
  
  return (
    <div className={cls(styles.bannerWrapper, styles.bgImage)}>
      <div className={styles.bg}>
        <Header />
      </div>
      <div className={cls('w-[100%]',styles.logoWrapper)}>
        <img src="/static/logo.png" alt="" />
      </div>
    </div>
  )
}
