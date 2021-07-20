import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getItems } from "../../controller/api/itemsApi";

const fetchItems = createAsyncThunk(
  "items/getItems",
  async ({ page_number, page_size }, thunkAPI) => {
    const response = await getItems(page_number, page_size);
    return response;
  }
);

const slice = createSlice({
  name: "Items",
  initialState: [],
  reducers: { fetchMore: (state, { payload }) => {} },
  extraReducers: {
    [fetchItems.fulfilled]: (state, { payload }) => state.concat(payload),
  },
});
export { fetchItems };
export default slice.reducer;
