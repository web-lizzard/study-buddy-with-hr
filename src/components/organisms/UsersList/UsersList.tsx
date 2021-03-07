import React, { FC } from 'react';
import { UsersListItem } from 'components/molecules/UsersListItem/UserListItem';
import { Wrapper } from './UsersList.styles';
import { UserInterface } from '../../../interfaces/users.interface';

import { StyledTitle } from '../../molecules/UsersListItem/UserListItem.styles';

interface Props {
  deleteUser: (name: string) => void;
  users: UserInterface[];
  isLoading: boolean;
}

const UsersList: FC<Props> = (props: Props) => {
  // const [users, setUsersState] = useState<UserInterface[]>([]);
  // const [isLoading, setIsLoadingState] = useState<boolean>(true);
  // const [formValues, setFormValueState] = useState<formValueInterface>({
  //   name: '',
  //   attendance: '',
  //   average: '',
  // });

  // const handleFormFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormValueState({ ...formValues, [e.target.name]: e.target.value });
  // };

  // const handleAddStudent = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const newStudent = { ...formValues };
  //   setUsersState([...users, newStudent]);
  //   setFormValueState({
  //     name: '',
  //     attendance: '',
  //     average: '',
  //   });
  // };

  // const fetchData = async () => {
  //   const data = await mockAPI();
  //   if (data) {
  //     setIsLoadingState(false);
  //     setUsersState(data);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const deleteUser = (name: string) => {
  //   const filterData = users.filter((user) => user.name !== name);
  //   setUsersState(filterData);
  // };
  const { deleteUser, isLoading, users } = props;

  return (
    <>
      <Wrapper>
        <StyledTitle>{isLoading ? 'Loading...' : 'Students List'}</StyledTitle>
        <ul>
          {users.map((userData) => (
            <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
          ))}
        </ul>
      </Wrapper>
    </>
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
