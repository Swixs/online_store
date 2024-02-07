import React, { useContext } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Context } from '..';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { NavLink, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };

  function AdminClick() {
    navigate(ADMIN_ROUTE);
  }

  function LoginClick() {
    navigate(LOGIN_ROUTE);
  }
  const { user } = useContext(Context);
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>
          Swixs
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto">
            <Button
              onClick={AdminClick}
              variant="outline-light"
              className="mr-2"
            >
              Admin
            </Button>
            <Button
              onClick={() => logOut()}
              variant="outline-light"
              className="ml-2"
            >
              Sign out
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <Button
              variant="outline-light"
              onClick={() => LoginClick()}
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
