
import Login from './Components/Auth/Login';
import { getLocalStorage, setLocalStorage } from './utilis/localStorage';
import { useEffect, useState } from 'react';

//import AdminDashboard from "./Components/Dashboard/AdminDashboard"
//import EmployeeDashBoard from "./Components/Dashboard/EmployeeDashBoard"


function App() {



  const [user, setUser] = useState<string>('');

   useEffect(() => {
      setLocalStorage(); //isko hamm actaully aisi hi bahar nahi rakh sakte like khule m hi bcz ye ek render p chl jayega okkh!..
      getLocalStorage();
   });

   function handleLogin(email:string, password:number) {
          if(email == 'admin@me.com' && password == 123){
              console.log('This is Admin')
          }
          else if(email == 'user@me.com' && password == 321){
                 console.log('This is user')
          }
          else{
            alert(
              "Invalid credentails!..",
            )
          }
   }


  return (
    <>
       
       {!user ? <Login handleLogin = {handleLogin} /> : user};

       {/* <EmployeeDashBoard /> */}
       {/* <AdminDashboard/> */}
 
    </>
  )
}

export default App
