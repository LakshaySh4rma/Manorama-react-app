import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    data: null,
    loading: false,
    error: null,
    status: null
}
//Add register data
export const addOrder = createAsyncThunk("order/add", async (object, { rejectWithValue }) => {
  try {
    const orderDataObject = {
      userId: object.userId,
      address: "noida",
      paymentMethod: "cod"
    };
    const res = await axios.post("http://localhost:8000/api/order/createOrder", orderDataObject);
    return res.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || "Failed to Order item");
  }
});

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Add Order
      .addCase(addOrder.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orderItems = action.payload;
        state.status = "success";
      })
      .addCase(addOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.status = "failed";
      })
    //   // Order List
    //   .addCase(orderList.pending, (state) => {
    //     state.isLoading = true;
    //     state.error = null;
    //   })
    //   .addCase(orderList.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.orderListDetails = action.payload;
    //   })
    //   .addCase(orderList.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.payload;
    //   });
  }
});

export default orderSlice.reducer;


