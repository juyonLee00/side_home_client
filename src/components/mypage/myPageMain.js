import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
// icon
import { AiFillStar } from 'react-icons/ai';
// recoil
import { useRecoilState } from 'recoil';
import { PickPerfume } from '../../../src/states/archive';
import { perfumeData, ShowDetailPerfuem } from '../../../src/states/archive';
const MyPageMain = ({ setPageNum }) => {
  const [searchData, setSearchData] = useState([]);
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState('');
  const [openPicker, setOpenPicker] = useState(false);
  const [pickItem, setPickItem] = useRecoilState(PickPerfume);
  const [showItem, setShowItem] = useRecoilState(ShowDetailPerfuem);

  useEffect(() => {
    setData(() => perfumeData.filter((obj, idx) => pickItem.includes(obj.id)));
  }, []);

  return (
    <>
      <Container>
        <Perfume
          data={searchData.length === 0 ? data : searchData}
          setPageNum={setPageNum}
          pickItem={pickItem}
          setPickItem={setPickItem}
          setShowItem={setShowItem}
        />
      </Container>
    </>
  );
};

export default MyPageMain;

export const Perfume = ({
  data,
  setPageNum,
  pickItem,
  setPickItem,
  setShowItem,
}) => {
  const handleOnPick = (id) => {
    if (pickItem.includes(id)) {
      setPickItem(pickItem.filter((item) => item !== id));
    } else setPickItem(pickItem.concat(id));
  };

  return (
    <>
      <PerfumeCntr>
        <PerfumeList>
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
                    <Text style={{ marginBottom: '0.2rem' }}>{item.name}</Text>
                    <Text isGray={true} style={{ fontWeight: '400' }}>
                      {item.brand}
                    </Text>
                    <Text isGray={true}>{item.type}</Text>
                  </div>
                </GoodsCntnr>
              </>
            );
          })}
        </PerfumeList>
      </PerfumeCntr>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`;

const PerfumeCntr = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
  text-align: center;
`;
const Image = styled.img`
  background-color: gray;
`;

const Text = styled.div`
  width: 8rem;
  text-align: left;
  margin-left: 1.2rem;
  font-family: Roboto;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: -0.035rem;
  color: ${(props) => (props.isGray ? 'gray' : 'black')};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const PerfumeList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  justify-content: center;
  column-gap: 0.5rem;
`;

const GoodsCntnr = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  background-color: #dedede;
  flex-direction: column;
  align-items: flex-start;
`;
const IconCntr = styled.div`
  z-index: 1;
  hieght: 1.5rem;
  text-align: right;
  vertical-align: flex-end;
  position: relative;
  display: flex;
  flex: 1;
  width: 100%;
`;
const StarIcon = styled(AiFillStar)`
  position: relative;
  right: -83%;
  color: ${(props) => (props.isPick ? 'yellow' : 'white')};
  text-shadow: 0 0 1rem black;
  stroke: ${(props) => (props.isPick ? 'none' : 'black')};
  stroke-width: 2.5rem;
`;
