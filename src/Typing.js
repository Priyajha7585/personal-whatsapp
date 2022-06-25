import React, { useState, useEffect } from 'react'

function Typing() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 10000);
    }, []);

  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes();

  return (
    <>
        <div>{loading ? "Typing..." : <>
        <p className='pt-0 mt-0'>last seen today at {time}</p></>}</div>
        
    </>
  )
}

export default Typing