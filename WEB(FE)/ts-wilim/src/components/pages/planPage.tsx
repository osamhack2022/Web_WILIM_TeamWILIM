import { PlanTemplate } from "../template/planTemplate";
import { MediaDiv, InnerMediaDiv } from "../layout/Layout";
import { useDispatch } from "react-redux";
import { AppThunkDispatch } from "../../store/store";
import { fetchUserPlanByUsername } from "../../store/asyncThunks/fetchUserPlanByUsername";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { updateGoalDateInfo } from "../../store/slices/userGoalSlice";
import { fetchLoginInfo } from "../../store/asyncThunks/fetchLoginInfo";
import axios from "axios";
import { goalSearchInfoToggle } from "../../store/slices/toggleSlice";

const PlanPage = () => {
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
          AppDispatch(fetchUserPlanByUsername(res.payload.username!))
            .then(res => {
              if (res.meta.requestStatus === "fulfilled") {
                getDates(res.payload.dateUrl);
                dispatch(goalSearchInfoToggle(res.payload.name));
              }
            })
        }
      })
  }, []);
  return (
    <MediaDiv>
      <InnerMediaDiv>
        <PlanTemplate />
      </InnerMediaDiv>
    </MediaDiv>
  )
};

export default PlanPage;
