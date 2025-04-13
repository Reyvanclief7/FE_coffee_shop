import React, { useEffect, useState } from "react";
import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../services/productService";
import "../styles/Dashboard.css";

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    brand: "",
    description: "",
    price: "",
    stock: "",
    imageUrl: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  const fetchProducts = async () => {
    try {
      const data = await getAllProducts();
      console.log("Hasil getAllProducts:", data);

      if (Array.isArray(data)) {
        setProducts(data);
      } else {
        console.warn("Data bukan array:", data);
        setProducts([]);
      }
    } catch (err) {
      console.error("Gagal mengambil produk:", err.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await updateProduct(formData);
        setIsEditing(false);
      } else {
        await createProduct(formData);
      }

      setFormData({
        id: null,
        name: "",
        brand: "",
        description: "",
        price: "",
        stock: "",
        imageUrl: "",
      });

      await fetchProducts();
    } catch (error) {
      console.error("Gagal simpan produk:", error.message);
    }
  };

  const handleEdit = (product) => {
    setFormData(product);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Yakin ingin menghapus produk ini?")) {
      await deleteProduct(id);
      fetchProducts();
    }
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard Produk Elektronik</h1>

      <form className="product-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nama Produk"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={formData.brand}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="description"
          placeholder="Deskripsi"
          value={formData.description}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Harga"
          value={formData.price}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="stock"
          placeholder="Stok"
          value={formData.stock}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="URL Gambar"
          value={formData.imageUrl}
          onChange={handleInputChange}
        />
        <button type="submit">{isEditing ? "Update" : "Tambah"}</button>
      </form>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>
              <strong>Brand:</strong> {product.brand}
            </p>
            <p>
              <strong>Harga:</strong> Rp {product.price}
            </p>
            <p>
              <strong>Stok:</strong> {product.stock}
            </p>
            <p>
              <strong>Kategori:</strong> {product.category?.name || "Tidak Ada"}
            </p>
            <div className="btn-group">
              <button
                className="btn update"
                onClick={() => handleEdit(product)}
              >
                Edit
              </button>
              <button
                className="btn delete"
                onClick={() => handleDelete(product.id)}
              >
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
