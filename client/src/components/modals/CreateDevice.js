import React, { useContext } from 'react';
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { Context } from '../..';
import { useState } from 'react';

const CreateDevice = ({ show, onHide }) => {
  const { device } = useContext(Context);
  const [info, setInfo] = useState([]);

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
  };

  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header>
        <Modal.Title>Add device</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Dropdown>
          <Dropdown.Toggle>выберите тип устройства</Dropdown.Toggle>
          <Dropdown.Menu>
            {device.types.map((type) => (
              <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="mt-4">
          <Dropdown.Toggle>выберите бренд устройства</Dropdown.Toggle>
          <Dropdown.Menu>
            {device.brands.map((brand) => (
              <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Form.Control className="mt-3" placeholder="input name device" />
        <Form.Control
          type="number"
          className="mt-3"
          placeholder="input price device"
        />
        <Form.Control type="file" className="mt-3" />
        <hr />
        <Button variant="outline-dark" onClick={addInfo}>
          Add new device
        </Button>

        {info.map((i) => (
          <Row key={i.number}>
            <Col>
              <Form.Control placeholder="name" className="mt-3"></Form.Control>
            </Col>
            <Col>
              <Form.Control
                placeholder="description"
                className="mt-3"
              ></Form.Control>
            </Col>
            <Col md={4}>
              <Button
                variant="outline-danger"
                className="mt-3"
                onClick={() => removeInfo(i.number)}
              >
                Delete
              </Button>
            </Col>
          </Row>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-success" onClick={onHide}>
          Add
        </Button>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDevice;
