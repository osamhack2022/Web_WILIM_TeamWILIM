import { BaseStyles } from "./components/theme";
import styled from "styled-components";
import { LoginPage } from "./components/template/loginPage";

function App() {
  return (
    <MediaDiv>
      <InnerMediaDiv>
        <LoginPage />
      </InnerMediaDiv>
    </MediaDiv>
  );
}

const MediaDiv = styled.div`
  position: fixed;
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

export default App;
