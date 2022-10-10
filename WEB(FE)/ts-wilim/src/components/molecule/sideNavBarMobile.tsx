import { Text } from "../atom/text";
import { Flex } from "../atom/flex";
import { MarginBox } from "../atom/marginBox";
import { BaseStyles } from "../theme";
import { Line } from "../atom/line";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { ReducerType } from "../../store/rootReducer";
import { useDispatch } from "react-redux";
import { sideBarToggle } from "../../store/slices/sideBarToggleSlice";

interface SideNavBarProps {
    mainLink: string;
    goalLink: string;
    planLink: string;
    profileLink: string;
}

export const SideNavBarMobile = ({ mainLink, goalLink, planLink, profileLink }: SideNavBarProps) => {
    const dispatch = useDispatch();
    const toggle = useSelector((state: ReducerType) => state.sideBarToggle);
    const pixel = !toggle ? -182 : 0;
    return (
        <div style={{ position: "fixed", top: 0, right: pixel, transitionDuration: "0.5s" }} onClick={() => dispatch(sideBarToggle())}>
            <MobileBox>
                <Flex flexDirection="column" alignItems="center" justifyContent="flex-start" height="100%">
                    <MarginBox marginBottom="6rem" />
                    <Text
                        innerText="WILIM"
                        fontSize={BaseStyles.Text.Heading2}
                        fontWeight={BaseStyles.Text.Border1}
                        textAlign="center"
                        color={BaseStyles.Color.Orange2}
                    />
                    <MarginBox marginBottom="6rem" />
                    <Line width="40%" height="1px" color="#dddddd" />
                    <MarginBox marginBottom="7rem" />
                    <Link to={mainLink} style={{ textDecoration: "none" }}>
                        <Text
                            innerText="Main"
                            color="Gray"
                            fontSize="24px"
                            fontWeight={BaseStyles.Text.Border2}
                            textAlign="center"
                            hoverColor="White"
                        />
                    </Link>
                    <MarginBox marginBottom="6rem" />
                    <Link to={goalLink} style={{ textDecoration: "none" }}>
                        <Text
                            innerText="Goal"
                            color="Gray"
                            fontSize="24px"
                            fontWeight={BaseStyles.Text.Border2}
                            textAlign="center"
                            hoverColor="White"
                        />
                    </Link>
                    <MarginBox marginBottom="6rem" />
                    <Link to={planLink} style={{ textDecoration: "none" }}>
                        <Text
                            innerText="Plan"
                            color="Gray"
                            fontSize="24px"
                            fontWeight={BaseStyles.Text.Border2}
                            textAlign="center"
                            hoverColor="White"
                        />
                    </Link>
                    <MarginBox marginBottom="6rem" />
                    <Link to={profileLink} style={{ textDecoration: "none" }}>
                        <Text
                            innerText="Profile"
                            color="Gray"
                            fontSize="24px"
                            fontWeight={BaseStyles.Text.Border2}
                            textAlign="center"
                            hoverColor="White"
                        />
                    </Link>
                </Flex>
            </MobileBox>
        </div>
    );
};

const MobileBox = styled.div`
    width: 150px;
    height: 100vh;
    background-color: ${BaseStyles.Color.Black4};
    box-shadow: ${BaseStyles.Shadow.BottomDefault};
    transition-duration: 0.5s;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`
