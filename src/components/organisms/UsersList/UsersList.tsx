import React, { FC } from 'react';
import { UsersListItem } from 'components/molecules/UsersListItem/UserListItem';

import { UserInterface } from '../../../interfaces/users.interface';

import { Title } from '../../atoms/Title/Title';

interface Props {
  deleteUser: (name: string) => void;
  users: UserInterface[];
  isLoading: boolean;
}

const UsersList: FC<Props> = (props: Props) => {
  const { deleteUser, isLoading, users } = props;

  return (
    <>
      <Title>{isLoading ? 'Loading...' : 'Students List'}</Title>
      <ul>
        {users.map((userData) => (
          <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
        ))}
      </ul>
    </>
  );
};

export default UsersList;
