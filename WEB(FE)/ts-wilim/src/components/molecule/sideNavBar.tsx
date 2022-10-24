import { Text } from "../atom/text";
import { Flex } from "../atom/flex";
import { MarginBox } from "../atom/marginBox";
import { BaseStyles } from "../theme";
import { Line } from "../atom/line";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "../atom/box";
import axios from "axios";
import { useDispatch } from "react-redux";
import { AppThunkDispatch } from "../../store/store";
import { fetchLoginInfo } from "../../store/asyncThunks/fetchLoginInfo";
import originURL from "../../utils/originURL";

interface SideNavBarProps {
    mainLink: string;
    goalLink: string;
    planLink: string;
    profileLink: string;
}

export const SideNavBar = ({ mainLink, goalLink, planLink, profileLink }: SideNavBarProps) => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppThunkDispatch>();
    return (
        <div style={{ position: "fixed", top: "20vh", left: "calc(70vw + 2rem)" }}>
            <Box
                width="150px"
                borderRadius="0.5rem"
                backgroundColor={BaseStyles.Color.Black4}
            >
                <Flex flexDirection="column" alignItems="center" justifyContent="space-evenly" height="60vh">
                    <div onClick={() => {
                        window.location.href = `${originURL}/userSchemaAPI/logout`;
                        // await axios(`${originURL}/userSchemaAPI/logout`)
                        // .then(res => {
                        //     if(res.status < 400) {
                        //         window.location.href = "/";
                        //     }
                        // }); 
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
            </Box>
        </div>
    );
};
