import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signUp = createAsyncThunk(
  "Authentication/register",
  async ({ username, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(
        `http://localhost:8284/api/auth/signup`,
        { username, email, password },
        config
      );
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const signIn = createAsyncThunk(
  "Authentication/signin",

  async ({ username, password }, { rejectWithValue }) => {
    try {
      console.log(username, password);

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const token = await axios.post(
        `http://localhost:8284/api/auth/signin`,
        { username, password },
        config
      );

      localStorage.setItem("userToken", token.data.accessToken);
      return token.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

const initialState = {
  userinfo: { username: "", roles: [], id: "" },
  isLoading: false,
  usertoken: localStorage.getItem("usertoken"),
  error: "",
  success: false,
};

const AuthenticationSlice = createSlice({
  name: "Authentication",
  initialState,
  reducers: {
    logout(state, action) {
      state.userinfo = { username: "", roles: [], id: "" };
      state.isLoading = false;
      state.usertoken = "";
      state.error = "";
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.isLoading = true;
      if (action.payload) {
        state.usertoken = action.payload.accessToken;
        state.userinfo = {
          username: action.payload.username,
          roles: action.payload.roles,
          id: action.payload.id,
        };
      }
    });

    builder
      .addCase(signUp.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // builder.addCase(signUp.fulfilled, (state, action) => {
    //   state.isLoading = true;
    //   state.authenticate = action.payload;
    // });
  },
});
export const { logout } = AuthenticationSlice.actions;
const { reducer } = AuthenticationSlice;
export default reducer;
