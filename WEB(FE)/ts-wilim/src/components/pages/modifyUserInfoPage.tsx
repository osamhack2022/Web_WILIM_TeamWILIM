import { ModifyUserInfoTemplate } from "../template/modifyUserInfoTemplate";
import { MediaDiv, InnerMediaDiv } from "../layout/Layout";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppThunkDispatch } from "../../store/store";
import axios from "axios";
import { updateGoalDateInfo } from "../../store/slices/userGoalSlice";
import { useEffect } from "react";
import { fetchLoginInfo } from "../../store/asyncThunks/fetchLoginInfo";

const ModifyUserInfoPage = () => {
  const navigate = useNavigate();
  const AppDispatch = useDispatch<AppThunkDispatch>(); 
  useEffect(() => {
    AppDispatch(fetchLoginInfo())
      .then(res => {
        if (res.meta.requestStatus === 'rejected') navigate('/');
      })
    // username을 바탕으로 유저의 정보를 확인한다.
    // username을 바탕으로 유저의 개인 플랜을 가져온다.
  }, []);
  return (
    <MediaDiv>
      <InnerMediaDiv>
        <ModifyUserInfoTemplate />
      </InnerMediaDiv>
    </MediaDiv>
  )
};

export default ModifyUserInfoPage;