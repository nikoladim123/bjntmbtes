import React from 'react';


const Film = ({ film }) => (
<div key={film._id} id="holder">
  <h2>{film.naziv}</h2>
  <img src={film.slika}></img>
  <h1>{film.godina}</h1>
  <p>Dodat u bazu {film.dodat.substr(0,10)}.</p>
  <br></br>
  <br></br>
  <button>MORE INFO</button>
</div>);



export default Film 