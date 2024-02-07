import React, { useEffect } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchOneDevice } from '../http/deviceApi';
import star from '../assets/bigStar.png';

const DevicePage = () => {
  const [device, setDevice] = useState({ info: [] });
  const { id } = useParams();

  useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice(data));
  });

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image
            height={300}
            width={300}
            src={process.env.REACT_APP_API_URL + device.img}
          />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-center align-items-center">
            <h2>{device.name}</h2>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                background: `url(${star}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: 'cover',
                fontSize: 64,
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex align-items-center justify-content-center"
            style={{ width: 300, height: 300, fontSize: 32 }}
            border="5px solid lightgray"
          >
            <h3>{device.price}</h3>
            <Button variant="outline-dark">Add to cart</Button>
          </Card>
        </Col>
      </Row>

      <Row className="d-flex flex-column m-3">
        <div className="mt-5 mb-5" style={{ fontSize: 42 }}>
          CHARACTERS:
        </div>
        {device.info.map((info, index) => (
          <Row
            style={{
              backgroundColor: index % 2 === 0 ? 'lightgray' : 'transperent',
              padding: 10,
            }}
            key={info.id}
          >
            {' '}
            {info.title} : {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default DevicePage;
