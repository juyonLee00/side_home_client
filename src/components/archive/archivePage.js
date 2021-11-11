import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
// search filter
import Picker from './Picker';
// icon
import { AiFillStar } from 'react-icons/ai';
// recoil
import { useRecoilState } from 'recoil';
import { PickPerfume } from '../../../src/states/archive';
import { RiMenuAddFill } from 'react-icons/ri';
import { perfumeData, ShowDetailPerfuem } from '../../../src/states/archive';
import { BsArrowUpDown } from 'react-icons/bs';
const ArchivePage = ({ setPageNum }) => {
  const [searchData, setSearchData] = useState([]);
  const [data, setData] = useState(perfumeData);
  const [filterData, setFilterData] = useState('');
  const [openPicker, setOpenPicker] = useState(false);
  const [pickItem, setPickItem] = useRecoilState(PickPerfume);
  const [showItem, setShowItem] = useRecoilState(ShowDetailPerfuem);

  const handlePicker = () => {
    setOpenPicker(!openPicker);
  };
  const onSearch = (e) => {
    const keyword = e.target.value;
    const upperKeyword = keyword.toString().toUpperCase();
    const nextResult = data.filter(
      (item) =>
        item.brand.toString().toUpperCase().includes(upperKeyword) ||
        item.name.toString().toUpperCase().includes(upperKeyword) ||
        item.type.toString().toUpperCase().includes(upperKeyword)
    );
    setSearchData(nextResult);
  };

  return (
    <>
      <Container>
        <BtnContainer>
          <div style={{ flexDirection: 'row', display: 'flex' }}>
            <FilterIcon />
            <Btn onClick={handlePicker}>필터</Btn>
          </div>
          <div
            style={{
              flexDirection: 'row',
              display: 'flex',
            }}
          >
            <UpdownIcon />
            <Btn>조회순</Btn>
          </div>
        </BtnContainer>
        {openPicker && <Picker />}
        <Wrapper />
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

export default ArchivePage;

const InputBox = styled.input`
  width: 95%;
  height: 2rem;
  vertical-align: center;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const Btn = styled.div`
  margin-left: 0.2rem;
  font-size: 0.8rem;
  height: 1.5rem;

  box-shadow: ${(props) =>
    props.isShow ? '0 -0.5rem 1rem 0.2rem rgba(0, 0, 0, 0.3)' : 'none'};

  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: center;
  color: #191919;
`;
const FilterIcon = styled(RiMenuAddFill)`
  width: 1.15rem;
  height: 1.15rem;
  color: gray;
  text-shadow: 0 0 1rem black;
`;

const UpdownIcon = styled(BsArrowUpDown)`
  width: 1.15rem;
  height: 1.15rem;
  color: gray;
  text-shadow: 0 0 1rem black;
`;

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
  useEffect(() => {}, [pickItem]);

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
const Wrapper = styled.div`
  height: 2rem;
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
