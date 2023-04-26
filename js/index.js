// let result = "x" || 'y' ;
//   x = true;
//   y = false;

// let result = false || false ;


// let result = "my" + " " + "string" ;
// console.log(result);


// let incr = 10;
// let descr = 10; 

// incr ++;
// descr --;

// console.log (incr);
// console.log(descr);


// let num = (12%5);

// console.log(num);



// let num = +false;

// console.log(num);



let NumberOfFilms = +prompt ("Сколько фильмов Вы уже посмотрели?", "");

let personalMovieDB = {
    count: personalMovieDB ,
    movies:{ }, 
    actors:{ },
    genres:[],
    privat: false,
};

let answerOne = prompt("Один из последних просмотренных фильмов?", ""),
    answerTwo = prompt("На сколько оцените его?", ""),
    answerThee = prompt("Один из последних просмотренных фильмов?", ""),
    answerFour = prompt("На сколько оцените его?", "");

    personalMovieDB.movies[answerOne] = answerTwo;
    personalMovieDB.movies[answerThee] = answerFour;
