import Header from "../Other/Header"
import TaskList from "../Other/TaskList"
import TasklistCard from "../Other/TasklistCard"

const EmployeeDashBoard = () => {
  return (
    <div className="p-5 bg-[#1C1C1C] h-screen">
        <Header/>
        <TaskList />
        <TasklistCard />
    </div>
  )
}

export default EmployeeDashBoard