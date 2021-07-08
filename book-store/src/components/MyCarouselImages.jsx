import React, { Component } from "react";
import { Col, Button, Badge } from "react-bootstrap";

export default class MyCarouselImages extends Component {
  state = {
    selected: false,
    /*  books: this.props.books, */
  };
  render() {
    return (
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
          src={this.props.book.img}
          alt={this.props.book.title}
          onClick={() => this.setState({ selected: !this.state.selected })}
          style={{
            border: this.state.selected ? "3px solid red" : "none",
          }}
        />

        <span className="position-absolute">
          {" "}
          <Badge variant="secondary">{this.props.book.price}€</Badge>
        </span>
        <p className="text-center mb-5">{this.props.book.title}</p>
        <Button
          className="text-center position-absolute mb-2 mx-auto btn-sm"
          variant="success"
        >
          <i class="fas fa-shopping-cart"></i> Add to Cart
        </Button>
      </Col>
    );
  }
}
