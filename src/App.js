import "./styles.css";
import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Button, Header, Container, Form } from "semantic-ui-react";

export default function App() {
  const [items, setItems] = useState({
    name: "",
    age: "",
    salary: "",
    hobby: ""
  });
  const [userData, setUserData] = useState([]);

  function handleInput(event) {
    // const { name, value } = event.target;

    setItems((prevItems) => ({
      ...prevItems,
      [event.target.name]: event.target.value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(items);
    setUserData((prevData) => [...prevData, items]);
  }

  return (
    <Container fluid className="container">
      <Header as="h1"> React Google Sheets </Header>
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Field>
          <label>Name</label>
          <input
            name="name"
            placeholder="Enter Your Name"
            value={items.name}
            onChange={handleInput}
          />
        </Form.Field>
        <Form.Field>
          <label>Age</label>
          <input
            name="age"
            placeholder="Enter Your Age"
            value={items.age}
            onChange={handleInput}
          />
        </Form.Field>
        <Form.Field>
          <label>Salary</label>
          <input
            name="salary"
            placeholder="Enter Your Salary"
            value={items.salary}
            onChange={handleInput}
          />
        </Form.Field>
        <Form.Field>
          <label>Hobby</label>
          <input
            name="hobby"
            placeholder="Enter Your Hobby"
            value={items.hobby}
            onChange={handleInput}
          />
        </Form.Field>

        <Button color="black" type="submit">
          Submit
        </Button>
      </Form>
      {userData.map((user) => (
        <h1>
          {user.name} {user.age}
        </h1>
      ))}
    </Container>
  );
}
