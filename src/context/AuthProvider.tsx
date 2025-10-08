import React from 'react'

import {createContext} from 'react';
import {useState, useEffect} from 'react';
import { getLocalStorage } from '../utilis/localStorage';

export const AuthContext = createContext('');

const AuthProvider = ({children}: {children: React.ReactNode}) => {
   
    const [userData, setUserData] = useState<string>('');

    // const data = getLocalStorage();
    // console.log(data); // yha s 2 chize aa rhai hai like admin and data wo ayega jo hamne wha s return kiya tha okkh!...
      
    useEffect(() => {
          const {employee, adminData} = getLocalStorage();
          // @ts-ignore
          setUserData({employee, adminData});
    }, []);

    console.log(userData);

  return (
    <div>
          // @ts-ignore
         <AuthContext value={userData}>
              {children}   
         </AuthContext>

    </div>
  )
}

export default AuthProvider;


// Iske andar abb mai jo value pass karunag wo har jagha ja sakta hai according to app wale k sath..
// 