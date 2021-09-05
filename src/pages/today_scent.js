import React from 'react';
import styled from 'styled-components';

const today_scent = ({ history }) => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        오늘의 향수..
        <Btn onClick={() => history.push('main')}>아카이브 이동</Btn>
      </div>
    </>
  );
};

export default today_scent;

const Btn = styled.div`
  width: 7rem;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1rem;
  background-color: black;
  border-radius: 0.5rem;
  color: white;
  font-weight: 500;
`;
