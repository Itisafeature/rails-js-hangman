const BASE_URL = 'http://localhost:3000/api';

let currentMovie;
const currentGuesses = [];

document.addEventListener('DOMContentLoaded', () => {
  addKeyDown();
  getMovie();
});

const getMovie = () => {
  fetch(`${BASE_URL}/random-movie`)
    .then(res => res.json())
    .then(data => updateTitle(data.data.attributes));
};

const updateTitle = movie => {
  console.log(movie.title);
  currentMovie = movie;
  transformTitle(movie.title);
};

const addKeyDown = () => {
  document.addEventListener('keydown', e => {
    currentGuesses.push(e.key.toLowerCase());
    document.getElementsByClassName('spots')[0].innerHTML = '';
    transformTitle(currentMovie.title);
  });
};

const updateGame = () => {};

const transformTitle = title => {
  const words = title.split(' ');
  for (let i = 0; i < words.length; i++) {
    const div = document.createElement('div');
    div.classList.add('word');
    for (let j = 0; j < words[i].length; j++) {
      let elToAdd = document.createElement('p');

      if (words[i][j].match(/[,'?!.:]/)) {
        elToAdd.classList.add('punctuation');
        elToAdd.innerHTML = words[i][j];
      } else {
        elToAdd.classList.add('character');

        if (currentGuesses.includes(words[i][j].toLowerCase())) {
          elToAdd.innerHTML = words[i][j];
        }
      }

      div.appendChild(elToAdd);
    }
    document.getElementsByClassName('spots')[0].appendChild(div);
  }
};
