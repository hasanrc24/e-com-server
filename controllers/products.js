const getProducts = async (req, res) => {
  res.status(200).json({ msg: "Products ok" });
};
const getProductsAll = async (req, res) => {
  res.status(200).json({ msg: "All products test ok" });
};

module.exports = { getProducts, getProductsAll };
