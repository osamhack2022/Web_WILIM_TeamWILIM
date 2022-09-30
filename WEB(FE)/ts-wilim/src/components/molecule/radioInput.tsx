import { Flex } from "../atom/flex";
import { Input } from "../atom/input";
import { Text } from "../atom/text";
import { BaseStyles } from "../theme";

interface RadioInputProps {
  name?: string;
  value?: string;
  onChange?: () => {};
  innerText?: string;
  color?: string;
}

export const RadioInput = ({ name, value, onChange, innerText, color }: RadioInputProps) => {
  return (
    <Flex>
      <Input type="radio" name={name} value={value} onChange={onChange} style={{ cursor: "pointer" }} />
      <Text
        innerText={innerText || value}
        fontSize={BaseStyles.Text.Heading4}
        color={color || "white"}
        style={{ whiteSpace: "nowrap" }}
      />
    </Flex>
  );
};
