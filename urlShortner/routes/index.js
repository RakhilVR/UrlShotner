var express = require('express');
var app = express.Router();
var urlShorterner = require("./urlShorter")
var database = require("../config/dbconnection");
const { ObjectId } = require('mongodb');




/* GET home page. */
app.get('/', function (req, res, next) {

});

app.post("/shortUrl", async (req, res) => {
  const { url } = req.body;
  try {
    const collection = await database.db();
    const shortURL = await urlShorterner.urlShorter(url);
    console.log("shortURL......", shortURL);

    let dataThatInsert = { url, shortURL }
    const dataaaa = await collection.insertOne(dataThatInsert);
    console.log(dataaaa);
    res.status(200).send(shortURL)
  } catch (err) {
    console.log(err)
  }

})


app.get("/:shortURL", async (req, res) => {
  const shortURL = req.params.shortURL;
  console.log("hhh.......", shortURL);

  try {
    const query = { shortURL }
    const collection = await database.db();
    const getData = await collection.findOne(query);

    if (getData != null) {

      res.redirect(getData.url);

    } else {
      res.status(404).send("www")
    }


  } catch (err) {
    res.status(500).send(err)
  }

})


app.post("/getUrl", async (req, res) => {
  const shortURL = req.body;
  console.log("hhh.......", shortURL);
  let shortkey = shortURL.shortURL
  const dataCombine = shortURL
  try {
    const query =  dataCombine ;
    console.log("query", query);
    const collection = await database.db();
    console.log("jj");
    const getData = await collection.findOne(query);

    if (getData != null) {
      const sendUrl = `http://localhost:8000/${shortkey}`
      // res.redirect(getData.url);
      res.send(sendUrl)
    } else {
      res.status(404).send("www")
    }

  } catch (err) {
    res.status(500).send(err)
  }
})

app.get("/delete", async (req, res) => {
  const collection = await database.db();
  const deleteee = await collection.deleteMany()
  res.send(deleteee)

})


module.exports = app; 
