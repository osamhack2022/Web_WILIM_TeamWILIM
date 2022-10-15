import { Text } from "../atom/text";
import { Flex } from "../atom/flex";
import { MarginBox } from "../atom/marginBox";
import { BaseStyles } from "../theme";
import { Line } from "../atom/line";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "../atom/box";
import axios from "axios";

interface SideNavBarProps {
    mainLink: string;
    goalLink: string;
    planLink: string;
    profileLink: string;
}

export const SideNavBar = ({ mainLink, goalLink, planLink, profileLink }: SideNavBarProps) => {
    const navigate = useNavigate();
    return (
        <div style={{ position: "fixed", top: "20vh", left: "calc(70vw + 2rem)" }}>
            <Box
                width="150px"
                borderRadius="0.5rem"
                backgroundColor={BaseStyles.Color.Black4}
            >
                <Flex flexDirection="column" alignItems="center">
                    <MarginBox marginBottom="1rem" />
                    <div onClick={async () => {
                        await axios("https://wilimbackend.tk/userSchemaAPI/logout")
                        .then(res => {
                            if(res.status < 400) {
                                navigate("/");
                                console.log("logout!");
                            }
                        }); 
                    }}>
                        <Text
                            innerText="WILIM"
                            fontSize={BaseStyles.Text.Heading2}
                            fontWeight={BaseStyles.Text.Border1}
                            textAlign="center"
                            color={BaseStyles.Color.Orange2}
                        />
                    </div>
                    <MarginBox marginBottom="2rem" />
                    <Line width="40%" height="1px" color="#dddddd" />
                    <MarginBox marginBottom="3rem" />
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
                    <MarginBox marginBottom="4rem" />
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
                    <MarginBox marginBottom="4rem" />
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
                    <MarginBox marginBottom="4rem" />
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
                    <MarginBox marginBottom="2rem" />
                </Flex>
            </Box>
        </div>
    );
};
