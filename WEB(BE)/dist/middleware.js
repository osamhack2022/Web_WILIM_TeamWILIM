"use strict";

//check if user is loggedin
module.exports.isLoggedIn = function (req, res, next) {
  if (!req.isAuthenticated()) {
    req.session.returnTo = req.originalUrl;
    return res.redirect('/userSchemaAPI/login');
  }

  next();
};