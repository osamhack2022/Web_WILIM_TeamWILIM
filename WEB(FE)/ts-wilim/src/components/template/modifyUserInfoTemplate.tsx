import { useEffect, useState } from "react";
import { BaseStyles } from "../theme";
import { User } from '../../schema/user';
import { MarginBox } from "../atom/marginBox";
import { InputArea } from "../molecule/inputArea";
import { Flex } from "../atom/flex";
import { Input } from "../atom/input";
import { Button } from "../atom/button";
import { useSelector } from "react-redux";
import { ReducerType } from "../../store/rootReducer";
import { useDispatch } from "react-redux";
import { AppThunkDispatch } from "../../store/store";
import { modifyUserInfo } from "../../store/asyncThunks/modifyUserInfo";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUserById } from "../../store/asyncThunks/fetchUserById";
import { Title } from "../molecule/title";
import { Text } from "../atom/text";

export const ModifyUserInfoTemplate = () => {
    const _id = useParams()._id!;
    console.log(_id);
    const navigate = useNavigate();
    const dispatch = useDispatch<AppThunkDispatch>();
    const data = useSelector((state: ReducerType) => state.userInfo);
    const { username, password, serviceType } = data;
    const [userInfoForm, setUserInfoForm] = useState<User>({ _id, username, password, serviceType });
    useEffect(() => {
        setUserInfoForm({ _id, username, password, serviceType });
    }, [data]);
    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setUserInfoForm({ ...userInfoForm, [name]: value });
    };

    return (
        <>
            <Title innerText="Profile" />
            <MarginBox marginBottom="1rem" />
            <Text innerText={`${data.username} | ${data.email}`} fontSize={BaseStyles.Text.Heading3} />
            <MarginBox marginBottom="2rem" />
            <form>
                <InputArea
                    title="User Name"
                    name="username"
                    inputType="text"
                    placeholder="Name..."
                    onChange={(e) => handleChange(e)}
                    value={userInfoForm.username}
                />
                <MarginBox marginBottom="2rem" />
                {
                    data.provider === null ? (
                        <>
                            <InputArea
                                title="Password"
                                name="password"
                                inputType="password"
                                placeholder="password..."
                                onChange={(e) => handleChange(e)}
                                value={userInfoForm.password}
                            />
                            <MarginBox marginBottom="2rem" />
                        </>
                    ) : <></>
                }
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
                        innerText="Update Profile"
                        onClick={(e) => {
                            e.preventDefault();
                            dispatch(modifyUserInfo({ ...userInfoForm }))
                                .then(res => {
                                    if (res.meta.requestStatus === 'fulfilled') {
                                        dispatch(fetchUserById(_id))
                                            .then(res => {
                                                if (res.meta.requestStatus === 'fulfilled') {
                                                    // toast.success("다시 로그인 해주세요!", {
                                                    //     autoClose: 2000,
                                                    // })
                                                    navigate(`/main`);
                                                }
                                            })
                                    }
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
}