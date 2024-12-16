"use client";

import React, { useState, useEffect } from "react";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8080/New-FoodOrdering/orders/all") // Adjusted URL for backend endpoint
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => setOrders(data))
            .catch((err) => {
                console.error("Error fetching orders:", err.message);
                setError("Failed to fetch orders. Please try again later.");
            });
    }, []);

    const handleUpdateOrder = (id) => {
        const updatedOrder = {
            orderDate: "2024-12-16",
            totalAmount: 99.99,
            user: { id: 1 },
        };

        fetch(`http://localhost:8080/New-FoodOrdering/orders/update/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedOrder),
        })
            .then((response) => response.json())
            .then((data) =>
                setOrders((prevOrders) =>
                    prevOrders.map((order) => (order.id === id ? { ...order, ...data } : order))
                )
            )
            .catch((err) => console.error("Error updating order:", err.message));
    };

    return (
        <div>
            <h2>Orders</h2>
            {error ? (
                <p style={{ color: "red" }}>{error}</p>
            ) : (
                <ul>
                    {orders.map((order) => (
                        <li key={order.id}>
                            Order #{order.id} - {order.orderDate} - ${order.totalAmount.toFixed(2)}
                            <button onClick={() => handleUpdateOrder(order.id)}>Update</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Orders;
