const fetch = require('node-fetch');

export const getCards = (success) => {
  fetch('https://web-code-test-dot-nyt-games-prd.appspot.com/cards.json')
      .then(function(res) {
          return res.json();
      }).then(function(json) {
          success(json);
      });
}

export const getTriples = (success) => {
  fetch('https://web-code-test-dot-nyt-games-prd.appspot.com/triples.json')
      .then(function(res) {
          return res.json();
      }).then(function(json) {
          success(json);
      });
}
