const connect = require("../database/db");
const { ObjectId } = require('mongodb')
exports.index = async (req, res) => {
  const db = await connect();
  const books = await db.collection("book").find().toArray();
  res.json(books);
};

exports.createBook = async (req, res) => {
  const db = await connect();

  await db.collection("book").insertOne(req.body);
  res.status(201).json({ data: "Book is Stored" });
};

exports.showSingleBook = async (req, res) => {
    const id = req.params.id;
    const db = await connect();

    const book = await db
      .collection("book")
      .find({ _id: ObjectId(id) })
      .toArray();

    res.json(book);
  }
  exports.updateBook = async (req, res) => {
    const id = req.params.id;
    const db = await connect();
   await  db.collection('book').updateOne({_id:ObjectId(id)}, {$set:req.body})
   res.json({'data': "book is updated"})
  }

  exports.deleteBook = async (req, res) => {
    const id = req.params.id;
    const db = await connect();
   await  db.collection('book').deleteOne({_id:ObjectId(id)})
   res.status(204).json()
    
  }