import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Home from './pages/home/Home';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Home />
    {/* <App/> */}
  </React.StrictMode>
);

// const Index = () => {
//   return (
//     <Fragment>
//       {/* <head>
//         <link rel="stylesheet" href="/css/demos/demo-1-colors.css" />

//       </head> */}
//       <body>
//               <Home></Home>
//       </body>
//     </Fragment>

//   );
// };

// export default Index;
reportWebVitals();
