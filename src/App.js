import React, { Component } from 'react';
import Film from './components/Film';
import './App.css';


class App extends Component {
  
state = {
  filmovi:[],
  ucitano: false
}
componentDidMount(){
  fetch("https://baza-filmova.herokuapp.com/filmovi/")
  .then(x => x.json())
  .then(data => this.setState({
    filmovi: data ,
    ucitano: true
    }))
}


 render(){
   //todo odvojiti film komponentu zasebno i export import
const mapirano = this.state.filmovi.map(film =>  <Film film={film}>
                                                              </Film> );

  return( 
<div>
  <div id="head">
    <h1>FILMOVI</h1>
  </div>
  <div id="hold">
{mapirano}
  </div>
</div>
  );
};
}

export default App;
