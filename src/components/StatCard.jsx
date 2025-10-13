import React from "react";
import { Card } from "react-bootstrap";

const StatCard = ({ title, value }) => {
  return (
    <Card className="text-center shadow-sm mb-3 border-0">
      <Card.Body>
        <h6 className="text-muted">{title}</h6>
        <h3 className="fw-bold text-primary">{value}</h3>
      </Card.Body>
    </Card>
  );
};

export default StatCard;
