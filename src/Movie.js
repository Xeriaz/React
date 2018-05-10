import React from 'react';

const Movie = ({ Poster, Plot, Title, onBookmark }) => (
    <div className="card">
        <img className="card-img-top" src={Poster} alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">{Title}</h5>
            <p className="card-text">{Plot}</p>
            {onBookmark &&
                <button
                    className="btn btn-primary"
                    onClick={onBookmark}
                >
                    Bookmark
                </button>
            }
        </div>

    </div>
);

export default  Movie;