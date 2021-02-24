import React, { FC, useState, useEffect } from 'react';

import { mockAPI } from 'utils/mockApi';
import { UsersListItem } from 'components/molecules/UsersListItem/UserListItem';
import { Wrapper } from './UsersList.styles';
import { UserInterface } from '../../../interfaces/users.interface';

const UsersList: FC = () => {
  const [users, setUsersState] = useState<UserInterface[]>([]);
  const [isLoading, setIsLoadingState] = useState<boolean>(true);

  const fetchData = async () => {
    const data = await mockAPI();
    if (data) {
      setIsLoadingState(false);
      setUsersState(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteUser = (name: string) => {
    const filterData = users.filter((user) => user.name !== name);
    setUsersState(filterData);
  };

  return (
    <Wrapper>
      <h1>{isLoading ? 'Loading...' : 'User List'}</h1>
      <ul>
        {users.map((userData) => (
          <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
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
