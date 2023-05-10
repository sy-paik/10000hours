import React, { useState } from 'react';
import "./InputSection.css";

export default function InputSection({ onSubmit }) {
  const [fieldValue, setFieldValue] = useState('');
  const [hourValue, setHourValue] = useState('');

  const handleFieldChange = (event) => {
    setFieldValue(event.target.value);
  };

  const handleHourChange = (event) => {
    const value = event.target.value;
    if (value === '' || (Number(value) >= 1 && Number(value) <= 24)) {
      setHourValue(value);
    } else {
      alert('1에서 24까지의 숫자만 입력해주세요.')
    }
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!fieldValue || !hourValue) {
        alert('입력값을 확인해주세요.');
        return;
      }
    onSubmit(fieldValue, hourValue);
  };

  return (
      <form className="input-form" onSubmit={handleSubmit}>
      <p>나는
      <input type="text" placeholder="예)프로그래밍" className="input-field" value={fieldValue}  onChange={handleFieldChange}/>전문가가 될 것이다.</p>
        <p className="training-hour">그래서 앞으로 매일 하루에 <input className="input-hour" type="number" placeholder="예)5" value={hourValue} onChange={handleHourChange}/>시간씩 훈련할 것이다.</p>
        <button className="button-submit" type="submit">
        나는 며칠 동안 훈련을 해야 1만 시간이 될까?
      </button>
      </form>
  );
}
