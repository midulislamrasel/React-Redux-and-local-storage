// redux/features/itemsSlice/itemsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Item = {
    id: string;
    name: string;
    quantity: number;
};

interface ItemsState {
    items: Item[];
}

const initialState: ItemsState = {
    items: [],
};

const itemsSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Item>) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );
        },
        updateQuantity: (
            state,
            action: PayloadAction<{ id: string; quantity: number }>
        ) => {
            const item = state.items.find(
                (item) => item.id === action.payload.id
            );
            if (item) {
                item.quantity = action.payload.quantity;
            }
        },
        setItems: (state, action: PayloadAction<Item[]>) => {
            state.items = action.payload;
        },
    },
});

export const { addItem, removeItem, updateQuantity, setItems } =
    itemsSlice.actions;

export default itemsSlice.reducer;
