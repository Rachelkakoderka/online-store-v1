import React, {useState} from "react"
import Login from "../components/Login"
import AccDetails from "../components/AccDetails"



const Account = () => {

    const [ isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    return (
        <>{ 
            isLoggedIn ? <AccDetails /> :<Login />
            }
        </>
    )
}

export default Account;