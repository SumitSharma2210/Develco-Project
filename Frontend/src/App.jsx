import React from "react";
import { Navcenter } from "./Components/Navcenter";
import "./App.css";

function App() {
  function Navleft() {
    return (
      <>
        <div className="Navleft">
          <a className="logo" href="google.com">
            Logo
          </a>
        </div>
      </>
    );
  }

  function Develco() {
    return <h1 className="develco">DevelCo</h1>;
  }

  function Button() {
    return (
      <button className="button">
        Let's Explore
      </button>
    );
  }

  function Servicesection() {
    return (
      <>
        <h1 className="service-heading">SERVICES</h1>
      </>
    );
  }

  function Aboutsection() {
    return (
      <>
        <h1 className="about-heading">About Us</h1>
      </>
    );
  }

  function Card({ color, title, content }) {
    return <>

      <section className="card__container">
        <div className="card__bx" style={{ "--clr": color }}>
          <div className="card__data">
            <div className="card__icon">
              <i className="fa-solid fa-paintbrush"></i>
            </div>
            <div className="card__content">
              <h3>{title}</h3>
              <p>{content}</p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </section>

    </>;
  }

  function Showmore() {
    return <button className="showmore">Show More!</button>;
  }

  return (
    <>
      <div className="Navbar">
        <Navleft />
        <Navcenter />
      </div>
      <section className="Body">
        <section className="page1">
          <video src="/Video/Front.mp4" className="Video" autoPlay muted loop></video>
          <h1 className="brandtext">YOUR IMAGINATION, OUR CREATION</h1>
        </section>
        <section className="page2">
          <Develco />
          <h1 className="tagline">The Developers Company</h1>
          <p className="desc">
            DevelCO is a dynamic website development firm committed to delivering
            cutting-edge digital solutions for businesses worldwide. With a
            seasoned team of developers and designers, we excel in crafting
            bespoke websites, e-commerce platforms, and mobile applications that
            drive results.
            <br />
            Our approach is rooted in collaboration and innovation. We take the
            time to understand your unique business objectives, ensuring that
            every project is tailored to meet your specific needs. From concept to
            launch, we work tirelessly to bring your vision to life, leveraging
            the latest technologies and industry best practices to deliver
            exceptional results.
            <br />
            At DevelCO, client satisfaction is our top priority. We pride
            ourselves on our transparent communication, attention to detail, and
            dedication to delivering projects on time and within budget. Whether
            you're a small startup or a large enterprise, we're here to help you
            navigate the digital landscape and achieve your goals.
            <br />
            Discover the difference that expert website development can make for
            your business. Get in touch with DevelCO today, and let's elevate your
            online presence together.
          </p>
          <Button />
        </section>
        <section className="page3">
          <Servicesection />
          <div className="card-parent">
            <Card
              color="#89ec5b"
              title="Designing"
              content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
            <Card
              color="#eb5ae5"
              title="Designing"
              content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
            <Card
              color="#5b98eb"
              title="Designing"
              content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>


          <Showmore />
        </section>
        <section className="page4">
          <Aboutsection/>
        </section>
      </section>
      <footer className="footer">
        <h1>Footer </h1>
      </footer>
    </>
  );
}

export default App;
