import React, { FC } from 'react';
import { Navigation } from 'components/organisms/Navigation/Navigation';
import { Wrapper } from './MainTemplate.style';

interface Props {
  children: any;
}

export const MainTemplate: FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );
};
