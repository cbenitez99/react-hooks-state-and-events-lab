import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)

  function handleCart(){
    setInCart((inCart) => !inCart);
  }
  return (
    <li className={inCart ? "in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? "remove" : "add"} 
        onClick={handleCart}>
        {inCart ? "remove item from" : "add item to"} Cart
      </button>
    </li>
  );
}

export default Item;
