import { Router } from "express";
import Product from "../models/product.model.js";
import Category from "../models/category.model.js";
import upload from "../middleware/upload.js";
import { uploadToCloudinary } from "../utils/Cloudinary.js";
import deleteLocalFiles from "../utils/deleteFilesFromUpload.js";

const router = Router();

router.post("/product", upload.array("images", 5), async (req, res) => {
  try {
    const urls = [];
    console.log(req.files);
    for (const file of req.files) {
      const result = await uploadToCloudinary(file.path);
      urls.push(result.url);
    }

    deleteLocalFiles(req.files);

    const {
      title,
      price,
      oldPrice,
      rating,
      orders,
      shipping,
      description,
      inStock,
      categoryName, // Use this in Postman for category name
    } = req.body;

    // Validate required fields
    if (!title || !price || !description || !categoryName) {
      return res.status(400).json({ error: "Missing required product fields" });
    }

    // Create or find category
    const categoryDoc = await Category.findOneAndUpdate(
      { name: categoryName },
      { name: categoryName },
      { new: true, upsert: true },
    );

    // Create new product
    const newProduct = await Product.create({
      title,
      price,
      oldPrice,
      rating,
      orders,
      shipping,
      description,
      inStock: inStock === "true", // convert from string if coming from form-data
      image: urls,
      category: categoryDoc._id,
    });

    res
      .status(201)
      .json({ message: "Product added successfully", product: newProduct });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
