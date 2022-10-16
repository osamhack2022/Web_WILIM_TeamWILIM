import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import originURL from "../../utils/originURL";

export const fetchUserGoalByUsername = createAsyncThunk(
  "user/fetchUserGoalByUsername",
  async (username: string) => {
    const response = await axios({
      url: `${originURL}/userGoalElementAPI/goal/${username}`,
      method: 'GET',
      withCredentials: true,
      headers: {
          'Access-Control-Allow-Origin' : '*',
      }
    });
    console.log(response.data);
    return response.data;
  }
);