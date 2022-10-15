import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const getUserGoal = createAsyncThunk(
  "user/getUserGoal",
  async ({ username }: { username: string }) => {
    const response = await axios({
      url: `https://wilimbackend.tk/userGoalElementAPI/goal/${username}`,
      method: "GET",
      withCredentials: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      }
    })
    if (response.status === 201) {
      console.log(response.data);
      return response.data;
    }
    return response.data;
  }
);
