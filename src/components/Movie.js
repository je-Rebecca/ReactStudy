import React from "react";
import ProTypes from "prop-types";
import "./Movie.css";
import {Link} from "react-router-dom";

function Movie({id, year,title,summary,poster,genres}){
    return (
    <div className="movie">
        <Link to ={{
            pathname: `/movie/${id}`,
            state: {
                year,
                title,
                genres,
                summary,
                poster
            }
        }}
        >    
            <img src ={poster} alt={title} tilte={title} />
            <div className ="movie_data">
                <h3 className="mov_title">{title}</h3>
                <h3 className="mov_year">{year}</h3>
                <ul className="genres">
                    {genres.map((genre, index) =>
                    <li key ={index} className ="genres_genre">{genre}</li> 
                    )}
                </ul>
                <p className="mov_sum">{summary.slice(0,180)}</p>
            </div>
        </Link>
     </div>
    );
}

Movie.prototype ={
    id: ProTypes.number.isRequired,
    year: ProTypes.number.isRequired,
    title:ProTypes.string.isRequired,
    summary: ProTypes.string.isRequired,
    poster: ProTypes.string.isRequired,
    genres:ProTypes.arrayOf(ProTypes.string).isRequired
};
export default Movie;