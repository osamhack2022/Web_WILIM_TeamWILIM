import { Link } from "react-router-dom"
import { ArrowLeft } from "../atom/arrowLeft"

export const BackArrow = ({ to }: { to: string}) => {
    return (
        <>
            <Link to={to}>
                <ArrowLeft />
            </Link>
        </>
    )
}