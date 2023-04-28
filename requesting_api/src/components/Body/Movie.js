import React from 'react';
import style from './Movie.module.css';

function Movie(props){
    return (
        <div className={style.movieCard}>
            <div className={style.movieTitle}>{props.title}</div>
            <div className={style.movieCrawl}>{props.crawl}</div>
            <div className={style.movieRelease}>{props.release}</div>
        </div>
    )
}

export default Movie;


