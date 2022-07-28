const express =require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const base = require('../models/Reg');

const router = express.Router();

router.get('/',(req,res)=>{
    res.render('reg')
   

});
// router.post('/', async (req, res) => {
//     const user = new login(req.body);
//     await User.reg(user, req.body.password, (err) => {
//         if (err) {
//             //if there errors, remain on login/register page
//             res.status(404).render('reg', {
//                 title: ''
//             });
//             console.log(err)
//         } else {
//             res.redirect('/login');
//         }
//     })

// });

router.post('/', passport.authenticate('local',
    {failureRedirect: '/login?alert=error'}),
    (req,res)=>{
        //giving a session to the user when successfully logged in. 
        req.session.user=req.user
        //redirect user to car registration page after logging in. 
        res.redirect('/login');
})
module.exports = router;