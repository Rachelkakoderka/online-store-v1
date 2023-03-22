
import Login from "../components/Login"
import AccDetails from "../components/AccDetails"
import { useSelector } from "react-redux"
import { StoreInterf } from "../Interfaces"



const Account = () => {

    const isLoggedIn = useSelector((store : StoreInterf) => store.isLoggedIn)
    console.log(isLoggedIn)

    return (
        <div className="page__container">
            { 
            isLoggedIn ?
             <AccDetails /> :
             <Login />
            }
        </div>
    )
}

export default Account;