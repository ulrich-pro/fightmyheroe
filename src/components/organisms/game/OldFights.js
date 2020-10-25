import React, { memo } from 'react';
import { Accordion, Jumbotron, Badge } from 'react-bootstrap';

import OldFightLine from '../../molecules/cards/OldFightLine';

const OldFights = memo(({ fights }) => {
  if (fights.length) {
    const setWinFights = fights.map((fight) => {
      let winner = fight.stared;
      winner =
        parseInt(fight.stared.powerstats[fight.criteria], 10) <
        parseInt(fight.opponent.powerstats[fight.criteria], 10)
          ? fight.opponent
          : winner;
      fight.winner = winner;
      fight.youwon = fight.selected.id === winner.id;
      return fight;
    });
    const filterWinFights = setWinFights.filter((fight) => fight.youwon);

    return (
      <Jumbotron>
        <h2>
          Previous Fights{' '}
          <Badge pill variant="success">
            {filterWinFights.length}
          </Badge>
          /
          <Badge pill variant="secondary">
            {fights.length}
          </Badge>
        </h2>
        <Accordion>
          {fights.map((fight, eventKey) => (
            <OldFightLine
              eventKey={eventKey.toString()}
              key={fight.stared.id + fight.opponent.id + fight.criteria + eventKey.toString()}
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
