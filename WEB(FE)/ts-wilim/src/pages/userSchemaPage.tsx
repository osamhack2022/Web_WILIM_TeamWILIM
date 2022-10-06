import { useEffect } from "react"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { GoalPlanTemplate } from "../components/template/goalPlanTemplate";
import { InnerMediaDiv, MediaDiv } from "../layout/Layout";
import { fetchUserByUsername } from "../store/asyncThunks/fetchUserByUsername";
import { ReducerType } from "../store/rootReducer";
import { AppThunkDispatch } from "../store/store";

export const UserSchemaPage = () => {
    const { username } = useParams(); // 파라미터로 username을 가져온다.
    const dispatch = useDispatch<AppThunkDispatch>(); //useDispatch를 이용해서 비동기 처리를 하기 위해서는 AppThunkDispatch를 제네릭으로 받아와야한다.
    const _id = useSelector((state: ReducerType) => state.userInfo._id);
    useEffect(() => {
        dispatch(fetchUserByUsername(username!)); // username을 바탕으로 유저의 정보를 확인한다.
    }, []);

    return (
        <>
            <MediaDiv>
                <InnerMediaDiv>
                    <GoalPlanTemplate />
                </InnerMediaDiv>
            </MediaDiv>
        </>
    )
}