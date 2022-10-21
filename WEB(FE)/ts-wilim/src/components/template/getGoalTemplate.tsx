import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { desModalToggle, goalSearchInfoToggle } from "../../store/slices/toggleSlice";
import { Box } from "../atom/box";
import { Flex } from "../atom/flex"
import { MarginBox } from "../atom/marginBox";
import { Text } from "../atom/text"
import { BaseStyles } from "../theme";

export const GetGoalTemplate = () => {
    const dispatch = useDispatch();
    const [options, setOptions] = useState<string[]>([]);
    const res = async () => await axios("https://wilimbackend.tk/userGoalElementAPI/ctfInfo").then(res => {
        for (let i = 0; i < res.data.length; i++) {
            setOptions(prev => prev.concat(res.data[i].name));
        }
    });
    useEffect(() => {
        res();
    }, [])

    return (
        <Flex flexDirection="column"alignItems="center">
            <Text innerText="Greeting!" fontSize={BaseStyles.Text.Heading2} fontWeight={BaseStyles.Text.Border1} />
            <MarginBox marginBottom="3rem" />
            <Box width="calc(100% - 2rem)" borderRadius="6px" backgroundColor="#494949" height="50vh" style={{ overflow: "auto" }}>
                <Flex flexDirection="column" justifyContent="flex-start" height="100%">
                    {
                        options.map((item, index) => {
                            return (
                                <div key={index}>
                                    <Flex width="100%" justifyContent="flex-start" alignItems="center">
                                        <Text innerText={item} fontSize={BaseStyles.Text.Heading4} onClick={() => {
                                            dispatch(desModalToggle())
                                            dispatch(goalSearchInfoToggle(item))
                                        }} />
                                    </Flex>
                                    <MarginBox marginBottom="1rem" />
                                </div>
                            )
                        })
                    }
                </Flex>
            </Box>
        </Flex>
    )
}