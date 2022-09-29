import styled from 'styled-components';
import { BaseStyles } from '../theme';

type AlignType = "left" | "center" | "right";

interface TextProps {
    color?: string;
    fontSize?: string;
    fontWeight?: number;
    textAlign?: AlignType;
    innerText: string;
    hoverColor?: string;
    onClick?: () => {};
    style?: Object;
}

export const Text = ({ color, fontSize, fontWeight, textAlign, innerText, style, hoverColor, onClick }: TextProps) => {
    return (
        <TextDiv color={color} fontSize={fontSize} fontWeight={fontWeight} textAlign={textAlign} hoverColor={hoverColor} style={style} onClick={onClick}>
            {innerText || '내용을 입력해주세요'}
        </TextDiv>
    );
};

const TextDiv = styled.span<{color?: string, fontSize?: string, fontWeight?: number, textAlign?: AlignType, hoverColor?: string}>`
    color: ${({color}) => color || 'black'};
    cursor: pointer;
    font-size: ${({fontSize}) => fontSize || '10px'};
    font-weight: ${({fontWeight}) => fontWeight || BaseStyles.Text.Border3};
    font-family: ${BaseStyles.Font.Inter};
    text-align: ${({textAlign}) => textAlign || 'left'};
    &:hover {
        color: ${({ hoverColor }) => hoverColor};
    }
`;