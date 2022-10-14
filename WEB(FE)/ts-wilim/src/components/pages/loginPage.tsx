import { LoginTemplate } from "../template/loginTemplate";
import { MediaDiv, InnerMediaDiv } from "../layout/Layout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppThunkDispatch } from "../../store/store";
import { fetchLoginInfo } from "../../store/asyncThunks/fetchLoginInfo";
import { useNavigate } from "react-router-dom";
import { MarginBox } from "../atom/marginBox";
import getFullDate from "../../utils/getFullDate";


export const LoginPage = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const navigate = useNavigate();
  const date = getFullDate();
  console.log(date);
  useEffect(() => {
    dispatch(fetchLoginInfo())
    .then(res => {
      if(res.meta.requestStatus === 'fulfilled') navigate('/main');
    })
  }, [])
  return (
    <MediaDiv>
      <InnerMediaDiv>
        <MarginBox marginBottom="2rem" />
        <LoginTemplate createAccountLink="/createAccount" findPasswordLink="/findPassword" />
      </InnerMediaDiv>
    </MediaDiv>
  )
};