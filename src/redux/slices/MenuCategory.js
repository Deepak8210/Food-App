import { createSlice } from "@reduxjs/toolkit";

const initialState = { category: "all" };

const MenuCategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategroy: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setCategroy } = MenuCategorySlice.actions;
export default MenuCategorySlice.reducer;
