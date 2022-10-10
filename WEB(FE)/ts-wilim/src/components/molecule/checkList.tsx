import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { List } from "../../schema/plan";
import { ReducerType } from "../../store/rootReducer";
import { toggleCompleted } from "../../store/slices/userPlanSlice";
import { MarginBox } from "../atom/marginBox";
import { Plan } from "./plan";

export const CheckList = () => {
    const planList = useSelector((state: ReducerType) => state.userPlan.list);
    const dispatch = useDispatch();
    const handleToggle = (e: any) => {
        dispatch(toggleCompleted(e.target.id));
    }
    return (
        <>
            {planList && <>
                {
                    planList.map((item: List, index: number) => (
                        <div key={index}>
                            <MarginBox marginBottom="1rem" />
                            <Plan completed={item.completed} detail={item.detail} onClick={(e: any) => handleToggle(e)} id={item.detail} />
                        </div>
                    ))
                }
            </>}
        </>
    )
}