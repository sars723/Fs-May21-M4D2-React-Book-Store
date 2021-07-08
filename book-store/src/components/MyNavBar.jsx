import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "./css/MyNavBarStyles.css";
class MyNavBar extends Component {
  state = {
    query: "",
  };
  handleSearch = () => {
    console.log(this.props.books);
    const matchedBooks = this.props.books.filter((book) =>
      book.title.toLowerCase().includes(this.state.query.toLowerCase())
    );
    this.props.filterdBooksCallback(matchedBooks);
    console.log(matchedBooks);
  };
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark">
        <Navbar.Brand href="#home">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0K2zTxBIc-_v9gmDHfFN6mNx3xJn2tBel-65HEvPmUF9_ssB2WRsNPj3Rf-ejRo4DTwM&usqp=CAU"
            alt=""
            style={{ width: "120px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Browse</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              value={this.state.query}
              onChange={(e) =>
                this.setState({ query: e.target.value }, () =>
                  console.log(this.state.query)
                )
              }
            />
            <Button variant="outline-success" onClick={this.handleSearch}>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default MyNavBar;
