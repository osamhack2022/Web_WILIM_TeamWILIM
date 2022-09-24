import { Button } from "../atom/button";
import { Flex } from "../atom/flex";
import { Line } from "../atom/line";
import { MarginBox } from "../atom/marginBox";
import { Text } from "../atom/text";
import { DisplayNameInputArea } from "../molecule/displayNameInputArea";
import { EmailInputArea } from "../molecule/emailInputArea";
import { IdInputArea } from "../molecule/idInputArea";
import { PasswordInputArea } from "../molecule/pwInputArea";
import { BaseStyles } from "../theme";

export const CreateAccountTemplate = () => {
  return (
    <>
      <Text
        innerText="Create Account"
        fontSize={BaseStyles.Text.Heading2}
        fontWeight={BaseStyles.Text.Border1}
        textAlign="left"
        color="white"
      />
      <MarginBox marginBottom="1rem" />
      <Line width="100%" height="2px" color="white" />
      <MarginBox marginBottom="3rem" />
      <form>
        <IdInputArea buttonText="Check" />
        <MarginBox marginBottom="2rem" />
        <DisplayNameInputArea buttonText="Check" />
        <MarginBox marginBottom="2rem" />
        <PasswordInputArea />
        <MarginBox marginBottom="2rem" />
        <EmailInputArea />
        <MarginBox marginBottom="3rem" />
        <Flex flexDirection="column" alignItems="center">
          <Button
            innerText="Create New Account"
            onClick={() => console.log("Login...")}
            color="white"
            backgroundColor={BaseStyles.Color.Orange2}
            hoverColor={BaseStyles.Color.Orange3}
            width="60%"
            height="3rem"
          />
        </Flex>
      </form>
      <MarginBox marginBottom="2rem" />
    </>
  );
};
