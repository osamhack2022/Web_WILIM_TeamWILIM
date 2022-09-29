import React from 'react';
import styled from 'styled-components';
import { BaseStyles } from '../theme';

export const Button = ({ onClick, width, height, color, hoverColor, backgroundColor, innerText, style }) => {
    return (
        <ButtonDiv onClick={onClick} width={width} height={height} color={color} hoverColor={hoverColor} backgroundColor={backgroundColor} style={style}>
            {innerText || 'InnerText'}
        </ButtonDiv>
    )
}

const ButtonDiv = styled.button`
    box-shadow: ${BaseStyles.Shadow.BottomDefault};
    transition-duration: 0.5s;
    cursor: pointer;
    outline: none;
    border: none;
    box-sizing: border-box;
    overflow-hidden;
    background: ${({ backgroundColor }) => backgroundColor || BaseStyles.Color.Beige3};
    color: ${({ color }) => color || BaseStyles.Color.Black4};
    width: ${({ width }) => width || '100px'};
    height: ${({ height }) => height || '100%'};
    font-size: ${BaseStyles.Text.Heading4};
    font-family: ${BaseStyles.Font.Inter};
    font-weight: ${BaseStyles.Text.Border0};
    padding: 1rem;
    border-radius: 0.5rem;
    line-height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    &:hover {
        background: ${({ hoverColor }) => hoverColor || BaseStyles.Color.Beige1};
        border-radius: 1rem;
    }
`