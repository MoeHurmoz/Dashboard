# Dashboard Page

This page is a responsive dashboard designed to display various data and analytics. It includes a navigation menu and a content section where user data, posts, and product information are shown. The dashboard is built with HTML, CSS, and JavaScript and is responsive to different screen sizes and input devices.

## Features

- **Responsive Design**: The dashboard layout is fully responsive, adapting to various screen sizes, including mobile devices, with support for both hover and non-hover interactions using media queries.
- **Interactive Navigation Menu**: The sidebar navigation menu includes links to different pages like Clients, Products, Charts, Posts, and more. The menu expands on hover (for devices with hover support) or on click (for touch devices).
- **Dynamic Data Display**: Key metrics such as the number of clients, posts, and products are displayed in visually distinct data boxes.
- **Product Table**: A detailed table lists various products, including their prices and available stock, in a clean, tabular format.

## Tech Stack

- **HTML**: Structure of the dashboard page.
- **CSS**: Custom styling with CSS variables and media queries for responsiveness. Font Awesome is used for icons.
- **JavaScript**: Menu interaction logic, including dynamic class toggling for active links and menu expansion based on input type (mouse or touch).

## Media Queries

- Devices with hover support will see the sidebar expand on hover.
- Devices without hover support (like touch devices) will activate the menu expansion on click, and for a better user experience I have made clicking the menu buttons not activate the expansion, but clicking anywhere else in the menu activates the expansion.

## Live Demo Server

You can preview the dashboard page at the following link:
https://dashboard-page-moehurmoz.netlify.app
