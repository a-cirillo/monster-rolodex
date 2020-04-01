import React from 'react';
import './card-list.styles.component.css'
import { Card } from "../card/card.component";


//lezione 30 {
//this.state.monster.map(monster => <h1 key={monster.id}>{ monster.name }</h1>)
//}
//diventano delle props del componente
export const CardList = props => {
    return <div className='card-list'>
        {
            props.monster.map(monster => (<Card key={monster.id} monster={monster}></Card>))
        }
    </div>
}