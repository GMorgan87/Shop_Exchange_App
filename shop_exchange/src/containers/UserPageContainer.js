import React, { Component } from 'react'
import Request from '../helpers/request'
import UserDetails from '../components/UserDetails'
import UserProductIndex from '../components/UserProductIndex'
import AddProductForm from '../components/AddProductForm'
import ProductSearch from '../components/ProductSearch'
import SearchResultIndex from '../components/SearchResultIndex'
import BorrowedProductList from '../components/BorrowedProductList'

class UserPageContainer extends Component {
    constructor(props) {
      super(props)
      this.state = {
         user: null,
         foundProducts:[],
         myProducts: true
      }
      this.updateProducts = this.updateProducts.bind(this);
      this.handleSearch = this.handleSearch.bind(this);
      this.handleMyProducts = this.handleMyProducts.bind(this);
      this.handleBorrowedProducts = this.handleBorrowedProducts.bind(this);
    }
    
    componentDidMount() {
        const request = new Request()
        request.get(`/api/users/${this.props.match.params.id}`)
        .then((data)=>{
            this.setState({
                user:data
            })
        })
    }

    updateProducts(){
      const request = new Request()
      request.get(`/api/users/${this.props.match.params.id}`)
        .then((data)=>{
            this.setState({
                user:data
            })
        })
    }

    handleSearch(searchString){
      const request = new Request()
      request.get(`/api/products/search/${searchString}`)
      .then((data)=>{
        this.setState({
          foundProducts:data
        })
      })
    }

    handleMyProducts(){
      this.setState({
        myProducts: true
      })
    }

    handleBorrowedProducts(){
      this.setState({
        myProducts: false
      })
    }

    

  render() {

    if (!this.state.user) {
        return <p>Loading....</p>
    }

     const myProducts = this.state.myProducts; 
    return (
      <div className="user-page">
        <UserDetails user={this.state.user}/>
        <div className="user-buttons">
            <button onClick={this.handleMyProducts}>My Products</button>
            <button onClick={this.handleBorrowedProducts}>Borrowed Products</button>
        </div>
         {myProducts 
         ? <div>
        <AddProductForm onCreate={this.handleSubmit} userId={this.props.match.params.id} updateProducts={this.updateProducts}/>
        <UserProductIndex products={this.state.user.products}/>
        </div>
       
       : <div>
        <ProductSearch  handleSearch = {this.handleSearch}/>
        <SearchResultIndex products= {this.state.foundProducts} userId={this.props.match.params.id}/>
        <BorrowedProductList products={this.state.user.borrowedProducts}/>
        </div>
        }
         
      </div>
    )
  }
}


export default UserPageContainer

