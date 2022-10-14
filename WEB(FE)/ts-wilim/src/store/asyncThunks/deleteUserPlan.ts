import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteUserPlan = createAsyncThunk(
  "user/deleteUserPlan",
  async ({ username, id }: { username: string, id: string }) => {
    const response = await axios.post(
      `https://wilimbackend.tk/userPersonalPlanAPI/${username}/plans/${id}`,
      { id },
      {
        withCredentials: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    if (response.status < 400) {
      console.log(response.data);
    }
    return response.data;
  }
);
