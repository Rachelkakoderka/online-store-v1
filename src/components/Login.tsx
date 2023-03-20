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
                <label>Login: </label>
                <input 
                    type="text" 
                    placeholder="Wpisz swój login" 
                    name="login" 
                    required 
                    onChange={(e) => dispatch(addLogin(e.target.value))}
                    value={login}
                    />
            </div>
            
            <div className="login__input__box">
                <label>Hasło: </label>
                <input 
                    type="password" 
                    placeholder="Wpisz swoje hasło" 
                    name="password" 
                    required
                    onChange={(e) => dispatch(addPassword(e.target.value))}
                    value={password}
                    
                    />
            </div>
            
                <button type="submit" className="login__btn btn" onClick={() => {                    
                    dispatch(logIn())}}><h4>ZALOGUJ SIĘ</h4></button>       
            
        </div>
    )
}

export default Login;