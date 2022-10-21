import { PostCardProps } from "../../schema/community"
import { Flex } from "../atom/flex"
import { MarginBox } from "../atom/marginBox"
import { Title } from "../molecule/title"
import { PostCard } from "../organism/postCard"

const postCardList: PostCardProps[] = [
    {
        title: "어떤 강의가 좋을까요?",
        tag: "조주기능사",
        description: "이번에 새로 조주기능사를 준비하게 된 학생입니다... 관련 강의나 커뮤니티 추천해주실 수 있나요?",
        comments: ["추천 댓글 1!!", "추천 댓글 2!!"]
    }
]

export const CommunityTemplate = () => {
    return (
        <Flex flexDirection="column" alignItems="center">
            <Title innerText="Community" />
            <MarginBox marginBottom="2rem" />
            <>
                {
                    postCardList && postCardList.map((item, index) => (
                        <>
                            <PostCard title={item.title} tag={item.tag} description={item.description} comments={item.comments} key={index} />
                            <MarginBox marginBottom="1.5rem" />
                        </>
                    ))
                }
            </>
        </Flex>
    )
}