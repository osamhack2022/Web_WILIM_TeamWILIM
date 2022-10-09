import { useSelector } from "react-redux";
import { RefCommunityTemplate } from "../template/refCommunityTemplate";
import { MediaDiv, InnerMediaDiv } from "../layout/Layout";
import { ReducerType } from "../../store/rootReducer";


export const RefCommunityPage = () => {
  const goal = useSelector((state: ReducerType) => state.userInfo.goal);
  return (
    <MediaDiv>
      <InnerMediaDiv>
        <RefCommunityTemplate examDownloadLink={`/examDownload/${goal}`} goToCommunityLink={`/community/${goal}`} />
      </InnerMediaDiv>
    </MediaDiv>
  )
};