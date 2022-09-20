import User from "./../models/user";
import express from "express";
import router from express.Router();
import {} from "../controller/user";

router.get("/logout", logout);

router.route('/signIn')
    .post(signIn);

router.route('/login')
    .post(logIn);

module.exports = router;