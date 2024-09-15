import React from 'react'
import { useSelector } from 'react-redux'

const Users = () => {

    const usersData=useSelector((state)=>state.usersInfo.users)
    
  return (
    <div>
      <h1>Users Page</h1>
      {usersData.map((eachUser)=>(
        <li>
            <h1>{eachUser.userName}</h1>
            <p>{eachUser.userOccupation}</p>
            
        </li>
      ))}
    </div>
  )
}

export default Users
