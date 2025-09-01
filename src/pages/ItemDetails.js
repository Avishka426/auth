import React, { useState } from 'react';
import './ItemDetails.css';

const ItemDetails = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Sample data - you can replace this with actual data from your API
  const [items, setItems] = useState([
    // Empty rows as shown in the image
  ]);

  const filteredItems = items.filter(item =>
    item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.id?.toString().includes(searchTerm)
  );

  return (
    <div className="item-details-container">
      <div className="page-header">
        <div className="header-left">
          <h1>Items Details</h1>
          <p className="breadcrumb">Dashboard</p>
        </div>
      </div>

      <div className="controls-section">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search Item"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button className="search-btn">
            <i className="search-icon">🔍</i>
          </button>
        </div>
        <button className="add-new-btn">Add New Item</button>
      </div>

      <div className="table-container">
        <table className="items-table">
          <thead>
            <tr>
              <th>Items ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Threshold</th>
            </tr>
          </thead>
          <tbody>
            {/* Empty rows as shown in the image */}
            {Array.from({ length: 12 }, (_, index) => (
              <tr key={index}>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-footer">
        <div className="pagination-info">
          Showing 0 to 0 of 0 entries
        </div>
        <div className="pagination-controls">
          <button className="pagination-btn" disabled>Previous</button>
          <span className="page-number active">1</span>
          <button className="pagination-btn" disabled>Next</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
