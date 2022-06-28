"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "3");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

let lastFilm = prompt("Один из последних просмотренных фильмов?", "Ведьмак");
let rateLastFilm = prompt("На сколько оцените его?", "4.5");

personalMovieDB.movies[lastFilm] = rateLastFilm;

lastFilm = prompt("Один из последних просмотренных фильмов?", "Ведьмак");
rateLastFilm = prompt("На сколько оцените его?", "4.5");

console.log(personalMovieDB);