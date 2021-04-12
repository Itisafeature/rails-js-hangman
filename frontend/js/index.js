const BASE_URL = 'http://localhost:3000/api';

document.addEventListener('DOMContentLoaded', () => {
  getMovie();
});

const getMovie = () => {
  fetch(`${BASE_URL}/random-movie`)
    .then(res => res.json())
    .then(data => updateTitle(data.data.attributes));
};

const updateTitle = movie => {
  transformTitle(movie.title);
};

const transformTitle = title => {
  for (let i = 0; i < title.length; i++) {
    let elToAdd = document.createElement('p');

    if (title[i].match(/[,'?!.]/)) {
      elToAdd.classList.add('punctuation');
      elToAdd.innerHTML = title[i];
    } else if (title[i] === ' ') {
      elToAdd.classList.add('space');
      elToAdd.innerHTML = '&nbsp;';
    } else {
      elToAdd.classList.add('character');
    }

    document.getElementsByClassName('spots')[0].appendChild(elToAdd);
    if (!elToAdd.classList.contains('space')) {
      const spaceToAdd = document.createElement('p');
      spaceToAdd.innerHTML = '&nbsp;';
      document.getElementsByClassName('spots')[0].appendChild(spaceToAdd);
    }
  }
};
