import React, { memo } from 'react';
import { Row, Form } from 'react-bootstrap';

const FormRow = memo(({ controlId, title, content }) => (
  <Form.Group as={Row} controlId={controlId}>
    <Form.Label column sm="4">
      <b>{title}</b>
    </Form.Label>
    <Form.Label column sm="8">
      {content}
    </Form.Label>
  </Form.Group>
));

export default FormRow;
