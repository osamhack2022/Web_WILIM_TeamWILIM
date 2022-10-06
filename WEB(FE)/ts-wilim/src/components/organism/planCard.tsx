import { Box } from "../atom/box";
import { Flex } from "../atom/flex";
import { Line } from "../atom/line";
import { MarginBox } from "../atom/marginBox";
import { Text } from "../atom/text";
import { Plan } from "../molecule/plan";
import { BaseStyles } from "../theme";
import { useDispatch, useSelector } from 'react-redux';
import { toggleCompleted } from '../../store/slices/userPlanSlice';
import { ReducerType } from "../../store/rootReducer";
import { List } from "../../schema/plan";

export const PlanCard = () => {
  const planList = useSelector((state: ReducerType) => state.userPlan.list);
  const checks = planList.filter((item) => item.completed === true).length;
  const completeColor = checks === planList.length ? BaseStyles.Color.Lime1 : BaseStyles.Color.Black1;
  const dispatch = useDispatch();
  const handleToggle = (e: any) => {
    dispatch(toggleCompleted(e.target.id));
  }
  return (
    <Box
      width="calc(100% - 2rem)"
      borderRadius="0.5rem"
      backgroundColor={BaseStyles.Color.Black4}
    >
      <Flex flexDirection="column" width="100%">
        <Flex justifyContent="space-between">
          <Text
            innerText="8.24"
            color="white"
            fontSize={BaseStyles.Text.Heading3}
            fontWeight={BaseStyles.Text.Border1}
          />
          <Text
            innerText={`Got ${checks}/3`}
            color={completeColor}
            fontWeight={BaseStyles.Text.Border2}
            fontSize={BaseStyles.Text.Heading3}
          />
        </Flex>
        <MarginBox marginBottom="0.5rem" />
        <Line width="100%" height="1px" color={BaseStyles.Color.Black0} />
        {planList && <>
          {
            planList.map((item: List, index: number) => (
              <div key={index}>
                <MarginBox marginBottom="1rem" />
                <Plan completed={item.completed} detail={item.detail} onClick={(e) => handleToggle(e)} id={item.detail} />
              </div>
            ))
          }
        </>}
      </Flex>
    </Box>
  );
};
