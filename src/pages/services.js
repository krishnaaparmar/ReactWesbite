import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import "../index.css";
import "../animate.css";
import {Container ,Card,Row} from 'react-bootstrap';  
export default function services() {
    return (
      <>     

        
        <div className="serviceImage img img-fluid"><br/>
        <h1 className="animate__animated animate__slideInLeft">Services</h1>
        </div>
        
        <div className="cardClass">  
   <Container className='p-4'>  
     <Row>  
     
 { [  
  'Primary',  
  'Secondary',  
  'Success',  
  'Danger',  
  'Warning',  
  'Info',  
  'Primary',  
  'Dark', 
  'Success',   
].map((variant, idx) => (  
  <Card  
    border={variant.toLowerCase()}  
    key={idx}  
    text={'dark'}  
    style={{width:"30%"}}  
    className="m-2"  
  >  
    <Card.Header>Services</Card.Header>  
    <Card.Body>  
      <Card.Title>{variant} Services</Card.Title>  
      <Card.Text>  
      Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs  
      </Card.Text>  
    </Card.Body>  
  </Card>  
))}  
</Row>  
</Container>  
    </div>  
        </>
  );
}
