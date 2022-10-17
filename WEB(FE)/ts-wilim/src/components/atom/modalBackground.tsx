import styled from "styled-components"

export const ModalBackground = ({ children }: { children : JSX.Element | JSX.Element[] }) => {
    return (
        <ModalBackDiv>
            {children}
        </ModalBackDiv>
    )
}

const ModalBackDiv = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #00000040;
`