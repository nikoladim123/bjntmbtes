import React from 'react';

import korisnici from '../data/korisnici.json';
import Utisak from './Utisak';



const i = 0;
const mapirano = korisnici.map((obj) => <Utisak key={i} name={obj.name.first} gender={obj.gender}/>)


  


export function Main(){
    return (
        <main>
            <h2>KORISNICI</h2>
            {mapirano}
        </main>
    )
}