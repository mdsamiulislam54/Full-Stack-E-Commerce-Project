import axios from "axios"

import UserContainer from "./UserContainer"
import UserProfile from "./UserProfile"

import { useSelector,useDispatch } from "react-redux"
import { logOut } from "../../redux/features/userSlice"

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import NotAuthorized from "../NotAuthorized "



const UserDashboard = () => {
  const [userData, setUserData] = useState(null);

  const token = localStorage.getItem("token")
  const navigate = useNavigate();
const login = useSelector((state)=>state.loginCheck.isLoggedIn)
console.log(login)
  useEffect(()=>{
    if(token){
      axios.get('https://dailymart.up.railway.app/api/users/protected-data',{
        headers:{
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response)=>{
        setUserData(response.data);
      
      }).catch((err) => {
        console.error(err.response?.data?.message || "Error fetching data");
        
      });
    }
  },[token]);


const user = useSelector((state)=> state.user.user)
const dispatch = useDispatch()

const handleLogout = ()=>{
  localStorage.removeItem('token')
  dispatch(logOut());
  navigate('/')

}





  return (
    <>
      {userData? (
        <div>
          
        <div className="w-11/12 mx-auto">
             <div className="grid sm:grid-cols-5  ">
               <div className="sm:col-span-1 "><UserProfile user={user}/></div>
               <div className="sm:col-span-4 "><UserContainer user={user} handleLogout={handleLogout}/>
               
               </div>
             </div>
        </div>
       </div>
      ) : (
       <NotAuthorized/>
      )}
    </>
  )
  
}

export default UserDashboard