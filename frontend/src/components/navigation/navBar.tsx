import React, { useState } from 'react';
import { useMatch } from 'react-router-dom';
import Sidebar from 'react-sidebar';
import {
  BarIcon,
  ClipboardIcon,
  ClockIcon,
  LogoutIcon,
  Button,
  Path,
  BottomPath,
  Label,
  StyledLink,
  LogoImage,
} from './navComponents';
import logo from '../../imgs/logo.png';

type Props = {
  isAdmin?: boolean;
  children: React.ReactChild;
};

export default function NavBar({ isAdmin, children }: Props) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <Sidebar
      sidebar={
        <div>
          <LogoImage src={logo} />
          {isAdmin ? (
            <StyledLink to="/create-event">
              <Path active={!!useMatch('/create-event')}>
                <ClipboardIcon />
                <Label>Log hours</Label>
              </Path>
            </StyledLink>
          ) : (
            <StyledLink to="/events">
              <Path active={!!useMatch('/events')}>
                <ClipboardIcon />
                <Label>Events</Label>
              </Path>
            </StyledLink>
          )}
          {isAdmin ? (
            <StyledLink to="/events">
              <Path active={!!useMatch('/events')}>
                <ClockIcon />
                <Label>Past shifts</Label>
              </Path>
            </StyledLink>
          ) : (
            <StyledLink to="/past-shifts">
              <Path active={!!useMatch('/past-shifts')}>
                <ClockIcon />
                <Label>Past shifts</Label>
              </Path>
            </StyledLink>
          )}
          <StyledLink to="/">
            <BottomPath>
              <LogoutIcon />
              <Label>Sign out</Label>
            </BottomPath>
          </StyledLink>
        </div>
      }
      open={navOpen}
      onSetOpen={setNavOpen}
      styles={{
        sidebar: { background: '#8ea974', width: '250px' },
      }}
    >
      <Button onClick={() => setNavOpen(true)}>
        <BarIcon />
      </Button>
      {children}
    </Sidebar>
  );
}
NavBar.defaultProps = {
  isAdmin: false,
};
