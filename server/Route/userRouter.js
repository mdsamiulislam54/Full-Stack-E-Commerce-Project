import express from 'express';
import {UserSchemaModel} from '../model/UserSchemaModel.js';

import bcrypt from "bcrypt";

const router = express.Router();

// create user route
router.post('/register', async (req,res)=>{
    try{
        const {name,email,password} = req.body;
        const hashPassword = await bcrypt.hash(password, 10);
      
        await UserSchemaModel.create({
            name:name,
            email:email,
            password:hashPassword
        })
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
      }
})

router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      
     
      const user = await UserSchemaModel.findOne({ email });
  
    
      if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
     
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      console.log("Entered Password: ", password);
      console.log("Stored Hashed Password: ", user.password);
  
      if (!isPasswordMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
    
      res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  });
  

export default router;