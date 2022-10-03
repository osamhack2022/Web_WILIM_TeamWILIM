import axios from "axios";
import { useEffect } from "react"
import { useParams } from "react-router-dom";

export const UserSchemaPage = () => {
    const { username } = useParams();
    useEffect(() => {
        const getfunc = async () => {
            const data = await fetch(`http://Wilimback-env.eba-hbw286vk.ap-northeast-2.elasticbeanstalk.com/userSchemaAPI/${username}`)
            console.log(data);
        }
        getfunc();
    }, [])
    return (
        <h1>ehllo</h1>
    )
}