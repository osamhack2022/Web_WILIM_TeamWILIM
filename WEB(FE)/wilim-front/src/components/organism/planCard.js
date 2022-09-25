import { useState } from "react";
import { Box } from "../atom/box";
import { Flex } from "../atom/flex";
import { Line } from "../atom/line";
import { MarginBox } from "../atom/marginBox";
import { Text } from "../atom/text";
import { Plan } from "../molecule/plan";
import { BaseStyles } from "../theme";

export const PlanCard = () => {
  const plans = [
    {
      detail: "레시피 4개 암기하기",
      completed: true,
    },
    {
      detail: "조주 영상 3개 찾아보기",
      completed: true,
    },
    {
      detail: "시뮬레이션 돌려보기",
      completed: false,
    },
  ];
  const [planList, setPlanList] = useState(plans);

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
              <Plan completed={completed} detail={detail} />
            </div>
          )}
      </Flex>
    </Box>
  );
};
