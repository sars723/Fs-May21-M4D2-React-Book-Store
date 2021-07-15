import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class AddComment extends Component {
  state = {
    comments: {
      rate: 1,
      comment: "",
      elementId: this.props.book.asin,
    },
  };
  handleChange = (key, value) => {
    this.setState({
      comments: {
        ...this.state.comments,
        [key]: value,
      },
    });
  };

  handleSubmit = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          body: JSON.stringify(this.state.comments),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2YzMGNlYWY0ODAwMTVjOTE4NjkiLCJpYXQiOjE2MjU3NjU5MjYsImV4cCI6MTYyNjk3NTUyNn0.mG30nOku9zWiAwzzXDKObPmdvi867vPVrtbkFsstOSs",
          },
        }
      );
      if (response.ok) {
        alert("comments saved");
        this.props.fetchComments();
      } else {
        alert("sth wrong ");
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>rate</Form.Label>
            <Form.Control
              as="select"
              value={this.state.comments.rate}
              onChange={(e) => this.handleChange("rate", e.target.value)}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Give your comments here</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              value={this.state.comments.comment}
              onChange={(e) => this.handleChange("comment", e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Book Id</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Book Id"
              value={this.props.book.asin}
              disabled
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
