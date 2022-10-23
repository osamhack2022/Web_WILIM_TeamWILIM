import { Text } from "../atom/text";
import { Flex } from "../atom/flex";
import { MarginBox } from "../atom/marginBox";
import { BaseStyles } from "../theme";
import { Line } from "../atom/line";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { sideBarToggle } from "../../store/slices/toggleSlice";
import axios from "axios";
import originURL from "../../utils/originURL";

interface SideNavBarProps {
    mainLink: string;
    goalLink: string;
    planLink: string;
    profileLink: string;
}

export const SideNavBarMobile = ({ mainLink, goalLink, planLink, profileLink }: SideNavBarProps) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <div style={{ position: "fixed", top: 0, right: "-182px", transitionDuration: "0.5s" }} onClick={() => dispatch(sideBarToggle())}>
            <MobileBox>
                <Flex flexDirection="column" alignItems="center" justifyContent="space-evenly" height="100%">
                    <div onClick={ async () => {
                        window.location.href = `${originURL}/userSchemaAPI/logout`;
                    }}>
                    <Text
                        innerText="Logout"
                        fontSize={BaseStyles.Text.Heading2}
                        fontWeight={BaseStyles.Text.Border1}
                        textAlign="center"
                        color={BaseStyles.Color.Orange2}
                    />
                    </div>
                    <Line width="40%" height="1px" color="#dddddd" />
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
                    <Link to="/community" style={{ textDecoration: "none" }}>
                        <Text
                            innerText="Community"
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
