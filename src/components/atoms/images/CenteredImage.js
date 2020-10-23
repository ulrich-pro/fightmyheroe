import React, { memo } from 'react';
import { Card } from 'react-bootstrap';

import CenteredContent from '../common/CenteredContent';

const CenteredImage = memo(({ source }) => (
  <CenteredContent>
    <Card.Img variant="top" src={source} alt="image" />
  </CenteredContent>
));

export default CenteredImage;
