const express = require('express');
const router = express.Router(); 
const { setAssure, getAssure, editAssure, deleteAssure, TelAssure, disTelAssure } = require("../controllers/Assure.controller");


router.get("/", getAssure);
router.post("/", setAssure);
router.put("/:id", editAssure);
router.patch("/TelAssure/:id", TelAssure);
router.patch("/disTelAssure/:id", disTelAssure);
router.delete("/:id", deleteAssure);

module.exports = router;