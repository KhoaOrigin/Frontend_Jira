import Home from '@/pages/Home/Home'
import './App.css'
import Navbar from "@/pages/Navbar/Navbar.jsx";
import {Route, Routes} from "react-router-dom";
import ProjectDetail from "@/pages/ProjectDetail/ProjectDetail.jsx";
import IssueDetail from "@/pages/IssueDetail/IssueDetail.jsx";
import Subscription from "@/pages/Subscription/Subscription.jsx";
import Auth from "@/pages/Auth/Auth.jsx";

function App() {

    return (
        <>
            {
                true ? <div>
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/project/:id" element={<ProjectDetail/>}/>
                        <Route path="/project/:projectId/issue/:issueId" element={<IssueDetail/>}/>
                        <Route path="/upgrade_plan" element={<Subscription/>}/>
                    </Routes>
                </div> : <Auth/>
            }
        </>
    )
}

export default App
