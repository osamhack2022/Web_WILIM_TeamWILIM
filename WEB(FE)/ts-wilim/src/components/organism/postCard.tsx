import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { PostCardProps } from "../../schema/community";
import { addComment } from "../../store/asyncThunks/addComment";
import { deleteComment } from "../../store/asyncThunks/deleteComment";
import { getAllPosts } from "../../store/asyncThunks/getAllPosts";
import { getPostById } from "../../store/asyncThunks/getPostById";
import { ReducerType } from "../../store/rootReducer";
import { AppThunkDispatch } from "../../store/store";
import { Box } from "../atom/box";
import { Button } from "../atom/button";
import { Flex } from "../atom/flex";
import { Input } from "../atom/input";
import { Line } from "../atom/line";
import { MarginBox } from "../atom/marginBox";
import { Text } from "../atom/text";
import { BaseStyles } from "../theme";
import { toast } from 'react-toastify';
import { deletePost } from "../../store/asyncThunks/deletePost";
import { EmptyHeart } from "../atom/emptyHeart";
import { FullHeart } from "../atom/fullHeart";
import { updatePostLikes } from "../../store/asyncThunks/updatePostLikes";

export const PostCard = ({ _id, title, content, hashtags, comments, owner, likedUsers }: PostCardProps) => {
    const { username, likedPosts } = useSelector((state: ReducerType) => state.userInfo);
    console.log(likedUsers, likedPosts);
    const userId = useSelector((state: ReducerType) => state.userInfo._id);
    const AppDispatch = useDispatch<AppThunkDispatch>();
    const [comment, setComment] = useState<string>("");
    return (
        <Box width="calc(100% - 2rem)">
            <Flex flexDirection="column" alignItems="flex-start">
                <Flex alignItems="center" justifyContent="space-between">
                    <Flex alignItems="center" justifyContent="space-between">
                        <Text innerText={title} fontWeight={BaseStyles.Text.Border1} fontSize={BaseStyles.Text.Heading3} />
                        <Flex alignItems="center" justifyContent="space-between" width="auto">
                            <Text innerText={String(likedUsers.length)} fontSize={BaseStyles.Text.Heading4} color={BaseStyles.Color.Red1} />
                            <MarginBox marginLeft="0.3rem" />
                            <div onClick={() => {
                                AppDispatch(updatePostLikes({ _id }))
                                    .then(res => {
                                        if (res.meta.requestStatus === "fulfilled") {
                                            AppDispatch(getAllPosts())
                                        }
                                    })
                            }}>
                                {likedPosts?.includes(_id) ? <FullHeart /> : <EmptyHeart />}
                            </div>
                        </Flex>
                    </Flex>
                    {
                        userId === owner._id ?
                            (
                                <>
                                    <MarginBox marginLeft="0.5rem" />
                                    <div onClick={() => {
                                        AppDispatch(deletePost({ _id }))
                                            .then(res => {
                                                if (res.meta.requestStatus === "fulfilled") {
                                                    AppDispatch(getAllPosts());
                                                }
                                            })
                                    }}>
                                        <Text innerText="X" fontWeight={BaseStyles.Text.Border3} fontSize={BaseStyles.Text.Heading4} color="gray" />
                                    </div>
                                </>
                            ) :
                            <></>
                    }
                </Flex>
                <MarginBox marginBottom="0.5rem" />
                <Flex alignItems="center" justifyContent="flex-start" overflowX="scroll" flexWrap="nowrap">
                    {
                        hashtags && hashtags.map((tag, index) => (
                            <>
                                <MarginBox marginLeft="1rem" key={index} />
                                <Box height="2rem" borderRadius="1rem" backgroundColor="#FF894670" width="auto" style={{ padding: "0", paddingLeft: "1rem", paddingRight: "1rem" }}>
                                    <Text innerText={tag} fontWeight={BaseStyles.Text.Border1} fontSize={BaseStyles.Text.Heading5} />
                                </Box>
                            </>
                        ))
                    }
                </Flex>
                <MarginBox marginBottom="1rem" />
                <Text innerText={content} fontWeight={BaseStyles.Text.Border2} fontSize={BaseStyles.Text.Heading4} />
                <MarginBox marginBottom="1rem" />
                <Line height="0.5px" width="100%" color="#BBBBBB70" />
                <MarginBox marginBottom="1rem" />
                <>
                    {
                        comments && comments.map((comment, index) => (
                            <div onClick={() => {
                                if (comment.username !== username) {
                                    toast.error("직접 작성한 댓글만 지울 수 있습니다.", {
                                        autoClose: 2000,
                                    })
                                } else {
                                    AppDispatch(deleteComment({ _id: comment._id }))
                                        .then(res => {
                                            if (res.meta.requestStatus === "fulfilled") {
                                                AppDispatch(getPostById({ _id }));
                                            }
                                        })
                                }
                            }} style={{ width: "100%" }}>
                                <Box backgroundColor="#BBBBBB" key={index} style={{ justifyContent: "flex-start" }} borderRadius="1rem">
                                    <Text innerText={comment.content} color="black" fontWeight={BaseStyles.Text.Border3} fontSize={BaseStyles.Text.Heading4} />
                                    <Text innerText={` -${comment.username}`} color="gray" fontSize={BaseStyles.Text.Heading5} />
                                </Box>
                                <MarginBox marginBottom="1rem" />
                            </div>
                        ))
                    }
                </>
                <MarginBox marginBottom="1rem" />
                <Flex alignItems="center" justifyContent="space-between">
                    <Input type="text" width="calc(70% - 2rem)" placeholder="댓글을 달아주세요" style={{ color: "white", background: "none", border: "none", boxShadow: "none" }} onChange={(e: any) => setComment(e.target.value)} name="content" value={comment} />
                    <Button innerText="Submit" width="30%" backgroundColor="#FF8946" color="white" onClick={() => {
                        AppDispatch(addComment({ content: comment!, _id }))
                            .then(res => {
                                if (res.meta.requestStatus === "fulfilled") {
                                    AppDispatch(getPostById({ _id }));
                                    setComment("");
                                }
                            })
                    }} />
                </Flex>
            </Flex>
        </Box>
    )
}