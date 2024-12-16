"use client";

import React, { useState, useEffect } from "react";

const Restaurants = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch restaurants from the API
        fetch("http://localhost:8080/New-FoodOrdering/restaurants/all")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => setRestaurants(data))
            .catch((err) => {
                console.error("Error fetching restaurants:", err.message);
                setError("Failed to fetch restaurants. Please try again later.");
            });
    }, []);

    return (
        <div>
            <h2>Restaurants</h2>
            {error ? (
                <p style={{ color: "red" }}>{error}</p>
            ) : (
                <ul>
                    {restaurants.map((restaurant) => (
                        <li key={restaurant.id}>
                            <strong>{restaurant.name}</strong> - Location: {restaurant.location}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Restaurants;
