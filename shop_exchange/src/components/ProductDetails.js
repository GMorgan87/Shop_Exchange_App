import React from 'react'

const ProductDetails = (props) => {
 
    
  return (
    <div className="product-details">
      <details>
        <summary><span className="bold">Name: </span>{props.product.name} <span className="bold">Qty: </span>{props.product.quantity}</summary>
        <p>Desc: {props.product.description} </p>
        <p>Category: {props.product.category.name} </p>
        <p>Status: {props.product.status} </p>
        <p>Rent condition: {props.product.rentCondition} </p>
        <p>Replace status: {props.product.replaceStatus} </p>
        <p>Quantity: {props.product.quantity}</p>
        <p>Price: £{(props.product.price/100).toFixed(2)}</p>

      </details>
    </div>
  )
}

export default ProductDetails
