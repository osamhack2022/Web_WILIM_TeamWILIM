import React from 'react';
import styled from 'styled-components';
import { BaseStyles } from '../theme';

export const Text = ({ color, fontSize, fontFamily, fontWeight, textAlign, innerText, style }) => {
    return (
        <TextDiv color={color} fontSize={fontSize} fontFamily={fontFamily} fontWeight={fontWeight} textAlign={textAlign} style={style}>
            {innerText || '내용을 입력해주세요'}
        </TextDiv>
    );
};

const TextDiv = styled.span`
    color: ${({color}) => color || 'black'};
    font-size: ${({fontSize}) => fontSize || '10px'};
    font-weight: ${({fontWeight}) => fontWeight || '1.2'};
    font-family: ${({fontFamily}) => fontFamily || 'Inter'};
    text-align: ${({textAlign}) => textAlign || 'left'};
`;