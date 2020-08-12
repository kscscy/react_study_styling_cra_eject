import React, { Component } from 'react'
import StyledComponent from './StyledComponent';


// import styles from './CSSModule.module.scss'
// import classNames from 'classnames/bind'
// import CSSModule from './CSSModule'
// import SassComponent from './SassComponent'
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     )
//   }
// }

// const cx = classNames.bind(styles); // 미리 styles 에서 클래스를 받아 오도록 설정

// export class App extends Component {
//   render() {
//     return (
//       // <div className={`${styles.wrapper} ${styles.inverted}`}>
//       <div className={cx('wrapper', 'inverted')}>
//         안녕하세요, 저는 <span className="something">CSS Module!!</span>
//       </div>
//     );
//   }
// }

class App extends Component {
  render() {
    return (
      <div>
        <StyledComponent />        
      </div>
    );
  }
}

export default App;