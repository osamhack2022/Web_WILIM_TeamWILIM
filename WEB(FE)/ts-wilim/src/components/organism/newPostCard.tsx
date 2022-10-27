import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import { addPost } from "../../store/asyncThunks/addPost";
import { getAllPosts } from "../../store/asyncThunks/getAllPosts";
import { ReducerType } from "../../store/rootReducer"
import { AppThunkDispatch } from "../../store/store";
import { Box } from "../atom/box"
import { Button } from "../atom/button";
import { Flex } from "../atom/flex";
import { Input } from "../atom/input";
import { Line } from "../atom/line";
import { MarginBox } from "../atom/marginBox";
import { Text } from "../atom/text";
import { TextArea } from "../atom/textArea";
import { BaseStyles } from "../theme";

export const NewPostCard = () => {
    const dispatch = useDispatch<AppThunkDispatch>();
    const { username } = useSelector((state: ReducerType) => state.userInfo);
    const { name } = useSelector((state: ReducerType) => state.userGoal);
    useEffect(() => {
        setNewPostForm(newPost);
    }, [name])
    const newPost = {
        title: "",
        content: "",
        hashtags: [`#${name}`],
        newTag: "#",
    }
    const [newPostForm, setNewPostForm] = useState<typeof newPost>(newPost);
    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setNewPostForm({ ...newPostForm, [name]: value });
        console.log(newPostForm);
    };
    return (
        <Box width="calc(100% - 2rem)">
            <Flex flexDirection="column" alignItems="flex-start">
                <Input type="text" width="calc(100% - 2rem)" placeholder="제목을 입력해주세요" style={{ color: "white", background: "none", fontSize: BaseStyles.Text.Heading3, fontWeight: BaseStyles.Text.Border1, border: "none", boxShadow: "none" }} onChange={(e) => handleChange(e)} name="title" value={newPostForm.title} />
                <MarginBox marginBottom="1rem" />
                <Line height="0.5px" width="100%" color="#BBBBBB70" />
                <Flex alignItems="center" justifyContent="flex-start" overflowX="scroll" flexWrap="nowrap">
                    <Input type="text" width="50%" height="16px" style={{ color: "white", background: "none", border: "none", boxShadow: "none" }} onChange={(e) => handleChange(e)} name="newTag" value={newPostForm.newTag} onBlur={() => {
                        setNewPostForm(prev => ({ ...prev, hashtags: [...newPostForm.hashtags, newPostForm.newTag] }))
                        setNewPostForm(prev => ({ ...prev, newTag: "#" }))
                    }} />
                    <Flex alignItems="center" justifyContent="flex-start">
                        {
                            newPostForm.hashtags && newPostForm.hashtags.map((tag, index) => (
                                <div onClick={() => { if (tag !== name) setNewPostForm(prev => ({ ...prev, hashtags: newPostForm.hashtags.filter(x => x !== tag) })) }}>
                                    <Flex alignItems="center" justifyContent="flex-start">
                                        <Box height="2rem" borderRadius="1rem" backgroundColor="#BBBBBB70" width="auto" style={{ padding: "0", paddingLeft: "1rem", paddingRight: "1rem" }}>
                                            <Text innerText={tag} fontWeight={BaseStyles.Text.Border1} fontSize={BaseStyles.Text.Heading5} />
                                        </Box>
                                        <MarginBox marginLeft="0.5rem" key={index} />
                                    </Flex>
                                </div>
                            ))
                        }
                    </Flex>
                </Flex>
                <TextArea width="calc(100% - 2rem)" placeholder="어떤 질문이 하고싶나요? 원하는 질문을 자유롭게 적어주세요!" style={{ color: "white", background: "none", border: "none", boxShadow: "none" }} onChange={(e) => handleChange(e)} name="content" value={newPostForm.content} />
                <MarginBox marginBottom="2rem" />
                <Button innerText="Add New Post" width="100%" backgroundColor="#FF8946" color="white" onClick={() => {
                    dispatch(addPost({ title: newPostForm.title, content: newPostForm.content, hashtags: newPostForm.hashtags, username }))
                        .then(res => {
                            if (res.meta.requestStatus === "fulfilled") {
                                dispatch(getAllPosts());
                                setNewPostForm(newPost);
                            }
                        })
                }} />
            </Flex>
        </Box>
    )
}