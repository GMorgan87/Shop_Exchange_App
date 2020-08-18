import React, {Component} from 'react';
import Request from '../helpers/request';


class AddProductForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      product: {
        name: "",
        description: "",
        price: 0,
        category: null,
        status: "PRIVATE",
        rentCondition: "CLEAN",
        replaceStatus: "NEW"
      },
      categories:[],
      qty: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleQuantity = this.handleQuantity.bind(this);
  }
  handleChange(event){
    let propertyName = event.target.name;
    let product = this.state.product
    product[propertyName] = event.target.value;
    this.setState({product: product})
  }

  handleQuantity(event){
    let qty = parseInt(event.target.value);
    this.setState({qty:qty})
  }

  handleCategory(event){
    const index = parseInt(event.target.value)
    const selectedCategory = this.state.categories[index]
    let product = this.state.product;
    product['category'] = selectedCategory
    this.setState({product: product})
  }

  handleSubmit(event){
    event.preventDefault();
    this.handlePost(this.state.product);
  }

  addProduct(productDescription) {
    const request = new Request()
    let product = {user:{id:this.props.userId},
    productDescription:productDescription
    }
    console.log(product);
    
    for (let i = 0; i < this.state.qty; i++) {
      request.post("/api/products", product)
    }
    this.props.updateProducts() 
  }


  //create a description
//assign description to product
//create as many product as needed using loop
handlePost(productDescription){
  const request = new Request();
  console.log(productDescription);
  request.post("/api/product_description", productDescription)
  .then((res)=>res.json())
  .then((res)=>{
    this.addProduct(res)
  }
  )
  };


  componentDidMount(){
    const request = new Request()
    request.get('/api/categories')
    .then((data) => {
        
        this.setState({
            categories:data
        })
        
    })
}


  render(){
    if(this.state.categories.length === 0 ){
       return <p>Loading...</p>
    }
    const categoryOptions = this.state.categories.map((category, index) => {
      return <option key={category.id} value={index}>{category.name}</option>
    });
    return (
      <div >
      <h3 className="add-product">Add Product</h3>
      <form onSubmit={this.handleSubmit} className='product-form'>
      <span>Name: </span>
      <input type="text" name="name" onChange={this.handleChange} value={this.state.product.name} />
      <span>Description: </span>
      <input type="text" name="description" onChange={this.handleChange} value={this.state.product.description} />
      <span>Price: </span>
      <input type="number" name="price" onChange={this.handleChange} value={this.state.product.price}/>
      <span>Quantity: </span>
      <input name="qty" type="number" placeholder="quantity" onChange={this.handleQuantity} value={this.state.qty}/>
      <br/>
      <br/>
      <span>Category: </span>
      <select name="category" onChange={this.handleCategory} defaultValue="select-category">
        <option disabled value="select-category">Select a category</option>
        {categoryOptions}
      </select>
      <span>Status: </span>
      <select name ="status" onChange={this.handleChange} defaultValue="select-status">
        <option value="PRIVATE">Private</option>
        <option value="RENT">Rent</option>
        <option value="LEND">Lend</option>
      </select>
      <span>Rent Condition: </span>
      <select name ="rentCondition" onChange={this.handleChange} defaultValue="select-rentCondition">
        <option value="CLEAN">Clean/Clean</option>
        <option value="DIRTY">Dirty/Dirty</option>
      </select>
      <span>Replace Status: </span>
      <select name ="replaceStatus" onChange={this.handleChange} defaultValue="select-replaceStatus">
        <option value="NEW">New for old</option>
        <option value="FEE">Pay fee</option>
      </select>
      <br/>
      <br/>
      <button type="submit">Save</button>
      </form>
      </div>
    )
  }
}
export default AddProductForm;