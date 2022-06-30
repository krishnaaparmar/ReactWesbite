
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import "../index.css";
import "../animate.css"
import girl_image from "../assests/code2.gif";

export default function Home() {
    return (
      <>
        <div className="bgImage"><br/>
        <h2 className="animate__animated animate__slideInLeft">Hello There!</h2>
        <br/><br/><br/>
        <h2 className="animate__animated animate__slideInRight">I'm Krishna Parmar</h2><br/><br/><br/>
        <h4 className="animate__animated animate__slideInRight">I am a Designer and Developer</h4>
        <img src={girl_image} alt="Girl Image" />
        </div>
        <div style={{margin:"3%"}}>
        <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-lg-4 col-sm-6" style={{padding:"2%"}}>
            <div className="card-custom">
              <img className="col-12 img-fluid img300" src={require("../assests/html.png")} alt="" />
              <div className="card-custom-caption">
                <div className="card-name">
                    <h5>
                        The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.
                    </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6" style={{padding:"2%"}}>
            <div className="card-custom">
              <img className="col-12 img-fluid img300" src={require("../assests/css.png")} alt="" />
              <div className="card-custom-caption">
                <div className="card-name">
                    <h5>
                    Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.
                    </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6" style={{padding:"2%"}}>
            <div className="card-custom">
              <img className="col-12 img-fluid img300" src={require("../assests/reactjs.png")} alt="" />
              <div className="card-custom-caption">
                <div className="project-category text-white-50">Books Near</div>
                <div className="card-name">
                    <h5>
                    React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. 
                    </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6" style={{padding:"2%"}}>
            <div className="card-custom">
              <img className="col-12 img-fluid img300" src={require("../assests/angularjs.png")} alt="" />
              <div className="card-custom-caption">
                <div className="card-name">
                    <h5>
                    AngularJS was a JavaScript-based open-source front-end web framework for developing single-page applications. It was maintained mainly by Google and a community of individuals and corporations.
                    </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6" style={{padding:"2%"}}>
            <div className="card-custom">
              <img className="col-12 img-fluid img300" src={require("../assests/bootstrap.png")} alt="" />
              <div className="card-custom-caption">
                <div className="card-name">
                    <h5>
                    Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography and other interface components.
                    </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6" style={{padding:"2%"}}>
            <div className="card-custom">
              <img className="col-12 img-fluid img300" src={require("../assests/nodejs.png")} alt="" />
              <div className="card-custom-caption p-3">
                <div className="card-name">
                    <h5>
                    Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.
                    </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
        
    
        </>
  );
}