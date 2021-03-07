import * as React from 'react';
import { StyledButton } from 'components/atoms/DeleteButton/DeleteButton.styles';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';

export const DeleteButton = (props: any) => (
  <StyledButton {...props}>
    <DeleteIcon />
  </StyledButton>
);
