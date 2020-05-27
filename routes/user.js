const express = require("express");
const router = express.Router();

const User = require('../models/User');

router.get('/list', (req, res) => {

    User.find((err, users) => {
        if (err) {
            console.log(err);
        } else {
            res.render('list', {
                users
            });
        }
    }).lean();
});

router.get('/add', (req, res) => {
    res.render('add');
});

router.post('/add', (req, res) => {

    const {
        name,
        department,
        sem
    } = req.body;

    const newUser = new User({
        name,
        department,
        sem
    });

    newUser.save()
        .then(user => {
            console.log("New user registered successfully");
            res.redirect("/gogaga/list");
        })
        .catch(err => console.log(err));
});




module.exports = router;