import React, { memo } from 'react';
import { Accordion, Jumbotron } from 'react-bootstrap';

import OldFightLine from '../../molecules/cards/OldFightLine';

const OldFights = memo(({ fights }) => {
  if (fights.length) {
    return (
      <Jumbotron>
        <h2>Previous Fights</h2>
        <Accordion>
          {fights.map((fight, eventKey) => (
            <OldFightLine
              eventKey={eventKey.toString()}
              key={fight.stared.id + fight.opponent.id + fight.criteria}
              fight={fight}
            />
          ))}
        </Accordion>
      </Jumbotron>
    );
  }
  return null;
});

export default OldFights;
