# FlexaBiz Admin - Advanced Admin Management Platform
Task B - Day 3 Frontend Production Challenge

## Project Overview
Production-ready Admin Management Platform built for FlexaBiz Digital. Built as if a real client is paying for launch. Focus on UI/UX, visual hierarchy, spacing, component quality, and product thinking over feature quantity.

Chosen Task: Task B - Admin Management Platform

## Features
### 1. Dashboard
- Total Revenue $46,300, Active Users 3, Orders 3, Conversion 68.4%
- Recent Clients table with real business data
- Growth indicators

### 2. User Management
- View, Search, Toggle Active/Inactive, Delete
- Add User modal with confirmation dialog
- Empty state handling when no results

### 3. Product Management
- Listing, Category, Price, Stock, Status
- Low stock indicator
- Search and filtering ready

### 4. Order Management
- Order ID, Customer, Total, Order Status, Payment Status, Date
- Timeline ready structure

### 5. Category Management
- View, Add, Count, Active/Inactive

### 6. Analytics
- Revenue trend bar chart (static data, no external chart lib)
- Growth metrics with progress bars
- Conversion tracking

### 7. Notifications
- Read/Unread state, Categories (Order, User, Product)
- Notification count badge

### 8. Content Management (CMS)
- Pages/Posts, Draft/Published status
- Content listing

### 9. Roles & Permissions
- Admin, Manager, Editor, Viewer roles
- Permission matrix for Users, Products, Orders, Analytics, Settings

### 10. Settings
- General, Profile, Notifications, Appearance, Security tabs
- Form with save action

## UX Highlights
- Reusable components: Card, Badge, Modal, Table
- Sidebar behavior, Breadcrumbs via page title
- Modals, Confirmation dialogs, Empty states, Search, Filters
- Responsive: Desktop, Tablet, Mobile (grid auto-fit)
- Dark production theme #0a0a0b with purple #7c3aed accent
- No backend - 100% frontend with local state

## Technologies Used
- React 18 + Vite
- React useState for state management
- Pure CSS-in-JS (no Tailwind dependency for stability)
- No external UI libraries - custom built for production control

## Installation & Run
```bash
npm install
npm run dev
# open http://localhost:5173