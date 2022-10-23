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
}

export const Flex = ({ flexDirection, justifyContent, alignItems, width, height, flexWrap, children, flex }: FlexProps) => {
    return (
        <div style={{ display: "flex", flexDirection, justifyContent, alignItems, width: width ?? "100%", height, flexWrap, flex }}>
            {children}
        </div>
    )
}