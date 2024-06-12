import logo from './logo.svg';
import './App.css';
import AddContacts from './components/AddContacts';
import Search from './components/Search';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddContacts/>}/>
      <Route path='/s' element={<Search/>}/>
      <Route path='/v' element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
