import styled from "styled-components";

type directionType = "column" | "row";
type flexType = "flex-start" | "flex-end" | "center" | "left" | "right" | "space-between" | "space-evenly" | "space-around";

interface FlexProps {
    flexDirection?: directionType;
    justifyContent?: flexType;
    alignItems?: flexType;
    width?: string;
    height?: string;
    flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
    flex?: string;
    children: JSX.Element | JSX.Element[];
    overflow?: string;
    overflowX?: "visible" | "hidden" | "auto" | "scroll" | "clip";
}

export const Flex = ({ flexDirection, justifyContent, alignItems, width, height, flexWrap, children, flex, overflow, overflowX }: FlexProps) => {
    return (
        <FlexDiv style={{ display: "flex", flexDirection, justifyContent, alignItems, width: width ?? "100%", height, flexWrap, flex, overflow: overflow ?? "hidden", overflowX }}>
            {children}
        </FlexDiv>
    )
}

const FlexDiv = styled.div`
::-webkit-scrollbar{
    display: none; 
}
`