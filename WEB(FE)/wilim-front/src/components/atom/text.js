import React from 'react';
import styled from 'styled-components';
import { BaseStyles } from '../theme';

export const Text = ({ color, fontSize, fontFamily, textAlign, innerText }) => {
    return (
        <TextDiv color={color} font-size={fontSize} font-family={fontFamily} text-align={textAlign}>
            {innerText || '내용을 입력해주세요'}
        </TextDiv>
    );
};

const TextDiv = styled.p`
    color: ${({color}) => color || 'black'};
    font-size: ${({fontSize}) => fontSize || '10px'};
    font-weight: ${({fontWeight}) => fontWeight || '1.2'};
    font-family: ${({fontFamily}) => fontFamily || 'Inter'};
    text-align: ${({textAlign}) => textAlign || 'left'};
`;