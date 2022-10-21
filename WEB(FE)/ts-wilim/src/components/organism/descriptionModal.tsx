import styled from "styled-components"
import { Box } from "../atom/box"
import { Button } from "../atom/button"
import { Flex } from "../atom/flex"
import { Line } from "../atom/line"
import { MarginBox } from "../atom/marginBox"
import { ModalBackground } from "../atom/modalBackground"
import { Text } from "../atom/text"
import { BaseStyles } from "../theme"
import descriptions from "../../utils/descriptions"
import { useDispatch } from "react-redux"
import { AppThunkDispatch } from "../../store/store"
import { updateUserGoal } from "../../store/asyncThunks/updateUserGoal"
import { useSelector } from "react-redux"
import { ReducerType } from "../../store/rootReducer"
import { fetchUserGoalByUsername } from "../../store/asyncThunks/fetchUserGoalByUsername"
import { updateGoalDateInfo } from "../../store/slices/userGoalSlice"
import { goalSearchInfoToggle } from "../../store/slices/toggleSlice"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const DescriptionModal = () => {
    const appDispatch = useDispatch<AppThunkDispatch>();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getDates = async (url: string) => await axios.get(url).then(res => dispatch(updateGoalDateInfo(res.data.body.items)));
    const goal = useSelector((state: ReducerType) => state.toggle.goalSearchInfo);
    const { username } = useSelector((state: ReducerType) => state.userInfo);
    const description = descriptions.find(item => item.c.description?.jmNm === goal)?.c.description;
    const mdobligFldNm = description?.mdobligFldNm.split(".");
    return (
        <ModalBackground>
            <Flex justifyContent="center" alignItems="center">
                <ModalWrapper>
                    <Box width="calc(100% - 2rem)" height="100%">
                        <Flex flexDirection="column" justifyContent="flex-start" alignItems="center" height="100%">
                            <MarginBox marginBottom="0.5rem" />
                            {
                                <>
                                    <Flex flexDirection="column" width="80%">
                                        <Flex width="100%" alignItems="center">
                                            <Text
                                                innerText={description?.jmNm}
                                                fontSize={BaseStyles.Text.Heading2}
                                                fontWeight={BaseStyles.Text.Border1}
                                                textAlign="center"
                                            />
                                        </Flex>
                                        <MarginBox marginBottom="0.5rem" />
                                        <Line
                                            width="100%"
                                            height="1px"
                                            color={BaseStyles.Color.Black0}
                                        />
                                        <MarginBox marginBottom="0.5rem" />
                                        <Text innerText={`${mdobligFldNm && mdobligFldNm.length >= 1 ? `#${mdobligFldNm[0]}` : ""} ${mdobligFldNm && mdobligFldNm.length >= 2 ? `#${mdobligFldNm[1]}` : ""}`} textAlign="center" fontSize={BaseStyles.Text.Heading4} fontWeight={BaseStyles.Text.Border3} color={BaseStyles.Color.Black0} />
                                        <MarginBox marginBottom="2rem" />
                                        <Text

                                            innerText="어떤 직업인가요?"
                                            fontSize={BaseStyles.Text.Heading3}
                                            fontWeight={BaseStyles.Text.Border2}
                                            textAlign="left"
                                        />
                                        <MarginBox marginBottom="0.5rem" />
                                        <Text innerText={`${description?.job}`} fontSize={BaseStyles.Text.Heading4} fontWeight={BaseStyles.Text.Border3} />
                                        {
                                            description?.summary !== "" ? (
                                                <>
                                                    <MarginBox marginBottom="3rem" />
                                                    <Text
                                                        innerText="제정 의도"
                                                        fontSize={BaseStyles.Text.Heading3}
                                                        fontWeight={BaseStyles.Text.Border2}
                                                        textAlign="left"
                                                    />
                                                    <MarginBox marginBottom="0.5rem" />
                                                    <Text innerText={`${description?.summary}`} fontSize={BaseStyles.Text.Heading4} fontWeight={BaseStyles.Text.Border3} />
                                                </>
                                            ) : <></>
                                        }
                                        {
                                            description?.trend !== "" ? (
                                                <>
                                                    <MarginBox marginBottom="3rem" />
                                                    <Text

                                                        innerText="어떤 역량이 필요한가요?"
                                                        fontSize={BaseStyles.Text.Heading3}
                                                        fontWeight={BaseStyles.Text.Border2}
                                                        textAlign="left"
                                                    />
                                                    <MarginBox marginBottom="0.5rem" />
                                                    <Text innerText={`${description?.trend}`} fontSize={BaseStyles.Text.Heading4} fontWeight={BaseStyles.Text.Border3} /> </>
                                            ) : <></>
                                        }
                                        <MarginBox marginBottom="3rem" />
                                        <Text

                                            innerText="관련 분야 및 직업"
                                            fontSize={BaseStyles.Text.Heading3}
                                            fontWeight={BaseStyles.Text.Border2}
                                            textAlign="left"
                                        />
                                        <MarginBox marginBottom="0.5rem" />
                                        <Text innerText={`${description?.career}`} fontSize={BaseStyles.Text.Heading4} fontWeight={BaseStyles.Text.Border3} />
                                        <MarginBox marginBottom="2rem" />
                                        <Text

                                            innerText={`|시행기관 - ${description?.implNm}`}
                                            fontSize={BaseStyles.Text.Heading4}
                                            fontWeight={BaseStyles.Text.Border1}
                                            textAlign="left"
                                        />
                                        <MarginBox marginBottom="0.5rem" />
                                        <Text

                                            innerText={`|검증기관 - ${description?.instiNm}`}
                                            fontSize={BaseStyles.Text.Heading4}
                                            fontWeight={BaseStyles.Text.Border1}
                                            textAlign="left"
                                        />
                                        <MarginBox marginBottom="2rem" />
                                        <Flex justifyContent="center" alignItems="center">
                                            <Button onClick={() => {
                                                appDispatch(updateUserGoal({ username, goalElement: description!.jmNm }))
                                                    .then(res => {
                                                        if (res.meta.requestStatus === 'fulfilled') {
                                                            appDispatch(fetchUserGoalByUsername(username))
                                                            .then(res => {
                                                                if (res.meta.requestStatus === "fulfilled") {
                                                                  getDates(res.payload.dateUrl);
                                                                  dispatch(goalSearchInfoToggle(res.payload.name));
                                                                  navigate('/goal');
                                                                }
                                                              })
                                                        }
                                                    })
                                            }} innerText="Select" width="100%" height="40px" backgroundColor={BaseStyles.Color.Orange2} color="white" />
                                        </Flex>
                                        <MarginBox marginBottom="1rem" />
                                    </Flex>
                                </>
                            }
                        </Flex>
                    </Box>
                </ModalWrapper>
            </Flex>
        </ModalBackground>
    )
}

const ModalWrapper = styled.div`
    width: 40vw;
    height: auto;
    overflow: auto;
    border-radius: 6px;
    max-height: 600px;
    background: none;
    @media (max-width: 1080px) {
        width: 90vw;
    }
`