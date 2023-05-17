import React, { useState } from 'react';
import IntroSection from './IntroSection/IntroSection'
import InputSection from './InputSection/InputSection'
import OutputSection from './OutputSection/OutputSection'
import ModalSection from './ModalSection/ModalSection'

export default function Main() {

const [fieldValue, setFieldValue] = useState('');
const [hourValue, setHourValue] = useState('');
const [showModal, setShowModal] = useState(false);

  const handleFormSubmit = (inputField, inputHour) => {
    setFieldValue(inputField);
    setHourValue(inputHour);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

    return (
        <main>
        <IntroSection />
        <InputSection onSubmit={handleFormSubmit} />
        <OutputSection field={fieldValue} hours={hourValue}
        showModal={showModal} 
        handleShowModal={handleShowModal} />
        {showModal && (
        <ModalSection handleCloseModal={handleCloseModal} />
      )}
        </main>
    )
}