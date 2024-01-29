import React, { useContext } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Context } from '..';
import { LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>
          Swixs
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto">
            <Button variant="outline-light" className="mr-2">
              Admin
            </Button>
            <Button variant="outline-light">Sign in</Button>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <Button
              variant="outline-light"
              onClick={() => user.setIsAuth(true)}
            >
              Authorization
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
