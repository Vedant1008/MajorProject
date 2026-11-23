const Listing = require("../models/listing");
const Review = require("../models/review");


module.exports.createReviews = async(req,res) =>{
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    // 1. Push the review into the array FIRST
    listing.reviews.push(newReview);

    // 2. THEN save both to the database
    await newReview.save();
    await listing.save();

    req.flash("success", "New review created");

    res.redirect(`/listings/${listing._id}`)
};

module.exports.destroyReview = async (req, res) =>{
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted");

    res.redirect(`/listings/${id}`)
};