import React from "react";


export default function Product(props){
  const { product, onAdd, onRemove } = props;
return (

   <div>
       <img className="small" src={product.imgUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <div>цена: ${product.cost}</div>
      <div>
        <button onClick={onAdd} className="add">+</button>
        <button onClick={onRemove} className="remove">-</button>
      </div>
   </div>


)

}