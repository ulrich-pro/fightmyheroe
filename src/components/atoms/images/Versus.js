import React, { memo } from 'react';
import { Col, Image } from 'react-bootstrap';
import styled from 'styled-components';

import CenteredContent from '../common/CenteredContent';

const StyledElement = styled(Col)`
  margin: auto;
  font-size: 50px;
`;

const Versus = memo(() => (
  <StyledElement md={2}>
    <CenteredContent>
      <Image src={`${process.env.PUBLIC_URL}/versus.png`} alt="versus" />
    </CenteredContent>
  </StyledElement>
));

export default Versus;
