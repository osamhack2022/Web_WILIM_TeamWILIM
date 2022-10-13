import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { kakaoLogin } from "../../store/asyncThunks/kakaoLogin";
import { AppThunkDispatch } from "../../store/store";
import { Button } from "../atom/button";

export const KakaoTestButton = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppThunkDispatch>();
    return (
        <Button innerText="카카오로 로그인하기" width="60%" onClick={() => {
            dispatch(kakaoLogin())
                .then(res => {
                    if (res.meta.requestStatus === "fulfilled") navigate(`/main`);
                });
        }
        } color="#3A1D1D" backgroundColor="#F7E600" hoverColor="#F7E600" />
    )
};
