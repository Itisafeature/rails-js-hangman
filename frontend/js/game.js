const BASE_URL = 'http://localhost:3000/api';

class Game {
  constructor() {
    this.fetchMovie();
    console.log(this._movie);
  }

  set movie(currentMovie) {
    debugger;
    this_.movie = currentMovie;
  }

  async fetchMovie() {
    fetch(`${BASE_URL}/random-movie`)
      .then(res => res.json())
      .then(data => (this.movie = data.data.attributes));
  }

  get movie() {
    return this._movie;
  }
}
