import { Flex } from "../components/atom/flex"
import { MarginBox } from "../components/atom/marginBox";
import { Text } from "../components/atom/text"

const NoPlanError = () => {
    return (
        <Flex flexDirection="column" justifyContent="center" alignItems="center" height="100%">
            <MarginBox marginBottom="1rem" />
            <Text innerText="Plan을 추가해주세요!!" />
        </Flex>
    )
}

export default NoPlanError;