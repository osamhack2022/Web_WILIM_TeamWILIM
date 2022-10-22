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

export const PostCard = ({ _id, title, content, hashtags, comments }: PostCardProps) => {
    const { username } = useSelector((state: ReducerType) => state.userInfo);
    const AppDispatch = useDispatch<AppThunkDispatch>();
    const dispatch = useDispatch();
    const [comment, setComment] = useState<string>("");
    return (
        <Box width="calc(100% - 2rem)">
            <Flex flexDirection="column" alignItems="flex-start">
                <Text innerText={title} fontWeight={BaseStyles.Text.Border1} fontSize={BaseStyles.Text.Heading3} />
                <MarginBox marginBottom="0.5rem" />
                <Flex alignItems="center" justifyContent="flex-start">
                    {
                        hashtags && hashtags.map((tag, index) => (
                            <>
                                <MarginBox marginLeft="1rem" key={index}/>
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
                                if(comment.username !== username) {
                                    toast.error("직접 작성한 댓글만 지울 수 있습니다.", {
                                        autoClose: 2000,
                                    })
                                } else {
                                    AppDispatch(deleteComment({ _id: comment._id }))
                                    .then(res => {
                                        if(res.meta.requestStatus === "fulfilled") {
                                            AppDispatch(getPostById({ _id }));
                                        }
                                    })
                                }
                            }} style={{ width: "100%" }}>
                                <Box backgroundColor="#BBBBBB" key={index} style={{ justifyContent: "flex-start" }} borderRadius="1rem">
                                    <Text innerText={comment.content} color="black" fontWeight={BaseStyles.Text.Border3} fontSize={BaseStyles.Text.Heading4} />
                                    <Text innerText={` -${comment.username}`} color="gray" fontSize={BaseStyles.Text.Heading5}/>
                                </Box>
                                <MarginBox marginBottom="1rem" />
                            </div>
                        ))
                    }
                </>
                <MarginBox marginBottom="1rem" />
                <Flex alignItems="center" justifyContent="space-between">
                <Input type="text" width="calc(80% - 2rem)" placeholder="댓글을 달아주세요" style={{ color: "white", background: "none", border: "none", boxShadow: "none" }} onChange={(e: any) => setComment(e.target.value)} name="content" value={comment} />
                <Button innerText="Submit" width="20%" backgroundColor="#FF8946" color="white" onClick={() => {
                    AppDispatch(addComment({ content: comment!, _id }))
                    .then(res => {
                        if(res.meta.requestStatus === "fulfilled") {
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