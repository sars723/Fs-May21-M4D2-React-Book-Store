import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import "./css/MyJumbutronStyles.css";

const MyJumbotron = () => {
  return (
    <div>
      <Jumbotron className="MyJumbotron d-flex flex-column align-items-end ">
        <h1>Special 50% Off</h1>
        <h5 className="text-dark">Find Books for All Ages!</h5>
        <p>
          <Button variant="success">Learn more</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default MyJumbotron;
