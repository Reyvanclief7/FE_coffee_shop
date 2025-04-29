import React, { useState } from "react";
import "../styles/ProductDetail.css";
import { useNavigate } from "react-router-dom"; // Jika Anda menggunakan React Router

function ProductDetail() {
  const navigate = useNavigate(); // Hook untuk navigasi
  const [cartMessage, setCartMessage] = useState("");
  const [buyMessage, setBuyMessage] = useState("");

  const product = {
    id: 1,
    name: "Awesome Smartwatch X",
    category: "Watches",
    price: 299.99,
    imageUrl: "https://via.placeholder.com/400x400/EEE/333?Text=Smartwatch", // Placeholder image
    description:
      "This is a detailed description of the Awesome Smartwatch X. It boasts a long-lasting battery, advanced fitness tracking features, and a sleek design. Perfect for your active lifestyle. It comes in various colors and sizes. Check the specifications below for more details.",
    specifications: [
      "Display: 1.78-inch OLED",
      "Battery Life: Up to 36 hours",
      "Water Resistance: 50 meters",
      "Connectivity: Bluetooth 5.0, Wi-Fi",
      "Sensors: Heart rate, SpO2, Accelerometer, Gyroscope",
    ],
  };

  const handleAddToCart = () => {
    setCartMessage("Barang berhasil ditambahkan ke keranjang!");
    // Reset pesan setelah beberapa detik
    setTimeout(() => {
      setCartMessage("");
    }, 3000);
    // Di sini Anda akan menambahkan logika sebenarnya untuk menambahkan produk ke keranjang belanja
  };

  const handleBuyNow = () => {
    setBuyMessage("Barang berhasil dibeli!");
    // Reset pesan setelah beberapa detik
    setTimeout(() => {
      setBuyMessage("");
    }, 3000);
    // Di sini Anda akan menambahkan logika untuk melanjutkan ke proses pembelian
  };

  const handleGoBack = () => {
    navigate(-1); // Kembali ke halaman sebelumnya dalam history browser
  };

  return (
    <div className="product-detail-page">
      <button className="back-button" onClick={handleGoBack}>
        &larr; Back
      </button>
      <div className="product-detail-container">
        <div className="product-image">
          <img src={product.imageUrl} alt={product.name} />
        </div>
        <div className="product-info">
          <h2 className="product-title">{product.name}</h2>
          <p className="product-category">Category: {product.category}</p>
          <p className="product-price">${product.price}</p>
          <div className="product-description">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>
          {product.specifications && product.specifications.length > 0 && (
            <div className="product-specifications">
              <h3>Specifications</h3>
              <ul>
                {product.specifications.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="product-actions">
            <button className="add-to-cart-button" onClick={handleAddToCart}>
              Add to Cart
            </button>
            {cartMessage && <p className="success-message">{cartMessage}</p>}
            <button className="buy-button" onClick={handleBuyNow}>
              Buy Now
            </button>
            {buyMessage && <p className="success-message">{buyMessage}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
