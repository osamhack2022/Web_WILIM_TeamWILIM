import { GoalTemplate } from "../template/goalTemplate";
import { MediaDiv, InnerMediaDiv } from "../layout/Layout";
import { RefCommunityTemplate } from "../template/refCommunityTemplate";
import { MarginBox } from "../atom/marginBox";


export const GoalPage = () => {
  return (
    <MediaDiv>
      <InnerMediaDiv>
        <GoalTemplate />
        <MarginBox marginBottom="4rem" />
        <RefCommunityTemplate />
      </InnerMediaDiv>
    </MediaDiv>
  )
};
