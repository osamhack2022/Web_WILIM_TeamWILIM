import React from "react";
import { Button } from "../atom/button";
import { Flex } from "../atom/flex";
import { Input } from "../atom/input";
import { Text } from "../atom/text";
import { BaseStyles } from "../theme";

export const InputArea = ({ innerText, type, buttonText}) => {
  return (
    <div style={{ width: "100%" }}>
      <Flex flexDirection="column" alignItems="left">
        <div style={{ marginBottom: "0.5rem" }}>
          <Text
            innerText={innerText}
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
            type={type}
            placeholder={innerText+"..."}
          />
          if({buttonText}){
            <Button innerText={buttonText} style={{ marginLeft: "0.5rem" }} />
          }
        </Flex>
      </Flex>
    </div>
  );
};