import { createSlice } from "@reduxjs/toolkit";

let itemSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
  },
  reducers: {
    submitForm(state, action) {
      state.items.push({
        name: document.forms.form.name.value,
        price: document.forms.form.price.value,
        id: new Date().getMilliseconds(),
      });
    },
    removeItem(state, action) {
      // console.log(state.items)
    },
  },
});

export let { submitForm, removeItem } = itemSlice.actions;
export default itemSlice.reducer;
