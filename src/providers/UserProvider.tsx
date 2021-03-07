import React, { createContext, useState, useEffect, FC } from 'react';
import { UserInterface } from 'interfaces/users.interface';
import { formValueInterface } from 'interfaces/formValue.interface';
import { mockAPI } from 'utils/mockApi';

type ContextProp = {
  users: UserInterface[];
  handleAddStudent: (values: formValueInterface) => void;
  deleteUser: (name: string) => void;
  isLoading: boolean;
};

interface Props {
  children: any;
}

export const UserContext = createContext<Partial<ContextProp>>({});

export const UserProvider: FC<Props> = (props: Props) => {
  const [users, setUsersState] = useState<UserInterface[]>([]);
  const [isLoading, setIsLoadingState] = useState<boolean>(true);

  const handleAddStudent = (values: formValueInterface) => {
    if (values.average !== '' || values.name !== '') {
      const newStudent = { ...values };
      setUsersState([newStudent, ...users]);
    }
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

  return <UserContext.Provider value={{ deleteUser, handleAddStudent, isLoading, users }}>{props.children}</UserContext.Provider>;
};
