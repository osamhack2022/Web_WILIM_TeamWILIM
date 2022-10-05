import { Text } from "../atom/text";
import { Flex } from "../atom/flex";
import { MarginBox } from "../atom/marginBox";
import { BaseStyles } from "../theme";
import { Button } from "../atom/button";
import { InputArea } from "../molecule/inputArea";
import { Link } from "react-router-dom";
import { KakaoTestButton } from "../molecule/kakaoTestButton";

interface LoginTemplateProps {
  findPasswordLink: string;
  createAccountLink: string;
}

export const LoginTemplate = ({ createAccountLink, findPasswordLink }: LoginTemplateProps) => {
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
        <InputArea title="E-mail" inputType="text" placeholder='E-mail...' />
        <MarginBox marginBottom="2rem" />
        <InputArea title="Password" inputType="password" placeholder='password...' />
      </Flex>
      <MarginBox marginBottom="1rem" />
      <Link to={findPasswordLink}>
        <Text
          innerText="Forgot password?"
          color="lightgray"
          fontSize={BaseStyles.Text.Heading4}
          textAlign="left"
          hoverColor="white"
          style={{ textDecoration: "underline" }}
        />
      </Link>
      <MarginBox marginBottom="3rem" />
      <Flex flexDirection="column" alignItems="center">
        <Button
          innerText="Login"
          onClick={(e) => {
            e.preventDefault();
            console.log("Login...");
          }}
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
          <Link to={createAccountLink}>
            <Text
              innerText="Create Account"
              color={BaseStyles.Color.Orange2}
              fontSize={BaseStyles.Text.Heading4}
              fontWeight={BaseStyles.Text.Border1}
              hoverColor={BaseStyles.Color.Orange3}
              style={{ textDecoration: "underline" }}
            />
          </Link>
        </div>
        <MarginBox marginBottom="1rem" />
        <KakaoTestButton />
      </Flex>
    </>
  );
};