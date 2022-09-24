import { Text } from "../atom/text";
import { Flex } from "../atom/flex";
import { MarginBox } from "../atom/marginBox";
import { IdInputArea } from "../molecule/idInputArea";
import { PasswordInputArea } from "../molecule/pwInputArea";
import { BaseStyles } from "../theme";
import { Button } from "../atom/button";

export const LoginTemplate = () => {
  return (
    <>
      <Flex justifyContent="center">
        <Text
          innerText="Login"
          fontWeight={BaseStyles.Text.Border1}
          color="white"
          fontSize="60px"
          textAlign="center"
        />
      </Flex>
      <MarginBox marginBottom="6rem" />
      <Flex flexDirection="column" alignItems="left">
        <IdInputArea buttonText='Check' />
        <MarginBox marginBottom="2rem" />
        <PasswordInputArea />
      </Flex>
      <MarginBox marginBottom="1rem" />
      <Text
        innerText="Forgot password?"
        color="lightgray"
        fontSize={BaseStyles.Text.Heading4}
        textAlign="left"
        hoverColor="white"
        style={{ textDecoration: "underline" }}
        onClick={() => console.log("hello")}
      />
      <MarginBox marginBottom="3rem" />
      <Flex flexDirection="column" alignItems="center">
        <Button
          innerText="Login"
          onClick={() => console.log("Login...")}
          color="white"
          backgroundColor={BaseStyles.Color.Orange2}
          hoverColor={BaseStyles.Color.Orange3}
          width="60%"
          height="3rem"
        />
        <MarginBox marginBottom="1rem" />
        <div id="textWrapper">
          <Text
            innerText="Are you a new visitor? "
            color="lightgray"
            fontSize={BaseStyles.Text.Heading4}
          />
          <Text
            innerText="Create Account"
            color={BaseStyles.Color.Orange2}
            fontSize={BaseStyles.Text.Heading4}
            fontWeight={BaseStyles.Text.Border1}
            hoverColor={BaseStyles.Color.Orange3}
            style={{ textDecoration: "underline" }}
            onClick={() => console.log("let's create account")}
          />
        </div>
      </Flex>
    </>
  );
};
