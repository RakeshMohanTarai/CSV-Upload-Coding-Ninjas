const express = require("express");
const db = require('./config/mongoose');

const port = 8000;

const app = express();

//setup the ejs engine
app.set('view engine', 'ejs');
app.set('views', './views');

//setup the inline css rendering 
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//setup the routes
var userRoute = require('./routes/userRoute');
app.use('/',userRoute);

//setup the server
app.listen(port, function (error) {
	if (error) {
		console.log(`Error in connecting to server: ${error}`);
		return;
	}
	console.log(`Server running on port: ${port}`);
});