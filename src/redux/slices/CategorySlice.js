import { createSlice } from "@reduxjs/toolkit";

const initialState = { category: "breakfast" };

const CategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategroy: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setCategroy } = CategorySlice.actions;
export default CategorySlice.reducer;
