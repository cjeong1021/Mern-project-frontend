import React from 'react'
import './shopItem.css'

const ShopItem = () => {
  return (
    <div className="shopItemBoard">
    <div className="shopItem">
        <div className="shopItem__image">
            <img src="https://blog.mysubscriptionaddiction.com/wp-content/uploads/2021/10/14/The-Farmers-Dog-October-2021-0004-733x733.jpg" alt=""/>
        </div>
        <div className="shopItem__info">
            <h3>Item Name</h3>
            <p>Item Description</p>
            <p>$100</p>
            <button id='addToCart'>Add to Cart</button>
            <button id='buyNow'>Buy Now</button>
        </div>
    </div>
    </div>
  )
}

export default ShopItem