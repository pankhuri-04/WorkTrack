import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./EmployeeForm.css";

function EmployeeForm() {
  const [form, setForm] = useState({
    name: "",
    dept: "",
    role: "",
    joining: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Employee Added: ${form.name}`);
    setForm({ name: "", dept: "", role: "", joining: "" });
  };

  return (
    <div className="form-container">
      <h2>Add Employee</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" value={form.name} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="dept">
          <Form.Label>Department</Form.Label>
          <Form.Control name="dept" value={form.dept} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="role">
          <Form.Label>Role</Form.Label>
          <Form.Control name="role" value={form.role} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="joining">
          <Form.Label>Joining Date</Form.Label>
          <Form.Control type="date" name="joining" value={form.joining} onChange={handleChange} required />
        </Form.Group>

        <Button type="submit" variant="success" className="mt-3">Add Employee</Button>
        <Link to="/hrdashboard" className="btn btn-secondary mt-3 ms-2">Back</Link>
      </Form>
    </div>
  );
}

export default EmployeeForm;
