import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FetchAddUserPlanProps } from "../../schema/fetch";

export const addUserPlan = createAsyncThunk(
  "user/addUserPlan",
  async ({ username, date, detail, steady, completed }: FetchAddUserPlanProps) => {
    const response = await axios.post(
      `https://wilimbackend.tk/userPersonalPlanAPI/${username}/plans`,
      { date, detail, steady, completed },
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
