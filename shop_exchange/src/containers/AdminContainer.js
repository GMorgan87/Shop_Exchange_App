import React, {Component} from 'react';
import Request from '../helpers/request';
import AdminUserList from '../components/AdminUserList';
import AddUserForm from '../components/AddUserForm';


class AdminContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users:[]
        }
        this.handlePost = this.handlePost.bind(this)
    }

    componentDidMount(){
        const request = new Request()
        request.get('api/users')
        .then((data) => {
            this.setState({
                users:data
            })
            
        })
    }

    handlePost(user){
        const request = new Request();
        request.post("/api/users", user)
        const updatedusers = [...this.state.users, user];
        this.setState({
          users: updatedusers
        });
      }
      

    render(){
        return (
            <>
                <AddUserForm  onCreate={this.handlePost}/>
                <AdminUserList users = {this.state.users}/>
            </>
        )
    }
}

export default AdminContainer;