import { Button } from "../atom/button";
import { Flex } from "../atom/flex";
import { MarginBox } from "../atom/marginBox";
import { Text } from "../atom/text";
import { BaseStyles } from "../theme";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReducerType } from "../../store/rootReducer";
import axios from "axios";

export const RefCommunityTemplate = () => {
  const goal = useSelector((state: ReducerType) => state.userInfo.goal);
  const { description, mockLink, isQnet } = useSelector((state: ReducerType) => state.userGoal);
  return (
    <Flex flexDirection="column" alignItems="center">
      <MarginBox marginBottom="3rem" />
      <Flex flexDirection="column" justifyContent="flex-start" width="100%">
        <Text
          innerText="References"
          color="white"
          fontSize={BaseStyles.Text.Heading2}
          fontWeight={BaseStyles.Text.Border0}
        />
        <MarginBox marginBottom="1rem" />
        {
          typeof description === "string" ? <Text innerText={description} /> : <Text innerText={description.job} />
        }
        <MarginBox marginBottom="1rem" />
        <Text
          innerText="자료실에서 지난 기출문제들을 확인해보세요!"
          color="white"
          fontSize={BaseStyles.Text.Heading4}
          fontWeight={BaseStyles.Text.Border3}
        />
      </Flex>
      <MarginBox marginBottom="2rem" />
      <Link to={`/examDownload/${goal}`} style={{ textDecoration: "none" }}>
        <Button
          innerText={`${goal} 공개문제 자료 다운로드`}
          width="100%"
          color={BaseStyles.Color.Orange3}
          backgroundColor={BaseStyles.Color.Black4}
          hoverColor={BaseStyles.Color.Black3}
          onClick={async () => mockLink[0].fileSn !== null ? await axios(mockLink[0].fileUrl) : null}
        />
      </Link>
      <MarginBox marginBottom="2rem" />
      <Flex flexDirection="column" justifyContent="flex-start" width="100%">
        <Text
          innerText="조주기능사는 유료 강의를 제공해주는
          곳이 없어요...."
          color="white"
          fontSize={BaseStyles.Text.Heading4}
          fontWeight={BaseStyles.Text.Border3}
        />
        <MarginBox marginBottom="1rem" />
        <Text
          innerText="혼자 공부하고자 한다면 아래 커뮤니티를 활용해보는 것은 어떨까요?"
          color="white"
          fontSize={BaseStyles.Text.Heading4}
          fontWeight={BaseStyles.Text.Border3}
        />
      </Flex>
      <MarginBox marginBottom="3rem" />
      <Flex flexDirection="column" justifyContent="flex-start" width="100%">
        <Text
          innerText="Community"
          color="white"
          fontSize={BaseStyles.Text.Heading2}
          fontWeight={BaseStyles.Text.Border0}
        />
      </Flex>
      <MarginBox marginBottom="2rem" />
      <Link to={`/community/${goal}`} style={{ textDecoration: "none" }}>
        <Button
          innerText="네이버 커뮤니티 바로가기"
          width="100%"
          color="white"
          backgroundColor="#2DB400"
          hoverColor={BaseStyles.Color.Lime1}
          onClick={() => { console.log('커뮤니티 바로가기') }}
        />
      </Link>
    </Flex>
  );
};
