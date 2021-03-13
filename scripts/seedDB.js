const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/virtualAcystant");

const userSeed = [
  {
    firstName: "fakeFName",
    lastName: "fakeLName",
    email: "fake@fake.com",
    location: "Seattle",

  },
  {
    firstName: "fakeFName1",
    lastName: "fakeLName1",
    email: "fake1@fake.com",
    location: "Seattle",
    date: new Date(Date.now())
  }

];

db.Post.remove({})
  .then(() => db.Post.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
