import React from 'react';
import User from './user';

{/*
function List(props) {
    return (
        <div>
            {props.users.map(user => <User userName = {user.name} />)}
        </div>
    );
}

*/}

function List(props) {
    console.log(props);
    return <div>
    {props.list.users.map(user => <User userName = {user.name} active = {user.active} age={user.age} sex={user.sex} />)}
    {/*<User listOfUsers = {props.list} />;*/}
    </div>
}

export default List;