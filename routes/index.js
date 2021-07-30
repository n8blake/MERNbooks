const router = require("express").Router();

router.use("/api", require("./bookroutes"));

module.exports = router;
