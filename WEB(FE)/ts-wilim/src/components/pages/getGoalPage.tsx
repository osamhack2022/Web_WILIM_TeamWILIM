import { InnerMediaDiv, MediaDiv } from "../layout/Layout"
import { DescriptionModal } from "../organism/descriptionModal"
import { GetGoalTemplate } from "../template/getGoalTemplate"

export const GetGoalPage = () => {
    return (
        <>
            <DescriptionModal />
            <MediaDiv>
                <InnerMediaDiv>
                    <GetGoalTemplate />
                </InnerMediaDiv>
            </MediaDiv>
        </>
    )
}