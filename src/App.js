import React, { useState } from 'react';
import './App.css'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';


function App() {
  const [fieldValue, setFieldValue] = useState('');
  const [hourValue, setHourValue] = useState('');

  return (
    <>
    <Header />
    <Main 
    fieldValue={fieldValue}
    setFieldValue={setFieldValue}
    hourValue={hourValue}
    setHourValue={setHourValue}
    />
    <Footer />
    </>
  );
}
export default App;
