import express from "express";

import {getAllReviewsForBook, submitReview , deleteReview } from "../controllers/review.controllers.js";

const route  = express.Router();

route.get("/:bookId",getAllReviewsForBook);
route.put("/",submitReview);
route.delete("/:reviewId",deleteReview);

export default route;