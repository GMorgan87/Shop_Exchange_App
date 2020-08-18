import React, { Component } from 'react'

export class ProductSearch extends Component {

     constructor(props) {
            super(props)
        
            this.state = {
                 searchString:""
            }
            this.handleChange = this.handleChange.bind(this)
            this.handleClick = this.handleClick.bind(this)
        }    

        handleChange(event){
            this.setState({searchString: event.target.value})
          }

        handleClick(){
            this.props.handleSearch(this.state.searchString)
        }


    render() {
        return (
        <div className = "product-search">
         <input name="product-search" placeholder="Search for product" onChange = {this.handleChange} value={this.state.searchString}></input>
         <br/>
         <button className = "search-button" onClick = {this.handleClick}>Search</button>       
        </div>
        )
    }
}

export default ProductSearch;
