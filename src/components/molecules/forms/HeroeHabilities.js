import React, { memo } from 'react';
import { ListGroup } from 'react-bootstrap';

import PowerstatsLine from '../bars/PowerstatsLine';

const HeroeHabilities = memo(({ powerstats }) => (
  <ListGroup variant="flush">
    <ListGroup.Item>
      <PowerstatsLine label="Intelligence" variant="primary" data={powerstats.intelligence} />
    </ListGroup.Item>
    <ListGroup.Item>
      <PowerstatsLine label="Strength" variant="secondary" data={powerstats.strength} />
    </ListGroup.Item>
    <ListGroup.Item>
      <PowerstatsLine label="Speed" variant="dark" data={powerstats.speed} />
    </ListGroup.Item>
    <ListGroup.Item>
      <PowerstatsLine label="Durability" variant="success" data={powerstats.durability} />
    </ListGroup.Item>
    <ListGroup.Item>
      <PowerstatsLine label="Power" variant="warning" data={powerstats.power} />
    </ListGroup.Item>
    <ListGroup.Item>
      <PowerstatsLine label="Combat" variant="info" data={powerstats.combat} />
    </ListGroup.Item>
  </ListGroup>
));

export default HeroeHabilities;
