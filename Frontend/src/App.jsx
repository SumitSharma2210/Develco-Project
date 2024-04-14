import React from 'react';
import { useState } from 'react';
import './App.css'


function App() {
  
  function Navleft() {
    return (
      <>
        <div className='Navleft'>
          <a className='logo' href='google.com'>Logo</a>
        </div>
      </>
    )
  }
  
  function Navcenter() {
    return (
      <>
        <div className='Navcenter'>
          <h3>Home</h3>
          <h3>About Us</h3>
          <h3>Contact Us</h3>
          <h3>Services</h3>
          <h3>Portfolio</h3>
        </div>
      </>
    )
  }
  
  
  
  function Develco() {
    return (
      <h1 className='develco'>DevelCo</h1>
    )
  }

  function Clicked() {
    console.log("clicked")
  }
  
  function Button() {
    return (
      <button className='button' onClick={Clicked}>Let's Explore</button>
    )
  }

  return (
    <>
      <div className='Navbar'>
        <Navleft />
        <Navcenter />
      </div>
      <div className='Body'>
        <Develco />
        <p className='desc'>

          DevelCO is a dynamic website development firm committed to delivering cutting-edge digital solutions for businesses worldwide. With a seasoned team of developers and designers, we excel in crafting bespoke websites, e-commerce platforms, and mobile applications that drive results.
          <br />
          Our approach is rooted in collaboration and innovation. We take the time to understand your unique business objectives, ensuring that every project is tailored to meet your specific needs. From concept to launch, we work tirelessly to bring your vision to life, leveraging the latest technologies and industry best practices to deliver exceptional results.
          <br />
          At DevelCO, client satisfaction is our top priority. We pride ourselves on our transparent communication, attention to detail, and dedication to delivering projects on time and within budget. Whether you're a small startup or a large enterprise, we're here to help you navigate the digital landscape and achieve your goals.
          <br />
          Discover the difference that expert website development can make for your business. Get in touch with DevelCO today, and let's elevate your online presence together.</p>
        <Button />
      </div>
      <footer className='footer'>
        <h1>Footer </h1>
      </footer>
    </>
  )
}

export default App;