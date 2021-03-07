import React, { FC, useContext } from 'react';
import { UsersListItem } from 'components/molecules/UsersListItem/UserListItem';

import { UserInterface } from '../../../interfaces/users.interface';

import { Title } from '../../atoms/Title/Title';
import { UserContext } from '../../../views/Root';

interface Props {
  users: UserInterface[];
}

const UsersList: FC<Props> = (props: Props) => {
  const { users } = props;
  const { isLoading } = useContext(UserContext);

  return (
    <>
      <Title>{isLoading ? 'Loading...' : 'Students List'}</Title>
      <ul>
        {users.map((userData) => (
          <UsersListItem key={userData.name} userData={userData} />
        ))}
      </ul>
    </>
  );
};

export default UsersList;
