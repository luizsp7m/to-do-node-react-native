const express = require("express");
const TaskController = require("../controllers/TaskController");
const MacaddressValidation = require("../middlewares/MacaddressValidation");
const TaskValidation = require("../middlewares/TaskValidation");

const router = express.Router();

router.post("/", TaskValidation, TaskController.create);
router.put("/:id", TaskValidation, TaskController.update);
router.get("/:id" ,TaskController.show);
router.delete("/:id" ,TaskController.delete);
router.put("/:id/:done" ,TaskController.done);
router.get("/filter/all", MacaddressValidation ,TaskController.all);
router.get("/filter/late", MacaddressValidation ,TaskController.late);

module.exports = router;