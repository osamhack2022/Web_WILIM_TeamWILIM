import { Flex } from "../atom/flex";
import { Line } from "../atom/line";
import { MarginBox } from "../atom/marginBox";
import { Text } from "../atom/text";
import { GoalCard } from "../organism/goalCard";
import { PlanCard } from "../organism/planCard";
import { BaseStyles } from "../theme";
import { UserTitle } from "../molecule/userTitle";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppThunkDispatch } from "../../store/store";
import { fetchUserByUsername } from "../../store/asyncThunks/fetchUserByUsername";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReducerType } from "../../store/rootReducer";
import { ArrowLeft } from "../atom/arrowLeft";

export const GoalPlanTemplate = () => {
  const { username } = useParams();
  const dispatch = useDispatch<AppThunkDispatch>();
  const _id = useSelector((state: ReducerType) => state.userInfo._id);
  useEffect(() => {
    dispatch(fetchUserByUsername(username!));
  }, [])
  return (
    <Flex flexDirection="column" alignItems="center">
      <Flex flexDirection="column" alignItems="flex-start" width="100%">
        <Link to={`/modifyUserInfo/${_id}`} style={{ textDecoration: "none" }}>
          <ArrowLeft />
          <span style={{ fontFamily: BaseStyles.Font.Inter, color: BaseStyles.Color.Black1, fontSize: BaseStyles.Text.Heading3, marginLeft: "1rem" }}>정보 수정하기</span>
        </Link>
      </Flex>
      <MarginBox marginBottom="2rem" />
      <UserTitle />
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
