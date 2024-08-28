import {Button} from "@/components/ui/button.jsx";
import {useDispatch} from "react-redux";
import {acceptInvitation} from "@/Redux/Project/Action.js";
import {useLocation, useNavigate} from "react-router-dom";

const AcceptInvitation = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const handleAcceptInvitation = () => {
        const urlParams = new URLSearchParams(location.search);
        const token = urlParams.get("token");
        dispatch(acceptInvitation({token, navigate}))
        console.log("accept invitation", token);
    }
    return (
        <div className="h-[85vh] flex flex-col justify-center items-center">
            <h1 className="py-5 font-semibold text-xl">You have been invited to join a project</h1>
            <Button onClick={handleAcceptInvitation}>Accept Invitation</Button>

        </div>
    );
};

export default AcceptInvitation;

// import { Button } from "@/components/ui/button.jsx";
// import { useDispatch } from "react-redux";
// import { acceptInvitation } from "@/Redux/Project/Action.js";
// import { useLocation, useNavigate } from "react-router-dom";

// const AcceptInvitation = () => {
//     const dispatch = useDispatch();
//     const location = useLocation();
//     const navigate = useNavigate();

//     const handleAcceptInvitation = () => {
//         const urlParams = new URLSearchParams(location.search);
//         const token = urlParams.get("token");
//         dispatch(acceptInvitation({ token, navigate }));
//         console.log("accept invitation", token);
//     };

//     return (
//         <div className="h-[85vh] flex flex-col justify-center items-center">
//             <h1 className="py-5 font-semibold text-xl">You have been invited to join a project</h1>
//             <Button onClick={handleAcceptInvitation}>Accept Invitation</Button>
//         </div>
//     );
// };

// export default AcceptInvitation;
