interface MarginBoxProps {
    marginLeft?: string;
    marginRight?: string;
    marginTop?: string;
    marginBottom?: string;
    margin?: string;
}

export const MarginBox = ({ marginLeft, marginRight, marginTop, marginBottom, margin }: MarginBoxProps) => {
    return (
        <div style={{ margin: margin && margin || 0, marginLeft, marginRight, marginTop, marginBottom }}></div>
    )
};