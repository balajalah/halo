const express = require('express');
const userControler = require('../controller/users.js');

const router = express.Router();


//! CREATE - METHOD POST
router.post("/", userControler.createNewUser)

//! READ - METHOD GET
router.get("/", userControler.getAllUsers)

//! UPDATE - METHOD PATH
router.patch('/:idUser', userControler.updateUser)

//! DELETE - METHOD DELETE
router.delete('/:idUser', userControler.deleteUser)

module.exports = router;