import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p className="breadcrumb">Dashboard</p>
      </div>
      
      <div className="dashboard-grid">
        {/* Value of Stock Card */}
        <div className="dashboard-card value-of-stock">
          <h2>Value of Stock</h2>
          <div className="stock-value">Rs.123,456.00</div>
          <div className="stock-purchases">
            <h3>Stock Purchases</h3>
            <div className="purchase-item">
              <span>Unfulfilled</span>
              <span className="count">3</span>
              <span className="arrow">→</span>
            </div>
            <div className="purchase-item">
              <span>Received</span>
              <span className="count">1</span>
              <span className="arrow">→</span>
            </div>
          </div>
        </div>

        {/* Total Products Card */}
        <div className="dashboard-card">
          <div className="card-icon">
            <img src="/images/total.png" alt="Total Products Icon" className="card-icon-img" />
          </div>
          <div className="card-info">
            <h3>Total Products</h3>
            <div className="card-number">105</div>
          </div>
        </div>

        {/* Low Stock Card */}
        <div className="dashboard-card">
          <div className="card-icon">
            <img src="/images/low.png" alt="Low Stock Icon" className="card-icon-img" />
          </div>
          <div className="card-info">
            <h3>Low stock</h3>
            <div className="card-number">6</div>
          </div>
        </div>

        {/* Out Stock Card */}
        <div className="dashboard-card">
          <div className="card-icon">
            <img src="/images/out.png" alt="Out Stock Icon" className="card-icon-img" />  
          </div>
          <div className="card-info">
            <h3>Out stock</h3>
            <div className="card-number">12</div>
          </div>
        </div>

        {/* Suppliers Card */}
        <div className="dashboard-card">
          <div className="card-icon">
            <img src="/images/supl.png" alt="Suppliers Icon" className="card-icon-img" />
          </div>
          <div className="card-info">
            <h3>Suppliers</h3>
            <div className="card-number">21</div>
          </div>
        </div>

        {/* Borrowers Card */}
        <div className="dashboard-card">
          <div className="card-icon">
            <img src="/images/borrowers.png" alt="Borrowers Icon" className="card-icon-img" />
          </div>
          <div className="card-info">
            <h3>Borrowers</h3>
            <div className="card-number">10</div>
          </div>
        </div>

        {/* Total Sales Card */}
        <div className="dashboard-card">
          <div className="card-icon">
            <img src="/images/totalm.png" alt="Total Sales Icon" className="card-icon-img" />
          </div>
          <div className="card-info">
            <h3>Total Sales</h3>
            <div className="card-number">Rs.10000.00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
