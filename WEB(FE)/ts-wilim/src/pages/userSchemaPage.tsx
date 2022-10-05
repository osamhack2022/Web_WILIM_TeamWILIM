import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserByUsername } from "../store/asyncThunks/fetchUserByUsername";
import { AppThunkDispatch } from "../store/store";
import { GoalPlanPage } from "./goalPlanPage";

export const UserSchemaPage = () => {
    const { username } = useParams(); // 파라미터로 username을 가져온다.
    const dispatch = useDispatch<AppThunkDispatch>(); //useDispatch를 이용해서 비동기 처리를 하기 위해서는 AppThunkDispatch를 제네릭으로 받아와야한다.
    useEffect(() => {
        dispatch(fetchUserByUsername(username!)); // username을 바탕으로 유저의 정보를 확인한다.
    }, []);
    
    return (
        <GoalPlanPage />
    )
}