import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; 
//6行的import在reportwebvitals.js有export，由于reportwebvitals.js有default，此处甚至可以把reportwebvitals改成别的名字

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//该函数对应6行的函数，必须和6行import的变量名对应

// 本文件使用reactDOM来连接前端和后端的3000和8080接口，用3和15行的reactDOM和render也可以达到一样的效果