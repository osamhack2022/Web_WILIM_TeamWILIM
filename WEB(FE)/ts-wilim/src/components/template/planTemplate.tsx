import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ReducerType } from "../../store/rootReducer";
import { newPlanToggle } from "../../store/slices/toggleSlice";
import { Box } from "../atom/box";
import { Flex } from "../atom/flex";
import { MarginBox } from "../atom/marginBox";
import { SquarePlus } from "../atom/squarePlus";
import { Title } from "../molecule/title";
import { DailyPlan } from "../organism/dailyPlan";
import { NewPlanForm } from "../organism/newPlanForm";

export const PlanTemplate = () => {
    const isNewPlan = useSelector((state: ReducerType) => state.toggle.newPlan);
    const dispatch = useDispatch();
    return (
        <>
            <Title innerText="Plan" />
            <MarginBox marginBottom="2rem" />
            <Box width="calc(100% - 2rem)" borderRadius="6px" height={isNewPlan ? "440px" : "50vh"}>
                <Flex flexDirection="column" alignItems="flex-start" height="100%">
                    <Flex flexDirection="column" height="100%">
                        <MarginBox marginBottom="0.5rem" />
                        {isNewPlan ? <NewPlanForm /> : <DailyPlan />}
                        <Flex flexDirection="column" justifyContent="center" alignItems="center">
                            <div onClick={() => dispatch(newPlanToggle())} style={{ marginTop: "0.5rem", transform: isNewPlan ? "rotate(45deg)" : undefined, transitionDuration: "0.5s" }}><SquarePlus /></div>
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
};

//            <div onTouchStart={(e) => {
//     startPos = e.touches[0].pageX;
//     console.log(startPos);
// }} onTouchEnd={(e) => {
//     const sum = curPos + (e.changedTouches[0].pageX - startPos);
//     console.log(sum);
//     if (sum < -100) {
//         dispatch(switchDate(-1))
//     } else if (sum > 100) {
//         dispatch(switchDate(+1))
//     }
// }}>