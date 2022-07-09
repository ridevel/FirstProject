"use strict"; // Современный формат кода

// Объявление переменных
let numberOfFilms;        // Количество просмтотренных фильмов
let surveyMovie = true;   // От этого статуса зависит работа цикла
let lastMovie;            // Последний просмтотренный фильм
let maxLengthMovie = 50;  // Максимальная длина в названии фильма
let rateLastMovie;        // Рейтинг этого фильма

// Задать вопрос про количество просмотренных фильмов
function AskNumberOfFilms() {

	// Вопрос про количество фильмов
	numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "3");
	
	// Проверить значение
	verifyNumberMovies();

}

// Проверить значения просмторенных фильмов
function verifyNumberMovies() {

	// Если введены путсые поля ИЛИ ложь
	if(!numberOfFilms) {
		AskNumberOfFilms(); // Задать вопрос заного
	} else {
		personalMovieDB.count = numberOfFilms; // Запись значения в объект
	}

}

// Задать вопросы для пользователей
function surveyQuestions(maxLengthMovie) {
	
	// Вопросы
	lastMovie = prompt("Один из последних просмотренных фильмов?", "");
	rateLastMovie = +prompt("На сколько оцените его?", "");
	
	// Добавление значений имени фильма и рейтинга в объект
	personalMovieDB.movies[lastMovie] = rateLastMovie;

	// Проверить введённые вопросы
	checkQuestions();

}

// Проверить данных о фильме
function checkQuestions() {

	// Если введены путсые поля ИЛИ ложь ИЛИ название больше 50 символов
	if ((!lastMovie || !rateLastMovie) || (!lastMovie && !rateLastMovie) || (lastMovie.length > maxLengthMovie)) {
		
		alert(`Huston! Empty value OR false OR the name is greater than ${maxLengthMovie}.`);

		// Если соблюдается условие, то начать опрос заного
		surveyQuestions();
	}

}

// Посчитать количество просмторенных фильмов
function countNumberMovies() {

	if (personalMovieDB.count < 10){
		alert("Просмотрено довльно мало фильмов");
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		alert("Вы классический зритель");
	} else if (personalMovieDB.count >= 30) {
		alert("Вы киноман");
	} else {
		alert("Произошла ошибка");
	}
	
}

// Объект для фильмов
let personalMovieDB = {
	count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

// Проверить значения просмторенных фильмов 
verifyNumberMovies();

// Цикл для опроса пользователей
while(surveyMovie == true) {	

	// Задать вопросы про фильмы
	surveyQuestions(); 
	
	// Возможность добавить ещё фильмы
	surveyMovie = confirm("Добавить фильм?"); 

}

// Проверить количества введённых фильмов
countNumberMovies();

// Вывод содержимого объекта в консоль
console.log(personalMovieDB);

//zzug0284