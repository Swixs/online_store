import React from "react";
import { Button, Container } from "react-bootstrap";
import CreateType from "../components/modals/CreateType";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import { useState } from "react";

const Admin = () => {
 const [visibleType, setVisibleType] = useState(false)
 const [visibleBrand, setVisibleBrand] = useState(false)
 const [visibleDevice, setVisibleDevice] = useState(false)
  return(
   <Container className="d-flex flex-column mt-3">
    <Button variant="outline-dark" className="mt-2" onClick={() => setVisibleType(true)}> Add type </Button>
    <Button variant="outline-dark" className="mt-2" onClick={() => setVisibleBrand(true)}> Add brand</Button>
    <Button variant="outline-dark" className="mt-2" onClick={() => setVisibleDevice(true)}> Add device</Button>
    <CreateType show={visibleType} onHide={() => setVisibleType(false)}/>
    <CreateBrand show={visibleBrand} onHide={() => setVisibleBrand(false)}/>
    <CreateDevice show={visibleDevice} onHide={() => setVisibleDevice(false)}/>
   </Container>
  )
}

export default Admin