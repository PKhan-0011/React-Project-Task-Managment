
import Login from './Components/Auth/Login';

import { useState, useEffect } from 'react';

// import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import {useContext} from 'react';
import { AuthContext } from './context/AuthProvider';
import AdminDashboard from './Components/Dashboard/AdminDashboard';
import EmployeeDashBoard from "./Components/Dashboard/EmployeeDashBoard";
import { setLocalStorage } from './utilis/localStorage';

function App() {
  
  const userData = useContext(AuthContext);
   
  console.log(userData);
  console.log("Em", userData?.employee);
  console.log("Ad", userData?.adminData);

  const [user, setUser] = useState<string>('');

   useEffect(() => {
      setLocalStorage(); //isko hamm actaully aisi hi bahar nahi rakh sakte like khule m hi bcz ye ek render p chl jayega okkh!..
   }, []);

  function handleLogin(email:string, password:number) {
          if(email == 'admin@me.com' && password == 123){
              setUser('admin');
              console.log(user);
          }
          else if (email === 'user@me.com' && password == 321){
              setUser('employee');
              console.log(user);
          }
          else{
            alert(
              "Invalid credentails!..", 
            )
          }
   }


  return (
    <>
       
       {!user ? (<Login handleLogin={handleLogin} />) : user == 'admin' ? <AdminDashboard/> : <EmployeeDashBoard/>};

    </>
  )
}

export default App;
