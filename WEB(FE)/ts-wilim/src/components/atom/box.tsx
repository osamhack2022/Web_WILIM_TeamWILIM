import styled from "styled-components";
import { BaseStyles } from "../theme";

interface BoxProps {
  width: string;
  borderRadius?: string;
  backgroundColor?: string;
  children?: JSX.Element | JSX.Element[];
  height?: string;
}

export const Box = ({
  width,
  borderRadius,
  backgroundColor,
  children,
  height
}: BoxProps) => {
    return (
        <BoxDiv width={width} borderRadius={borderRadius} backgroundColor={backgroundColor} height={height}>
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
  border-radius: ${({ borderRadius }) => borderRadius || "6px"};
`;
