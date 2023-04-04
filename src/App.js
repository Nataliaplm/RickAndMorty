import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AllCharacters from './components/allCharacters/AllCharacters';
import OneCharacter from './components/oneCharacter/OneCharacter';
import RickAndMortyLogo from './RickAndMortyLogo.png'
function App() {
  return (
    <div className="App">
      <img src={RickAndMortyLogo} alt='Logo Rick and morty' className='logo'/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AllCharacters/>}></Route>
          <Route path='/character/:id' element={<OneCharacter/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
