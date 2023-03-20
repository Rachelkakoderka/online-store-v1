import React from "react"
import { Link} from "react-router-dom"
import {addLogin, addPassword, logIn} from "../redux"
import { useDispatch, useSelector } from "react-redux"
import { StoreInterf } from "../Interfaces"

const Login = () => {

    const dispatch = useDispatch();
    const {login, password }= useSelector((store : StoreInterf) => store)

    

    return (
        <div className="login__container">
            <div className="login__input__box">
                <label>Username: </label>
                <input 
                    type="text" 
                    placeholder="Enter Username" 
                    name="login" 
                    required 
                    onChange={(e) => dispatch(addLogin(e.target.value))}
                    value={login}
                    />
            </div>
            
            <div className="login__input__box">
                <label>Password: </label>
                <input 
                    type="password" 
                    placeholder="Enter Password" 
                    name="password" 
                    required
                    onChange={(e) => dispatch(addPassword(e.target.value))}
                    value={password}
                    
                    />
            </div>
            
                <button type="submit" className="login__btn btn" onClick={() => {                    
                    dispatch(logIn())}}><h4>LOGIN</h4></button>       
            
        </div>
    )
}

export default Login;