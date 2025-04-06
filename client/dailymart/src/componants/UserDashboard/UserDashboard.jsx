import axios from "axios"

import UserContainer from "./UserContainer"
import UserProfile from "./UserProfile"

import { useSelector,useDispatch } from "react-redux"
import { logOut } from "../../redux/features/userSlice"

import { useEffect, useState } from "react";



const UserDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token")

  useEffect(()=>{
    if(token){
      axios.get('http://localhost:5000/api/users/protected-data',{
        headers:{
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response)=>{
        setUserData(response.data);
      
      }).catch((err) => {
        setError(err.response?.data?.message || "Error fetching data");
        
      });
    }
  },[token]);


const user = useSelector((state)=> state.user.user)
const dispatch = useDispatch()

const handleLogout = ()=>{
  localStorage.removeItem('token')
  dispatch(logOut());
}





  return (
    <div>
     <div className="w-11/12 mx-auto">
          <div className="grid sm:grid-cols-5  ">
            <div className="sm:col-span-1 "><UserProfile user={user}/></div>
            <div className="sm:col-span-4 "><UserContainer user={user}/>
            
            </div>
          </div>
     </div>
    </div>
  )
}

export default UserDashboard