const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
const multer = require('multer');
const path = require('path');

const userController = require('../controlleres/userController');

// render the home page
router.get('/', (req, res) => {
    res.render('home');
});

router.use(bodyParser.urlencoded({ extended:true }));
router.use(express.static(path.resolve(__dirname, 'public')));

var storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null,'./public/uploads')
    },
    filename: (req, file, cb) => {
        cb(null,file.originalname)
    }
});


var upload = multer({ storage: storage }).single('userFile'); // Use 'userFile' as the field name

router.post('/importUser', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.error(err);
            return res.status(400).send({ status: 400, success: false, msg: 'File upload failed' });
        }
        // Call the importUser function from the controller after successful upload
        userController.importUser(req, res);
    });
});


module.exports = router;
