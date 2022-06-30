import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import "../index.css";
import "../animate.css";
import {Container ,Card,Row, Col, Button} from 'react-bootstrap';  
export default function about() {
    return (
      <>
       <h1 className="animate__animated animate__slideInUp head1">About Us</h1><br/><br/>
       <h3 className="animate__animated animate__slideInUp head3"> Hello there, My name is Krishna Parmar. I am studying Mobile App Development. </h3>
         <div className="container-fluid p-5">
        <div className="row g-0">
          <div className="col-lg-7 col-sm-6 p-5">
            <div className="card-custom">
              
                    <h5>
                       Mostly, I have worked in the development of the website as well as I have work on Image compression programs. I like to create a meaningful and creative design, let it be infographics or web designs. I have experience in full-stack web development. In conclusion, I am experienced with user interfaces, database, testing and backend development of the web application. I am learning Mobile App development as I am always eager to learn something and I want to explore more about designing and development
                    </h5>
                </div>
          </div>
          <div className="col-lg-5 col-sm-6">
            <div className="card-custom">
              <img className="col-12 img-fluid" src={require("../assests/code3.gif")} alt="" />
            </div>
          </div>
          </div>
        <div className="aboutImage"><br/>
       
        </div>
        </div>
        </>
  );
}