import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
// recoil
import { useRecoilState } from 'recoil';
import { ShowDetailPerfuem, PickPerfume } from '../../../src/states/archive';
// icon
import { AiFillStar } from 'react-icons/ai';
const ArchiveDetail = () => {
  const [showItem, setShowItem] = useRecoilState(ShowDetailPerfuem);
  const [pickItem, setPickItem] = useRecoilState(PickPerfume);

  useEffect(() => {
    console.log(showItem);
  });
  const handleOnPick = (id) => {
    if (pickItem.includes(id)) {
      console.log(id);
      setPickItem(pickItem.filter((item) => item !== id));
    } else setPickItem(pickItem.concat(id));
  };

  return (
    <>
      <Container>
        <PerfumeCntr>
          <>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Image
                className="goods_img"
                src={showItem.url}
                // priority={true}
                // loading="eager"
                loading="lazy"
                onContextMenu={() => {
                  return false;
                }}
                onDragStart={() => {
                  return false;
                }}
              />
              <BascInfoCntr>
                <Text isBig>{showItem.name}</Text>
                <Text isMiddle isGray={true} style={{ fontWeight: '400' }}>
                  {showItem.brand}
                </Text>
                <Text isGray={true}>{showItem.type}</Text>
              </BascInfoCntr>
            </div>

            <InfoCntr>
              <DetailInfo isBold>향조 : {showItem.type}그룹</DetailInfo>
              <NoteInfo>탑 : {showItem.top.join(',')}</NoteInfo>
              <NoteInfo>미들 : {showItem.middle.join(',')}</NoteInfo>
              <NoteInfo isLast>베이스 : {showItem.base.join(',')}</NoteInfo>
            </InfoCntr>

            <InfoCntr>
              <DetailInfo isBold>상세설명</DetailInfo>
              <DetailInfo isGray> {showItem.detail}</DetailInfo>
            </InfoCntr>
          </>
        </PerfumeCntr>
      </Container>
      <DockBarCntr>
        <BtnCntnr>
          <StarIcon
            size={'1.5rem'}
            onClick={() => handleOnPick(showItem.id)}
            isPick={pickItem && pickItem.includes(showItem.id)}
          />
        </BtnCntnr>
        <BtnCntnr>
          <BtnText>좋아요(스크랩)</BtnText>
        </BtnCntnr>
      </DockBarCntr>
    </>
  );
};

export default ArchiveDetail;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8rem;
`;
const PerfumeCntr = styled.div`
  width: 80%;
  flex-direction: column;
  white-space: pre-wrap;
  word-break: break-all;
`;
const Image = styled.img`
  width: 8rem;
  height: 9rem;
  text-align: center;
  align-tems: center;
  background: url(${({ src }) => src}) center center / cover;
`;

const BascInfoCntr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 0.2rem;
  width: 9.5rem;
  height: 10rem;
`;
const Text = styled.div`
  font-size: ${(props) =>
    props.isBig ? '1.1' : props.isMiddle ? '1' : '0.8'}rem;
  margin-bottom: ${(props) =>
    props.isBig ? '1.5' : props.isMiddle ? '1.2' : '0'}rem;
  color: ${(props) => (props.isGray ? 'gray' : 'black')};
`;
const InfoCntr = styled.div`
  margin-top: 2rem;
`;

const DetailInfo = styled.div`
  font-weight: ${(props) => (props.isBold ? '700' : '')};
  margin-bottom: ${(props) => (props.isBold ? '1' : '3')}rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 0.9rem;
  white-space: pre-wrap;
  word-break: break-all;
  background-color: ${(props) => (props.isGray ? '#dddddd' : '')};
  width: ${(props) => (props.isGray ? `calc(100% -2rem)` : '100%')};
  padding: ${(props) => (props.isGray ? '0.5rem 1rem' : '')};
`;

const NoteInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 3rem;
  justify-content: center;
  font-size: 0.9rem;
  white-space: pre-wrap;
  word-break: break-all;
  margin-bottom: 0.5rem;
  border-bottom: ${(props) => !props.isLast && 'solid 0.1rem #dedede'};
`;

const DockBarCntr = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 5;
  width: ${`calc(100% - 0.1rem);`};
  height: 3rem;
  background-color: white;
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: -0.045rem;
  color: black;
  border: 0.1rem solid #cdcdcd;
`;

const BtnCntnr = styled.div`
  width: 50%;
  height: 3rem;
  border-right: 0.1rem solid #cdcdcd;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const BtnText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  font-size: 0.9rem;
`;
const StarIcon = styled(AiFillStar)`
  color: ${(props) => (props.isPick ? '#F6BE00' : 'white')};
  text-shadow: 0 0 1rem black;
  stroke: ${(props) => (props.isPick ? 'none' : 'black')};
  stroke-width: 2.5rem;
`;
