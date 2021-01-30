import React, { FC } from 'react';
import { users } from 'data/users';
import { UsersListItem } from 'components/UsersListItem/UserListItem';

const UsersList: FC = () => {
  return (
    <div>
      <ul>
        {users.map((userData) => (
          <UsersListItem userData={userData} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;

// <li>
// <div>3.9</div>
// <div>
//   <p>Adam Nowak</p>
//   <p>attendace: 38%</p>
// </div>
// <button>X</button>
// </li>
