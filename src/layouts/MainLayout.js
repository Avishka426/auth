// src/layouts/MainLayout.js
import React, { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import ItemDetails from "../pages/ItemDetails";
import AddItemDetails from "../pages/AddItemDetails";
import UpdateItemDetails from "../pages/UpdateItemDetails";
import "./MainLayout.css";

function MainLayout() {
  const [inventoryDropdownOpen, setInventoryDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleInventoryDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Dropdown clicked, current state:', inventoryDropdownOpen);
    setInventoryDropdownOpen(!inventoryDropdownOpen);
  };

  const isInventoryActive = location.pathname.includes('/inventory') || 
                           location.pathname.includes('/add-item') || 
                           location.pathname.includes('/update-item');

  return (
    <div className="main-layout">
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="logo">
            <img src="/images/Green Modern Marketing Logo 1.png" alt="Logo" className="logo-image" />
          </div>
         
        </div>
        
        <nav className="sidebar-nav">
          <Link to="/dashboard" className={`nav-item ${location.pathname === '/dashboard' ? 'active' : ''}`}>
            <img src="/images/Vector.png" alt="Dashboard Icon" className="nav-icon" />
            <span className="nav-text">Dashboard</span>
          </Link>
          
          <div 
            className={`nav-item ${isInventoryActive ? 'active' : ''}`}
            onClick={toggleInventoryDropdown}
          >
            <img src="/images/icons8-inventory-24 1.png" alt="Inventory Icon" className="nav-icon" />
            <span className="nav-text">Inventory</span>
            <span className={`dropdown-arrow ${inventoryDropdownOpen ? 'open' : ''}`}>▼</span>
          </div>
          
          {inventoryDropdownOpen && (
            <div className="dropdown-menu show" style={{backgroundColor: 'red', minHeight: '100px'}}>
              <div>DEBUG: Dropdown is visible</div>
              <Link to="/dashboard/inventory/item-details" className="dropdown-item">
                <span>Item Details</span>
              </Link>
              <Link to="/dashboard/inventory/add-item" className="dropdown-item">
                <span>Add Item Details</span>
              </Link>
              <Link to="/dashboard/inventory/update-item" className="dropdown-item">
                <span>Update Item Details</span>
              </Link>
            </div>
          )}
          
          <Link to="/dashboard/billing" className="nav-item">
            <img src="/images/billing.png" alt="Billing Icon" className="nav-icon" />
            <span className="nav-text">Billing & Invoices</span>
          </Link>
          
          <Link to="/dashboard/staff" className="nav-item">
            <img src="/images/staff.png" alt="Staff Icon" className="nav-icon" />
            <span className="nav-text">Staff</span>
          </Link>
          
          <Link to="/dashboard/suppliers" className="nav-item">
            <img src="/images/sup.png" alt="Supplier Icon" className="nav-icon" />
            <span className="nav-text">Supplier Management</span>
          </Link>
          
          <Link to="/dashboard/orders" className="nav-item">
            <img src="/images/order.png" alt="Order Icon" className="nav-icon" />
            <span className="nav-text">Order Management</span>
          </Link>
          
          <Link to="/dashboard/configuration" className="nav-item">
            <img src="/images/confi.png" alt="Configuration Icon" className="nav-icon" />
            <span className="nav-text">Configuration</span>
          </Link>
          
          <Link to="/dashboard/reports" className="nav-item">
            <img src="/images/reports.png" alt="Reports Icon" className="nav-icon" />
            <span className="nav-text">Reports</span>
          </Link>
        </nav>
      </div>
      
      <div className="main-content">
        <header className="top-header">
          <div className="header-left">
            <button className="menu-toggle">☰</button>
          </div>
          <div className="header-right">
            <button className="header-btn">
              <img src="/images/notification.png" alt="Notifications" className="header-icon" />
            </button>
            <button className="header-btn">
              <img src="/images/setting.png" alt="Settings" className="header-icon" />
            </button>
            <button className="header-btn">
              <img src="/images/profile.png" alt="Profile" className="header-icon" />
            </button>
          </div>
        </header>
        
        <main className="content">
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="inventory/item-details" element={<ItemDetails />} />
            <Route path="inventory/add-item" element={<AddItemDetails />} />
            <Route path="inventory/update-item" element={<UpdateItemDetails />} />
            <Route path="billing" element={<div>Billing & Invoices Page</div>} />
            <Route path="staff" element={<div>Staff Page</div>} />
            <Route path="suppliers" element={<div>Supplier Management Page</div>} />
            <Route path="orders" element={<div>Order Management Page</div>} />
            <Route path="configuration" element={<div>Configuration Page</div>} />
            <Route path="reports" element={<div>Reports Page</div>} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default MainLayout;