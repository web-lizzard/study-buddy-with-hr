import React, { FC, useState, useContext } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { formValueInterface } from 'interfaces/formValue.interface';
import { UserContext } from 'views/Root';
import { FormField } from 'components/molecules/FormField/FormField';
import { Title } from 'components/atoms/Title/Title';
import { Button } from 'components/atoms/Button/Button';

const initialFormState: formValueInterface = {
  name: '',
  attendance: '',
  average: '',
};

export const AddUser: FC = () => {
  const [formValues, setFormValueState] = useState<formValueInterface>(initialFormState);
  const { handleAddStudent } = useContext(UserContext);

  const handleFormFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValueState({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleOnSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (handleAddStudent === undefined) {
      return;
    }
    handleAddStudent(formValues);
    setFormValueState(initialFormState);
  };
  return (
    <>
      <ViewWrapper as="form" onSubmit={handleOnSubmitForm}>
        <Title>Add new student</Title>
        <FormField label="Name" name="name" id="name" value={formValues.name} onChange={handleFormFieldChange} />
        <FormField label="Attendance" name="attendance" id="attendance" value={formValues.attendance} onChange={handleFormFieldChange} />
        <FormField label="Average" name="average" id="average" value={formValues.average} onChange={handleFormFieldChange} />
        <Button type="submit">Add</Button>
      </ViewWrapper>
    </>
  );
};
