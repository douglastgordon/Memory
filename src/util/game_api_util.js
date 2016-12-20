const fetch = require('node-fetch');

export const getCards = () => {

  fetch('https://web-code-test-dot-nyt-games-prd.appspot.com/cards.json')
      .then(function(res) {
          return res.json();
      }).then(function(json) {
          console.log(json);
      });
}
