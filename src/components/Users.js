"use client";

import React, { useState, useEffect } from "react";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8080/New-FoodOrdering/users/all")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => setUsers(data))
            .catch((err) => {
                console.error("Error fetching users:", err.message);
                setError("Failed to fetch users. Please try again later.");
            });
    }, []);

    return (
        <div>
            <h3>Users List</h3>
            {error ? (
                <p style={{ color: "red" }}>{error}</p>
            ) : (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            <strong>{user.name}</strong> - {user.email} -{" "}
                            {user.phone_number} - Version: {user.version || "N/A"}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Users;
