
import Header from "../Other/Header"
import CreateTask from "../Other/CreateTask";
import ScroolTask from "../Other/ScroolTask";



const AdminDashboard = () => {
  


  return (
    <>
       <div className="h-screen w-full p-10">
        <Header name = "Parvej" />
        <CreateTask />
         <ScroolTask name={'Parvej'}/>
      
    </div>
    </>
  ) 
}

export default AdminDashboard