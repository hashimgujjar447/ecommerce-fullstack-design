import api from "./axiosInstance";

export const getProducts = async () => {
  try {
    const response = await api.get("/products");
    if (response.status === 200) {
      console.log("Products fetched successfully:", response.data);
      return response.data?.data || [];
    }
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
};

export const addNewProduct = async (formData) => {
  try {
    const response = await api.post("/product", formData);
    if (response.status === 201) {
      console.log("Product added successfully:", response.data);
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
