import logo from "./image/logo.png";
import { NavLink } from "react-router-dom";

const ServiceData = [
  {
    // imgsrc: image,
    title: "Tax Reminder",
    content:
      "Here goes the content of the first block further add more and more and you got a great website right",
    gopage: <NavLink to="">Reaminder</NavLink>,
  },
  {
    imgsrc: logo,
    title: "Your total asset",
    content:
      "Cards support a wide variety of content, including images, text, list groups, links, and more. Below are examples of what’s supported.",
    gopage: <NavLink to="">Asset</NavLink>,
  },
];

// Soo on all the service.... array of objects ke form mai h
export default ServiceData;
