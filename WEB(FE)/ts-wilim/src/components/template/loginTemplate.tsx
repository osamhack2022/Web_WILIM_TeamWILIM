import { Text } from "../atom/text";
import { Flex } from "../atom/flex";
import { MarginBox } from "../atom/marginBox";
import { BaseStyles } from "../theme";
import { Button } from "../atom/button";
import { InputArea } from "../molecule/inputArea";
import { Link, useNavigate } from "react-router-dom";
import { KakaoTestButton } from "../molecule/kakaoTestButton";
import { useDispatch } from "react-redux";
import { AppThunkDispatch } from "../../store/store";
import { localLogin } from "../../store/asyncThunks/localLogin";
import { useState } from "react";

interface LoginTemplateProps {
  createAccountLink: string;
}

export const LoginTemplate = ({ createAccountLink }: LoginTemplateProps) => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const navigate = useNavigate();
  const initialLoginForm = {
    email: "",
    password: "",
  }
  const [loginForm, setLoginForm] = useState<typeof initialLoginForm>(initialLoginForm);
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setLoginForm({ ...loginForm, [name]: value });
  };
  return (
    <>
      <Flex justifyContent="center">
        <Text
          innerText="WILIM"
          fontWeight={BaseStyles.Text.Border1}
          color={BaseStyles.Color.Orange2}
          fontSize="60px"
          textAlign="center"
        />
      </Flex>
      <MarginBox marginBottom="4rem" />
      <Flex flexDirection="column" alignItems="left">
        <InputArea title="E-mail" inputType="text" placeholder='E-mail...' name="email" onChange={(e) => handleChange(e)} value={loginForm.email} />
        <MarginBox marginBottom="2rem" />
        <InputArea title="Password" inputType="password" placeholder='Password...' name="password" onChange={(e) => handleChange(e)} onKeyUp={(e) => {
          if(e.key === "Enter") {
            e.preventDefault();
            console.log(loginForm);
            dispatch(localLogin(loginForm))
              .then(res => {
                if (res.meta.requestStatus === "fulfilled") navigate(`/main`);
              });
          }
        }} value={loginForm.password} />
      </Flex>
      <MarginBox marginBottom="1rem" />
      <div onClick={() => window.location.href = "https://wilimbackend.tk/userSchemaAPI/resetPassword"}>
        <Text
          innerText="Forgot password?"
          color="lightgray"
          fontSize={BaseStyles.Text.Heading4}
          textAlign="left"
          hoverColor="white"
          style={{ textDecoration: "underline" }}
        />
      </div>
      <MarginBox marginBottom="3rem" />
      <Flex flexDirection="column" alignItems="center">
        <Button
          innerText="Login"
          onClick={(e) => {
            e.preventDefault();
            console.log(loginForm);
            dispatch(localLogin(loginForm))
              .then(res => {
                if (res.meta.requestStatus === "fulfilled") navigate(`/main`);
              });
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
        <MarginBox marginBottom="4rem" />
      </Flex>
    </>
  );
};
