import React, { Component } from "react";
import {
  Container,
  Navbar,
  Nav,
  Image,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
export default class SaraNetflixNavbar extends Component {
  state = {
    query: "",
  };
  handleSearch = () => {
    this.props.searchCallback(this.state.query.toLowerCase());
    console.log(this.state.query.toLowerCase());
  };
  render() {
    return (
      <Navbar
        className="bg-dark-netflix"
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Container fluid>
          <Navbar.Brand href="#home">
            <Image src="../../public/assets/netflix_logo.png" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                value={this.state.query}
                onChange={(e) => this.setState({ query: e.target.value })}
              />
              <Button variant="outline-success" onClick={this.handleSearch}>
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}


import React, { Component } from "react";
import { Col } from "react-bootstrap";

export default class MyCarouselMovie extends Component {
  render() {
    return (
      <Col xs={12} sm={6} md={4} lg={3} xl={2}>
        <img
          className="d-block w-100"
          src={this.props.movie.Poster}
          alt={this.props.movie.Title}
        />
      </Col>
    );
  }
}


import React, { Component } from "react";
import MyCarouselMovie from "./MyCarouselMovie";
import { Container, Row, Col, Carousel } from "react-bootstrap";

export default class CarouselCustom extends Component {
  state = {
    movies: [],
  };
  fetchMovies = async () => {
    try {
      console.log(this.props.searchQuery);
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=3d9e8fbe&s=" + this.props.searchQuery
      );
      const fetchedMovies = await response.json();
      this.setState({ movies: fetchedMovies.Search });
      console.log(fetchedMovies.Search);
      console.log(this.state.movies);
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount = () => {
    this.fetchMovies();
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            {this.state.movies.map((movie) => (
              <Col xs={12} sm={6} md={4} lg={3} xl={2}>
                <img
                  className="d-block w-100"
                  src={movie.Poster}
                  alt={movie.Title}
                />
              </Col>
            ))}
          </Row>
        </Container>
        {/*  <Carousel>
          <Carousel.Item>
            <Container>
              <Row>
                {this.state.movies
                  .filter((movie, i) => i < 6)
                  .map((movie) => (
                    <MyCarouselMovie movie={movie} />
                  ))}
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row>
                {this.state.movies
                  .filter((movie, i) => i >= 2 && i < 8)
                  .map((movie) => {
                    <MyCarouselMovie movie={movie} />;
                  })}
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row>
                {this.state.movies
                  .filter((movie, i) => i >= 5 && i < 10)
                  .map((movie) => {
                    <MyCarouselMovie movie={movie} />;
                  })}
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel> */}
      </div>
    );
  }
}


import "./App.css"
import NetflixNavbar from "./components/SaraNetflixNavbar"
import CarouselCustom from "./components/CarouselCustom"
import React, { Component } from 'react'

export default class App extends Component {
  state={
    query:""
  }
  render() {
    return (
     
         <>
      <NetflixNavbar  searchCallback={(childSearchquery)=>this.setState({query:childSearchquery})} />

     {this.state.query?<CarouselCustom searchQuery={this.state.query} />:<CarouselCustom searchQuery="harry potter" />} 
     <CarouselCustom searchQuery="Lord of the rings" />
     <CarouselCustom searchQuery="harry potter" />
    
    </>
     
    )
  }
}



