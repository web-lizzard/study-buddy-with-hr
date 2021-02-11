import * as React from 'react';
import { StyledButton } from 'components/atoms/Button/Button.styles';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';

export const Button = () => (
  <StyledButton>
    <DeleteIcon />
  </StyledButton>
);
