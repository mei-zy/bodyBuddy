import StepHeader from '@components/layout/signUp/stepHeader';

const Step1 = () => {
  return (
    <>
      <StepHeader
        mainAgent={'trainer'}
        titleStageNumber={1}
        subTitleStageComment={'트레이너님에 대해 알려주세요!'}
      />
      <div>
        <label>종목 및 분야</label>
      </div>
      <div>
        <label>프로필 사진</label>
        <span> 트레이너님을 대표할 수 있는 사진을 업로드 해주세요 (최대 3장)</span>
      </div>
      <div>
        <label>프로필 코멘트</label>
        <span>최대 20자를 초과했습니다!</span>
        <textarea></textarea>
      </div>
    </>
  );
};

export default Step1;