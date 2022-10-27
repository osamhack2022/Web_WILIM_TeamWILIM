import { Button } from "../atom/button";
import { Flex } from "../atom/flex";
import { Input } from "../atom/input";
import { Text } from "../atom/text";
import { BaseStyles } from "../theme";
import { EventType } from "../../types/eventType";
import { InputType } from "../../types/inputType";

interface InputAreaProps {
  name?: string;
  title?: string;
  essential?: boolean;
  inputType: InputType;
  placeholder?: string;
  onChange?: EventType;
  value?: string;
  buttonText?: string;
  onClick?: EventType;
  onKeyUp?: EventType;
}

export const InputArea = ({ name, title, essential, inputType, placeholder, onChange, value, buttonText, onClick, onKeyUp }: InputAreaProps) => {
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
          <Input type={inputType} placeholder={placeholder} onChange={onChange} onKeyUp={onKeyUp} value={value} name={name} />
          {buttonText !== undefined ?
                      <Button
                      innerText={buttonText!}
                      style={{ marginLeft: "0.5rem" }}
                      onClick={onClick!}
                    />
          : <></>}
        </Flex>
      </Flex>
    </div>
  );
};
