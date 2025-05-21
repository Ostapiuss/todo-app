import { NavLink } from 'react-router';

import styled from 'styled-components';

import { Box, Button, Drawer, List, ListItem } from '@mui/material';

import { COLORS } from '@shared/constants/styled-contants';

import './style.scss';

const StyledNavLink = styled(NavLink)`
  color: white;
  width: 100%;
  border-radius: 8px;
  font-weight: 700;
  padding: 12px 8px;
  font-size: 1.1rem;

  transition:
    background-color 0.2s ease,
    color 0.5s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
  }

  &.active {
    background-color: white;
    color: ${COLORS.primary};
  }
`;

const navLinks = [
  { id: 1, name: 'My Task', link: '/tasks' },
  { id: 2, name: 'Dashboard', link: '/dashboard' },
];

const DrawerComponent = () => {
  return (
    <div className="side-bar__list">
      <List>
        {navLinks.map(({ name, id, link }) => (
          <ListItem className="side-bar__item" key={id} disablePadding>
            <Button sx={{ width: '100%', textAlign: 'start' }}>
              <StyledNavLink to={link}>{name}</StyledNavLink>
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export function SideBar() {
  return (
    <div className="side-bar">
      <Box component="nav" sx={{ width: { sm: '350px' }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
        <Drawer
          variant="permanent"
          sx={{
            backgroundColor: 'red',
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxShadow: '4px 4px 12px rgba(0, 0, 0, 0.15)',
              borderTopRightRadius: '20px',
              borderBottomRightRadius: '20px',
              boxSizing: 'border-box',
              width: '350px',
              color: 'white',
              paddingLeft: '24px',
              paddingRight: '24px',
              backgroundColor: (theme) => theme.palette.primary.main,
            },
          }}
          open
        >
          <DrawerComponent />
        </Drawer>
      </Box>
    </div>
  );
}
