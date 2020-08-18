import React, {Component} from 'react';


class AddUserForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {
        name: "",
        address: "",
        phone_number: "",
        email: ""
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    let propertyName = event.target.name;
    let user = this.state.user
    user[propertyName] = event.target.value;
    this.setState({user: user})
  }
  
  handleSubmit(event){
    event.preventDefault();
    this.props.onCreate(this.state.user);
  }
  render(){
    return (
      <div className="add-user-form">
      <form onSubmit={this.handleSubmit}>
      <input type="text" placeholder="Name" name="name" onChange={this.handleChange} value={this.state.user.name} />
      <input type="text" placeholder="Address" name="address" onChange={this.handleChange} value={this.state.user.address} />
      <input type="text" placeholder="phone number" name="phone_number" onChange={this.handleChange} value={this.state.user.phone_number}/>
      <input type="text" placeholder="email" name="email" onChange={this.handleChange} value={this.state.user.email}/>
      <button type="submit">Save</button>
      </form>
      </div>
    )
  }
}
export default AddUserForm;