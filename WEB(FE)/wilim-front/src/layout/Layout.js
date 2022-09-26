import { BaseStyles } from "../components/theme";
import styled from "styled-components";
import { LoginTemplate } from "../components/template/loginTemplate";
import { CreateAccountTemplate } from "../components/template/createAccountTemplate";
import { useState } from "react";
import { Calender } from "../components/atom/calender";
import { GoalPlanTemplate } from "../components/template/goalPlanTemplate";
/**
 * Layout은 App.js로 가기 전에 최종적인 라우팅 밑 GNB 등의 컴포넌트가 합쳐지는 장소입니다.
 * 이곳에서 구현하고자 하는 화면을 모두 구성한 뒤 App.js로 넘깁니다.
 */
export const Layout = () => {
  const [pageNumber, setPageNumber] = useState("1");
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
                return <LoginTemplate />
              case "1":
                return <GoalPlanTemplate />
              case "2":
                return <CreateAccountTemplate />
              case "3":
                return <Calender />
              default:
                return <LoginTemplate />
            }
          })()}
        </InnerMediaDiv>
      </MediaDiv>
    </>
  );
};

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
