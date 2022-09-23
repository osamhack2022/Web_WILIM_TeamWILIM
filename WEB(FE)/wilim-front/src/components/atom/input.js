import React from "react";
import styled from "styled-components";
import { BaseStyles } from "../theme";

export const Input = ({
  type,
  placeholder,
  width,
  height,
  focusColor,
  style,
}) => {
  return (
    <InputDiv
      type={type}
      width={width}
      height={height}
      focusColor={focusColor}
      placeholder={placeholder || "InnerText"}
      style={style}
    />
  );
};

const InputDiv = styled.input`
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "100%"};
    background-color: 'white';
    color: 'black';
    box-shadow: ${BaseStyles.Shadow.BottomDefault};
    transition-duration: 0.5s;
    font-size: ${BaseStyles.Text.Heading4};
    border: 0.3px solid ${BaseStyles.Color.Black0};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;
    border-radius: 1rem;
    &:hover {
        border: 1px solid ${({ focusColor }) =>
          focusColor || BaseStyles.Color.Beige2};
    }
    &:focus {
        border: 1px solid ${({ focusColor }) =>
          focusColor || BaseStyles.Color.Beige2};
    }
    input::placeholder {
        color: 'lightgray';
    }
`;
