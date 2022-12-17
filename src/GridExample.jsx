import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";

import logo from './logo.svg';

//import logo from "/public/images_card/Arvingarna.avif"; 

function GridExample() {
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 16 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img
              variant="top"

              //src={require("/public/images_card/Arvingarna.avif")}

              src={logo}
             />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample;