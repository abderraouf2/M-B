import React from 'react'
import Header from '../../components/header/Header'
import ItemCard from '../../components/itemCard/ItemCard'
import { items } from './items.js'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function store() {
  const router = useRouter()
  return (
    <div>
      <Header colorbg={true} />
      <div className='mt-[15vh] grid gap-[50px] grid-cols-4 grid-rows-3 ml-[10vw] mr-[10vw] '>
        {
            items.map((item) => {
             return (
             <Link href={`/store/${item.id}`} key={item.id} >
                <ItemCard key={item.id} img={item.img} name={item.name} categorie={item.categorie} />
             </Link>)
            })
        }
        

      </div>
    </div>
  )
}
