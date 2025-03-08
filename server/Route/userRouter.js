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
    const data = JSON.parse( fs.readFileSync("category.json"), "utf8");
    const uniqueCategories = [];
    const seenCids = new Set();
    data.forEach(element => {
      if (!seenCids.has(element.cid)) {
        seenCids.add(element.cid);
        uniqueCategories.push(element);
      } else {
        console.log(`Duplicate category found: ${element.cid}`);
      }
    });
     // Insert unique categories into the MongoDB collection
     await ShopSchemaModel.insertMany(uniqueCategories);

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
router.delete("/shop", errorHandler, async (req, res) => {
  try {
    // Delete all shop data
    const result = await ShopSchemaModel.deleteMany({});

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "No shops found to delete!" });
    }

    res.status(200).json({ message: "All shops deleted successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Server error", err: err.message });
  }
});

router.delete("/products", async (req, res) => {
  try{
    const shop = await ProductSchema.deleteMany({})
    if(shop.deletedCount === 0){
      return res.status(404).json({message: "No products found to delete!"})
    }
    res.status(200).json({message: "All products deleted successfully!"})
  }
  catch(err){
    console.error(err)
    res.status(500).json({message: "Server error", error: err.message})
  }
})


export default router;
