import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Header from './components/Header'
import ErrorPage from './Pages/ErrorPage'

export default function App() {
  const Products = lazy(()=> import("./Pages/Products"))

  let user = {
    name : "arpita",
    password : "123"
  }
  return (
    <div>
      
      <Header/>

      <Suspense fallback="Loading.......">

          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route  path='/contact' element={<Contact user={user}/>}  />
            <Route path='/products' element={<Products/>} />
            <Route path='*' element={<ErrorPage/>} />

          </Routes>
      </Suspense>




      
    </div>
  )
}
