// import React, { useState, useEffect } from 'react';
// import {useDispatch} from 'react-redux';
// import authService from './appwrite/auth'
// import { login, logout } from './store/authSlice'; 
// import './App.css'
// import { Footer, Header } from './components';
// import { Outlet } from 'react-router-dom';

// function App() {
//   //console.log(import.meta.env.VITE_APPWRITE_URL);
//   const [loading, setLoading] = useState(true);
//   const dispatch = useDispatch();  // it is a cummerger/combination when whe use redux with react
//   useEffect(()=>{
//     authService.getCurrentUser()
//     .then((userData)=>{
//       if(userData){
//         dispatch(login({userData}))
//       }else{
//         dispatch(logout())
//       }
//     })
//     .finally(()=>setLoading(false)) // for getting current user
//   },[])


//   return !loading ? (<div className='min-h-screen flex flex-wrap content-between
//      bg-gray-400'>
//       <div className='w-full block'>
//       <Header/>
//       <main>
//         TODO:<Outlet/>
//       </main>
//       <Footer/>
//       </div>
//       </div>) : (null)
//   // return (
//   //   <>
//   //     <div>
//   //      hii
//   //     </div>
      
//   //   </>
//   // )
// }

// export default App


import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        TODO:  <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App