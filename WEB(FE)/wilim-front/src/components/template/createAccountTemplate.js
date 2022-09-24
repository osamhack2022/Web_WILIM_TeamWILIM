import { useState } from "react";
import { Button } from "../atom/button";
import { Flex } from "../atom/flex";
import { Line } from "../atom/line";
import { MarginBox } from "../atom/marginBox";
import { Text } from "../atom/text";
import { InputArea } from "../molecule/inputArea";
import { BaseStyles } from "../theme";

export const CreateAccountTemplate = () => {
  const initialForm = {
    email: "",
    password: "",
    displayName: "",
    serviceType: "",
  };
  const [userInfoForm, setUserInfoForm] = useState(initialForm);

  const handleChange = (event) => {
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
          title="Display Name"
          name="displayName"
          essential={true}
          inputType="text"
          placeholder="Name..."
          buttonText="Check"
          onChange={(e) => handleChange(e)}
          value={userInfoForm.displayName}
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
        {/* <Flex>
          <input
            type="radio"
            name="serviceType"
            value="육군"
            onChange={(e) => handleChange(e)}
            checked
          >육군
          </input>
          <input
            type="radio"
            name="serviceType"
            value="해군"
            onChange={(e) => handleChange(e)}
          >해군
          </input>
          <input
            type="radio"
            name="serviceType"
            value="공군"
            onChange={(e) => handleChange(e)}
          >공군
          </input>
        </Flex> */}
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
