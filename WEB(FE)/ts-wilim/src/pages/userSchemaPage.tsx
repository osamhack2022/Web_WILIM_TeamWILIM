import axios from "axios";
import { useEffect } from "react"
import { useParams } from "react-router-dom";

export const UserSchemaPage = () => {
    const { username } = useParams();
    useEffect(() => {
        const getfunc = async () => {
            const data = await axios.get(`https://wilimbackend.tk/userSchemaAPI/${username}`)
            console.log(data.data.user);
        }
        getfunc();
    }, [])
    return (
        <h1>ehllo</h1>
    )
}