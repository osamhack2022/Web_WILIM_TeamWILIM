import { BaseStyles } from "../components/theme";
import styled from "styled-components";
import { CreateAccountTemplate } from "../components/template/createAccountTemplate";
import { useState } from "react";
import { GoalPlanTemplate } from "../components/template/goalPlanTemplate";
import { KakaoTestButton } from "../components/molecule/kakaoTestButton";
import { LoginPage } from "../pages/loginPage";
import { Link } from "react-router-dom";
import { Button } from "../components/atom/button";
/**
 * Layout은 App.js로 가기 전에 최종적인 라우팅 밑 GNB 등의 컴포넌트가 합쳐지는 장소입니다.
 * 이곳에서 구현하고자 하는 화면을 모두 구성한 뒤 App.js로 넘깁니다.
 */
export const Layout = () => {
  const [pageNumber, setPageNumber] = useState<string>("1");
  return (
    <>
      <input
        type="number"
        onChange={(e) => {
          setPageNumber(e.target.value)
          console.log(e.target)
        }}
        value={pageNumber}
      />
      <MediaDiv>
        <InnerMediaDiv>
          {(() => {
            switch(pageNumber) {
              case "0":
                return <KakaoTestButton />
              case "1":
                return <>
                  <KakaoTestButton />
                  <Link to="/Geun-Oh">
                    <Button innerText="Geun-Oh Info" onClick={() => console.log('get geunoh info')} />
                  </Link>
                </>
              case "2":
                return <CreateAccountTemplate />
                case "3":
                  return <GoalPlanTemplate />
              default:
                return <LoginPage />
            }
          })()}
        </InnerMediaDiv>
      </MediaDiv>
    </>
  );
};

export const MediaDiv = styled.div`
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

export const InnerMediaDiv = styled.div`
  width: 80%;
`;
