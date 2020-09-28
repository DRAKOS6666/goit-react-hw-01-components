import React from 'react';
import PropTypes from 'prop-types';
import './FriendList.scss';

function FriendList(props) {
  const friendList = props.friends.map(friend => {
    return (
      <li className="friend-item" key={friend.id}>
        <span
          className="status"
          style={{
            backgroundColor: friend.isOnline ? 'green' : 'red',
          }}
        ></span>
        <img className="avatar" src={friend.avatar} alt=""></img>
        <p className="name">{friend.name}</p>
      </li>
    );
  });
  return <ul className="friend-list">{friendList}</ul>;
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FriendList;
