import * as React from 'react';

import { UserInterface } from '../../../interfaces/users.interface';
import { DeleteButton } from 'components/atoms/DeleteButton/DeleteButton';
import { Average, UserInfo, Wrapper } from './UserListItem.styles';

interface Props {
  userData: UserInterface;
  deleteUser: (name: string) => void;
}

export const UsersListItem: React.FC<Props> = (props: Props) => {
  const { name, attendance = '0%', average } = props.userData;

  return (
    <Wrapper key={name}>
      <Average average={Number(average)}>{average}</Average>
      <UserInfo>
        <p>
          {name}
          <DeleteButton onClick={() => props.deleteUser(name)} />
        </p>
        <p>{`attendace: ${attendance}`}</p>
      </UserInfo>
    </Wrapper>
  );
};
