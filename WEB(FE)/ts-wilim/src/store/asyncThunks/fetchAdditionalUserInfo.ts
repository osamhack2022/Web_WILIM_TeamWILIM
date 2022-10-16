import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FetchAdditionalUserInfoProps } from "../../schema/fetch";
import originURL from "../../utils/originURL";

export const fetchAdditionalUserInfo = createAsyncThunk(
  "user/FetchAdditionalUserInfo",
  async ({ username, serviceType }: FetchAdditionalUserInfoProps) => {
    const response = await axios.post(
      `${originURL}/userSchemaAPI/register/kakao`,
      {
        username,
        serviceType,
      },
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
