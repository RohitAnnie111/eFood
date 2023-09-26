import Carousel from "react-bootstrap/Carousel";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

function UncontrolledExample() {
  return (
    <Carousel style={{ objectFit: "contain !importent" }}>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          style={{ height: "500px" }}
          alt="First slide"
        />

        <Carousel.Caption>
          <Form className="d-flex">
            <Form.Control
              type="search"
              style={{ backgroundColor: "transparent", color: "white" }}
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ objectFit: "contain !importent" }}>
        <img
          className="d-block w-100 "
          style={{ height: "500px" }}
          alt="Second slide"
        />

        <Carousel.Caption>
          <Form className="d-flex">
            <Form.Control
              type="search"
              style={{ backgroundColor: "transparent", color: "white" }}
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ objectFit: "contain !importent" }}>
        <img
          className="d-block w-100 "
          style={{ height: "500px" }}
          alt="Third slide"
        />

        <Carousel.Caption>
          <Form className="d-flex">
            <Form.Control
              type="search"
              style={{ backgroundColor: "transparent", color: "white" }}
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
