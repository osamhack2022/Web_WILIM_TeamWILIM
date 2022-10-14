import { LoginTemplate } from "../template/loginTemplate";
import { MediaDiv, InnerMediaDiv } from "../layout/Layout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppThunkDispatch } from "../../store/store";
import { fetchLoginInfo } from "../../store/asyncThunks/fetchLoginInfo";


export const LoginPage = () => {
  return (
    <MediaDiv>
      <InnerMediaDiv>
        <LoginTemplate createAccountLink="/createAccount" findPasswordLink="/findPassword" />
      </InnerMediaDiv>
    </MediaDiv>
  )
};