// // import React from 'react';

// import React, { useEffect, useState } from 'react';
// // import 'App.scss';

// function App() {
//   const [parent, setParent] = useState('');
//   const [data, setData] = useState({
//     path: "",
//     files: []
//   });

//   useEffect(() => {
//     fetch("http://localhost:8000/")
//       .then(res => res.json())
//       .then(
//         (result) => {
//           setParent('');
//           setData(result);
//         },
//         (error) => {

//         }
//       )
//   }, []);

//   const clickHandler = event => {
//     event.preventDefault();
//     // console.log(event.target.attributes.href.value);
//     fetch("http://localhost:8000/?path=" + event.target.attributes.href.value)
//       .then(res => res.json())
//       .then(
//         (result) => {
//           let linkArr = result.path.split('/')
//           console.log(linkArr);
//           linkArr.pop();
//           setParent(linkArr.join('/'));
//           setData(result);
//         },
//         (error) => {

//         }
//       );
//   }

//   return (
//     <div className='file-manager'>

//       <div> 
//         <a href={parent} onClick={clickHandler}>LEVEL UP</a>
//       </div>
//       <div className='current-level'>
//         current: {data.path === '' ? '/' : data.path}
//       </div>

//       <ul className='folder-list'>
//         {data.files.map(item => {
//           if (item.dir) {
//             return <li className='folder' key={item.name}>
//               <a href={data.path + '/' + item.name} onClick={clickHandler}>
//                 {item.name.toUpperCase()}

//               </a>
//             </li>
//           }
//           else {
//             return <li key={item.name} className='file'>{item.name}</li>
//           }
//         })}
//       </ul>

//     </div >

//   );
// }

// export default App;
import React, { useEffect, useState } from 'react';
import { MainPage } from "./pages/MainPage/MainPage";
import { LogInPage } from "./pages/LogInPage/LogInPage";
import { CommunityPage } from "./pages/CommunityPage/CommunityPage"
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage"
import { EstatePage } from "./pages/EstatePage/EstatePage"
import { TryPage } from "./pages/TryPage/TryPage"
import { ProplyPage } from "./pages/ProplyPage/ProplyPage"
import { ProfilePage} from "./pages/ProfilePage/ProfilePage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import './../src/App.scss';

export class App extends React.Component {
  render() {
    return (
      <>
      <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/main" element={<MainPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/reg" element={<RegistrationPage />} />
            <Route path="/houses" element={<EstatePage />} />
            <Route path="/try" element={<TryPage />} />
            <Route path="/profile" element={<ProfilePage/>} />
            <Route path="/proply" element={<ProplyPage />} />
            <Route path="*" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}


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

// export default App;
