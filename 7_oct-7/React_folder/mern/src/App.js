// import logo from './logo.svg';
import './App.css';

import Gallery from './childcomp';
import {Profile} from './childcomp';


// function App() {
//   return (
//     <div className="App">
//       number h bhai
//          </div>
//   );
// }

// export default App:

// function Profile() {
//   return (
//     <img
//       src="https://i.imgur.com/MK3eW3As.jpg"
//       alt="Katherine Johnson"
//     />
//   );
// }

export default function App() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Gallery/>
      
    </section>
  );
}
