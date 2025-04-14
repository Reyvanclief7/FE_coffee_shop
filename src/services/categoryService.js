const CATEGORY_URL = "http://localhost:8080/category";

export const getAllCategories = async () => {
  try {
    const res = await fetch(CATEGORY_URL, {
      credentials: "include",
    });
    return await res.json();
  } catch (error) {
    console.error("Gagal ambil kategori:", error.message);
    return [];
  }
};

// ⬇️ Tambahkan ini untuk bikin kategori baru
export const createCategory = async (name) => {
  try {
    const res = await fetch(CATEGORY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", // biar konsisten sama getAllCategories
      body: JSON.stringify({ name }),
    });

    if (!res.ok) {
      throw new Error("Gagal membuat kategori");
    }

    return await res.json();
  } catch (error) {
    console.error("Gagal membuat kategori:", error.message);
    return null;
  }
};
