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
    let startPos = 0;
    let curPos = 0;
    const { date, list } = useSelector((state: ReducerType) => state.userPlan);
    const dispatch = useDispatch();
    const checks = list.filter((item) => item.completed === true).length;
    const completeColor = checks === list.length ? BaseStyles.Color.Lime1 : BaseStyles.Color.Black1;
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
                <div onTouchStart={(e) => {
                    startPos = e.touches[0].pageX;
                }}
                    onTouchEnd={(e) => {
                        const sum = curPos + (e.changedTouches[0].pageX - startPos);
                        console.log(sum);
                        if (sum < -100) {
                            dispatch(switchDate(-1))
                        } else if (sum > 100) {
                            dispatch(switchDate(+1))
                        }
                    }}>
                    <CheckList />
                </div>
            </div>
            <Flex flexDirection="column" justifyContent="center" alignItems="center">
                <Text
                    innerText={`Got ${checks}/${list.length}`}
                    color={completeColor}
                    fontWeight={BaseStyles.Text.Border2}
                    fontSize={BaseStyles.Text.Heading3}
                />
                <MarginBox marginBottom="1.5rem" />
            </Flex>
        </Flex >
    )
}