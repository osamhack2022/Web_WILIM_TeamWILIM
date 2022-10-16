import axios from "axios";
import { useState } from "react";
import ReactDropdown from "react-dropdown"

export const Dropdown = () => {
    const [options, setOptions] = useState<string[]>([]);
    const res = async () => await axios("https://wilimbackend.tk/userGoalElementAPI/ctfInfo").then(res => {
        for(let i = 0; i < res.data.length; i++) {
            setOptions(prev => prev.concat(res.data[i].name));
        }
    });
    res();
    return (
        <ReactDropdown options={options} value={options[0]} placeholder="Select your goal" />
    )
}