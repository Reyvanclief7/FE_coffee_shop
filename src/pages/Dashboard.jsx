import React, { useEffect, useState } from "react";
import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../services/productService";
import {
  getAllCategories,
  createCategory,
} from "../services/categoryService";
import "../styles/Dashboard.css";

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  const [formData, setFormData] = useState({
    id: null,
    name: "",
    brand: "",
    description: "",
    price: "",
    stock: "",
    imageUrl: "",
    category: null,
  });

  const [isEditing, setIsEditing] = useState(false);

  const fetchProducts = async () => {
    try {
      const data = await getAllProducts();
      if (Array.isArray(data)) {
        setProducts(data);
      } else {
        setProducts([]);
      }
    } catch (err) {
      console.error("Gagal mengambil produk:", err.message);
    }
  };

  const fetchCategories = async () => {
    const data = await getAllCategories();
    setCategories(data);
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
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
        category: null,
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

  const handleCreateCategory = async () => {
    if (!categoryName) return;

    const newCategory = await createCategory(categoryName);
    if (newCategory) {
      setCategories((prev) => [...prev, newCategory]);
      setFormData((prev) => ({
        ...prev,
        category: newCategory,
      }));
      setCategoryName("");
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

        {/* Dropdown kategori */}
        <select
          name="category"
          value={formData.category?.id || ""}
          onChange={(e) => {
            const selected = categories.find(
              (cat) => cat.id === Number(e.target.value)
            );
            setFormData((prev) => ({ ...prev, category: selected }));
          }}
          required
        >
          <option value="">Pilih Kategori</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>

        {/* Tambah kategori */}
        <div className="add-category">
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            placeholder="Tambah kategori baru"
          />
          <button type="button" onClick={handleCreateCategory}>
            + Kategori
          </button>
        </div>

        <button type="submit">{isEditing ? "Update" : "Tambah"}</button>
      </form>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>
              {product.description.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
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
