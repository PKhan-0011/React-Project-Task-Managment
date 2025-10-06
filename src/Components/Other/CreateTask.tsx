

const CreateTask = () => {
  return (
    <div className="mt-10  w-full overflow-hidden">
             <form  className="border-2 bg-stone-800 rounded-lg  flex flex-col md:flex-col  lg:flex-row  items-start justify-around  gap-10 p-10 w-full ">

               <div className="flex flex-col gap-5 pt-4  mt-10 w-full p-10">

                     <div className="flex flex-col  gap-3">
                         <h3 className="text-white text-2xl font-bold">Task Title</h3>
                         <input type="text" placeholder="Make a Ui design" className="border-1 border-white rounded p-1 font-semibold pl-2 text-white w-[10em] md:w-[20em] lg:w-[30em]"/>
                    </div>

               <div className="flex flex-col  gap-3">
                     <h2 className="text-white text-2xl font-bold">Date</h2>
                     <input type="date" className="border-1 border-white rounded p-1 font-semibold pl-2 text-white w-[10em] md:w-[20em] lg:w-[30em]"/>
               </div>

                  <div className="flex flex-col  gap-3">
                       <h1 className="text-white text-2xl font-bold">Assign To</h1>
                       <input type="text" placeholder="employee name" className="border-1 border-white rounded p-1 font-semibold pl-2 text-white w-[10em] md:w-[20em] lg:w-[30em]"/>
                  </div>
                
                <div className="flex flex-col  gap-3">
                     <h2 className="text-white text-2xl font-bold ">Category</h2>
                     <input type="text" placeholder="design, dev, etc" className="border-1 border-white rounded p-1 font-semibold pl-2 text-white w-[10em] md:w-[20em] lg:w-[30em]"/>
                </div>

               </div>

                  <div className="flex flex-col gap-4 w-[40em]">
                      <h3 className="text-white text-2xl font-bold ">Description</h3>
                      <textarea name="" id="" cols={30} rows={10} className="bg-white text-black text-2xl p-5 rounded-lg" placeholder="write your text here .."/> 
                      <button className="border-1 border-green-900 bg-red text-white text-2xl  px-3 py-2 rounded-lg bg-green-600 font-bold"> Create Text</button>
                </div>
             </form >
        </div>

  )
}

export default CreateTask