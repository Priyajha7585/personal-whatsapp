import React from "react";
import "./styles.css";
import "@innovaccer/design-system/css";
import { Message, Paragraph, Row, Column, HorizontalNav, Avatar } from "@innovaccer/design-system";
import Header from "./Header";
import Footer from "./Footer";
import Incomingmessage from "./Incomingmessage";

export default function App() {
  const data = [
    {
      name: "text",
      label: "Ratna Priya Jha",
      icon: "message"
    }
  ];

  const onClickHandler = (menu) => {
    console.log("menu-clicked: ", menu);
  };
  return (
    <>
      <Header />
      <div style={{backgroundColor:"blue"}}>
        <div className='mx-auto' style={{backgroundColor:"pink", width: "calc(100vmin)", height:"100vh"}}>
            <Incomingmessage />
            {/* <img id="image" src='https://cdn5.vectorstock.com/i/1000x1000/01/69/businesswoman-character-avatar-icon-vector-12800169.jpg' 
                className='h-100 rounded-circle'
                onClick={()=>{document.getElementById('dp').style.display='block'}}
            /> */}
        </div>
    </div>
    <Footer />
    </>
    
  );
}
