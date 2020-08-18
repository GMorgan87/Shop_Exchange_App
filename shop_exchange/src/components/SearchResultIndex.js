import React from 'react';
import BorrowProductsDetails from './BorrowProductsDetails';
import Request from '../helpers/request';


const SearchResultIndex = (props) => {
    if (!props) {
        return <p>Search for products</p>
    }

    const countProducts = (products) => {
        const formatted = {}
        for (let product of products){
            if (Object.keys(formatted).includes(product.productDescription.id.toString())){
                formatted[product.productDescription.id] += 1
            } else {
                formatted[product.productDescription.id] = 1
            }
        }
        return formatted
    }

    const handleBorrowing = (id, qty) => {
        console.log(props.products, id, qty)
        const borrowedProducts = props.products.filter(prod => prod.productDescription.id === id).slice(0, qty)
        const request = new Request()
        borrowedProducts.forEach(prod => {
            request.post(`/api/products/${prod.id}/borrow/${props.userId}`,{})
        })


    }


    const formatProducts = (products) => {
        const result = [];
        const map = new Map();
        const productCount = countProducts(products)
        console.log(productCount);
        for (const product of products) {
            if(!map.has(product.productDescription.id)){
                 map.set(product.productDescription.id, true);
                result.push({
                    ...product.productDescription,
                     qty: productCount[product.productDescription.id]
                    });
                 }
            }
      return result  
    }

    const productNodes = formatProducts(props.products).map((prod, index) => {
        return <BorrowProductsDetails key={index} product={prod} index={index} handleBorrowing={handleBorrowing}/>
    })
    
  return (
    <div className="my-products-index">
    <h3>Search Results</h3>
      {productNodes}
    </div>
  )

}
 
export default SearchResultIndex;