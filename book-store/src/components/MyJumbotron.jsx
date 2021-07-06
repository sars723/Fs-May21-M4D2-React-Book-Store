import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import "./css/MyJumbutronStyles.css";

const MyJumbotron = () => {
  return (
    <div>
      <Jumbotron className="MyJumbotron d-flex justify-content-center ">
        <div className="jumbotron-div text-center">
          <h1>Special 50% Off</h1>
          <h3 className="text-dark">Find Books for All Ages!</h3>

          <Button variant="success">Learn more</Button>
        </div>
      </Jumbotron>
    </div>
  );
};

export default MyJumbotron;
