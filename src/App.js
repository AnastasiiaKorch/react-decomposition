import React from 'react';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { dataBody } from './data/dataBody';
import { dataFooter } from './data/dataFooter';
import { dataHeader } from './data/dataHeader'

function App() {
  return (
      <div className='page container'>
        <Header dataHeader={dataHeader} />
        <Body dataBody={dataBody}/>
        <Footer dataFooter={dataFooter}/>
      </div>
  )
}

export default App;