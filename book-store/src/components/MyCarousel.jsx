import React, { Component } from "react";
import books from "../data/romance.json";
import MyCarouselImages from "./MyCarouselImages";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "./css/MyCarouselStyles.css";
import CommentArea from "./CommentArea";
class MyCarousel extends Component {
  state = {
    selected: false,
    selectedBook: null,
  };
  render() {
    return (
      <div className="MyCarousel my-5 ">
        <Container>
          <Row>
            {this.props.filBooks &&
              this.props.filBooks.map((book) => (
                <MyCarouselImages book={book} />
              ))}
          </Row>
        </Container>

        <h3 className="text-center">{this.props.title}</h3>
        <Container fluid>
          <Row>
            <Col className="col-12 col-sm-6 col-md-9">
              <Carousel interval={null}>
                <Carousel.Item>
                  {" "}
                  <Row>
                    {}
                    {this.props.books
                      .filter((book, i) => i < 6)
                      .map((book) => (
                        <MyCarouselImages
                          book={book}
                          selectedBook={this.state.selectedBook}
                          getSelectedBook={(asin) =>
                            this.setState({ selectedBook: asin })
                          }
                        />
                      ))}
                  </Row>
                </Carousel.Item>
                <Carousel.Item>
                  <Row>
                    {this.props.books
                      .filter((book, i) => i >= 6 && i < 12)
                      .map((book) => (
                        <MyCarouselImages
                          book={book}
                          selectedBook={this.state.selectedBook}
                          getSelectedBook={(asin) =>
                            this.setState({ selectedBook: asin })
                          }
                        />
                      ))}
                  </Row>
                </Carousel.Item>
                <Carousel.Item>
                  <Row>
                    {this.props.books
                      .filter((book, i) => i >= 12 && i < 18)
                      .map((book) => (
                        <MyCarouselImages
                          book={book}
                          selectedBook={this.state.selectedBook}
                          getSelectedBook={(asin) =>
                            this.setState({ selectedBook: asin })
                          }
                        />
                      ))}
                  </Row>
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col className="col-12 col-sm-6 col-md-3">
              {this.state.selectedBook && (
                <CommentArea asin={this.state.selectedBook} />
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default MyCarousel;
