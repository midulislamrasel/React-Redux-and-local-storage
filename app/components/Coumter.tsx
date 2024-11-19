"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store/store";
import { decrement, increment } from "../redux/features/counter/counterSlice";

const Counter = () => {
    const dispatch: AppDispatch = useDispatch();
    const value = useSelector((state: RootState) => state.counters.value);

    return (
        <div>
            <h1 className="text-2xl mb-2">Counter: {value}</h1>
            <button
                className="btn bg-sky-400 mr-2 text-2xl p-2 "
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
            <button
                className="btn bg-sky-400 mr-2 text-2xl p-2 "
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>
        </div>
    );
};

export default Counter;
