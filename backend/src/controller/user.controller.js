// import { Signup } from "../model/Signup.model.js";
import {  User } from "../model/User.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import nodemailer from 'nodemailer';
import aboutData from '../data/aboutData.js';
import NewsData from '../data/NewsData.js';
import classifiedData from '../data/ClassifiedData.js';
import marketPlace from "../data/marketPlace.js";
import seniorEngineer from "../data/seniorEngineer.js";
import Images from "../data/Images.js";









const contactUser = asyncHandler(async(req,res) => {
    try {
        const {name,company,phone,email,subject,message} = req.body;
        if (!name || !phone || !email || !subject || !message) {
            return res.status(400).json(new ApiError(400, "ValidationError", "All fields are required"));
        }
        const user = await User.create({
            name,
            company,
            phone,
            email,
            subject,
            message
        })
        return res.status(200).json(
        new ApiResponse(200,user, "User Registered Successfully")
        )
    } catch (error) {
        console.error("Error sending response:", error);
        return res.status(500).json(new ApiError(500, "error","Internal Server Error"))
    }
})


const registeredEmails = new Set(); // In-memory storage for registered emails

const sender = asyncHandler(async (req, res) => {
  try {
    const { email } = req.body;

    // Check if the email is already registered
    if (registeredEmails.has(email)) {
      return res.status(400).json(new ApiError(400, 'error', 'Email already registered'));
    }

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Test Email',
      text: 'This is a test email sent from Nodemailer.',
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json(new ApiError(500, 'error', 'Internal Server Error'));
      } else {
        console.log('Email sent:', info.response);
        // Add the email to the set of registered emails
        registeredEmails.add(email);
        return res.status(200).json(new ApiResponse(200, 'Email sent successfully'));
      }
    });
  } catch (error) {
    console.error('Error sending response:', error);
    return res.status(500).json(new ApiError(500, 'error', 'Internal Server Error'));
  }
});

const aboutDataa = asyncHandler(async(req,res) => {
    try {
        const aboutDataaa = aboutData;
        return res.status(200).json(new ApiResponse(200,aboutDataaa,"ok"))
    } catch (error) {
        return res.status(500).json(new ApiError(500,"error","Internal Server Error"))
    }
})


const images = asyncHandler(async(req,res) => {
    try {
      //   const images = ['1dcm_logo.gif', '3D%20CAD.png', '155176721066999965.png', '155256139637377397.jpg', '155256139637377397.png', 'Aamor%20final.jpg','Aditya_Precitech_logo_0.JPG'];
      //   const imageUrls = images.map(image => `/cousral/${encodeURIComponent(image)}`);
      //  console.log(imageUrls);
      const imageUrls = Images.map(image => ({
        name: `/cousral/${encodeURIComponent(image.name)}`,
        link: image.link
      }));
        return res.status(200).json(new ApiResponse(200,imageUrls,"ok"))

    } catch (error) {
        return res.status(500).json(new ApiError(500,"error","Internal Server Error"))
    }
})

const newsDataa = asyncHandler(async(req,res) => {
    try {
      const imagePath = `/assets/${encodeURIComponent(NewsData.src)}`;
      // console.log('Image path:', imagePath);
  
      // Construct the response object with the image URL
      const newsDataaa = {
        ...NewsData,
        image: imagePath,
      };
        return res.status(200).json(new ApiResponse(200,newsDataaa,"ok"))
    } catch (error) {
        return res.status(500).json(new ApiError(500,"error","Internal Server Error"))
    }
})

// const classifiedDataa = asyncHandler(async(req,res) => {
//     try {
//       const imagePath = `/classifiedImages/${encodeURIComponent(ClassifiedData.src)}`;
//       console.log('Image path:', imagePath);

//         // const classifiedDataaa = classifiedData;
//         const classifiedDataaa = {
//           ...classifiedData,
//           image: imagePath,
//         };
//         return res.status(200).json(new ApiResponse(200,classifiedDataaa,"ok"))
//     } catch (error) {
//         return res.status(500).json(new ApiError(500,"error","Internal Server Error"))
//     }
// })


  const classifiedDataa = asyncHandler(async (req, res) => {
    try {
        // Assuming classifiedData is imported correctly and it contains the necessary data
        const classifiedDataWithImagePaths = classifiedData.map(item => ({
            ...item,
            image: `/classifiedImages/${encodeURIComponent(item.src)}` // Assuming 'src' holds the image filename
        }));
        
        console.log('Classified Data with Image Paths:', classifiedDataWithImagePaths);

        return res.status(200).json(new ApiResponse(200, classifiedDataWithImagePaths, "ok"));
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json(new ApiError(500, "error", "Internal Server Error"));
    }
  });




const b2bDataa = asyncHandler(async(req,res) => {
    try {
        const b2bDataaa = marketPlace;
        return res.status(200).json(new ApiResponse(200,b2bDataaa,"ok"))
    } catch (error) {
        return res.status(500).json(new ApiError(500,"error","Internal Server Error"))
    }
})



const seniorr = asyncHandler(async (req, res) => {
  try {
    const imagePath = `/assets/${encodeURIComponent(seniorEngineer.image)}`;
    // console.log('Image path:', imagePath);

    // Construct the response object with the image URL
    const seniorrr = {
      ...seniorEngineer,
      image: imagePath,
    };



    return res.status(200).json(new ApiResponse(200, seniorrr, "ok"));
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

    
  
 

export {contactUser , sender , aboutDataa , images , newsDataa , classifiedDataa , b2bDataa , seniorr };