import React from 'react';

export const Flex = ({ flexDirection, justifyContent, alignItems, children }) => {
    return (
        <div style={{ display: "flex", flexDirection, justifyContent, alignItems }}>
            {children}
        </div>
    )
}