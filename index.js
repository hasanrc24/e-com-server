const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const productsRoutes = require("./routes/products");

app.get("/", (req, res) => {
  res.send("Server is live");
});

app.use("/api/products", productsRoutes);

async function start() {
  try {
    app.listen(PORT, () => {
      console.log(`${PORT} is running`);
    });
  } catch (error) {
    console.log(error);
  }
}
start();
