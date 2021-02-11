import React, { FC } from 'react';

import { users } from 'data/users';
import { UsersListItem } from 'components/molecules/UsersListItem/UserListItem';
import { Wrapper } from './UsersList.styles';

const UsersList: FC = () => {
  return (
    <Wrapper>
      <ul>
        {users.map((userData) => (
          <UsersListItem userData={userData} />
        ))}
      </ul>
    </Wrapper>
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
