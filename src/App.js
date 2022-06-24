import React from "react";
import "./styles.css";
import "@innovaccer/design-system/css";
import { Message, Paragraph, Row, Column, HorizontalNav, Avatar } from "@innovaccer/design-system";
import Header from "./Header";
import Footer from "./Footer";

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
    // <Row className="d-flex flex-column bg-secondary-lightest vh-100">
    // <div className="d-flex align-items-center py-6" style={{ background: "var(--secondary-dark)" }}>
    //   <HorizontalNav
    //     className="w-100 justify-content-center"
    //     menus={data}
    //     onClick={onClickHandler}
    //   >
    //   <h2>Priya Jha</h2>
    //     <Avatar appearance="primary" firstName="John" lastName="Doe" />
    //   </HorizontalNav>
      
    // </div>
    //   <Column className="px-14">
    //     <div className="h-100 bg-dark" >
    //     <div className="p-8 w-75 ml-2">
    //       <Message appearance="info" title="Hello there !">
    //         I am from innovaccer land !!
    //         <Paragraph>I am using @innovaccer/design-system</Paragraph>
    //       </Message>
    //       <Message appearance="info" title="Hello there !">
    //         I am from innovaccer land !!
    //         <Paragraph>I am using @innovaccer/design-system</Paragraph>
    //       </Message>
    //       <Message appearance="info" title="Hello there !">
    //         I am from innovaccer land !!
    //         <Paragraph>I am using @innovaccer/design-system</Paragraph>
    //       </Message>
    //       </div>
    //   </div>
    //   </Column>
    // </Row>
    <>
      <Header />
      <div style={{backgroundColor:"blue"}}>
        <div className='mx-auto' style={{backgroundColor:"pink", width: "calc(100vmin)", height:"100vh"}}>
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
