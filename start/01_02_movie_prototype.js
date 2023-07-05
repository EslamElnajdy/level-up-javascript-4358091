// Write your code here

class Movie {
  constructor(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }
  getOverview() {
    return `${this.title}, a ${this.genre} film directed
    by ${this.director} was resleased in ${this.releaseYear}.
    It received a rating of ${this.rating}`;
  }
}

const spiderMan = new Movie("Spiderman", "Sam Raimi", "Action", 2002, 87);


console.log(spiderMan.getOverview());