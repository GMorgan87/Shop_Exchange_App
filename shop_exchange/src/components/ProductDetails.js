import React from 'react'

const ProductDetails = (props) => {
 
    
  return (
    <div className="product-details">
      <details>
        <summary><span className="bold">Name: </span>{props.product.name} <span className="bold">Qty: </span>{props.product.qty}</summary>
        <p>desc: {props.product.description} </p>
        <p>category: {props.product.category.name} </p>
        <p>status: {props.product.status} </p>
        <p>rent condition: {props.product.rentCondition} </p>
        <p>replace status: {props.product.replaceStatus} </p>
        <p>qty: {props.product.qty}</p>

      </details>
    </div>
  )
}

export default ProductDetails
