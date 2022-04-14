import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DistortionText } from "react-text-fun";

const Text = styled.h1`
  position: fixed;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  color: ${(props) => `rgba(${props.theme.textRgba},0.1)`};
  font-size: calc(5rem + 5vw);
  z-index: 0;
  @media only screen and (max-width: 800px) {
    font-size: calc(1rem + 5vw);
  }
`;

const BigTitle = (props) => {
  return (
    <Text top={props.top} left={props.left} right={props.right}>
      <DistortionText text={props.text} fontSize={60} />
    </Text>
  );
};

export default BigTitle;
