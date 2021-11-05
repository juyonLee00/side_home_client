import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
// recoil
import { useRecoilState } from 'recoil';
import { ShowDetailPerfuem } from '../../../src/states/archive';
// icon
import { AiFillHeart } from 'react-icons/ai';

const ArchiveDetail = () => {
  const [showItem, setShowItem] = useRecoilState(ShowDetailPerfuem);

  useEffect(() => {
    console.log(showItem);
  });

  return (
    <div
      style={{
        width: '100%',
        justifyContent: 'center',
        textAlign: 'center',
        verticalAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: '20rem',
      }}
    >
      <PerfumeCntr>
        <CodyList>
          <>
            <GoodsCntnr>
              <div
                style={{
                  width: '10rem',
                  height: '11rem',
                  textAlign: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  className="goods_img"
                  src={showItem.url}
                  // priority={true}
                  // loading="eager"
                  loading="lazy"
                  width={130}
                  backgroundColor="red"
                  height={130}
                  onContextMenu={() => {
                    return false;
                  }}
                  onDragStart={() => {
                    return false;
                  }}
                />
              </div>
              <div
                style={{
                  width: '10rem',
                  height: '4.5rem',
                  textAlign: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text style={{ marginBottom: '0.2rem' }}>{showItem.name}</Text>
                <Text isGray={true} style={{ fontWeight: '400' }}>
                  {showItem.brand}
                </Text>
                <Text isGray={true}>{showItem.type}</Text>
              </div>
            </GoodsCntnr>
          </>
        </CodyList>
      </PerfumeCntr>
    </div>
  );
};

export default ArchiveDetail;

const PerfumeCntr = styled.div``;
const Image = styled.img`
  background-color: gray;
`;

const Picture = styled.div`
  width: 14rem;
  height: 14rem;
  margin-right: 1.2rem;
  border: solid 0.1rem ${({ theme }) => theme.colors.gray_1};
  border-radius: 0.8rem;
  background: url(${(props) => props.src}) center center / cover;
`;

const DelIcon = styled.img`
  position: relative;
  top: 0rem;
  left: 78%;

  width: 3rem;
  height: 3rem;
`;
const CtgCntnr = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Text = styled.div`
  width: 8rem;
  text-align: left;
  margin-left: 1.2rem;

  font-family: Roboto;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.035rem;
  color: ${(props) => (props.isGray ? 'gray' : 'black')};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const CodyList = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  justify-content: center;
  column-gap: 0.5rem;
`;

const GoodsCntnr = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const IconCntr = styled.div`
  z-index: 1;
  position: relative;
  margin-top: -2rem;
  background-color: #eeeeee;
  display: flex;
  flex: 1;
  width: 1.7rem;
  height: 1.7rem;
  margin-left: 10rem;
  align-items: center;
  justify-items: center;
  justify-content: center;
`;
const HeartIcon = styled(AiFillHeart)`
  font-size: 1.2rem;
  color: ${(props) => (props.isPick ? 'red' : 'white')};
  text-shadow: 0 0 1rem black;
  stroke: ${(props) => (props.isPick ? 'none' : 'black')};
  stroke-width: 2.5rem;
`;
const CartBtn = styled.img`
  position: relative;
  z-index: 2;
  top: -4rem;
  left: 11.2rem;

  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  stroke: black;
  stroek-width: 1rem;
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

const Line = styled.div`
  margin-top: 1rem;
  border-bottom: ${(props) =>
    props.isLast ? 'none' : props.isTwo ? 'none' : '1rem solid  #F4F4F4'};
  width: 110%;
  margin-left: -5%;
`;
