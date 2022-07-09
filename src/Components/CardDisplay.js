import React, {useState, useContext} from "react";
import { UserContext } from "./Context";
import Card from "./Card";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from "react-bootstrap";
export default function CardDisplay(){
    const [filter, setFilter] = useState("all")
    const { user } = useContext(UserContext);
    const localJson = require('./data.json')
    const [result , setResult] = useState(localJson.data)
    const displayCard = {"data":""}
    function onChangeValue(event) {
      setFilter(event.target.value);
      if(event.target.value === "all")
      {
        setResult(localJson.data)
      }
      else{
        setResult(localJson.data.filter(obj=> obj.itemtype == event.target.value));
      }
      console.log(result);
    }
    if(user.cartList.length !== 0 && user.name !== "")
    {
        displayCard.data = result.filter(item => !user.cartList.includes(item.id))
    }
    else if(user.name === "" && user.cartList.length !== 0){
        displayCard.data = result.filter(item => !user.cartList.includes(item.id))
    }
    else if(user.name === "" && user.cartList.length === 0){
        displayCard.data = result
    }
    else{
      displayCard.data = result
    }


    return(
        <React.Fragment>
          <Container fluid style={{paddingTop:10, paddingBottom:10}}>
            <div onChange={onChangeValue}>
              <input type="radio" value="all" name="alter" checked={filter === "all"}/>All
              <input type="radio" value="mobile" name="alter" checked={filter === "mobile"} /> Mobile
              <input type="radio" value="toys" name="alter" checked={filter === "toys"} /> Toys
              <input type="radio" value="bottle" name="alter" checked={filter === "bottle"}/> Bottle
            </div>
            <Row >
              {
          displayCard.data.map((card) => {
            return(
              <Col lg={3} style={{paddingTop:10}}>
                <Card key={card.id} id={card.id} url={card.src} desc={card.description} tag={card.itemtype}/>
              </Col>
            );
          })
        }
            </Row>
          </Container>
        </React.Fragment>
    );
}