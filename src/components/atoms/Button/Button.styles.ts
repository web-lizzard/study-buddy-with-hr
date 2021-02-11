import styled from 'styled-components';
import { themeInterface } from '../../../interfaces/theme.interface';

interface Props {
  theme: themeInterface;
}

export const StyledButton = styled.button<Props>`
  width: 25px;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.grey};
  margin: 0 10px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: 100%;
    width: 100%;
  }
`;
