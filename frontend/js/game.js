const BASE_URL = 'http://localhost:3000/api';

class Game {
  constructor() {
    this._score = 0;
  }
  set movie(currentMovie) {
    this._movie = currentMovie;
  }

  get movie() {
    return this._movie;
  }

  updateScore(addedPoints) {
    this._score += addedPoints;
  }

  get score() {
    return this._score;
  }

  async fetchMovie() {
    return fetch(`${BASE_URL}/random-movie`)
      .then(res => res.json())
      .then(data => (this.movie = data.data.attributes));
  }
}
