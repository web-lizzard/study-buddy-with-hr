import styled from 'styled-components';
import { themeInterface } from '../../../interfaces/theme.interface';
import { colorChangerByNumberProp } from '../../../utils/colorchanger';

interface Props {
  theme: themeInterface;
  average?: number;
}

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgrey;
  }
`;

export const UserInfo = styled.div<Props>`
  padding: 25px 15px;

  p {
    color: ${({ theme }) => theme.colors.darkGrey};
    margin: 0;
  }

  p:first-child {
    font-size: ${({ theme }) => theme.fontSize.l};
    display: flex;
    align-items: center;
    font-weight: bold;
  }

  p:last-child {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: 400;
  }
`;

export const Average = styled.div<Props>`
  width: 35px;
  height: 35px;
  background-color: ${({ average = 3 }) => colorChangerByNumberProp(average)};
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.darkGrey};
`;
