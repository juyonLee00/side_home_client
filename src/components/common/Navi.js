import React, { useEffect, useState } from 'react';
import Select, { Component } from 'react-select';
import makeAnimated from 'react-select/animated';
import styled from 'styled-components';
import { AiFillHeart, AiOutlineSearch } from 'react-icons/ai';
import { GiSquareBottle } from 'react-icons/gi';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiFillControl } from 'react-icons/ai';
import { useRecoilState } from 'recoil';
import { PageState } from '../../states/archive';

const Navi = ({ text, onMain, onBackClick, onPickPerfume }) => {
  const [pageNum, setPageNum] = useRecoilState(PageState);

  return (
    <Container>
      <Headers style={{ backgroundClip: 'blue' }}>
        <Logo>
          <AppName>Scent</AppName>
          <GiSquareBottle
            style={{ width: '2.5rem', height: '2.5rem', color: '#525252' }}
          />
        </Logo>
        <Icons>
          <BsFillPersonFill
            style={{
              width: '1.9rem',
              height: '1.9rem',
              stroke: '#525252',
              strokeWidth: '0.08rem',
              color: 'white',
            }}
          />
          <AiOutlineSearch
            style={{ width: '2.2rem', height: '2.2rem', color: '#525252' }}
          />
        </Icons>
      </Headers>
      <Menu>
        <MenuContent
          isClick={pageNum === 0}
          style={{ borderRight: 'none' }}
          onClick={() => {
            onBackClick();
          }}
        >
          투데이
        </MenuContent>
        <MenuContent
          isClick={pageNum === 1}
          style={{ borderRight: 'none' }}
          onClick={() => {
            onMain();
          }}
        >
          {text}
        </MenuContent>
        <MenuContent
          isClick={pageNum === 3}
          onClick={() => {
            onPickPerfume();
          }}
        >
          노트
        </MenuContent>
      </Menu>
    </Container>
  );
};

export default Navi;

const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 5;
  height: 7rem;
  backround-color: yellow;
  width: 100%;
  background-color: white;
  text-align: center;
  align-items: cneter;
  align-items: cneter;
`;
const Cntr = styled.div`
  position: fixed;
  top: 0;
  z-index: 5;
  width: 100%;
  height: 8.7rem;
  background-color: white;
  box-shadow: 0 0.1rem 0.5rem 0.5rem rgba(255, 255, 255, 1);

  display: flex;
  align-items: center;
  justify-content: flex-start;

  font-size: 1.6rem;
  font-weight: 700;
  color: black;
`;
const Headers = styled.div`
  width: 100%;
  height: 3.4rem;
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-items: center;
  justify-content: space-between;
  border-bottom: 0.15rem solid #dedede;
`;
const Menu = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  justify-content: space-between;
  border-bottom: 0.15rem solid #dedede;
`;
const MenuContent = styled.div`
  width: 33.3333%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  border-bottom: ${(props) =>
    props.isClick ? '0.2rem solid #525252' : 'none'};
`;
const Logo = styled.div`
  width: 9rem;
  height: 2.8rem;
  display: flex;
  justify-content: center;
`;
const Icons = styled.div`
  width: 5.2rem;
  align-items: center;
  height: 2.8rem;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
`;
const AppName = styled.div`
  height: 2.5rem;
  color: #525252;
  font-size: 1.5rem;
  margin-right: 0.5rem;
  margin-top: 0.4rem;
  font-weight: bold;
`;
const Text = styled.div`
  font-size: 0.9rem;
  padding: 1rem 1rem;
  text-align: center;
  color: black;
`;

const PickerCntr = styled.div`
  width: 100%;
  display: flex;
  flexdirection: row;
  justifycontent: space-between;
`;
const Btn = styled.button`
  width: 5rem;
  height: 2rem;
  box-shadow: ${(props) =>
    props.isShow ? '0 -0.5rem 1rem 0.2rem rgba(0, 0, 0, 0.3)' : 'none'};

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.8rem;
  color: black;
  float: right;
`;
