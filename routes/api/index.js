const router = require("express").Router();
const emailRoutes = require("./apiRoutes.js");

// Book routes
router.use("/email", emailRoutes);

module.exports = router;