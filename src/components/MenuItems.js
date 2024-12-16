"use client";

import React, { useState, useEffect } from "react";

const MenuItems = () => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/New-FoodOrdering/menu_items/all")
            .then((response) => response.json())
            .then((data) => setMenuItems(data))
            .catch((error) => console.error("Error fetching menu items:", error));
    }, []);

    return (
        <div>
            <h3>Menu Items</h3>
            <ul>
                {menuItems.map((item) => (
                    <li key={item.id}>
                        <strong>{item.name}</strong> - ${item.price} -{" "}
                        Restaurant ID: {item.restaurant_id || "N/A"}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MenuItems;