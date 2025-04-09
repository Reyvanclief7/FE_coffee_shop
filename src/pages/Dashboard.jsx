import React, { useEffect, useState } from "react";
import "../styles/Dashboard.css";

export default function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulasi data produk
    const dummyProducts = [
      {
        id: 1,
        name: "Kopi Arabika",
        description: "Kopi pilihan dari Aceh Gayo",
        price: 35000,
        stock: 50,
        brand: "Gayo Coffee",
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        name: "Kopi Robusta",
        description: "Kopi kuat dengan rasa pahit khas",
        price: 30000,
        stock: 70,
        brand: "Lampung Beans",
        imageUrl: "https://via.placeholder.com/150",
      },
    ];
    setProducts(dummyProducts);
  }, []);

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleUpdate = (id) => {
    alert(`Update produk dengan ID ${id} (fitur bisa ditambahkan nanti)`);
  };

  return (
    <div className="dashboard-container">
      <h1>Daftar Produk</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Brand: {product.brand}</p>
            <p>Harga: Rp {product.price}</p>
            <p>Stok: {product.stock}</p>
            <div className="btn-group">
              <button
                onClick={() => handleUpdate(product.id)}
                className="btn update"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(product.id)}
                className="btn delete"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
