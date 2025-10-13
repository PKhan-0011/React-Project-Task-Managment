import {useState} from 'react';


const Login = (props: any) => {

     const [email, setEmail] = useState<string>('');
     const [password, setPassword] = useState<string>('');
    
    function submitHandler(e:React.FormEvent<HTMLFormElement>){
           e.preventDefault();
           console.log("Hello bhai form submit ho gya!..");
           console.log(email, password);
             
           props.handleLogin(email, password);

           setEmail("");
           setPassword("");
    }

    console.log(props);

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
         <div className="border-2 flex flex-col items-center justify-center border-emerald-600 rounded">
             <h1 className="text-3xl font-semibold  mt-5 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">LogIn Page</h1>
              <form onSubmit = {(e: React.FormEvent<HTMLFormElement>) => submitHandler(e)} className="flex flex-col items-center  gap-5 p-10">

                   <input required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email" 
                    placeholder="Enter your mail...."
                    className="border-2 border-emerald-600  rounded-full px-3  py-1 text-[1.3em] outline-none placeholder:text-gray-300 mt-2 text-white"  
                    /> 

                   <input required 
                   value={password}
                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} 
                   type="password" 
                   placeholder="Enter Your Password" 
                   className="border-2 border-emerald-600 rounded-full px-3 py-1 text-[1.3em] outline-none placeholder:text-gray-300 mt-4 text-white" 
                   />


                   <button className="border-2 rounded  px-10 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[1.3em] mt-5 uppercase ">Login</button>
              </form>
              <h1 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Visit for first time pls Login...</h1>
         </div>
    </div>
  )
}

export default Login;

// Yha p ek do chize hai jo acche s sikhna hai like pehle data diya maine login kiya okkh!. uske baad ham jab console p dekhneg to data jata hi nahi hai
// bcz of prevent default behaviour okkh!.. to hame e dena padega onsubmit m and e.preventDefault() hatana padega okkh!.. jisse backend m ya fir dataBase m data chla jaye okkh!...

// Hmm yha p useState ka use karnge bcz hame nahi pta yha p like hame nhai pta email ya fir password ka refrence okkh!..
// and in case maine refrence le liya hai to according to useState hamm chize chang kar denge okkh!..

// Bhut bda doubt ye tha like ki value m chize update kaise ho rahi hai. useState s re-render hoga okkh!..
// value m s data setValue k according upadte hoga and onSubmit call p value update ho jayegi okkh!... and password bhi update ho jayegi..