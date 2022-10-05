import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Detail from './components/Detail';
import Contact from './components/Contact';
function App() {
  return (
    <div>
      <Header></Header>
      {/* <Main></Main> */}
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
