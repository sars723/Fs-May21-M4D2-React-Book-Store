import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Warnning from "./Warnning";

export default class SingleComment extends Component {
  state = {
    isError: false,
  };
  deleteComment = async (i) => {
    try {
      const response = await fetch(
        " https://striveschool-api.herokuapp.com/api/comments/" + this.props.id,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2YzMGNlYWY0ODAwMTVjOTE4NjkiLCJpYXQiOjE2MjU3NjU5MjYsImV4cCI6MTYyNjk3NTUyNn0.mG30nOku9zWiAwzzXDKObPmdvi867vPVrtbkFsstOSs",
          },
        }
      );
      if (response.ok) {
        alert("comment deleted successfully");
        this.props.fetchComments();
      } else {
        this.setState({
          isError: true,
        });
        alert("sth wrong");
      }
    } catch (error) {
      this.setState({
        isError: true,
      });
      console.log(error);
    }
  };
  render() {
    return (
      <>
        {this.state.isError && <Warnning variant="danger" msg="error" />}
        <div
          className="d-flex justify-content-between"
          style={{ borderBottom: "1px solid black" }}
        >
          {console.log(this.props.comment)}

          <h6>{this.props.comment}</h6>
          <Button
            className="btn-sm"
            variant="danger"
            onClick={this.deleteComment}
            style={{ margin: "4px" }}
          >
            X
          </Button>
        </div>
      </>
    );
  }
}
