import { Flex } from "../components/atom/flex";
import { Line } from "../components/atom/line";
import { MarginBox } from "../components/atom/marginBox";
import { Text } from "../components/atom/text";
import { GoalCard } from "../components/organism/goalCard";
import { PlanCard } from "../components/organism/planCard";
import { BaseStyles } from "../components/theme";
import { UserTitle } from "../components/molecule/userTitle";

export const GoalPlanPage = () => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <UserTitle />
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
