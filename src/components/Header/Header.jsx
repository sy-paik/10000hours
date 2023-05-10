import React from 'react';
import './Header.css';
import titleImage from '../../images/title.png'

export default function Header() {
    return(
        <h1>
            <img className ="title" src={titleImage} alt="1만 시간의 법칙" />
        </h1>
    )
}