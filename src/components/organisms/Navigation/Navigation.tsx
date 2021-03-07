import { Wrapper, Logo, StyledLink } from './Navigation.style';

export const Navigation = () => (
  <Wrapper>
    <Logo>
      <h1>
        Study
        <br />
        Buddy
      </h1>
    </Logo>
    <StyledLink exact to="/">
      Dashboard
    </StyledLink>
    <StyledLink to="add-user">Add User</StyledLink>
  </Wrapper>
);
