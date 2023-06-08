const express = require('express');
const router = express.Router(); 
const { setPoliceauto, getPoliceauto, editPoliceauto, deletePoliceauto, PartPoliceauto, disPartPoliceauto } = require("../controllers/Policeauto.controller");


router.get("/", getPoliceauto);
router.post("/", setPoliceauto);
router.put("/:id", editPoliceauto);
router.patch("/PartPoliceauto/:id", PartPoliceauto);
router.patch("/disPartPoliceauto/:id", disPartPoliceauto);
router.delete("/:id", deletePoliceauto);

module.exports = router;