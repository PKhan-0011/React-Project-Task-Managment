import React from 'react'

import {createContext} from 'react';
import {useState, useEffect} from 'react';
import { getLocalStorage } from '../utilis/localStorage';

export const AuthContext = createContext<any>('');

const AuthProvider = ({children}: {children: React.ReactNode}) => {

    
    const [userData, setUserData] = useState<any>(null);

    // const data = getLocalStorage();
    // console.log(data); // yha s 2 chize aa rhai hai like admin and data wo ayega jo hamne wha s return kiya tha okkh!...
      
  useEffect(() => {
        const data = getLocalStorage();
           setUserData(data);
           console.log('useEffect k andar hu for checkin', data);
  } , []);

    console.log('ye AuthProvider wala checking hah', userData);

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
// Yha p mugeh doubt aa rha tha like ki useCallback use kyu nahi kar sakte okkh!...
// bcz ye jo hota hai wo jha extra re-render s bacahne k liye hota hai okh!>.

// And jo useEffect hai wo sideEffect p kam ata hia liek api call dom localStorage etc etc..

// useEffect:- wo render k badd kam karta hai okkh...
// useCallback:- ye render k during hi call ho jata hai okkh!...