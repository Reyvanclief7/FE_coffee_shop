import React from "react";

function main() {
  return (
    <main className="product-grid">
      <div
        className="product-item"
        data-category="smartwatch"
        data-price="199.99"
      >
        <img src="placeholder-watch.jpg" alt="Smartwatch X" />
        <h3>Smartwatch X</h3>
        <p>$199.99</p>
        <button className="add-to-cart">Add to Cart</button>
      </div>
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
  );
}

export default main;
