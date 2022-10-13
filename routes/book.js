const express = require("express");
const { ObjectId } = require("mongodb");
const bookRouter = express.Router();
const connect = require("../database/db");

bookRouter
  .route("/book")
  .get(async (req, res) => {
    const db = await connect();
    const books = await db.collection("book").find().toArray();
    res.json(books);
  })

  .post(async (req, res) => {
    const db = await connect();

    await db.collection("book").insertOne(req.body);
res.status(201).json({ data: 'Book is Stored' })

  });

bookRouter
  .route("/book/:id")
  .get(async (req, res) => {
    const id = req.params.id;
    const db = await connect();

    const book = await db
      .collection("book")
      .find({ _id: ObjectId(id) })
      .toArray();

    res.json(book);
    // res.send(`Single book of ID: ${req.params.id}`)
  })
  .patch(async (req, res) => {
    const id = req.params.id;
    const db = await connect();
   await  db.collection('book').updateOne({_id:ObjectId(id)}, {$set:req.body})
   res.json({'data': "book is updated"})
  })
  .delete(async (req, res) => {
    const id = req.params.id;
    const db = await connect();
   await  db.collection('book').deleteOne({_id:ObjectId(id)})
   res.status(204).json()
    
  });

module.exports = bookRouter;
