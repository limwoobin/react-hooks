import React  from 'react';

const User = ({user}) => {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    )
}

const UserList = ({ users }) => {
    return (
      <div>
        {users.map(user => (
          <User user={user} key={user.id} />
        ))}
      </div>
    );
  }


export default UserList;