import React, { Component } from 'react';

export default class Utisak extends Component {
    state ={
        obrisano: false 
    }

    obrisi = () => {
      this.setState({
        obrisano: true
      })
    }

    render() {
        if (this.state.obrisano) return null;
        return (
           
            <p>
                {this.props.name}<br></br>
                {this.props.gender}
                <br/><button onClick={this.obrisi}>X</button>
            </p>
       
        )
    }
}