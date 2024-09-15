import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../../slices/usersSlics'
const Home = () => {

    const dispatch=useDispatch()
    const [user,setUser]=useState({userName:"",userOccupation:""})
    const [usersData,setUserData]=useState([])

    const changeEvent=(e)=>{
        const {name,value}=e.target
        console.log(name,value,'name,value')
        setUser((prevDetails)=>({...prevDetails,[name]:value}))
    }

    const submitEvent=(e)=>{
        e.preventDefault()
        if(user.userName!==""){
            setUserData((prevData)=>[...prevData,user])
            dispatch(addUser(user))
            setUser({userName:"",userOccupation:""})
        }        
    }
    console.log(usersData,'usersData')

  return (
    <div>
      <h1>Home page</h1>
      <form onSubmit={submitEvent}>
        <input type='text' name='userName' placeholder='name' onChange={changeEvent} value={user.userName}/>
        <br/>
        <input type='text' name='userOccupation' placeholder='occupation' onChange={changeEvent} value={user.userOccupation}/>
        <br/>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Home
