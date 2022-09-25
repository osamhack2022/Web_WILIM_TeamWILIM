import { useState } from "react";
import { Box } from "../atom/box";
import { Flex } from "../atom/flex";
import { Line } from "../atom/line";
import { MarginBox } from "../atom/marginBox";
import { Text } from "../atom/text";
import { Plan } from "../molecule/plan";
import { BaseStyles } from "../theme";
import { useDispatch, useSelector } from 'react-redux';
import { toggleCompleted } from '../../store/slices/userPlanSlice';

export const PlanCard = () => {
  const planList = useSelector(state => state.userPlan.list);
  console.log(planList);
  // const [planList, setPlanList] = useState(plans);
  const dispatch = useDispatch();
  const handleToggle = (e) => {
    dispatch(toggleCompleted(e.target.id));
  }
  return (
    <Box
      width="80%"
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
            innerText="Got 2/3"
            color={BaseStyles.Color.Black1}
            fontWeight={BaseStyles.Text.Border2}
            fontSize={BaseStyles.Text.Heading3}
          />
        </Flex>
        <MarginBox marginBottom="0.5rem" />
        <Line width="100%" height="1px" color={BaseStyles.Color.Black0} />
        {planList &&
          planList.map(({ completed, detail }, index) => 
            <div key={index}>
              <MarginBox marginBottom="1rem" />
              <Plan completed={completed} detail={detail} onClick={(e) => handleToggle(e)} id={detail} />
            </div>
          )}
      </Flex>
    </Box>
  );
};