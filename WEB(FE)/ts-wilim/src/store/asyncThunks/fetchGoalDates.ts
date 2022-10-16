import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGoalDates = createAsyncThunk(
  "user/fetchGoalDates",
  async ({ url }: { url: string }) => {
    const response = await axios(url)
    if (response.status < 400) {
      console.log(response.data);
    }
    return response.data.body;
  }
);
