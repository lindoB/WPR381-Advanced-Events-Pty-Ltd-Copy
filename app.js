const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
// const express = require("express");
// const path = require("path");

// const app = express();

//  Routes
// const eventRoutes = require("./routes/eventRoutes");

// app.set("view engine", "ejs");

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(express.static(path.join(__dirname, "public")));

// // Routes
// app.use("/", eventRoutes);

// const PORT = 3000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });