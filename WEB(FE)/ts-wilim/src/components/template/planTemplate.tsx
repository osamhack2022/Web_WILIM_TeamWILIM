import { useSelector } from "react-redux";
import { ReducerType } from "../../store/rootReducer";
import { Box } from "../atom/box";
import { Flex } from "../atom/flex";
import { MarginBox } from "../atom/marginBox";
import { Title } from "../molecule/title";
import { DailyPlan } from "../organism/dailyPlan";
import { NewPlanForm } from "../organism/newPlanForm";

export const PlanTemplate = () => {
    const isNewPlan = useSelector((state: ReducerType) => state.toggle.newPlan);
    return (
        <>
            <Title innerText="Plan" />
            <MarginBox marginBottom="2rem" />
            <Box width="calc(100% - 2rem)" borderRadius="6px" height={isNewPlan ? "359.5px" : "50vh"}>
                <Flex flexDirection="column" height="100%">
                    <MarginBox marginBottom="0.5rem" />
                    {isNewPlan ? <NewPlanForm /> : <DailyPlan />}
                </Flex>
            </Box>
        </>
    );
};
