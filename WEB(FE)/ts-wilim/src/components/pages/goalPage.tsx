import { GoalTemplate } from "../template/goalTemplate";
import { MediaDiv, InnerMediaDiv } from "../layout/Layout";
import { RefCommunityTemplate } from "../template/refCommunityTemplate";


export const GoalPage = () => {
  return (
    <MediaDiv>
      <InnerMediaDiv>
        <GoalTemplate />
        <RefCommunityTemplate />
      </InnerMediaDiv>
    </MediaDiv>
  )
};
