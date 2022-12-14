const router = require("express").Router();
const homeRoutes = require("./home-routes");
const apiRoutes = require("./api");
//default get route / => this is for all handlebars views
router.use("/", homeRoutes);
// get route /api/
router.use("/api", apiRoutes);

module.exports = router;
