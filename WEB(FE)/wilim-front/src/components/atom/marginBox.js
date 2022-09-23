import React from 'react';

export const MarginBox = ({ marginLeft, marginRight, marginTop, marginBottom, margin }) => {
    return (
        <div style={{ margin: margin && margin || 0, marginLeft, marginRight, marginTop, marginBottom }}></div>
    )
};