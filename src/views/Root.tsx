import React, { FC, useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/globalStyles';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { UserInterface } from 'interfaces/users.interface';
import { formValueInterface } from 'interfaces/formValue.interface';
import { mockAPI } from 'utils/mockApi';

import { MainTemplate } from 'components/templates/MainTemplate/MainTemplate';
import { Dashboard } from 'views/Dashboard';
import { AddUser } from 'views/AddUser';

type ContextProp = {
  users: UserInterface[];
  handleAddStudent: (values: formValueInterface) => void;
  deleteUser: (name: string) => void;
};

export const UserContext = createContext<Partial<ContextProp>>({});

const Root: FC = () => {
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

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <MainTemplate>
          <UserContext.Provider value={{ users, handleAddStudent, deleteUser }}>
            <Wrapper>
              <Switch>
                <Route path="/" exact>
                  <Dashboard deleteUser={deleteUser} users={users} isLoading={isLoading} />
                </Route>
                <Route path="/add-user">
                  <AddUser />
                </Route>
              </Switch>
            </Wrapper>
          </UserContext.Provider>
        </MainTemplate>
      </Router>
    </ThemeProvider>
  );
};
export default Root;
