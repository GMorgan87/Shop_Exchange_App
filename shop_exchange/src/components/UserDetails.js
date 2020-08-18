import React from 'react'

const UserDetails = ({user}) => {
    
    if (!user) {
        return <p>Loading....</p>
    }
    
  return (
    <div className="user-details">
      <h2>{user.name}</h2>
     <p>Address: {user.address}</p>
     <p>Phone: {user.phone_number}</p>
     <p>Email: {user.email}</p>
    </div>
  )
}

export default UserDetails
