import React, { memo, useState } from 'react';
import { Card, Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import DefaultModal from '../../atoms/modals/DefaultModal';
import HeroeDetailsContainer from '../forms/HeroeDetailsContainer';

const StyledCard = styled(Card)`
  width: 100%;
  margin-bottom: 20px;
`;

const DescriptionCard = memo(({ image, title, variant, subTitle, desc, footer, heroeId }) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <StyledCard bg="dark">
        <Card.Img onClick={() => setModalShow(true)} variant="top" src={image} alt={title} />
        <Card.Body onClick={() => setModalShow(true)}>
          <Card.Title>
            <Alert variant={variant || 'info'}>{title}</Alert>
          </Card.Title>
          <Card.Subtitle>{subTitle}</Card.Subtitle>
          <Card.Text>{desc}</Card.Text>
        </Card.Body>
        {footer && <Card.Footer>{footer}</Card.Footer>}
      </StyledCard>
      <DefaultModal
        size="lg"
        content={<HeroeDetailsContainer heroeId={heroeId} />}
        title="Heroe's Details"
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
});

DescriptionCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  desc: PropTypes.any,
  heroeId: PropTypes.string,
  footer: PropTypes.any,
};

export default DescriptionCard;
