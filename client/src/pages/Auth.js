import React, { useContext, useState } from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { login, registration } from '../http/userAPI';
import { observer } from 'mobx-react-lite';

import { Context } from '..';

const Auth = observer(() => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user } = useContext(Context);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(SHOP_ROUTE);
  };

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      user.setUser(user);
      user.setIsAuth(true);
      handleClick();
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Authorization' : 'Registration'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            placeholder="input your gmail"
            className="mt-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
          <Form.Control
            placeholder="input your password"
            className="mt-3"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form>
        <Row className="d-flex justify-content-between mt-3 pl-3">
          {isLogin ? (
            <div>
              No Account ?{' '}
              <NavLink to={REGISTRATION_ROUTE}>Registration</NavLink>
            </div>
          ) : (
            <div>
              Have Account ? <NavLink to={LOGIN_ROUTE}>Sign in</NavLink>
            </div>
          )}
          <Button variant="outline-success" className="mr-3" onClick={click}>
            {isLogin ? 'Sign In' : 'Register'}
          </Button>
        </Row>
      </Card>
    </Container>
  );
});

export default Auth;
