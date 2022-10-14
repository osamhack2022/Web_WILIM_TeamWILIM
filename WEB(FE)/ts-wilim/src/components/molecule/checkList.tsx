import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import NoPlanError from "../../error/noPlanError";
import { List } from "../../schema/plan";
import { ReducerType } from "../../store/rootReducer";
import { toggleCompleted } from "../../store/slices/userPlanSlice";
import { Flex } from "../atom/flex";
import { MarginBox } from "../atom/marginBox";
import { Text } from "../atom/text";
import { Plan } from "./plan";

export const CheckList = () => {
    const planList = useSelector((state: ReducerType) => state.userPlan.list);
    const steadyPlan = planList.filter(item => item.steady === true);
    const nonSteadyPlan = planList.filter(item => item.steady === false);
    const dispatch = useDispatch();
    const handleToggle = (e: any) => {
        dispatch(toggleCompleted(e.target.id));
    }
    if(planList.length <= 0) return <NoPlanError />; 
    return (
        <Flex flexDirection="column">
            <MarginBox marginBottom="2rem" />
            <Text innerText="Steady Plans" />
            {steadyPlan && <>
                {
                    steadyPlan.map((item: List, index: number) => (
                        <div key={index}>
                            <MarginBox marginBottom="1rem" />
                            <Plan completed={item.completed} detail={item.detail} onClick={(e: any) => handleToggle(e)} id={item._id} />
                        </div>
                    ))
                }
            </>}
            <MarginBox marginBottom="4rem" />
            <Text innerText="Non-Steady Plans" />
            {nonSteadyPlan && <>
                {
                    nonSteadyPlan.map((item: List, index: number) => (
                        <div key={index}>
                            <MarginBox marginBottom="1rem" />
                            <Plan completed={item.completed} detail={item.detail} onClick={(e: any) => handleToggle(e)} id={item._id} />
                        </div>
                    ))
                }
            </>}
        </Flex>
    )
}