import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const mount = (el, { data }) => {
  const root = ReactDOM.createRoot(el);
  // login props is for demo only
  root.render(<App data={data} />);
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_mfe1-dev-root');

  if (devRoot) {
    mount(devRoot, {});
  }
}

export { mount };
