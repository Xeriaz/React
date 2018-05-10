import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const API_KEY = '969a0dc3';

let bookmarks = localStorage.getItem('bookmarks');
bookmarks = bookmarks ? JSON.parse(bookmarks) : [];

class MyApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            movie: {},
            bookmarks: bookmarks,
        }
    }

    onSearch = (e) => {
      this.setState({input: e.target.value});

      this.onRequest();
    };

    onRequest = (title = '') => {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${this.state.input}`)
            .then(res => res.json())
            .then(json => this.setState({movie: json}));
    };

    onBookmark = () => {
      // get movie
      // get bookmarks
        const { movie, bookmarks } = this.state;
      // push bookmark
        const newBookmark = [...bookmarks];
        newBookmark.push(movie);

        this.setState({bookmarks: newBookmark});
        localStorage.setItem('bookmarks', JSON.stringify(newBookmark));
      //  save local storage
    };

    render() {
        return (
            <div className="container">
                <input
                    className="form-control"
                    type="text"
                    value={this.state.input}
                    onChange={this.onSearch}
                />
                {this.state.movie.Title && <Movie {...this.state.movie}
                                                  onBookmark = {this.onBookmark.bind(this)} />}

                <h4>Bookmarks</h4>

                <div className="row">
                    {this.state.bookmarks.map((bookmark) => (
                        <div className="col-3">
                            <Movie {...bookmark} />
                        </div>
                    ))}

                </div>

            </div>
        )
    }
}

export default MyApp;
