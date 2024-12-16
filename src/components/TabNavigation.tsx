"use client";

import React, { useState } from 'react';

const TabNavigation: React.FC = () => {
    const [activeTab, setActiveTab] = useState('customers');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'customers':
                return <div>Customers Content</div>;
            case 'orders':
                return <div>Orders Content</div>;
            case 'menuItems':
                return <div>Menu Items Content</div>;
            case 'restaurants':
                return <div>Restaurants Content</div>;
            default:
                return null;
        }
    };

    return (
        <div>
            <nav>
                <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
                    {['customers', 'orders', 'menuItems', 'restaurants'].map((tab) => (
                        <li
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            style={{
                                padding: '10px 20px',
                                cursor: 'pointer',
                                backgroundColor: activeTab === tab ? '#ccc' : '#f9f9f9',
                                marginRight: '10px',
                                borderRadius: '5px',
                            }}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </li>
                    ))}
                </ul>
            </nav>
            <main style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '5px', marginTop: '10px' }}>
                {renderTabContent()}
            </main>
        </div>
    );
};

export default TabNavigation;
