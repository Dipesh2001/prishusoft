import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addToken, mainAxios } from "../app/api";
import service from "../services.json";
import { errorToast, setCookie, successToast } from "../app/helper";

const initialState = {
  userData: {},
  status: "idle",
  error: null,
};

export const loginAsync = createAsyncThunk(
  "login/loginAsync",
  async (state, { rejectWithValue }) => {
    try {
      const response = await mainAxios.post(service.login, {
        email: state.email,
        password: state.password,
        organizationUrl: state.orgnizationUrl,
      });
      return response.data;
    } catch (err) {
      console.log({ err });
      return rejectWithValue(err);
    }
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state, { payload }) => {
        state.status = "loading";
      })
      .addCase(loginAsync.fulfilled, (state, { payload }) => {
        setCookie(payload.auth_token);
        addToken(payload.auth_token);
        successToast("Logged in successfully.");
        return {
          ...state,
          status: "idle",
          userData: payload,
        };
      })
      .addCase(loginAsync.rejected, (state, { payload }) => {
        errorToast("Faild to login");
        state.status = "idle";
      });
  },
});

// Action creators are generated for each case reducer function
export const { resetUserData } = loginSlice.actions;

export default loginSlice.reducer;
