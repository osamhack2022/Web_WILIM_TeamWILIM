import { GoalPlanTemplate } from "../template/goalPlanTemplate";
import { MediaDiv, InnerMediaDiv } from "../layout/Layout";
import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { AppThunkDispatch } from "../../store/store";
import { fetchUserPlanByUsername } from "../../store/asyncThunks/fetchUserPlanByUsername";
import { useSelector } from "react-redux";
import { ReducerType } from "../../store/rootReducer";
import { fetchUserById } from "../../store/asyncThunks/fetchUserById";
import { fetchLoginInfo } from "../../store/asyncThunks/fetchLoginInfo";
import { fetchUserGoalByUsername } from "../../store/asyncThunks/fetchUserGoalByUsername";
import axios from "axios";
import { updateGoalDateInfo } from "../../store/slices/userGoalSlice";
import { goalSearchInfoToggle } from "../../store/slices/toggleSlice";
import { useNavigate } from "react-router-dom";

const GoalPlanPage = () => {
  // const { username, _id } = useSelector((state: ReducerType) => state.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getDates = async (url: string) => await axios.get(url).then(res => dispatch(updateGoalDateInfo(res.data.body.items)));
  const AppDispatch = useDispatch<AppThunkDispatch>(); //useDispatch를 이용해서 비동기 처리를 하기 위해서는 AppThunkDispatch를 제네릭으로 받아와야한다.
  useEffect(() => {
    AppDispatch(fetchLoginInfo())
      .then(res => {
        if (res.meta.requestStatus === 'rejected') {
          // AppDispatch(fetchUserById(_id!))
          //   .then(res => {
          //     if (res.meta.requestStatus === "fulfilled") {
          //       AppDispatch(fetchUserPlanByUsername(username!))
          //       AppDispatch(fetchUserGoalByUsername(username!))
          //       .then(res => {
          //         if (res.meta.requestStatus === "fulfilled") {
          //           getDates(res.payload.dateUrl);
          //           dispatch(goalSearchInfoToggle(res.payload.name));
          //         }
          //       })
          //     }
          //   })
          navigate('/');
        } else if (res.meta.requestStatus === "fulfilled") {
          AppDispatch(fetchUserPlanByUsername(res.payload.username!))
          AppDispatch(fetchUserGoalByUsername(res.payload.username!))
            .then(res => {
              if (res.meta.requestStatus === "fulfilled") {
                if (res.payload === "") {
                  navigate("/getGoal");
                } else {
                  getDates(res.payload.dateUrl);
                  dispatch(goalSearchInfoToggle(res.payload.name));
                }
              }
            })
        }
      })
    // username을 바탕으로 유저의 정보를 확인한다.
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

export default GoalPlanPage;