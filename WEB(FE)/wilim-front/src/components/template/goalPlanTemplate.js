import { Flex } from "../atom/flex";
import { Line } from "../atom/line";
import { MarginBox } from "../atom/marginBox";
import { Text } from "../atom/text";
import { GoalCard } from "../organism/goalCard";
import { PlanCard } from "../organism/planCard";
import { BaseStyles } from "../theme";
import { useSelector } from "react-redux";

export const GoalPlanTemplate = () => {
  const username = useSelector((state) => state.userInfo.username);
  return (
    <Flex flexDirection="column" alignItems="center">
      <Flex flexDirection="column" alignItems="center" width="80%">
        <Flex width="calc(100% + 2rem)">
          <Text
            innerText={`${username} 님`}
            color="white"
            fontSize={BaseStyles.Text.Heading2}
            fontWeight={BaseStyles.Text.Border0}
          />
        </Flex>
        <MarginBox marginBottom="0.5rem" />
        <Line
          width="calc(100% + 2rem)"
          height="1px"
          color={BaseStyles.Color.Black0}
        />
      </Flex>
      <MarginBox marginBottom="2rem" />
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        width="calc(80% + 2rem)"
      >
        <Text
          innerText="Goal"
          color="white"
          fontSize={BaseStyles.Text.Heading2}
          fontWeight={BaseStyles.Text.Border0}
        />
      </Flex>
      <MarginBox marginBottom="1rem" />
      <GoalCard />
      <MarginBox marginBottom="2rem" />
      <Line
          width="30%"
          height="1px"
          color={BaseStyles.Color.Black2}
        />
      <MarginBox marginBottom="2rem" />
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        width="calc(80% + 2rem)"
      >
        <Text
          innerText="Plan"
          color="white"
          fontSize={BaseStyles.Text.Heading2}
          fontWeight={BaseStyles.Text.Border0}
        />
      </Flex>
      <MarginBox marginBottom="1rem" />
      <PlanCard />
    </Flex>
  );
};
