import React from 'react';
import './App.css';


function Friends(props) {
  return (
    <div className="Friends">
      {props.friends.map((friend) => (
        <div className='friendCard'>
          <h1>{friend.name}</h1>
          <p>{friend.age}</p>
          <p>{friend.email}</p>
        </div>
      ))}
    </div>
  );
}

export default Friends;
