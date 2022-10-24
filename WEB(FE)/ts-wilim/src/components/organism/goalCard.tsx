import { useSelector } from "react-redux";
import { ReducerType } from "../../store/rootReducer";
import GetFasetestSchedule from "../../utils/getFastestSchedule";
import { Box } from "../atom/box";
import { Flex } from "../atom/flex";
import { Text } from "../atom/text";
import { BaseStyles } from "../theme";

export const GoalCard = () => {
  const goal = useSelector((state: ReducerType) => state.userGoal.name);
  return (
    <Flex flexDirection="column" width="100%" alignItems="center">
      <Box
        width="calc(100% - 2rem)"
        borderRadius="0.5rem 0.5rem 0 0"
        backgroundColor={BaseStyles.Color.Black4}
      >
        <Text
          innerText={goal}
          color="white"
          fontSize={BaseStyles.Text.Heading3}
          fontWeight={BaseStyles.Text.Border1}
        />
      </Box>
      <GetFasetestSchedule />
    </Flex>
  );
};
