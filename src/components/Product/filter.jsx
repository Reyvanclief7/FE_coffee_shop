import React from "react";

function Filter() {
  return (
    <section className="filter-section">
      <div>
        <label htmlFor="category-filter">Category:</label>
        <select id="category-filter">
          <option value>All</option>
          <option value="smartwatch">Smartwatch</option>
          <option value="fitness-tracker">Fitness Tracker</option>
          <option value="classic-watch">Classic Watch</option>
          <option value="sport-watch">Sport Watch</option>
        </select>
      </div>
      <div>
        <label htmlFor="price-filter">Price:</label>
        <select id="price-filter">
          <option value>All</option>
          <option value="low-to-high">Low to High</option>
          <option value="high-to-low">High to Low</option>
        </select>
      </div>
    </section>
  );
}

export default Filter;
