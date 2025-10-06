

const Header = ({name}: any) => {
  return (
    <div className="flex items-end justify-between">
         <h1 className="text-2xl text-white font-medium">Hello <br /> <span className="text-3xl font-semibold"> {name} there 👋 </span></h1>
         <button className="text-white bg-red-500 rounded px-5 py-2 font-bold hover:bg-white hover:text-black">Log Out</button>
    </div>
  )
}

export default Header;

// ye dhyan rakhio like ki mai yah p useContext bhi le sakta hu if i had share the props.. okkh!>.