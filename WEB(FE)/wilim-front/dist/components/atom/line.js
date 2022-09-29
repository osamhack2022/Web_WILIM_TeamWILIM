export const Line = ({ width, height, color, style }) => {
    return (
        <div style={{ margin: 0, width, height, background: color, ...style }}></div>
    )
};