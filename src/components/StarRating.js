import React from 'react'

 const StarRating = ({rating}) => {
    return (
        <div className="movie-ratings">
               <span className="rating"> Rating in Star:</span>{rating}
        </div>
    )
}

export default StarRating;
