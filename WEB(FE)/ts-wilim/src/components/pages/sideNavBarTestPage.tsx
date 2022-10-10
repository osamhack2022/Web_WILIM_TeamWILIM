import { SideNavBar } from "../molecule/sideNavBar";
import { MediaDiv, InnerMediaDiv } from "../layout/Layout";
import { SideNavBarMobile } from "../molecule/sideNavBarMobile";

export const SideNavBarTestPage = () => {
    return (
        <MediaDiv>
            <InnerMediaDiv>
                {window.innerWidth > 1280 ? <SideNavBar mainLink="/main" goalLink="/goal" planLink="/plan" profileLink="/profile" /> : <SideNavBarMobile mainLink="/main" goalLink="/goal" planLink="/plan" profileLink="/profile" />}
            </InnerMediaDiv>
        </MediaDiv>
    )
};