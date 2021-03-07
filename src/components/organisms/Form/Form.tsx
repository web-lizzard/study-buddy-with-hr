import React, { FC } from 'react';

import { Wrapper } from '../UsersList/UsersList.styles';
import { formValueInterface } from 'interfaces/formValue.interface';

import { FormField } from '../../molecules/FormField/FormField';
import { StyledTitle } from '../../molecules/UsersListItem/UserListItem.styles';
import { Button } from '../../atoms/Button/Button';

interface Props {
  handleAddStudent: (e: React.FormEvent<HTMLFormElement>) => void;
  formValues: formValueInterface;
  handleFormFieldChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Form: FC<Props> = (props: Props) => {
  const { handleAddStudent, formValues, handleFormFieldChange } = props;
  return (
    <>
      <Wrapper as="form" onSubmit={handleAddStudent}>
        <StyledTitle>Add new student</StyledTitle>
        <FormField label="Name" name="name" id="name" value={formValues.name} onChange={handleFormFieldChange} />
        <FormField label="Attendance" name="attendance" id="attendance" value={formValues.attendance} onChange={handleFormFieldChange} />
        <FormField label="Average" name="average" id="average" value={formValues.average} onChange={handleFormFieldChange} />
        <Button type="submit">Add</Button>
      </Wrapper>
    </>
  );
};

export default Form;
