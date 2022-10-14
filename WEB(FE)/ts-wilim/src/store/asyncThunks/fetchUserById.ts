import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../../schema/user";

export const fetchUserById = createAsyncThunk(
  "user/fetchUserById",
  async (_id: string) => {
    const data = await axios({
      url: `https://wilimbackend.tk/userSchemaAPI/id/${_id}`,
      method: 'GET',
      withCredentials: true,
      headers: {
          'Access-Control-Allow-Origin' : '*',
      }
    });
    console.log(data);
    const { email, username, password, serviceType } = data.data.user;
    const user: User = {
      _id,
      email,
      password,
      username,
      serviceType,
      goal: "",
    };
    return user;
  }
);
