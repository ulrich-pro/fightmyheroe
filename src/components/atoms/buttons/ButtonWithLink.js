import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ButtonWithLink = memo(
  ({ variant = 'dark', size = 'lg', to = '/', text = '', block = true }) => (
    <Button variant={variant} size={size} block={block}>
      <Link to={to} replace>
        {text}
      </Link>
    </Button>
  )
);

ButtonWithLink.propTypes = {
  size: PropTypes.oneOf(['lg', 'sm']),
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
  to: PropTypes.string.isRequired,
  block: PropTypes.bool,
};

export default ButtonWithLink;
