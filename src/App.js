import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"

import data from "./data"

import Home from "./components/Home"
import About from "./components/About"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Error from "./components/Error"
import Store from "./components/Store"
import Single from "./components/Single"




const App =()=>{

const [products, setProducts] = useState([])

// useEffct(callback fuction, dependency array)
useEffect(()=>{
    setProducts(data)
}, [])



    return(
        <>
        <Header /> 
        {/* <Route path element>*/}
        <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/store" element={<Store products={products}/>} />
                <Route path="/store/:id" element={<Single />} />
                <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
        </>
    )
}

export default App