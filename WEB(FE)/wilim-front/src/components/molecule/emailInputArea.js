import React from "react";
import { Flex } from "../atom/flex";
import { Input } from "../atom/input";
import { Text } from "../atom/text";
import { BaseStyles } from "../theme";

export const EmailInputArea = () => {
  return (
    <div style={{ width: "100%" }}>
      <Flex flexDirection="column" alignItems="left">
        <div style={{ marginBottom: "0.5rem" }}>
          <Text
            innerText="E-mail"
            fontSize="24px"
            fontWeight={BaseStyles.Text.Border1}
            color="white"
          />
          <Text
            innerText="*"
            fontSize="24px"
            color={BaseStyles.Color.Orange3}
          />
        </div>
        <Flex justifyContent="center" alignItems="center">
          <Input
            type="text"
            placeholder="E-mail"
          />
        </Flex>
      </Flex>
    </div>
  );
};
