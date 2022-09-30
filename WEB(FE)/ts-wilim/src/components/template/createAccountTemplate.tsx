import { useState } from "react";
import { Button } from "../atom/button";
import { Flex } from "../atom/flex";
import { Line } from "../atom/line";
import { MarginBox } from "../atom/marginBox";
import { Text } from "../atom/text";
import { InputArea } from "../molecule/inputArea";
import { BaseStyles } from "../theme";
import { Input } from "../atom/input";

export const CreateAccountTemplate = () => {
  const initialForm = {
    email: "",
    password: "",
    username: "",
    serviceType: "",
  };
  const [userInfoForm, setUserInfoForm] = useState(initialForm);
  const buttonColor = (type: string) =>
    type === userInfoForm.serviceType
      ? BaseStyles.Color.Purple2
      : BaseStyles.Color.Purple1;
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setUserInfoForm({ ...userInfoForm, [name]: value });
    console.log(userInfoForm);
  };

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
        <InputArea
          name="email"
          title="E-mail"
          essential={true}
          inputType="text"
          placeholder="E-mail..."
          onChange={(e) => handleChange(e)}
          value={userInfoForm.email}
        />
        <MarginBox marginBottom="2rem" />
        <InputArea
          title="User Name"
          name="username"
          essential={true}
          inputType="text"
          placeholder="Name..."
          buttonText="Check"
          onChange={(e) => handleChange(e)}
          value={userInfoForm.username}
        />
        <MarginBox marginBottom="2rem" />
        <InputArea
          title="Password"
          name="password"
          essential={true}
          inputType="password"
          placeholder="password..."
          onChange={(e) => handleChange(e)}
          value={userInfoForm.password}
        />
        <MarginBox marginBottom="2rem" />
        <Flex alignItems="center" justifyContent="center">
          <Input
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: buttonColor("육군"),
              border: "none",
              color: "white",
            }}
            type="button"
            name="serviceType"
            value="육군"
            onClick={(e) => handleChange(e)}
          />
          <MarginBox marginLeft="1rem" />
          <Input
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: buttonColor("해군"),
              border: "none",
              color: "white",
            }}
            type="button"
            name="serviceType"
            value="해군"
            onClick={(e) => handleChange(e)}
          />
          <MarginBox marginLeft="1rem" />
          <Input
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: buttonColor("공군"),
              border: "none",
              color: "white",
            }}
            type="button"
            name="serviceType"
            value="공군"
            onClick={(e) => handleChange(e)}
          />
        </Flex>
        <MarginBox marginBottom="3rem" />
        <Flex flexDirection="column" alignItems="center">
          <Button
            innerText="Create New Account"
            onClick={(e) => {
              e.preventDefault();
              console.log(userInfoForm);
            }}
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
