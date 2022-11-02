import React from 'react';
import { motion } from 'framer-motion';

export default function ItemCard({img, name, categorie}) {
  return (
    <div className='w-[18vw] h-[40vh] mb-[5vh] trancate border-2 border-sky-500 overflow-hidden '>
      <div className='w-[100%] h-[30vh] overflow-hidden '>
          <motion.div
             
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
          >
            <img src={img} alt="" width='100%' height='70%' />
          </motion.div>
        </div>
        <h5 className=' text-[15px] text-zinc-900 ' > {categorie} </h5>
        <h4 className=' text-[25px] text-zinc-900 ' >{name}</h4>
    </div>
  )
}
