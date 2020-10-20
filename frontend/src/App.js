import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Main />
        <About />
        <Contact />
      </Container>
      <Footer />
    </>
  );
};

export default App;
