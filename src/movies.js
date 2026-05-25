// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors=moviesArray.map(function(movie){
        return movie.director;
    });
    // BONUS 1.1
    const cleanDirectors = directors.filter(function(director, index) {
        return directors.indexOf(director) === index;
    });
    return cleanDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if(moviesArray.length === 0){
        return 0;
    }
    const spielbergDramaMovies=moviesArray.filter(function(movie){
        return movie.director==='Steven Spielberg' && movie.genre.includes("Drama");
    });
    return spielbergDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const totalScore = moviesArray.reduce(function (accumulator, movie) {
    if (movie.score) {
      return accumulator + movie.score;
    } else {
      return accumulator; 
    }
  }, 0);

  const average = totalScore / moviesArray.length;
  return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies=moviesArray.filter(function(movie){
        return movie.genre.includes('Drama');
    })
    if(dramaMovies.length === 0){
        return 0;
    }
    const totalDramaMovies=dramaMovies.reduce(function(accumulator, movie){
        if(movie.score){
            return accumulator + movie.score;
        }
        else{
            return accumulator;
        }
    }, 0
)
    const averageDramaMovies=totalDramaMovies/dramaMovies.length;
    return Number(averageDramaMovies.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesCopy=[...moviesArray];
    const orderMoviesByYear=moviesCopy.sort(function(a,b){
       if(a.year!==b.year){
        return a.year-b.year;
       }
       else{
         return a.title.localeCompare(b.title);
       }
    }
)
    return orderMoviesByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesCopy=[...moviesArray];
    moviesCopy.sort(function(a, b) {
        return a.title.localeCompare(b.title);
    });
    const movieTitles = moviesCopy.map(function(movie) {
        return movie.title;
    });
    return movieTitles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(function(movie) {
    
    const newMovie = { ...movie };
    let durationStr = newMovie.duration;
    let totalMinutes = 0;

    if (typeof durationStr !== 'string') {
      return newMovie;
    }

    if (durationStr.includes('h')) {
      const hours = parseInt(durationStr.split('h')[0]);
      totalMinutes += hours * 60;
    }
    if (durationStr.includes('min')) {
      let minutesStr = durationStr;
      
      if (durationStr.includes('h')) {
        minutesStr = durationStr.split('h')[1];
      }

      const minutes = parseInt(minutesStr.split('min')[0]);
      totalMinutes += minutes;
    }
    newMovie.duration = totalMinutes;

    return newMovie;
  });
}
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;
  const yearsData = {};
  moviesArray.forEach(function(movie) {
    if (!yearsData[movie.year]) {
      yearsData[movie.year] = [];
    }
    yearsData[movie.year].push(movie.score);
  });

  let bestYear = null;
  let highestAverage = -1;

  for (const year in yearsData) {
    const scores = yearsData[year];
    
    const totalScore = scores.reduce(function(acc, score) {
      return acc + score;
    }, 0);
    
    const average = totalScore / scores.length;
    if (average > highestAverage || (average === highestAverage && Number(year) < Number(bestYear))) {
      highestAverage = average;
      bestYear = year;
    }
  }
  return `The best year was ${bestYear} with an average score of ${highestAverage}`;
}