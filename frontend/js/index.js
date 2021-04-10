const BASE_URL = 'http://localhost:3000/api';

document.addEventListener('DOMContentLoaded', () => {
  fetch(`${BASE_URL}/random-movie`)
    .then(res => res.json())
    .then(data => updateTitle(data.data.attributes));

  console.log('here');
});

const updateTitle = movie => {
  document.getElementsByClassName('title')[0].innerHTML = movie.title;
};
