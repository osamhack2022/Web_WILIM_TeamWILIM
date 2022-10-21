import { PostCardProps } from "../../schema/community";
import { Box } from "../atom/box";
import { Flex } from "../atom/flex";
import { Line } from "../atom/line";
import { Text } from "../atom/text";
import { BaseStyles } from "../theme";

export const PostCard = ({ title, description, tag, comments }: PostCardProps) => {
    return (
        <Box width="calc(100% - 2rem)">
            <Flex flexDirection="column" alignItems="flex-start">
                <Text innerText={title} fontWeight={BaseStyles.Text.Border1} fontSize={BaseStyles.Text.Heading3} />
                <Box height="2rem" borderRadius="1rem" backgroundColor="#FF894670" width="auto" style={{ padding: "0", paddingLeft: "1rem", paddingRight: "1rem" }}>
                    <Text innerText={tag} fontWeight={BaseStyles.Text.Border3} fontSize={BaseStyles.Text.Heading5} />
                </Box>
                <Text innerText={description} fontWeight={BaseStyles.Text.Border2} fontSize={BaseStyles.Text.Heading4} />
                <Line height="0.5px" width="100%" color="#BBBBBB70" />
                <>
                    {
                        comments && comments.map((comment, index) => (
                            <Box backgroundColor="#BBBBBB" key={index} style={{ justifyContent: "flex-start" }}>
                                <Text innerText={comment} fontWeight={BaseStyles.Text.Border3} fontSize={BaseStyles.Text.Heading5} />
                            </Box>
                        ))
                    }
                </>
            </Flex>

        </Box>
    )
}