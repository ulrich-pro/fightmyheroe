import React, { memo } from 'react';
import { Row, Col } from 'react-bootstrap';

const CenteredContent = memo(({ children }) => (
  <Row className="justify-content-md-center">
    <Col md="auto">{children}</Col>
  </Row>
));

export default CenteredContent;
