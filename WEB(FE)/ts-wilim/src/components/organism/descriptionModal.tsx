import styled from "styled-components"
import { Box } from "../atom/box"
import { Button } from "../atom/button"
import { Flex } from "../atom/flex"
import { Line } from "../atom/line"
import { MarginBox } from "../atom/marginBox"
import { ModalBackground } from "../atom/modalBackground"
import { Text } from "../atom/text"
import { BaseStyles } from "../theme"
import descriptions from "../../utils/descriptions"

export const DescriptionModal = ({ goal }: { goal: string }) => {
    const description = descriptions.find(item => item.jmNm === goal);
    const mdobligFldNm = description?.mdobligFldNm.split(".");
    return (
        <ModalBackground>
            <Flex justifyContent="center" alignItems="center">
                <ModalWrapper>
                    <Box width="calc(100% - 2rem)" height="100%" style={{ overflow: "auto" }}>
                        <Flex flexDirection="column" justifyContent="flex-start" alignItems="center" height="100%">
                            <MarginBox marginBottom="0.5rem" />
                            {
                                // typeof description === "string" ? <Text innerText={name} />
                                //     :
                                <>
                                    <Flex flexDirection="column" width="80%">
                                        <Flex width="100%" alignItems="center">
                                            <Text
                                                innerText={description?.jmNm}
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
                                        <Text innerText={`#${mdobligFldNm![0]} ${mdobligFldNm!.length > 2 ? `#${mdobligFldNm![1]}` : ""}`} textAlign="center" fontSize={BaseStyles.Text.Heading4} fontWeight={BaseStyles.Text.Border3} color={BaseStyles.Color.Black0} />
                                        <MarginBox marginBottom="2rem" />
                                        <Text

                                            innerText="어떤 직업인가요?"
                                            fontSize={BaseStyles.Text.Heading3}
                                            fontWeight={BaseStyles.Text.Border2}
                                            textAlign="left"
                                        />
                                        <MarginBox marginBottom="0.5rem" />
                                        <Text innerText={`${description?.job}`} fontSize={BaseStyles.Text.Heading4} fontWeight={BaseStyles.Text.Border3} />
                                        {
                                            description?.summary !== "" ? (
                                                <>
                                                    <MarginBox marginBottom="3rem" />
                                                    <Text
                                                        innerText="제정 의도"
                                                        fontSize={BaseStyles.Text.Heading3}
                                                        fontWeight={BaseStyles.Text.Border2}
                                                        textAlign="left"
                                                    />
                                                    <MarginBox marginBottom="0.5rem" />
                                                    <Text innerText={`${description?.summary}`} fontSize={BaseStyles.Text.Heading4} fontWeight={BaseStyles.Text.Border3} />
                                                </>
                                            ) : <></>
                                        }
                                        {
                                            description?.trend !== "" ? (
                                                <>
                                                    <MarginBox marginBottom="3rem" />
                                                    <Text

                                                        innerText="어떤 역량이 필요한가요?"
                                                        fontSize={BaseStyles.Text.Heading3}
                                                        fontWeight={BaseStyles.Text.Border2}
                                                        textAlign="left"
                                                    />
                                                    <MarginBox marginBottom="0.5rem" />
                                                    <Text innerText={`${description?.trend}`} fontSize={BaseStyles.Text.Heading4} fontWeight={BaseStyles.Text.Border3} /> </>
                                            ) : <></>
                                        }
                                        <MarginBox marginBottom="3rem" />
                                        <Text

                                            innerText="관련 분야 및 직업"
                                            fontSize={BaseStyles.Text.Heading3}
                                            fontWeight={BaseStyles.Text.Border2}
                                            textAlign="left"
                                        />
                                        <MarginBox marginBottom="0.5rem" />
                                        <Text innerText={`${description?.career}`} fontSize={BaseStyles.Text.Heading4} fontWeight={BaseStyles.Text.Border3} />
                                        <MarginBox marginBottom="2rem" />
                                        <Text

                                            innerText={`|시행기관 - ${description?.implNm}`}
                                            fontSize={BaseStyles.Text.Heading4}
                                            fontWeight={BaseStyles.Text.Border1}
                                            textAlign="left"
                                        />
                                        <MarginBox marginBottom="0.5rem" />
                                        <Text

                                            innerText={`|검증기관 - ${description?.instiNm}`}
                                            fontSize={BaseStyles.Text.Heading4}
                                            fontWeight={BaseStyles.Text.Border1}
                                            textAlign="left"
                                        />
                                        <MarginBox marginBottom="2rem" />
                                        <Flex justifyContent="center" alignItems="center">
                                            <Button onClick={() => { }} innerText="Select" width="100%" height="40px" backgroundColor={BaseStyles.Color.Orange2} color="white" />
                                        </Flex>
                                        <MarginBox marginBottom="1rem" />
                                    </Flex>
                                </>
                            }
                        </Flex>
                    </Box>
                </ModalWrapper>
            </Flex>
        </ModalBackground>
    )
}

const ModalWrapper = styled.div`
    width: 30vw;
    height: auto;
    max-height: 1000px;
    background: none;
    @media (max-width: 1080px) {
        width: 90vw;
        height: 80vh;
    }
`