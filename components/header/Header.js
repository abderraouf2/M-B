import React, { useEffect, useState } from 'react'
import Links from './Links'
import styles from './header.module.css'
import cls from 'classnames'
import Link from 'next/link'
export default function Header({colorbg = false}) {
  const [color,setColor] = useState(false);
  
  useEffect( () =>{
    const changeColor = () => {
      if(window.scrollY >= 1 ){
        setColor(true)
      }
      else setColor(false)
    }
    window.addEventListener('scroll', changeColor)
  })
  
  return (
    <header className={cls(styles.headerWrapper, color ? styles.bg : '',
                           colorbg ? 'bg-stone-800' : '')} 
    >
      <Link href="/">
        
          <div className='w-[100%]'>
            <img src="/static/logo.png" alt="" width='75px' height='75px' />
          </div>
        
      </Link>
      <div className='pr-[2%] ' >
        <Links />
      </div>
    </header>
  )
}
