import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPosts } from "../../store/asyncThunks/getAllPosts";
import { AppThunkDispatch } from "../../store/store";
import { MediaDiv, InnerMediaDiv } from "../layout/Layout";
import { CommunityTemplate } from "../template/communityTemplate";


export const CommunityPage = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  useEffect(() => {
    dispatch(getAllPosts());
  }, [])
  return (
    <MediaDiv>
      <InnerMediaDiv>
        <CommunityTemplate />
      </InnerMediaDiv>
    </MediaDiv>
  )
};