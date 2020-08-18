import React from 'react'
import { Link } from "react-router-dom";


const UserList = (props) => {
    const users = props.users.map((user, index) => {
        return <li key={index}>
          <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
    })  
  return (
    <div className="user-list">
        <span>Select User</span>
        <ul >
        { users }    
        </ul>
    </div>
  )
}

export default UserList;
