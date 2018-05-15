import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import './App.css';
import Movie from './Movie';
import {onSearch, onBookmark} from "./actions";

class MyApp extends Component {

    render() {
        const { input, movie, bookmarks, onSearch, onBookmark } = this.props;
        return (
            <div className="container">
                <input className="form-control" type="text" value={input} onChange={onSearch} />

                {movie.Title && <Movie {...movie} onBookmark={onBookmark} />}

                <h4>Bookmarks</h4>

                <div className="row">
                    {bookmarks.map((bookmark) => (
                        <div className="col-3">
                            <Movie {...bookmark} />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSearch: (e) => dispatch(onSearch(e)),
        onBookmark: () => dispatch(onBookmark()),
    }
}

function mapStateToProps(state) {
    return {
        input: state.input || '',
        api_key: state.api_key,
        movie: state.movie || {},
        bookmarks: state.bookmarks || []
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyApp);
