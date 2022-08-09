import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import Common from './component/Common';
import Functional from './component/Functional'
import Class from './component/Class'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='back'>
    <Common/>
    </div>
);

