import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Chat from './Chat';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Chat />
  </StrictMode>
);