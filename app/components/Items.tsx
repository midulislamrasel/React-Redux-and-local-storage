"use client";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import {
    addItem,
    removeItem,
    updateQuantity,
    setItems,
} from "@/app/redux/features/itemslice/itemSlice";
import {
    saveToLocalStorage,
    loadFromLocalStorage,
} from "../utils/crete/locationUtils";
export default function ItemsManager() {
    const dispatch = useDispatch();
    const items = useSelector((state: RootState) => state.items.items);

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const savedItems = loadFromLocalStorage("items");
        if (savedItems) {
            dispatch(setItems(savedItems));
        }
    }, [dispatch]);

    useEffect(() => {
        saveToLocalStorage("items", items);
    }, [items]);

    const handleAddItem = () => {
        if (name.trim()) {
            dispatch(
                addItem({
                    id: Date.now().toString(),
                    name,
                    quantity,
                })
            );
            setName("");
            setQuantity(1);
        }
    };

    const handleRemoveItem = (id: string) => {
        dispatch(removeItem(id));
    };

    const handleUpdateQuantity = (id: string, newQuantity: number) => {
        dispatch(updateQuantity({ id, quantity: newQuantity }));
    };

    return (
        <div className="max-w-md mx-auto p-5 bg-white shadow-md rounded-lg">
            <h2 className="text-lg font-semibold mb-3 text-blue-600 ">
                Items Manager
            </h2>
            <div className="mb-4  text-black">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Item Name"
                    className="w-full p-2 mb-2 border border-gray-300 rounded-lg"
                />
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    placeholder="Quantity"
                    className="w-full p-2 mb-2 border border-gray-300 rounded-lg text-black"
                />
                <button
                    onClick={handleAddItem}
                    className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700"
                >
                    Add Item
                </button>
            </div>
            <ul className="mt-4 ">
                {items.map((item) => (
                    <li
                        key={item.id}
                        className="flex justify-between items-center mb-2"
                    >
                        <span className="text-black">
                            {item.name}{" "}
                            <span className="text-red-500 font-semibold">
                                {item.quantity}
                            </span>
                        </span>
                        <div className="flex space-x-2">
                            <button
                                onClick={() =>
                                    handleUpdateQuantity(
                                        item.id,
                                        Math.max(item.quantity - 1, 0)
                                    )
                                }
                                className="bg-red-500 text-white px-2 rounded-lg hover:bg-red-700"
                            >
                                -
                            </button>
                            <button
                                onClick={() =>
                                    handleUpdateQuantity(
                                        item.id,
                                        item.quantity + 1
                                    )
                                }
                                className="bg-green-500 text-white px-2 rounded-lg hover:bg-green-700"
                            >
                                +
                            </button>
                            <button
                                onClick={() => handleRemoveItem(item.id)}
                                className="bg-gray-500 text-white px-2 rounded-lg hover:bg-gray-700"
                            >
                                Remove
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
