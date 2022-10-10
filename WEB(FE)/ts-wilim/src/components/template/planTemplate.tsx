import { useSelector } from "react-redux";
import { ReducerType } from "../../store/rootReducer";
import { AngleLeft } from "../atom/angleLeft";
import { AngleRight } from "../atom/angleRight";
import { Box } from "../atom/box";
import { Flex } from "../atom/flex";
import { Line } from "../atom/line";
import { MarginBox } from "../atom/marginBox";
import { Text } from "../atom/text";
import { CheckList } from "../molecule/checkList";
import { Title } from "../molecule/title";
import { BaseStyles } from "../theme";

export const PlanTemplate = () => {
    const planList = useSelector((state: ReducerType) => state.userPlan.list);
    const checks = planList.filter((item) => item.completed === true).length;
    const completeColor = checks === planList.length ? BaseStyles.Color.Lime1 : BaseStyles.Color.Black1;
    return (
        <>
            <Title innerText="Plan" />
            <MarginBox marginBottom="2rem" />
            <Box width="calc(100% - 2rem)" borderRadius="6px">
                <Flex flexDirection="column" justifyContent="center">
                    <MarginBox marginBottom="0.5rem" />
                    <Flex justifyContent="space-between" alignItems="center">
                        <AngleLeft />
                        <Text innerText="10.10" color="white"
                            fontSize={BaseStyles.Text.Heading2}
                            fontWeight={BaseStyles.Text.Border0} />
                        <AngleRight />
                    </Flex>
                    <MarginBox marginBottom="1.5rem" />
                    <Line width="100%" height="0.5px" color="#767676" />
                    <CheckList />
                    <MarginBox marginBottom="1.5rem" />
                    <Flex justifyContent="center" alignItems="center">
                        <Text
                            innerText={`Got ${checks}/3`}
                            color={completeColor}
                            fontWeight={BaseStyles.Text.Border2}
                            fontSize={BaseStyles.Text.Heading3}
                        />
                    </Flex>
                </Flex>
            </Box>
        </>
    );
};
