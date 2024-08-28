import {Card} from "@/components/ui/card.jsx";
import {CheckCircledIcon} from "@radix-ui/react-icons";
import {Button} from "@/components/ui/button.jsx";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUserSubscription, upgradeSubscription} from "@/Redux/Subscription/Action.js";

const UpgradeSuccess = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {subscription} = useSelector(store => store);
    const queryParams = new URLSearchParams(location.search);
    const paymentId = queryParams.get("payment_id");
    const planType = queryParams.get("plan_type");

    useEffect(() => {
        dispatch(upgradeSubscription({planType}))
        dispatch(getUserSubscription());
    }, [])
    return (
        <div className="flex justify-center">
            <Card className="mt-20 p-5 space-y-5 flex flex-col items-center">
                <div className="flex items-center gap-4">
                    <CheckCircledIcon className="w-10 h-10 text-green-500"/>
                    <p className="text-xl">Plan Upgrade Successfully</p>
                </div>
                <div className="space-y-3">
                    <p className="text-green-500">start date:</p>
                    <p className="text-green-500">end date:</p>
                    <p className="">plan type:</p>

                </div>
                <Button onClick = {() => navigate("/")}>Go to home</Button>
            </Card>
        </div>
    );
};

export default UpgradeSuccess;