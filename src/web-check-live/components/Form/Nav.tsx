import styled from '@emotion/styled';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { StyledCard } from 'web-check-live/components/Form/Card';
import Heading from 'web-check-live/components/Form/Heading';
import colors from 'web-check-live/styles/colors';

const Header = styled(StyledCard)`
  margin: 1rem auto;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  align-items: center;
  width: 95vw;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(255, 140, 0, 0.1);
  border-radius: 16px;
  border: 1px solid rgba(255, 140, 0, 0.2);
`;

const Nav = (props: { children?: ReactNode}) => {
  return (
    <Header as="header">
    <Heading color={colors.primary} size="large">
      <img width="64" src="/favicon.svg" alt="SHEF LABS TECHNOLOGY Icon" />
      <a href="/" target="_self">SHEF LABS TECHNOLOGY</a>
    </Heading>
      {props.children && props.children}
  </Header>
  );
};

export default Nav;
