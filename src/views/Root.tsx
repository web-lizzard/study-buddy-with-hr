import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/globalStyles';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';

import { UserProvider } from 'providers/UserProvider';
import { MainTemplate } from 'components/templates/MainTemplate/MainTemplate';
import { Dashboard } from 'views/Dashboard';
import { AddUser } from 'views/AddUser';

const Root: FC = () => {
  // const [users, setUsersState] = useState<UserInterface[]>([]);
  // const [isLoading, setIsLoadingState] = useState<boolean>(true);

  // const handleAddStudent = (values: formValueInterface) => {
  //   if (values.average !== '' || values.name !== '') {
  //     const newStudent = { ...values };
  //     setUsersState([newStudent, ...users]);
  //   }
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

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <MainTemplate>
          <UserProvider>
            <Wrapper>
              <Switch>
                <Route path="/" exact>
                  <Dashboard />
                </Route>
                <Route path="/add-user">
                  <AddUser />
                </Route>
              </Switch>
            </Wrapper>
          </UserProvider>
        </MainTemplate>
      </Router>
    </ThemeProvider>
  );
};
export default Root;
