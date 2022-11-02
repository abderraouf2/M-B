import React from 'react'
import { useRouter } from 'next/router'
import { items } from './items'
import Header from '../../components/header/Header'
export default function ItemId() {
  const router = useRouter()
  const itemId = router.query.itemId
  return (
    <div>
      <Header colorbg={true} />
      {
        items.filter(item=>(item.id == itemId)).map(item =>{
           return( 
                <div className=' m-[10%] mt-[20vh] flex flex-row '>
                  <div className='h-[100vh] w-[50vw] overflow-hidden' >
                    <img height='100%' width='100%' src={item.img} alt="" />
                  </div>
                  <div className=' w-[45vw] pl-[3vw] flex flex-col '>
                    <h1 className='text-[54px] '> {item.name} </h1>
                    <h4  className='text-[24px] mt-[5vh] '> {item.description} </h4>
                    <button className='bg-black text-white h-[8vh] mt-[5vh] ' type="submit">add to cart</button>
                  </div>
                </div>)
        })
        }
    </div>
  )
}
