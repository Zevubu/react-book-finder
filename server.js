const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const app = express();
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

app.use(cors())

app.use(express.urlendcoded({extended: true}));
app.use(express.json());

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
};

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", 
    {
        useCreateIndex: true,
        useNewUrlParser: true
    }
);

app.listen(PORT, function(){
    console.log(`API Server now listening on PORT ${PORT}`);
});