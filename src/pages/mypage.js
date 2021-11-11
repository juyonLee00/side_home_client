import React, { useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

import { useRecoilState } from 'recoil';
import { MyPageState } from '../states/mypage';
import MyPageMain from '../components/mypage/myPageMain';
import styled, { css } from 'styled-components';

const MyPage = ({ history }) => {
  const [pageNum, setPageNum] = useRecoilState(MyPageState);

  switch (pageNum) {
    case 1:
      return (
        <div style={{ margin: '0 auto' }}>
          <Header>
            <IoIosArrowBack
              style={{
                position: 'absolute',
                left: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              size={'1.5rem'}
              onClick={() => history.replace('/main')}
            />
            <div
              style={{
                width: '100%',
                textAlign: 'center',
                alignItems: 'center',
              }}
            >
              마이페이지
            </div>
          </Header>
          <Cntr>
            <MyPageMain setPageNum={setPageNum} />
          </Cntr>
        </div>
      );
    case 2:
      return <></>;
    case 3:
      return <></>;
    default:
      return <></>;
  }
};

export default MyPage;
const Header = styled.div`
  position: fixed;
  top: 0;
  z-index: 5;
  width: 100%;
  height: 3.5rem;
  background-color: white;
  box-shadow: 0 0.1rem 0.3rem 0.3rem #dedede;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  font-size: 1.3rem;
  font-weight: 500;
  color: black;
`;

const Cntr = styled.div`
  width: 100%;
  margin-top: 8.5rem;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;
