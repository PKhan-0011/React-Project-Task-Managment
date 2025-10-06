
const ScroolTask = ({name}:any) => {
    
    

  return (
    <div className=" text-white text-3xl bg-stone-800 p-5 mt-5 h-52 overflow-auto">
         <div className="bg-red-600 rounded  mb-5 py-3 flex justify-around">
               <h2>{name}</h2>
               <h3>Make a ui Design</h3>
               <h3>{Date.now()}</h3>
         </div>

          <div className="bg-green-600 rounded mb-5 py-3 flex justify-around">
               <h2>{name}</h2>
               <h3>Make a ui Design</h3>
               <h3>{Date.now()}</h3>
         </div>

         <div className="bg-yellow-600 rounded mb-5  py-3 flex justify-around">
               <h2>{name}</h2>
               <h3>Make a ui Design</h3>
               <h3>{Date.now()}</h3>
         </div>

         <div className="bg-red-200 rounded flex mb-5 py-3 justify-around">
               <h2>{name}</h2>
               <h3>Make a ui Design</h3>
               <h3>{Date.now()}</h3>
         </div>

         <div className="bg-red-400 rounded flex mb-5 py-3 justify-around">
               <h2>{name}</h2>
               <h3>Make a ui Design</h3>
               <h3>{Date.now()}</h3>
         </div>
    </div>
  )
}

export default ScroolTask