import React, { useContext,useState } from "react";
import { UserContext } from "./Context";
import Card from "./Card";
export default function CartDisplay(){
    const { user,setUser } = useContext(UserContext);
    const localJson = require('./data.json')
    const displayCard = {"data":""}
    // const [displayCard,setDisplayCard] = useState(localJson.data)
    if(user.cartList.length !== 0)
    {
        // console.log(displayCard)
        // setDisplayCard(localJson.data.filter(item => !user.cartList.includes(item.id)))
        displayCard.data = localJson.data.filter(item => user.cartList.includes(item.id))
        return(
            <React.Fragment>
                {
              displayCard.data.map((card) => {
                return(
                  <Card key={card.id} id={card.id} url={card.src} desc={card.description} tag={card.itemtype}/>
                );
              })
            }
            </React.Fragment>
        );
    }
    else{
        displayCard.data = localJson.data
        return(<div></div>)
    }
}