import { GoalTemplate } from "../template/goalTemplate";
import { MediaDiv, InnerMediaDiv } from "../layout/Layout";
import { RefCommunityTemplate } from "../template/refCommunityTemplate";
import { MarginBox } from "../atom/marginBox";
import { DescriptionModal } from "../organism/descriptionModal";

const GoalPage = () => {
  return (
    <>
      <DescriptionModal />
      <MediaDiv>
        <InnerMediaDiv>
          <GoalTemplate />
          <MarginBox marginBottom="4rem" />
          <RefCommunityTemplate />
        </InnerMediaDiv>
      </MediaDiv>
    </>
  )
};

export default GoalPage;