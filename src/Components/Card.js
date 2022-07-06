import styled from "styled-components";
import { useState,useEffect } from "react";
// import { UserContext } from "./Context";
const Cardcontainer = styled.div`
border: 1px solid black;
width: 20vw;
`;
const Cardimage = styled.img`
padding:5%;
width: 90%;
height: 90%
`;
const Carddesc = styled.div`
font-size:25px;
font-family:system-ui;
`;
const Cardbuttons = styled.div`
`;
const Button = styled.button`
border:none;
border-radius: 5px;
font-size: 15px;
padding: 5px;
margin:5px;
color:white;
background-color: ${props=>props.cart ? 'red' : 'blue'}
`;
export default function Card(props){
    const [inCart,setinCart] = useState(true)
    // const user = useContext(UserContext);
    // console.log(user)
    function addItem(props){
        console.log(props)
    }
    function removeItem(props){
        console.log(props)
    }
    return(
        <Cardcontainer>
            <Cardimage src={props.url}></Cardimage>
                <Carddesc>
                    {props.desc}
                </Carddesc>
                <Cardbuttons>
                    {inCart ? <Button onClick={()=>{removeItem(props.id)}} cart>Remove to cart</Button>:<Button onClick={()=>{addItem(props.id)}}>Add to cart</Button>} 
                </Cardbuttons>
        </Cardcontainer>
    );
}