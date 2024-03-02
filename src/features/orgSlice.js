import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { mainAxios } from "../app/api";
import service from "../services.json";
import { errorToast, setCookie, successToast } from "../app/helper";

const initialState = {
  orgList: [],
  status: "idle",
  error: null,
  addStatus: false,
};

export const fetchAllOrgAsync = createAsyncThunk(
  "org/fetchAllOrgAsync",
  async (state, { rejectWithValue }) => {
    try {
      const response = await mainAxios.get(service.getAllOrg);
      return response.data;
    } catch (err) {
      console.log({ err });
      return rejectWithValue(err);
    }
  }
);

// addOrgAsync
export const addOrgAsync = createAsyncThunk(
  "org/addOrgAsync",
  async (state, { rejectWithValue }) => {
    try {
      const response = await mainAxios.post(service.addNewOrg, {
        organizationName: state.organizationName,
        organizationShortName: state.organizationShortName,
        organizationURL: state.organizationURL,
        organizationLOGO: state.organizationLOGO,
      });
      return response.data;
    } catch (err) {
      console.log({ err });
      return rejectWithValue(err);
    }
  }
);

export const orgSlice = createSlice({
  name: "org",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllOrgAsync.pending, (state, { payload }) => {
        state.status = "loading";
      })
      .addCase(fetchAllOrgAsync.fulfilled, (state, { payload }) => {
        return {
          ...state,
          orgList: payload.data,
        };
      })
      .addCase(fetchAllOrgAsync.rejected, (state, { payload }) => {
        state.status = "idle";
      })
      .addCase(addOrgAsync.pending, (state, { payload }) => {
        state.status = "loading";
      })
      .addCase(addOrgAsync.fulfilled, (state, { payload }) => {
        successToast("Orgnization added successfully.");
        return {
          ...state,
          status: "idle",
          addStatus: true,
        };
      })
      .addCase(addOrgAsync.rejected, (state, { payload }) => {
        errorToast("Failed to add orgnization.");
        state.status = "idle";
      });
  },
});

// Action creators are generated for each case reducer function
export const { resetUserData } = orgSlice.actions;

export default orgSlice.reducer;
