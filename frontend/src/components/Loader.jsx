// src/components/Loader.js

import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Loader = () => {
  return (
    <LoaderWrapper>
      <TailSpin
        height="80"
        width="80"
        color="#36D7B7"
        ariaLabel="loading"
      />
    </LoaderWrapper>
  );
};

export default Loader;
