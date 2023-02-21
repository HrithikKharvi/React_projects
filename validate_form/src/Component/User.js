import React from 'react';
import style from './User.module.css';
import Card from '../UI/Card.js';

export default function User(props) {
    let card = "";
    if(props.data.length > 0){
        card = <Card>
                    {props.data.map(d => <div key={d.id} className={style.tag}>
                            {d.name} ({d.age} years old)
                        </div>)
                    }
                </Card>
    }

  return card;
}
