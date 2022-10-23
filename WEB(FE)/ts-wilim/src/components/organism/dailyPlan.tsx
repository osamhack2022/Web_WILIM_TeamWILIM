import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { ReducerType } from "../../store/rootReducer"
import { switchDate } from "../../store/slices/userPlanSlice"
import { AngleLeft } from "../atom/angleLeft"
import { AngleRight } from "../atom/angleRight"
import { Flex } from "../atom/flex"
import { Line } from "../atom/line"
import { MarginBox } from "../atom/marginBox"
import { Text } from "../atom/text"
import { CheckList } from "../molecule/checkList"
import { BaseStyles } from "../theme"

export const DailyPlan = () => {
    const { date, list } = useSelector((state: ReducerType) => state.userPlan);
    const planList = list.filter(plan => plan.date === date);
    const dispatch = useDispatch();
    const checks = planList.filter((item) => item.completed === true).length;
    const completeColor = planList.length !== 0 && checks === planList.length ? BaseStyles.Color.Lime1 : BaseStyles.Color.Black1;
    return (
        <Flex flexDirection="column" justifyContent="space-between" height="100%">
            <div>
                <Flex justifyContent="space-between" alignItems="center">
                    <div onClick={() => dispatch(switchDate(-1))}>
                        <AngleLeft />
                    </div>
                    <Text innerText={`${date.substring(4, 6)}.${date.substring(6, 8)}`} color="white"
                        fontSize={BaseStyles.Text.Heading2}
                        fontWeight={BaseStyles.Text.Border0} />
                    <div onClick={() => dispatch(switchDate(+1))}>
                        <AngleRight />
                    </div>
                </Flex>
                <MarginBox marginBottom="1.5rem" />
                <Line width="100%" height="0.5px" color="#767676" />
                <Flex flexDirection="column" height="100%">
                    <CheckList />
                </Flex>
            </div>
            <Flex flexDirection="column" justifyContent="center" alignItems="center">
                <Text
                    innerText={`Got ${checks}/${planList.length}`}
                    color={completeColor}
                    fontWeight={BaseStyles.Text.Border2}
                    fontSize={BaseStyles.Text.Heading3}
                />
                <MarginBox marginBottom="1rem" />
            </Flex>
        </Flex >
    )
}