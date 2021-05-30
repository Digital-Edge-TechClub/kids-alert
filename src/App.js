import './App.css';
import React from 'react';
import Home from "./Components/home";
import Contact from "./Components/contact";
import About from "./Components/about";



class App extends React.Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.handlelistenClick = this.handlelistenClick.bind(this);
  }

  handlelistenClick() {

      var axios = require("axios").default;

      var options = {
        method: 'GET',
        url: 'https://free-news.p.rapidapi.com/v1/search',
        params: {q: 'Covid-19', lang: 'en'},
        headers: {
          'x-rapidapi-key': '8447133026mshca7cb2f05a4409bp1a0bf4jsn957c820e10b5',
          'x-rapidapi-host': 'free-news.p.rapidapi.com'
        }
      };

      axios.request(options).then(function (response) {

          window.speechSynthesis.cancel();
          var msg = new SpeechSynthesisUtterance();
          let articleNumber = Math.floor(Math.random() * 11);//any article in the top 10
          msg.text = response.data.articles[articleNumber].title + response.data.articles[articleNumber].summary;
          window.speechSynthesis.speak(msg);
        




      }).catch(function (error) {
        console.error(error);
      });

  }

  render() {
    return (
      <button onClick={this.handlelistenClick}>
        Read
      </button>
    );
  }
}

export default App;
