import * as React from 'react';
import { UserInterface } from '../../interfaces/users.interface';

interface Props {
  userData: UserInterface;
}

export const UsersListItem: React.FC<Props> = (props: Props) => {
  const { name, attendance, average } = props.userData;

  return (
    <div>
      <li key={name}>
        <div>{average}</div>
        <div>
          <p>{attendance}</p>
          <p>{name}</p>
        </div>
        <button>X</button>
      </li>
    </div>
  );
};
