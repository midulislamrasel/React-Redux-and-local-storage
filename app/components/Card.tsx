import React from "react";

export default function Card() {
    // Define the type for a utility
    type Utility = {
        name: string;
        type: string;
        latitude: number;
        longitude: number;
        contact: string;
        description: string;
    };

    // Sample JSON data for utilities
    const utilities: Utility[] = [
        {
            name: "Utility 1",
            type: "Electricity",
            latitude: 35.3405,
            longitude: 25.1332,
            contact: "123-456-789",
            description: "Main electricity provider in Heraklion.",
        },
        {
            name: "Utility 2",
            type: "Water",
            latitude: 35.3656,
            longitude: 24.4828,
            contact: "987-654-321",
            description: "Water services in Chania.",
        },
    ];
    return <div>Card</div>;
}
