"use strict"; // Современный формат кода

// Объявление переменных
let numberOfFilms;        // Количество просмтотренных фильмов
let surveyMovie = true;   // От этого статуса зависит работа цикла
let lastMovie;            // Последний просмтотренный фильм
let maxLengthMovie = 50;  // Максимальная длина в названии фильма
let rateLastMovie;        // Рейтинг этого фильма

// Объект для фильмов
let personalMovieDB = {
	count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
	rememberMyFilms: function() {

		// Цикл для опроса пользователей
		while(surveyMovie == true) {	

			// Задать вопросы про фильмы
			personalMovieDB.surveyQuestions(); 
			
			// Возможность добавить ещё фильмы
			surveyMovie = confirm("Добавить фильм?"); 
	
		}
	},
	surveyQuestions: function() {

		// Вопросы
		lastMovie = prompt("Один из последних просмотренных фильмов?", "");
		rateLastMovie = +prompt("На сколько оцените его?", "");
		
		// Добавление значений имени фильма и рейтинга в объект
		personalMovieDB.movies[lastMovie] = rateLastMovie;

		// Проверить введённые вопросы
		personalMovieDB.checkQuestions();
	},
	checkQuestions: function() {
		// Если введены путсые поля ИЛИ ложь ИЛИ название больше 50 символов
		if ((!lastMovie || !rateLastMovie) || (!lastMovie && !rateLastMovie) || (lastMovie.length > maxLengthMovie)) {
			
			alert(`Huston! Empty value OR false OR the name is greater than ${maxLengthMovie}.`);

			// Если соблюдается условие, то начать опрос заного
			personalMovieDB.surveyQuestions();
		}
	},
	writeYourGenres: function() {

		for (let i = 1; i <= 3; i++) {
			const favouriteGenre = prompt(`Ваш любимый жанр под номером ${i}`);
			 if (!favouriteGenre) {
				personalMovieDB.writeYourGenres();
			 } else {
				 personalMovieDB.genres.push(favouriteGenre);
			 }
		 }

	},
	AskNumberOfFilms: function() {

		// Вопрос про количество фильмов
		numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "3");
		
		// Проверить значение
		personalMovieDB.verifyNumberMovies();

	},
	verifyNumberMovies: function() {

		// Если введены путсые поля ИЛИ ложь
		if(!numberOfFilms) {
			personalMovieDB.AskNumberOfFilms(); // Задать вопрос заного
		} else {
			personalMovieDB.count = numberOfFilms; // Запись значения в объект
		}
		
	},
	countNumberMovies: function() {
		
		if (personalMovieDB.count < 10){
			alert("Просмотрено довльно мало фильмов");
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			alert("Вы классический зритель");
		} else if (personalMovieDB.count >= 30) {
			alert("Вы киноман");
		} else {
			alert("Произошла ошибка");
		}
	
	}, 
	toggleVisibleMyDB: function(hidden) {

		if(!hidden) {	
			personalMovieDB.privat = true;
		} else if (hidden) {
			personalMovieDB.privat = false;
		} else {
			console.log("Ошибка!");
		}

		return hidden;
	},
	showMyDB: function(hidden) {

		if (!hidden) {
			console.log(personalMovieDB);
		} else {
			console.log("Ошибка!");
		}

	},
	outputGenres: function() {

		personalMovieDB.genres.forEach(function(item, index) {
			console.log(`Любимый жанр #${++index} - это ${item}`);
		});

	}
};

// Проверить значения просмторенных фильмов 
personalMovieDB.verifyNumberMovies();

personalMovieDB.rememberMyFilms();

// Задать вопросы про жанры
personalMovieDB.writeYourGenres();

// Опросить пользователей
personalMovieDB.rememberMyFilms();

// Проверить количества введённых фильмов
personalMovieDB.countNumberMovies();

// Переключить режим доступа
//personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);

// Вывести содержимого объекта в консоль
personalMovieDB.showMyDB(personalMovieDB.privat); 

// Показать жанры в консоли
personalMovieDB.outputGenres();
