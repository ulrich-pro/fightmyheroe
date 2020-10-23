import React, { memo } from 'react';
import { ProgressBar, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const PowerstatsLine = memo(({ label, variant, data }) => {
  const parsedData = parseInt(data, 10);
  return (
    <Row>
      <Col md={3}>{label}</Col>
      <Col md={9}>
        <ProgressBar variant={variant} now={parsedData} label={`${parsedData}`} />
      </Col>
    </Row>
  );
});

PowerstatsLine.propTypes = {
  variant: PropTypes.oneOf([
    'primary',
    'outline-primary',
    'secondary',
    'outline-secondary',
    'success',
    'outline-success',
    'danger',
    'outline-danger',
    'warning',
    'outline-warning',
    'info',
    'outline-info',
    'light',
    'outline-light',
    'dark',
    'outline-dark',
  ]),
  // data: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  data: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
export default PowerstatsLine;
