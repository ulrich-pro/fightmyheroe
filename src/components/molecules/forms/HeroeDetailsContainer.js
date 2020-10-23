import React, { useState, useEffect, memo } from 'react';
import Axios from 'axios';

import HeroeDetailsForm from './HeroeDetailsForm';

const HeroeDetailsContainer = memo(({ heroeId }) => {
  const [heroe, setHeroe] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await Axios.get(`${process.env.REACT_APP_API_URL}/${parseInt(heroeId, 10)}`);
      setHeroe(response.data);
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state

  return <HeroeDetailsForm heroe={heroe} />;
});

export default HeroeDetailsContainer;
