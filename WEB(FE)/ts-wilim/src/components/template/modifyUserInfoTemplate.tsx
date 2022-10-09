import { useEffect, useState } from "react";
import { BaseStyles } from "../theme";
import { User } from '../../schema/user';
import { Text } from "../atom/text";
import { MarginBox } from "../atom/marginBox";
import { Line } from "../atom/line";
import { InputArea } from "../molecule/inputArea";
import { Flex } from "../atom/flex";
import { Input } from "../atom/input";
import { Button } from "../atom/button";
import { useSelector } from "react-redux";
import { ReducerType } from "../../store/rootReducer";
import { useDispatch } from "react-redux";
import { AppThunkDispatch } from "../../store/store";
import { modifyUserInfo } from "../../store/asyncThunks/modifyUserInfo";
import { useParams } from "react-router-dom";
import { BackArrow } from "../molecule/backArrow";
import { fetchUserById } from "../../store/asyncThunks/fetchUserById";

export const ModifyUserInfoTemplate = () => {
    const _id = useParams()._id!;
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
    const buttonColor = (type: string) =>
        type === userInfoForm.serviceType
            ? BaseStyles.Color.Purple2
            : BaseStyles.Color.Purple1;

    return (
        <>
            <BackArrow to={`/${username}`} />
            <MarginBox marginBottom="1rem" />
            <Text
                innerText="Update Account"
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
                    title="User Name"
                    name="username"
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
                        innerText="Update Information"
                        onClick={(e) => {
                            e.preventDefault();
                            dispatch(modifyUserInfo({ ...userInfoForm }));
                            dispatch(fetchUserById(_id));
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