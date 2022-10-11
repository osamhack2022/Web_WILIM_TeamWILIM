import { GoalPlanTemplate } from "../template/goalPlanTemplate";
import { MediaDiv, InnerMediaDiv } from "../layout/Layout";
import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { AppThunkDispatch } from "../../store/store";
import { fetchUserPlanByUsername } from "../../store/asyncThunks/fetchUserPlanByUsername";
import { useSelector } from "react-redux";
import { ReducerType } from "../../store/rootReducer";
import { fetchUserById } from "../../store/asyncThunks/fetchUserById";


export const GoalPlanPage = () => {
  const { username, _id } = useSelector((state: ReducerType) => state.userInfo);
  const dispatch = useDispatch<AppThunkDispatch>(); //useDispatch를 이용해서 비동기 처리를 하기 위해서는 AppThunkDispatch를 제네릭으로 받아와야한다.
  useEffect(() => {
      dispatch(fetchUserById(_id!))
      .then(res => {
        if(res.meta.requestStatus === "fulfilled") {
          dispatch(fetchUserPlanByUsername(username!));
        }
      }) // username을 바탕으로 유저의 정보를 확인한다.
      // username을 바탕으로 유저의 개인 플랜을 가져온다.
  }, []);
  return (
    <MediaDiv>
      <InnerMediaDiv>
        <GoalPlanTemplate />
      </InnerMediaDiv>
    </MediaDiv>
  )
};