import { createSlice } from "@reduxjs/toolkit";

const textSlice = createSlice({
    name: "text",
    initialState: {
        value: "", // Initial text value
    },
    reducers: {
        setText: (state, action) => {
            state.value = action.payload; // Update the text state
        },
        clearText: (state) => {
            state.value = ""; // Clear the text
        },
    },
});

export const { setText, clearText } = textSlice.actions;
export default textSlice.reducer;
