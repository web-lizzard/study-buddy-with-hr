import styled from 'styled-components';
import { themeInterface } from '../interfaces/theme.interface';

interface StyledProps {
  theme: themeInterface;
}

export const Wrapper = styled.div<StyledProps>`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
