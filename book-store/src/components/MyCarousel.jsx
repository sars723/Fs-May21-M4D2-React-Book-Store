import React, { Component } from "react";
import books from "../data/romance.json";
import MyCarouselImages from "./MyCarouselImages";
import { Carousel, Container, Row } from "react-bootstrap";
import "./css/MyCarouselStyles.css";
class MyCarousel extends Component {
  render() {
    return (
      <div className="MyCarousel my-5 ">
        <Container>
          <Row>{/*  <CommentArea book={this.state.selected}/> */}</Row>
          <Row>
            <Row>
              {this.props.filBooks &&
                this.props.filBooks.map((book) => (
                  <MyCarouselImages book={book} />
                ))}
            </Row>
          </Row>
        </Container>

        <h3 className="text-center">{this.props.title}</h3>

        <Carousel>
          <Carousel.Item>
            {" "}
            <Container>
              <Row>
                {}
                {this.props.books
                  .filter((book, i) => i < 6)
                  .map((book) => (
                    <MyCarouselImages book={book} />
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
                    <MyCarouselImages book={book} />
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
                    <MyCarouselImages book={book} />
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
