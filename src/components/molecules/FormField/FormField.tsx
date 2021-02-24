import React, { FC } from 'react';
import styled from 'styled-components';
import { Input } from '../../atoms/Input/Input';
import { Label } from '../../atoms/Label/Label';

interface Props {
  label: string;
  name: string;
  id: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${Label} {
    margin: 10px 0;
  }
`;

export const FormField: FC<Props> = (props: Props) => {
  const { onChange, value, label, name, id, type = 'text' } = props;

  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input name={name} id={id} type={type} onChange={onChange} value={value} />
    </Wrapper>
  );
};
