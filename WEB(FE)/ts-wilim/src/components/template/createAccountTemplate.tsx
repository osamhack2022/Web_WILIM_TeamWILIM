import { useEffect, useState } from "react";
import { Button } from "../atom/button";
import { Flex } from "../atom/flex";
import { MarginBox } from "../atom/marginBox";
import { InputArea } from "../molecule/inputArea";
import { BaseStyles } from "../theme";
import { Input } from "../atom/input";
import { localRegister } from "../../store/asyncThunks/localRegister";
import { useDispatch } from "react-redux";
import { AppThunkDispatch } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { Title } from "../molecule/title";
import axios from "axios";
import { Text } from "../atom/text";
import { toast } from "react-toastify";
import { userInfo } from "os";

type InitialFormType = {
  [key: string]: string;
  email: string;
  password: string;
  username: string;
  serviceType: string;
}

export const CreateAccountTemplate = () => {
  const initialForm: InitialFormType = {
    email: "",
    password: "",
    username: "",
    serviceType: "",
  };
  const dispatch = useDispatch<AppThunkDispatch>();
  const navigate = useNavigate();
  const [userInfoForm, setUserInfoForm] = useState<InitialFormType>(initialForm);
  const [names, setNames] = useState<string[]>([]);
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setUserInfoForm({ ...userInfoForm, [name]: value });
    console.log(userInfoForm);
  };
  const res = async () => await axios("https://wilimbackend.tk/userSchemaAPI").then(res => {
    for (let i = 0; i < res.data.length; i++) {
        setNames(prev => [ ...prev, res.data[i].username ])
    }
});
useEffect(() => {
  res();
}, [])

  return (
    <>
      <Title innerText="Create Account" />
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
          onChange={(e) => handleChange(e)}
          value={userInfoForm.username}
        />
        {names.includes(userInfoForm.username) ? <Text innerText="This username is already exist!" color={BaseStyles.Color.Red2} fontSize={BaseStyles.Text.Heading4}/> : <></>}
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
        <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
                    <MarginBox marginLeft="0.5rem" />
                    <Input
                        style={{
                            display: "flex",
                            width: "100px",
                            justifyContent: "center",
                            backgroundColor: "#658a1b",
                            border: "none",
                            color: "white",
                            opacity: userInfoForm.serviceType === "ARMY" ? 1 : 0.7,
                            marginTop: "1rem",
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
                            width: "100px",
                            justifyContent: "center",
                            backgroundColor: "#275af5",
                            border: "none",
                            color: "white",
                            opacity: userInfoForm.serviceType === "NAVY" ? 1 : 0.7,
                            marginTop: "1rem",
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
                            width: "100px",
                            justifyContent: "center",
                            backgroundColor: "#3399FF",
                            border: "none",
                            color: "white",
                            opacity: userInfoForm.serviceType === "AIR_FORCE" ? 1 : 0.7,
                            marginTop: "1rem",
                        }}
                        type="button"
                        name="serviceType"
                        placeholder="공군"
                        value="AIR_FORCE"
                        onClick={(e) => handleChange(e)}
                    />
                    <MarginBox marginLeft="1rem" />
                    <Input
                        style={{
                            display: "flex",
                            width: "100px",
                            justifyContent: "center",
                            backgroundColor: "#ff2335",
                            border: "none",
                            color: "white",
                            opacity: userInfoForm.serviceType === "MARINE" ? 1 : 0.7,
                            marginTop: "1rem",
                        }}
                        type="button"
                        name="serviceType"
                        placeholder="해병대"
                        value="MARINE"
                        onClick={(e) => handleChange(e)}
                    />
                    <MarginBox marginLeft="0.5rem" />
                </Flex>
        <MarginBox marginBottom="3rem" />
        <Flex flexDirection="column" alignItems="center">
          <Button
            innerText="Create New Account"
            onClick={(e) => {
              e.preventDefault();
              if(Object.keys(userInfoForm).filter((key => userInfoForm[key] === "")).length === 0) {
                dispatch(localRegister(userInfoForm))
                .then(res => {
                  if(res.meta.requestStatus === "fulfilled") navigate(`/main`);
                  if(res.meta.requestStatus === "rejected") toast.error("API 요청이 거부되었어요.");
                })
              } else {
                toast.error("모든 칸을 입력해주세요!")
              }
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
