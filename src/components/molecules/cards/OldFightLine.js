import React, { memo } from 'react';
import { Accordion, Card } from 'react-bootstrap';

const OldFightLine = memo(({ fight, eventKey }) => {
  let winner = fight.stared;
  winner =
    parseInt(fight.stared.powerstats[fight.criteria], 10) <
    parseInt(fight.opponent.powerstats[fight.criteria], 10)
      ? fight.opponent
      : winner;
  return (
    <Card bg={fight.selected.id === winner.id ? 'success' : 'danger'}>
      <Accordion.Toggle as={Card.Header} eventKey={eventKey}>
        <h3>
          {fight.stared.name} / {fight.opponent.name}
        </h3>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={eventKey}>
        <Card.Body>
          <b>{winner.name}</b> WINS on criteria <b>{fight.criteria}</b>
          <br />
          You have selected <b>{fight.selected.name}</b>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
});

export default OldFightLine;
