import React, { Component } from "react";
import books from "../data/romance.json";
import {
  Carousel,
  Container,
  Row,
  Col,
  ListGroup,
  Card,
  Button,
  Badge,
} from "react-bootstrap";
import "./css/MyCarouselStyles.css";
class MyCarousel extends Component {
  render() {
    return (
      <div className="MyCarousel my-5 container">
        <h3 className="text-center">{this.props.title}</h3>
        <Carousel>
          <Carousel.Item>
            <Row>
              {this.props.books
                .filter((book, i) => i < 6)
                .map((book) => (
                  <Col
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    xl={2}
                    className="position-relative border d-flex flex-column align-items-center"
                  >
                    <img
                      className="d-block w-100"
                      src={book.img}
                      alt={book.title}
                    />

                    <span className="position-absolute">
                      {" "}
                      <Badge variant="secondary">{book.price}€</Badge>
                    </span>
                    <p className="text-center mb-5">{book.title}</p>
                    <Button
                      className="text-center position-absolute mb-2 mx-auto btn-sm"
                      variant="success"
                    >
                      Add to Cart
                    </Button>
                  </Col>
                ))}
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              {this.props.books
                .filter((book, i) => i >= 6 && i < 12)
                .map((book) => (
                  <Col
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    xl={2}
                    className="position-relative border d-flex flex-column align-items-center"
                  >
                    <img
                      className="d-block w-100"
                      src={book.img}
                      alt="First slide"
                    />
                    <span className="position-absolute">
                      {" "}
                      <Badge variant="secondary">{book.price}€</Badge>
                    </span>
                    <p className="text-center mb-5">{book.title}</p>
                    <Button
                      className="text-center position-absolute mb-2 btn-sm"
                      variant="success"
                    >
                      Add to Cart
                    </Button>
                  </Col>
                ))}
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              {this.props.books
                .filter((book, i) => i >= 12 && i < 18)
                .map((book) => (
                  <Col
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    xl={2}
                    className="position-relative border d-flex flex-column align-items-center px-1"
                  >
                    <img
                      className="d-block w-100"
                      src={book.img}
                      alt="First slide"
                    />
                    <span className="position-absolute">
                      {" "}
                      <Badge variant="secondary">{book.price}€</Badge>
                    </span>
                    <p className="text-center mb-5">{book.title}</p>
                    <Button
                      className="text-center position-absolute mb-2 btn-sm"
                      variant="success"
                    >
                      Add to Cart
                    </Button>
                  </Col>
                ))}
            </Row>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
export default MyCarousel;
