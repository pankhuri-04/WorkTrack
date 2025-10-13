import React from "react";
import { Button, Table, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HRDashboard.css";

function HRDashboard() {
  const employees = [
    { id: 1, name: "Alice Johnson", dept: "HR", role: "Manager" },
    { id: 2, name: "Bob Smith", dept: "Finance", role: "Analyst" },
    { id: 3, name: "Clara Evans", dept: "Engineering", role: "Developer" },
    { id: 4, name: "David Lee", dept: "Sales", role: "Executive" },
  ];

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2 className="sidebar-title">HR Panel</h2>
        <ul className="sidebar-menu">
          <li><Link to="/hrdashboard" className="active">Dashboard</Link></li>
          <li><Link to="/employee">Employees</Link></li>
          <li><Link to="/reports">Reports</Link></li>
          <li><Link to="/add-employee">Add Employee</Link></li>
        </ul>
      </div>

      <div className="main-content">
        <h2 className="dashboard-title">HR Dashboard</h2>

        <div className="stats-section">
          <Card className="stat-card"><Card.Body><Card.Title>Total Employees</Card.Title><Card.Text>120</Card.Text></Card.Body></Card>
          <Card className="stat-card"><Card.Body><Card.Title>New Hires</Card.Title><Card.Text>15</Card.Text></Card.Body></Card>
          <Card className="stat-card"><Card.Body><Card.Title>Departments</Card.Title><Card.Text>8</Card.Text></Card.Body></Card>
        </div>

        <div className="chart-section">
          <h4>Monthly Hires Trend</h4>
          <img
            src={`https://quickchart.io/chart?c=${encodeURIComponent(JSON.stringify({
              type: "line",
              data: {
                labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"],
                datasets: [{
                  label: "Hires",
                  data: [12,18,25,20,27,21,30,24,28,33],
                  borderColor: "#00FFB0",
                  fill: false,
                  tension: 0.3
                }]
              },
              options: {
                plugins: { legend: { labels: { color: "#fff" } } },
                scales: { x: { ticks: { color: "#fff" } }, y: { ticks: { color: "#fff" } } }
              }
            }))}`}
            alt="Hires Chart"
            style={{ width: "100%", borderRadius: "10px", marginTop: "10px" }}
          />
        </div>

        <div className="table-section">
          <h4>Employee List</h4>
          <Table striped bordered hover variant="dark" responsive>
            <thead>
              <tr><th>#</th><th>Name</th><th>Department</th><th>Role</th><th>Action</th></tr>
            </thead>
            <tbody>
              {employees.map(emp => (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.dept}</td>
                  <td>{emp.role}</td>
                  <td>
                    <Button as={Link} to={`/employee?id=${emp.id}`} variant="outline-light" size="sm">View</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default HRDashboard;
