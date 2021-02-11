import * as React from 'react';

import { UserInterface } from '../../../interfaces/users.interface';
import { Button } from 'components/atoms/Button/Button';
import { Average, UserInfo, Wrapper } from './UserListItem.styles';

interface Props {
  userData: UserInterface;
}

export const UsersListItem: React.FC<Props> = (props: Props) => {
  const { name, attendance, average } = props.userData;

  return (
    <Wrapper key={name}>
      <Average average={Number(average)}>{average}</Average>
      <UserInfo>
        <p>
          {name}
          <Button />
        </p>
        <p>{`attendace: ${attendance}`}</p>
      </UserInfo>
    </Wrapper>
  );
};
