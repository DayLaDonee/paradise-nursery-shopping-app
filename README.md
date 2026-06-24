# 🌿 Paradise Nursery Shopping Application

## 📖 Project Overview
**Paradise Nursery** is a dynamic, single-page e-commerce web application built using **React** and **Redux**. This project serves as the final assessment for the Coursera module, demonstrating practical proficiency in modern front-end development, global state management, and component-based UI design. 

The application provides a seamless user experience, allowing customers to browse a curated selection of house plants, view detailed pricing, and manage their purchases through a fully interactive shopping cart system.

## ✨ Key Features
* **Landing Page:** An attractive, styled home page featuring the company name, background image, and a functional "Get Started" button to navigate to the shop.
* **Product Catalog:** A well-organized product listing page (`ProductList.jsx`) displaying at least six unique houseplants grouped into distinct categories. Each product card includes a thumbnail, name, and unit price.
* **Global State Management (Redux):** 
    * Implemented `CartSlice.jsx` to handle complex state changes.
    * "Add to Cart" functionality that safely disables the button after a product is selected to prevent duplicate initial entries.
    * Increment and decrement buttons to easily adjust quantities within the cart.
    * A delete function to completely remove an item from the cart.
* **Real-time Navigation & Updates:** A persistent navigation bar containing links to Home, Plants, and Cart, featuring a dynamic cart icon that updates the total number of items in real-time.
* **Dynamic Cost Calculation:** Automatically calculates and displays the subtotal for each specific plant type based on quantity, as well as the grand total amount for the entire cart.

## 🛠️ Technologies Used
* **React.js:** For building reusable UI components (e.g., `App.jsx`, `AboutUs.jsx`, `CartItem.jsx`).
* **Redux Toolkit:** For efficient and predictable global state management of the shopping cart.
* **CSS3:** For responsive design, layout styling, and background implementations (`App.css`).
* **JavaScript (ES6+):** For application logic, array manipulations, and event handling.
* **Vite / Create React App:** Build tooling and local development environment.

## 🚀 Getting Started
To view and run this project locally, follow these steps:

1. **Clone the repository:**
```bash
   git clone [https://github.com/YourUsername/paradise-nursery-shopping-app.git](https://github.com/YourUsername/paradise-nursery-shopping-app.git)
