"use strict"; // Современный формат кода

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "3"); // Количество просмтотренных фильмов
// Объект для фильмов

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

// Вопросы для пользователей

function surveyQuestions(maxLengthMovie) {
	  lastMovie = prompt("Один из последних просмотренных фильмов?", "");
	  ratelastMovie = +prompt("На сколько оцените его?", "");
}


// Объявление переменных

let surveyMovie = true;   // От этого статуса зависит работа цикла
let lastMovie;            // Последний просмтотренный фильм
let maxLengthMovie = 50;  // Максимальная длина в названии фильма
let ratelastMovie;        // Рейтинг этого фильма


// Цикл для опроса пользователей

while(surveyMovie == true) {	

	surveyQuestions(); 
	
	// Валидация данных о фильме
	
	if (!lastMovie || !ratelastMovie) {
		// Если введены путсые поля или ложь
		alert("Huston! Empty value or false");
		surveyQuestions();
	} else if (lastMovie.length > maxLengthMovie) {
		// Если в названии фильма больше 50 символов
		alert(`Max value more than ${maxLengthMovie}. The length is ${lastMovie.length}`);
		surveyQuestions();
	}
	
	// Возможность добавить ещё фильмы
	
	surveyMovie = confirm("Добавить фильм?"); 

}

// Проверка на введённое количество просмторенных фильмов

if (personalMovieDB.count < 10){
	alert("Просмотрено довльно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	alert("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
	alert("Вы киноман");
} else {
	alert("Произошла ошибка");
}

// Добавление значений имени фильма и рейтинга в объект
	
personalMovieDB.movies[lastMovie] = ratelastMovie;

// Вывод содержимого объекта в консоль

console.log(personalMovieDB);

//zzug0284