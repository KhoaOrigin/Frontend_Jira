import {useState} from 'react'
import Home from '@/pages/Home/Home'
import './App.css'
import Navbar from "@/pages/Navbar/Navbar.jsx";
import {Route, Routes} from "react-router-dom";

function App() {
    // eslint-disable-next-line no-unused-vars
    const [count, setCount] = useState(0)

    return (
        <>
            <Navbar/>
            <Routes>
               <Route path="/" element={<Home/>}/>
            </Routes>
        </>
    )
}

export default App
