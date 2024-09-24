import React, { useState } from 'react'

const SelectQuantity = () => {
  const [quantity, setQuantity] = useState(0)

  return (
    <div>
      <button className='quantity quantity-minus' onClick={() => setQuantity(quantity - 1 > 0 ? quantity - 1 : 0)}>
        -
      </button>
      <button className='quantity quantity-amount'>{quantity}</button>
      <button className='quantity quantity-plus' onClick={() => setQuantity(quantity + 1 < 10 ? quantity + 1 : 10)}>
        +
      </button>
    </div>
  )
}

export default SelectQuantity
