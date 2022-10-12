import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ReducerType } from "../../store/rootReducer";
import { examRoundToggle } from "../../store/slices/toggleSlice";
import { AngleRight } from "../atom/angleRight";
import { Box } from "../atom/box";
import { Flex } from "../atom/flex";
import { MarginBox } from "../atom/marginBox";
import { Text } from "../atom/text";
import { ExamDate } from "../molecule/examDate";
import { Title } from "../molecule/title";
import { BaseStyles } from "../theme";

export const GoalTemplate = () => {
    const dispatch = useDispatch();
    const isBoxOpen = useSelector((state: ReducerType) => state.toggle.examRound);
    return (
        <Flex flexDirection="column">
            <Title innerText="Goal" />
            <MarginBox marginBottom="2rem" />
            <Box width="calc(100% - 2rem)">
                <Text innerText="조주기능사" fontSize={BaseStyles.Text.Heading2} />
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
            <Box width="calc(100% - 2rem)" borderRadius="0 0 6px 6px" backgroundColor="#767676" height={isBoxOpen ? "50vh" : "0"} style={{ paddingTop: isBoxOpen ? "1rem": "0", paddingBottom: isBoxOpen ? "1rem": "0" }}>
                <Flex flexDirection="column" justifyContent="flex-start" height="100%">
                    <ExamDate examRound="2022년 제 126회차" startAt="20221004" dDay="D - 5" />
                    <ExamDate examRound="2022년 제 127회차" startAt="20221021" dDay="D + 10" />
                </Flex>
            </Box>
        </Flex>
    );
};
