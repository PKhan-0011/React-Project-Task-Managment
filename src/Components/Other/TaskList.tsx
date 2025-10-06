

const TaskList = () => {
  return (
    <div className=" mt-10  gap-5 screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

          <div className="p-10  bg-red-400 rounded-lg py-6 px-9">
               <h1 className="text-3xl text-white font-medium text-center">0</h1>
               <h2 className="text-3xl text-white font-bold text-center">New Task</h2>
          </div>

          <div className="p-10  bg-blue-400 rounded-lg py-6 px-9">
               <h1 className="text-3xl text-white font-medium text-center">0</h1>
               <h2 className="text-3xl text-white font-bold text-center">New Task</h2>
          </div>

          <div className="p-10  bg-green-400 rounded-lg py-6 px-9">
               <h1 className="text-3xl text-white font-medium text-center">0</h1>
               <h2 className="text-3xl text-white font-bold text-center">New Task</h2>
          </div>

          <div className="p-10  bg-pink-400 rounded-lg py-6 px-9">
               <h1 className="text-3xl text-white font-medium text-center">0</h1>
               <h2 className="text-3xl text-white font-bold text-center">New Task</h2>
          </div>
    </div>
  )
}

export default TaskList