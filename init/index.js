const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL ="mongodb://127.0.0.1:27017/wanderlust";

main()
    .then( () =>{
        console.log("connected to DB");
    })
    .catch(err => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initdb = async () =>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "6ac21c446c9506de474f38e5"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}

initdb();
