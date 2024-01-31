import React from 'react';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '..';
import { Row, Card } from 'react-bootstrap';

const BrandBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <Row className="d-flex mt-3">
      {device.brands.map((brand) => (
        <Card
          key={brand.id}
          className="p-2"
          onClick={() => device.setSelectedBrand(brand)}
          style={{cursor: 'pointer'}}
          border={brand.id === device.selectedBrand.id ? 'dark' : ''}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});

export default BrandBar;
