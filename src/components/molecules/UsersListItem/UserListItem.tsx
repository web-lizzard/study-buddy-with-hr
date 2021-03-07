import React, { useContext } from 'react';

import { UserInterface } from '../../../interfaces/users.interface';
import { DeleteButton } from 'components/atoms/DeleteButton/DeleteButton';
import { Average, UserInfo, Wrapper } from './UserListItem.styles';
import { UserContext } from '../../../views/Root';

interface Props {
  userData: UserInterface;
}

export const UsersListItem: React.FC<Props> = (props: Props) => {
  const { name, attendance = '0%', average } = props.userData;
  const { deleteUser } = useContext(UserContext);

  return (
    <Wrapper key={name}>
      <Average average={Number(average)}>{average}</Average>
      <UserInfo>
        <p>
          {name}
          <DeleteButton
            onClick={() => {
              if (deleteUser === undefined) {
                return;
              }
              deleteUser(name);
            }}
          />
        </p>
        <p>{`attendace: ${attendance}`}</p>
      </UserInfo>
    </Wrapper>
  );
};
