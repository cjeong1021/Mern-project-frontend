import React from 'react'
import './shopItem.css'

const ShopItem = () => {
  return (
    <div className="shopItem">

        <div className="shopItem__image">
            <img src="https://blog.mysubscriptionaddiction.com/wp-content/uploads/2021/10/14/The-Farmers-Dog-October-2021-0004-733x733.jpg" alt=""/>
        </div>

        <div className='shopItem__title'>
            <p>Scooby Snacks</p>
        </div>

        <div className='shopItem__description'>
            <p>Zoinks!</p>
        </div>

        <div className='shopItem__price'>
            <p>$69,420</p>
        </div>

        <div className='shopItem__button'>
            <button id='buyNow'>Buy Now</button>
            <button id='addToCart'>Add to Cart</button>
        </div>

    </div>
)}

export default ShopItem 