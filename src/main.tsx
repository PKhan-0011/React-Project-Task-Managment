import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AuthContext from './context/AuthContext.tsx';
import TaskContext from './context/TaskContext.tsx';

localStorage.clear();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     
     <AuthContext>
       <TaskContext>
           <App />
       </TaskContext>
     </AuthContext>

  </StrictMode>,
)
