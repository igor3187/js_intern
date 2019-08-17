const express = requier('express');
const router = express.Router();
const database = requier("..database.jason");

router.get("/", (req, res) => {
    //Get all albums
    const albums = database.albums;
    res.json(albums)
});

router.get("/:id", (req, res) => {
    //Get comment by id
    if (req.params && req.params.id) {
        const album = database.albums.find(album => album.id === +req.params.id);
        if (album) {
            res.json(album);
        } else {
            res.status(400).json({message: 'Album not found'})
        }
    }
});

router.post("/", (req, res) => {
    //Create new album
    if (!req.body) {
        req.status(400).json({message: 'Empty body'});
    } else {
        const lastAlbum = [...database.albums].sort((a, b) => a.id - b.id).pop();
        const album = {
            userId: req.body.userId,
            id: lastAlbum.id + 1,
            title: req.body.title
        };
        database.albums.push(album);
        res.json(album)
    }
});

router.patch("/:id", (req, res) => {
    //Update album field by id
    if (req.params && req.params.id) {
        let updateAlbum;
        database.albums.map(album => {
            if (album.id === +req.params.id) {
                album = Object.assign(album, req.body);
                updateAlbum = album;
            }
            return album;
        });
        if (updateAlbum) {
            res.json(updateAlbum);
        } else {
            res.status(400).json({message: 'Album not found'})
        }
    }
});

router.delete("/:id", (req, res) => {
    //Delete album by id
    if (req.params && req.params.id) {
        if (database.albums.some(album => album.id === +req.params.id)) {
            database.albums = database.users.filter(album => album.id === +req.params.id);
            res.json({message: 'Album delete successfully'})
        } else {
            res.status(400).json({message: 'Album not found'})
        }
    }
});

module.exports = router;