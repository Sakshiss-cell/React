import React from "react";
import { NavLink } from "react-router-dom";
// import web from "./image/image1.jpeg"

const Card = (props) => {
  return (
    <>
      <div className="container-fluid  mb-5 ">
        <div className="row">
          <div className="col-10 mx-auto ">
            <div className="row gy-4">
              <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                  <img
                    src={props.imgsrc}
                    className="card-img-top"
                    alt={props.imgsrc}
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold ">
                      {props.title}
                    </h5>
                    <p className="card-text">{props.content}</p>
                    {props.gopage}
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
