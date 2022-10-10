import { Flex } from "../atom/flex";
import { Line } from "../atom/line";
import { MarginBox } from "../atom/marginBox";
import { Text } from "../atom/text";
import { GoalCard } from "../organism/goalCard";
import { PlanCard } from "../organism/planCard";
import { BaseStyles } from "../theme";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppThunkDispatch } from "../../store/store";
import { fetchUserByUsername } from "../../store/asyncThunks/fetchUserByUsername";
import { Title } from "../molecule/title";

export const GoalPlanTemplate = () => {
  const { username } = useParams();
  const dispatch = useDispatch<AppThunkDispatch>();
  useEffect(() => {
    dispatch(fetchUserByUsername(username!));
  }, [])
  return (
    <Flex flexDirection="column" alignItems="center">
      <MarginBox marginBottom="2rem" />
      <Title innerText={`${username}님`} />
      <MarginBox marginBottom="2rem" />
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        width="100%"
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
        width="100%"
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
