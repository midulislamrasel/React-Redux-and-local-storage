"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import { clearText, setText } from "../redux/features/textSlice/textSlice";

export default function TextForm() {
    const dispatch = useDispatch();
    const text = useSelector((state: RootState) => state.text.value);
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(setText(inputValue)); // Update Redux state
        setInputValue(""); // Clear the input field
    };
    const handleClear = () => {
        dispatch(clearText()); // Clear Redux state
    };
    return (
        <div className="text-black">
            <form
                onSubmit={handleSubmit}
                // onSubmit={(e)=>()}
                className="flex flex-col items-center mt-5"
            >
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    // onChange={(e)=>()}
                    placeholder="Enter text"
                    className="w-72 p-3 mb-4 border border-gray-300 rounded-lg text-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <div>
                    <button
                        type="submit"
                        className="p-3 w-40 mr-2 bg-blue-500 text-white rounded-lg cursor-pointer text-lg hover:bg-blue-700"
                    >
                        Submit
                    </button>
                    {text && (
                        <button
                            onClick={handleClear}
                            className="mt-4 p-3 w-40 bg-red-500 text-white rounded-lg cursor-pointer text-lg hover:bg-red-700"
                        >
                            Remove
                        </button>
                    )}
                </div>
            </form>

            <div>
                <h2 className="text-center mt-8 text-xl text-red-500 font-sans">
                    Current Text:
                    <span className="text-green-500"> {text}</span>
                </h2>
            </div>
        </div>
    );
}
