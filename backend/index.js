import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Booking from "./src/models/Booking.js";


// Load environment variables from .env file
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection using Mongoose

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.cf70q.mongodb.net/shipupDB?appName=Cluster0`;

// const clientOptions = {
//   serverApi: { version: "1", strict: true, deprecationErrors: true },
// };

/**
 * Generate readable tracking ID
 * Example: SHIPUP-LH8FZ1-9QK2A
 */
function generateTrackingId() {
  const timestamp = Date.now().toString(36).toUpperCase();
  const randomPart = Math.random().toString(36).substring(2, 7).toUpperCase();
  return `SHIPUP-${timestamp}-${randomPart}`;
}

// MongoDB Connection
mongoose
  .connect(uri)
  .then(() => {
    console.log(
      "MongoDB connected successfully to database:",
      mongoose.connection.name
    );
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
    process.exit(1);
  });

// simple route to test server
app.get("/", (req, res) => {
  res.send("ShipUp Server is running!");
});

// CREATE booking
app.post("/bookings", async (req, res) => {
  try {
    const bookingData = {
      ...req.body,
      trackingId: generateTrackingId(),
      paymentStatus: "pending",
    };

    const booking = new Booking(bookingData);
    const savedBooking = await booking.save();

    res.status(201).json(savedBooking);
  } catch (error) {
    console.error("Booking creation failed:", error);

    // Duplicate trackingId
    if (error.code === 11000) {
      return res.status(409).json({
        error: "Duplicate tracking ID. Please try again.",
      });
    }

    res.status(500).json({ error: "Failed to create booking" });
  }
});

// GET all bookings
app.get("/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (error) {
    console.error("Fetching bookings failed:", error);
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
});

// Start server
app.listen(port, () => {
  console.log(`ShipUp backend running on port ${port}`);
});

// async function run() {
//   try {
//     // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
//     await mongoose.connect(uri, clientOptions);

//     const database = client.db("shipupDB");
//     const bookingsCollection = database.collection("bookings");

//     // Add routes for bookings (example)
//     app.post("/bookings", async (req, res) => {
//       try {
//         const newBooking = req.body;
//         newBooking.createdAt = new Date();

//         const result = await bookingsCollection.insertOne(newBooking);
//         res.status(201).json(result);
//       } catch (error) {
//         console.error("Error creating booking:", error);
//         res.status(500).json({ error: "Failed to create booking" });
//       }
//     });

//     // Get all bookings
//     app.get("/bookings", async (req, res) => {
//       try {
//         const bookingsData = bookingsCollection.find({});
//         const bookings = await bookingsData.toArray();
//         res.status(200).json(bookings);
//       } catch (error) {
//         console.error("Error fetching bookings:", error);
//         res.status(500).json({ error: "Failed to fetch bookings" });
//       }
//     });

//     // Ping the database to confirm a successful connection
//     await mongoose.connection.db.admin().command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     // await mongoose.disconnect();
//   }
// }
// run().catch(console.dir);

// Start the server
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
