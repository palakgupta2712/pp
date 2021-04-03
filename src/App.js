import "./styles.css";
import "semantic-ui-css/semantic.min.css";
import { Button, Header, Container, Form } from "semantic-ui-react";
export default function App() {
  return (
    <Container fluid className="container">
      <Header as="h1"> React Google Sheets </Header>
      <Form>
        <Form.Field>
          <label>Name</label>
          <input placeholder="Enter Your Name" />
        </Form.Field>
        <Form.Field>
          <label>Age</label>
          <input placeholder="Enter Your Age" />
        </Form.Field>
        <Form.Field>
          <label>Salary</label>
          <input placeholder="Enter Your Salary" />
        </Form.Field>
        <Form.Field>
          <label>Hobby</label>
          <input placeholder="Enter Your Hobby" />
        </Form.Field>

        <Button color="black" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
