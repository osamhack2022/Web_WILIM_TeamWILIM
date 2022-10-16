import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import originURL from "../../utils/originURL";

export const deleteUserPlan = createAsyncThunk(
  "user/deleteUserPlan",
  async ({ username, id }: { username: string, id: string }) => {
    console.log(id);
    const response = await axios({
      url: `${originURL}/userPersonalPlanAPI/${username}/plans/${id}`,
      method: "DELETE",
      withCredentials: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      }
    });
    if (response.status < 400) {
      console.log(response.data);
    }
    return response.data;
  }
);
