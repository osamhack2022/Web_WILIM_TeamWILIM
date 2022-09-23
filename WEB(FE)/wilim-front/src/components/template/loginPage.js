import { Text } from "../atom/text";
import { Flex } from "../atom/flex";
import { MarginBox } from "../atom/marginBox";
import { IdInputArea } from "../molecule/idInputArea";
import { PasswordInputArea } from "../molecule/pwInputArea";
import { BaseStyles } from "../theme";

export const LoginPage = () => {
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
        <IdInputArea />
        <MarginBox marginBottom="2rem" />
        <PasswordInputArea />
      </Flex>
    </>
  );
};
