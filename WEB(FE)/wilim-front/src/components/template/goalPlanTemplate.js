import { Flex } from "../atom/flex";
import { Line } from "../atom/line";
import { MarginBox } from "../atom/marginBox";
import { Text } from "../atom/text";
import { GoalCard } from "../organism/goalCard";
import { PlanCard } from "../organism/planCard";
import { BaseStyles } from "../theme";

export const GoalPlanTemplate = () => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Flex flexDirection="column" alignItems="flex-start" width="100%">
        <Text
          innerText="오형근 님"
          color="white"
          fontSize={BaseStyles.Text.Heading2}
          fontWeight={BaseStyles.Text.Border0}
        />
        <MarginBox marginBottom="0.5rem" />
        <Line width="80%" height="1px" color={BaseStyles.Color.Black0} />
      </Flex>
      <MarginBox marginBottom="2rem" />
      <GoalCard />
      <MarginBox marginBottom="2rem" />
      <PlanCard />
    </Flex>
  );
};
