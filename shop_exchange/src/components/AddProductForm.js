import React, {Component} from 'react';
import Request from '../helpers/request';


class AddProductForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      product: {
        user:{id:this.props.userId},
        name: "",
        description: "",
        price: 0,
        category: null,
        status: "Private",
        rentCondition: "Clean",
        replaceStatus: "New",
        quantity: 0
      },
      categories:[]
      
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

  


  //create a description
//assign description to product
//create as many product as needed using loop
handlePost(product){
  const request = new Request()   
    request.post("/api/products", product).then(
      this.props.updateProducts() 
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
      <input name="quantity" type="number" placeholder="quantity" onChange={this.handleChange} value={this.state.quantity}/>
      <br/>
      <br/>
      <span>Category: </span>
      <select name="category" onChange={this.handleCategory} defaultValue="select-category">
        <option disabled value="select-category">Select a category</option>
        {categoryOptions}
      </select>
      <span>Status: </span>
      <select name ="status" onChange={this.handleChange} defaultValue="select-status">
        <option value="Private">Private</option>
        <option value="Rent">Rent</option>
        <option value="Lend">Lend</option>
      </select>
      <span>Rent Condition: </span>
      <select name ="rentCondition" onChange={this.handleChange} defaultValue="select-rentCondition">
        <option value="Clean">Clean/Clean</option>
        <option value="Dirty">Dirty/Dirty</option>
      </select>
      <span>Replace Status: </span>
      <select name ="replaceStatus" onChange={this.handleChange} defaultValue="select-replaceStatus">
        <option value="New">New for old</option>
        <option value="Fee">Pay fee</option>
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