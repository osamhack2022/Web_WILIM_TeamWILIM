import { useSelector } from "react-redux"
import { ReducerType } from "../../store/rootReducer"
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
    const checks = list.filter((item) => item.completed === true).length;
    const completeColor = checks === list.length ? BaseStyles.Color.Lime1 : BaseStyles.Color.Black1;
    return (
        <Flex flexDirection="column" justifyContent="space-between" height="100%">
            <div>
                <Flex justifyContent="space-between" alignItems="center">
                    <AngleLeft />
                    <Text innerText={`${date.substring(4, 6)}.${date.substring(6, 8)}`} color="white"
                        fontSize={BaseStyles.Text.Heading2}
                        fontWeight={BaseStyles.Text.Border0} />
                    <AngleRight />
                </Flex>
                <MarginBox marginBottom="1.5rem" />
                <Line width="100%" height="0.5px" color="#767676" />
                <CheckList />
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
        </Flex>
    )
}