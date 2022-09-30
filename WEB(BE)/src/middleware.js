//check if user is loggedin
module.exports.isLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.returnTo = req.originalUrl;
        return res.redirect('/userSchemaAPI/login');
    }
    next();
}