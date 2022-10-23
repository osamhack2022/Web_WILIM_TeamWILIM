import { GoalTemplate } from "../template/goalTemplate";
import { MediaDiv, InnerMediaDiv } from "../layout/Layout";
import { RefCommunityTemplate } from "../template/refCommunityTemplate";
import { MarginBox } from "../atom/marginBox";
import { DescriptionModal } from "../organism/descriptionModal";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppThunkDispatch } from "../../store/store";
import { fetchLoginInfo } from "../../store/asyncThunks/fetchLoginInfo";
import { fetchUserGoalByUsername } from "../../store/asyncThunks/fetchUserGoalByUsername";
import { goalSearchInfoToggle } from "../../store/slices/toggleSlice";
import axios from "axios";
import { updateGoalDateInfo } from "../../store/slices/userGoalSlice";
import { useNavigate } from "react-router-dom";

const GoalPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const AppDispatch = useDispatch<AppThunkDispatch>(); 
  const getDates = async (url: string) => await axios.get(url).then(res => dispatch(updateGoalDateInfo(res.data.body.items)));
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
          AppDispatch(fetchUserGoalByUsername(res.payload.username!))
          .then(res => {
            if (res.meta.requestStatus === "fulfilled") {
              getDates(res.payload.dateUrl);
              dispatch(goalSearchInfoToggle(res.payload.name));
            }
          })
        }
      })
    // username을 바탕으로 유저의 정보를 확인한다.
    // username을 바탕으로 유저의 개인 플랜을 가져온다.
  }, []);
  return (
    <>
      <DescriptionModal />
      <MediaDiv>
        <InnerMediaDiv>
          <GoalTemplate />
          <MarginBox marginBottom="4rem" />
          <RefCommunityTemplate />
        </InnerMediaDiv>
      </MediaDiv>
    </>
  )
};

export default GoalPage;