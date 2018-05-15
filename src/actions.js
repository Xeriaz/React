export const onSearch = (e) => {
    return (dispatch, getState) => {
        // this.setState({input: e.target.value});
        dispatch({type: "ADD_SEARCH", payload: e.target.value});
        dispatch(onRequest());
    }
};

const onRequest = () => {
    return (dispatch, getState) => {
        const { api_key, input } =  getState();

        fetch(`http://www.omdbapi.com/?apikey=${api_key}&t=${input}`)
            .then(res => res.json())
            .then(json => dispatch({type: "ADD_MOVIE", payload: json}));
    }
};

export const onBookmark = () => {
    return (dispatch, getState) => {
        const { movie, bookmarks } = getState();
        const newBookmark = [...bookmarks];
        newBookmark.push(movie);

        localStorage.setItem('bookmarks', JSON.stringify(newBookmark));

        dispatch({type: 'ADD_BOOKMARKS', payload: newBookmark});
    }
};