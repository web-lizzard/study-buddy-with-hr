import React, { FC, useContext } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { UserInterface } from 'interfaces/users.interface';
import UsersList from 'components/organisms/UsersList/UsersList';
import { UserContext } from './Root';

export const Dashboard: FC = () => {
  const { users } = useContext(UserContext);
  if (users === undefined) {
    return <h1>Ups something goes wrong</h1>;
  }
  return (
    <ViewWrapper>
      <UsersList users={users} />
    </ViewWrapper>
  );
};
