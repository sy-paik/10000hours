import React, {useState} from 'react';
import "./OutputSection.css";
import ModalSection from '../ModalSection/ModalSection';

export default function OutputSection({ field, hours }) {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

    const calculateDays = () => {
        const totalHours = parseInt(hours);
        if (totalHours <= 0 || isNaN(totalHours)) return '입력한 시간을 확인해주세요.';
        const requiredDays = Math.ceil(10000 / totalHours);
        return requiredDays;
      };

  return (
  <>
  {field && hours && (
        <section className="output-section">
          <div class="output-form">
            당신은 <strong className="output">{field}</strong> 전문가가 되기 위해서<br />
            대략 <strong className="output">{calculateDays()}</strong> 일 이상 훈련하셔야 합니다!
       </div>
       <div className="button-group">
          <button className="button-training" type="button" onClick={handleShowModal}>
        훈련하러 가기 GO!GO!
      </button>
      <button className="button-share">공유하기</button>
      </div> 
      {showModal && <ModalSection handleCloseModal={handleCloseModal} />}
       </section>
      )}

  </>
  )
}