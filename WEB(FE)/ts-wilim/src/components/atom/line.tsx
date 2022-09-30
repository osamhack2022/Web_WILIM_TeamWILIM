interface LineProps {
    width: string;
    height: string;
    color: string;
    style?: Object;
}

export const Line = ({ width, height, color, style }: LineProps) => {
    return (
        <div style={{ margin: 0, width, height, background: color, ...style }}></div>
    )
};