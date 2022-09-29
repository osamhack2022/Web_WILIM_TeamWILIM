import { Button } from "../atom/button";
import { Flex } from "../atom/flex";
import { Input, InputType } from "../atom/input";
import { Text } from "../atom/text";
import { BaseStyles } from "../theme";

interface InputAreaProps {
  name?: string;
  title?: string;
  essential: boolean;
  inputType: InputType;
  placeholder?: string;
  onChange?: () => {};
  value?: string;
  buttonText?: string;
  onClick?: () => {};
}

export const InputArea = ({ name, title, essential, inputType, placeholder, onChange, value, buttonText, onClick }: InputAreaProps) => {
  return (
    <div style={{ width: "100%" }}>
      <Flex flexDirection="column" alignItems="left">
        <div style={{ marginBottom: "0.5rem" }}>
          <Text
            innerText={title}
            fontSize="24px"
            fontWeight={BaseStyles.Text.Border1}
            color="white"
          />
          {essential === true ? (
            <Text
              innerText="*"
              fontSize="24px"
              color={BaseStyles.Color.Orange3}
            />
          ) : null}
        </div>
        <Flex justifyContent="center" alignItems="center">
          <Input type={inputType} placeholder={placeholder} onChange={onChange} value={value} name={name} />
          {buttonText && (
            <Button
              innerText={buttonText}
              style={{ marginLeft: "0.5rem" }}
              onClick={onClick}
            />
          )}
        </Flex>
      </Flex>
    </div>
  );
};
