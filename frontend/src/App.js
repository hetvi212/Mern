import React from 'react'
import {BrowserRouter,Route,Routes,} from "react-router-dom"
import Home from "./pages/Home"
import { Navbar } from './Components/Navbar'

const App = () => {
  return (  
    <div className="app">
      <BrowserRouter>
      <Navbar/>
      <div className="pages">
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />  */}
</Routes>
      </div>
      </BrowserRouter>
    </div>
  )
}
export default App