import React, { memo } from 'react';
import Button from 'react-bootstrap/Button';

import Heroe from './Heroe';

const HeroeFightCard = memo(({ win, heroe, selected }) => {
  const WinBtn = () => (
    <Button variant="success" onClick={() => win(heroe)}>
      Win
    </Button>
  );
  return <Heroe heroe={heroe} footer={selected ? null : <WinBtn />} />;
});

export default HeroeFightCard;
