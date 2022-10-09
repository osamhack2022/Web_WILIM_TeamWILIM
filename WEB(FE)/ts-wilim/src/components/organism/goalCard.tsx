import { useSelector } from "react-redux";
import { ReducerType } from "../../store/rootReducer";
import { Box } from "../atom/box";
import { Flex } from "../atom/flex";
import { MarginBox } from "../atom/marginBox";
import { Text } from "../atom/text";
import { BaseStyles } from "../theme";

export const GoalCard = () => {
  const goal = useSelector((state: ReducerType) => state.userInfo.goal);
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
      <Box
        width="calc(100% - 2rem)"
        borderRadius="0 0 0.5rem 0.5rem"
        backgroundColor={BaseStyles.Color.Red1}
      >
        <Flex flexDirection="column" alignItems="center">
          <Text
            innerText="D-13"
            color="white"
            fontSize={BaseStyles.Text.Heading2}
            fontWeight={BaseStyles.Text.Border2}
          />
          <MarginBox marginBottom="0.5rem" />
          <Text
            innerText="시간이 얼마 안 남았어요!"
            color="white"
            fontSize={BaseStyles.Text.Heading3}
            fontWeight={BaseStyles.Text.Border1}
          />
        </Flex>
      </Box>
    </Flex>
  );
};
