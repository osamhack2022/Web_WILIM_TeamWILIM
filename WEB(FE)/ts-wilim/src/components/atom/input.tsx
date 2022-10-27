import styled from "styled-components";
import { BaseStyles } from "../theme";
import { EventType } from "../../types/eventType";
import { InputType } from "../../types/inputType";


interface InputProps {
  type: InputType;
  placeholder?: string;
  width?: string;
  height?: string;
  focusColor?: string;
  onChange?: EventType;
  onClick?: EventType;
  onBlur?: EventType;
  onKeyUp?: EventType;
  value?: string;
  name?: string;
  style?: Object;
}

export const Input = ({
  type,
  placeholder,
  width,
  height,
  focusColor,
  onChange,
  onClick,
  onBlur,
  value,
  name,
  style,
  onKeyUp,
}: InputProps) => {
  return (
    <InputDiv
      type={type}
      width={width}
      height={height}
      focusColor={focusColor}
      onChange={onChange}
      onClick={onClick}
      value={value}
      name={name}
      placeholder={placeholder}
      style={style}
      onBlur={onBlur}
      onKeyUp={onKeyUp}
    />
  );
};

const InputDiv = styled.input<{width?: string, height?: string, focusColor?: string}>`
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "auto%"};
    background: none;
    color: white;
    box-shadow: ${BaseStyles.Shadow.BottomDefault};
    transition-duration: 0.5s;
    font-size: ${BaseStyles.Text.Heading4};
    border: 0.3px solid white;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;
    border-radius: 6px;
    &:hover {
        border: 1px solid ${({ focusColor }) =>
    focusColor || BaseStyles.Color.Beige2};
    }
    &:focus {
        border: 1px solid ${({ focusColor }) =>
    focusColor || BaseStyles.Color.Beige2};
    }
    ::placeholder {
        color: white;
    }
`;
