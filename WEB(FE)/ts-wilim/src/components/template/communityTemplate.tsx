import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { ReducerType } from "../../store/rootReducer"
import { myPostToggle } from "../../store/slices/toggleSlice"
import { Flex } from "../atom/flex"
import { MarginBox } from "../atom/marginBox"
import { Text } from "../atom/text"
import { Title } from "../molecule/title"
import { NewPostCard } from "../organism/newPostCard"
import { PostCard } from "../organism/postCard"
import { BaseStyles } from "../theme"

export const CommunityTemplate = () => {
    const { name } = useSelector((state: ReducerType) => state.userGoal);
    const myPost = useSelector((state: ReducerType) => state.toggle.myPost);
    const { postList } = useSelector((state: ReducerType) => state.post);
    const dispatch = useDispatch();
    const postCardList = myPost ? postList.filter(x => x.hashtags[0] === `#${name}`).concat(postList.filter(x => x.hashtags[0] !== `#${name}`)) : postList;
    return (
        <Flex flexDirection="column" alignItems="flex-start">
            <Title innerText="Community" />
            <Text innerText="My Posts" fontSize={BaseStyles.Text.Heading4} color={myPost ? "#FF8946" : "#BBBBBB"} onClick={() => dispatch(myPostToggle())} />
            <MarginBox marginBottom="2rem" />
            <NewPostCard />
            <MarginBox marginBottom="1.5rem" />
            <>
                {
                    postCardList && postCardList.map((item, index) => (
                        <>
                            <PostCard _id={item._id} title={item.title} hashtags={item.hashtags} content={item.content} comments={item.comments} key={index} owner={item.owner} likedUsers={item.likedUsers} />
                            <MarginBox marginBottom="1.5rem" />
                        </>
                    ))
                }
            </>
        </Flex>
    )
}