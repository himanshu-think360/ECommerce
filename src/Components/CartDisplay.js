import React, { useContext } from "react";
import { UserContext } from "./Context";
import Card from "./Card";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from "react-bootstrap";
export default function CartDisplay(){
    const { user } = useContext(UserContext);
    const localJson = require('./data.json')
    const displayCard = {"data":""}
    if(user.cartList.length !== 0 && user.name !== "")
    {
        displayCard.data = localJson.data.filter(item => user.cartList.includes(item.id))
        return(
          <React.Fragment>
          <Container fluid style={{paddingTop:10, paddingBottom:10}}>
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
    else if(user.name !== ""){
        return(<div>No Items present in the cart</div>)
    }
    else{
      throw new Error("Not Logged In")
    }
}