import React from 'react';

export const Flex = ({ flexDirection, justifyContent, alignItems, width, height, children }) => {
    return (
        <div style={{ display: "flex", flexDirection, justifyContent, alignItems, width, height }}>
            {children}
        </div>
    )
}