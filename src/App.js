import React from "react";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Project from "./components/project/project";
import Experience from "./components/experience/experience";
import Testimonial from "./components/testimonial/testimonial";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Project />
      <Testimonial />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
