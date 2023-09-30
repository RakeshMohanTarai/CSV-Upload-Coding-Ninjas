const { response } = require('express');
var User = require('../models/User');
var csv = require('csvtojson');

const importUser = async (req, res)=> {

    try {

        var userData = [];

        csv()
        .fromFile(req.file.path)
        .then(async (response) => {
        //  console.log(response); // this will convert the file into the JSON format

        for(var i = 0; i <response.length; i++){
          userData.push({
            serialNumber: response[i].S.No,
            name: response[i].Name,
            email: response[i].Email,
            mobile: response[i].Mobile,
          });
        }
        
        await User.insertMany(userData);

        })

        res.send({status:400, success:true, msg:'CSV Imported Successfully'});
    } catch (error) {
        res.send({status:400, success:false, msg:error.message});
    }
}

module.exports = {
    importUser
}