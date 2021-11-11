import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// recoil
import { useRecoilState } from 'recoil';
import {
  PickPerfume,
  perfumeData,
  ShowDetailPerfuem,
} from '../../../src/states/archive';

// icon
import { AiFillStar } from 'react-icons/ai';
import { AiFillQuestionCircle } from 'react-icons/ai';
const FavoritePerfume = ({ setPageNum }) => {
  const [pickItem, setPickItem] = useRecoilState(PickPerfume);
  const [pickPerfume, setPickPerfume] = useState([]);
  const [data, setData] = useState(perfumeData);
  const [openPicker, setOpenPicker] = useState(false);
  const [showItem, setShowItem] = useRecoilState(ShowDetailPerfuem);

  const type = ['파우더', '우디', '플로럴'];
  useEffect(() => {
    setPickPerfume(
      data.filter((item) => pickItem && pickItem.includes(item.id))
    );
  }, []);
  const handleOnPick = (id) => {
    if (pickItem.includes(id)) {
      setPickItem(pickItem.filter((item) => item !== id));
    } else setPickItem(pickItem.concat(id));
  };
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        marginTop: '8rem',
        flexDirection: 'column',
      }}
    >
      {type.map((obj, idx) => {
        return (
          <Perfume>
            {idx !== 0 && <Wrapper />}
            <Text isTitle={true}>{obj}</Text>
            <Text isSubTitle={true} style={{ width: '20rem' }}>
              Most often by citrus in perfumery we describe the whole spectrum
              of hesperid ...
            </Text>
            <ImageCntr>
              {data.map((item, idx) => {
                return (
                  <>
                    <GoodsCntnr key={idx}>
                      <div
                        style={{
                          width: '9rem',
                          height: '10rem',
                          textAlign: 'center',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <IconCntr>
                          <StarIcon
                            size={'1.5rem'}
                            onClick={() => handleOnPick(item.id)}
                            isPick={pickItem && pickItem.includes(item.id)}
                          />
                        </IconCntr>
                        <Image
                          key={idx}
                          className="goods_img"
                          id={idx}
                          src={item.url}
                          // priority={true}
                          // loading="eager"
                          loading="lazy"
                          style={{ width: '7rem', height: '8rem' }}
                          backgroundColor="red"
                          onClick={() => {
                            setShowItem(item);
                            setPageNum(2);
                          }}
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
                          width: '7rem',
                          height: '4rem',
                          textAlign: 'center',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Text style={{ marginBottom: '0.2rem' }}>
                          {item.name}
                        </Text>
                        <Text isGray={true} style={{ fontWeight: '400' }}>
                          {item.brand}
                        </Text>
                        <Text isGray={true}>{item.type}</Text>
                      </div>
                    </GoodsCntnr>
                  </>
                );
              })}
              <div
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <div style={{ width: '6rem', marginBottom: '0.5rem' }}>
                  <AiFillQuestionCircle />
                </div>
                <Text style={{ width: '6rem', textAlign: 'center' }}>
                  다른 {obj} 향수
                </Text>
                <Text style={{ width: '6rem', textAlign: 'center' }}>
                  더보기 (200+)
                </Text>
              </div>
            </ImageCntr>
          </Perfume>
        );
      })}
    </div>
  );
};

export default FavoritePerfume;
const Wrapper = styled.div`
  height: 2rem;
`;
const Text = styled.div`
  width: 8rem;
  text-align: left;
  font-size: ${(props) =>
    props.isTitle ? '1.15rem' : props.isSubTitle ? '0.9rem' : '0.8rem'};
  font-weight: ${(props) => (props.isTitle ? '700' : '')};
  margin-bottom: 0.4rem;
  font-family: Roboto;
  letter-spacing: -0.035rem;
  color: ${(props) => (props.isGray ? 'gray' : 'black')};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const ImageCntr = styled.div`
  width: 100%;
  display: flex;
  felx-direction: row;
  height: 15.5rem;
  overflow-x: scroll;
  align-items: center;
`;

const Perfume = styled.div`
  display: flex;
  flex-direction: column;
  width: 94%;
  margin-left: 3%;
  align-items: flex-start;
`;

const IconCntr = styled.div`
  z-index: 1;
  text-align: right;
  vertical-align: flex-end;
  position: relative;
  display: flex;
  flex: 1;
  width: 100%;
`;
const StarIcon = styled(AiFillStar)`
  position: relative;
  right: -86%;
  color: ${(props) => (props.isPick ? 'yellow' : 'white')};
  text-shadow: 0 0 1rem black;
  stroke: ${(props) => (props.isPick ? 'none' : 'black')};
  stroke-width: 2.5rem;
`;

const Image = styled.img`
  background-color: gray;
`;

const GoodsCntnr = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #dedede;
  margin-right: 1rem;
`;
