import api from "@/config/api.js";

// export const createPayment = async ({planType, jwt}) => {
//     try{
//         const {data} = await api.post(`/api/payment/${planType}`)
//         if(data.payment_link_url) {
//             window.location.href=data.payment_link_url;
//         }
//     } catch (error) {
//         console.log("error", error)
//     }
// }



export const createPayment = async ({planType, jwt, email}) => {
    try {
        const {data} = await api.post(`/api/payment/${planType}`, {
            planType: planType,
            email: email
        }, {
            headers: {
                Authorization: `Bearer ${jwt}`,
                'Payment-Method': 'RAZORPAY',
                'Content-Type': 'application/json'
            }
        });
        if (data.payment_link_url) {
            window.location.href = data.payment_link_url;
        }
    } catch (error) {
        console.log("error", error);
    }
}