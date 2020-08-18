import React, {Component} from 'react'


class BorrowProductsDetails extends Component {
        constructor(props) {
            super(props);
            this.state = {  
                qty: 0
            }
            this.handleChange = this.handleChange.bind(this);
            this.handleBorrowing = this.handleBorrowing.bind(this);
        }

        handleChange(event){
            this.setState({
                qty: parseInt(event.target.value)
            })
        }

        handleBorrowing(){
            this.props.handleBorrowing(this.props.product.id, this.state.qty)
        }
    
    render(){
  return (
      
    <div className="product-details">
    <div>  
      <details>
      <summary>
      <p>name: {this.props.product.name} </p>
      <p>qty:{this.props.product.qty}</p>
      </summary>
      <p>desc: {this.props.product.description} </p>
      <p>category: {this.props.product.category.name} </p>
      <p>status: {this.props.product.status} </p>
      <p>rent condition: {this.props.product.rentCondition} </p>
      <p>replace status: {this.props.product.replaceStatus} </p>
      </details>
      </div>
      <div>
      <input type="number" onChange={this.handleChange} />
      <button onClick={this.handleBorrowing}>Borrow</button>
      </div>
    </div>
    )
  } 
}

export default BorrowProductsDetails