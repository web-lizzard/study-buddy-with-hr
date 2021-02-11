import { theme } from '../assets/styles/theme';

export const colorChangerByNumberProp = (prop: number) => {
  if (prop > 4) return theme.colors.success;
  if (prop < 4 && prop > 3) return theme.colors.warning;
  else return theme.colors.error;
};
