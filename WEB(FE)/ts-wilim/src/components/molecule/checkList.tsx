import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import NoPlanError from "../../error/noPlanError";
import { List } from "../../schema/plan";
import { ReducerType } from "../../store/rootReducer";
import { toggleCompleted } from "../../store/slices/userPlanSlice";
import { Box } from "../atom/box";
import { Flex } from "../atom/flex";
import { MarginBox } from "../atom/marginBox";
import { Text } from "../atom/text";
import { Plan } from "./plan";

export const CheckList = () => {
    const { date, list } = useSelector((state: ReducerType) => state.userPlan);
    const planList = list.filter(plan => plan.date === date);
    const steadyPlan = planList.filter(item => item.steady === true);
    const nonSteadyPlan = planList.filter(item => item.steady === false);
    const dispatch = useDispatch();
    const handleToggle = (e: any) => {
        dispatch(toggleCompleted(e.target.id));
    }
    if(planList.length <= 0) return <NoPlanError />; 
    return (
        <Flex flexDirection="column" height="100%">
            <MarginBox marginBottom="1rem" />
            <Text innerText="Steady Plans" />
            {steadyPlan && <div style={{ width: "100%", height: "8vh", overflow: "auto" }}>
                {
                    steadyPlan.map((item: List, index: number) => (
                        <div key={index}>
                            <MarginBox marginBottom="0.5rem" />
                            <Plan completed={item.completed} detail={item.detail} onClick={(e: any) => handleToggle(e)} id={item._id} />
                        </div>
                    ))
                }
            </div>}
            <MarginBox marginBottom="1rem" />
            <Text innerText="Non-Steady Plans" />
            {nonSteadyPlan && <div style={{ width: "100%", height: "10vh", overflow: "auto" }}>
                {
                    nonSteadyPlan.map((item: List, index: number) => (
                        <div key={index}>
                            <MarginBox marginBottom="0.5rem" />
                            <Plan completed={item.completed} detail={item.detail} onClick={(e: any) => handleToggle(e)} id={item._id} />
                        </div>
                    ))
                }
            </div>}
        </Flex>
    )
}