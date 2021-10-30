import React, {useEffect, useState} from 'react'
import Sawo from "sawo"


const LoginPage = () => {
    const [isLogin, setisLogin ] = useState("false");
    
    useEffect(()=>{
        var config = {
            // should be same as the id of the container created on 3rd step
            containerID: "sawo-container",
            // can be one of 'email' or 'phone_number_sms'
            identifierType: "email",
            // Add the API key copied from 2nd step
            apiKey: "17c068e8-ec45-416a-b4af-0a754a5a16dd",
            // Add a callback here to handle the payload sent by sdk
            onSuccess: (payload) => {
                console.log(payload);
                setisLogin("true")

            },
        };
        let sawo = new Sawo(config)
        sawo.showForm()



    }, [])
       
     

    return (
        <div style={{

            margin:"0",
            padding:"0",
            display:"flex",
            justifyContent:"center",
            background:"#000000"
        }}>
            
            <div id="sawo-container" style={{height:"300px", width:"400px"}}></div>
        </div>
    )
}

export default LoginPage
