import { useEffect } from "react"
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchUserByUsername } from "../models/fetchUserByUsername";
import { AppThunkDispatch } from "../store/store";

export const UserSchemaPage = () => {
    const { username } = useParams();
    const dispatch = useDispatch<AppThunkDispatch>();
    useEffect(() => {
        dispatch(fetchUserByUsername(username!));
    }, []);
    return (
        <h1>ehllo</h1>
    )
}