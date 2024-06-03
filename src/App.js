import './App.css';
import Sidebar from './components/Sidebar/Sidebar.tsx';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Admin from './pages/Admin.tsx'
import Static from './pages/Static.tsx'
import Article from './pages/Article.tsx'
import PD from './pages/PD.tsx'
import Categories from './pages/Categories.tsx'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Sidebar/>
        <Routes>
          <Route path='/static' element={<Static/>}></Route>
          <Route path='/admin' element={<Admin/>}></Route>
          <Route path='/article' element={<Article/>}></Route>
          <Route path='/pd' element={<PD/>}></Route>
          <Route path='/categories' element={<Categories/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
      
}

export default App;
