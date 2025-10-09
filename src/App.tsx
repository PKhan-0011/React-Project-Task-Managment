
import Login from './Components/Auth/Login';

import { getLocalStorage, setLocalStorage } from './utilis/localStorage';
import { useEffect, useState } from 'react';

// import AdminDashboard from "./Components/Dashboard/AdminDashboard";
// import EmployeeDashBoard from "./Components/Dashboard/EmployeeDashBoard";

import {useContext} from 'react';
import { AuthContext } from './context/AuthProvider';

function App() {
  
  const userData = useContext(AuthContext);
   
  console.log(userData);
  console.log("Em", userData?.employee);
  console.log("Ad", userData?.adminData);

  const [user, setUser] = useState<string>('');

   useEffect(() => {
      setLocalStorage(); //isko hamm actaully aisi hi bahar nahi rakh sakte like khule m hi bcz ye ek render p chl jayega okkh!..
      getLocalStorage();
   });

  function handleLogin(email:string, password:number) {
          if(email == 'admin@me.com' && password == 123){
              setUser('admin');
          }
          
          else{
            alert(
              "Invalid credentails!..", 
            )
          }
   }


  return (
    <>
       
       {!user ? <Login handleLogin = {handleLogin} /> : ''};
       
        
    </>
  )
}

export default App
