import React from 'react';
import cls from 'classnames';
import styles from './categories.module.css'

export default function Categories() {
  return (
    <section className={ cls('grid gap-[50px] grid-cols-2 grid-rows-[100px] mt-[110vh] p-[10%] ',styles.categorieWrapper) }>
      <div className='row-span-4 border-4 '>
        <div className='h-[90vh] mb-[5vh] truncate'>
        <img className=' hover:scale-[1.1] ease-out duration-300 ' src="/static/pants.jpg" alt="" height='100%' />
        </div>
        <h6 className=' text-[24px] capitalize '>categorie</h6>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has . </p>
      </div>
      <div className=' row-span-2 '>
      <div className='truncate h-[45vh] mb-[1vh]'>
        <img className=' hover:scale-[1.1] ease-out duration-300 ' src="/static/shirts.jpg" alt="" height='100%' />
        </div>
        <h6 className=' text-[24px] capitalize '>categorie</h6>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
      </div>
      <div className='row-span-4 '>
      <div className='h-[90vh] mb-[5vh] truncate '>
        <img className=' hover:scale-[1.1] ease-out duration-300 ' src="/static/polos.jpg" alt="" height='100%'  />
        </div>
        <h6 className=' text-[24px] capitalize '>categorie</h6>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
      </div>
      <div className='row-span-2 '>
      <div className='truncate h-[50vh] mb-[5vh]'>
        <img className=' hover:scale-[1.1] ease-out duration-300 ' src="/static/shows.jpg" alt=""  />
        </div>
        <h6 className=' text-[24px] capitalize '>categorie</h6>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
      </div>
      
    </section>
  )
}
