import React from 'react';


const Film = ({ film }) => (
<div key={film._id} id="holder">
  <h2>{film.naziv}</h2>
  <img src={film.slika}></img>
  <h3>{film.godina}</h3>
  <p>Dodat u bazu {film.dodat.substr(0,10)}.</p>
</div>);



export default Film 