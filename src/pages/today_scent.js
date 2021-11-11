import React from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import Weather from './Weather.js';

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
        <Wrapper>
          <MainTitle>
            오늘
            <Weather />
          </MainTitle>
          <RecommandWrap>
            <RecommandImg></RecommandImg>
            <RecommandGrid>
              <RecommandName>향수명</RecommandName>

              <RecommandWeather>추천날씨</RecommandWeather>

              <LikeButton></LikeButton>
            </RecommandGrid>
          </RecommandWrap>
          <RecommandWrap>
            <RecommandImg></RecommandImg>
            <RecommandGrid>
              <RecommandName>향수명</RecommandName>
              <RecommandWeather>추천날씨</RecommandWeather>

              <LikeButton></LikeButton>
            </RecommandGrid>
          </RecommandWrap>
          <RecommandWrap>
            <RecommandImg></RecommandImg>
            <RecommandGrid>
              <RecommandName>향수명</RecommandName>
              <RecommandWeather>추천날씨</RecommandWeather>

              <LikeButton></LikeButton>
            </RecommandGrid>
          </RecommandWrap>
        </Wrapper>

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

const Wrapper = styled.div`
  display: ${(props) => (props.isShow === true ? 'flex' : 'none')};
  display: flex;
  width: 100%;
  background-color: #fff;

  flex-direction: column;
`;

const MainTitle = styled.h1`
  position: relative;
  margin-top: 20px;
  font-family: 'GmarketSansBold';
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 30px;
  text-align: center;
  color: #2d2d2d;
`;

const WeatherRendering = styled.h2`
  position: relative;
  margin-top: 1px;
  font-family: 'GmarketSansMedium';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 25%;
  text-align: center;
  color: #6e6e6e;
`;

const RecommandWrap = styled.div`
  position: relative;
  margin: 20px;

  font-family: 'GmarketSansBold';
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 132%;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  text-align: left;

  background-color: #ffffff;
  flex-direction: column;
  align-items: center;
  border-radius: 0.8rem;
`;

const RecommandImg = styled.img`
  position: relative;
  margin: auto;
  width: 124px;
  height: 150px;
  object-fit: contain;
  grid-column-start: 1;
`;

const RecommandName = styled.div`
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 14px;
  line-height: 119%;
  color: #2d2d2d;
`;

const RecommandWeather = styled.div`
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 10px;
  line-height: 120%;
  color: #6e6e6e;
`;

const RecommandGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-start: 2;
  row-gap: 15px;
  margin-bottom: 45px;
`;

const LikeButton = styled.div`
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
