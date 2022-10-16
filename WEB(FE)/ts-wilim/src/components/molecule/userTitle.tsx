import { Flex } from "../atom/flex";
import { Line } from "../atom/line";
import { MarginBox } from "../atom/marginBox";
import { Text } from "../atom/text";
import { BaseStyles } from "../theme";
import { useSelector } from "react-redux";
import { ReducerType } from "../../store/rootReducer";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { MenuIcon } from "../atom/menuIcon";
import { sideBarToggle } from "../../store/slices/toggleSlice";

export const UserTitle = () => {
  const { username, email } = useSelector((state: ReducerType) => state.userInfo);
  const [width, setWidth] = useState<number>(window.innerWidth);
  window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
      console.log(width);
  });
  const dispatch = useDispatch();
  return (
    <Flex flexDirection="column" alignItems="center" width="100%">
      <Flex width="100%" justifyContent="space-between" alignItems="center">
        <Text
          innerText={`${username} | ${email}`}
          color="white"
          fontSize={BaseStyles.Text.Heading2}
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
