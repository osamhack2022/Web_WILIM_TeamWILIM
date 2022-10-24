import { Flex } from "../components/atom/flex"
import { Text } from "../components/atom/text"
import { InnerMediaDiv, MediaDiv } from "../components/layout/Layout"
import { BaseStyles } from "../components/theme"

export const Shimmer = () => {
    return (
        <MediaDiv>
            <InnerMediaDiv>
                <Flex justifyContent="center" alignItems="flex-start" height="100%">
                    <Text
                        innerText="WILIM"
                        fontWeight={BaseStyles.Text.Border1}
                        color={BaseStyles.Color.Orange2}
                        fontSize="60px"
                        textAlign="center"
                    />
                </Flex>
            </InnerMediaDiv>
        </MediaDiv>
    )
}