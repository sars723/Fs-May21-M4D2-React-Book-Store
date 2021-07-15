import React, { Component } from "react";
import SingleComment from "./SingleComment";

export default class CommentList extends Component {
  render() {
    return (
      <div>
        {this.props.comments.map((c) => {
          console.log(c.comment);
          return (
            <SingleComment
              comment={c.comment}
              id={c._id}
              fetchComments={this.props.fetchComments}
            />
          );
        })}
      </div>
    );
  }
}
