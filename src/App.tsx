
import Login from './Components/Auth/Login';
import { getLocalStorage, setLocalStorage } from './utilis/localStorage';
import { useEffect } from 'react';

//import AdminDashboard from "./Components/Dashboard/AdminDashboard"
//import EmployeeDashBoard from "./Components/Dashboard/EmployeeDashBoard"

function App() {

   useEffect(() => {
      setLocalStorage(); //isko hamm actaully aisi hi bahar nahi rakh sakte like khule m hi bcz ye ek render p chl jayega okkh!..
      getLocalStorage();
   }) 

  return (
    <>

       <Login/> 

       {/* <EmployeeDashBoard /> */}
       {/* <AdminDashboard/> */}
 
    </>
  )
}

export default App
