import React, { memo } from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Header from '../components/molecules/menus/Header';
import Footer from '../components/molecules/menus/Footer';

const DefaultTemplate = memo(({ children }) => {
  return (
    <Container>
      <Header />
      <Jumbotron>
        <Row>
          <Col>{children}</Col>
        </Row>
      </Jumbotron>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
});

DefaultTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DefaultTemplate;
