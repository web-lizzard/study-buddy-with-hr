import React, { FC, useState, useEffect } from 'react';

import { mockAPI } from 'utils/mockApi';
import { UsersListItem } from 'components/molecules/UsersListItem/UserListItem';
import { Wrapper } from './UsersList.styles';
import { UserInterface } from '../../../interfaces/users.interface';
import { FormField } from '../../molecules/FormField/FormField';
import { StyledTitle } from '../../molecules/UsersListItem/UserListItem.styles';
import { Button } from '../../atoms/Button/Button';

interface formValueInterface {
  name: string;
  attendance: string;
  average: string;
}

const UsersList: FC = () => {
  const [users, setUsersState] = useState<UserInterface[]>([]);
  const [isLoading, setIsLoadingState] = useState<boolean>(true);
  const [formValues, setFormValueState] = useState<formValueInterface>({
    name: '',
    attendance: '',
    average: '',
  });

  const handleFormFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValueState({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleAddStudent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newStudent = { ...formValues };
    setUsersState([...users, newStudent]);
    setFormValueState({
      name: '',
      attendance: '',
      average: '',
    });
  };

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
    <>
      <Wrapper as="form" onSubmit={handleAddStudent}>
        <StyledTitle>Add new student</StyledTitle>
        <FormField label="Name" name="name" id="name" value={formValues.name} onChange={handleFormFieldChange} />
        <FormField label="Attendance" name="attendance" id="attendance" value={formValues.attendance} onChange={handleFormFieldChange} />
        <FormField label="Average" name="average" id="average" value={formValues.average} onChange={handleFormFieldChange} />
        <Button type="submit">Add</Button>
      </Wrapper>
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
