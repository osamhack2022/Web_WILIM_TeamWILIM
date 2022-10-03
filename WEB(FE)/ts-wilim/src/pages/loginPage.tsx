import { LoginTemplate } from "../components/template/loginTemplate";
import { MediaDiv, InnerMediaDiv } from "../layout/Layout";


export const LoginPage = () => {
  return (
    <MediaDiv>
      <InnerMediaDiv>
        <LoginTemplate createAccountLink="/createAccount" findPasswordLink="/findPassword" />
      </InnerMediaDiv>
    </MediaDiv>
  )
};