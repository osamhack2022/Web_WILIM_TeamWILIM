import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ReducerType } from "../../store/rootReducer";
import { desModalToggle, examRoundToggle, goalDateToggle, goalSearchInfoToggle, goalSelectToggle } from "../../store/slices/toggleSlice";
import { AngleRight } from "../atom/angleRight";
import { Box } from "../atom/box";
import { Flex } from "../atom/flex";
import { Input } from "../atom/input";
import { MarginBox } from "../atom/marginBox";
import { Text } from "../atom/text";
import { Title } from "../molecule/title";
import { BaseStyles } from "../theme";

export const GoalTemplate = () => {
    const dispatch = useDispatch();
    const isBoxOpen = useSelector((state: ReducerType) => state.toggle.examRound);
    const isGoalSelectorOpen = useSelector((state: ReducerType) => state.toggle.goalSelect);
    const currentGoalDate = useSelector((state: ReducerType) => state.toggle.goalDate);
    const goal = useSelector((state: ReducerType) => state.userGoal.name);
    const goalDates = useSelector((state: ReducerType) => {
        if (state.userGoal.isQnet === false) return state.userGoal.isQnetFalseDate.items;
        return state.userGoal.dates;
    });
    const [options, setOptions] = useState<string[]>([]);
    const [searchWord, setSearchWord] = useState<string>("");
    const goalList = searchWord === "" ? options : options.slice(0, options.length / 2).filter(item => item.startsWith(searchWord));
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
            <div onClick={() => dispatch(goalSelectToggle())}>
                <Box width="calc(100% - 2rem)" borderRadius="6px 6px 0 0">
                    <Flex justifyContent="center" alignItems="center">
                        <MarginBox marginLeft="16px" />
                        <Text innerText={goal} fontSize={BaseStyles.Text.Heading2} />
                    </Flex>
                </Box>
            </div>
            <Box width="calc(100% - 2rem)" borderRadius="0 0 6px 6px" backgroundColor="#494949" height={isGoalSelectorOpen ? "50vh" : "0"} style={{ paddingTop: isGoalSelectorOpen ? "1rem" : "0", paddingBottom: isGoalSelectorOpen ? "1rem" : "0", overflow: 'auto' }}>
                <Flex flexDirection="column" justifyContent="flex-start" height="100%">
                    <Input type="text" width="calc(100% - 2.5rem)" onChange={(e: any) => setSearchWord(e.target.value)} value={searchWord} placeholder="Input your keyword" />
                    <MarginBox marginBottom="1rem" />
                    <Flex flexDirection="column" justifyContent="flex-start" height="100%" overflow="auto">
                        {
                            goalList.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <Flex width="100%" justifyContent="flex-start" alignItems="center">
                                            <Text innerText={item} fontSize={BaseStyles.Text.Heading4} onClick={() => {
                                                dispatch(desModalToggle())
                                                dispatch(goalSearchInfoToggle(item))
                                            }} />
                                        </Flex>
                                        <MarginBox marginBottom="1rem" />
                                    </div>
                                )
                            })
                        }
                    </Flex>
                </Flex>
            </Box>
            <MarginBox marginBottom="2rem" />
            <div onClick={() => dispatch(examRoundToggle())}>
                <Box width="calc(100% - 2rem)" borderRadius="6px 6px 0 0">
                    <Flex justifyContent="center" alignItems="center">
                        <MarginBox marginLeft="16px" />
                        <Text innerText="회차 선택하기" fontSize={BaseStyles.Text.Heading2} />
                    </Flex>
                </Box>
            </div>
            <Box width="calc(100% - 2rem)" borderRadius="0 0 6px 6px" backgroundColor="#767676" height={isBoxOpen ? "50vh" : "0"} style={{ paddingTop: isBoxOpen ? "1rem" : "0", paddingBottom: isBoxOpen ? "1rem" : "0", overflow: "auto" }}>
                <Flex flexDirection="column" justifyContent="flex-start" height="100%">
                    {
                        goalDates!.map((item, index) => {
                            return (
                                <Flex flexDirection="column" justifyContent="center" alignItems="center" key={index}>
                                    <div onClick={() => {
                                        if (currentGoalDate === item.description) {
                                            dispatch(goalDateToggle(""))
                                        } else {
                                            dispatch(goalDateToggle(item.description))
                                        }
                                    }}>
                                        <Flex justifyContent="space-between" alignItems="center">
                                            <MarginBox marginLeft="16px" />
                                            <Text innerText={item.description} fontSize={BaseStyles.Text.Heading3} />
                                        </Flex>
                                    </div>
                                    <Box backgroundColor="#61616180" width="100%" borderRadius="0 0 6px 6px" height={currentGoalDate === item.description ? "30vh" : "0"} style={{ paddingTop: currentGoalDate === item.description ? "1rem" : "0", paddingBottom: currentGoalDate === item.description ? "1rem" : "0" }}>
                                        <MarginBox marginLeft="5vw" />
                                        <Flex flexDirection="column" justifyContent="space-evenly" alignItems="flex-start">
                                            <Text innerText={`필기 원서접수: ${item.docRegStartDt} ~ ${item.docRegEndDt}`} fontSize={BaseStyles.Text.Heading4} />
                                            <MarginBox marginBottom="0.5rem" />
                                            <Text innerText={`필기시험: ${item.docExamStartDt} ~ ${item.docExamEndDt}`} fontSize={BaseStyles.Text.Heading4} />
                                            <MarginBox marginBottom="0.5rem" />
                                            <Text innerText={`필기시험 합격자 발표: ${item.docPassDt}`} fontSize={BaseStyles.Text.Heading4} />
                                            <MarginBox marginBottom="0.5rem" />
                                            {
                                                item.docRegStartDt !== undefined ? (
                                                    <>
                                                        <Text innerText={`실기(작업)/면접 시험 원서접수: ${item.pracRegStartDt} ~ ${item.pracRegEndDt}`} fontSize={BaseStyles.Text.Heading4} />
                                                        <MarginBox marginBottom="0.5rem" />
                                                    </>
                                                ) : <></>
                                            }
                                            {
                                                item.docRegStartDt !== undefined ? (
                                                    <>
                                                        <Text innerText={`실기(작업)/면접 시험: ${item.pracExamStartDt} ~ ${item.pracExamEndDt}`} fontSize={BaseStyles.Text.Heading4} />
                                                        <MarginBox marginBottom="0.5rem" />
                                                    </>
                                                ) : <></>
                                            }
                                            {
                                                item.docRegStartDt !== undefined ? (
                                                    <>
                                                        <Text innerText={`실기(작업)/면접 발표: ${item.pracPassDt}`} fontSize={BaseStyles.Text.Heading4} />
                                                    </>
                                                ) : <></>
                                            }
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
