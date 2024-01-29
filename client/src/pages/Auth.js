import React from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

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
          ></Form.Control>
          <Form.Control
            placeholder="input your password"
            className="mt-3"
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
          <Button variant="outline-success" className="mr-3">
            {isLogin ? 'Sign In' : 'Register'}
          </Button>
        </Row>
      </Card>
    </Container>
  );
};

export default Auth;
