import React, { memo } from 'react';
import AsyncSelect from 'react-select/async';
import Axios from 'axios';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { dispatchSetItem } from '../../../store/actions/heroes';
import { SET_OPPONENT } from '../../../store/reducers/heroes';

const StyledDiv = styled.div`
  width: 100%;
  padding-bottom: 20px;
`;

const promiseOptions = async (inputValue) => {
  return new Promise((resolve) => {
    if (!inputValue || !inputValue.length) {
      resolve([]);
    } else {
      setTimeout(async () => {
        const response = await Axios.get(`${process.env.REACT_APP_API_URL}/search/${inputValue}`);
        const data = response.data.results
          ? response.data.results.map((item) => {
              return { data: item, value: item.id, label: item.name };
            })
          : [];
        resolve(data);
      }, 300);
    }
  });
};

const onInputChange = (callback) => (item) => {
  if (item) {
    callback(item.data, SET_OPPONENT);
  }
};

const SearchHeroe = memo(({ dispatchSetItem }) => (
  <StyledDiv>
    <AsyncSelect
      cacheOptions
      defaultOptions
      isClearable
      placeholder="Search opponent"
      loadOptions={promiseOptions}
      onChange={onInputChange(dispatchSetItem)}
    />
  </StyledDiv>
));

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  dispatchSetItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchHeroe);
