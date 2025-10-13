

const Logout = () => {
     
    function deleteRoute(){
         localStorage.removeItem('employees');
    }

  return (
    <div>
          <button className='text-white bg-red-500 rounded px-5 py-2 font-bold hover:bg-white hover:text-black' onClick={() => deleteRoute()}>Logout</button>
    </div>
  )
}

export default Logout

// Yha p ek hi logic hai like jab bhi logout karega admin ya fir employe wo uske credentials hat jaynege bass yahi hai.. 
// like localStorage s chize remove ho jayengi okkh!...