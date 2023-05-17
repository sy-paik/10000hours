import React from 'react';
import "./ModalSection.css";
import ModalImage from '../../../images/licat.png'

export default function ModalSection( {handleCloseModal} ) {
  return (
    <>
        <article className="modal">
          <div className="modal-wrap">
            <strong className="modal-title">화이팅!!♥♥♥</strong>
            <p>당신의 꿈을 응원합니다!</p>
            <img src={ModalImage} alt="모달 이미지" />
            <button className="modal-close" onClick={handleCloseModal}>
              종료하고 진짜 훈련하러 가기 GO!GO!
            </button>
            <p className="modal-close-text">(그냥 닫기 버튼입니다.)</p>
          </div>
        </article>
    </>
  );
}
