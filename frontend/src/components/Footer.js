import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  const year = () => {
    const date = new Date();
    return date.getFullYear();
  };
  return <footer>&copy;TBug {year()}</footer>;
};

export default Footer;
