import { useState } from "react";
import { Button } from "../atom/button";
import { Flex } from "../atom/flex";
import { Line } from "../atom/line";
import { MarginBox } from "../atom/marginBox";
import { Text } from "../atom/text";
import { InputArea } from "../molecule/inputArea";
import { BaseStyles } from "../theme";
import { Input } from "../atom/input";
import { localRegister } from "../../store/asyncThunks/localRegister";
import { useDispatch } from "react-redux";
import { AppThunkDispatch } from "../../store/store";
import { useNavigate } from "react-router-dom";

export const CreateAccountTemplate = () => {
  const initialForm = {
    email: "",
    password: "",
    username: "",
    serviceType: "",
  };
  const dispatch = useDispatch<AppThunkDispatch>();
  const navigate = useNavigate();
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
            placeholder="육군"
            value="ARMY"
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
            placeholder="해군"
            value="NAVY"
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
            placeholder="공군"
            value="AIR_FORCE"
            onClick={(e) => handleChange(e)}
          />
        </Flex>
        <MarginBox marginBottom="3rem" />
        <Flex flexDirection="column" alignItems="center">
          <Button
            innerText="Create New Account"
            onClick={(e) => {
              e.preventDefault();
              dispatch(localRegister(userInfoForm))
              .then(res => {
                if(res.meta.requestStatus === "fulfilled") navigate(`/${res.payload.username}`);
              })
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
