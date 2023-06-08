const express = require('express');
const router = express.Router(); 
const { setUser, getUser, editUser, deleteUser, AgenUser, disAgenUser } = require("../controllers/user.controller");


router.get("/", getUser);
router.post("/", setUser);
router.put("/:id", editUser);
router.patch("/AgenUser/:id", AgenUser);
router.patch("/disAgenUser/:id", disAgenUser);
router.delete("/:id", deleteUser);

module.exports = router;