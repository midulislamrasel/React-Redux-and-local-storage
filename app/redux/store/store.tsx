import { configureStore } from "@reduxjs/toolkit";
import textReducer from "@/app/redux/features/textSlice/textSlice";
import counterReducer from "@/app/redux/features/counter/counterSlice";
import itemsReducer from "@/app/redux/features/itemslice/itemSlice";
import {
    loadFromLocalStorage,
    saveToLocalStorage,
} from "@/app/utils/crete/locationUtils";

//const preloadedState = loadFromLocalStorage();

// Create the Redux store
export const store = configureStore({
    reducer: {
        counters: counterReducer,
        text: textReducer,
        items: itemsReducer,
    },
    // preloadedState,
});

// store.subscribe(() => {
//     saveToLocalStorage({
//         text: store.getState().text,
//     });
// });

// export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
