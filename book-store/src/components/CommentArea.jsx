import React, { Component } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";
import Warnning from "./Warnning";
import Loader from "./Loader";

export default class CommentArea extends Component {
  state = {
    comments: [],
    book: null,
    isLoading: true,
    isError: false,
  };
  fetchComments = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2YzMGNlYWY0ODAwMTVjOTE4NjkiLCJpYXQiOjE2MjU3NjU5MjYsImV4cCI6MTYyNjk3NTUyNn0.mG30nOku9zWiAwzzXDKObPmdvi867vPVrtbkFsstOSs",
          },
        }
      );
      if (response.ok) {
        const fetchedComments = await response.json();
        this.setState({
          comments: fetchedComments,
          book: this.props.book,
          isLoading: false,
        });
        console.log(fetchedComments);
      } else {
        this.setState({ isError: true, isLoading: false });
      }
    } catch (error) {
      this.setState({ isError: true, isLoading: false });
      console.log(error);
    }
  };
  componentDidMount = async () => {
    this.fetchComments();
  };
  componentDidUpdate = (prevProps) => {
    if (prevProps.asin !== this.props.asin) {
      this.fetchComments();
    }
  };
  render() {
    return (
      <div>
        {console.log(this.state.comments)}
        {this.state.isLoading && <Loader />}
        {this.state.isError && <Warnning variant="danger" msg="error" />}
        <CommentList
          comments={this.state.comments}
          fetchComments={this.fetchComments}
        />
        <AddComment asin={this.props.asin} fetchComments={this.fetchComments} />
      </div>
    );
  }
}
