// import axios from "axios"

import { useSelector,useDispatch } from "react-redux"
import { logOut } from "../../redux/features/userSlice"

// import { useEffect, useState } from "react";


const UserDashboard = () => {
  // const [userData, setUserData] = useState(null);
  // const [error, setError] = useState(null);
  // const token = localStorage.getItem("token")

  // useEffect(()=>{
  //   if(token){
  //     axios.get('http://localhost:5000/api/users/protected-data',{
  //       headers:{
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((response)=>{
  //       setUserData(response.data);
      
  //     }).catch((err) => {
  //       setError(err.response?.data?.message || "Error fetching data");
        
  //     });
  //   }
  // },[token]);


const user = useSelector((state)=> state.user.user)
const dispatch = useDispatch()

const handleLogout = ()=>{
  localStorage.removeItem('token')
  dispatch(logOut());
}





  return (
    <div>
     <div className="sm:max-w-screen-xl mx-auto">
     <h1>User Data</h1>
      {
        user ? (
          <div>
            <h1> welcome {user.name}</h1>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ):(
          <div>
            no user
          </div>
        )
      }
     </div>
    </div>
  )
}

export default UserDashboard