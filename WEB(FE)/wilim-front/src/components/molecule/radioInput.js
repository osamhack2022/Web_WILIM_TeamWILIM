import { Flex } from "../atom/flex";
import { Input } from "../atom/input";
import { Text } from "../atom/text";
import { BaseStyles } from "../theme";

export const RadioInput = ({ name, value, onChange, innerText, color }) => {
  return (
    <Flex>
      <Input type="radio" name={name} value={value} onChange={onChange} style={{ cursor: "pointer" }} />
      <Text
        innerText={innerText || value}
        fontSize={BaseStyles.Text.Heading4}
        color={color || "white"}
        fontFamily={BaseStyles.Font.Inter}
        style={{ whiteSpace: "nowrap" }}
      />
    </Flex>
  );
};
