const express = require('express');
const router = express.Router();
const database = require("../database.json");

router.get("/", (req, res) => {
    // Get all users
    const users = database.users;
    res.json(users)
});

router.get("/:id", (req, res) => {
    // Get user by id
    if (req.params && req.params.id) {
        const user = database.users.find(user => user.id === +req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.status(400).json({message: 'User not found'});
        }
    }
});

router.post("/", (req, res) => {
    // Create new user
    if (!req.body) {
        res.status(400).json({message: 'Empty body'});
    } else {
        const lastUser = [...database.users].sort((a, b) => a.id - b.id).pop();
        const user = {
            id: lastUser.id + 1,
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            address: {
                street: req.body.address.street,
                suite: req.body.address.suite,
                city: req.body.address.city,
                zipcode: req.body.address.zipcode,
                geo: {
                    lat: req.body.address.geo.lat,
                    lng: req.body.address.geo.lng
                }
            },
            phone: req.body.phone,
            website: req.body.website,
            company: {
                name: req.body.company.name,
                catchPhrase: req.body.company.catchPhrase,
                bs: req.body.company.bs
            }
        };
        database.users.push(user);
        res.json(user);
    }
});

router.patch("/:id", (req, res) => {
    // Update user field by id
    if (req.params && req.params.id) {
        let updatedUser;
        database.users.map(user => {
            if (user.id === +req.params.id) {
                user = Object.assign(user, req.body);
                updatedUser = user;
            }
            return user;
        });
        if (updatedUser) {
            res.json(updatedUser);
        } else {
            res.status(400).json({message: 'User not found'});
        }
    }
});

router.delete("/:id", (req, res) => {
    // Delete user by id
    if (req.params && req.params.id) {
        if (database.users.some(user => user.id === +req.params.id)) {
            database.users = database.users.filter(user => user.id !== +req.params.id);
            res.json({message: 'User deleted successfully'});
        } else {
            res.status(400).json({message: 'User not found'});
        }
    }
});

module.exports = router;