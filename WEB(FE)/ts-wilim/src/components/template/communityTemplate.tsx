import { useSelector } from "react-redux"
import { PostProps } from "../../schema/community"
import { ReducerType } from "../../store/rootReducer"
import { Flex } from "../atom/flex"
import { MarginBox } from "../atom/marginBox"
import { Title } from "../molecule/title"
import { NewPostCard } from "../organism/newPostCard"
import { PostCard } from "../organism/postCard"

// const postCardList: PostProps[] = [
//     {
//         _id: "",
//         owner: "",
//         image: [],
//         title: "어떤 강의가 좋을까요?",
//         hashtags: ["조주기능사"],
//         date: "",
//         content: "이번에 새로 조주기능사를 준비하게 된 학생입니다... 관련 강의나 커뮤니티 추천해주실 수 있나요?",
//         comments: ["추천 댓글 1!!", "추천 댓글 2!!"],
//         __v: 0
//     }
// ]

export const CommunityTemplate = () => {
    const postCardList = useSelector((state: ReducerType) => state.post);
    return (
        <Flex flexDirection="column" alignItems="center">
            <Title innerText="Community" />
            <MarginBox marginBottom="2rem" />
            <NewPostCard />
            <MarginBox marginBottom="1.5rem" />
            <>
                {
                    postCardList && postCardList.postList.map((item, index) => (
                        <>
                            <PostCard _id={item._id} title={item.title} hashtags={item.hashtags} content={item.content} comments={item.comments} key={index} />
                            <MarginBox marginBottom="1.5rem" />
                        </>
                    ))
                }
            </>
        </Flex>
    )
}