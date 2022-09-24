import React from 'react';
import styled from 'styled-components';
import { BaseStyles } from '../theme';

export const Text = ({ color, fontSize, fontFamily, fontWeight, textAlign, innerText, style, hoverColor, onClick }) => {
    return (
        <TextDiv color={color} fontSize={fontSize} fontFamily={fontFamily} fontWeight={fontWeight} textAlign={textAlign} hoverColor={hoverColor} style={style} onClick={onClick}>
            {innerText || '내용을 입력해주세요'}
        </TextDiv>
    );
};

const TextDiv = styled.span`
    color: ${({color}) => color || 'black'};
    cursor: pointer;
    font-size: ${({fontSize}) => fontSize || '10px'};
    font-weight: ${({fontWeight}) => fontWeight || '1.2'};
    font-family: ${({fontFamily}) => fontFamily || 'Inter'};
    text-align: ${({textAlign}) => textAlign || 'left'};
    &:hover {
        color: ${({ hoverColor }) => hoverColor};
    }
`;