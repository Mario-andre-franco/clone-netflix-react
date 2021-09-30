import React from 'react';
import './MovieRow.css';

const MovieRow = ({ title, items }) => {
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movie-row--listarea">
        <div className="movie-row--list">
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className="movieRow--item">
                <img
                  src={`http://image.tmdb.org/t/p/w300/${item.poster_path}`}
                  alt={item.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default MovieRow;