import { Flex } from "../atom/flex"
import { MarginBox } from "../atom/marginBox"
import { Text } from "../atom/text"
import { BaseStyles } from "../theme"

interface ExamDateProps {
    examRound: string;
    startAt: string;
    dDay?: string;
}

export const ExamDate = ({ examRound, startAt, dDay }: ExamDateProps) => {
    return (
        <>
            <Flex alignItems="flex-start" justifyContent="space-between">
                <Flex flexDirection="column" width="auto">
                    <Text innerText={examRound} fontSize={BaseStyles.Text.Heading3} />
                    <MarginBox marginBottom="0.5rem" />
                    <Text innerText={`${startAt}~`} fontSize={BaseStyles.Text.Heading4} />
                </Flex>
                <Text innerText={dDay} fontSize={BaseStyles.Text.Heading2} />
            </Flex>
            <MarginBox marginBottom="1.5rem" />
        </>
    )
}