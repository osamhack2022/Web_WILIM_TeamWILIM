import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchLoginInfo } from "../../store/asyncThunks/fetchLoginInfo";
import { fetchUserGoalByUsername } from "../../store/asyncThunks/fetchUserGoalByUsername";
import { getAllPosts } from "../../store/asyncThunks/getAllPosts";
import { AppThunkDispatch } from "../../store/store";
import { MediaDiv, InnerMediaDiv } from "../layout/Layout";
import { CommunityTemplate } from "../template/communityTemplate";


const CommunityPage = () => {
  const navigate = useNavigate();
  const AppDispatch = useDispatch<AppThunkDispatch>(); 
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
                AppDispatch(getAllPosts())
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
        <CommunityTemplate />
      </InnerMediaDiv>
    </MediaDiv>
  )
};

export default CommunityPage;