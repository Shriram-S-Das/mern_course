import Review from "../models/review.js";

export const getAllReviewsForBook = async(res , req) =>{
    
    try {
        const {bookId} = req.params;
        const reviews = await Review.find({bookId});
        res.json(reviews)
        
    } catch (error) {
        res.status(400).json({message : err.message})
    }
};

// submit a review
export const submitReview = async(res,req)=>{
    const {bookId , user,rating ,comment} = req.body;
   try {
       const review = new Review({bookId ,  user , rating , comment });
       const newReview = await review.save();
       res.status(201).json(newReview);
        
    } catch (error) {
        res.status(400).json({ message: err.message });
    }
};

export const deleteReview = async(res,req) =>{
    try {
        const {reviewId} = req.params;
        const review = await Review.findByIdAndDelete(reviewId);

        if(!review){
            return res.status(400).json("Review not found");
        }
        res.json("Review deleted successfully")
    } catch (error) {
     res.status(500).json({message : err.message});
    }
}