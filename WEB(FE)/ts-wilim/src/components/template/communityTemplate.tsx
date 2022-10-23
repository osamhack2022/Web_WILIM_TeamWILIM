import { useSelector } from "react-redux"
import { ReducerType } from "../../store/rootReducer"
import { Flex } from "../atom/flex"
import { MarginBox } from "../atom/marginBox"
import { Title } from "../molecule/title"
import { NewPostCard } from "../organism/newPostCard"
import { PostCard } from "../organism/postCard"

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
                            <PostCard _id={item._id} title={item.title} hashtags={item.hashtags} content={item.content} comments={item.comments} key={index} owner={item.owner} />
                            <MarginBox marginBottom="1.5rem" />
                        </>
                    ))
                }
            </>
        </Flex>
    )
}