export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            <title>Food Ordering App</title>
            <style>{`
                    body {
                        margin: 0;
                        font-family: Arial, sans-serif;
                        background-color: #f8f9fa;
                        color: #212529;
                    }
                    header {
                        background-color: #007bff;
                        color: white;
                        padding: 20px;
                        text-align: center;
                    }
                    header h1 {
                        margin: 0;
                        font-size: 1.8rem;
                    }
                    nav {
                        background-color: #0056b3;
                        padding: 10px 0;
                    }
                    nav ul {
                        list-style-type: none;
                        padding: 0;
                        margin: 0;
                        display: flex;
                        justify-content: center;
                        gap: 20px;
                    }
                    nav li {
                        display: inline;
                    }
                    nav a {
                        color: white;
                        text-decoration: none;
                        font-size: 1rem;
                        transition: color 0.3s ease;
                    }
                    nav a:hover {
                        color: #ffd700;
                    }
                    main {
                        padding: 20px;
                        min-height: 80vh;
                    }
                    footer {
                        text-align: center;
                        padding: 10px;
                        background-color: #333;
                        color: white;
                        position: relative;
                    }
                `}</style>
        </head>
        <body>
        <header>
            <h1>Food Ordering App</h1>
        </header>
        <nav>
            <ul>
                <li><a href="/users">Users</a></li>
                <li><a href="/menu_items">Menu Items</a></li>
                <li><a href="/orders">Orders</a></li>
                <li><a href="/restaurants">Restaurants</a></li>
            </ul>
        </nav>
        <main>{children}</main>
        <footer>
            <p>© 2024 Food Ordering App. All Rights Reserved.</p>
        </footer>
        </body>
        </html>
    );
}
