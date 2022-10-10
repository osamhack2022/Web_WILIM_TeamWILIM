import { Box } from "../atom/box";
import { Flex } from "../atom/flex";
import { Line } from "../atom/line";
import { MarginBox } from "../atom/marginBox";
import { Text } from "../atom/text";
import { BaseStyles } from "../theme";
import { useSelector } from 'react-redux';
import { ReducerType } from "../../store/rootReducer";
import { CheckList } from "../molecule/checkList";

export const PlanCard = () => {
  const planList = useSelector((state: ReducerType) => state.userPlan.list);
  const checks = planList.filter((item) => item.completed === true).length;
  const completeColor = checks === planList.length ? BaseStyles.Color.Lime1 : BaseStyles.Color.Black1;
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
        <CheckList />
      </Flex>
    </Box>
  );
};
