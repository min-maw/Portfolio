import React from "react";
import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

const Download = styled.div`
  position: fixed;
  padding: 25px 30px;
  color: #03e9f4;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  text-transform: uppercase;
  transition: 0.5s;
  overflow: hidden;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  cursor: pointer;

  &:hover {
    background: #03e9f4;
    color: #050801;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 200px #03e9f4;
  }
`;

const animate1 = keyframes`
0%{
  left: -100%;

}
50%,100%{ left:  100%; }
`;

const animate2 = keyframes`
0%{
  top: -100%;

}
50%,100%{ top:  100%; }
`;

const animate3 = keyframes`
0%{
  right: -100%;

}
50%,100%{ right:  100%; }
`;

const animate4 = keyframes`
0%{
  bottom: -100%;

}
50%,100%{ bottom:  100%; }
`;

const Span = styled.div`
  position: absolute;
  display: block;
  &:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #03e9f4);
    animation: ${animate1} 1s linear infinite;
  }

  &:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #03e9f4);
    animation: ${animate2} 1s linear infinite;
    animation-delay: 0.25s;
  }

  &:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #03e9f4);
    animation: ${animate3} 1s linear infinite;
    animation-delay: 0.5s;
  }

  &:nth-child(4) {
    left: 0;
    bottom: -100%;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #03e9f4);
    animation: ${animate4} 1s linear infinite;
    animation-delay: 0.75s;
  }
`;

const DownloadButton = () => {
  return (
    <>
      <a
        href="https://drive.google.com/uc?export=download&id=15VLITdN7-e46-8VeyTLhivk8FaOs19TH"
        // target="_blank"
      >
        <Download>
          <Span></Span>
          <Span></Span>
          <Span></Span>
          <Span></Span>Download CV
        </Download>
      </a>
    </>
  );
};

export default DownloadButton;
