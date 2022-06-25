import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import "@innovaccer/design-system/css";
import { Button } from "@innovaccer/design-system";


function Footer() {
    const [inp, setInp] = React.useState(""); 
    const [val, setVal] = React.useState("");
    function onChangeHandler(event)
    {
        setInp(event.target.value);
    }
    function onSubmitHandler()
    {
        setVal(inp)
    }
    
  return (
    <>
    <div className="fixed-bottom" style={{backgroundColor:"purple"}}>
        <div className='mx-auto' style={{backgroundColor:"green", width: "calc(100vmin)", height:"55px", display:"flex"}}>
            <input type="text" class="form-control w-75 m-2" id="formGroupExampleInput" placeholder="Type a message" onChange={onChangeHandler} ></input>
            <Button className='m-2' onClick={onSubmitHandler} 
            appearance="success"
            aria-label="Next in rank"
            icon="keyboard_arrow_right"
            tooltip="Next in rank" size='large'
            > </Button>
        </div>
    </div>

    </>
    
  )
}

export default Footer