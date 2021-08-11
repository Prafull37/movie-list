import StarRating  from "./StarRating"

export default function MovieCard({movie}){
    console.log(movie)
    return (
        <div className="movie-card">
            <div className="movie-title">
                {movie.title}
            </div>
            <div className="movie-subtitle">
                {movie.subtitle.substring(0,50)}
            </div>
            <div className="movie-poster-container">
                <img src={movie.poster} alt={movie.title}/>
            </div>
            <div className="movie-description">
                {movie.description.substring(0,200)}
            </div>
            <StarRating rating={movie.rating}/>
        </div>
    )
}