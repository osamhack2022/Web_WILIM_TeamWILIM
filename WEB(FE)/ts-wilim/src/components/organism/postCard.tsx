import { PostCardProps } from "../../schema/community";
import { Box } from "../atom/box";
import { Flex } from "../atom/flex";
import { Line } from "../atom/line";
import { MarginBox } from "../atom/marginBox";
import { Text } from "../atom/text";
import { BaseStyles } from "../theme";

export const PostCard = ({ title, content, hashtags, comments }: PostCardProps) => {
    return (
        <Box width="calc(100% - 2rem)">
            <Flex flexDirection="column" alignItems="flex-start">
                <Text innerText={title} fontWeight={BaseStyles.Text.Border1} fontSize={BaseStyles.Text.Heading3} />
                <MarginBox marginBottom="0.5rem" />
                <Flex alignItems="center" justifyContent="flex-start">
                    {
                        hashtags && hashtags.map((tag, index) => (
                            <>
                                <MarginBox marginLeft="1rem" key={index}/>
                                <Box height="2rem" borderRadius="1rem" backgroundColor="#FF894670" width="auto" style={{ padding: "0", paddingLeft: "1rem", paddingRight: "1rem" }}>
                                    <Text innerText={tag} fontWeight={BaseStyles.Text.Border1} fontSize={BaseStyles.Text.Heading5} />
                                </Box>
                            </>
                        ))
                    }
                </Flex>
                <MarginBox marginBottom="1rem" />
                <Text innerText={content} fontWeight={BaseStyles.Text.Border2} fontSize={BaseStyles.Text.Heading4} />
                <MarginBox marginBottom="1rem" />
                <Line height="0.5px" width="100%" color="#BBBBBB70" />
                <MarginBox marginBottom="1rem" />
                <>
                    {
                        comments && comments.map((comment, index) => (
                            <>
                                <Box backgroundColor="#BBBBBB" key={index} style={{ justifyContent: "flex-start" }} borderRadius="1rem">
                                    <Text innerText={comment} color="black" fontWeight={BaseStyles.Text.Border3} fontSize="20px" />
                                </Box>
                                <MarginBox marginBottom="1rem" />
                            </>
                        ))
                    }
                </>
            </Flex>

        </Box>
    )
}