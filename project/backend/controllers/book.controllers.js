import Book from "../models/book.js";

export const getAllBooks = async (res , req ) =>{
    try {
        const books = await Book.find();
        res.json(books)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
};

export const createBook = async(res,req) =>{
    
     const book = new book({
            title : req.body.title,
            author : req.body.author,
            description : req.body.description,
            genre : req.body.genre,
            averageRating : req.body.averageRating,
            coverImage : req.body.coverImage
            
        });
        try {
        const newBook = await book.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(400).json({message : error.message});
    }
};
export const getBookId = async (res,req) =>{
    const {id} = req.params;
    try {
        const book = await Book.findById(id);
        if(!book) {
            return res.status(400).json({message : "Book not found"})
        }
    } catch (error) {
        res.status(500).json({ message: err.message });
    }
};
export const searchBooks = async(res,req) =>{
    
  const { query } = req.query;
  try {
    const books = await Book.find({
      $or: [
        { title: new RegExp(query, "i") },
        { author: new RegExp(query, "i") },
        { genre: new RegExp(query, "i") },
      ],
    });
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
