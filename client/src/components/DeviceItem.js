import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import star from '../assets/bigStar.png';
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({ device }) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(DEVICE_ROUTE + '/' + device.id);
  }

  return (
    <Col md={3} onClick={handleClick}>
      <Card
        style={{ width: 150, height: 150, cursor: 'pointer' }}
        border="light"
        className="m-4"
      >
        <Image
          width={150}
          height={150}
          src={process.env.REACT_APP_API_URL + device.img}
        />
        <div className="d-flex justify-content-between align-items-center">
          <div>Samsung...</div>
          <div className="d-flex align-items-center">
            {device.rating}
            <Image width={16} height={16} src={star} />
          </div>
        </div>

        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
