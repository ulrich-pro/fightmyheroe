import React, { memo } from 'react';
import Button from 'react-bootstrap/Button';

import Heroe from './Heroe';

const WinBtn = memo(({ win, heroe }) => (
  <Button variant="success" onClick={() => win(heroe)}>
    Choose as Winner
  </Button>
));

const HeroeFightCard = memo(({ win, heroe, selected }) => {
  return <Heroe heroe={heroe} footer={selected ? null : <WinBtn heroe={heroe} win={win} />} />;
});

export default HeroeFightCard;
