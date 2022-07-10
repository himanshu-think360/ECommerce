import React from "react";
import { UserContext } from "./Context";
import { useContext } from "react";
import { Cart } from "react-bootstrap-icons";
import { useHistory } from "react-router-dom";
export default function User(){
    const history = useHistory()
    const { user, setUser} =useContext(UserContext)
    function loginUser(){
        setUser({
            ...user,
            name:"Hrishikesh"})
    }
    function logoutUser(){
        setUser({
            ...user,
            name:"",
            cartList:[]
        })
    }
    function goCart(){
        if(user.name === ""){
            alert("Please login")
        }
        else(
            // window.open("/cart","_self"
            //  console.log(history.location.pathname)
            history.push('/cart')
            // window.open("http://localhost:3000/#/cart","_self")

        )
    }
    return(
        <span>
            {(!user.name)?<button onClick={loginUser}>Login</button>:
            <div>
                <span>Hi {user.name}</span><button onClick={logoutUser}>Logout</button>
            </div>}
            <Cart onClick={goCart} />
        </span>
    );
}