import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import originURL from "../../utils/originURL";

export const updateUserGoal = createAsyncThunk(
  "user/updateUserPlan",
  async ({ username, goalElement }: { username: string, goalElement: string }) => {
    const response = await axios.post(
      `${originURL}/userGoalElementAPI/goal/${username}`,
      { goalElement },
      {
        withCredentials: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    if (response.status === 201) {
      console.log(response.data);
      return response.data;
    }
    return response.data;
  }
);
