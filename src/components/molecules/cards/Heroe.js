import React, { memo } from 'react';

import DescriptionCard from './DescriptionCard';

const Heroe = memo(({ heroe, footer }) => (
  <DescriptionCard
    image={heroe.image.url || ''}
    title={heroe.name}
    heroeId={heroe.id}
    footer={footer}
  />
));

export default Heroe;
