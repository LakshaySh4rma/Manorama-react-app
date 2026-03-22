import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface OrderState {
  data: any;
  loading: boolean;
  error: string | null;
  status: string | null;
}

const initialState: OrderState = {
  data: null,
  loading: false,
  error: null,
  status: null,
};

// Add register data
export const addOrder = createAsyncThunk(
  "order/add",
  async (object: any, { rejectWithValue }) => {
    try {
      const orderDataObject = {
        userId: object.userId,
        address: "noida",
        paymentMethod: "cod",
      };

      const res = await axios.post(
        "http://localhost:8000/api/order/createOrder",
        orderDataObject,
      );

      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Failed to Order item");
    }
  },
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(addOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.status = "loading";
      })

      .addCase(addOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.status = "success";
      })

      .addCase(addOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.status = "failed";
      });
  },
});

export default orderSlice.reducer;
