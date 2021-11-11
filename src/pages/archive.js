import React, { useEffect } from 'react';
import ArchiveDetail from '../components/archive/archiveDetail';
import ArchivePage from '../components/archive/archivePage';
import styled from 'styled-components';
import FavoritePerfume from '../components/archive/favoritePerfume';
import Navi from '../components/common/Navi';
import { useRecoilState } from 'recoil';
import { PageState } from '../states/archive';
const Archive = ({ history }) => {
  const [pageNum, setPageNum] = useRecoilState(PageState);

  switch (pageNum) {
    case 1:
      return (
        <div style={{ margin: '0 auto' }}>
          <Navi
            text="전체 향수"
            onMain={() => setPageNum(1)}
            onBackClick={() => history.push('./today')}
            onPickPerfume={() => setPageNum(3)}
          ></Navi>
          <Cntr>
            <ArchivePage setPageNum={setPageNum} />
          </Cntr>
        </div>
      );
    case 2:
      return (
        <>
          <Navi
            text="전체 향수"
            onMain={() => setPageNum(1)}
            onBackClick={() => history.push('./today')}
            onPickPerfume={() => setPageNum(3)}
          ></Navi>
          <ArchiveDetail setPageNum={setPageNum} />
        </>
      );
    case 3:
      return (
        <>
          <Navi
            text="전체 향수"
            onMain={() => setPageNum(1)}
            onBackClick={() => history.push('./today')}
            onPickPerfume={() => setPageNum(3)}
          ></Navi>
          <FavoritePerfume setPageNum={setPageNum} />
        </>
      );
    default:
      return <></>;
  }
};

export default Archive;

const Cntr = styled.div`
  width: 100%;
  margin-top: 8.5rem;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;
