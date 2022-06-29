'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many films have you already watched?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films have you already watched?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('One of the last movies you watched?', '').trim(),
            b = prompt('How much would you rate it?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }

    }
}

rememberMyFilms();

function personalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('You\'ve seen quite a few movies!');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Нou are a classic spectator!');
    } else if (personalMovieDB.count >= 30) {
        console.log('You are kinnaman!!!');
    } else {
        console.log('ERROR!!!')
    }
}

personalLevel();


function shohMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

shohMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt (`Your favorite genre is numbered ${i}`); 
    }
}

writeYourGenres();