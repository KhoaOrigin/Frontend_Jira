import Home from '@/pages/Home/Home'
import './App.css'
import Navbar from "@/pages/Navbar/Navbar.jsx";
import {Route, Routes} from "react-router-dom";
import ProjectDetail from "@/pages/ProjectDetail/ProjectDetail.jsx";
import IssueDetail from "@/pages/IssueDetail/IssueDetail.jsx";
import Subscription from "@/pages/Subscription/Subscription.jsx";
import Auth from "@/pages/Auth/Auth.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUser} from "@/Redux/Auth/Action.js";
import {getProject} from "@/Redux/Project/Action.js";
import UpgradeSuccess from "@/pages/Subscription/UpgradeSuccess.jsx";
import AcceptInvitation from "@/pages/ProjectDetail/AcceptInvitation.jsx";

function App() {
    const dispatch = useDispatch();
    const {auth} = useSelector(store => store)

    useEffect(() => {
        dispatch(getUser())
        dispatch(getProject({}))
        }, [auth.jwt])
    console.log(auth)
    return (
        <>
            {
                auth.user ? <div>
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/project/:projectId" element={<ProjectDetail/>}/>
                        <Route path="/project/:projectId/issue/:issueId" element={<IssueDetail/>}/>
                        <Route path="/upgrade_plan" element={<Subscription/>}/>
                        <Route path="/upgrade_plan/success" element={<UpgradeSuccess/>}/>
                        <Route path="/accept_invitation" element={<AcceptInvitation/>}/>


                    </Routes>
                </div> : <Auth/>
            }
        </>
    )
}

export default App
