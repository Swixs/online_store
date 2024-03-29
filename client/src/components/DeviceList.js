import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import DeviceItem from './DeviceItem';

const DeviceList = observer(() => {
  const { device } = useContext(Context);
  return (
    <Row className="d-flex">
      {device.devices.map(device => (
        <DeviceItem key={device.id} device={device}>
            item
        </DeviceItem>
      ))}
    </Row>
  );
});

export default DeviceList;
