import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { YinYang } from "./AllSvgs";
import Intro from "./Intro";
import ParticleComponent from "../subComponents/ParticleComponent";

const MainContainer = styled.div`
  background-image: url(https://cutewallpaper.org/21/web-development-wallpaper/12-Striking-Dark-Wallpaper-Sites-That-Are-Perfect-for-Your-.jpg);
  background-size: cover;
  // background: #e5e27a;
  // background: -webkit-linear-gradient(top left, #e5e27a, #ffef0a);
  // background: -moz-linear-gradient(top left, #e5e27a, #ffef0a);
  // background: linear-gradient(to bottom right, #e5e27a, #ffef0a);
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
  @media only screen and (max-width: 800px) {
    font-size: 0.7em;
  }
`;

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;
  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }
  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
  }
  @media only screen and (max-width: 800px) {
    width: ${(props) => (props.click ? "60px" : "150px")};
    height: ${(props) => (props.click ? "60px" : "150px")};
  }
  @media only screen and (max-width: 500px) {
    width: ${(props) => (props.click ? "40px" : "150px")};
    height: ${(props) => (props.click ? "40px" : "150px")};
  }
`;

const DarkDiv = styled.div`
  position: absolute;

  background-color: #000;

  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
  @media only screen and (min-width: 800px) {
    top: 0;
    bottom: 0;
    right: 50%;
  }

  @media only screen and (max-width: 800px) {
    right: 0;
    left: 0;
    bottom: 50%;
    width: 100%;
  }
`;

export function useWindowDimension() {
  const [dimension, setDimension] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  useEffect(() => {
    const debouncedResizeHandler = debounce(() => {
      console.log("***** debounced resize"); // See the cool difference in console
      setDimension([window.innerWidth, window.innerHeight]);
    }, 100); // 100ms
    window.addEventListener("resize", debouncedResizeHandler);
    return () => window.removeEventListener("resize", debouncedResizeHandler);
  }, []); // Note this empty array. this effect should run only on mount and unmount
  return dimension;
}

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const Main = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const [width, height] = useWindowDimension();

  return (
    <>
      <MainContainer>
        <DarkDiv click={click} />
        <Container>
          <LogoComponent theme={click ? "dark" : "light"} />
          <SocialIcons
            theme={
              click
                ? width < 800
                  ? "black"
                  : "white"
                : width < 800
                ? "black"
                : "black"
            }
          />

          <Center click={click}>
            <YinYang
              onClick={() => handleClick()}
              width={click ? 80 : 200}
              height={click ? 80 : 200}
              fill="currentColor"
            />
            <span onClick={() => handleClick()}>click here</span>
          </Center>

          <Contact
            target="_blank"
            to={{ pathname: "mailto:minmawoo.ucsm@gmail.com" }}
          >
            <motion.h2
              initial={{
                y: -200,
                transition: { type: "spring", duration: 1.5 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Say hi..
            </motion.h2>
          </Contact>
        </Container>
        {click ? <Intro click={click} /> : null}
      </MainContainer>
    </>
  );
};

export default Main;
