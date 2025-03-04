import express from "express";
import { UserSchemaModel } from "../model/UserSchemaModel.js";
import jwt from "jsonwebtoken";
import verifyToken from "../middleware/jwtTokenverify.js";
import fs from "fs";

import bcrypt from "bcrypt";
import ProductSchema from "../model/ProductsSchemaModel.js";
import ShopSchemaModel from "../model/ShopSchema.js";
import errorHandler from "../errorhandaler/errorHandalar.js";

const router = express.Router();

// create user route
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);

    await UserSchemaModel.create({
      name: name,
      email: email,
      password: hashPassword,
    });
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserSchemaModel.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    //create JWT token
    const token = jwt.sign(
      {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );
    res.status(200).json({ message: "Login successful", token: token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.get("/protected-data", verifyToken, (req, res) => {
  res.status(200).json({ message: "This is protected data", user: req.user });
});

router.post("/products", async (req, res) => {
  try {
    const productData = JSON.parse(fs.readFileSync("products.json", "utf8"));
    // insert data
    await ProductSchema.insertMany(productData);
    res.status(201).json({ message: "Products inserted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", err: err.message });
  }
});

router.get("/products/data", async (req, res) => {
  try {
    const products = await ProductSchema.find({});
    res.status(200).json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", err: err.message });
  }
});

router.post("/shop", errorHandler, async (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync("category.json"), "utf8");
  
    await ShopSchemaModel.insertMany(data);

    res.status(201).json({ message: "Shop categories inserted successfully" });
  } catch (err) {
   
    res.status(500).json({ message: "Server error", err: err.message });
  }
});

router.get("/shop/data", async (req, res) => {
  try {
    const shopData = await ShopSchemaModel.find({});
    res.status(200).json(shopData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", err: err.message });
  }
});

export default router;
