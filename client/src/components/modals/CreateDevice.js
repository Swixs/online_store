import React, { useContext } from 'react';
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { Context } from '../..';
import { useState } from 'react';
import { useEffect } from 'react';
import { createDevice, fetchBrands, fetchTypes } from '../../http/deviceApi';
import { observer } from 'mobx-react-lite';

const CreateDevice = observer(({ show, onHide }) => {
  const { device } = useContext(Context);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchBrands().then((data) => device.setBrands(data));
    fetchTypes().then((data) => device.setTypes(data));
  }, []);

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
  };

  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  const changeInfo = (key, value, number) => {
    setInfo(
      info.map((i) => (i.number === number ? { ...i, [key]: value } : i)),
    );
  };
  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const addDevice = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', `${price}`);
    formData.append('img', file);
    formData.append('brandId', device.selectedBrand.id);
    formData.append('typeId', device.selectedType.id);
    formData.append('info', JSON.stringify(info));
    createDevice(formData).then((data) => onHide());
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header>
        <Modal.Title>Add device</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Dropdown>
          <Dropdown.Toggle>
            {device.selectedType.name || 'choose your type device'}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {device.types.map((type) => (
              <Dropdown.Item
                onClick={() => device.setSelectedType(type)}
                key={type.id}
              >
                {type.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="mt-4">
          <Dropdown.Toggle>
            {device.selectedBrand.name || 'choose your brand device'}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {device.brands.map((brand) => (
              <Dropdown.Item
                onClick={() => device.setSelectedBrand(brand)}
                key={brand.id}
              >
                {brand.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Form.Control
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-3"
          placeholder="input name device"
        />

        <Form.Control
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          type="number"
          className="mt-3"
          placeholder="input price device"
        />
        <Form.Control type="file" className="mt-3" onChange={selectFile} />
        <hr />
        <Button variant="outline-dark" onClick={addInfo}>
          Add new device
        </Button>

        {info.map((i) => (
          <Row key={i.number}>
            <Col>
              <Form.Control
                placeholder="name"
                className="mt-3"
                value={i.title}
                onChange={(e) => changeInfo('title', e.target.value, i.number)}
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="description"
                className="mt-3"
                value={i.description}
                onChange={(e) =>
                  changeInfo('description', e.target.value, i.number)
                }
              />
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
        <Button variant="outline-success" onClick={addDevice}>
          Add
        </Button>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateDevice;
