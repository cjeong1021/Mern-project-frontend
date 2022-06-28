//rafce

import React from 'react'
import './shopBoard.css'
import ShopItem from './ShopItem'

const ShopBoard = () => {

    const [petItems, setPetItems] = React.useState([1,2,3,4,5,6,7,8,9,10])

    const items = petItems.map(item => {
        return <ShopItem key={item.id} item={item}/>
    })

  return (
    <div className="shopBoard">
        {items}
    </div>
  )
}

export default ShopBoard