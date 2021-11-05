import { width } from 'dom-helpers';
import React, { useEffect, useState } from 'react';
import Select, { Component } from 'react-select';
import makeAnimated from 'react-select/animated';
import styled from 'styled-components';
import Navi from '../common/Navi';
const animatedComponents = makeAnimated();
const typeOptions = [
  { value: 1, label: 'Musk' },
  { value: 2, label: 'Jasmine' },
  { value: 3, label: 'Vanila' },
  { value: 4, label: 'Rose' },
  { value: 5, label: 'Sandalwood' },
  { value: 6, label: 'Bergamot' },
  { value: 7, label: 'Amber' },
  { value: 8, label: 'Patchouli' },
  { value: 9, label: 'Cedar' },
  { value: 10, label: 'Vetiver' },
];
const weatherOptions = [
  { value: 1, label: 'floral-sweet' },
  { value: 2, label: 'powdery-floral' },
  { value: 3, label: 'fresh-floral' },
  { value: 4, label: 'synthetic' },
  { value: 5, label: 'aquatic-spicy' },
  { value: 6, label: 'sweet-fruity' },
  { value: 7, label: 'woody-floral' },
];

const genderOptions = [
  { value: 1, label: 'female' },
  { value: 2, label: 'male' },
  { value: 3, label: 'unisex' },
];

const Picker = () => {
  const [noteFilter, setNoteFilter] = useState({
    group: [],
    note: [],
    brand: [],
  });
  const [selectType, setSelectType] = useState([]);
  const [typeFilter, setTypeFilter] = useState([]);
  const [genderFilter, setGenderFilter] = useState([]);
  const [inputData, setInputData] = useState({
    name: '',
  });
  const [filterType, setFilterType] = useState(0);
  useEffect(() => {
    console.log(noteFilter);
  }, [noteFilter, setNoteFilter]);

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '0.5rem',
      }}
    >
      <Menu>
        <MenuContent
          style={{ borderRight: 'none' }}
          onClick={() => setFilterType(0)}
          isClick={filterType === 0}
        >
          그룹
        </MenuContent>
        <MenuContent
          style={{ borderRight: 'none' }}
          onClick={() => setFilterType(1)}
          isClick={filterType === 1}
        >
          개별노트
        </MenuContent>
        <MenuContent
          style={{ borderRight: 'none' }}
          onClick={() => setFilterType(2)}
          isClick={filterType === 2}
        >
          브랜드
        </MenuContent>
      </Menu>
      <div style={{ width: '80%', alignItems: 'center', textAlign: 'center' }}>
        <InputBox
          style={{ marginBottom: '1rem' }}
          placeholder="노트 검색"
          value={inputData.name}
          onChange={(e) =>
            setInputData({
              ...inputData,
              name: e.target.value,
            })
          }
        />

        <BtnCntr>
          {typeOptions.map((obj) => {
            return (
              <div style={{ width: '100%' }}>
                <Btn
                  isClick={noteFilter.note.includes(obj.value)}
                  onClick={() => {
                    noteFilter.note.includes(obj.value)
                      ? setNoteFilter(() => {
                          return {
                            ...noteFilter,
                            note: noteFilter.note.filter(
                              (note) => note !== obj.value
                            ),
                          };
                        })
                      : setNoteFilter(() => {
                          return {
                            ...noteFilter,
                            note: noteFilter.note.concat(obj.value),
                          };
                        });
                  }}
                  isShow
                >
                  {obj.label}
                </Btn>
              </div>
            );
          })}
        </BtnCntr>
      </div>
    </div>
  );
};

export default Picker;

const InputBox = styled.input`
  width: 98%;
  text-align: center;
  height: 1.7rem;
  border: 0.1rem solid gray;
  border-radius: 0.3rem;
  background-color: white;

  font-family: 'Noto Sans KR';
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: -0.035rem;
  color: black;
  &:focus {
    outline: none;
    border: 0.1rem solid gray;
  }
  &::placeholder {
    font-weight: 400;
    color: gray;
  }

  appearance: none;
  box-shadow: none;
  overflow: hidden;
`;

const BtnCntr = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
const PickerCntr = styled.div`
  width: 100%;
  display: flex;
  flexdirection: row;
  justifycontent: space-between;
`;
const Btn = styled.div`
  margin-bottom: 0.8rem;
  width: 90%;
  height: 1.7rem;
  color: ${(props) => (props.isClick ? 'white' : '#191919')};
  background-color: ${(props) =>
    props.isClick ? '#191919' : `rgba(0, 0, 0, 0.01)`};
  border: solid 0.1rem rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
`;

const CustomBtn = styled.div`
  box-shadow: ${(props) =>
    props.isShow ? '0 -0.5rem 1rem 0.2rem rgba(0, 0, 0, 0.3)' : 'none'};
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
  margin-bottom: 2rem;
`;
const MenuContent = styled.div`
  width: 33.3333%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  border-bottom: ${(props) =>
    props.isClick ? ' 0.2rem solid #191919' : 'none'};

  padding-bottom: ${(props) => (props.isClick ? ' -1rem' : '0')};
`;
