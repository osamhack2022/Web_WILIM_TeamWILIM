import styled from "styled-components"
import { BaseStyles } from "../theme"

export const Box = ({ width, borderRadius, backgroundColor, children }) => {
    return (
        <BoxDiv width={width} borderRadius={borderRadius} backgroundColor={backgroundColor}>
            {children}
        </BoxDiv>
    )
}

const BoxDiv = styled.div`
    width: ${({ width }) => width || "100%"};
    background-color: ${({ backgroundColor }) => backgroundColor || BaseStyles.Color.Black4};
    box-shadow: ${BaseStyles.Shadow.BottomDefault};
    transition-duration: 0.5s;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border-radius: ${({ borderRadius }) => borderRadius || "1rem"};
`