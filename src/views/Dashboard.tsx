import React, { FC } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { UserInterface } from 'interfaces/users.interface';
import UsersList from 'components/organisms/UsersList/UsersList';

interface Props {
  deleteUser: (name: string) => void;
  users: UserInterface[];
  isLoading: boolean;
}

export const Dashboard: FC<Props> = ({ users, deleteUser, isLoading }) => {
  return (
    <ViewWrapper>
      <UsersList users={users} deleteUser={deleteUser} isLoading={isLoading} />
    </ViewWrapper>
  );
};
