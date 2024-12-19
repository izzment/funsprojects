import React from 'react';

export default function NewsItem(props) {
    return(<div>
        <img src={props.image} className='news-img' alt=""/>
        <div className="tag-and-date">
            <p>{props.tag}</p>
            <p>{props.date}</p>
        </div>
        <h1>{props.header}</h1>
        <div className="author-views-shares">
            <p>{props.author}</p>
            <p>{props.viewCount}</p>
            <p>{props.shareCount}</p>
        </div>

    </div>);
}