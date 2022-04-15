import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { AiOutlineHome } from "react-icons/ai";
import "../App.css";

const Nav = styled.div`
  background: rgba(0, 0, 0, 0.3);
  width: max-content;
  display: block;
  padding: 0.7rem 1.7rem;
  z-index: 10;
  position: fixed;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
  gap: 0.8rem;
  border-radius: 3rem;
  backdrop-filter: blur(15);
`;

const Navigation = styled(NavLink)`
  background: transparent;
  padding: 0.9rem;
  border-radius: 50%;
  display: inline-flex;
  color: var(--color-light);
  font-size: 1.1rem;

  &.aaa:hover {
    background: rgba(0, 0, 0, 0.3);
  }
  &.active {
    background: rgba(0, 0, 0, 0.3);
  }
`;

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("/");

  console.log(activeNav);
  return (
    <Nav>
      <Navigation
        exact={true}
        to="/"
        onClick={() => setActiveNav("/")}
        className={activeNav === "/" ? "" : "aaa"}
      >
        <AiOutlineHome />
      </Navigation>
      <Navigation
        to="/blog"
        onClick={() => setActiveNav("/blog")}
        className={activeNav === "/blog" ? "active" : "aaa"}
      >
        <AiOutlineHome />
      </Navigation>
      <Navigation
        to="/work"
        onClick={() => setActiveNav("/work")}
        className={activeNav === "/work" ? "active" : "aaa"}
      >
        <AiOutlineHome />
      </Navigation>
      <Navigation
        to="/about"
        onClick={() => setActiveNav("/about")}
        className={activeNav === "/about" ? "active" : "aaa"}
      >
        <AiOutlineHome />
      </Navigation>
      <Navigation
        to="/skills"
        onClick={() => setActiveNav("/skills")}
        className={activeNav === "/skills" ? "active" : "aaa"}
      >
        <AiOutlineHome />
      </Navigation>
    </Nav>
  );
};

export default Navbar;
