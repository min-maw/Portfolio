import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import DownloadButton from "../subComponents/DownloadButton";
import SocialIcons from "../subComponents/SocialIcons";
import { YinYang } from "./AllSvgs";
import Intro from "./Intro";
import ParticleComponent from "../subComponents/ParticleComponent";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

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

const Contact = styled(Link)`
  color: white;
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 10;

  font-size: 1.5rem;
  &:hover {
    font-size: 1.6rem;
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
  background: white;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;
  border-radius: 50%;
  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }
  // & > :last-child {
  //   display: ${(props) => (props.click ? "none" : "inline-block")};
  //   padding-top: 1rem;
  // }

  &:hover {
    background: #03e9f4;
    color: #050801;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 200px #03e9f4;
    filter: hue-rotate(110deg);
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
          <DownloadButton />
          <LogoComponent theme={"dark"} />
          <SocialIcons theme={"white"} />

          <Center click={click}>
            <YinYang
              onClick={() => handleClick()}
              width={click ? 80 : 120}
              height={click ? 80 : 120}
              fill="currentColor"
            />
            {/* <span onClick={() => handleClick()}>click here</span> */}
          </Center>

          <Contact
            target="_blank"
            to={{ pathname: "mailto:minmawoo.ucsm@gmail.com" }}
          >
            <motion.div
              initial={{
                x: 500,
                transition: { type: "spring", duration: 1.5 },
              }}
              animate={{
                x: 0,
                transition: { type: "spring", duration: 1.5 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon icon={faEnvelopeOpenText} />
            </motion.div>
          </Contact>
        </Container>
        {click ? <Intro click={click} /> : null}
      </MainContainer>
    </>
  );
};

export default Main;
