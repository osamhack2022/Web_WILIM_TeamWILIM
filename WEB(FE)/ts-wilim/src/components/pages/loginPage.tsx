import { LoginTemplate } from "../template/loginTemplate";
import { MediaDiv, InnerMediaDiv } from "../layout/Layout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppThunkDispatch } from "../../store/store";
import { fetchLoginInfo } from "../../store/asyncThunks/fetchLoginInfo";
import { useNavigate } from "react-router-dom";
import { MarginBox } from "../atom/marginBox";


export const LoginPage = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchLoginInfo())
    .then(res => {
      if(res.meta.requestStatus === 'fulfilled') navigate('/main');
    })
  }, [])
  return (
    <MediaDiv>
      <InnerMediaDiv>
        <LoginTemplate createAccountLink="/createAccount" />
      </InnerMediaDiv>
    </MediaDiv>
  )
};