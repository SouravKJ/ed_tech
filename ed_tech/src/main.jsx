import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppContextProvider } from './context/AppContext.jsx'
import {BrowserRouter} from 'react-router-dom'
import { ClerkProvider } from '@clerk/react'


const Publishable_key=import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if(!Publishable_key){
  throw new Error("Missing Published Key");
  
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ClerkProvider publishableKey={Publishable_key} afterSignOutUrl='/'>
       <AppContextProvider>
         <App />
       </AppContextProvider>
    </ClerkProvider>
  </BrowserRouter>,
)
