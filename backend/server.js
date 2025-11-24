const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/donors", require("./routes/donorRoutes"));

app.get("/", (req, res) => {
    res.send("Blood Donation API Running");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
