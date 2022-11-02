import Link from 'next/link'
import React from 'react'
import { AiFillShopping } from 'react-icons/Ai'
import styles from './header.module.css'
export default function Links() {
  return (
    <div className='flex space-x-10' >
      <Link href='/store' className={styles.link}>
        <a className={styles.link}> Store </a>
      </Link>
      <Link href='/store' className={styles.link}>
        <a className={styles.link}> Store </a>
      </Link>
      <Link href='/store' className={styles.link}>
        <a className={styles.link}> 
          <AiFillShopping size='4vh' />
        </a>
      </Link>
      <Link href='/store' className={styles.link}>
        <a className={styles.link}> Store </a>
      </Link>
      <Link href='/store' className={styles.link}>
        <a className={styles.link}> Store </a>
      </Link>
      
    </div>
  )
}
