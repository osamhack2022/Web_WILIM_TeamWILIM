import { useState } from "react";
import { useDispatch } from "react-redux";
import { sideBarToggle } from "../../store/slices/toggleSlice";
import { Flex } from "../atom/flex";
import { Line } from "../atom/line";
import { MarginBox } from "../atom/marginBox";
import { MenuIcon } from "../atom/menuIcon";
import { Text } from "../atom/text";
import { BaseStyles } from "../theme";

export const Title = ({ innerText }: { innerText: string }) => {
    const [width, setWidth] = useState<number>(window.innerWidth);
    window.addEventListener("resize", () => {
        setWidth(window.innerWidth);
    });
    const dispatch = useDispatch();
    return (
        <Flex flexDirection="column" alignItems="center" width="100%">
            <Flex width="100%" justifyContent="space-between" alignItems="center">
                <Text
                    innerText={`${innerText}`}
                    color="white"
                    fontSize={BaseStyles.Text.Heading1}
                    fontWeight={BaseStyles.Text.Border0}
                />
                {width <= 1080 ? <div onClick={() => dispatch(sideBarToggle())} style={{ cursor: "pointer" }}><MenuIcon /></div> : <></>}
            </Flex>
            <MarginBox marginBottom="0.5rem" />
            <Line
                width="100%"
                height="1px"
                color={BaseStyles.Color.Black0}
            />
        </Flex>
    );
};
