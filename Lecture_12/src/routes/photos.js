const express = require('express');
const router = express.Router();
const database = require("../database.json");

router.get("/", (req, res) => {
    //Get all photos
    const photos = database.photos;
    res.json(photos);
});

router.get("/:id", (req, res) => {
    //Get photos by id
    if (req.params && req.params.id) {
        const photo = database.photos.find(photo => photo.id === +req.params.id);
        if (photo) {
            res.json(photo);
        } else {
            res.status(400).json({message: 'Photo not found'})
        }
    }
});

router.post("/", (req, res) => {
    //Create new photo
    if (!req.body) {
        res.status(400).json({message: 'Empty body'})
    } else {
        const lastPhoto = [...database.photos].sort((a, b) => a.id - b.id);
        const photo = {
            albumId: req.body.id,
            id: lastPhoto.id + 1,
            title: req.body.title,
            url: req.body.url,
            thumbnailUrl: req.body.thumbnailUrl
        };
        database.photos.push(photo);
        res.json(photo)
    }
});

router.patch("/:id", (req, res) => {
    //Update photo field by id
    if (req.params && req.params.id) {
        let updatePhoto;
        database.photos.map(photo => {
            if (photo.id === +req.params.id) {
                photo = Object.assign(photo, req.body)
                updatePhoto = photo
            }
            return photo;
        });
        if (updatePhoto) {
            res.json(updatePhoto);
        } else {
            res.status(400).json({message: 'Photo not found'})
        }
    }
});

router.delete("/:id", (req, res)=> {
   //Delete photo by id
   if (req.params && req.params.id) {
       if (database.photos.some(photo => photo.id === +req.params.id)) {
           database.photos = database.photos.filter(photo => photo.id === +req.params.id);
           res.json({message: 'Photo delete successfully'})
       } else {
           res.status(400).json({message: 'Photo not found'})
       }
   }
});

module.exports = router;