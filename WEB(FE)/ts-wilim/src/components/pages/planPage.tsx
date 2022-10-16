import { PlanTemplate } from "../template/planTemplate";
import { MediaDiv, InnerMediaDiv } from "../layout/Layout";
import { useDispatch } from "react-redux";
import { AppThunkDispatch } from "../../store/store";
import { fetchUserPlanByUsername } from "../../store/asyncThunks/fetchUserPlanByUsername";
import { ReducerType } from "../../store/rootReducer";
import { useSelector } from "react-redux";

const PlanPage = () => {
  const { username } = useSelector((state: ReducerType) => state.userInfo);
  const dispatch = useDispatch<AppThunkDispatch>(); //useDispatch를 이용해서 비동기 처리를 하기 위해서는 AppThunkDispatch를 제네릭으로 받아와야한다.
  dispatch(fetchUserPlanByUsername(username!));
  return (
    <MediaDiv>
      <InnerMediaDiv>
        <PlanTemplate />
      </InnerMediaDiv>
    </MediaDiv>
  )
};

export default PlanPage;
