import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { List } from "../../schema/plan";

export const addUserPlan = createAsyncThunk(
  "user/addUserPlan",
  async ({ date, detail, steady, completed }: List) => {
    const response = await axios.post(
      `https://wilimbackend.tk/userSchemaAPI/register/kakao`,
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
