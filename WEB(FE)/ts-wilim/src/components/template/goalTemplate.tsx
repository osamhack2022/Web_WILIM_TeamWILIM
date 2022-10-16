import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ReducerType } from "../../store/rootReducer";
import { examRoundToggle, goalDateToggle, goalSelectToggle } from "../../store/slices/toggleSlice";
import { AngleRight } from "../atom/angleRight";
import { Box } from "../atom/box";
import { Flex } from "../atom/flex";
import { MarginBox } from "../atom/marginBox";
import { Text } from "../atom/text";
import { Title } from "../molecule/title";
import { BaseStyles } from "../theme";
import { AppThunkDispatch } from "../../store/store";
import { updateUserGoal } from "../../store/asyncThunks/updateUserGoal";
import { fetchUserGoalByUsername } from "../../store/asyncThunks/fetchUserGoalByUsername";

export const GoalTemplate = () => {
    const dispatch = useDispatch();
    const appDispatch = useDispatch<AppThunkDispatch>();
    const isBoxOpen = useSelector((state: ReducerType) => state.toggle.examRound);
    const isGoalSelectorOpen = useSelector((state: ReducerType) => state.toggle.goalSelect);
    const currentGoalDate = useSelector((state: ReducerType) => state.toggle.goalDate);
    const { username } = useSelector((state: ReducerType) => state.userInfo);
    const goal = useSelector((state: ReducerType) => state.userGoal.name);
    const goalDates = useSelector((state: ReducerType) => state.userGoal.dates);
    const [options, setOptions] = useState<string[]>([]);
    const res = async () => await axios("https://wilimbackend.tk/userGoalElementAPI/ctfInfo").then(res => {
        for (let i = 0; i < res.data.length; i++) {
            setOptions(prev => prev.concat(res.data[i].name));
        }
    });
    useEffect(() => {
        res();
    }, [])

    return (
        <Flex flexDirection="column">
            <Title innerText="Goal" />
            <MarginBox marginBottom="2rem" />
            <Box width="calc(100% - 2rem)" borderRadius="6px 6px 0 0">
                <Flex justifyContent="space-between" alignItems="center">
                    <MarginBox marginLeft="16px" />
                    <Text innerText={goal} fontSize={BaseStyles.Text.Heading2} />
                    <div onClick={() => dispatch(goalSelectToggle())} style={{ transform: isGoalSelectorOpen ? "rotate(90deg)" : undefined, transitionDuration: "0.5s" }}>
                        <AngleRight />
                    </div>
                </Flex>
            </Box>
            <Box width="calc(100% - 2rem)" borderRadius="0 0 6px 6px" backgroundColor="#494949" height={isGoalSelectorOpen ? "50vh" : "0"} style={{ paddingTop: isGoalSelectorOpen ? "1rem" : "0", paddingBottom: isGoalSelectorOpen ? "1rem" : "0", overflow: 'auto' }}>
                <Flex flexDirection="column" justifyContent="flex-start" height="100%">
                    {
                        options.map((item, index) => {
                            return (
                                <>
                                    <Flex width="100%" justifyContent="flex-start" alignItems="center" key={index}>
                                        <Text innerText={item} fontSize={BaseStyles.Text.Heading4} onClick={() => {
                                            appDispatch(updateUserGoal({ username, goalElement: item }))
                                                .then(res => {
                                                    if (res.meta.requestStatus === 'fulfilled') {
                                                        appDispatch(fetchUserGoalByUsername(username))
                                                    }
                                                })
                                        }} />
                                    </Flex>
                                    <MarginBox marginBottom="1rem" />
                                </>
                            )
                        })
                    }
                </Flex>
            </Box>
            <MarginBox marginBottom="2rem" />
            <Box width="calc(100% - 2rem)" borderRadius="6px 6px 0 0">
                <Flex justifyContent="space-between" alignItems="center">
                    <MarginBox marginLeft="16px" />
                    <Text innerText="날짜 선택하기" fontSize={BaseStyles.Text.Heading2} />
                    <div onClick={() => dispatch(examRoundToggle())} style={{ transform: isBoxOpen ? "rotate(90deg)" : undefined, transitionDuration: "0.5s" }}>
                        <AngleRight />
                    </div>
                </Flex>
            </Box>
            <Box width="calc(100% - 2rem)" borderRadius="0 0 6px 6px" backgroundColor="#767676" height={isBoxOpen ? "50vh" : "0"} style={{ paddingTop: isBoxOpen ? "1rem" : "0", paddingBottom: isBoxOpen ? "1rem" : "0", overflow: "auto" }}>
                <Flex flexDirection="column" justifyContent="flex-start" height="100%">
                    {
                        goalDates.map((item, index) => {
                            return (
                                <Flex flexDirection="column" justifyContent="center" alignItems="center" key={index}>
                                    <Flex justifyContent="space-between" alignItems="center">
                                        <MarginBox marginLeft="16px" />
                                        <Text innerText={item.description} fontSize={BaseStyles.Text.Heading3} />
                                        <div onClick={() => {
                                            if (currentGoalDate === item.description) {
                                                dispatch(goalDateToggle(""))
                                            } else {
                                                dispatch(goalDateToggle(item.description))
                                            }
                                        }} style={{ transform: currentGoalDate === item.description ? "rotate(90deg)" : undefined, transitionDuration: "0.5s" }}>
                                            <AngleRight />
                                        </div>
                                    </Flex>
                                    <Box backgroundColor="#61616180" width="100%" borderRadius="0 0 6px 6px" height={currentGoalDate === item.description ? "10rem" : "0"} style={{ paddingTop: currentGoalDate === item.description ? "1rem" : "0", paddingBottom: currentGoalDate === item.description ? "1rem" : "0" }}>
                                        <MarginBox marginLeft="5vw" />
                                        <Flex flexDirection="column" justifyContent="space-evenly" alignItems="flex-start">
                                            <Text innerText={`필기 원서접수: ${item.docRegStartDt} ~ ${item.docRegEndDt}`} fontSize={BaseStyles.Text.Heading4} />
                                            <MarginBox marginBottom="0.5rem" />
                                            <Text innerText={`필기시험: ${item.docExamStartDt} ~ ${item.docExamEndDt}`} fontSize={BaseStyles.Text.Heading4} />
                                            <MarginBox marginBottom="0.5rem" />
                                            <Text innerText={`필기시험 합격자 발표: ${item.docPassDt}`} fontSize={BaseStyles.Text.Heading4} />
                                            <MarginBox marginBottom="0.5rem" />
                                            <Text innerText={`실기(작업)/면접 시험 원서접수: ${item.pracRegStartDt} ~ ${item.pracRegEndDt}`} fontSize={BaseStyles.Text.Heading4} />
                                            <MarginBox marginBottom="0.5rem" />
                                            <Text innerText={`실기(작업)/면접 시험: ${item.pracExamStartDt} ~ ${item.pracExamEndDt}`} fontSize={BaseStyles.Text.Heading4} />
                                            <MarginBox marginBottom="0.5rem" />
                                            <Text innerText={`실기(작업)/면접 발표: ${item.pracPassDt}`} fontSize={BaseStyles.Text.Heading4} />
                                        </Flex>
                                    </Box>
                                    <MarginBox marginBottom="2rem" />
                                </Flex>
                            )
                        })
                    }
                </Flex>
            </Box>
        </Flex>
    );
};
