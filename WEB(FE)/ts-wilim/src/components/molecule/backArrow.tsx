import { ArrowLeft } from "../atom/arrowLeft"
import { useNavigate } from "react-router-dom"

export const BackArrow = () => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(-1)}>
                <ArrowLeft />
        </div>
    )
}