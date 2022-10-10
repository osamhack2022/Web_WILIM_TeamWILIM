import { Text } from "../atom/text";
import { Flex } from "../atom/flex";
import { MarginBox } from "../atom/marginBox";
import { BaseStyles } from "../theme";
import { Line } from "../atom/line";
import { Link } from "react-router-dom";
import { Box } from "../atom/box";

interface SideNavBarProps {
    mainLink: string;
    goalLink: string;
    planLink: string;
    profileLink: string;
}

export const SideNavBar = ({ mainLink, goalLink, planLink, profileLink }: SideNavBarProps) => {
    return (
    <Box
    width="calc(100% - 2rem)"
    borderRadius="0.5rem"
    backgroundColor={BaseStyles.Color.Black4}
    >
        <Flex flexDirection="column" alignItems="center">
            <Text
            innerText="WILIM"
            fontSize={BaseStyles.Text.Heading2}
            fontWeight={BaseStyles.Text.Border1}
            textAlign="center"
            color={BaseStyles.Color.Orange2}
            />
            <MarginBox marginBottom="1rem" />
            <Line width="100%" height="2px" color="white" />
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
            <MarginBox marginBottom="2rem" />
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
            <MarginBox marginBottom="2rem" />
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
            <MarginBox marginBottom="2rem" />
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
    </Box>
    );
};
