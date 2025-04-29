import React from "react";

function main() {
  return (
    <div>
      <img src="/images/main-logo.png" className="logo" alt="Main Logo" />
      <section className="filter-section">
        <div>
          <label htmlFor="category-filter">Category:</label>
          <select id="category-filter">
            <option value="">All</option>
            <option value="smartwatch">Smartwatch</option>
            <option value="fitness-tracker">Fitness Tracker</option>
            <option value="classic-watch">Classic Watch</option>
            <option value="sport-watch">Sport Watch</option>
          </select>
        </div>
        <div>
          <label htmlFor="price-filter">Price:</label>
          <select id="price-filter">
            <option value="">All</option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </select>
        </div>
      </section>

      <main className="product-grid">
        <a
          className="product-item"
          data-category="smartwatch"
          data-price="199.99"
          href="/Product_detail"
        >
          <img src="placeholder-watch.jpg" alt="Smartwatch X" />
          <h3>Smartwatch X</h3>
          <p>$199.99</p>
          <button className="add-to-cart">Add to Cart</button>
        </a>
        <div
          className="product-item"
          data-category="fitness-tracker"
          data-price="79.99"
        >
          <img src="placeholder-watch.jpg" alt="Fitness Tracker Pro" />
          <h3>Fitness Tracker Pro</h3>
          <p>$79.99</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
        <div
          className="product-item"
          data-category="classic-watch"
          data-price="129.50"
        >
          <img src="placeholder-watch.jpg" alt="Classic Watch" />
          <h3>Classic Watch</h3>
          <p>$129.50</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
        <div
          className="product-item"
          data-category="sport-watch"
          data-price={99.0}
        >
          <img src="placeholder-watch.jpg" alt="Sport Watch" />
          <h3>Sport Watch</h3>
          <p>$99.00</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
        <div
          className="product-item"
          data-category="smartwatch"
          data-price="249.99"
        >
          <img src="placeholder-watch.jpg" alt="Elegant Smartwatch" />
          <h3>Elegant Smartwatch</h3>
          <p>$249.99</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
        <div
          className="product-item"
          data-category="fitness-tracker"
          data-price="39.99"
        >
          <img src="placeholder-watch.jpg" alt="Basic Fitness Band" />
          <h3>Basic Fitness Band</h3>
          <p>$39.99</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
        <div
          className="product-item"
          data-category="fitness-tracker"
          data-price="39.99"
        >
          <img src="placeholder-watch.jpg" alt="Basic Fitness Band" />
          <h3>Basic Fitness Band</h3>
          <p>$39.99</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
        <div
          className="product-item"
          data-category="fitness-tracker"
          data-price="39.99"
        >
          <img src="placeholder-watch.jpg" alt="Basic Fitness Band" />
          <h3>Basic Fitness Band</h3>
          <p>$39.99</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </main>
    </div>
  );
}

export default main;
