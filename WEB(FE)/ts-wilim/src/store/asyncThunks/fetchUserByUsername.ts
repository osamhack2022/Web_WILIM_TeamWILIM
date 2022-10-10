import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../../schema/user";

export const fetchUserByUsername = createAsyncThunk(
  "user/fetchUserByUsername",
  async (username: string) => {
    const data = await axios.get(`https://wilimbackend.tk/userSchemaAPI/${username}`);
    console.log(data);
    const { _id, email, password, serviceType } = data.data.user;
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