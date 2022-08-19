import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { AiOutlineHome } from "react-icons/ai";
import { BiBook, BiTerminal, BiUserPin, BiTrophy } from "react-icons/bi";
import "../App.css";

const Nav = styled.div`
  background: #add8e6;
  width: max-content;
  height: 50px;
  display: block;
  padding: 0.3rem 1.2rem;
  z-index: 10;
  position: fixed;
  bottom: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 0.65rem;
  box-shadow: 0 8px 32px hsla(231, 44%, 45%, 0.2);

  @media only screen and (max-width: 800px) {
    padding: 0.3rem 1.2rem;
  }
`;

const Name = styled.div`
  font-size: smaller;
  position: absolute;
  font-weight: 500;
  transform: translateY(45px);
  opacity: 0;
  transition: 0.4s;
  z-index: 10;
`;

const Navigation = styled(NavLink)`
  background: transparent;

  // padding-bottom: 1.4rem;
  border-radius: 50%;
  color: var(--color-light);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.1rem;
  z-index: 10;

  &.aaa {
    padding: 1rem;
  }

  &.active .name {
    opacity: 1;
    transform: translateY(20px);
  }
  &.active .icon {
    transform: translateY(-35px);
    background: rgba(0, 0, 0, 0.3);
    border: 4px solid black;
    backdrop-filter: blur(4px);

    padding: 0.6rem;
    border-radius: 50%;
    color: white;
  }

  &.aaa:hover {
    color: red;
  }
`;

const NavList = styled.div`
  display: flex;
  justify-content: center;
`;

const Navbar = () => {
  const [activeNav, setActiveNav] = useState(window.location.pathname);

  useEffect(() => {
    setActiveNav(window.location.pathname);
  });

  console.log(activeNav);
  return (
    <Nav>
      <NavList>
        <Navigation
          exact={true}
          to="/"
          onClick={() => setActiveNav("/")}
          className={activeNav === "/" ? "active" : "aaa"}
        >
          <AiOutlineHome className="icon" />
          <Name className="name">Home</Name>
        </Navigation>

        <Navigation
          to="/blog"
          onClick={() => setActiveNav("/blog")}
          className={activeNav === "/blog" ? "active" : "aaa"}
        >
          <BiTerminal className="icon" />
          <Name className="name">Work</Name>
        </Navigation>
        <Navigation
          to="/about"
          onClick={() => setActiveNav("/about")}
          className={activeNav === "/about" ? "active" : "aaa"}
        >
          <BiUserPin className="icon" />
          <Name className="name">About</Name>
        </Navigation>
        <Navigation
          to="/skills"
          onClick={() => setActiveNav("/skills")}
          className={activeNav === "/skills" ? "active" : "aaa"}
        >
          <BiTrophy className="icon" />
          <Name className="name">Skills</Name>
        </Navigation>
      </NavList>
    </Nav>
  );
};

export default Navbar;
