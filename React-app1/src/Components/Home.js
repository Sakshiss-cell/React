import React from "react";
import image from "./images/Front.png";
import whatsapp from "./images/whatsapp.png";
import AI from "./images/AI.png";
import communication from "./images/communication.png";
import database from "./images/database.png";
const Home = () => {
  return (
    <div className="container">
      <div class="head">
        <div class="row">
          <div class="col-md-8 text">
            <h1>OKCA</h1>
            <p>Building AI Based Automated Professionalism</p>
            <button type="button">GET STARTED</button>
          </div>
          <div class="col-md-4">
            <img src={image} alt="" className="img-fluid" />
          </div>
        </div>
      </div>

      <section class="Product_Service">
        <h1 class="text-center">Product and Service</h1>
        <div class="row card mt-5">
          <div className="col-1"></div>
          <div class="col-md-7">
            <h3>PRE-BUILD WHATSAPP CHATBOX</h3>
            <p>
              We Provide A Pre-Built Whatsapp Chatbot To CAs Via Whatsapp
              Enterprise API. Here They Can Register And Get Updates And
              Reminder About Tax Payment Etc.
            </p>
            <button type="button ">GET STARTED</button>
          </div>
          <div class="col-md-4 text-center">
            <img className="img-fluid" src={whatsapp} alt="" />
          </div>
        </div>
        <div class="row card mt-5">
          <div className="col-1"></div>
          <div class="col-md-7">
            <h3>AI BASED AUTOMATIONS</h3>
            <p>
              We Will Provide AI-Based Prebuilt Automations Via Prebuilt
              Journeys Of Triggers And Actions Via Using Various IT Tech APls
              Like E-Sign, Payments Gateway, OCR Technique, Income Tax And GST
              Compliance, Among Other Things.
            </p>
            <button type="button ">GET STARTED</button>
          </div>
          <div class="col-md-4 text-center">
            <img className="img-fluid" src={AI} alt="" />
          </div>
        </div>
        <div class="row card  mt-5">
          <div className="col-1"></div>
          <div class="col-md-7">
            <h3>AUTOMATED PROFESSIONAL COMMUNICATION</h3>
            <p>
              We Will Automate Communication Between CA And Their Customers Via
              Various Communication APIs. SMS, Whatsapp, Google Assistant,
              Amazon Alexa, Gmail. Etc.
            </p>
            <button type="button">GET STARTED</button>
          </div>
          <div class="col-md-4 text-center">
            <img className="img-fluid" src={database} alt="" />
          </div>
        </div>
        <div class="row card mt-5">
          <div className="col-1"></div>
          <div class="col-md-7">
            <h3>AUTOMATED DATABASE MANAGEMENT</h3>
            <p>
              We Will Provide Automation For The Creation And Access Of Customer
              Databases Via Google Drive, DropBox. Etc.
            </p>
            <button type="submit">GET STARTED</button>
          </div>
          <div class="col-md-4 text-center">
            <img src={communication} className="img-fluid text-center" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
