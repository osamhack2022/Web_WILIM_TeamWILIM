import { SideNavBar } from "../molecule/sideNavBar";
import { MediaDiv, InnerMediaDiv } from "../layout/Layout";

export const SideNavBarTestPage = () => {
    return (
    <MediaDiv>
        <InnerMediaDiv>
            <SideNavBar mainLink="/main" goalLink="/goal" planLink="/plan" profileLink="/profile" />
        </InnerMediaDiv>
    </MediaDiv>
    )
};