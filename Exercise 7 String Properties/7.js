const movie = {
    title : 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};

showProperties(movie);

function showProperties(obj) {
    for (let key in obj) {
        if(typeof oj[key] === 'string')
            console.log(key, obj[key]);
    }
}