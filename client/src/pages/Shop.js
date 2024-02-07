import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import { Context } from '..';
import { fetchBrands, fetchTypes, fetchDevices } from '../http/deviceApi';

const Shop = () => {
  const { device } = useContext(Context);

  useEffect(() => {
    fetchBrands().then((data) => device.setBrands(data));
    fetchDevices().then((data) => device.setDevices(data.rows));
    fetchTypes().then((data) => device.setTypes(data));
  });

  return (
    <Container>
      <Row>
        <Col md={3}>
          <TypeBar />
        </Col>

        <Col md={9}>
          <BrandBar />
          <DeviceList />
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
