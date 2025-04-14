const BASE_URL = "http://localhost:8080/product";

export const getAllProducts = async () => {
  try {
    const res = await fetch(BASE_URL, {
      credentials: "include",
    });

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Gagal ambil produk: ${res.status} - ${errText}`);
    }

    const data = await res.json();
    console.log("Produk diterima:", data); // Debug log
    return data;
  } catch (error) {
    console.error("Error saat fetch produk:", error.message);
    return [];
  }
};

export const createProduct = async (product) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
    credentials: "include",
  });
  return res.json();
};

export const updateProduct = async (product) => {
  const res = await fetch(BASE_URL, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
    credentials: "include",
  });
  return res.json();
};

export const deleteProduct = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    credentials: "include",
  });
  return res.ok;
};

export const getProductById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    credentials: "include",
  });
  return res.json();
};
