import express from "express";
import { UserSchemaModel } from "../model/UserSchemaModel.js";
import jwt from "jsonwebtoken";
import verifyToken from "../middleware/jwtTokenverify.js";
import fs from "fs";

import bcrypt from "bcrypt";
import ProductSchema from "../model/ProductsSchemaModel.js";
import ShopSchemaModel from "../model/ShopSchema.js";
import errorHandler from "../errorhandaler/errorHandalar.js";
import nodemailer from "nodemailer";
import SSLCommerzPayment from "sslcommerz-lts";
import OrderModel from "../model/OrderModel.js";

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
    const uniqueCategories = [];
    const seenCids = new Set();
    data.forEach((element) => {
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
  try {
    const shop = await ProductSchema.deleteMany({});
    if (shop.deletedCount === 0) {
      return res.status(404).json({ message: "No products found to delete!" });
    }
    res.status(200).json({ message: "All products deleted successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

router.post("/send-email", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }
  // Create a transporter using SMTP
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.AUTH_EMAIL,
      pass: process.env.AUTH_PASSWORD,
    },
  });
  let mailOptions = {
    from: process.env.AUTH_EMAIL,
    to: email,
    subject: "Welcome to DailyMart",
    text: "Thank you for subscribing to our newsletter! Stay tuned for updates.👍❤️❤️❤️👍",
  }
  try {

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});
router.post("/send-order-email", async (req, res) => {
  const { email, name, address, productName, productImage, price,paymentMethod,deliveryDate } = req.body;

  if (!email || !name || !address || !productName || !productImage || !price) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Create a transporter using SMTP
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.AUTH_EMAIL,
      pass: process.env.AUTH_PASSWORD,
    },
  });

  // HTML Email Template with Product Image
  let mailOptions = {
    from: process.env.AUTH_EMAIL,
    to: email,
    subject: `Order Confirmation - ${productName} 🎉`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4; text-align: center;">
        <div style="max-width: 600px; background: white; padding: 20px; margin: auto; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
          <h2 style="color: #ff6f61;">Thank You for Your Order, ${name}! 🎉</h2>
          <p style="font-size: 16px; color: #333;">We have received your order and will process it soon.</p>

          <!-- Product Image -->
          <div style="margin: 20px 0;">
            <img src="${productImage}" alt="${productName}" style="width: 100%; max-width: 250px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);" />
          </div>

          <!-- Order Details -->
          <div style="text-align: left; margin-top: 20px;">
            <h3 style="color: #333;">Order Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Delivery Address:</strong> ${address}</p>
            <p><strong>Product:</strong> ${productName}</p>
            <p><strong>Price:</strong> ${price}</p>
            <p><strong>Payment Method :</strong> ${paymentMethod}</p>
            <p><strong>deliveryDate :</strong> ${deliveryDate}</p>
          </div>

          <p style="margin-top: 20px; font-size: 16px; color: #555;">If you have any questions, feel free to contact us.</p>
          <a href="https://your-website.com" style="display: inline-block; margin-top: 10px; padding: 10px 20px; background-color: #ff6f61; color: white; text-decoration: none; border-radius: 5px;">Visit Our Store</a>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Order confirmation email sent successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});
router.post("/ssl-payment", async (req, res) => {
  const { email, name, address, productName, productImage, price, paymentMethod, phone, pcode } = req.body;
  const priceToNumber = Math.floor(price.replace('$', '')) * 120;

  // Generate unique transaction ID
const tran_id = Math.floor(Math.random() * 10000000); // Generate a random transaction ID
  const data = {
    total_amount: priceToNumber,
    currency: 'BDT',
    tran_id: tran_id,  // Use unique tran_id for each API call
    success_url: `http://localhost:5173/payment-success/${tran_id}`,  // Include tnx_id in the URL
    fail_url: 'http://localhost:3030/fail',
    cancel_url: 'http://localhost:3030/cancel',
    ipn_url: 'http://localhost:3030/ipn',
    shipping_method: 'Courier',
    product_name: productName,
    product_category: 'Electronic',
    product_profile: 'general',
    cus_name: name,
    cus_email: email,
    cus_add1: address,
    cus_add2: 'Dhaka',
    cus_city: 'Dhaka',
    cus_state: 'Dhaka',
    cus_postcode: pcode,
    cus_country: 'Bangladesh',
    cus_phone: phone,
    cus_fax: '01711111111',
    ship_name: name,
    ship_add1: 'Dhaka',
    ship_add2: 'Dhaka',
    ship_city: 'Dhaka',
    ship_state: 'Dhaka',
    ship_postcode: pcode,
    ship_country: 'Bangladesh',
    paymentMethod: paymentMethod,
    productImage: productImage,
  };

  console.log(data);

  const sslcz = new SSLCommerzPayment(process.env.STOR_ID, process.env.STOR_PASS, false);
  sslcz.init(data).then(apiResponse => {
    // Redirect the user to the payment gateway
    let GatewayPageURL = apiResponse.GatewayPageURL;
    res.send({ url: GatewayPageURL });

    // Save the order to the database
    const saveOrder = new OrderModel({
      productName,
      productImage,
      price,
      paymentMethod,
      email,
      name,
      address,
      phone,
      pcode,
      status: 'pending',
      createdAt: new Date(),
       // Save the transaction ID
    });

    saveOrder.save()
      .then(() => {
        console.log("Order saved successfully!");
      })
      .catch((error) => {
        console.error("Error saving order:", error);
      });

    console.log('Redirecting to: ', GatewayPageURL);
  });
});

router.post("/payment-success", async (req, res) => {
  try {
    const { tnx_id, status } = req.body;  // Extract tnx_id and status from the body
    const updatedOrder = await OrderModel.findOneAndUpdate(
      { tran_id },  // Find the order by tnx_id
      { status: "success" },  // Update the status to 'success'
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Redirect to the success page with tnx_id
     // Pass tnx_id in the URL for front-end

    res.status(200).json({ message: "✅ Order updated successfully!" });
    res.redirect(`http://localhost:5173/payment-success/${tran_id}`); 
  } catch (error) {
    console.error("Order save error:", error);
    res.status(500).json({ message: "❌ Failed to update order" });
  }
});



export default router;
