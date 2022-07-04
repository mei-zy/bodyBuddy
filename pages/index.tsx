import type { NextPage } from 'next';
import styled from '@emotion/styled';
import Image from 'next/image';
import logo from 'public/assets/index/logo.svg';
import myPage from 'public/assets/index/mypage.svg';

import { TopButton } from '@components/common/button';
import DetailOptionModal from '@components/layout/index/DetailOption';
import OptionList from '@components/layout/index/Option';
import TrainerItem from '@components/layout/index/TrainerItem';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Home: NextPage = () => {
  // 로그인 여부
  const hasLogin = true;
  const name = '손흥민';

  useEffect(() => {
    if (!hasLogin) document.location.href = '/onBoarding';
  }, []);

  const [options, setOptions] = useState({
    city: '',
    district: '',
    gender: '',
    field: [],
    purpose: [],
    price: [],
    career: [],
  });

  const trainerList = [
    {
      id: 456789123,
      name: '최세민',
      phoneNumber: '01012345678',
      images: [
        '/src/assets/trainers/tr1.webp',
        '/src/assets/trainers/tr2.webp',
        '/src/assets/trainers/tr3.webp',
      ],
      fieldId: 456,
      purposeId: 789,
      address: '서울시 강남구 강남대로 364 미왕빌딩 11층',
      city: '서울시',
      district: '강남구',
      gymImage: '/src/assets/trainers/tr2.webp',
      careers: [
        {
          id: 987,
          content: '이미 등록한 경력',
          image: '/src/assets/careers/c1.webp',
          isApproval: true,
        },
        {
          id: 988,
          content: '새로운 경력',
          image: '/src/assets/careers/c2.webp',
          isApproval: false,
        },
      ],
      price: 15000,
      totalCareer: 5,
      introduction: '다이어트, 매번 어려우셨나요?\n이번엔 쉬운 길을 선택하세요',
      isOnline: false,
    },
    {
      id: 456789124,
      name: '최세민',
      phoneNumber: '01012345678',
      images: [
        '/src/assets/trainers/tr1.webp',
        '/src/assets/trainers/tr2.webp',
        '/src/assets/trainers/tr3.webp',
      ],
      fieldId: 456,
      purposeId: 789,
      address: '서울시 강남구 강남대로 364 미왕빌딩 11층',
      city: '서울시',
      district: '강남구',
      gymImage: '/src/assets/trainers/tr2.webp',
      careers: [
        {
          id: 987,
          content: '이미 등록한 경력',
          image: '/src/assets/careers/c1.webp',
          isApproval: true,
        },
        {
          id: 988,
          content: '새로운 경력',
          image: '/src/assets/careers/c2.webp',
          isApproval: false,
        },
      ],
      price: 15000,
      totalCareer: 5,
      introduction: '다이어트, 매번 어려우셨나요?\n이번엔 쉬운 길을 선택하세요',
      isOnline: false,
    },
    {
      id: 456789125,
      name: '최세민',
      phoneNumber: '01012345678',
      images: [
        '/src/assets/trainers/tr1.webp',
        '/src/assets/trainers/tr2.webp',
        '/src/assets/trainers/tr3.webp',
      ],
      fieldId: 456,
      purposeId: 789,
      address: '서울시 강남구 강남대로 364 미왕빌딩 11층',
      city: '서울시',
      district: '강남구',
      gymImage: '/src/assets/trainers/tr2.webp',
      careers: [
        {
          id: 987,
          content: '이미 등록한 경력',
          image: '/src/assets/careers/c1.webp',
          isApproval: true,
        },
        {
          id: 988,
          content: '새로운 경력',
          image: '/src/assets/careers/c2.webp',
          isApproval: false,
        },
      ],
      price: 15000,
      totalCareer: 5,
      introduction: '다이어트, 매번 어려우셨나요?\n이번엔 쉬운 길을 선택하세요',
      isOnline: true,
    },
    {
      id: 456789126,
      name: '최세민',
      phoneNumber: '01012345678',
      images: [
        '/src/assets/trainers/tr1.webp',
        '/src/assets/trainers/tr2.webp',
        '/src/assets/trainers/tr3.webp',
      ],
      fieldId: 456,
      purposeId: 789,
      address: '서울시 강남구 강남대로 364 미왕빌딩 11층',
      city: '서울시',
      district: '강남구',
      gymImage: '/src/assets/trainers/tr2.webp',
      careers: [
        {
          id: 987,
          content: '이미 등록한 경력',
          image: '/src/assets/careers/c1.webp',
          isApproval: true,
        },
        {
          id: 988,
          content: '새로운 경력',
          image: '/src/assets/careers/c2.webp',
          isApproval: false,
        },
      ],
      price: 15000,
      totalCareer: 5,
      introduction: '다이어트, 매번 어려우셨나요?\n이번엔 쉬운 길을 선택하세요',
      isOnline: false,
    },
    {
      id: 456789127,
      name: '최세민',
      phoneNumber: '01012345678',
      images: [
        '/src/assets/trainers/tr1.webp',
        '/src/assets/trainers/tr2.webp',
        '/src/assets/trainers/tr3.webp',
      ],
      fieldId: 456,
      purposeId: 789,
      address: '서울시 강남구 강남대로 364 미왕빌딩 11층',
      city: '서울시',
      district: '강남구',
      gymImage: '/src/assets/trainers/tr2.webp',
      careers: [
        {
          id: 987,
          content: '이미 등록한 경력',
          image: '/src/assets/careers/c1.webp',
          isApproval: true,
        },
        {
          id: 988,
          content: '새로운 경력',
          image: '/src/assets/careers/c2.webp',
          isApproval: false,
        },
      ],
      price: 15000,
      totalCareer: 5,
      introduction: '다이어트, 매번 어려우셨나요?\n이번엔 쉬운 길을 선택하세요',
      isOnline: false,
    },
    {
      id: 456789128,
      name: '최세민',
      phoneNumber: '01012345678',
      images: [
        '/src/assets/trainers/tr1.webp',
        '/src/assets/trainers/tr2.webp',
        '/src/assets/trainers/tr3.webp',
      ],
      fieldId: 456,
      purposeId: 789,
      address: '서울시 강남구 강남대로 364 미왕빌딩 11층',
      city: '서울시',
      district: '강남구',
      gymImage: '/src/assets/trainers/tr2.webp',
      careers: [
        {
          id: 987,
          content: '이미 등록한 경력',
          image: '/src/assets/careers/c1.webp',
          isApproval: true,
        },
        {
          id: 988,
          content: '새로운 경력',
          image: '/src/assets/careers/c2.webp',
          isApproval: false,
        },
      ],
      price: 15000,
      totalCareer: 5,
      introduction: '다이어트, 매번 어려우셨나요?\n이번엔 쉬운 길을 선택하세요',
      isOnline: false,
    },
    {
      id: 456789129,
      name: '최세민',
      phoneNumber: '01012345678',
      images: [
        '/src/assets/trainers/tr1.webp',
        '/src/assets/trainers/tr2.webp',
        '/src/assets/trainers/tr3.webp',
      ],
      fieldId: 456,
      purposeId: 789,
      address: '서울시 강남구 강남대로 364 미왕빌딩 11층',
      city: '서울시',
      district: '강남구',
      gymImage: '/src/assets/trainers/tr2.webp',
      careers: [
        {
          id: 987,
          content: '이미 등록한 경력',
          image: '/src/assets/careers/c1.webp',
          isApproval: true,
        },
        {
          id: 988,
          content: '새로운 경력',
          image: '/src/assets/careers/c2.webp',
          isApproval: false,
        },
      ],
      price: 15000,
      totalCareer: 5,
      introduction: '다이어트, 매번 어려우셨나요?\n이번엔 쉬운 길을 선택하세요',
      isOnline: false,
    },
    {
      id: 456789130,
      name: '최세민',
      phoneNumber: '01012345678',
      images: [
        '/src/assets/trainers/tr1.webp',
        '/src/assets/trainers/tr2.webp',
        '/src/assets/trainers/tr3.webp',
      ],
      fieldId: 456,
      purposeId: 789,
      address: '서울시 강남구 강남대로 364 미왕빌딩 11층',
      city: '서울시',
      district: '강남구',
      gymImage: '/src/assets/trainers/tr2.webp',
      careers: [
        {
          id: 987,
          content: '이미 등록한 경력',
          image: '/src/assets/careers/c1.webp',
          isApproval: true,
        },
        {
          id: 988,
          content: '새로운 경력',
          image: '/src/assets/careers/c2.webp',
          isApproval: false,
        },
      ],
      price: 15000,
      totalCareer: 5,
      introduction: '다이어트, 매번 어려우셨나요?\n이번엔 쉬운 길을 선택하세요',
      isOnline: false,
    },
  ];

  // 로그인한 대상이 트레이너 여부에 따라 마이페이지 링크 다르게 해주기
  const isTrainer = true;
  const id = 456789123;

  const MYPAGE_LINK = isTrainer ? `/trainer/${id}/edit` : `/mypage/${id}`;
  const [isModalState, setIsModalState] = useState<boolean>(false);

  const handleClick = () => setIsModalState((state) => !state);

  const Index = styled.div`
    background: #ececec;
    overflow-x: hidden;
  `;

  const Header = styled.header`
    padding: 55px 20px 0 20px;
  `;

  const IconWrapper = styled.section`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    span:last-of-type {
      cursor: pointer;
    }
  `;

  const IntroMessage = styled.div`
    padding-top: 40px;
    font-weight: 800;
    font-size: 26px;
    line-height: 36px;
  `;

  const UserName = styled.span`
    color: ${(props) => props.theme.purple};
  `;

  const Main = styled.main`
    background-color: #ececec;
  `;

  const Option = styled.article`
    position: sticky;
    top: 0px;
    background-color: #ececec;
    padding-top: 20px;
    z-index: 100;
  `;

  const OptionWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: 0px 15px;
    align-items: center;
    font-weight: 400;
    font-size: 10px;
    line-height: 18px;
    background: #ffffff;
    border-radius: 30px 30px 0 0;
  `;

  const DetailOption = styled.section`
    margin-top: 10px;
    cursor: pointer;

    span {
      background-color: #fff;
      display: inline-block;
      padding-right: 4px;
    }

    span::after {
      content: url(/assets/index/addoption.svg);
      display: inline-block;
      width: 13px;
      height: 13px;
      margin-left: 4px;
      vertical-align: middle;
    }
  `;

  const TrainerList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: #ffffff;
    padding: 10px 0 10px 15px;
  `;

  return hasLogin ? (
    <>
      {isModalState && (
        <DetailOptionModal
          options={options}
          handleSetOptions={setOptions}
          onChangeSetState={handleClick}
        />
      )}
      <Index>
        <Header>
          <h1 className="srOnly">index page</h1>
          <IconWrapper>
            <Image src={logo} title="바디버디" alt="바디버디 로고" width={25} height={30} />
            <Link href={MYPAGE_LINK}>
              <div>
                <Image src={myPage} title="마이페이지" alt="마이페이지" width={30} height={30} />
              </div>
            </Link>
          </IconWrapper>
          <IntroMessage>
            <p>
              <UserName>{name}</UserName>님
            </p>
            <p>반갑습니다.</p>
          </IntroMessage>
        </Header>
        <Main>
          <Option>
            <OptionWrapper>
              <OptionList options={options} />
              <DetailOption onClick={handleClick}>
                <span>상세 옵션</span>
              </DetailOption>
            </OptionWrapper>
          </Option>
          <TrainerList>
            {trainerList.map((trainer: any) => (
              <TrainerItem key={trainer.id} trainer={trainer} />
            ))}
          </TrainerList>
        </Main>
        <TopButton />
      </Index>
    </>
  ) : (
    <></>
  );
};

export default Home;
