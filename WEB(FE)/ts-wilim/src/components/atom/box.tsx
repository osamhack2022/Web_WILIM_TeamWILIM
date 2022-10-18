import styled from "styled-components";
import { BaseStyles } from "../theme";

interface BoxProps {
  width?: string;
  borderRadius?: string;
  backgroundColor?: string;
  children?: JSX.Element | JSX.Element[];
  height?: string;
  style?: Object;
}

export const Box = ({
  width,
  borderRadius,
  backgroundColor,
  children,
  height,
  style
}: BoxProps) => {
    return (
        <BoxDiv width={width} borderRadius={borderRadius} backgroundColor={backgroundColor} height={height} style={style}>
          {children}
        </BoxDiv>
    )
};

const BoxDiv = styled.div<BoxProps>`
  width: ${({ width }) => width || "calc(100% - 2rem)"};
  height: ${({ height }) => height};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || BaseStyles.Color.Black4};
  box-shadow: ${BaseStyles.Shadow.BottomDefault};
  transition-duration: 0.5s;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  overflow: hidden;
  border-radius: ${({ borderRadius }) => borderRadius || "6px"};
  ::-webkit-scrollbar-track {
    background-color: none;
  }
  ::-webkit-scrollbar {
    width: 6px;               /* width of the entire scrollbar */
  }
  ::-webkit-scrollbar-thumb {
    background-color: lightgray;    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    border: none;  /* creates padding around scroll thumb */
  }
`;
