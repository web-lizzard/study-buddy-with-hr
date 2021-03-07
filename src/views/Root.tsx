import React, { FC, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/globalStyles';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { UserInterface } from 'interfaces/users.interface';
import { formValueInterface } from 'interfaces/formValue.interface';
import { mockAPI } from 'utils/mockApi';

import { MainTemplate } from 'components/templates/MainTemplate/MainTemplate';
import UsersList from '../components/organisms/UsersList/UsersList';
import Form from '../components/organisms/Form/Form';

const initialFormState: formValueInterface = {
  name: '',
  attendance: '',
  average: '',
};

const Root: FC = () => {
  const [users, setUsersState] = useState<UserInterface[]>([]);
  const [isLoading, setIsLoadingState] = useState<boolean>(true);
  const [formValues, setFormValueState] = useState<formValueInterface>(initialFormState);

  const handleFormFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValueState({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleAddStudent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formValues.average !== '' || formValues.name !== '') {
      const newStudent = { ...formValues };
      setUsersState([...users, newStudent]);
      setFormValueState(initialFormState);
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
          <Wrapper>
            <Switch>
              <Route path="/" exact>
                <UsersList deleteUser={deleteUser} users={users} isLoading={isLoading} />
              </Route>
              <Route path="/add-user">
                <Form handleAddStudent={handleAddStudent} handleFormFieldChange={handleFormFieldChange} formValues={formValues} />
              </Route>
            </Switch>
          </Wrapper>
        </MainTemplate>
      </Router>
    </ThemeProvider>
  );
};
export default Root;
