import React from 'react';
import { useEffect } from "react";
import gsap from "gsap";

export const Navcenter = () => {
    useEffect(() => {
        // Target all h3 elements inside Navcenter
        const headings = document.querySelectorAll(".Navcenter h3");
    
        // Set initial states (optional)
        gsap.set(headings, { opacity: 0, y: -20 });
    
        // Create a staggered animation for each heading
        gsap.to(headings, {
          opacity: 1,
          color: "white",
          y: 7,
          duration: 0.6,
          delay: 0.7,
          stagger: 0.2, // Stagger the animations by 0.2 seconds
          ease: "power3.out", // Optional easing
        });
      }, []);
    
      return (
        <div className="Navcenter">
          <h3>Home</h3>
          <h3>About Us</h3>
          <h3>Contact Us</h3>
          <h3>Services</h3>
          <h3>Portfolio</h3>
        </div>
      );
}
