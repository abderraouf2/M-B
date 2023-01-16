import React, { useEffect } from 'react'

export default function Checkout() {

    useEffect(  () => {
        const response =  fetch('/api/cartItems', {
            method: 'GET'
        })
    })

  return (
      <div>
          Checkout page
      </div>
  )
}
