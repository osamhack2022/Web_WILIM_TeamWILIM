import { Button } from "../atom/button";
import { Flex } from "../atom/flex";
import { MarginBox } from "../atom/marginBox";
import { Text } from "../atom/text";
import { BaseStyles } from "../theme";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReducerType } from "../../store/rootReducer";
import axios from "axios";
import descriptions from "../../utils/descriptions";
import { Line } from "../atom/line";

export const RefCommunityTemplate = () => {
  const goal = useSelector((state: ReducerType) => state.toggle.goalSearchInfo);
  const description = descriptions.find(item => item.c.description?.jmNm === goal)!.c;
  const mockLink = description.mockLink!;
  const mdobligFldNm = description.description?.mdobligFldNm.split(".");
  console.log(description);
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
        <Flex flexDirection="column" justifyContent="flex-start" alignItems="center" height="100%">
          <MarginBox marginBottom="0.5rem" />
          {
            description.description !== null ? (
              <>
                <Flex flexDirection="column" width="100%">
                  <Flex width="100%" alignItems="center">
                    <Text
                      innerText={description?.description!.jmNm}
                      fontSize={BaseStyles.Text.Heading2}
                      fontWeight={BaseStyles.Text.Border1}
                      textAlign="center"
                    />
                  </Flex>
                  <MarginBox marginBottom="0.5rem" />
                  <Line
                    width="100%"
                    height="1px"
                    color={BaseStyles.Color.Black0}
                  />
                  <MarginBox marginBottom="0.5rem" />
                  <Text innerText={`${mdobligFldNm && mdobligFldNm.length >= 1 ? `#${mdobligFldNm[0]}` : ""} ${mdobligFldNm && mdobligFldNm.length >= 2 ? `#${mdobligFldNm[1]}` : ""}`} textAlign="center" fontSize={BaseStyles.Text.Heading4} fontWeight={BaseStyles.Text.Border3} color={BaseStyles.Color.Black0} />
                  <MarginBox marginBottom="2rem" />
                  <Text

                    innerText="?????? ????????????????"
                    fontSize={BaseStyles.Text.Heading3}
                    fontWeight={BaseStyles.Text.Border2}
                    textAlign="left"
                  />
                  <MarginBox marginBottom="0.5rem" />
                  <Text innerText={`${description?.description!.job}`} fontSize={BaseStyles.Text.Heading4} fontWeight={BaseStyles.Text.Border3} />
                  {
                    description?.description!.summary !== "" ? (
                      <>
                        <MarginBox marginBottom="3rem" />
                        <Text
                          innerText="?????? ??????"
                          fontSize={BaseStyles.Text.Heading3}
                          fontWeight={BaseStyles.Text.Border2}
                          textAlign="left"
                        />
                        <MarginBox marginBottom="0.5rem" />
                        <Text innerText={`${description?.description!.summary}`} fontSize={BaseStyles.Text.Heading4} fontWeight={BaseStyles.Text.Border3} />
                      </>
                    ) : <></>
                  }
                  {
                    description?.description!.trend !== "" ? (
                      <>
                        <MarginBox marginBottom="3rem" />
                        <Text

                          innerText="?????? ????????? ????????????????"
                          fontSize={BaseStyles.Text.Heading3}
                          fontWeight={BaseStyles.Text.Border2}
                          textAlign="left"
                        />
                        <MarginBox marginBottom="0.5rem" />
                        <Text innerText={`${description?.description!.trend}`} fontSize={BaseStyles.Text.Heading4} fontWeight={BaseStyles.Text.Border3} /> </>
                    ) : <></>
                  }
                  <MarginBox marginBottom="3rem" />
                  <Text

                    innerText="?????? ?????? ??? ??????"
                    fontSize={BaseStyles.Text.Heading3}
                    fontWeight={BaseStyles.Text.Border2}
                    textAlign="left"
                  />
                  <MarginBox marginBottom="0.5rem" />
                  <Text innerText={`${description?.description!.career}`} fontSize={BaseStyles.Text.Heading4} fontWeight={BaseStyles.Text.Border3} />
                  <MarginBox marginBottom="2rem" />
                  <Text

                    innerText={`|???????????? - ${description?.description!.implNm}`}
                    fontSize={BaseStyles.Text.Heading4}
                    fontWeight={BaseStyles.Text.Border1}
                    textAlign="left"
                  />
                  <MarginBox marginBottom="0.5rem" />
                  <Text

                    innerText={`|???????????? - ${description?.description!.instiNm}`}
                    fontSize={BaseStyles.Text.Heading4}
                    fontWeight={BaseStyles.Text.Border1}
                    textAlign="left"
                  />
                  <MarginBox marginBottom="2rem" />
                </Flex>
              </>
            ) : <Text innerText="?????????????????? ????????? ?????????..!" />
          }
        </Flex>
      </Flex>
      <Line
        width="60%"
        height="1px"
        color={BaseStyles.Color.Black0}
      />
      <MarginBox marginBottom="2rem" />
      {
        description?.isQnet === false ? (
          <Text innerText="????????? ???????????? ?????? ???????????????!! ????????? ????????? ????????? ???????????????!!" />
        )
          :
          mockLink[0].fileSn !== null ? (
            <>
              <MarginBox marginBottom="1rem" />
              <Text
                innerText="??????????????? ?????? ?????????????????? ??????????????????!"
                color="white"
                fontSize={BaseStyles.Text.Heading4}
                fontWeight={BaseStyles.Text.Border3}
              />
              <Link to={`/examDownload/${goal}`} style={{ textDecoration: "none" }}>
                <Button
                  innerText={`${goal} ???????????? ?????? ????????????`}
                  width="100%"
                  color={BaseStyles.Color.Orange3}
                  backgroundColor={BaseStyles.Color.Black4}
                  hoverColor={BaseStyles.Color.Black3}
                  onClick={async () => mockLink[0].fileSn !== null ? await axios(mockLink[0].fileUrl) : null}
                />
              </Link>
            </>
          )
            :
            <>
              <Flex flexDirection="column" justifyContent="flex-start" width="100%">
                <Text
                  innerText={`${goal}???(???) ???????????? ????????? ?????????...`}
                  color="white"
                  fontSize={BaseStyles.Text.Heading4}
                  fontWeight={BaseStyles.Text.Border3}
                />
                <MarginBox marginBottom="1rem" />
                <Text
                  innerText={`?????? ???????????? ???????????? ??????????????? ??? ?????????????`}
                  color="white"
                  fontSize={BaseStyles.Text.Heading4}
                  fontWeight={BaseStyles.Text.Border3}
                />
                <MarginBox marginBottom="1rem" />
                <Button
                  innerText={`Q-net ????????? ????????????`}
                  width="100%"
                  color={BaseStyles.Color.Orange3}
                  backgroundColor={BaseStyles.Color.Black4}
                  hoverColor={BaseStyles.Color.Black3}
                  onClick={() => window.open("https://www.q-net.or.kr/cst006.do?id=cst00601&gSite=Q&gId=")}
                />
                <MarginBox marginBottom="1rem" />
                <Text
                  innerText="?????? ??????????????? ????????? ??????????????? ??????????????? ?????? ?????????????"
                  color="white"
                  fontSize={BaseStyles.Text.Heading4}
                  fontWeight={BaseStyles.Text.Border3}
                />
              </Flex>
            </>
      }
      <MarginBox marginBottom="3rem" />
      {/* <Flex flexDirection="column" justifyContent="flex-start" width="100%">
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
          innerText="????????? ???????????? ????????????"
          width="100%"
          color="white"
          backgroundColor="#2DB400"
          hoverColor={BaseStyles.Color.Lime1}
          onClick={() => { console.log('???????????? ????????????') }}
        />
      </Link> */}
    </Flex>
  );
};
