type directionType = "column" | "row";
type flexType = "flex-start" | "flex-end" | "center" | "left" | "right" | "space-between" | "space-evenly" | "space-around";

interface FlexProps {
    flexDirection?: directionType;
    justifyContent?: flexType;
    alignItems?: flexType;
    width?: string;
    height?: string;
    children: JSX.Element | JSX.Element[];
}

export const Flex = ({ flexDirection, justifyContent, alignItems, width, height, children }: FlexProps) => {
    return (
        <div style={{ display: "flex", flexDirection, justifyContent, alignItems, width: width ?? "100%", height }}>
            {children}
        </div>
    )
}