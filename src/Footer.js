import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Input } from '@innovaccer/design-system';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import "@innovaccer/design-system/css";

function Footer() {

    const [value, setValue] = React.useState('Joy Lawson');

    // const onChange = React.useCallback((e) => {
    //   setValue(e.target.value);
    // }, []);
    // function onChange(){
        
    // }
  
    // const onClear = React.useCallback(() => {
    //   setValue('');
    // }, []);
    // function onClear(){

    // }

  return (
    <>
        <div style={{backgroundColor:"purple"}}>
        <div className='mx-auto' style={{backgroundColor:"green", width: "calc(100vmin)", height:"55px", display:"flex"}}>
        {/* <Input
      placeholder="Name"
      name="input"
      className="w-25"
    /> */}
        <Input placeholder='Name' name='input' className='w-25' />
      
            
            <div className="d-flex flex-column">
            <h4 className='pb-0 mb-0'>Priya Jha</h4>
            <p className='pt-0 mt-0'>last seen today at </p>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Footer