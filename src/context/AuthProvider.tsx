import React from 'react'

import {createContext} from 'react';
import {useState, useEffect} from 'react';
import { getLocalStorage } from '../utilis/localStorage';

export const AuthContext = createContext<any>(null);

const AuthProvider = ({children}: {children: React.ReactNode}) => {

    
    const [userData, setUserData] = useState<any>(null);

    // const data = getLocalStorage();
    // console.log(data); // yha s 2 chize aa rhai hai like admin and data wo ayega jo hamne wha s return kiya tha okkh!...
      
    useEffect(() => {
          const data = getLocalStorage(); // yha p {employee, adminData} ye ayega data m dhyan s okkh!..
          // @ts-ignore
          setUserData(data);
    }, []);

    console.log(userData);

  return (
    <div>
          // @ts-ignore
         <AuthContext.Provider value={userData}>
              {children}   
         </AuthContext.Provider>

    </div>
  )
}

export default AuthProvider;


// Iske andar abb mai jo value pass karunag wo har jagha ja sakta hai according to app wale k sath..
// 