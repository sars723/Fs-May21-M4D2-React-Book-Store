import React, { Component } from "react";
import books from "../data/romance.json";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "./css/MyCarouselStyles.css";
class MyCarousel extends Component {
  render() {
    return (
      <div className="MyCarousel my-5 ">
        <h3 className="text-center">{this.props.title}</h3>
        <Carousel>
          <Carousel.Item>
            <Container>
              <Row>
                {this.props.books
                  .filter((book, i) => i < 6)
                  .map((book) => (
                    <Col xs={6} md={4} lg={3} xl={2}>
                      <img
                        className="d-block w-100"
                        src={book.img}
                        alt={book.title}
                      />
                      <div>
                        <p>{book.title}</p>
                      </div>
                    </Col>
                  ))}
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row>
                {this.props.books
                  .filter((book, i) => i >= 6 && i < 12)
                  .map((book) => (
                    <Col xs={6} md={4} lg={3} xl={2}>
                      <img
                        className="d-block w-100"
                        src={book.img}
                        alt="First slide"
                      />
                    </Col>
                  ))}
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row>
                {this.props.books
                  .filter((book, i) => i >= 12 && i < 18)
                  .map((book) => (
                    <Col xs={6} md={4} lg={3} xl={2}>
                      <img
                        className="d-block w-100"
                        src={book.img}
                        alt="First slide"
                      />
                    </Col>
                  ))}
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
export default MyCarousel;
