import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import styled from "styled-components"
import { ReducerType } from "../../store/rootReducer"
import { desModalToggle } from "../../store/slices/toggleSlice";

export const ModalBackground = ({ children }: { children : JSX.Element | JSX.Element[] }) => {
    const isModal = useSelector((state: ReducerType) => state.toggle.desModal);
    const dispatch = useDispatch();
    return (
        <ModalBackDiv isModal={isModal} onClick={() => dispatch(desModalToggle())}>
            {children}
        </ModalBackDiv>
    )
}

const ModalBackDiv = styled.div<{ isModal: boolean }>`
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    display: ${({ isModal }) => !isModal ? "none" : "flex"};
    backdrop-filter: blur(10px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #00000040;
`