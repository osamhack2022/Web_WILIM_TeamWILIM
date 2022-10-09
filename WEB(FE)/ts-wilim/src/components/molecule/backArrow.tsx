import { ArrowLeft } from "../atom/arrowLeft"
import { useNavigate } from "react-router-dom"

export const BackArrow = ({ to }: { to: string }) => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`${to}`)}>
                <ArrowLeft />
        </div>
    )
}