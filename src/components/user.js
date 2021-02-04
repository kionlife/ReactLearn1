import React from 'react';

function User(props) {
    let className = 'active';
    if (props.active === false) {
        className = 'notActive';
    }

    return <li className={className}>{props.userName}. Років: {props.age}. Стать: {props.sex}</li>
}

export default User;