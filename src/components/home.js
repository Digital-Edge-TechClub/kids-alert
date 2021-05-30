import React, { Component } from 'react';
import logo from './playtime.svg';
import boy from './boy.svg';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';




export default class Login extends Component {

 
    
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
       <div>

				<nav class="navbar navbar-light bg-light">
				  <div class="container-fluid">
				    <a class="navbar-brand" href="#">
				      
				       <h3 style={{color: "red",width:"10px"}}>Kid's Covid-19 News Reader<img src={logo} alt="" width="30" height="40" className="d-inline-block align-text-top mx-4"></img></h3>
				    </a>
				  </div>
				</nav> 	

            <div className="container-sm">
				<figure className="figure">
				 <img src={boy} width="1200" height="400" className="rounded mx-auto d-block mt-5 mb-5" ></img>
				</figure>




		       <div class="d-grid gap-2">
			   <button className="btn btn-success mt-5" type="button" onClick={this.handlelistenClick}>
		        <h2>Lets's play Covid-19 News</h2>
		       </button> 
				</div>
            </div>
        </div>          
        );
    }
}