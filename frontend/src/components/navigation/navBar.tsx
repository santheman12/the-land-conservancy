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
  StyledWrapper,
} from './navComponents';
import logo from '../../imgs/logo.png';

export default function NavBar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <StyledWrapper>
      <Sidebar
        sidebar={
          <div>
            <LogoImage src={logo} />
            <StyledLink to="/events">
              <Path active={!!useMatch('/events')}>
                <ClipboardIcon />
                <Label>Log hours</Label>
              </Path>
            </StyledLink>
            <StyledLink to="/past-shifts">
              <Path active={!!useMatch('/past-shifts')}>
                <ClockIcon />
                <Label>Past shifts</Label>
              </Path>
            </StyledLink>
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
      </Sidebar>
    </StyledWrapper>
  );
}
