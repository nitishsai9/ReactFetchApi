import React from 'react';
import '../card/card.styles.css';

export const Card = props => (

    <div className="card-container">
        <img src={`https://robohash.org/${props.monster.id}.png&size=180x180"`} alt=""/>
        <h1>
            {props.monster.name}
        </h1>
        <h2>
            {props.monster.email}
        </h2>
        


    </div>

);