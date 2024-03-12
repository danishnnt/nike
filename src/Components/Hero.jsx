import React from 'react'

const Hero = () => {
  return (
    <main className='hero'>
     <div className="left">
       <h1><b>YOUR FEET DESERVE <br></br> THE BEST</b></h1>
       <h2>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO<br></br> HELP YOU WITH OUR SHOES.YOUR FEET DESERVE<br></br> THE BEST AND WE’RE HERE TO HELP YOU WITH OUR<br></br> SHOES.</h2>
       <div className="btn">
        <button className='btn1'>Shop Now</button>
        <button className='btn2'>Category</button>
       </div>
       <h3>Also Avalable On</h3>
       <div className="icons">
        <img src='Images/flipkart.png' alt='Flipkart' />
        <img src='Images/amazon.png' alt='Amazon'/>
       </div>
     </div>
     <div className="right">
       <img src='Images/shoe_image.png' alt="shoe" />
     </div>
    </main>
  )
}

export default Hero