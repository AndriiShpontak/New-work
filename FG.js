'use strict';


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('How many films have you already watched?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many films have you already watched?', '');
        }
    },
    rememberMyFilms: function () {
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
    },
    personalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('You\'ve seen quite a few movies!');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Нou are a classic spectator!');
        } else if (personalMovieDB.count >= 30) {
            console.log('You are kinnaman!!!');
        } else {
            console.log('ERROR!!!')
        }
    },
    shohMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) {
            // let genre = prompt(`Your favorite genre is numbered ${i}`);

            // if (genre === '' || genre == null) {
            //     console.log('Вы ввели некоректные данные или не ввели их вообще');
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = genre;
            // }


            let genres = prompt(`Введите ваши любымые жанры через запятую`).toLowerCase();

            if (genres === '' || genres == null) {
                console.log('Вы ввели некоректные данные или не ввели их вообще');
                i--;
            } else {
                personalMovieDB.genres = genres.split(, );
                personalMovieDB.genres.sotr();
            }

        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i - 1} - это ${item}`)
        })

    }
};