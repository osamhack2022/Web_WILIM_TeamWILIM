import { BaseStyles } from "../components/theme";
import styled from "styled-components";
import { LoginTemplate } from "../components/template/loginTemplate";
import { CreateAccountTemplate } from "../components/template/createAccountTemplate";

/**
 * Layout은 App.js로 가기 전에 최종적인 라우팅 밑 GNB 등의 컴포넌트가 합쳐지는 장소입니다.
 * 이곳에서 구현하고자 하는 화면을 모두 구성한 뒤 App.js로 넘깁니다.
 */
export const Layout = () => {
  return (
    <MediaDiv>
      <InnerMediaDiv>
        {/* <LoginTemplate /> */}
        <CreateAccountTemplate />
      </InnerMediaDiv>
    </MediaDiv>
  );
}

const MediaDiv = styled.div`
  position: absolute;
  left: 35vw;
  width: 30vw;
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #616161;
  fontfamily: ${BaseStyles.Font.Inter};
  @media (max-width: 1280px) {
    left: 0;
    width: 100vw;
  }
`;

const InnerMediaDiv = styled.div`
  width: 80%;
`;